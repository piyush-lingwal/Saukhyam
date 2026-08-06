'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Heart,
  Droplets,
  Layers,
  Brain,
  CheckCircle2,
  ShieldAlert,
  Users,
  Clock,
  Sparkles,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { testimonialsData, type TestimonialItem } from '@/data/testimonialsData';
import styles from './page.module.css';

// Exact animations matching Research Database
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const staggerFast = {
  visible: { transition: { staggerChildren: 0.05 } }
};

const filterItems = [
  { id: 'All Conditions', label: 'All Conditions', desc: 'Explore All Stories', icon: BookOpen },
  { id: 'Irregular Periods', label: 'Irregular Periods', desc: 'Cycle Regularity', icon: Calendar },
  { id: 'Period Cramps', label: 'Period Cramps', desc: 'Pain Relief', icon: Heart },
  { id: 'Heavy Flow', label: 'Heavy Flow', desc: 'Reduced Bleeding', icon: Droplets },
  { id: 'Endometriosis', label: 'Endometriosis', desc: 'Symptom Relief', icon: Layers },
  { id: 'PCOS / PMOS', label: 'PCOS / PMOS', desc: 'Hormonal Balance', icon: Brain },
  { id: 'General Health', label: 'General Health', desc: 'Overall Wellness', icon: CheckCircle2 },
  { id: 'Rashes & Irritation', label: 'Rashes & Irritation', desc: 'Skin Comfort', icon: ShieldAlert },
  { id: 'All Users', label: 'All Users', desc: 'All Cohorts', icon: Users },
  { id: 'Long-term (2+ years)', label: 'Long-term', desc: '2+ Years', icon: Clock },
  { id: 'Recent (<2 years)', label: 'Recent', desc: 'Less than 2 Years', icon: Sparkles }
];

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  isExpanded: boolean;
  onToggleSummary: () => void;
}

function TestimonialCard({ testimonial, isExpanded, onToggleSummary }: TestimonialCardProps) {
  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`${styles.testimonialCard} ${isExpanded ? styles.cardExpanded : ''}`}
    >
      <div className={styles.cardHeaderRow}>
        <span className={styles.conditionBadge}>{testimonial.primaryCondition}</span>
        <span className={styles.durationBadge}>{testimonial.duration}</span>
      </div>

      <div className={styles.cardMetaBlock}>
        <h4 className={styles.personName}>{testimonial.name}</h4>
        <span className={styles.personMeta}>
          {testimonial.occupation} • Age {testimonial.age}
        </span>
      </div>

      <h5 className={styles.cardTitle}>{testimonial.headline}</h5>

      {/* Summary with layout-aware height transition */}
      <div className={styles.summaryWrapper}>
        <p className={`${styles.cardSummary} ${isExpanded ? '' : styles.cardSummaryClamped}`}>
          {testimonial.summary}
        </p>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.verifiedText}>✔ Verified User Story</span>
      </div>

      <div className={styles.cardActions}>
        <button
          type="button"
          onClick={onToggleSummary}
          className={styles.btnSummary}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Collapse' : 'Summary'}
        </button>
        <a
          href={testimonial.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnReadMore}
        >
          <FileText size={14} aria-hidden="true" />
          Read More
        </a>
      </div>
    </motion.article>
  );
}

export default function TestimonialsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Conditions');
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});

  // Reset expanded states when filter changes to prevent visual issues
  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
    setExpandedTestimonials({});
  };

  const toggleSummary = (id: string) => {
    setExpandedTestimonials(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Determine if any card in the grid is expanded
  const hasExpanded = useMemo(() => {
    return Object.values(expandedTestimonials).some(Boolean);
  }, [expandedTestimonials]);

  const filteredTestimonials = useMemo(() => {
    if (selectedFilter === 'All Conditions' || selectedFilter === 'All Users') {
      return testimonialsData;
    }
    return testimonialsData.filter(t => {
      if (selectedFilter === 'PCOS / PMOS') {
        return (
          t.tags.includes('PCOS / PMOS') ||
          t.tags.includes('PCOS / Ovarian Cysts') ||
          t.tags.includes('PCOS')
        );
      }
      if (selectedFilter === 'Long-term (2+ years)') {
        return t.tags.includes('Long-term');
      }
      if (selectedFilter === 'Recent (<2 years)') {
        return t.tags.includes('Recent');
      }
      return t.tags.includes(selectedFilter);
    });
  }, [selectedFilter]);

  return (
    <div className={styles.testimonialsPage}>
      <div className={styles.libraryContainer}>
        {/* Luxury Header */}
        <motion.header
          className={styles.headerWrapper}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span variants={fadeInUp} className={styles.eyebrow}>
            FILTER TESTIMONIALS
          </motion.span>
          <motion.h1 id="testimonials-heading" variants={fadeInUp} className={styles.heading}>
            Filter by Condition
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.subtitle}>
            Explore verified stories from women who experienced improvements in menstrual health after
            switching to Saukhyam reusable banana-fiber pads. Filter by symptoms, health conditions, and
            duration of use.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.statsPill} role="status">
            <ShieldCheck size={14} className={styles.statsIcon} aria-hidden="true" />
            <span>{testimonialsData.length} Verified Stories</span>
          </motion.div>
        </motion.header>

        {/* Filter Navigation */}
        <motion.section
          className={styles.filterGrid}
          aria-label="Filter navigation"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {filterItems.map(item => {
            const Icon = item.icon;
            const isActive = selectedFilter === item.id;
            return (
              <motion.button
                variants={fadeInUp}
                key={item.id}
                type="button"
                onClick={() => handleFilterChange(item.id)}
                className={`${styles.filterCard} ${isActive ? styles.filterActive : ''}`}
                aria-pressed={isActive}
              >
                <div className={styles.filterIconWrap}>
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className={styles.filterText}>
                  <h3 className={styles.filterTitle}>{item.label}</h3>
                  <p className={styles.filterDesc}>{item.desc}</p>
                </div>
              </motion.button>
            );
          })}
        </motion.section>

        {/* Testimonials Grid */}
        <motion.section
          className={`${styles.testimonialGrid} ${hasExpanded ? styles.gridHasExpandedCard : ''}`}
          layout="position"
          aria-label="User testimonials"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isExpanded={!!expandedTestimonials[testimonial.id]}
                onToggleSummary={() => toggleSummary(testimonial.id)}
              />
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className={styles.emptyState} role="status">
            <Heart size={48} className={styles.emptyIcon} aria-hidden="true" />
            <h3>No stories match the selected criteria</h3>
            <p>Try selecting another condition or user group.</p>
          </div>
        )}
      </div>
    </div>
  );
}
