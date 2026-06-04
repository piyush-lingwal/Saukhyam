'use client';

import { useRef, useLayoutEffect, useState, useMemo, useCallback, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INDIA_LOCATIONS } from '@/data/states/indiaMapGeometry';
import {
  districtToSvg,
  viewBoxToString,
  svgPointToCanvasPercent,
  type ViewBoxRect,
} from '@/data/states/stateMapProjection';
import type { DistrictNode } from '@/data/states/experienceData';
import s from './stateExperience.module.css';

/** Tune pin sizes — scale multiplies all marker CSS variables */
export type DistrictMarkerScale = 'xs' | 'sm' | 'md';

const MARKER_SCALE_CLASS: Record<DistrictMarkerScale, string> = {
  xs: s.districtCanvasMarkersXs,
  sm: s.districtCanvasMarkersSm,
  md: s.districtCanvasMarkersMd,
};

interface Props {
  svgId: string;
  stateName: string;
  districts: DistrictNode[];
  /** Pin size preset (default: xs) */
  markerScale?: DistrictMarkerScale;
  /** Fine-tune all pin radii & label size (1 = preset default) */
  markerSizeMultiplier?: number;
}

export default function StateDistrictMap({
  svgId,
  stateName,
  districts,
  markerScale = 'xs',
  markerSizeMultiplier = 1,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [stateViewBox, setStateViewBox] = useState<ViewBoxRect | null>(null);
  const [district, setDistrict] = useState<DistrictNode | null>(null);
  const [popupPos, setPopupPos] = useState<{ left: number; top: number } | null>(null);

  const location = INDIA_LOCATIONS.find(l => l.id === svgId);

  const markerStyle = useMemo((): CSSProperties | undefined => {
    if (markerSizeMultiplier === 1) return undefined;
    return { '--marker-size-mult': String(markerSizeMultiplier) } as CSSProperties;
  }, [markerSizeMultiplier]);

  useLayoutEffect(() => {
    if (!pathRef.current) return;
    const bb = pathRef.current.getBBox();
    const pad = Math.max(bb.width, bb.height) * 0.05;
    setStateViewBox({
      x: bb.x - pad,
      y: bb.y - pad,
      w: bb.width + pad * 2,
      h: bb.height + pad * 2,
    });
  }, [svgId, location?.path]);

  const markerPoints = useMemo(() => {
    if (!stateViewBox) return [];
    return districts.map(d => ({
      district: d,
      ...districtToSvg(d, stateViewBox),
    }));
  }, [districts, stateViewBox]);

  const updatePopup = useCallback((d: DistrictNode, x: number, y: number) => {
    setDistrict(d);
    if (svgRef.current) {
      setPopupPos(svgPointToCanvasPercent(svgRef.current, x, y));
    }
  }, []);

  const viewBoxStr = stateViewBox ? viewBoxToString(stateViewBox) : '0 0 612 696';

  return (
    <div className={s.districtMap}>
      <div
        className={`${s.districtCanvas} ${MARKER_SCALE_CLASS[markerScale]}`}
        style={markerStyle}
      >
        {location ? (
          <svg
            ref={svgRef}
            className={s.districtStateSvg}
            viewBox={viewBoxStr}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={`Map of ${stateName} showing programme districts`}
          >
            <path
              ref={pathRef}
              d={location.path}
              className={s.districtStateShape}
            />
            {markerPoints.map(({ district: d, x, y }, i) => {
              const active = district?.name === d.name;
              return (
                <g
                  key={d.name}
                  className={`${s.districtMarker} ${active ? s.districtMarkerActive : ''}`}
                  transform={`translate(${x}, ${y})`}
                  onMouseEnter={() => updatePopup(d, x, y)}
                  onFocus={() => updatePopup(d, x, y)}
                  onClick={() => updatePopup(d, x, y)}
                  role="button"
                  tabIndex={0}
                  aria-label={d.note ?? d.name}
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <circle className={s.districtMarkerHalo} />
                  <circle className={s.districtMarkerPulse} />
                  <circle className={s.districtMarkerDot} />
                  <text
                    className={s.districtMarkerLabel}
                    x={d.labelDx ?? 0}
                    {...(d.labelDy != null ? { y: d.labelDy } : {})}
                    textAnchor={d.labelAnchor ?? 'middle'}
                  >
                    {d.name}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          <div className={s.districtAura} aria-hidden />
        )}

        <AnimatePresence>
          {district && popupPos && (
            <motion.div
              key={district.name}
              className={s.districtPopup}
              style={{ left: `${popupPos.left}%`, top: `${popupPos.top}%` }}
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.18 }}
            >
              <strong>{district.name}</strong>
              {district.note && <span>{district.note}</span>}
              {district.womenReached != null && (
                <span>{district.womenReached.toLocaleString('en-IN')} women reached</span>
              )}
              {district.programs != null && (
                <span>{district.programs} programs conducted</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
