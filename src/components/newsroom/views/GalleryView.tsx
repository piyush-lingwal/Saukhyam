'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  galleryItems,
  PROGRAM_CATEGORY_LABELS,
  type GalleryItem,
  type ProgramCategory,
} from '@/data/newsroom/gallery';
import m from '../media.module.css';

const filters = ['all', 'heal', 'care', 'reach'] as const;

export default function GalleryView() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('all');
  const filtered =
    filter === 'all' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className={m.viewStack}>
      <div className={m.filterRow}>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`${m.filterBtn} ${filter === f ? m.filterBtnActive : ''}`}
          >
            {f === 'all' ? 'All' : PROGRAM_CATEGORY_LABELS[f as ProgramCategory]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className={m.galleryMosaic}
          style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '180px' }}
        >
          {filtered.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.figure
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className={`${m.galleryCell} ${item.span === 'wide' ? m.galleryWide : ''} ${item.span === 'tall' ? m.galleryTall : ''}`}
    >
      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="33vw" />
      <div className={m.galleryOverlay} />
      <figcaption>
        <span className={m.galleryTag}>{PROGRAM_CATEGORY_LABELS[item.category]}</span>
        <div className={m.galleryMeta}>
          <p className={m.galleryTitle}>{item.title}</p>
          <p className={m.galleryLocation} style={{ fontSize: '0.7rem', opacity: 0.85 }}>{item.location}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
