'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe, ArrowRight, Heart, Users, MapPin,
  Leaf, BookOpen, HandHeart, Megaphone,
} from 'lucide-react';
import styles from '../program.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const approachSteps = [
  {
    icon: MapPin,
    title: 'Satellite Centre Setup',
    desc: 'We partner with local organizations, self-help groups, and panchayats to establish decentralized pad-making centres in underserved villages.',
  },
  {
    icon: Users,
    title: 'Skills Training',
    desc: 'Rural women are trained in pad manufacturing, quality control, and menstrual health education through intensive 2-week programs.',
  },
  {
    icon: Megaphone,
    title: 'Awareness Drives',
    desc: 'Trained community health workers conduct workshops breaking menstrual taboos, educating families, and driving adoption of safe hygiene practices.',
  },
  {
    icon: HandHeart,
    title: 'Sustained Livelihoods',
    desc: 'Each centre becomes self-sustaining, local women earn dignified income while producing chemical-free pads for their own communities.',
  },
];

const impactAreas = [
  {
    title: 'Menstrual Health Access',
    points: [
      'Distributing affordable, chemical-free reusable pads to women with no prior access',
      'Replacing cloth rags, leaves, and ash with hygienic banana fiber pads',
      'Educating families about safe period practices and hygiene',
    ],
  },
  {
    title: 'Livelihood Creation',
    points: [
      'Training rural women in pad manufacturing as a dignified livelihood',
      'Building self-help groups around menstrual health entrepreneurship',
      'Creating local supply chains that reduce transportation costs',
    ],
  },
  {
    title: 'Environmental Impact',
    points: [
      'Eliminating disposable pad waste from villages and water bodies',
      '100% biodegradable banana fiber, zero plastic, zero chemicals',
      'Each woman who switches prevents 125+ kg of pad waste over her lifetime',
    ],
  },
];

export default function ReachPage() {
  return (
    <div className={styles.programPage}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroTeal}`}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <Globe size={16} /> REACH Program
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Rural Empowerment &{' '}
              <span className={styles.heroAccent}>Community Health</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Bringing safe, chemical-free menstrual hygiene to rural India , 
              while creating dignified livelihoods for women in every village we touch.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { icon: MapPin, value: '25+', label: 'Satellite Centres' },
              { icon: Globe, value: '20+', label: 'States Covered' },
              { icon: Users, value: '500+', label: 'Women Employed' },
              { icon: Leaf, value: '101', label: 'Villages Reached' },
            ].map((s) => (
              <div key={s.label} className={styles.statBox}>
                <s.icon size={20} className={styles.statIcon} />
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              The Rural Challenge
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              In rural India, millions of women still use cloth rags, leaves, or sand during their periods.
              Disposable pads, when available, are expensive, environmentally devastating, and loaded with
              harmful chemicals. REACH creates a better path.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '62%', title: 'No Access', desc: 'Of rural Indian women have no access to safe menstrual hygiene products, relying on cloth, ash, or nothing at all.' },
              { step: '23%', title: 'School Dropouts', desc: 'Of girls drop out of school when they begin menstruating due to lack of products, facilities, and stigma.' },
              { step: '12B+', title: 'Annual Pad Waste', desc: 'Disposable pads are dumped into landfills and water bodies every year in India, taking 500-800 years to decompose.' },
              { step: '✓', title: 'REACH Solution', desc: 'Saukhyam satellite centres give villages the tools to manufacture, distribute, and educate, locally and sustainably.' },
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

      {/* Our Approach */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              How REACH Works
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              A four-step model that transforms villages into self-sustaining menstrual health ecosystems.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {approachSteps.map((step, i) => (
              <motion.div key={step.title} variants={fadeInUp} className={styles.stepCard}>
                <span className={styles.stepNumber}>0{i + 1}</span>
                <step.icon size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Three Pillars of Impact
            </motion.h2>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {impactAreas.map((area) => (
              <motion.div key={area.title} variants={fadeInUp} className={styles.stepCard}>
                <h3>{area.title}</h3>
                <ul style={{ marginTop: 'var(--space-3)', paddingLeft: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {area.points.map((point) => (
                    <li key={point} style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Partner With Us to Reach More Villages</h2>
          <p>Help us establish satellite centres in underserved communities across India.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            <Heart size={18} /> Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
