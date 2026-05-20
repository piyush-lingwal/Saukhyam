'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar, Clock, ChevronRight, Share2, Link2, Check,
  BookOpen, ArrowRight, ShoppingBag, Leaf,
} from 'lucide-react';
import { getBlogPostBySlug } from '@/data/blog';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/blog';
import { formatBlogDate, getRelatedPosts } from '@/lib/blog';
import BlogBlockRenderer from './BlogBlockRenderer';
import BlogNewsletter from './BlogNewsletter';
import BlogComments from './BlogComments';
import BlogThemeToggle from './BlogThemeToggle';
import styles from '@/app/blog/[slug]/page.module.css';

function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
    </svg>
  );
}

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ShareButtons({ title, shareUrl, copied, onCopy }: {
  title: string; shareUrl: string; copied: boolean; onCopy: () => void;
}) {
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${title} — ${shareUrl}`)}`;

  return (
    <div className={styles.shareRow}>
      <a href={shareTwitter} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on Twitter">
        <TwitterIcon size={15} />
      </a>
      <a href={shareFacebook} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on Facebook">
        <FacebookIcon size={15} />
      </a>
      <a href={shareWhatsApp} target="_blank" rel="noopener noreferrer" className={styles.shareBtn} aria-label="Share on WhatsApp">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.53 0 .22 5.31.22 11.84a11.78 11.78 0 0 0 1.58 5.92L0 24l6.39-1.67a11.82 11.82 0 0 0 5.67 1.44h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.39-8.45Z" />
        </svg>
      </a>
      <button type="button" onClick={onCopy} className={styles.shareBtn} aria-label="Copy link">
        {copied ? <Check size={15} /> : <Link2 size={15} />}
      </button>
    </div>
  );
}

export default function BlogDetailView() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const post = getBlogPostBySlug(slug);

  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const { scrollY } = useScroll();
  const coverY = useTransform(scrollY, [0, 400], [0, 60]);

  useEffect(() => {
    if (typeof window !== 'undefined') setShareUrl(window.location.href);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const categoryColor = CATEGORY_COLORS[post.category];
  const categoryLabel = CATEGORY_LABELS[post.category];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  };

  return (
    <article className={styles.blogDetail}>
      <div className={styles.progressBar} aria-hidden>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <header className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={12} />
            <span className={styles.breadcrumbCurrent}>{post.title}</span>
            <span className={styles.breadcrumbTheme}><BlogThemeToggle /></span>
          </nav>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className={styles.categoryBadge} style={{ background: categoryColor }}>
              {categoryLabel}
            </span>
            <h1 className={styles.heroTitle}>{post.title}</h1>
            <p className={styles.heroExcerpt}>{post.excerpt}</p>
            <div className={styles.heroMeta}>
              <div className={styles.authorChip}>
                <div className={styles.authorAvatar}>{post.author.charAt(0)}</div>
                <div className={styles.authorChipText}>
                  <span className={styles.authorChipName}>{post.author}</span>
                  <span className={styles.authorChipRole}>{post.authorRole}</span>
                </div>
              </div>
              <span className={styles.heroMetaDivider} aria-hidden />
              <span className={styles.metaItem}><Calendar size={13} /> {formatBlogDate(post.date)}</span>
              <span className={styles.metaItem}><Clock size={13} /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </header>

      <div className={styles.coverWrap}>
        <div className="container">
          <motion.div className={styles.cover} style={{ y: coverY }}>
            <Image
              src={post.image}
              alt={post.coverAlt ?? post.title}
              width={1200}
              height={675}
              priority
              className={styles.coverImage}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </motion.div>
        </div>
      </div>

      <section className={styles.bodySection}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarInner}>
                <div className={styles.sidebarCard}>
                  <div className={styles.sidebarAvatar}>{post.author.charAt(0)}</div>
                  <div className={styles.sidebarAuthor}>{post.author}</div>
                  <div className={styles.sidebarRole}>{post.authorRole}</div>
                  {post.authorBio && <p className={styles.sidebarBio}>{post.authorBio}</p>}
                </div>
                <div className={styles.sidebarSection}>
                  <div className={styles.sidebarLabel}><Share2 size={12} /> Share</div>
                  <ShareButtons title={post.title} shareUrl={shareUrl} copied={copied} onCopy={copyLink} />
                </div>
                <div className={styles.sidebarSection}>
                  <div className={styles.sidebarLabel}>Tags</div>
                  <div className={styles.sidebarTags}>
                    {post.tags.map(t => <span key={t} className={styles.sidebarTag}>{t}</span>)}
                  </div>
                </div>
              </div>
            </aside>

            <div className={styles.content}>
              {post.content.map((block, i) => (
                <BlogBlockRenderer
                  key={i}
                  block={block}
                  isFirst={i === 0 && block.type === 'paragraph'}
                />
              ))}
              <BlogNewsletter />
              <BlogComments />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.authorSection}>
        <div className="container">
          <div className={styles.authorCard}>
            <div className={styles.authorCardAvatar}>{post.author.charAt(0)}</div>
            <div className={styles.authorCardBody}>
              <span className={styles.authorCardLabel}>Written by</span>
              <h3 className={styles.authorCardName}>{post.author}</h3>
              <span className={styles.authorCardRole}>{post.authorRole}</span>
              {post.authorBio && <p className={styles.authorCardBio}>{post.authorBio}</p>}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <div className={styles.relatedHeader}>
              <div>
                <span className={styles.relatedLabel}><BookOpen size={13} /> Keep Reading</span>
                <h2 className={styles.relatedTitle}>More Stories from Saukhyam</h2>
              </div>
              <Link href="/blog" className={styles.relatedAllBtn}>All Stories <ArrowRight size={14} /></Link>
            </div>
            <div className={styles.relatedGrid}>
              {relatedPosts.map(rp => (
                <Link key={rp.id} href={`/blog/${rp.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <Image src={rp.image} alt={rp.coverAlt ?? rp.title} fill className={styles.relatedCardImage} sizes="33vw" loading="lazy" />
                    <span className={styles.relatedCategoryTag} style={{ background: CATEGORY_COLORS[rp.category] }}>
                      {CATEGORY_LABELS[rp.category]}
                    </span>
                  </div>
                  <div className={styles.relatedBody}>
                    <div className={styles.relatedMeta}>
                      <span><Calendar size={11} /> {formatBlogDate(rp.date)}</span>
                      <span><Clock size={11} /> {rp.readTime}</span>
                    </div>
                    <h3 className={styles.relatedCardTitle}>{rp.title}</h3>
                    <p className={styles.relatedExcerpt}>{rp.excerpt}</p>
                    <span className={styles.relatedReadMore}>Read story <ChevronRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
