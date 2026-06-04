'use client';

import { motion } from 'framer-motion';
import { Calendar, Megaphone } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { pressReleases } from '@/data/newsroom/pressReleases';
import m from '../media.module.css';

export default function PressReleasesView() {
  return (
    <div className={m.viewStack}>
      {pressReleases.map((pr, i) => (
        <motion.article
          key={pr.id}
          className={prog.stepCard}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
              <Calendar size={14} />
              {new Date(pr.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            {pr.featured && <span className={`${m.tag} ${m.tagGold}`}>Featured</span>}
            <span className={m.tag}>{pr.category}</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'var(--text-xl)', marginTop: 'var(--space-3)', display: 'flex', gap: 'var(--space-2)' }}>
            <Megaphone size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 4 }} />
            {pr.title}
          </h2>
          <p style={{ marginTop: 'var(--space-3)' }}>{pr.excerpt}</p>
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
            Full text:{' '}
            <a href="mailto:press@saukhyampads.org" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
              press@saukhyampads.org
            </a>
          </p>
        </motion.article>
      ))}
    </div>
  );
}
