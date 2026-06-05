'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  HUB_POSITION,
  hubInfo,
  stateInfoList,
  statePaths,
  indiaSilhouette,
  type MapStateId,
  type StateInfo,
} from './indiaMapData';
import styles from './InteractiveIndiaNetworkMap.module.css';

const GREY = '#9CA3AF';
const GREY_STROKE = '#6B7280';
const SATELLITE = '#2E7D32';
const SATELLITE_BRIGHT = '#43A047';
const HUB_DARK = '#1B5E20';

function getStateInfo(id: MapStateId): StateInfo {
  if (id === 'kerala') return hubInfo;
  return stateInfoList.find((s) => s.id === id) ?? stateInfoList[0];
}

function connectionPath(hub: { x: number; y: number }, target: { x: number; y: number }) {
  const midX = (hub.x + target.x) / 2;
  const midY = (hub.y + target.y) / 2 - 30;
  return `M ${hub.x} ${hub.y} Q ${midX} ${midY} ${target.x} ${target.y}`;
}

type InteractiveIndiaNetworkMapProps = {
  defaultState?: MapStateId;
};

export default function InteractiveIndiaNetworkMap({
  defaultState = 'madhya-pradesh',
}: InteractiveIndiaNetworkMapProps) {
  const [activeId, setActiveId] = useState<MapStateId>(defaultState);
  const [hoveredId, setHoveredId] = useState<MapStateId | null>(null);

  const displayId = hoveredId ?? activeId;
  const info = getStateInfo(displayId);
  const isHub = displayId === 'kerala';

  const getStateFill = (id: MapStateId) => {
    if (id === 'kerala') return HUB_DARK;
    const isActive = displayId === id;
    return isActive ? SATELLITE_BRIGHT : SATELLITE;
  };

  const getStateOpacity = (id: MapStateId) => {
    if (id === 'kerala') return 1;
    if (displayId === id) return 1;
    return 0.82;
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.mapCol}
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.mapShell}>
          <svg
            className={styles.mapSvg}
            viewBox="0 0 400 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
              <linearGradient id="hubPulse" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E7D32" />
                <stop offset="100%" stopColor="#1B5E20" />
              </linearGradient>
            </defs>

            {/* Base India */}
            <path
              d={indiaSilhouette}
              fill={GREY}
              stroke={GREY_STROKE}
              strokeWidth="1"
              opacity="0.55"
            />

            {/* Connection lines from hub to satellites */}
            <g className={styles.connections} aria-hidden="true">
              {stateInfoList.map((state, index) => (
                <motion.path
                  key={`line-${state.id}`}
                  d={connectionPath(HUB_POSITION, state.centroid)}
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  opacity={displayId === state.id || displayId === 'kerala' ? 0.7 : 0.25}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: displayId === state.id ? 0.7 : 0.25 }}
                  viewport={{ once: true }}
                  transition={{
                    pathLength: { duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.3 },
                  }}
                />
              ))}
            </g>

            {/* Satellite & hub state regions */}
            {stateInfoList.map((state) => (
              <path
                key={state.id}
                id={state.id}
                d={statePaths[state.id]}
                fill={getStateFill(state.id)}
                stroke={displayId === state.id ? '#66BB6A' : '#1B5E20'}
                strokeWidth={displayId === state.id ? 2 : 1}
                opacity={getStateOpacity(state.id)}
                filter={displayId === state.id ? 'url(#stateGlow)' : undefined}
                className={styles.statePath}
                onMouseEnter={() => setHoveredId(state.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(state.id)}
                onFocus={() => setHoveredId(state.id)}
                onBlur={() => setHoveredId(null)}
                tabIndex={0}
                role="button"
                aria-label={`${state.state}, ${state.district}`}
                aria-pressed={activeId === state.id}
              />
            ))}

            {/* Kerala hub */}
            <path
              id="kerala"
              d={statePaths.kerala}
              fill={HUB_DARK}
              stroke="#0D3B14"
              strokeWidth={displayId === 'kerala' ? 2 : 1.2}
              filter={displayId === 'kerala' ? 'url(#stateGlow)' : undefined}
              className={styles.statePath}
              onMouseEnter={() => setHoveredId('kerala')}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveId('kerala')}
              tabIndex={0}
              role="button"
              aria-label="Manufacturing Hub, Kuzhithura, Kerala"
              aria-pressed={activeId === 'kerala'}
            />

            {/* Pulsing hub marker */}
            <g transform={`translate(${HUB_POSITION.x}, ${HUB_POSITION.y})`} aria-hidden="true">
              <circle r="14" fill="#2E7D32" opacity="0.2" className={styles.pulseRing} />
              <circle r="9" fill="#2E7D32" opacity="0.35" className={styles.pulseRingDelayed} />
              <circle r="5" fill="url(#hubPulse)" />
            </g>

            {/* Hub label */}
            <g transform={`translate(${HUB_POSITION.x + 12}, ${HUB_POSITION.y - 8})`}>
              <rect
                x="0"
                y="0"
                width="118"
                height="36"
                rx="8"
                fill="rgba(255,255,255,0.92)"
                stroke="#2E7D32"
                strokeWidth="1"
              />
              <text x="10" y="14" className={styles.hubLabelTitle}>
                Hub
              </text>
              <text x="10" y="28" className={styles.hubLabelSub}>
                Kuzhithura, Kerala
              </text>
            </g>
          </svg>

          <div className={styles.legend} aria-label="Map legend">
            <div className={styles.legendItem}>
              <span className={styles.legendSwatchSatellite} />
              <span>Satellite Production Centre</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendSwatchHub} />
              <span>Manufacturing Hub</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendSwatchGrey} />
              <span>Other States</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.panelCol}
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.infoPanel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={displayId}
              className={styles.infoContent}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {isHub && (
                <span className={styles.infoBadge}>Manufacturing Hub</span>
              )}
              <h3 className={styles.infoState}>{info.state}</h3>
              <p className={styles.infoDistrict}>{info.district}</p>
              <p className={styles.infoDesc}>{info.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.statePicker}>
            <p className={styles.pickerLabel}>Explore regions</p>
            <div className={styles.pickerList}>
              <button
                type="button"
                className={`${styles.pickerBtn} ${activeId === 'kerala' ? styles.pickerBtnActive : ''}`}
                onClick={() => setActiveId('kerala')}
              >
                Hub · Kerala
              </button>
              {stateInfoList.map((state) => (
                <button
                  key={state.id}
                  type="button"
                  className={`${styles.pickerBtn} ${activeId === state.id ? styles.pickerBtnActive : ''}`}
                  onClick={() => setActiveId(state.id)}
                  onMouseEnter={() => setHoveredId(state.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {state.state}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
