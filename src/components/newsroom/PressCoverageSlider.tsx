'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { pressItems } from '@/data/content';

function articleUrl(title: string, publication: string, url: string) {
  if (url && url !== '#') return url;
  return `https://www.google.com/search?q=${encodeURIComponent(`${title} ${publication} Saukhyam`)}`;
}

export default function PressCoverageSlider() {
  const items = pressItems.slice(0, 12);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className={prog.stepCard}
      style={{ minHeight: 300, display: 'flex', flexDirection: 'column', height: '100%', padding: 'var(--space-7)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
        <div>
          <span className={prog.stepNumber}>Featured</span>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: 'var(--space-2)' }}>
            As featured in
          </h3>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
            className={prog.outlineBtn}
            style={{ padding: 'var(--space-2)', minWidth: 40 }}
            aria-label="Previous article"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
            className={prog.outlineBtn}
            style={{ padding: 'var(--space-2)', minWidth: 40 }}
            aria-label="Next article"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <a
        key={item.id}
        href={articleUrl(item.title, item.publication, item.url)}
        target="_blank"
        rel="noopener noreferrer"
        style={{ flex: 1, textDecoration: 'none', color: 'inherit' }}
      >
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
          {item.publication}
        </span>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 600, marginTop: 'var(--space-2)', lineHeight: 1.35 }}>
          {item.title}
        </p>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-primary)' }}>
          Read article
          <ExternalLink size={14} />
        </span>
      </a>

      <div style={{ marginTop: 'var(--space-5)', display: 'flex', gap: 6, justifyContent: 'center' }}>
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Article ${i + 1}`}
            style={{
              width: i === index ? 22 : 8,
              height: 8,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: i === index ? 'var(--color-primary)' : 'var(--green-200)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}
