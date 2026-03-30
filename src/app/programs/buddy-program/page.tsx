'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Heart, Users, MessageCircle, BookOpen } from 'lucide-react';
import styles from '../program.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function BuddyProgramPage() {
  return (
    <div className={styles.programPage}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroTeal}`}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <GraduationCap size={16} /> Buddy Program
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Peer Mentoring for <span className={styles.heroAccent}>Period Health</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Trained Saukhyam Buddies become community ambassadors — conducting workshops,
              supporting first-time switchers, and normalizing conversations around menstruation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { icon: Users, value: '200+', label: 'Active Buddies' },
              { icon: BookOpen, value: '1,000+', label: 'Workshops Held' },
              { icon: MessageCircle, value: '50,000+', label: 'Women Reached' },
              { icon: Heart, value: '95%', label: 'Switcher Retention' },
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

      {/* What Buddies Do */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>What a Saukhyam Buddy Does</motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Each buddy is trained to be a local expert on menstrual health and sustainable hygiene practices.
            </motion.p>
          </motion.div>
          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '01', title: 'Community Workshops', desc: 'Conduct engaging, taboo-breaking workshops in schools, colleges, and self-help groups on menstrual health and hygiene.' },
              { step: '02', title: 'One-on-One Mentoring', desc: 'Guide first-time switchers through the transition from disposables — answering questions and offering personal support.' },
              { step: '03', title: 'Product Demonstrations', desc: 'Show how to use, wash, and care for Saukhyam pads with hands-on demonstrations that build confidence.' },
              { step: '04', title: 'Feedback Loop', desc: 'Collect real user feedback and share it with the Saukhyam team to continuously improve products and programs.' },
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

      {/* Become a Buddy */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>Become a Saukhyam Buddy</motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc} style={{ margin: '0 auto var(--space-6)' }}>
              If you&apos;re passionate about women&apos;s health and want to make a difference in your community,
              join our buddy network. We provide full training, materials, and ongoing support.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact" className={styles.outlineBtn}>
                Apply to Become a Buddy <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Switch?</h2>
          <p>Start your 3-month healing challenge with support from a Saukhyam Buddy.</p>
          <Link href="/products" className={styles.ctaBtn}>
            <Heart size={18} /> Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
