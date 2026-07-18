'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart, Star, ChevronRight, Filter, Users, Calendar, Sparkles,
} from 'lucide-react';
import { testimonials, type Testimonial } from '@/data/content';
import styles from './page.module.css';

type ConditionFilter = 'all' | Testimonial['condition'];
type CohortFilter = 'all' | 1 | 2;

const conditionLabels: Record<Testimonial['condition'], string> = {
  pcos: 'PCOS/PMOS',
  cramps: 'Period Cramps',
  irregular: 'Irregular Periods',
  'heavy-flow': 'Heavy Flow',
  rashes: 'Rashes & Irritation',
  uti: 'UTI',
  endometriosis: 'Endometriosis',
  general: 'General Health',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function TestimonialsPage() {
  const [conditionFilter, setConditionFilter] = useState<ConditionFilter>('all');
  const [cohortFilter, setCohortFilter] = useState<CohortFilter>('all');

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(t => {
      const matchesCondition = conditionFilter === 'all' || t.condition === conditionFilter;
      const matchesCohort = cohortFilter === 'all' || t.cohort === cohortFilter;
      return matchesCondition && matchesCohort;
    });
  }, [conditionFilter, cohortFilter]);

  const availableConditions = useMemo(() => {
    const conditions = new Set(testimonials.map(t => t.condition));
    return ['all', ...Array.from(conditions)] as ConditionFilter[];
  }, []);

  return (
    <div className={styles.testimonialsPage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Testimonials</span>
          </div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroTitleAccent}>Real Stories, </span>
            <span className={styles.heroTitleHighlight}>Real Healing</span>
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hear from women across India who experienced measurable health improvements
            <br />
            after switching to Saukhyam reusable pads.
          </motion.p>

          {/* Stats */}
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.heroStatItem}>
              <Users size={20} />
              <span className={styles.heroStatValue}>{testimonials.length}</span>
              <span className={styles.heroStatLabel}>Verified Stories</span>
            </div>
            <div className={styles.heroStatItem}>
              <Star size={20} />
              <span className={styles.heroStatValue}>5.0</span>
              <span className={styles.heroStatLabel}>Average Rating</span>
            </div>
            <div className={styles.heroStatItem}>
              <Calendar size={20} />
              <span className={styles.heroStatValue}>2-8 Years</span>
              <span className={styles.heroStatLabel}>Usage Duration</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="container">
        {/* Filters */}
        <div className={styles.filterSection}>
          <div className={styles.filterHeader}>
            <div className={styles.filterTitle}>
              <Filter size={18} />
              Filter by Condition
            </div>
            <span className={styles.resultCount}>
              <strong>{filteredTestimonials.length}</strong> {filteredTestimonials.length === 1 ? 'story' : 'stories'}
            </span>
          </div>

          <div className={styles.filterTabs}>
            {availableConditions.map(condition => (
              <button
                key={condition}
                className={`${styles.filterTab} ${conditionFilter === condition ? styles.active : ''}`}
                onClick={() => setConditionFilter(condition)}
              >
                {condition === 'all' ? 'All Conditions' : conditionLabels[condition as Testimonial['condition']]}
              </button>
            ))}
          </div>

          <div className={styles.cohortFilters}>
            <button
              className={`${styles.cohortBtn} ${cohortFilter === 'all' ? styles.active : ''}`}
              onClick={() => setCohortFilter('all')}
            >
              All Users
            </button>
            <button
              className={`${styles.cohortBtn} ${cohortFilter === 1 ? styles.active : ''}`}
              onClick={() => setCohortFilter(1)}
            >
              Long-term (2+ years)
            </button>
            <button
              className={`${styles.cohortBtn} ${cohortFilter === 2 ? styles.active : ''}`}
              onClick={() => setCohortFilter(2)}
            >
              Recent (&lt;2 years)
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className={styles.testimonialGrid}
          key={conditionFilter + cohortFilter}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className={styles.testimonialCard}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.conditionBadge} ${styles[`condition_${testimonial.condition}`]}`}>
                  {testimonial.mainProblem}
                </span>
                <span className={styles.durationBadge}>
                  {testimonial.duration}
                </span>
              </div>

              <div className={styles.stars}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>

              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorLocation}>{testimonial.location}</div>
                </div>
              </div>

              {testimonial.cohort === 1 && (
                <div className={styles.cohortBadge}>
                  <Sparkles size={12} />
                  Long-term User
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {filteredTestimonials.length === 0 && (
          <div className={styles.emptyState}>
            <Heart size={64} className={styles.emptyIcon} />
            <h3>No testimonials found</h3>
            <p>Try adjusting your filters to see more stories.</p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Ready to Start Your Healing Journey?</h2>
          <p>Join thousands of women who have made the switch to Saukhyam.</p>
          <Link href="/products" className={styles.ctaBtn}>
            <Heart size={20} />
            Switch Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
