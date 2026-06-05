'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  INDIA_MAP_DATA_URL,
  type IndiaMapState,
  type IndiaStateId,
} from './indiaMapTypes';
import {
  DEFAULT_GREY,
  FEATURED_STATE_IDS,
  HIGHLIGHT_GREEN,
  STATE_SECTIONS,
  getStateCaption,
  type FeaturedStateId,
  isFeaturedState,
} from './satelliteStateContent';
import styles from './InteractiveIndiaMap.module.css';

type MapData = {
  viewBox: { width: number; height: number };
  keralaHub: { cx: number; cy: number };
  states: IndiaMapState[];
};

function getStateFill(id: IndiaStateId, active: FeaturedStateId): string {
  return id === active ? HIGHLIGHT_GREEN : DEFAULT_GREY;
}

export default function InteractiveIndiaMap() {
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [active, setActive] = useState<FeaturedStateId>('madhya-pradesh');
  const [hovered, setHovered] = useState<IndiaStateId | null>(null);
  const sectionRefs = useRef<Partial<Record<FeaturedStateId, HTMLDivElement | null>>>({});

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
  const activeSection = STATE_SECTIONS.find((s) => s.id === active);

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
            aria-label={`Map of India highlighting ${activeSection?.name ?? 'a satellite production centre'}`}
          >
            {states.map((state) => {
              const featured = isFeaturedState(state.id);
              const isActive = active === state.id;
              const isHovered = hovered === state.id;

              return (
                <path
                  key={state.id}
                  d={state.d}
                  fill={getStateFill(state.id, active)}
                  stroke="#ffffff"
                  strokeWidth={1}
                  className={[
                    styles.statePath,
                    featured ? styles.stateFeatured : '',
                    isActive ? styles.stateActive : '',
                    isHovered ? styles.stateHovered : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
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

        <AnimatePresence mode="wait">
          <motion.figcaption
            key={active}
            className={styles.mapCaption}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {getStateCaption(active)}
          </motion.figcaption>
        </AnimatePresence>

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
                <span className={`${styles.legendDot} ${styles.legendHighlight}`} />
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

      <div className={styles.panelColumn}>
        <motion.div
          className={styles.infoPanel}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className={styles.sections}>
            {STATE_SECTIONS.map((section) => {
              const isActive = active === section.id;

              return (
                <motion.div
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id] = el;
                  }}
                  id={`state-section-${section.id}`}
                  className={`${styles.stateSection} ${isActive ? styles.stateSectionActive : ''}`}
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
                  <h3 className={styles.stateSectionTitle}>{section.name}</h3>
                  <motion.p
                    className={styles.stateSectionDesc}
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0.88 }}
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
