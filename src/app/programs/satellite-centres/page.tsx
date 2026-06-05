'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, Layers3, MapPin, ShieldCheck } from 'lucide-react';
import IndiaStateMap, { type HighlightState } from '@/components/satellite/IndiaStateMap';
import styles from './page.module.css';

const stats = [
  { icon: GitBranch, value: 'Hub & Spoke', label: 'Production Network' },
  { icon: MapPin, value: 'Multiple', label: 'Satellite Centres' },
  { icon: Layers3, value: 'District-Level', label: 'Manufacturing' },
  { icon: ShieldCheck, value: 'Quality-Controlled', label: 'Production System' },
];

type NetworkRegion = {
  state: string;
  slug: HighlightState;
  district: string;
  description: string;
};

const networkRegions: NetworkRegion[] = [
  {
    state: 'Madhya Pradesh',
    slug: 'madhya-pradesh',
    district: 'Burhanpur District',
    description:
      'Two satellite production centres operate in Burhanpur District through collaborations with local livelihood initiatives and community organizations.',
  },
  {
    state: 'Maharashtra',
    slug: 'maharashtra',
    district: 'Nandurbar District',
    description:
      'Production teams in Nandurbar have been trained to manufacture reusable menstrual products through district-level partnerships and community-led initiatives.',
  },
  {
    state: 'Odisha',
    slug: 'odisha',
    district: 'Kalahandi & Angul Districts',
    description:
      'New satellite production centres are being established to strengthen local manufacturing capacity and expand access to sustainable menstrual products.',
  },
  {
    state: 'Uttarakhand',
    slug: 'uttarakhand',
    district: 'Expansion Region',
    description:
      'Collaborations are underway to develop district-level production systems capable of serving larger rural populations.',
  },
  {
    state: 'Telangana',
    slug: 'telangana',
    district: 'Emerging Production Network',
    description:
      'Partnerships are supporting the development of new satellite production centres within the state.',
  },
  {
    state: 'Haryana',
    slug: 'haryana',
    district: 'Future Expansion',
    description:
      'Regional collaborations are helping establish production ecosystems designed for scalable manufacturing and distribution.',
  },
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

      {/* Satellite Production Network */}
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
              Satellite Production Centres
            </motion.span>
            <motion.h2 id="network-heading" className={styles.title} variants={fadeUp}>
              Expanding Sustainable Manufacturing Across India
            </motion.h2>
            <motion.p className={styles.subtitle} variants={fadeUp}>
              A growing network of satellite production centres connected through Saukhyam&apos;s
              hub-and-spoke manufacturing model.
            </motion.p>
            <motion.div className={styles.headerActions} variants={fadeUp}>
              <a href="#state-list" className={styles.btnPrimary}>
                Explore the Network
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </a>
              <Link href="/contact" className={styles.btnSecondary}>
                Apply for a Satellite Centre
              </Link>
            </motion.div>
          </motion.header>

          <motion.div
            id="state-list"
            className={styles.stateList}
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {networkRegions.map((region, index) => (
              <motion.article
                key={region.state}
                className={styles.stateRow}
                variants={fadeUp}
              >
                {index > 0 && <div className={styles.stateDivider} aria-hidden="true" />}
                <div className={styles.stateRowInner}>
                  <div className={styles.mapWrap}>
                    <IndiaStateMap highlight={region.slug} />
                  </div>
                  <div className={styles.stateContent}>
                    <h3 className={styles.stateName}>{region.state}</h3>
                    <p className={styles.stateDistrict}>{region.district}</p>
                    <p className={styles.stateDesc}>{region.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
