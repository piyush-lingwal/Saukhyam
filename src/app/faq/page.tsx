'use client';

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';
import {
  siteFaqItems,
  siteFaqCategories,
  getSiteFaqCategoryLabel,
  getSiteFaqSubsections,
  isValidSiteFaqCategory,
  searchSiteFaqQuestions,
  type SiteFAQCategory,
  type SiteFAQItem,
} from '@/data/siteFaq';
import styles from './page.module.css';

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function HighlightText({ text, query }: { text: string; query: string }) {
  const trimmed = query.trim();
  if (!trimmed) return <>{text}</>;

  const parts = text.split(new RegExp(`(${escapeRegExp(trimmed)})`, 'gi'));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === trimmed.toLowerCase() ? (
          <mark key={index} className={styles.searchHighlight}>
            {part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

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
  searchQuery = '',
  showCategory = false,
}: {
  item: SiteFAQItem;
  isOpen: boolean;
  onToggle: () => void;
  searchQuery?: string;
  showCategory?: boolean;
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
        <span className={styles.faqQuestionCopy}>
          {showCategory && (
            <span className={styles.faqItemCategory}>{getSiteFaqCategoryLabel(item.category)}</span>
          )}
          <span className={styles.faqQuestionText}>
            <HighlightText text={item.question} query={searchQuery} />
          </span>
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
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<SiteFAQCategory>('usage-guide');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const questionsRef = useRef<HTMLElement>(null);

  const isSearching = searchQuery.trim().length > 0;
  const activeCategoryLabel = getSiteFaqCategoryLabel(activeCategory);

  const activeItems = useMemo(
    () => siteFaqItems.filter(item => item.category === activeCategory),
    [activeCategory],
  );

  const searchResults = useMemo(
    () => searchSiteFaqQuestions(searchQuery),
    [searchQuery],
  );

  const subsections = useMemo(() => getSiteFaqSubsections(activeCategory), [activeCategory]);

  const updateUrl = useCallback((category: SiteFAQCategory, query: string) => {
    const params = new URLSearchParams();
    params.set('category', category);
    if (query.trim()) params.set('q', query.trim());
    window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && isValidSiteFaqCategory(category)) {
      setActiveCategory(category);
    }
    const q = params.get('q');
    if (q) setSearchQuery(q);
  }, []);

  const selectCategory = (category: SiteFAQCategory) => {
    setActiveCategory(category);
    setOpenFaqId(null);
    setSearchQuery('');
    updateUrl(category, '');
    requestAnimationFrame(() => {
      questionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setOpenFaqId(null);
    updateUrl(activeCategory, value);
  };

  const clearSearch = () => {
    handleSearchChange('');
  };

  const toggleItem = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const renderCategoryItems = (items: SiteFAQItem[]) => {
    if (items.length === 0) {
      return <div className={styles.emptyState}>No FAQs in this category yet.</div>;
    }

    if (subsections.length === 0) {
      return (
        <div className={styles.faqList}>
          {items.map(item => (
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
        items: items.filter(item => item.subsection === section.id),
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
          <motion.div
            className={styles.heroHeadingRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.heroBadge}>FAQ</span>
            <h1 id="faq-hero-heading" className={styles.heroTitle}>
              Frequently Asked Questions
            </h1>
          </motion.div>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about Saukhyam reusable pads, covering usage and washing to science and impact.
          </motion.p>
        </div>
      </section>

      <div className={styles.mainShell}>
        <section className={styles.searchSection} aria-label="Search FAQs">
          <div className={styles.searchWrap}>
            <Search size={20} className={styles.searchIcon} aria-hidden="true" />
            <input
              type="search"
              value={searchQuery}
              onChange={e => handleSearchChange(e.target.value)}
              placeholder="Search questions about periods, reusable pads, washing, banana fiber, HEAL, products, and more..."
              className={styles.searchInput}
              aria-label="Search FAQ questions"
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.searchClear}
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </section>

        <div className={`${styles.kbLayout} ${isSearching ? styles.kbLayoutSearch : ''}`}>
          {!isSearching && (
            <nav className={styles.mobileCategoryNav} aria-label="FAQ categories">
              <h2 className={styles.mobileCategoryHeading}>Categories</h2>
              <div className={styles.mobileCategoryScroll}>
                {siteFaqCategories.map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`${styles.categoryPill} ${activeCategory === cat.id ? styles.categoryPillActive : ''}`}
                    onClick={() => selectCategory(cat.id)}
                    aria-current={activeCategory === cat.id ? 'true' : undefined}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </nav>
          )}

          <div className={styles.kbTwoColumn}>
            <section
              ref={questionsRef}
              className={styles.questionsArea}
              aria-label="FAQ questions"
            >
              <AnimatePresence mode="wait">
                {isSearching ? (
                  <motion.div
                    key={`search-${searchQuery}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className={styles.searchMeta}>
                      {searchResults.length} result{searchResults.length === 1 ? '' : 's'} for &ldquo;
                      {searchQuery.trim()}&rdquo;
                    </p>
                    {searchResults.length === 0 ? (
                      <div className={styles.emptyState}>
                        No questions matched your search. Try a different keyword.
                      </div>
                    ) : (
                      <div className={styles.faqList}>
                        {searchResults.map(item => (
                          <FaqAccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openFaqId === item.id}
                            onToggle={() => toggleItem(item.id)}
                            searchQuery={searchQuery}
                            showCategory
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.categorySectionHeader}>
                      <h2 className={styles.categorySectionTitle}>{activeCategoryLabel}</h2>
                    </div>
                    {renderCategoryItems(activeItems)}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {!isSearching && (
              <aside className={styles.categoriesSidebar} aria-labelledby="faq-sidebar-heading">
                <div className={styles.sidebarCard}>
                  <h2 id="faq-sidebar-heading" className={styles.sidebarHeading}>
                    Categories
                  </h2>
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
            )}
          </div>
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
