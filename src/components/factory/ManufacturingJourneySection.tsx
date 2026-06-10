'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import FactoryVideoModal from '@/components/factory/FactoryVideoModal';
import styles from './ManufacturingJourneySection.module.css';

const journeyCards = [
  {
    step: '01',
    title: 'Responsible Material Sourcing',
    description:
      'The journey begins with banana fiber, a renewable resource derived from agricultural residue. By giving new purpose to natural materials, the factory supports a more sustainable production ecosystem.',
  },
  {
    step: '02',
    title: 'Precision Manufacturing',
    description:
      'Advanced production processes convert raw fiber into high-performance absorbent layers. Every stage is carefully designed to ensure consistency, efficiency, and product reliability.',
  },
  {
    step: '03',
    title: 'Tested for Performance',
    description:
      'Before reaching users, products undergo thorough inspection and testing to meet rigorous standards for comfort, durability, absorbency, and long-term use.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const cardStagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function ManufacturingJourneySection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        id="manufacturing-journey"
        className={styles.section}
        aria-labelledby="manufacturing-journey-heading"
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
              Our Manufacturing Journey
            </motion.span>
            <motion.h2
              id="manufacturing-journey-heading"
              className={styles.title}
              variants={fadeUp}
            >
              Turning Nature into Sustainable Care
            </motion.h2>
            <motion.p className={styles.subtitle} variants={fadeUp}>
              At the heart of Amritapuri, the Saukhyam Factory transforms banana fiber into
              high-quality reusable menstrual products through a carefully designed manufacturing
              process focused on sustainability, innovation, and quality.
            </motion.p>
          </motion.header>

          <motion.div
            className={styles.cardsGrid}
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {journeyCards.map((card) => (
              <motion.article
                key={card.step}
                className={styles.card}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.cardStep}>{card.step}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.footer
            className={styles.cta}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h3 className={styles.ctaTitle} variants={fadeUp}>
              Interested in Seeing the Complete Process?
            </motion.h3>
            <motion.p className={styles.ctaDesc} variants={fadeUp}>
              Discover how sustainable materials, innovative manufacturing, and rigorous quality
              standards come together inside the Saukhyam Factory.
            </motion.p>
            <motion.div className={styles.ctaActions} variants={fadeUp}>
              <Link href="#production-process" className={styles.btnPrimary}>
                Explore Factory Operations
                <ArrowRight size={16} aria-hidden="true" className={styles.btnArrow} />
              </Link>
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={() => setVideoOpen(true)}
              >
                <Play size={15} aria-hidden="true" />
                Watch Process Overview
              </button>
            </motion.div>
          </motion.footer>
        </div>
      </section>

      <FactoryVideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
