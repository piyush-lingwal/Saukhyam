'use client';

import Link from 'next/link';
import BlogImage from './BlogImage';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/blog';
import { formatBlogDateShort } from '@/lib/blog';
import styles from '@/app/blog/page.module.css';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const firstTag = post.tags[0];
  const secondTag = post.tags[1];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={styles.blogCard}
    >
      <Link href={`/blog/${post.slug}`} className={styles.blogCardLink}>
        <div className={styles.blogImageWrap}>
          <BlogImage
            src={post.image}
            alt={post.coverAlt ?? post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.blogCardImage}
            loading="lazy"
          />
          <span
            className={styles.categoryTag}
            style={{ background: CATEGORY_COLORS[post.category] }}
          >
            {CATEGORY_LABELS[post.category]}
          </span>
        </div>

        <div className={styles.blogInfo}>
          <div className={styles.blogMeta}>
            <span><Calendar size={11} /> {formatBlogDateShort(post.date)}</span>
            <span><Clock size={11} /> {post.readTime}</span>
          </div>
          <h2 className={styles.blogTitle}>{post.title}</h2>
          <p className={styles.blogExcerpt}>{post.excerpt}</p>
          <div className={styles.blogTags}>
            {firstTag && (
              <span key={firstTag} className={styles.tag}>
                <Tag size={9} /> {firstTag}
              </span>
            )}
            {secondTag && (
              <span key={secondTag} className={styles.tag}>
                <Tag size={9} /> {secondTag}
              </span>
            )}
          </div>
          <div className={styles.blogFooter}>
            <span className={styles.readMore}>
              Read More <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
