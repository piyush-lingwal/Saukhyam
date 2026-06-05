'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  INDIA_MAP_DATA_URL,
  SATELLITE_STATE_IDS,
  type IndiaMapState,
  type IndiaStateId,
  type SatelliteStateId,
} from './indiaMapTypes';
import {
  KERALA_HUB_CONTENT,
  SATELLITE_STATE_CONTENT,
  isSatelliteState,
} from './satelliteStateContent';
import styles from './InteractiveIndiaMap.module.css';

const DEFAULT_GREY = '#9CA3AF';
const SATELLITE_GREEN = '#2E7D32';
const HUB_GREEN = '#14532D';
const HOVER_GREEN = '#43A047';
const ACTIVE_GREEN = '#1B5E20';
const CONNECTION_COLOR = 'rgba(46,125,50,0.35)';

type MapData = {
  viewBox: { width: number; height: number };
  keralaHub: { cx: number; cy: number };
  states: IndiaMapState[];
};

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const cx = mx - dy * 0.18;
  const cy = my + dx * 0.18;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function getStateFill(
  id: IndiaStateId,
  selected: IndiaStateId | null,
  hovered: IndiaStateId | null,
): string {
  if (id === 'kerala') return HUB_GREEN;
  if (isSatelliteState(id)) {
    if (selected === id) return ACTIVE_GREEN;
    if (hovered === id) return HOVER_GREEN;
    return SATELLITE_GREEN;
  }
  return DEFAULT_GREY;
}

function StateInfoPanel({ stateId }: { stateId: IndiaStateId }) {
  const info =
    stateId === 'kerala'
      ? KERALA_HUB_CONTENT
      : isSatelliteState(stateId)
        ? SATELLITE_STATE_CONTENT[stateId]
        : null;

  if (!info) return null;

  return (
    <motion.div
      key={stateId}
      className={styles.infoPanel}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className={styles.infoState}>{info.state}</h3>
      <p className={styles.infoDistrict}>{info.district}</p>
      <p className={styles.infoDesc}>{info.description}</p>
    </motion.div>
  );
}

export default function InteractiveIndiaMap() {
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [selected, setSelected] = useState<IndiaStateId>('madhya-pradesh');
  const [hovered, setHovered] = useState<IndiaStateId | null>(null);

  useEffect(() => {
    fetch(INDIA_MAP_DATA_URL)
      .then((res) => res.json())
      .then((data: MapData) => setMapData(data))
      .catch(console.error);
  }, []);

  const connections = useMemo(() => {
    if (!mapData) return [];
    const hub = mapData.keralaHub;
    return SATELLITE_STATE_IDS.map((id) => {
      const state = mapData.states.find((s) => s.id === id);
      if (!state) return null;
      return {
        id,
        d: curvePath(hub.cx, hub.cy, state.cx, state.cy),
      };
    }).filter(Boolean) as { id: SatelliteStateId; d: string }[];
  }, [mapData]);

  if (!mapData) {
    return <div className={styles.mapLoading}>Loading map…</div>;
  }

  const { viewBox, keralaHub, states } = mapData;
  const hubLeft = `${(keralaHub.cx / viewBox.width) * 100}%`;
  const hubTop = `${(keralaHub.cy / viewBox.height) * 100}%`;

  return (
    <div className={styles.mapLayout}>
      <motion.div
        className={styles.mapColumn}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.mapShell}>
          <motion.div
            className={styles.floatNode1}
            aria-hidden="true"
            animate={{ y: [0, -10, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.floatNode2}
            aria-hidden="true"
            animate={{ y: [0, 12, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          <svg
            className={styles.mapSvg}
            viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
            role="img"
            aria-label="Interactive map of India showing Saukhyam satellite production centres"
          >
            <defs>
              <filter id="stateGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection network */}
            <g className={styles.connections} aria-hidden="true">
              {connections.map((conn, index) => (
                <g key={conn.id}>
                  <path
                    d={conn.d}
                    fill="none"
                    stroke={CONNECTION_COLOR}
                    strokeWidth="2"
                    strokeDasharray="6 6"
                  />
                  <circle r="4" fill={SATELLITE_GREEN}>
                    <animateMotion
                      dur={`${3.2 + index * 0.35}s`}
                      repeatCount="indefinite"
                      path={conn.d}
                    />
                  </circle>
                </g>
              ))}
            </g>

            {/* State paths */}
            {states.map((state) => {
              const interactive = state.id === 'kerala' || isSatelliteState(state.id);
              const isActive = selected === state.id;
              const isHovered = hovered === state.id;

              return (
                <path
                  key={state.id}
                  id={state.id}
                  d={state.d}
                  fill={getStateFill(state.id, selected, hovered)}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={1}
                  className={`${styles.statePath} ${interactive ? styles.stateInteractive : ''} ${isActive ? styles.stateActive : ''} ${isHovered ? styles.stateHovered : ''}`}
                  style={isActive || isHovered ? { filter: 'url(#stateGlow)' } : undefined}
                  onMouseEnter={() => interactive && setHovered(state.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => interactive && setSelected(state.id)}
                  role={interactive ? 'button' : undefined}
                  aria-label={interactive ? `${state.name}${state.id === 'kerala' ? ' manufacturing hub' : ' satellite centre'}` : state.name}
                  tabIndex={interactive ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (interactive && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      setSelected(state.id);
                    }
                  }}
                />
              );
            })}

            {/* Kerala hub pulse */}
            <circle
              cx={keralaHub.cx}
              cy={keralaHub.cy}
              r="14"
              fill={HUB_GREEN}
              opacity="0.15"
              className={styles.hubPulse}
            />
            <circle
              cx={keralaHub.cx}
              cy={keralaHub.cy}
              r="8"
              fill={HUB_GREEN}
              opacity="0.35"
              className={styles.hubPulse2}
            />
            <circle cx={keralaHub.cx} cy={keralaHub.cy} r="5" fill={HUB_GREEN} />
          </svg>

          <div
            className={styles.hubBadge}
            style={{ left: hubLeft, top: hubTop }}
          >
            <span className={styles.hubBadgeTitle}>Manufacturing Hub</span>
            <span className={styles.hubBadgeLocation}>Kuzhithura, Kerala</span>
          </div>
        </div>

        <div className={styles.legend} aria-label="Map legend">
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendSatellite}`} />
            Satellite Production Centre
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendHub}`} />
            Manufacturing Hub
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendOther}`} />
            Other States
          </div>
        </div>
      </motion.div>

      <div className={styles.panelColumn}>
        <AnimatePresence mode="wait">
          <StateInfoPanel stateId={selected} />
        </AnimatePresence>
      </div>
    </div>
  );
}
