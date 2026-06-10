'use client';

import { motion } from 'framer-motion';
import { brandStory } from '@/data/newsroom/brandStory';
import prog from '@/app/programs/program.module.css';
import { fadeInUp } from '../mediaMotion';
import m from '../media.module.css';

export default function BrandStoryView() {
  return (
    <div className={m.viewStack}>
      <motion.div className={prog.stepCard} initial="hidden" animate="visible" variants={fadeInUp} style={{ padding: 'var(--space-8)' }}>
        <h2 className={prog.sectionTitle} style={{ fontSize: '1.75rem' }}>{brandStory.headline}</h2>
        <p className={prog.sectionDesc} style={{ maxWidth: 'none', marginTop: 'var(--space-4)' }}>{brandStory.subhead}</p>
      </motion.div>

      <div className={prog.stepsGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 0 }}>
        {brandStory.pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className={prog.stepCard}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <span className={prog.stepNumber}>0{i + 1}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className={m.quoteBand} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <blockquote className={m.quoteText}>&ldquo;{brandStory.vision.quote}&rdquo;</blockquote>
        <cite className={m.quoteCite}>— {brandStory.vision.attribution}</cite>
      </motion.div>

      <section>
        <h3 className={prog.sectionTitle} style={{ fontSize: '1.25rem' }}>Milestones</h3>
        <ol className={m.timeline} style={{ marginTop: 'var(--space-6)' }}>
          {brandStory.timeline.map((t) => (
            <li key={t.year} className={m.timelineItem}>
              <span className={m.timelineDot} aria-hidden />
              <span className={m.timelineYear}>{t.year}</span>
              <p className={m.timelineEvent}>{t.event}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
