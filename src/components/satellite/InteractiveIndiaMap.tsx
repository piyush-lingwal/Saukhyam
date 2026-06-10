'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  INDIA_MAP_DATA_URL,
  type IndiaMapState,
  type IndiaStateId,
} from './indiaMapTypes';
import {
  DEFAULT_GREY,
  FEATURED_STATE_IDS,
  PANEL_INTRO,
  STATE_COLORS,
  STATE_SECTIONS,
  type FeaturedStateId,
  isFeaturedState,
} from './satelliteStateContent';
import styles from './InteractiveIndiaMap.module.css';

type MapData = {
  viewBox: { width: number; height: number };
  keralaHub: { cx: number; cy: number };
  states: IndiaMapState[];
};

function getStateFill(
  id: IndiaStateId,
  active: FeaturedStateId | null,
  hovered: IndiaStateId | null,
): string {
  if (!isFeaturedState(id)) return DEFAULT_GREY;
  const base = STATE_COLORS[id];
  if (active === id) return base;
  if (hovered === id) return base;
  return base;
}

export default function InteractiveIndiaMap() {
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [active, setActive] = useState<FeaturedStateId>('madhya-pradesh');
  const [hovered, setHovered] = useState<IndiaStateId | null>(null);
  const sectionRefs = useRef<Partial<Record<FeaturedStateId, HTMLDivElement | null>>>({});
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(INDIA_MAP_DATA_URL)
      .then((res) => res.json())
      .then((data: MapData) => setMapData(data))
      .catch(console.error);
  }, []);

  const handleStateClick = (id: IndiaStateId) => {
    if (!isFeaturedState(id)) return;
    setActive(id);
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      section.focus({ preventScroll: true });
    }
  };

  const handleSectionClick = (id: FeaturedStateId) => {
    setActive(id);
  };

  if (!mapData) {
    return <div className={styles.mapLoading}>Loading map…</div>;
  }

  const { viewBox, states } = mapData;
  const hoveredState = hovered ? states.find((s) => s.id === hovered) : null;

  return (
    <div className={styles.mapLayout}>
      <motion.div
        className={styles.mapColumn}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.mapShell}>
          <svg
            className={styles.mapSvg}
            viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
            role="img"
            aria-label="Interactive map of India showing Saukhyam satellite production centres"
          >
            {states.map((state) => {
              const featured = isFeaturedState(state.id);
              const isActive = active === state.id;
              const isHovered = hovered === state.id;

              return (
                <path
                  key={state.id}
                  d={state.d}
                  fill={getStateFill(state.id, active, hovered)}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth={isActive ? 1.5 : 1}
                  className={[
                    styles.statePath,
                    featured ? styles.stateFeatured : '',
                    isActive ? styles.stateActive : '',
                    isHovered ? styles.stateHovered : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={
                    isActive && isFeaturedState(state.id)
                      ? { filter: `drop-shadow(0 0 6px ${STATE_COLORS[state.id]}88)` }
                      : undefined
                  }
                  onMouseEnter={() => setHovered(state.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => handleStateClick(state.id)}
                  role={featured ? 'button' : undefined}
                  aria-label={state.name}
                  aria-pressed={featured ? isActive : undefined}
                  tabIndex={featured ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (featured && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleStateClick(state.id);
                    }
                  }}
                />
              );
            })}
          </svg>

          {hoveredState && (
            <div
              className={styles.tooltip}
              style={{
                left: `${(hoveredState.cx / viewBox.width) * 100}%`,
                top: `${(hoveredState.cy / viewBox.height) * 100}%`,
              }}
              role="tooltip"
            >
              {hoveredState.name}
            </div>
          )}
        </div>

        <div className={styles.legend} aria-label="Map legend">
          {FEATURED_STATE_IDS.map((id) => {
            const section = STATE_SECTIONS.find((s) => s.id === id);
            return (
              <button
                key={id}
                type="button"
                className={`${styles.legendItem} ${active === id ? styles.legendItemActive : ''}`}
                onClick={() => handleStateClick(id)}
              >
                <span
                  className={styles.legendDot}
                  style={{ background: STATE_COLORS[id] }}
                />
                {section?.name}
              </button>
            );
          })}
          <span className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.legendOther}`} />
            Other States
          </span>
        </div>
      </motion.div>

      <div className={styles.panelColumn} ref={panelRef}>
        <motion.div
          className={styles.infoPanel}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <header className={styles.panelHeader}>
            <h2 className={styles.panelHeading}>{PANEL_INTRO.heading}</h2>
            <p className={styles.panelSubtitle}>{PANEL_INTRO.subtitle}</p>
          </header>

          <div className={styles.sections}>
            {STATE_SECTIONS.map((section) => {
              const isActive = active === section.id;
              const color = STATE_COLORS[section.id];

              return (
                <motion.div
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  id={`state-section-${section.id}`}
                  className={`${styles.stateSection} ${isActive ? styles.stateSectionActive : ''}`}
                  style={
                    isActive
                      ? ({
                          '--state-accent': color,
                        } as CSSProperties)
                      : undefined
                  }
                  onClick={() => handleSectionClick(section.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSectionClick(section.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-current={isActive ? 'true' : undefined}
                  layout
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.stateSectionHeader}>
                    <span
                      className={styles.stateSectionDot}
                      style={{ background: color }}
                      aria-hidden="true"
                    />
                    <h3 className={styles.stateSectionTitle}>{section.name}</h3>
                  </div>
                  <motion.p
                    className={styles.stateSectionDesc}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0.85 }}
                    transition={{ duration: 0.25 }}
                  >
                    {section.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
