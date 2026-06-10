'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProductionProcess.module.css';

export type ProductionStep = {
  step: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  imageAlt: string;
};

const productionSteps: ProductionStep[] = [
  {
    step: '01',
    title: 'Fiber Cleaning',
    description:
      'Combining sophisticated machinery and skilled workmanship, women separate the banana fiber from the husk. What remains is pure natural banana fiber, carefully cleaned and prepared for the next stage of production.',
    badge: 'Natural Fiber Preparation',
    image: '/images/factory/step-01-fiber-cleaning.png',
    imageAlt: 'Factory workers cleaning banana fiber on industrial machinery',
  },
  {
    step: '02',
    title: 'Molding & Compressing',
    description:
      'Measured quantities of banana fiber are placed into custom molds and compressed using a pneumatic press to create uniform absorbent sheets that form the foundation of every reusable pad.',
    badge: 'Precision Compression Technology',
    image: '/images/factory/step-02-molding.png',
    imageAlt: 'Artisan holding a compressed banana fiber absorbent sheet',
  },
  {
    step: '03',
    title: 'Laundry & Fabric Preparation',
    description:
      'Cotton fabric is pre-washed to prevent future shrinkage. The material is then sun-dried, ironed, and cut into precise dimensions to ensure comfort, durability, and consistency.',
    badge: 'Pre-Washed Cotton Technology',
    image: '/images/factory/step-03-fabric-prep.png',
    imageAlt: 'Women ironing and preparing red cotton fabric',
  },
  {
    step: '04',
    title: 'Buttons on Wings',
    description:
      'Durable stainless-steel snap buttons are attached to the wings of each pad, allowing secure fastening and comfortable positioning during use.',
    badge: 'Secure Fit Design',
    image: '/images/factory/step-04-buttons.png',
    imageAlt: 'Artisan attaching stainless-steel snap buttons to pad wings',
  },
  {
    step: '05',
    title: 'Stitching Reusable Pads',
    description:
      'Skilled women operate sewing machines to assemble reusable pads, bases, and inserts in multiple sizes including day, night, and teen variants.',
    badge: 'Women-Led Manufacturing',
    image: '/images/factory/step-05-stitching.png',
    imageAlt: 'Women stitching reusable menstrual pads on the factory floor',
  },
  {
    step: '06',
    title: 'Quality Control',
    description:
      'Every reusable pad undergoes rigorous inspection before dispatch. Each product is evaluated for comfort, durability, and absorbency to ensure it meets Saukhyam quality standards.',
    badge: 'Final Quality Inspection',
    image: '/images/factory/step-06-quality-control.png',
    imageAlt: 'Quality inspector examining finished reusable pads',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

function JourneyStep({ step, index }: { step: ProductionStep; index: number }) {
  const reversed = index % 2 === 1;
  const imageMotion = reversed ? fadeRight : fadeLeft;
  const contentMotion = reversed ? fadeLeft : fadeRight;

  return (
    <motion.article
      className={`${styles.journeyStep} ${reversed ? styles.journeyStepReversed : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
    >
      <span className={styles.stepBgNum} aria-hidden="true">
        {step.step}
      </span>

      <div className={styles.journeySpine} aria-hidden="true">
        <span className={styles.journeyDot}>{step.step}</span>
      </div>

      <motion.div className={styles.journeyImageCol} variants={imageMotion}>
        <div className={styles.journeyImageGlow} aria-hidden="true" />
        <motion.div
          className={styles.journeyImageWrap}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            sizes="(max-width: 960px) 100vw, 45vw"
            className={styles.journeyImage}
          />
          <span className={styles.journeyBadge}>{step.badge}</span>
        </motion.div>
      </motion.div>

      <motion.div className={styles.journeyContentCol} variants={contentMotion}>
        <motion.div
          className={styles.journeyCard}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.journeyStepLabel}>Step {step.step}</span>
          <h3 className={styles.journeyTitle}>{step.title}</h3>
          <p className={styles.journeyDesc}>{step.description}</p>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default function ProductionProcess() {
  return (
    <section
      id="production-process"
      className={styles.section}
      aria-labelledby="production-process-heading"
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className={styles.sectionPattern} aria-hidden="true" />
      <div className={styles.sectionGlow} aria-hidden="true" />

      <div className="container">
        <motion.header
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            Production Process
          </motion.span>
          <motion.h2 id="production-process-heading" className={styles.title} variants={fadeUp}>
            From Banana Fiber to{' '}
            <span className={styles.titleAccent}>Reusable Innovation</span>
          </motion.h2>
          <motion.p className={styles.subtitle} variants={fadeUp}>
            Follow each stage of how products are made — from material preparation and fiber
            processing through product assembly, quality inspection, and packaging and
            distribution — led by skilled women artisans across the Saukhyam Factory.
          </motion.p>
        </motion.header>

        <div className={styles.journeyTrack}>
          <div className={styles.journeyLine} aria-hidden="true" />
          {productionSteps.map((step, index) => (
            <JourneyStep key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
