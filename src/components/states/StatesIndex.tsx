'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, ArrowRight, Globe } from 'lucide-react';
import { stateListSummary } from '@/data/states';
import styles from '@/app/programs/states/statePage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function StatesIndex() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'reach' | 'care' | 'both'>('all');

  const filtered = useMemo(() => {
    return stateListSummary.filter(s => {
      const matchFilter = filter === 'all' || s.programFocus === filter || (filter === 'both' && s.programFocus === 'both');
      const q = query.toLowerCase();
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [query, filter]);

  return (
    <div className={styles.page}>
      <section className={styles.indexHero}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.span variants={fadeUp} className={styles.heroLabel} style={{ marginBottom: '1rem' }}>
              <Globe size={14} /> REACH & CARE · India
            </motion.span>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, marginBottom: '0.75rem' }}>
              State <span className={styles.heroAccent}>Impact Pages</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto' }}>
              Explore Saukhyam&apos;s reach across 10 states and our national footprint — campaigns, partners, and stories of change.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.indexSearch}>
              <Search size={18} />
              <input
                type="search"
                placeholder="Search states…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="Search states"
              />
            </motion.div>
            <motion.div variants={fadeUp} className={styles.filterTabs} style={{ justifyContent: 'center', marginTop: '1rem' }}>
              {(['all', 'reach', 'care', 'both'] as const).map(f => (
                <button
                  key={f}
                  type="button"
                  className={`${styles.filterTab} ${filter === f ? styles.filterTabActive : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? 'All' : f.toUpperCase()}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className={styles.statesGrid}>
            {filtered.map((s, i) => (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link href={`/programs/states/${s.slug}`} className={styles.stateCard}>
                  <div className={styles.stateCardImage}>
                    <Image src={s.heroImage} alt={s.name} fill sizes="33vw" />
                  </div>
                  <div className={styles.stateCardBody}>
                    <span className={styles.sectionBadge}>{s.programFocus.toUpperCase()}</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, margin: '0.5rem 0' }}>{s.name}</h2>
                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{s.tagline}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--green-700)', fontWeight: 700, marginTop: '0.75rem' }}>
                      <MapPin size={12} style={{ display: 'inline' }} /> {(s.womenReached / 1000).toFixed(0)}K+ women reached
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: '0.75rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--green-700)' }}>
                      Explore <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
