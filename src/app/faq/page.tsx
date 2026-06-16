'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, Search, X } from 'lucide-react';
import {
  siteFaqItems,
  siteFaqCategories,
  getSiteFaqCount,
  getSiteFaqCategoryLabel,
  getSiteFaqSubsections,
  isValidSiteFaqCategory,
  searchSiteFaq,
  type SiteFAQCategory,
  type SiteFAQItem,
} from '@/data/siteFaq';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

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
  showCategory,
}: {
  item: SiteFAQItem;
  isOpen: boolean;
  onToggle: () => void;
  showCategory?: boolean;
}) {
  return (
    <motion.div
      layout
      className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        type="button"
        className={styles.faqQuestion}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className={styles.faqQuestionCopy}>
          {showCategory && (
            <span className={styles.faqItemCategory}>{getSiteFaqCategoryLabel(item.category)}</span>
          )}
          <span className={styles.faqQuestionText}>{item.question}</span>
        </span>
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
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<SiteFAQCategory>('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && isValidSiteFaqCategory(category)) {
      setActiveCategory(category);
    }
    const q = params.get('q');
    if (q) setSearchQuery(q);
  }, []);

  const isSearching = searchQuery.trim().length > 0;

  const visibleFaqs = useMemo(() => {
    if (isSearching) return searchSiteFaq(searchQuery);
    return siteFaqItems.filter(item => item.category === activeCategory);
  }, [activeCategory, isSearching, searchQuery]);

  const subsections = useMemo(
    () => (isSearching ? [] : getSiteFaqSubsections(activeCategory)),
    [activeCategory, isSearching],
  );

  const groupedFaqs = useMemo(() => {
    if (isSearching || subsections.length === 0) {
      return [{ id: 'all', label: '', items: visibleFaqs }];
    }

    return subsections
      .map(section => ({
        id: section.id,
        label: section.label,
        items: visibleFaqs.filter(item => item.subsection === section.id),
      }))
      .filter(group => group.items.length > 0);
  }, [isSearching, subsections, visibleFaqs]);

  const updateUrl = (category: SiteFAQCategory, query: string) => {
    const params = new URLSearchParams();
    params.set('category', category);
    if (query.trim()) params.set('q', query.trim());
    const next = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', next);
  };

  const selectCategory = (category: SiteFAQCategory) => {
    setActiveCategory(category);
    setOpenItems(new Set());
    updateUrl(category, searchQuery);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setOpenItems(new Set());
    updateUrl(activeCategory, value);
  };

  const clearSearch = () => {
    handleSearchChange('');
  };

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
            Your central knowledge hub for Saukhyam — menstrual health, reusable pads, the HEAL program, products, internships, and more.
          </motion.p>
        </div>
      </section>

      <div className="container">
        <motion.div
          className={styles.searchWrap}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <Search size={18} className={styles.searchIcon} aria-hidden="true" />
          <input
            type="search"
            value={searchQuery}
            onChange={e => handleSearchChange(e.target.value)}
            placeholder="Search all FAQs..."
            className={styles.searchInput}
            aria-label="Search FAQs"
          />
          {searchQuery && (
            <button type="button" className={styles.searchClear} onClick={clearSearch} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </motion.div>

        {!isSearching && (
          <div className={styles.categoryTabs} role="tablist" aria-label="FAQ categories">
            {siteFaqCategories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.categoryTab} ${isActive ? styles.categoryTabActive : ''}`}
                  onClick={() => selectCategory(cat.id)}
                >
                  {cat.label}
                  <span className={styles.categoryCount}>{getSiteFaqCount(cat.id)}</span>
                </button>
              );
            })}
          </div>
        )}

        {isSearching && (
          <p className={styles.searchMeta}>
            {visibleFaqs.length} result{visibleFaqs.length === 1 ? '' : 's'} for &ldquo;{searchQuery.trim()}&rdquo;
          </p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={isSearching ? `search-${searchQuery}` : activeCategory}
            className={styles.faqContent}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            role="tabpanel"
          >
            {visibleFaqs.length === 0 ? (
              <div className={styles.emptyState}>
                {isSearching ? 'No FAQs matched your search. Try different keywords.' : 'No FAQs in this category yet.'}
              </div>
            ) : (
              groupedFaqs.map(group => (
                <div key={group.id} className={styles.faqGroup}>
                  {group.label && <h3 className={styles.subsectionTitle}>{group.label}</h3>}
                  <div className={styles.faqList}>
                    {group.items.map(item => (
                      <FaqAccordionItem
                        key={item.id}
                        item={item}
                        isOpen={openItems.has(item.id)}
                        onToggle={() => toggleItem(item.id)}
                        showCategory={isSearching}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

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
