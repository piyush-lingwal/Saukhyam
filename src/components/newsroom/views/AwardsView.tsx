'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { awards } from '@/data/content';
import AnimatedCounter from '../AnimatedCounter';
import { NEWSROOM_STATS } from '@/data/newsroom/stats';
import m from '../media.module.css';

export default function AwardsView() {
  const awardStat = NEWSROOM_STATS.find((s) => s.id === 'awards');

  return (
    <div className={m.viewStack}>
      <div className={prog.stepCard} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', padding: 'var(--space-6)' }}>
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-xl)', background: '#fef3c7', color: '#b45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Trophy size={28} />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
            {awardStat && (
              <AnimatedCounter value={awardStat.value} display={awardStat.display} suffix={awardStat.suffix} />
            )}
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
            Recognition from institutions across India and globally
          </p>
        </div>
      </div>

      <div className={prog.stepsGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginTop: 0 }}>
        {awards.map((award, i) => (
          <motion.article
            key={award.id}
            className={prog.stepCard}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <span className={`${m.tag} ${m.tagGold}`}>{award.year}</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: 'var(--space-2)' }}>{award.title}</h3>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary)', marginTop: 4 }}>{award.organization}</p>
            <p style={{ marginTop: 'var(--space-2)' }}>{award.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
