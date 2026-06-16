'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  siteFaqItems,
  siteFaqCategories,
  getSiteFaqCategoryLabel,
  getSiteFaqSubsections,
  isValidSiteFaqCategory,
  type SiteFAQCategory,
  type SiteFAQItem,
} from '@/data/siteFaq';
import styles from './page.module.css';

function FaqAnswer({ item }: { item: SiteFAQItem }) {
  return (
    <div className={styles.faqAnswerContent}>
      {item.paragraphs[0] && <p>{item.paragraphs[0]}</p>}
      {item.bullets && item.bullets.length > 0 && (
        <ul className={styles.faqBulletList}>
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
      {item.paragraphs.slice(1).map((para, i) => (
        <p key={i + 1}>{para}</p>
      ))}
    </div>
  );
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: SiteFAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <button
        type="button"
        className={styles.faqQuestion}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className={styles.faqQuestionText}>{item.question}</span>
        <ChevronDown size={18} className={styles.faqIcon} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <FaqAnswer item={item} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<SiteFAQCategory>('usage-guide');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const activeCategoryLabel = getSiteFaqCategoryLabel(activeCategory);

  const activeItems = useMemo(
    () => siteFaqItems.filter(item => item.category === activeCategory),
    [activeCategory],
  );

  const subsections = useMemo(() => getSiteFaqSubsections(activeCategory), [activeCategory]);

  const updateUrl = useCallback((category: SiteFAQCategory) => {
    window.history.replaceState(null, '', `${window.location.pathname}?category=${category}`);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && isValidSiteFaqCategory(category)) {
      setActiveCategory(category);
    }
  }, []);

  const selectCategory = (category: SiteFAQCategory) => {
    setActiveCategory(category);
    setOpenFaqId(null);
    updateUrl(category);
  };

  const toggleItem = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const renderActiveItems = () => {
    if (activeItems.length === 0) {
      return <div className={styles.emptyState}>No FAQs in this category yet.</div>;
    }

    if (subsections.length === 0) {
      return (
        <div className={styles.faqList}>
          {activeItems.map(item => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={openFaqId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
      );
    }

    return subsections
      .map(section => ({
        ...section,
        items: activeItems.filter(item => item.subsection === section.id),
      }))
      .filter(group => group.items.length > 0)
      .map(group => (
        <div key={group.id} className={styles.faqSubsection}>
          <h3 className={styles.subsectionTitle}>{group.label}</h3>
          <div className={styles.faqList}>
            {group.items.map(item => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                isOpen={openFaqId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      ));
  };

  return (
    <div className={styles.faqPage}>
      <section className={styles.hero} aria-labelledby="faq-hero-heading">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroDecor} aria-hidden="true">
          <span className={styles.heroFiberTexture} />
          <span className={styles.heroLeaf1} />
          <span className={styles.heroLeaf2} />
        </div>

        <div className={styles.heroInner}>
          <motion.span
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            FAQ
          </motion.span>

          <motion.h1
            id="faq-hero-heading"
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            Frequently Asked Questions
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            Everything you need to know about Saukhyam reusable pads, covering usage and washing to science and impact.
          </motion.p>
        </div>
      </section>

      <nav className={styles.mobileNav} aria-label="FAQ categories">
        <div className={styles.mobileNavScroll}>
          {siteFaqCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`${styles.mobileNavTab} ${activeCategory === cat.id ? styles.mobileNavTabActive : ''}`}
              onClick={() => selectCategory(cat.id)}
              aria-current={activeCategory === cat.id ? 'true' : undefined}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <div className={styles.kbShell}>
        <div className={styles.kbLayout}>
          <aside className={styles.sidebar} aria-label="FAQ category navigation">
            <div className={styles.sidebarInner}>
              <p className={styles.sidebarLabel}>Categories</p>
              <nav className={styles.sidebarNav}>
                {siteFaqCategories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`${styles.sidebarItem} ${activeCategory === cat.id ? styles.sidebarItemActive : ''}`}
                    onClick={() => selectCategory(cat.id)}
                    aria-current={activeCategory === cat.id ? 'true' : undefined}
                  >
                    {cat.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <main className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.categorySectionHeader}>
                  <h2 className={styles.categorySectionTitle}>{activeCategoryLabel}</h2>
                </div>
                {renderActiveItems()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        <section className={styles.contactCta} aria-labelledby="faq-cta-heading">
          <div className={styles.contactCtaDecor} aria-hidden="true">
            <span className={styles.contactCtaGlowTop} />
            <span className={styles.contactCtaGlowBottom} />
          </div>
          <div className={styles.contactCtaInner}>
            <h2 id="faq-cta-heading" className={styles.contactCtaTitle}>
              Still Have Questions?
            </h2>
            <p className={styles.contactCtaText}>
              We&apos;re here to help. Connect with our team and get the guidance you need on reusable menstrual care.
            </p>
            <Link href="/contact" className={styles.contactCtaBtn}>
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
