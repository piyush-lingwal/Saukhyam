import type { DistrictNode } from './experienceData';

/** Projection bounds calibrated for @svg-maps/india (612×696 viewBox) */
export const INDIA_MAP_BOUNDS = {
  minLng: 68.2,
  maxLng: 97.2,
  minLat: 7.5,
  maxLat: 37.2,
} as const;

export const INDIA_MAP_SIZE = { width: 612, height: 696 } as const;

export interface ViewBoxRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function latLngToIndiaSvg(lat: number, lng: number): { x: number; y: number } {
  const { minLng, maxLng, minLat, maxLat } = INDIA_MAP_BOUNDS;
  const { width, height } = INDIA_MAP_SIZE;
  return {
    x: ((lng - minLng) / (maxLng - minLng)) * width,
    y: ((maxLat - lat) / (maxLat - minLat)) * height,
  };
}

export function parseViewBox(viewBox: string): ViewBoxRect {
  const [x, y, w, h] = viewBox.split(/\s+/).map(Number);
  return { x, y, w, h };
}

export function viewBoxToString(vb: ViewBoxRect): string {
  return `${vb.x} ${vb.y} ${vb.w} ${vb.h}`;
}

/** Resolve a district pin to India-map SVG coordinates */
export function districtToSvg(
  district: DistrictNode,
  stateViewBox: ViewBoxRect,
): { x: number; y: number } {
  if (district.lat != null && district.lng != null) {
    return latLngToIndiaSvg(district.lat, district.lng);
  }
  /* Legacy slot positions (0–100) mapped into the cropped state viewBox */
  return {
    x: stateViewBox.x + (district.x / 100) * stateViewBox.w,
    y: stateViewBox.y + (district.y / 100) * stateViewBox.h,
  };
}

export function svgPointToCanvasPercent(
  svg: SVGSVGElement,
  x: number,
  y: number,
): { left: number; top: number } {
  const pt = svg.createSVGPoint();
  pt.x = x;
  pt.y = y;
  const ctm = svg.getScreenCTM();
  const canvas = svg.parentElement;
  if (!ctm || !canvas) return { left: 50, top: 50 };
  const screen = pt.matrixTransform(ctm);
  const canvasRect = canvas.getBoundingClientRect();
  return {
    left: ((screen.x - canvasRect.left) / canvasRect.width) * 100,
    top: ((screen.y - canvasRect.top) / canvasRect.height) * 100,
  };
}
