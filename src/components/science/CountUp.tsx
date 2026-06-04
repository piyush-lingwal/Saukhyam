'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

type CountUpProps = {
  value: string;
  className?: string;
};

function parseStat(value: string): { numeric: number | null; prefix: string; suffix: string } {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { numeric: null, prefix: '', suffix: value };
  return { numeric: parseInt(match[2], 10), prefix: match[1], suffix: match[3] };
}

export default function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();
  const { numeric, prefix, suffix } = parseStat(value);
  const [display, setDisplay] = useState(prefersReducedMotion || numeric === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView || numeric === null || prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numeric * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, numeric, prefix, suffix, value, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
