'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ChevronRight, User } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/blog';
import { formatBlogDateShort } from '@/lib/blog';
import styles from '@/app/blog/page.module.css';

interface BlogCardProps {
  post: BlogPost;
  wide?: boolean;
  index?: number;
}

export default function BlogCard({ post, wide, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`${styles.blogCard} ${wide ? styles.blogCardWide : ''}`}
    >
      <Link href={`/blog/${post.slug}`} className={styles.blogCardLink}>
        <div className={styles.blogImageWrap}>
          <Image
            src={post.image}
            alt={post.coverAlt ?? post.title}
            fill
            sizes={wide ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
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
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className={styles.tag}><Tag size={9} /> {tag}</span>
            ))}
          </div>
          <div className={styles.blogFooter}>
            <div className={styles.blogAuthor}>
              <div className={styles.authorAvatarSm}><User size={12} /></div>
              <span>{post.author}</span>
            </div>
            <span className={styles.readMore}>
              Read More <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
