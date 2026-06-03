'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Heart, Users, Leaf, Globe } from 'lucide-react';
import styles from '../program.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const centres = [
  { state: 'Kerala', villages: 12, women: 60, established: '2017' },
  { state: 'Uttarakhand', villages: 8, women: 45, established: '2019' },
  { state: 'Tamil Nadu', villages: 10, women: 50, established: '2019' },
  { state: 'Karnataka', villages: 9, women: 40, established: '2020' },
  { state: 'Maharashtra', villages: 11, women: 55, established: '2020' },
  { state: 'Uttar Pradesh', villages: 7, women: 35, established: '2021' },
  { state: 'Madhya Pradesh', villages: 6, women: 30, established: '2021' },
  { state: 'Rajasthan', villages: 8, women: 40, established: '2022' },
  { state: 'Odisha', villages: 5, women: 25, established: '2022' },
  { state: 'West Bengal', villages: 7, women: 35, established: '2023' },
  { state: 'Jharkhand', villages: 6, women: 30, established: '2023' },
  { state: 'Assam', villages: 4, women: 20, established: '2024' },
];

export default function SatelliteCentresPage() {
  return (
    <div className={styles.programPage}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.heroGreen}`}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <MapPin size={16} /> Satellite Centres
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Manufacturing Pads, <span className={styles.heroAccent}>Building Livelihoods</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Decentralized production centres across 20+ states where rural women learn,
              earn, and lead the menstrual hygiene revolution in their own communities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {[
              { icon: MapPin, value: '25+', label: 'Active Centres' },
              { icon: Globe, value: '20+', label: 'States' },
              { icon: Users, value: '500+', label: 'Women Employed' },
              { icon: Leaf, value: '101', label: 'Villages Covered' },
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

      {/* How It Works */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>How It Works</motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Each satellite centre is set up in partnership with local organizations to create
              a self-sustaining unit of production, training, and distribution.
            </motion.p>
          </motion.div>
          <motion.div className={styles.stepsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { step: '01', title: 'Community Partnership', desc: 'We partner with local NGOs, self-help groups, and panchayats to identify villages with the greatest need.' },
              { step: '02', title: 'Training & Setup', desc: 'Women are trained in pad-making, quality control, and menstrual health education over a 2-week intensive program.' },
              { step: '03', title: 'Production Begins', desc: 'The centre starts producing Saukhyam pads locally - reducing transportation costs and creating local employment.' },
              { step: '04', title: 'Awareness Drives', desc: 'Trained women conduct workshops in surrounding villages, breaking taboos and driving adoption.' },
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

      {/* Centres Table */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={styles.sectionTitle}>
            Our Centres Across India
          </motion.h2>
          <motion.div className={styles.tableWrap} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>State</th>
                  <th>Villages</th>
                  <th>Women Employed</th>
                  <th>Est.</th>
                </tr>
              </thead>
              <tbody>
                {centres.map((c) => (
                  <tr key={c.state}>
                    <td><strong>{c.state}</strong></td>
                    <td>{c.villages}</td>
                    <td>{c.women}+</td>
                    <td>{c.established}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Want to Start a Centre in Your Village?</h2>
          <p>We&apos;re always looking for community partners to expand our reach.</p>
          <Link href="/contact" className={styles.ctaBtn}>
            <Heart size={18} /> Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
