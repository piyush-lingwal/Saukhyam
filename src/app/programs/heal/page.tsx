'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles, ArrowRight, Heart, Users, Activity,
  CheckCircle2, Leaf, ShieldCheck, Dumbbell, Apple,
  Moon, Droplets,
} from 'lucide-react';
import styles from '../program.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const healPillars = [
  {
    icon: Leaf,
    title: 'Switch to Reusables',
    desc: 'Replace chemical-laden disposable pads with Saukhyam banana fiber pads — eliminating daily toxin exposure during the most absorptive phase of the cycle.',
  },
  {
    icon: Apple,
    title: 'Nutrition & Diet',
    desc: 'Anti-inflammatory dietary guidance targeting PCOS root causes — reducing processed food, dairy and sugar while boosting whole foods, fiber, and micronutrients.',
  },
  {
    icon: Dumbbell,
    title: 'Movement & Yoga',
    desc: 'Curated exercise routines and yoga sequences proven to regulate hormones, reduce cortisol, improve insulin sensitivity, and ease menstrual cramps naturally.',
  },
  {
    icon: Moon,
    title: 'Sleep & Stress',
    desc: 'Guidance on circadian rhythm alignment, stress management techniques, and lifestyle modifications that support hormonal balance and overall well-being.',
  },
];

const outcomes = [
  { value: '70%', label: 'Reported reduced cramps within 6 months' },
  { value: '85%', label: 'Found rashes & irritation eliminated' },
  { value: '60%', label: 'Experienced more regular cycles' },
  { value: '12+', label: 'Documented PCOS improvement stories' },
];

export default function HealPage() {
  return (
    <div className={styles.programPage}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroGreen}`}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <Sparkles size={16} /> HEAL Program
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Health, Environment,{' '}
              <span className={styles.heroAccent}>Active Living</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Supporting girls and women facing menstrual disorders such as PCOS through
              lifestyle shifts, guidance, and reusable menstrual products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {outcomes.map((s) => (
              <div key={s.label} className={styles.statBox}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Why HEAL Exists
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              PCOS affects up to 1 in 5 women in India. Rising cases among young girls are linked to
              chemical exposure from disposable pads, processed diets, sedentary lifestyles, and chronic stress.
              HEAL addresses these root causes holistically.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '01', title: 'Chemical Exposure', desc: 'Disposable pads contain dioxins, phthalates, and VOCs that are absorbed through highly permeable vaginal tissue during every cycle — 11,000+ pads in a lifetime.' },
              { step: '02', title: 'Hormonal Disruption', desc: 'These endocrine-disrupting chemicals mimic estrogen, interfering with the HPO axis and contributing to PCOS, irregular cycles, and reproductive health issues.' },
              { step: '03', title: 'Lifestyle Factors', desc: 'Sedentary habits, poor nutrition, sleep disruption, and chronic stress compound the hormonal imbalance, making symptoms worse over time.' },
              { step: '04', title: 'The HEAL Solution', desc: 'By eliminating chemical exposure AND addressing lifestyle factors simultaneously, HEAL creates conditions for the body to restore its natural hormonal balance.' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeInUp} className={styles.stepCard}>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              The Four Pillars of HEAL
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              A holistic approach combining product safety with active lifestyle changes.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {healPillars.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp} className={styles.stepCard}>
                <pillar.icon size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }} />
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Real Stories */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Real Healing Stories
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Documented cases of women who experienced measurable improvements in PCOS symptoms,
              period pain, and menstrual regularity after adopting the HEAL approach.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              {
                step: '🩺',
                title: 'Sujata — PCOS Reversed',
                desc: 'Suffered PCOS for 12–15 years with 20-day bleeding and blackouts. After 3 years with Saukhyam — ovaries are cyst-free, no pain, regular 4–5 day cycles.',
              },
              {
                step: '🩺',
                title: 'Virginie — Endometriosis',
                desc: '5 cm ovarian cyst reduced to 2 cm over 5 years. No medication needed. Combines Saukhyam with yoga and dietary changes. Periods now nearly normal.',
              },
              {
                step: '🩺',
                title: 'Laxmi — PCOS Symptoms',
                desc: 'Severe pain, acne, hairfall, periods once every 2 months. After 4 years with Saukhyam + diet changes — pain minimal, cycles more regular, skin issues improved.',
              },
              {
                step: '🩺',
                title: 'Dr. Priyanka — Irregular Periods',
                desc: 'Struggled with very irregular periods for years. Within just 6 months of switching to Saukhyam — periods became completely regular without any medication.',
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className={styles.stepCard}>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <Link href="/science" className={styles.outlineBtn}>
              Read the Full Research <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Start Your Healing Journey Today</h2>
          <p>Switch to chemical-free pads and take the first step toward hormonal balance.</p>
          <Link href="/products" className={styles.ctaBtn}>
            <Heart size={18} /> Shop Saukhyam Pads <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
