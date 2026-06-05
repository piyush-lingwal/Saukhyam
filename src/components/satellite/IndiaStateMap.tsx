import styles from './IndiaStateMap.module.css';

export type HighlightState =
  | 'madhya-pradesh'
  | 'maharashtra'
  | 'odisha'
  | 'uttarakhand'
  | 'telangana'
  | 'haryana';

type IndiaStateMapProps = {
  highlight: HighlightState;
  className?: string;
};

const GREY = '#e5e7eb';
const GREY_STROKE = '#d1d5db';
const GREEN = '#15803d';
const GREEN_LIGHT = '#22c55e';

/** Simplified India silhouette with approximate state regions */
export default function IndiaStateMap({ highlight, className }: IndiaStateMapProps) {
  const fill = (state: HighlightState) => (highlight === state ? GREEN : GREY);

  return (
    <svg
      className={`${styles.map} ${className ?? ''}`}
      viewBox="0 0 320 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      {/* India base silhouette */}
      <path
        d="M88 28 L138 22 L198 32 L248 52 L278 82 L292 118 L288 158 L276 198 L258 242 L228 282 L188 318 L142 338 L98 332 L68 302 L48 258 L38 210 L36 162 L42 118 L58 78 L72 48 Z"
        fill={GREY}
        stroke={GREY_STROKE}
        strokeWidth="1.2"
      />

      {/* Haryana / Delhi region */}
      <path
        d="M118 72 L152 68 L162 92 L148 108 L118 104 L108 86 Z"
        fill={fill('haryana')}
        stroke={highlight === 'haryana' ? GREEN_LIGHT : GREY_STROKE}
        strokeWidth={highlight === 'haryana' ? 1.2 : 0.8}
      />

      {/* Uttarakhand */}
      <path
        d="M152 68 L188 62 L198 88 L182 108 L158 104 L148 86 Z"
        fill={fill('uttarakhand')}
        stroke={highlight === 'uttarakhand' ? GREEN_LIGHT : GREY_STROKE}
        strokeWidth={highlight === 'uttarakhand' ? 1.2 : 0.8}
      />

      {/* Madhya Pradesh */}
      <path
        d="M128 128 L178 122 L192 158 L186 198 L158 212 L122 202 L112 168 Z"
        fill={fill('madhya-pradesh')}
        stroke={highlight === 'madhya-pradesh' ? GREEN_LIGHT : GREY_STROKE}
        strokeWidth={highlight === 'madhya-pradesh' ? 1.2 : 0.8}
      />

      {/* Maharashtra */}
      <path
        d="M98 198 L138 188 L148 228 L132 268 L98 262 L82 228 Z"
        fill={fill('maharashtra')}
        stroke={highlight === 'maharashtra' ? GREEN_LIGHT : GREY_STROKE}
        strokeWidth={highlight === 'maharashtra' ? 1.2 : 0.8}
      />

      {/* Telangana / Telangana-AP region */}
      <path
        d="M148 228 L188 218 L198 252 L182 278 L152 272 L142 248 Z"
        fill={fill('telangana')}
        stroke={highlight === 'telangana' ? GREEN_LIGHT : GREY_STROKE}
        strokeWidth={highlight === 'telangana' ? 1.2 : 0.8}
      />

      {/* Odisha / East */}
      <path
        d="M198 158 L238 148 L252 182 L242 218 L208 228 L192 198 Z"
        fill={fill('odisha')}
        stroke={highlight === 'odisha' ? GREEN_LIGHT : GREY_STROKE}
        strokeWidth={highlight === 'odisha' ? 1.2 : 0.8}
      />

      {/* Kerala hub marker */}
      <circle cx="108" cy="302" r="5" fill={GREEN} opacity="0.9" />
      <circle cx="108" cy="302" r="8" fill={GREEN} opacity="0.2" />
    </svg>
  );
}
