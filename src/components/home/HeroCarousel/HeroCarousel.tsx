'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroCarousel.module.css';

const slides = [
  {
    image:
      'https://saukhyampads.org/cdn/shop/files/1_1cc3289c-530c-48c9-a196-1228a0c5441d_2048x2048.png?v=1746945202',
    badge: 'a simple and powerful commitment',
    heading: 'Switch 100% to Saukhyam\nfor 3 months',
    subheading: 'Feel the difference in your period health.',
    cta: { label: 'Switch Now', href: '/products' },
  },
  {
    image:
      'https://saukhyampads.org/cdn/shop/files/4_c9fb7b70-66cf-41b8-9b18-90ca4a5516ae_2048x2048.png?v=1746945197',
    heading: 'What Healing Means',
    subheading: 'Expect improvement in:',
    bullets: [
      'Period pain (less cramping)',
      'Skin issues (less irritation, no rashes)',
      'General menstrual comfort',
      'PCOS/PMOS symptoms, if any',
    ],
    cta: { label: 'Learn More', href: '/science' },
  },
  {
    image:
      'https://saukhyampads.org/cdn/shop/files/5_01f142f9-1e34-44d2-93ce-bdd0ceca925d_2048x2048.png?v=1746945196',
    heading: 'Are you ready for the\n3‑Month Period Healing Challenge?',
    subheading: 'Period Problems?\nThis challenge works.',
    cta: { label: 'Learn More', href: '/science' },
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
        >
          <img
            src={s.image}
            alt={s.heading.replace('\n', ' ')}
            className={styles.slideImage}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className={styles.slideOverlay} />
        </div>
      ))}

      {/* Content overlay */}
      <div className={styles.content} key={current}>
        {slide.badge && (
          <span className={styles.badge}>{slide.badge}</span>
        )}

        <h2 className={styles.heading}>
          {slide.heading.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < slide.heading.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className={styles.subheading}>
          {slide.subheading.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < slide.subheading.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        {slide.bullets && (
          <ul className={styles.bullets}>
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <Link href={slide.cta.href} className={styles.ctaBtn}>
          {slide.cta.label}
        </Link>
      </div>

      {/* Navigation arrows */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
