'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Dumbbell, ArrowRight, Heart, Trophy, Users, Zap } from 'lucide-react';
import styles from '../program.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const sports = [
  { name: 'Athletics', athletes: '200+' },
  { name: 'Kabaddi', athletes: '150+' },
  { name: 'Hockey', athletes: '120+' },
  { name: 'Football', athletes: '100+' },
  { name: 'Wrestling', athletes: '80+' },
  { name: 'Cricket', athletes: '90+' },
  { name: 'Boxing', athletes: '60+' },
  { name: 'Volleyball', athletes: '70+' },
];

export default function SportsWomenPage() {
  return (
    <div className={styles.programPage}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroAmber}`}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <Dumbbell size={16} /> Sports Women Program
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              No Athlete Should Miss <span className={styles.heroAccent}>a Single Day</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              High-performance reusable pads designed for active women - so no girl
              misses training, competition, or her dreams because of her period.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { icon: Users, value: '1,000+', label: 'Athletes Supported' },
              { icon: Trophy, value: '15+', label: 'Academies' },
              { icon: Dumbbell, value: '8+', label: 'Sports' },
              { icon: Zap, value: '0', label: 'Training Days Missed' },
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

      {/* Why It Matters */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>Why This Program Matters</motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Studies show that up to 40% of female athletes miss training during their periods.
              Our program ensures zero days missed, zero compromises.
            </motion.p>
          </motion.div>
          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '01', title: 'Academy Partnerships', desc: 'We partner with sports academies and coaches to directly reach female athletes who need reliable menstrual products.' },
              { step: '02', title: 'Custom Pad Kits', desc: 'Athletes receive starter kits with pads designed for high activity - extra absorbent, leak-proof, and fast-drying.' },
              { step: '03', title: 'Period Education', desc: 'Workshops on menstrual health, nutrition during periods, and how to train safely - breaking the silence in sports.' },
              { step: '04', title: 'Ongoing Support', desc: 'Regular check-ins, replacement pads, and a buddy system to ensure every athlete stays supported throughout her career.' },
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

      {/* Sports Covered */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={styles.sectionTitle} style={{ textAlign: 'center' }}>
            Sports We Cover
          </motion.h2>
          <motion.div className={styles.sportsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {sports.map((sport) => (
              <motion.div key={sport.name} variants={fadeInUp} className={styles.sportCard}>
                <Dumbbell size={20} />
                <h3>{sport.name}</h3>
                <span>{sport.athletes} Athletes</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Partner Your Academy With Us</h2>
          <p>Let&apos;s ensure no female athlete in India misses her game.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            <Heart size={18} /> Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
