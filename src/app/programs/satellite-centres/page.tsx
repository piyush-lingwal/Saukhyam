'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, Layers3, MapPin, ShieldCheck } from 'lucide-react';
import SatelliteCentresShowcase from '@/components/satellite/SatelliteCentresShowcase';
import styles from './page.module.css';

const stats = [
  { icon: GitBranch, value: 'Hub & Spoke', label: 'Production Network' },
  { icon: MapPin, value: 'Multiple', label: 'Satellite Centres' },
  { icon: Layers3, value: 'District-Level', label: 'Manufacturing' },
  { icon: ShieldCheck, value: 'Quality-Controlled', label: 'Production System' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const cardStagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function SatelliteCentresPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="satellite-hero-title">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.heroInner}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span className={styles.heroLabel} variants={fadeUp}>
              Satellite Production Centres
            </motion.span>
            <motion.h1 id="satellite-hero-title" className={styles.heroTitle} variants={fadeUp}>
              Manufacturing Closer to Communities
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Saukhyam&apos;s satellite production centres extend the reach of our manufacturing
              ecosystem beyond the central factory in Kerala. Through a hub-and-spoke model,
              semi-processed materials are supplied from the manufacturing hub and transformed into
              finished reusable menstrual products by trained production teams across multiple
              regions.
            </motion.p>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              This decentralized approach enables consistent product quality, efficient operations,
              and scalable production while bringing manufacturing closer to the communities it
              serves.
            </motion.p>
            <motion.div className={styles.heroActions} variants={fadeUp}>
              <a href="#satellite-network" className={styles.btnPrimary}>
                Explore the Hub &amp; Spoke Model
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </a>
              <Link href="/contact" className={styles.btnSecondary}>
                Apply for a Satellite Centre
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className={styles.statsSection} aria-label="Satellite production statistics">
        <div className="container">
          <motion.div
            className={styles.statsGrid}
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.article
                  key={stat.label}
                  className={styles.statCard}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.statIcon} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Satellite Centres by State */}
      <section
        id="satellite-network"
        className={styles.section}
        aria-labelledby="network-heading"
      >
        <div className={styles.sectionBg} aria-hidden="true" />
        <div className={styles.sectionPattern} aria-hidden="true" />
        <div className={styles.sectionGlow} aria-hidden="true" />
        <div className="container">
          <motion.header
            className={styles.header}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Our Network
            </motion.span>
            <motion.h2 id="network-heading" className={styles.title} variants={fadeUp}>
              Expanding Sustainable Manufacturing Across India
            </motion.h2>
            <motion.p className={styles.subtitle} variants={fadeUp}>
              Decentralized production centres bringing employment and sustainable menstrual
              products closer to rural communities.
            </motion.p>
            <motion.div className={styles.headerActions} variants={fadeUp}>
              <a href="#centre-madhya-pradesh" className={styles.btnPrimary}>
                Explore the Network
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </a>
              <Link href="/contact" className={styles.btnSecondary}>
                Apply for a Satellite Centre
              </Link>
            </motion.div>
          </motion.header>

          <SatelliteCentresShowcase />
        </div>
      </section>
    </main>
  );
}
