'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Package, Play, Users } from 'lucide-react';
import styles from './FactoryVideoShowcase.module.css';

const VIDEO_ID = 'Q-nxYk30pho';
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

const videoStats = [
  { icon: Package, value: '10 Lakh+', label: 'Annual Capacity' },
  { icon: Leaf, value: 'Banana Fiber', label: 'Natural Absorbent' },
  { icon: Users, value: 'Women-Led', label: 'Production Network' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function FactoryVideoShowcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.showcase}>
      <motion.div
        className={styles.videoShell}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className={styles.videoGlow} aria-hidden="true" />
        <motion.div
          className={styles.videoCard}
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.videoBadge}>
            India&apos;s Largest Reusable Pad Factory
          </span>

          {!playing ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={THUMBNAIL}
                alt="Saukhyam Factory manufacturing preview"
                className={styles.videoThumb}
              />
              <button
                type="button"
                className={styles.playBtn}
                onClick={() => setPlaying(true)}
                aria-label="Play factory video"
              >
                <span className={styles.playRing} aria-hidden="true" />
                <span className={styles.playInner}>
                  <Play size={26} fill="currentColor" aria-hidden="true" />
                </span>
              </button>
            </>
          ) : (
            <iframe
              className={styles.videoIframe}
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Inside the Saukhyam Factory"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
      </motion.div>

      <motion.p
        className={styles.videoCaption}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        See how banana fiber becomes a sustainable menstrual solution.
      </motion.p>

      <motion.div
        className={styles.videoCtas}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <a href="#manufacturing-timeline" className={styles.ctaPrimary}>
          Explore Our Manufacturing Process
          <ArrowRight size={17} className={styles.ctaArrow} aria-hidden="true" />
        </a>
        <Link href="/impact" className={styles.ctaSecondary}>
          View Our Impact
        </Link>
      </motion.div>

      <motion.div
        className={styles.videoStats}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {videoStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className={styles.videoStatCard}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className={styles.videoStatIcon} aria-hidden="true">
                <Icon size={18} />
              </div>
              <span className={styles.videoStatValue}>{stat.value}</span>
              <span className={styles.videoStatLabel}>{stat.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
