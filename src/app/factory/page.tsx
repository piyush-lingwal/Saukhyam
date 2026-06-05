'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Factory,
  Leaf,
  Package,
  Users,
} from 'lucide-react';
import styles from './page.module.css';
import MissionStorySection from '@/components/factory/MissionStorySection';
import ManufacturingHubShowcase from '@/components/factory/ManufacturingHubShowcase';
import ProductionProcess from '@/components/factory/ProductionProcess';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.08 } } };

const heroStats = [
  {
    icon: Package,
    value: '1 Million+',
    label: 'Pads Annual Capacity',
  },
  {
    icon: Users,
    value: '288+',
    label: 'Women Trained',
  },
  {
    icon: Building2,
    value: '4',
    label: 'Satellite Production Centers',
  },
  {
    icon: Leaf,
    value: 'Banana Fiber',
    label: 'Sustainable Technology',
  },
];

export default function FactoryPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="factory-hero-title">
        <div className={styles.heroBgImage} aria-hidden="true">
          <Image
            src="/images/factory/factory-hero-manufacturing-journey.png"
            alt="Saukhyam Factory manufacturing journey — from raw banana fiber through processing and quality inspection to finished biodegradable menstrual pads"
            fill
            sizes="100vw"
            className={styles.heroBgImg}
            priority
          />
        </div>
        <div className={styles.heroBgOverlay} aria-hidden="true" />
        <div className={styles.heroGrain} aria-hidden="true" />

        <div className="container">
          <motion.div
            className={styles.heroInner}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span className={styles.heroLabel} variants={fadeUp}>
              <Factory size={13} aria-hidden="true" />
              Saukhyam Factory · Amritapuri
            </motion.span>

            <motion.h1 id="factory-hero-title" className={styles.heroTitle} variants={fadeUp}>
              Manufacturing Change.
              <span className={styles.heroTitleBreak} />
              Empowering <span className={styles.heroAccent}>Women.</span>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Transforming banana fiber into sustainable menstrual solutions while creating
              livelihoods for women across India. Every pad produced supports menstrual health,
              environmental sustainability, and economic empowerment.
            </motion.p>

            <motion.div className={styles.heroCtas} variants={fadeUp}>
              <a href="#process" className={styles.heroBtnPrimary}>
                Explore Our Process
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link href="/impact" className={styles.heroBtnSecondary}>
                View Impact
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated statistics strip */}
        <div className={styles.statsStripWrap}>
          <div className="container">
            <motion.div
              className={styles.statsStrip}
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className={styles.statCard}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.statIconWrap} aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className={styles.heroWave} aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path
              d="M0 80L1440 80L1440 24C1200 70 960 4 720 34C480 64 240 14 0 44L0 80Z"
              fill="#fafcf9"
            />
          </svg>
        </div>
      </section>

      {/* Where Innovation Meets Impact */}
      <MissionStorySection />

      <ManufacturingHubShowcase />

      <ProductionProcess />
    </main>
  );
}
