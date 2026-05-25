'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, Award, Newspaper, ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { awards, pressItems } from '@/data/content';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ImpactPage() {
  return (
    <div className={styles.impactPage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <Trophy size={16} /> Awards & Recognition
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Recognized by <span className={styles.heroAccent}>India & the World</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              From NITI Aayog to the UN Climate Conference, Saukhyam&apos;s impact
              has been acknowledged across national and international platforms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Awards Grid ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Award size={16} /> 12+ National Awards
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Awards & Recognition
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Every award is a testament to the women who make and use Saukhyam.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.awardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {awards.map((award) => (
              <motion.div key={award.id} variants={fadeInUp} className={styles.awardCard}>
                <div className={styles.awardYear}>{award.year}</div>
                <div className={styles.awardIcon}>
                  <Trophy size={20} />
                </div>
                <h3 className={styles.awardName}>{award.title}</h3>
                <p className={styles.awardOrg}>{award.organization}</p>
                <p className={styles.awardDesc}>{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Press & Media ── */}
      <section id="press" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Newspaper size={16} /> Press Coverage
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              In the Media
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Featured in leading publications across India for our impact on menstrual health.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.pressGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {pressItems.map((item) => (
              <motion.a
                key={item.id}
                variants={fadeInUp}
                className={styles.pressCard}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.pressPublication}>{item.publication}</span>
                <h3 className={styles.pressTitle}>{item.title}</h3>
                <span className={styles.pressLink}>
                  Read Article <ExternalLink size={14} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Be Part of the Impact</h2>
          <p>Every pad you purchase empowers a rural woman and heals the planet.</p>
          <Link href="/products" className={styles.ctaBtn}>
            <Heart size={18} />
            Shop Saukhyam
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
