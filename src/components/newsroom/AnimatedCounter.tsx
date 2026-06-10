'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

type AnimatedCounterProps = {
  value: number;
  display?: string;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({
  value,
  display,
  suffix = '',
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (display) {
      setCount(value);
      return;
    }
    let start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration, display]);

  const formatted = display
    ? display
  : count >= 100000
    ? `${(count / 100000).toFixed(count >= 500000 ? 1 : 0)}L`.replace('.0L', 'L')
    : count.toLocaleString('en-IN');

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {display ?? formatted}
      {suffix}
    </motion.span>
  );
}
