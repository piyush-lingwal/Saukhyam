'use client';

import styles from './ScienceHeroVisual.module.css';

export default function ScienceHeroVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.glow} />
      <div className={styles.particles}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>
      <svg className={styles.svg} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sciGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6FA67A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#223A5E" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="140" stroke="url(#sciGrad)" strokeWidth="1.5" opacity="0.5" className={styles.ring} />
        <circle cx="200" cy="200" r="100" stroke="#6FA67A" strokeWidth="1" opacity="0.35" className={styles.ringSlow} />
        {/* Molecular nodes */}
        <g className={styles.molecule}>
          <line x1="120" y1="160" x2="200" y2="120" stroke="#6FA67A" strokeWidth="1.5" opacity="0.6" />
          <line x1="200" y1="120" x2="280" y2="160" stroke="#6FA67A" strokeWidth="1.5" opacity="0.6" />
          <line x1="120" y1="160" x2="160" y2="240" stroke="#223A5E" strokeWidth="1.5" opacity="0.5" />
          <line x1="280" y1="160" x2="240" y2="240" stroke="#223A5E" strokeWidth="1.5" opacity="0.5" />
          <line x1="160" y1="240" x2="240" y2="240" stroke="#6FA67A" strokeWidth="1.5" opacity="0.5" />
          <circle cx="200" cy="120" r="10" fill="#6FA67A" opacity="0.7" />
          <circle cx="120" cy="160" r="8" fill="#1E4D3D" opacity="0.6" />
          <circle cx="280" cy="160" r="8" fill="#1E4D3D" opacity="0.6" />
          <circle cx="160" cy="240" r="9" fill="#223A5E" opacity="0.5" />
          <circle cx="240" cy="240" r="9" fill="#223A5E" opacity="0.5" />
        </g>
        {/* Feminine health outline — abstract organic form */}
        <path
          d="M200 260 C170 260 155 290 155 320 C155 345 175 365 200 375 C225 365 245 345 245 320 C245 290 230 260 200 260 Z"
          stroke="#6FA67A"
          strokeWidth="1.5"
          fill="rgba(111, 166, 122, 0.08)"
          opacity="0.7"
        />
        <ellipse cx="200" cy="295" rx="28" ry="22" stroke="#223A5E" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M200 248 L200 268" stroke="#6FA67A" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  );
}
