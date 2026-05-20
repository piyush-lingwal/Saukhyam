'use client';

import Image from 'next/image';
import { Info, CheckCircle2, AlertTriangle, Quote as QuoteIcon } from 'lucide-react';
import type { BlogBlock } from '@/types/blog';
import styles from '@/app/blog/[slug]/page.module.css';

export default function BlogBlockRenderer({ block, isFirst }: { block: BlogBlock; isFirst: boolean }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className={`${styles.paragraph} ${isFirst ? styles.paragraphLede : ''}`}>
          {block.text}
        </p>
      );
    case 'heading': {
      const Tag = block.level === 2 ? 'h2' : 'h3';
      return <Tag className={block.level === 2 ? styles.h2 : styles.h3}>{block.text}</Tag>;
    }
    case 'image':
      return (
        <figure className={styles.figure}>
          <div className={styles.figureImg}>
            <Image
              src={block.src}
              alt={block.alt}
              width={1200}
              height={675}
              className={styles.figureImage}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 720px"
            />
          </div>
          {block.caption && <figcaption className={styles.figureCaption}>{block.caption}</figcaption>}
        </figure>
      );
    case 'quote':
      return (
        <blockquote className={styles.quote}>
          <QuoteIcon size={28} className={styles.quoteIcon} aria-hidden />
          <p className={styles.quoteText}>&ldquo;{block.text}&rdquo;</p>
          {block.attribution && <cite className={styles.quoteAttr}>— {block.attribution}</cite>}
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
      const Icon = block.variant === 'success' ? CheckCircle2 : block.variant === 'warning' ? AlertTriangle : Info;
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
