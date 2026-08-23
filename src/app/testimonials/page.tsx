'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  Heart,
  Droplets,
  Layers,
  Brain,
  ShieldAlert,
  Sparkles,
  FileText,
  X,
  Quote,
  Star,
} from 'lucide-react';
import { testimonialsData, type TestimonialItem } from '@/data/testimonialsData';
import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';
import styles from './page.module.css';

// Exact animations matching Research Database
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const filterItems = [
  { id: 'All Conditions', label: 'All Conditions', desc: 'Explore All Stories', icon: BookOpen },
  { id: 'Irregular Periods', label: 'Irregular Periods', desc: 'Cycle Regularity', icon: Calendar },
  { id: 'Severe Period Pain', label: 'Severe Period Pain', desc: 'Pain Relief', icon: Heart },
  { id: 'Heavy Flow & Cramps', label: 'Heavy Flow & Cramps', desc: 'Reduced Bleeding', icon: Droplets },
  { id: 'Endometriosis', label: 'Endometriosis', desc: 'Symptom Relief', icon: Layers },
  { id: 'Cramps & Rashes', label: 'Cramps & Rashes', desc: 'Skin & Pain Comfort', icon: ShieldAlert },
  { id: 'PCOS', label: 'PCOS', desc: 'Hormonal Balance', icon: Brain },
  { id: 'Headaches & Itching', label: 'Headaches & Itching', desc: 'Systemic Relief', icon: Sparkles },
  { id: 'Heavy Bleeding', label: 'Heavy Bleeding', desc: 'Flow Regulation', icon: Droplets },
  { id: 'Rashes', label: 'Rashes', desc: 'Skin Comfort', icon: ShieldAlert }
];

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  onOpenModal: () => void;
}

function TestimonialCard({ testimonial, onOpenModal }: TestimonialCardProps) {
  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={styles.testimonialCard}
    >
      {/* Coral top accent line */}
      <div className={styles.cardAccentLine} />

      {/* Small minimalist quote icon container */}
      <div className={styles.iconContainer}>
        <Quote size={13} className={styles.quoteIcon} aria-hidden="true" />
      </div>

      <h4 className={styles.personName}>{testimonial.name}</h4>
      <div className={styles.personMeta}>
        {testimonial.occupation} • Age {testimonial.age}
      </div>

      {/* Star Rating */}
      <div className={styles.ratingStars} aria-label="5 stars rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="#D6A85C" color="#D6A85C" aria-hidden="true" />
        ))}
      </div>

      {/* Condition Pills */}
      <div className={styles.conditionPills}>
        {testimonial.tags.map(tag => (
          <span key={tag} className={styles.conditionPill}>
            {tag}
          </span>
        ))}
      </div>

      <h5 className={styles.cardTitle}>{testimonial.headline}</h5>

      <p className={`${styles.cardSummary} ${styles.cardSummaryClamped}`}>
        {testimonial.summary}
      </p>

      <button
        type="button"
        onClick={onOpenModal}
        className={styles.btnReadFullStory}
      >
        Read Full Story →
      </button>
    </motion.article>
  );
}

export default function TestimonialsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Conditions');
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialItem | null>(null);

  // Scroll lock and Escape listener for Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTestimonial(null);
      }
    };
    if (selectedTestimonial) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedTestimonial]);

  const handleFilterChange = (filterId: string) => {
    setSelectedFilter(filterId);
  };

  const filteredTestimonials = useMemo(() => {
    if (selectedFilter === 'All Conditions') {
      return testimonialsData;
    }
    return testimonialsData.filter(t => t.tags.includes(selectedFilter));
  }, [selectedFilter]);

  return (
    <div className={styles.testimonialsPage}>
      {/* Premium Header/Hero */}
      <TestimonialsHero />

      <div className={styles.libraryContainer}>
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
          className={styles.testimonialGrid}
          layout="position"
          aria-label="User testimonials"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onOpenModal={() => setSelectedTestimonial(testimonial)}
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

      {/* Bottom CTA section */}
      <TestimonialsCTA />

      {/* Premium Modal Overlay */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setSelectedTestimonial(null)}
                aria-label="Close story modal"
              >
                <X size={15} aria-hidden="true" />
              </button>

              {/* Minimalist Quote Icon */}
              <div className={styles.modalIconWrap}>
                <Quote size={15} className={styles.quoteIcon} aria-hidden="true" />
              </div>

              {/* Person Meta */}
              <h3 className={styles.modalPersonName}>{selectedTestimonial.name}</h3>
              <div className={styles.modalPersonMeta}>
                {selectedTestimonial.occupation} • Age {selectedTestimonial.age}
              </div>

              {/* Stars */}
              <div className={styles.modalRatingStars} aria-label="5 stars rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="#D6A85C" color="#D6A85C" aria-hidden="true" />
                ))}
              </div>

              {/* Condition Tags */}
              <div className={styles.modalConditionPills}>
                {selectedTestimonial.tags.map(tag => (
                  <span key={tag} className={styles.modalConditionPill}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Headline */}
              <h4 className={styles.modalTitle}>{selectedTestimonial.headline}</h4>

              {/* Story Description */}
              <div className={styles.modalStoryContent}>
                <p>{selectedTestimonial.summary}</p>
              </div>

              {/* PDF Link inside modal if they want to view full PDF */}
              {selectedTestimonial.pdfUrl && (
                <div className={styles.modalFooterActions}>
                  <a
                    href={selectedTestimonial.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.modalPdfLink}
                  >
                    <FileText size={13} aria-hidden="true" />
                    View Original Verification PDF
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
