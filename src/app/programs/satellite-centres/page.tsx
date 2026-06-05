'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  GitBranch,
  Globe2,
  MapPin,
  Network,
  Wallet,
} from 'lucide-react';
import styles from './page.module.css';

const stats = [
  {
    icon: GitBranch,
    value: 'Hub & Spoke',
    label: 'Manufacturing Model',
  },
  {
    icon: Globe2,
    value: '5+',
    label: 'States in Expansion',
  },
  {
    icon: Network,
    value: 'District-Level',
    label: 'Production Networks',
  },
  {
    icon: Wallet,
    value: 'Low Investment',
    label: 'Satellite Setup',
  },
];

const modelSteps = [
  {
    step: '01',
    title: 'Central Manufacturing Hub',
    description:
      'The Saukhyam Factory processes banana fiber and prepares semi-finished components using standardized manufacturing procedures and quality controls.',
  },
  {
    step: '02',
    title: 'Distribution to Satellite Centres',
    description:
      'Semi-processed materials are supplied to satellite production centres, reducing infrastructure requirements and simplifying setup.',
  },
  {
    step: '03',
    title: 'Local Production',
    description:
      'Production teams use specialized sewing and assembly processes to transform components into finished reusable menstrual products.',
  },
  {
    step: '04',
    title: 'Quality & Distribution',
    description:
      'Finished products undergo inspection before being distributed through local networks, ensuring consistent quality and improved accessibility.',
  },
];

const expansionRegions = [
  'Haryana',
  'Madhya Pradesh',
  'Maharashtra',
  'Odisha',
  'Telangana',
  'Uttarakhand',
];

const networkRegions = [
  {
    state: 'Madhya Pradesh',
    district: 'Burhanpur District',
    description:
      'Two satellite production centres operate in Burhanpur District in collaboration with State Rural Livelihood Mission initiatives. These centres contribute to localized production and distribution of reusable menstrual products.',
  },
  {
    state: 'Maharashtra',
    district: 'Nandurbar District',
    description:
      'In Nandurbar, production teams have been trained to manufacture Saukhyam reusable pads through partnerships with community organizations and local development groups.',
  },
  {
    state: 'Odisha',
    district: 'Kalahandi & Angul Districts',
    description:
      'Satellite production centres are being established in partnership with regional institutions to strengthen district-level manufacturing and improve accessibility to sustainable menstrual products.',
  },
  {
    state: 'Uttarakhand',
    district: 'District-Level Expansion',
    description:
      'Collaborations with local organizations are helping create distributed production systems capable of serving larger rural populations through localized manufacturing.',
  },
  {
    state: 'Telangana',
    district: 'Emerging Production Network',
    description:
      'Satellite centre development is underway through partnerships focused on creating scalable district-level production ecosystems.',
  },
  {
    state: 'Haryana',
    district: 'Future Growth Region',
    description:
      'Engagements with local stakeholders are supporting the establishment of production centres designed to expand manufacturing reach and accessibility.',
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
              Expanding Sustainable Manufacturing Across India
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Saukhyam&apos;s satellite production centres extend the reach of our manufacturing
              ecosystem beyond the central factory in Kerala through a scalable hub-and-spoke model.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Overview + Stats */}
      <section className={styles.section} aria-labelledby="satellite-overview">
        <div className={styles.sectionBg} aria-hidden="true" />
        <div className={styles.sectionPattern} aria-hidden="true" />
        <div className={styles.sectionGlow} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.intro}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p variants={fadeUp}>
              Through a hub-and-spoke model, semi-processed materials are supplied from the
              manufacturing hub and transformed into finished products by trained production teams
              in local communities.
            </motion.p>
            <motion.p variants={fadeUp}>
              This approach enables consistent product quality, streamlined operations, and scalable
              production while bringing manufacturing closer to the regions they serve.
            </motion.p>
          </motion.div>

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

      {/* How the Model Works */}
      <section
        id="how-it-works"
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="model-works-heading"
      >
        <div className="container">
          <motion.header
            className={styles.header}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              How the Model Works
            </motion.span>
            <motion.h2 id="model-works-heading" className={styles.title} variants={fadeUp}>
              From Hub to Community
            </motion.h2>
          </motion.header>

          <motion.div
            className={styles.stepsGrid}
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {modelSteps.map((step) => (
              <motion.article
                key={step.step}
                className={styles.stepCard}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.stepNum}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hub and Spoke */}
      <section
        id="hub-spoke-model"
        className={styles.section}
        aria-labelledby="hub-spoke-heading"
      >
        <div className={styles.sectionBg} aria-hidden="true" />
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
              Hub and Spoke Production System
            </motion.span>
            <motion.h2 id="hub-spoke-heading" className={styles.title} variants={fadeUp}>
              Distributed Manufacturing for Scale
            </motion.h2>
          </motion.header>

          <motion.div
            className={styles.narrative}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <p>
              At the heart of Saukhyam&apos;s manufacturing ecosystem is a distributed production
              model designed for efficiency, consistency, and scalability.
            </p>
            <p>
              The central manufacturing facility in Kerala serves as the hub, processing raw banana
              fiber and preparing semi-finished materials. Satellite production centres then complete
              the final assembly process, enabling production closer to the communities they serve.
            </p>
            <p>
              This model helps maintain product quality, optimize logistics, reduce operational
              complexity, and support sustainable manufacturing expansion across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Expansion Regions */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="regions-heading">
        <div className="container">
          <motion.header
            className={styles.header}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Current Expansion Regions
            </motion.span>
            <motion.h2 id="regions-heading" className={styles.title} variants={fadeUp}>
              Growing Across India
            </motion.h2>
          </motion.header>

          <motion.div
            className={styles.regionsWrap}
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {expansionRegions.map((region) => (
              <motion.span key={region} className={styles.regionPill} variants={fadeUp}>
                <MapPin size={14} aria-hidden="true" />
                {region}
              </motion.span>
            ))}
          </motion.div>

          <motion.footer
            className={`${styles.cta} ${styles.ctaSpaced}`}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h3 className={styles.ctaTitle} variants={fadeUp}>
              Interested in Establishing a Satellite Production Centre?
            </motion.h3>
            <motion.p className={styles.ctaDesc} variants={fadeUp}>
              Organizations, livelihood missions, NGOs, and community groups interested in
              developing district-level production ecosystems are encouraged to connect with the
              Saukhyam team.
            </motion.p>
            <motion.div className={styles.ctaActions} variants={fadeUp}>
              <Link href="/contact" className={styles.btnPrimary}>
                Apply for a Satellite Centre
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </Link>
              <a href="#hub-spoke-model" className={styles.btnSecondary}>
                Learn About the Hub &amp; Spoke Model
              </a>
            </motion.div>
          </motion.footer>
        </div>
      </section>

      {/* Satellite Production Network */}
      <section className={styles.section} aria-labelledby="network-heading">
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
              Our Satellite Production Network
            </motion.span>
            <motion.h2 id="network-heading" className={styles.title} variants={fadeUp}>
              States Where We Have Established or Expanding Operations
            </motion.h2>
            <motion.p className={styles.subtitle} variants={fadeUp}>
              Through Saukhyam&apos;s hub-and-spoke production model, satellite centres bring
              manufacturing closer to the communities they serve. Working alongside NGOs, livelihood
              missions, and local organizations, these centres help extend access to sustainable
              menstrual products while supporting decentralized production.
            </motion.p>
          </motion.header>

          <motion.div
            className={styles.networkGrid}
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {networkRegions.map((region) => (
              <motion.article
                key={region.state}
                className={styles.networkCard}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={styles.networkState}>{region.state}</h3>
                <p className={styles.networkDistrict}>{region.district}</p>
                <p className={styles.networkDesc}>{region.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="satellite-cta">
        <div className="container">
          <motion.footer
            className={styles.cta}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h2 id="satellite-cta" className={styles.ctaTitle} variants={fadeUp}>
              Interested in Establishing a Satellite Production Centre?
            </motion.h2>
            <motion.p className={styles.ctaDesc} variants={fadeUp}>
              Organizations, NGOs, livelihood missions, self-help groups, and community development
              partners are invited to connect with Saukhyam to explore opportunities for
              district-level manufacturing and distribution.
            </motion.p>
            <motion.div className={styles.ctaActions} variants={fadeUp}>
              <Link href="/contact" className={styles.btnPrimary}>
                Apply for a Satellite Centre
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </Link>
              <Link href="/contact" className={styles.btnSecondary}>
                <Building2 size={15} aria-hidden="true" />
                Contact Our Team
              </Link>
            </motion.div>
          </motion.footer>
        </div>
      </section>
    </main>
  );
}
