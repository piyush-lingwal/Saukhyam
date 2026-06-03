'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Dumbbell, ArrowRight, Users, Globe, Sparkles } from 'lucide-react';
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
    slug: 'heal',
    icon: Sparkles,
    title: 'HEAL',
    subtitle: 'Health, Environment, Active Living',
    description:
      'Supporting girls and women facing menstrual disorders such as PCOS through lifestyle shifts, guidance, and reusable menstrual products. A holistic approach combining chemical-free pads with nutrition, movement, and stress management.',
    stats: [
      { label: 'Healing Stories', value: '14+' },
      { label: 'PCOS Improvements', value: '70%' },
      { label: 'Pain Reduction', value: '85%' },
    ],
    color: 'green' as const,
  },
  {
    slug: 'reach',
    icon: Globe,
    title: 'REACH',
    subtitle: 'Rural Empowerment & Community Health',
    description:
      'Bringing safe, chemical-free menstrual hygiene to rural India through satellite centres. Training rural women to manufacture pads locally - creating livelihoods while transforming community health.',
    stats: [
      { label: 'Satellite Centres', value: '25+' },
      { label: 'States Covered', value: '20+' },
      { label: 'Villages Reached', value: '101' },
    ],
    color: 'teal' as const,
  },
  {
    slug: 'care',
    icon: GraduationCap,
    title: 'CARE',
    subtitle: 'Campus Action for Reusable Essentials',
    description:
      'Helping college campuses shift toward sustainable menstrual choices. Through workshops, ambassador programs, and trial kits, CARE builds a generation of environmentally conscious young women.',
    stats: [
      { label: 'Campus Partners', value: '50+' },
      { label: 'Students Reached', value: '10,000+' },
      { label: 'Workshops', value: '200+' },
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
              From rural villages to sports academies - our programs create lasting change
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

      {/* ── State Pages ── */}
      <section className={styles.section}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.sectionTitle}>REACH & CARE across India</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: 520, margin: '0 auto 1.5rem' }}>
            11 dedicated state impact pages with live stats, campaigns, timelines, and volunteer opportunities.
          </p>
          <Link href="/programs/states" className={styles.programLink} style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
            <MapPin size={18} /> Explore state pages <ArrowRight size={16} />
          </Link>
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
