'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, Tag,
  Share2, Link2, Check, BookOpen,
  Info, CheckCircle2, AlertTriangle, Quote as QuoteIcon,
  ShoppingBag, Leaf,
} from 'lucide-react';

/* Brand/social icons — lucide-react no longer ships brand logos,
   so we define them locally with the same `size` prop convention. */
function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
    </svg>
  );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import { blogPosts, type BlogBlock } from '@/data/content';
import styles from './page.module.css';

const CATEGORY_COLORS: Record<string, string> = {
  community: '#22c55e',
  science: '#3b82f6',
  sustainability: '#10b981',
  stories: '#f59e0b',
};

const CATEGORY_LABELS: Record<string, string> = {
  community: 'Community',
  science: 'Science',
  sustainability: 'Sustainability',
  stories: 'Personal Stories',
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

/* ──────────────────────────────────────────────────────────────
   Block renderer — every BlogBlock type has a component here.
   To add a new block type: extend BlogBlock in content.ts and
   add a case below. That is the full extension point.
   ────────────────────────────────────────────────────────────── */
function BlockRenderer({ block, isFirst }: { block: BlogBlock; isFirst: boolean }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className={`${styles.paragraph} ${isFirst ? styles.paragraphLede : ''}`}>
          {block.text}
        </p>
      );

    case 'heading': {
      const Tag = block.level === 2 ? 'h2' : 'h3';
      return (
        <Tag className={block.level === 2 ? styles.h2 : styles.h3}>
          {block.text}
        </Tag>
      );
    }

    case 'image':
      return (
        <figure className={styles.figure}>
          <div className={styles.figureImg}>
            <img src={block.src} alt={block.alt} loading="lazy" />
          </div>
          {block.caption && (
            <figcaption className={styles.figureCaption}>{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'quote':
      return (
        <blockquote className={styles.quote}>
          <QuoteIcon size={28} className={styles.quoteIcon} aria-hidden="true" />
          <p className={styles.quoteText}>&ldquo;{block.text}&rdquo;</p>
          {block.attribution && (
            <cite className={styles.quoteAttr}>— {block.attribution}</cite>
          )}
        </blockquote>
      );

    case 'list': {
      const List = block.style === 'number' ? 'ol' : 'ul';
      return (
        <List className={block.style === 'number' ? styles.listOrdered : styles.listBullet}>
          {block.items.map((item, i) => (
            <li key={i} className={styles.listItem}>{item}</li>
          ))}
        </List>
      );
    }

    case 'callout': {
      const Icon =
        block.variant === 'success' ? CheckCircle2 :
        block.variant === 'warning' ? AlertTriangle : Info;
      return (
        <aside className={`${styles.callout} ${styles[`callout_${block.variant}`]}`}>
          <div className={styles.calloutIcon}><Icon size={18} /></div>
          <div className={styles.calloutBody}>
            {block.title && <div className={styles.calloutTitle}>{block.title}</div>}
            <p className={styles.calloutText}>{block.text}</p>
          </div>
        </aside>
      );
    }

    default:
      return null;
  }
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const post = blogPosts.find((p) => p.slug === slug);

  // Hooks must be called unconditionally — keep these above the early return.
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCategory = blogPosts.filter(
      (p) => p.slug !== post.slug && p.category === post.category
    );
    const others = blogPosts.filter(
      (p) => p.slug !== post.slug && p.category !== post.category
    );
    return [...sameCategory, ...others].slice(0, 3);
  }, [post]);

  if (!post) {
    // Invalid slug — surface a themed 404 instead of Next's default.
    if (typeof window !== 'undefined') {
      notFound();
    }
    return (
      <div className={styles.notFoundPage}>
        <div className="container">
          <Leaf size={56} className={styles.notFoundIcon} />
          <h1>Story Not Found</h1>
          <p>The article you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/blog" className={styles.notFoundBtn}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const categoryColor = CATEGORY_COLORS[post.category];
  const categoryLabel = CATEGORY_LABELS[post.category];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignored */
    }
  };

  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}`;

  return (
    <article className={styles.blogDetail}>
      {/* Reading-progress bar */}
      <div className={styles.progressBar} aria-hidden="true">
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <motion.nav
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={12} />
            <span className={styles.breadcrumbCurrent}>{post.title}</span>
          </motion.nav>

          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeInUp}
              className={styles.categoryBadge}
              style={{ background: categoryColor }}
            >
              {categoryLabel}
            </motion.span>

            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              {post.title}
            </motion.h1>

            <motion.p variants={fadeInUp} className={styles.heroExcerpt}>
              {post.excerpt}
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroMeta}>
              <div className={styles.authorChip}>
                <div className={styles.authorAvatar}>{post.author.charAt(0)}</div>
                <div className={styles.authorChipText}>
                  <span className={styles.authorChipName}>{post.author}</span>
                  <span className={styles.authorChipRole}>{post.authorRole}</span>
                </div>
              </div>
              <span className={styles.heroMetaDivider} aria-hidden="true" />
              <span className={styles.metaItem}>
                <Calendar size={13} /> {formatDate(post.date)}
              </span>
              <span className={styles.metaItem}>
                <Clock size={13} /> {post.readTime}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ── Cover Image (overlapping) ── */}
      <div className={styles.coverWrap}>
        <div className="container">
          <motion.div
            className={styles.cover}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={post.image} alt={post.coverAlt ?? post.title} />
          </motion.div>
        </div>
      </div>

      {/* ── Body Layout ── */}
      <section className={styles.bodySection}>
        <div className="container">
          <div className={styles.bodyGrid}>
            {/* Sticky sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarInner}>
                <div className={styles.sidebarCard}>
                  <div className={styles.sidebarAvatar}>{post.author.charAt(0)}</div>
                  <div className={styles.sidebarAuthor}>{post.author}</div>
                  <div className={styles.sidebarRole}>{post.authorRole}</div>
                  {post.authorBio && (
                    <p className={styles.sidebarBio}>{post.authorBio}</p>
                  )}
                </div>

                <div className={styles.sidebarSection}>
                  <div className={styles.sidebarLabel}>
                    <Share2 size={12} /> Share
                  </div>
                  <div className={styles.shareRow}>
                    <a
                      href={shareTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.shareBtn}
                      aria-label="Share on Twitter"
                    >
                      <TwitterIcon size={15} />
                    </a>
                    <a
                      href={shareFacebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.shareBtn}
                      aria-label="Share on Facebook"
                    >
                      <FacebookIcon size={15} />
                    </a>
                    <a
                      href={shareWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.shareBtn}
                      aria-label="Share on WhatsApp"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.53 0 .22 5.31.22 11.84a11.78 11.78 0 0 0 1.58 5.92L0 24l6.39-1.67a11.82 11.82 0 0 0 5.67 1.44h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.39-8.45Zm-8.46 18.22h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.8.99 1.01-3.71-.24-.38a9.82 9.82 0 0 1-1.5-5.18c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.11 1.03 6.97 2.89a9.8 9.8 0 0 1 2.88 6.97c0 5.43-4.42 9.85-9.81 9.85Zm5.42-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                      </svg>
                    </a>
                    <button
                      onClick={copyLink}
                      className={styles.shareBtn}
                      aria-label="Copy link"
                      type="button"
                    >
                      {copied ? <Check size={15} /> : <Link2 size={15} />}
                    </button>
                  </div>
                </div>

                <div className={styles.sidebarSection}>
                  <div className={styles.sidebarLabel}>
                    <Tag size={12} /> Tags
                  </div>
                  <div className={styles.sidebarTags}>
                    {post.tags.map((t) => (
                      <span key={t} className={styles.sidebarTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className={styles.content}>
              {post.content.map((block, i) => (
                <BlockRenderer key={i} block={block} isFirst={i === 0 && block.type === 'paragraph'} />
              ))}

              {/* Mobile-only: inline share + tags */}
              <div className={styles.mobileMeta}>
                <div className={styles.sidebarLabel}>
                  <Share2 size={12} /> Share this story
                </div>
                <div className={styles.shareRow}>
                  <a href={shareTwitter} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on Twitter">
                    <TwitterIcon size={15} />
                  </a>
                  <a href={shareFacebook} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on Facebook">
                    <FacebookIcon size={15} />
                  </a>
                  <a href={shareWhatsApp} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on WhatsApp">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.53 0 .22 5.31.22 11.84a11.78 11.78 0 0 0 1.58 5.92L0 24l6.39-1.67a11.82 11.82 0 0 0 5.67 1.44h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.39-8.45Z" />
                    </svg>
                  </a>
                  <button onClick={copyLink} className={styles.shareBtn} aria-label="Copy link" type="button">
                    {copied ? <Check size={15} /> : <Link2 size={15} />}
                  </button>
                </div>
                <div className={styles.mobileTags}>
                  {post.tags.map((t) => (
                    <span key={t} className={styles.sidebarTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Author card ── */}
      <section className={styles.authorSection}>
        <div className="container">
          <div className={styles.authorCard}>
            <div className={styles.authorCardAvatar}>{post.author.charAt(0)}</div>
            <div className={styles.authorCardBody}>
              <span className={styles.authorCardLabel}>Written by</span>
              <h3 className={styles.authorCardName}>{post.author}</h3>
              <span className={styles.authorCardRole}>{post.authorRole}</span>
              {post.authorBio && (
                <p className={styles.authorCardBio}>{post.authorBio}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <div className={styles.relatedHeader}>
              <div>
                <span className={styles.relatedLabel}>
                  <BookOpen size={13} /> Keep Reading
                </span>
                <h2 className={styles.relatedTitle}>More Stories from Saukhyam</h2>
              </div>
              <Link href="/blog" className={styles.relatedAllBtn}>
                All Stories <ArrowRight size={14} />
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImage}>
                    <img src={rp.image} alt={rp.coverAlt ?? rp.title} loading="lazy" />
                    <span
                      className={styles.relatedCategoryTag}
                      style={{ background: CATEGORY_COLORS[rp.category] }}
                    >
                      {CATEGORY_LABELS[rp.category]}
                    </span>
                  </div>
                  <div className={styles.relatedBody}>
                    <div className={styles.relatedMeta}>
                      <span><Calendar size={11} /> {formatDate(rp.date)}</span>
                      <span><Clock size={11} /> {rp.readTime}</span>
                    </div>
                    <h3 className={styles.relatedCardTitle}>{rp.title}</h3>
                    <p className={styles.relatedExcerpt}>{rp.excerpt}</p>
                    <span className={styles.relatedReadMore}>
                      Read story <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA strip ── */}
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div>
              <h3>Be part of the next story.</h3>
              <p>Every switch to Saukhyam is a paragraph we haven&apos;t written yet.</p>
            </div>
            <Link href="/products" className={styles.ctaBtn}>
              <ShoppingBag size={18} /> Shop Now
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
