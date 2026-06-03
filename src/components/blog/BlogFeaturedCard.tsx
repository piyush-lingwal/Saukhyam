'use client';

import Link from 'next/link';
import BlogImage from './BlogImage';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/blog';
import { formatBlogDate } from '@/lib/blog';
import styles from '@/app/blog/page.module.css';

export default function BlogFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/blog/${post.slug}`} className={styles.featuredCard}>
        <div className={styles.featuredImage}>
          <BlogImage
            src={post.image}
            alt={post.coverAlt ?? post.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            className={styles.featuredCardImage}
          />
          <div className={styles.featuredImageOverlay} />
          <span
            className={styles.featuredCategoryBadge}
            style={{ background: CATEGORY_COLORS[post.category] }}
          >
            {CATEGORY_LABELS[post.category]}
          </span>
        </div>
        <div className={styles.featuredBody}>
          <div className={styles.featuredMeta}>
            <span className={styles.featuredMetaItem}>
              <Calendar size={13} /> {formatBlogDate(post.date)}
            </span>
            <span className={styles.featuredMetaItem}>
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
          <h2 className={styles.featuredTitle}>{post.title}</h2>
          <p className={styles.featuredExcerpt}>{post.excerpt}</p>
          <div className={styles.featuredTags}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={styles.tag}>
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
          <div className={styles.featuredFooter}>
            <span className={styles.featuredReadBtn}>
              Read Full Story <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
