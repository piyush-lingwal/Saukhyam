'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown, HelpCircle, Droplets, Sparkles, RefreshCw,
  Building2, Mail, Phone,
} from 'lucide-react';
import { faqItems, type FAQItem } from '@/data/content';
import styles from './page.module.css';

type Category = FAQItem['category'] | 'all';

const categoryConfig: Record<Category, { label: string; icon: typeof HelpCircle }> = {
  all: { label: 'All Questions', icon: HelpCircle },
  general: { label: 'General', icon: Sparkles },
  using: { label: 'How to Use', icon: Droplets },
  washing: { label: 'Washing & Care', icon: RefreshCw },
  compare: { label: 'Science & Fiber', icon: Sparkles },
  organization: { label: 'About Saukhyam', icon: Building2 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFaqs = useMemo(() => {
    return activeCategory === 'all'
      ? faqItems
      : faqItems.filter(f => f.category === activeCategory);
  }, [activeCategory]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={styles.faqPage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Everything you need to know about Saukhyam reusable pads - from usage and washing to science and impact.
          </motion.p>
        </div>
      </section>

      <div className="container">
        <div className={styles.faqLayout}>
          {/* ── Category Sidebar ── */}
          <nav className={styles.categoryNav}>
            {(Object.keys(categoryConfig) as Category[]).map(cat => {
              const config = categoryConfig[cat];
              const Icon = config.icon;
              return (
                <button
                  key={cat}
                  className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <Icon size={16} className={styles.categoryIcon} />
                  {config.label}
                </button>
              );
            })}
          </nav>

          {/* ── FAQ List ── */}
          <motion.div
            className={styles.faqList}
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {filteredFaqs.map(faq => (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                className={`${styles.faqItem} ${openItems.has(faq.id) ? styles.open : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={openItems.has(faq.id)}
                >
                  {faq.question}
                  <ChevronDown size={18} className={styles.faqIcon} />
                </button>
                <div className={styles.faqAnswer}>
                  <div className={styles.faqAnswerContent}>
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Contact CTA ── */}
        <div className={styles.contactCta}>
          <h3>Still have questions?</h3>
          <p>We&apos;re happy to help! Reach out to us and we&apos;ll respond within 24 hours.</p>
          <div className={styles.contactBtns}>
            <a href="mailto:contact@saukhyampads.org" className={`${styles.contactBtn} ${styles.contactBtnPrimary}`}>
              <Mail size={18} />
              Email Us
            </a>
            <a href="tel:+919876543210" className={`${styles.contactBtn} ${styles.contactBtnOutline}`}>
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
