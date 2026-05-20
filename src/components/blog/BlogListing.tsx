'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Search, BookOpen, ArrowRight } from 'lucide-react';
import { useBlogCatalog } from '@/hooks/useBlogCatalog';
import { BLOG_CATEGORIES } from '@/data/blog';
import BlogFeaturedCard from './BlogFeaturedCard';
import BlogCard from './BlogCard';
import BlogPagination from './BlogPagination';
import BlogSkeleton from './BlogSkeleton';
import BlogThemeToggle from './BlogThemeToggle';
import styles from '@/app/blog/page.module.css';

export default function BlogListing() {
  const {
    featured,
    posts,
    category,
    setCategory,
    query,
    setQuery,
    page,
    totalPages,
    totalCount,
    isLoading,
    goToPage,
  } = useBlogCatalog();

  return (
    <div className={styles.blogPage}>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroTopRow}>
              <span className={styles.heroBadge}><Leaf size={13} /> Stories & Insights</span>
              <BlogThemeToggle />
            </div>
            <h1 className={styles.heroTitle}>
              Real Stories.<br />
              <span className={styles.heroAccent}>Real Change.</span>
            </h1>
            <p className={styles.heroDesc}>
              25 stories from tribal villages to college campuses — impact, science, sustainability, and voices we&apos;re proud to share.
            </p>
          </motion.div>
        </div>
      </section>

      {featured && (
        <section className={styles.featuredSection}>
          <div className="container">
            <div className={styles.featuredLabel}><span>✦ Featured Story</span></div>
            <BlogFeaturedCard post={featured} />
          </div>
        </section>
      )}

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <div className={styles.categoryTabs}>
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  type="button"
                  className={`${styles.catTab} ${category === cat.key ? styles.catTabActive : ''}`}
                  onClick={() => setCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className={styles.searchWrap}>
              <Search size={15} className={styles.searchIcon} />
              <input
                type="search"
                placeholder="Search stories, tags, authors…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className={styles.searchInput}
                aria-label="Search blog posts"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gridSection} id="blog-grid">
        <div className="container">
          <p className={styles.resultsCount}>
            <strong>{totalCount}</strong> {totalCount === 1 ? 'story' : 'stories'}
            {query && <> matching &quot;{query}&quot;</>}
          </p>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <BlogSkeleton key="loading" count={9} />
            ) : posts.length > 0 ? (
              <motion.div
                key={`${category}-${query}-${page}`}
                className={styles.blogGrid}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {posts.map((post, idx) => (
                  <BlogCard key={post.id} post={post} wide={idx === 0 && page === 1} index={idx} />
                ))}
              </motion.div>
            ) : (
              <motion.div key="empty" className={styles.empty} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <BookOpen size={48} />
                <p>No stories found. Try another category or search term.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <BlogPagination
            currentPage={page}
            totalPages={totalPages}
            totalCount={totalCount}
            onPageChange={goToPage}
          />
        </div>
      </section>

      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h3>Have a story to share?</h3>
            <p>We feature voices from our community — write to us and inspire others.</p>
            <Link href="/contact" className={styles.ctaBtn}>
              Share Your Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
