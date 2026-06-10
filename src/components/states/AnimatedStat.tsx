'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import type { StateStat } from '@/types/statePage';
import styles from '@/app/programs/states/statePage.module.css';

export default function AnimatedStat({ stat }: { stat: StateStat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const value = useAnimatedCounter(stat.value, 1600, inView, stat.decimals ?? 0);

  return (
    <div ref={ref} className={styles.statItem}>
      <div className={styles.statValue}>
        {stat.prefix}{value.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
}
