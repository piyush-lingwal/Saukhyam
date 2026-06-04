'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, ArrowRight, Search,
  Tag, User, BookOpen, ChevronRight, Leaf,
} from 'lucide-react';
import { blogPosts } from '@/data/content';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const CATEGORIES = [
  { key: 'all', label: 'All Stories' },
  { key: 'community', label: 'Community' },
  { key: 'science', label: 'Science' },
  { key: 'sustainability', label: 'Sustainability' },
  { key: 'stories', label: 'Personal Stories' },
];

const CATEGORY_COLORS: Record<string, string> = {
  community: '#22c55e',
  science: '#3b82f6',
  sustainability: '#10b981',
  stories: '#f59e0b',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');

  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  const filtered = (activeCategory === 'all' ? rest : rest.filter(p => p.category === activeCategory))
    .filter(p =>
      query === '' ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className={styles.blogPage}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}><Leaf size={13} /> Stories & Insights</span>
            <h1 className={styles.heroTitle}>
              Real Stories.<br />
              <span className={styles.heroAccent}>Real Change.</span>
            </h1>
            <p className={styles.heroDesc}>
              From tribal villages to college campuses, featuring impact stories, health insights,
              and the voices of women we&apos;re proud to serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <section className={styles.featuredSection}>
          <div className="container">
            <motion.div
              className={styles.featuredLabel}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span>✦ Featured Story</span>
            </motion.div>

            <motion.a
              href={`/blog/${featured.slug}`}
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.featuredImage}>
                <img src={featured.image} alt={featured.title} />
                <div className={styles.featuredImageOverlay} />
                <span
                  className={styles.featuredCategoryBadge}
                  style={{ background: CATEGORY_COLORS[featured.category] }}
                >
                  {featured.category}
                </span>
              </div>

              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredMetaItem}>
                    <Calendar size={13} />
                    {new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className={styles.featuredMetaItem}>
                    <Clock size={13} />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>

                <div className={styles.featuredTags}>
                  {featured.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      <Tag size={10} /> {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.featuredFooter}>
                  <div className={styles.featuredAuthor}>
                    <div className={styles.authorAvatar}>{featured.author.charAt(0)}</div>
                    <div>
                      <div className={styles.authorName}>{featured.author}</div>
                      <div className={styles.authorRole}>{featured.authorRole}</div>
                    </div>
                  </div>
                  <span className={styles.featuredReadBtn}>
                    Read Full Story <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </section>
      )}

      {/* ── Filter Bar ── */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            <div className={styles.categoryTabs}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  className={`${styles.catTab} ${activeCategory === cat.key ? styles.catTabActive : ''}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className={styles.searchWrap}>
              <Search size={15} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search stories..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className={styles.gridSection}>
        <div className="container">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + query}
                className={styles.blogGrid}
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                {filtered.map((post, idx) => (
                  <motion.a
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className={`${styles.blogCard} ${idx === 0 ? styles.blogCardWide : ''}`}
                    variants={fadeInUp}
                  >
                    <div className={styles.blogImageWrap}>
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <span
                        className={styles.categoryTag}
                        style={{ background: CATEGORY_COLORS[post.category] }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <div className={styles.blogInfo}>
                      <div className={styles.blogMeta}>
                        <span><Calendar size={11} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span><Clock size={11} /> {post.readTime}</span>
                      </div>

                      <h2 className={styles.blogTitle}>{post.title}</h2>
                      <p className={styles.blogExcerpt}>{post.excerpt}</p>

                      <div className={styles.blogTags}>
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className={styles.tag}><Tag size={9} /> {tag}</span>
                        ))}
                      </div>

                      <div className={styles.blogFooter}>
                        <div className={styles.blogAuthor}>
                          <div className={styles.authorAvatarSm}>{post.author.charAt(0)}</div>
                          <span>{post.author}</span>
                        </div>
                        <span className={styles.readMore}>
                          Read <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className={styles.empty}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <BookOpen size={48} />
                <p>No stories found. More coming soon!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h3>Have a story to share?</h3>
            <p>We feature voices from our community, write to us and inspire others.</p>
            <Link href="/contact" className={styles.ctaBtn}>
              Share Your Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
