'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import prog from '@/app/programs/program.module.css';
import { pressReleases } from '@/data/newsroom/pressReleases';
import { impactStories } from '@/data/newsroom/impactStories';
import PressCoverageSlider from '../PressCoverageSlider';
import NewsletterCTA from '../NewsletterCTA';
import { fadeInUp } from '../mediaMotion';
import m from '../media.module.css';

export default function NewsroomView() {
  const latest = pressReleases.slice(0, 4);

  return (
    <div className={m.viewStack}>
      <PressCoverageSlider />

      <section>
        <h2 className={prog.sectionTitle} style={{ fontSize: '1.35rem' }}>Latest updates</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
          {latest.map((pr, i) => (
            <motion.article
              key={pr.id}
              className={prog.stepCard}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                <Calendar size={14} />
                {new Date(pr.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                <span className={m.tag}>{pr.category}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: 'var(--space-2)' }}>{pr.title}</h3>
              <p>{pr.excerpt}</p>
            </motion.article>
          ))}
        </div>
        <Link href="/media/press-releases" className={m.textLink} style={{ marginTop: 'var(--space-4)', display: 'inline-flex' }}>
          All press releases
          <ArrowRight size={14} />
        </Link>
      </section>

      <section>
        <h2 className={prog.sectionTitle} style={{ fontSize: '1.35rem' }}>Impact stories</h2>
        <div className={prog.stepsGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 'var(--space-4)' }}>
          {impactStories.map((s, i) => (
            <motion.div
              key={s.id}
              className={prog.stepCard}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <span className={prog.stepNumber}>{s.stat}</span>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{s.statLabel}</p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>{s.title}</h3>
              <p>{s.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <NewsletterCTA compact />
    </div>
  );
}
