'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Dumbbell, ArrowRight, Users, Globe } from 'lucide-react';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const programs = [
  {
    slug: 'satellite-centres',
    icon: MapPin,
    title: 'Satellite Centres',
    subtitle: '20+ States • 101 Villages',
    description:
      'Decentralized manufacturing and distribution centres across India, training rural women to handcraft Saukhyam pads locally. Each centre is a hub of livelihood, skill development, and menstrual health awareness.',
    stats: [
      { label: 'Active Centres', value: '25+' },
      { label: 'States Covered', value: '20+' },
      { label: 'Women Trained', value: '500+' },
    ],
    color: 'green' as const,
  },
  {
    slug: 'buddy-program',
    icon: GraduationCap,
    title: 'Buddy Program',
    subtitle: 'Peer-to-Peer Mentoring',
    description:
      'A peer education model where trained "Saukhyam Buddies" become local ambassadors for menstrual health. Each buddy conducts awareness workshops, supports first-time switchers, and builds a community of change.',
    stats: [
      { label: 'Active Buddies', value: '200+' },
      { label: 'Workshops', value: '1,000+' },
      { label: 'Women Reached', value: '50,000+' },
    ],
    color: 'teal' as const,
  },
  {
    slug: 'sports-women',
    icon: Dumbbell,
    title: 'Sports Women Program',
    subtitle: 'Athletic Performance • Zero Compromise',
    description:
      'A dedicated initiative supporting female athletes with high-performance reusable pads. Partnering with sports academies and coaches to ensure no girl misses training or competition because of her period.',
    stats: [
      { label: 'Athletes Supported', value: '1,000+' },
      { label: 'Academies', value: '15+' },
      { label: 'Sports Covered', value: '8+' },
    ],
    color: 'amber' as const,
  },
];

export default function ProgramsPage() {
  return (
    <div className={styles.programsPage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.heroLabel}>
              <Globe size={16} /> Our Programs
            </motion.span>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Empowering <span className={styles.heroAccent}>Communities</span> Across India
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              From rural villages to sports academies — our programs create lasting change
              through education, livelihood, and menstrual health awareness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            className={styles.programsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {programs.map((program) => (
              <motion.div key={program.slug} variants={fadeInUp}>
                <Link href={`/programs/${program.slug}`} className={`${styles.programCard} ${styles[program.color]}`}>
                  <div className={styles.programCardHeader}>
                    <div className={styles.programIcon}>
                      <program.icon size={24} />
                    </div>
                    <div>
                      <h2 className={styles.programTitle}>{program.title}</h2>
                      <p className={styles.programSubtitle}>{program.subtitle}</p>
                    </div>
                  </div>

                  <p className={styles.programDesc}>{program.description}</p>

                  <div className={styles.programStats}>
                    {program.stats.map((stat) => (
                      <div key={stat.label} className={styles.programStat}>
                        <span className={styles.programStatValue}>{stat.value}</span>
                        <span className={styles.programStatLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <span className={styles.programLink}>
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Impact Numbers ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Users size={16} /> Collective Impact
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              The Numbers Behind the Mission
            </motion.h2>
          </motion.div>
          <motion.div
            className={styles.impactStats}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {[
              { value: '5,00,000+', label: 'Women Reached' },
              { value: '20+', label: 'States' },
              { value: '101', label: 'Villages' },
              { value: '29L kg', label: 'CO₂ Prevented' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className={styles.impactStat}>
                <span className={styles.impactStatValue}>{stat.value}</span>
                <span className={styles.impactStatLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
