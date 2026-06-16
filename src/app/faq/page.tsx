'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

const HERO_STATS = [
  { value: '30L+', label: 'Women & Girls Reached' },
  { value: '4,137+', label: 'Villages Impacted' },
  { value: '280+', label: 'Rural Livelihoods Created' },
  { value: '20+', label: 'National & Global Awards' },
];

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
    </div>
  );
}

function SearchField({
  value,
  onChange,
  onClear,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={`${styles.searchWrap} ${className ?? ''}`}>
      <Search size={20} className={styles.searchIcon} aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.searchInput}
        aria-label="Search FAQs"
      />
      {value && (
        <button type="button" className={styles.searchClear} onClick={onClear} aria-label="Clear search">
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<SiteFAQCategory>('why-reusable');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isSearching = searchQuery.trim().length > 0;

  const searchResults = useMemo(() => searchSiteFaq(searchQuery), [searchQuery]);

  const faqsByCategory = useMemo(
    () =>
      siteFaqCategories.map(cat => ({
        ...cat,
        count: getSiteFaqCount(cat.id),
        items: siteFaqItems.filter(item => item.category === cat.id),
        subsections: getSiteFaqSubsections(cat.id),
      })),
    [],
  );

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
      requestAnimationFrame(() => {
        document.getElementById(`faq-section-${category}`)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    }
    const q = params.get('q');
    if (q) setSearchQuery(q);
  }, []);

  useEffect(() => {
    if (isSearching) return;

    const sectionElements = siteFaqCategories
      .map(cat => document.getElementById(`faq-section-${cat.id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        if (isScrollingRef.current) return;

        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const id = visible[0].target.id.replace('faq-section-', '');
        if (isValidSiteFaqCategory(id)) {
          setActiveCategory(id);
        }
      },
      {
        rootMargin: '-120px 0px -55% 0px',
        threshold: [0.08, 0.2, 0.4],
      },
    );

    sectionElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isSearching]);

  const scrollToCategory = (category: SiteFAQCategory) => {
    setActiveCategory(category);
    setOpenFaqId(null);
    updateUrl(category, searchQuery);

    const el = document.getElementById(`faq-section-${category}`);
    if (!el) return;

    isScrollingRef.current = true;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setOpenFaqId(null);
    updateUrl(activeCategory, value);
  };

  const toggleItem = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const renderCategoryItems = (categoryId: SiteFAQCategory, items: SiteFAQItem[]) => {
    const subsections = getSiteFaqSubsections(categoryId);

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
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroDecor} aria-hidden="true">
          <span className={styles.heroBlob1} />
          <span className={styles.heroBlob2} />
          <span className={styles.heroBlob3} />
        </div>

        <div className={styles.heroInner}>
          <motion.p
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FAQ Knowledge Center
          </motion.p>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            Everything You Need to Know About
            <br />
            Saukhyam <span className={styles.heroAccent}>Reusable Pads</span>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            Get answers to the most frequently asked questions about menstrual health, reusable sanitary pads,
            banana fiber technology, product care, sustainability, and the impact created through Saukhyam&apos;s mission.
          </motion.p>

          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            {HERO_STATS.map(stat => (
              <div key={stat.label} className={styles.heroStatCard}>
                <span className={styles.heroStatValue}>{stat.value}</span>
                <span className={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            <SearchField
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={() => handleSearchChange('')}
              placeholder="Search questions, products, washing instructions, banana fiber technology..."
              className={styles.heroSearch}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Mobile category tabs ── */}
      {!isSearching && (
        <nav className={styles.mobileNav} aria-label="FAQ categories">
          <div className={styles.mobileNavScroll}>
            {siteFaqCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.mobileNavTab} ${activeCategory === cat.id ? styles.mobileNavTabActive : ''}`}
                onClick={() => scrollToCategory(cat.id)}
              >
                {cat.label}
                <span className={styles.mobileNavCount}>{getSiteFaqCount(cat.id)}</span>
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* ── Main knowledge base layout ── */}
      <div className={styles.kbShell}>
        <div className={styles.kbLayout}>
          {!isSearching && (
            <aside className={styles.sidebar} aria-label="FAQ category navigation">
              <div className={styles.sidebarInner}>
                <p className={styles.sidebarLabel}>Categories</p>
                <nav className={styles.sidebarNav}>
                  {siteFaqCategories.map(cat => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        className={`${styles.sidebarItem} ${isActive ? styles.sidebarItemActive : ''}`}
                        onClick={() => scrollToCategory(cat.id)}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <span className={styles.sidebarItemLabel}>{cat.label}</span>
                        <span className={styles.sidebarItemCount}>{getSiteFaqCount(cat.id)}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>
          )}

          <main className={styles.content}>
            <SearchField
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={() => handleSearchChange('')}
              placeholder="Search FAQs..."
              className={styles.contentSearch}
            />

            {isSearching && (
              <p className={styles.searchMeta}>
                {searchResults.length} result{searchResults.length === 1 ? '' : 's'} for &ldquo;{searchQuery.trim()}&rdquo;
              </p>
            )}

            {isSearching ? (
              <div className={styles.faqList}>
                {searchResults.length === 0 ? (
                  <div className={styles.emptyState}>No FAQs matched your search. Try different keywords.</div>
                ) : (
                  searchResults.map(item => (
                    <FaqAccordionItem
                      key={item.id}
                      item={item}
                      isOpen={openFaqId === item.id}
                      onToggle={() => toggleItem(item.id)}
                      showCategory
                    />
                  ))
                )}
              </div>
            ) : (
              faqsByCategory.map(cat => (
                <section
                  key={cat.id}
                  id={`faq-section-${cat.id}`}
                  className={styles.categorySection}
                  aria-labelledby={`faq-heading-${cat.id}`}
                >
                  <div className={styles.categorySectionHeader}>
                    <h2 id={`faq-heading-${cat.id}`} className={styles.categorySectionTitle}>
                      {cat.label}
                    </h2>
                    <span className={styles.categorySectionCount}>{cat.count} questions</span>
                  </div>
                  {cat.items.length === 0 ? (
                    <div className={styles.emptyState}>No FAQs in this category yet.</div>
                  ) : (
                    renderCategoryItems(cat.id, cat.items)
                  )}
                </section>
              ))
            )}

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
          </main>
        </div>
      </div>
    </div>
  );
}
