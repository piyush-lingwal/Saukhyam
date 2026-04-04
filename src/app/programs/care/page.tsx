'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap, ArrowRight, Heart, Users,
  Leaf, Recycle, BookOpen, Megaphone, CheckCircle2,
  Building2, Award,
} from 'lucide-react';
import styles from '../program.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const howItWorks = [
  {
    step: '01',
    title: 'Campus Partnership',
    desc: 'We partner with college administrations, student unions, and women\'s cells to establish Saukhyam as the sustainable menstrual hygiene solution on campus.',
  },
  {
    step: '02',
    title: 'Awareness Workshops',
    desc: 'Interactive sessions educating students about chemicals in disposable pads, environmental impact, and the science behind banana fiber technology.',
  },
  {
    step: '03',
    title: 'Campus Ambassadors',
    desc: 'Student volunteers become Saukhyam ambassadors — organizing pad drives, buddy mentoring, and peer-to-peer awareness within their hostels and departments.',
  },
  {
    step: '04',
    title: 'Sustained Adoption',
    desc: 'Ongoing support with trial kits, campus dispensers, and quarterly workshops to ensure long-term adoption and community building around reusable menstrual health.',
  },
];

const campusBenefits = [
  {
    icon: Leaf,
    title: 'Zero Waste Campus',
    desc: 'Each student who switches eliminates 125+ kg of lifetime pad waste. At scale, campuses can eliminate thousands of kg of non-biodegradable waste annually.',
  },
  {
    icon: Heart,
    title: 'Healthier Students',
    desc: 'Removing exposure to dioxins, phthalates, and VOCs from disposable pads. Students report reduced rashes, cramps, and irritation within months.',
  },
  {
    icon: Users,
    title: 'Peer Influence',
    desc: 'College students are powerful change agents. One campus ambassador can influence 50-100 students, creating a ripple effect that extends to families and communities.',
  },
  {
    icon: Award,
    title: 'Sustainability Goals',
    desc: 'Supports institutional SDG commitments — aligning with gender equality, good health, climate action, and responsible consumption goals.',
  },
];

export default function CarePage() {
  return (
    <div className={styles.programPage}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroAmber}`}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <GraduationCap size={16} /> CARE Program
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Campus Action for{' '}
              <span className={styles.heroAccent}>Reusable Essentials</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Helping college campuses shift toward sustainable menstrual choices —
              building a generation of environmentally conscious young women.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { icon: Building2, value: '50+', label: 'Campus Partners' },
              { icon: Users, value: '10,000+', label: 'Students Reached' },
              { icon: Megaphone, value: '200+', label: 'Workshops Conducted' },
              { icon: Recycle, value: '5,000+ kg', label: 'Waste Prevented' },
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

      {/* Why Campuses */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Why College Campuses?
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              College students are at the intersection of awareness and influence.
              They are open to change, connected to peers, and ready to become the change-makers
              who carry sustainable habits into their families and careers.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '80%', title: 'Use Disposables', desc: 'Of college women use disposable pads without awareness of the chemicals they contain or the environmental damage they cause.' },
              { step: '15B', title: 'Pads/Year in India', desc: 'Approximately 15 billion disposable pads are used annually in India — most end up in landfills, rivers, and oceans.' },
              { step: '500yr', title: 'To Decompose', desc: 'A single disposable pad takes 500–800 years to decompose. A college student will use 2,000+ pads before graduation.' },
              { step: '4-5yr', title: 'Saukhyam Lifespan', desc: 'One set of Saukhyam pads lasts 4–5 years, replacing 600+ disposable pads. Fully biodegradable, zero plastic, zero chemicals.' },
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

      {/* How CARE Works */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              How CARE Works on Campus
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              A structured four-phase approach to transform campus menstrual health culture.
            </motion.p>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {howItWorks.map((step) => (
              <motion.div key={step.step} variants={fadeInUp} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Campus Benefits */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Benefits for Your Campus
            </motion.h2>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {campusBenefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeInUp} className={styles.stepCard}>
                <benefit.icon size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }} />
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Students Get */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              What Students Receive
            </motion.h2>
          </motion.div>

          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '🎒', title: 'Trial Kits', desc: 'Sampler pads so students can experience the comfort and safety of Saukhyam before committing to a full set.' },
              { step: '📚', title: 'Educational Materials', desc: 'Research-backed information about chemicals in disposable pads, PCOS links, and the science of banana fiber absorbency.' },
              { step: '🤝', title: 'Buddy Support', desc: 'Peer mentors who have already made the switch — available for questions, washing tips, and encouragement.' },
              { step: '🏆', title: 'Ambassador Program', desc: 'Leadership opportunity for passionate students to become campus ambassadors with certificates and community impact credentials.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className={styles.stepCard}>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Bring CARE to Your Campus</h2>
          <p>Partner with Saukhyam to make your college a zero-waste menstrual health leader.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            <GraduationCap size={18} /> Start a Campus Partnership <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
