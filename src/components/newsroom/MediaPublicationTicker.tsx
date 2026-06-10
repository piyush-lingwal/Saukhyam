'use client';

import { pressItems } from '@/data/content';
import m from './media.module.css';

export default function MediaPublicationTicker() {
  const pubs = [...new Set(pressItems.map((p) => p.publication))].slice(0, 12);
  const doubled = [...pubs, ...pubs];

  return (
    <div className={m.tickerWrap} aria-hidden>
      <div className={m.tickerTrack}>
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className={m.tickerItem}>
            As featured in <strong>{name}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
