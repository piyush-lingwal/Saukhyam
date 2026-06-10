'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, Layers3, Settings2, ShieldCheck } from 'lucide-react';
import styles from './ManufacturingHubShowcase.module.css';

const FACTORY_IMAGE = '/images/factory/manufacturing-hub-team.png';

const featureCards = [
  {
    icon: Settings2,
    title: 'Operational Excellence',
    description:
      'A structured manufacturing workflow ensures seamless coordination between production stages while maintaining high standards of quality and efficiency.',
  },
  {
    icon: GitBranch,
    title: 'Distributed Production Network',
    description:
      'The factory supports a hub-and-satellite manufacturing model that enables efficient collaboration across multiple production centers.',
  },
  {
    icon: Layers3,
    title: 'Integrated Manufacturing Ecosystem',
    description:
      'Raw material preparation, product assembly, stitching, finishing, and inspection are connected through a streamlined production process.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-Driven Operations',
    description:
      'Multiple inspection checkpoints throughout the manufacturing journey help ensure product performance, comfort, and durability.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerCards = { visible: { transition: { staggerChildren: 0.1 } } };

export default function ManufacturingHubShowcase() {
  return (
    <section
      id="manufacturing-hub"
      className={styles.section}
      aria-labelledby="manufacturing-hub-heading"
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className={styles.sectionPattern} aria-hidden="true" />
      <div className={styles.sectionGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.layout}>
          <motion.div
            className={styles.imageCol}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src={FACTORY_IMAGE}
                  alt="Saukhyam Factory team inside the manufacturing hub in Kuzhithura, Kerala"
                  width={1600}
                  height={1067}
                  sizes="(max-width: 960px) 100vw, 460px"
                  className={styles.factoryImage}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className={styles.imageBadge}>
                <span className={styles.imageBadgeTitle}>Manufacturing Hub</span>
                <span className={styles.imageBadgeSep} aria-hidden="true">
                  |
                </span>
                <span className={styles.imageBadgeLocation}>Kuzhithura, Kerala</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contentCol}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span className={styles.eyebrow} variants={fadeRight}>
              Manufacturing Hub
            </motion.span>
            <motion.h2
              id="manufacturing-hub-heading"
              className={styles.title}
              variants={fadeRight}
            >
              Built for <span className={styles.titleAccent}>Precision.</span>
              <br />
              Designed for <span className={styles.titleAccent}>Growth.</span>
            </motion.h2>

            <motion.div className={styles.description} variants={fadeRight}>
              <p>
                Located in Kuzhithura, Kollam, Kerala, the Saukhyam Factory serves as the
                operational center of a distributed manufacturing ecosystem that transforms banana
                fiber into sustainable menstrual products through coordinated production, quality
                control, and innovation.
              </p>
              <p>
                Every stage of production, from fiber preparation and fabric processing to
                stitching, assembly, and final inspection, is managed through an integrated
                workflow designed for consistency, efficiency, and reliability.
              </p>
            </motion.div>

            <motion.div
              className={styles.featureGrid}
              variants={staggerCards}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {featureCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    className={styles.featureCard}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.featureIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <h3 className={styles.featureTitle}>{card.title}</h3>
                    <p className={styles.featureDesc}>{card.description}</p>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div className={styles.ctaCard} variants={fadeUp}>
              <h3 className={styles.ctaTitle}>Discover How the Factory Operates</h3>
              <p className={styles.ctaDesc}>
                Explore the production journey, manufacturing systems, and quality processes that
                power Saukhyam&apos;s sustainable products.
              </p>
              <a href="#production-process" className={styles.btnPrimary}>
                Explore Production Process
                <ArrowRight size={17} aria-hidden="true" className={styles.btnArrow} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
