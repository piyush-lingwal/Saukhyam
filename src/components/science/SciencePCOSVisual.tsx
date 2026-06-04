'use client';

import styles from './SciencePCOSVisual.module.css';

export default function SciencePCOSVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.softGlow} />
      <svg viewBox="0 0 320 360" fill="none" className={styles.svg}>
        <defs>
          <linearGradient id="hormoneGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6FA67A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#223A5E" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <g className={styles.float}>
          <circle cx="160" cy="80" r="24" stroke="url(#hormoneGrad)" strokeWidth="1.5" fill="rgba(111,166,122,0.1)" />
          <circle cx="100" cy="140" r="16" stroke="#223A5E" strokeWidth="1" fill="rgba(34,58,94,0.06)" />
          <circle cx="220" cy="130" r="18" stroke="#6FA67A" strokeWidth="1" fill="rgba(111,166,122,0.08)" />
          <path d="M160 104 L100 140 M160 104 L220 130" stroke="#6FA67A" strokeWidth="1" opacity="0.4" />
        </g>
        <path
          d="M160 200 C130 200 115 230 115 265 C115 295 135 320 160 330 C185 320 205 295 205 265 C205 230 190 200 160 200 Z"
          stroke="#223A5E"
          strokeWidth="1.5"
          fill="rgba(248, 243, 234, 0.8)"
        />
        <ellipse cx="160" cy="248" rx="32" ry="26" stroke="#6FA67A" strokeWidth="1.2" fill="none" opacity="0.6" />
        <g className={styles.mol}>
          <circle cx="80" cy="300" r="6" fill="#6FA67A" opacity="0.5" />
          <circle cx="240" cy="290" r="5" fill="#223A5E" opacity="0.4" />
          <circle cx="160" cy="310" r="4" fill="#1E4D3D" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
