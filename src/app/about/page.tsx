'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart, Leaf, Users, Trophy, ShoppingBag, Sparkles,
  Target, Globe, Award,
} from 'lucide-react';
import { teamMembers, awards } from '@/data/content';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const timelineEvents = [
  { year: '2016', title: 'The Seed Was Planted', desc: 'Anju Bist, inspired by Amma\'s vision, began researching sustainable menstrual hygiene solutions at Amritapuri Ashram.' },
  { year: '2017', title: 'Banana Fiber Discovery', desc: 'After extensive R&D, the team developed India\'s first banana fiber absorbent core — chemical free and biodegradable.' },
  { year: '2018', title: 'First Production Unit', desc: 'Established the first manufacturing centre, training rural women in Amritapuri to handcraft reusable pads.' },
  { year: '2019', title: 'NITI Aayog Recognition', desc: 'Recognized by NITI Aayog as a Women Transforming India initiative. Expanded to multiple satellite centres.' },
  { year: '2020', title: 'Scaling Impact', desc: 'Reached 1 lakh women during the pandemic. Launched online sales and awareness campaigns across India.' },
  { year: '2023', title: '5 Lakh Women Strong', desc: 'Crossed 5 lakh users nationwide. Featured at UN Climate Conference. Expanded product range with sampler and value packs.' },
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className={styles.heroLabel}>
              <Heart size={14} />
              Our Story
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Healing Periods.<br />
              <span className={styles.heroAccent}>Empowering Women.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              Born from a vision to make menstrual hygiene safe, sustainable, and empowering — 
              Saukhyam is India&apos;s first banana fiber reusable pad, handcrafted by rural women.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Sparkles size={14} />
              How It Began
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              From Amritapuri to the World
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              What started as a small initiative at Amma&apos;s ashram has grown into a movement 
              touching the lives of over 5 lakh women across India.
            </motion.p>
          </motion.div>

          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://saukhyampads.org/cdn/shop/files/6_d1942f75-768a-4d32-bb23-666a71990a71_2048x2048.png?v=1746945194"
                alt="Saukhyam team at work"
              />
            </motion.div>
            <motion.div
              className={styles.storyText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeInUp}>
                <strong>Saukhyam</strong> (meaning &quot;comfort&quot; in Sanskrit) was founded by 
                <strong> Anju Bist</strong> under the guidance of Mata Amritanandamayi (Amma). 
                What began as a quest to find chemical-free menstrual products led to the 
                revolutionary discovery of <strong>banana fiber</strong> as a natural absorbent.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Unlike commercial pads that contain <strong>dioxins, phthalates, and synthetic polymers</strong>, 
                Saukhyam pads use only natural materials — banana fiber for absorption, cotton for 
                comfort, and PU for leak protection. Zero chemicals. Zero waste.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Every pad is <strong>handcrafted by trained rural women</strong>, providing them 
                dignified employment while creating products that heal both bodies and the planet. 
                This dual impact — empowering makers & users — is at the heart of everything we do.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Target size={14} />
              Mission &amp; Vision
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              What Drives Us
            </motion.h2>
          </motion.div>

          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeInUp}>
                <strong>Our Mission:</strong> To make safe, chemical-free menstrual hygiene products 
                accessible to every woman in India while creating sustainable livelihoods for 
                rural women through skill development and employment.
              </motion.p>
              <motion.p variants={fadeInUp}>
                <strong>Our Vision:</strong> A world where no woman compromises her health due to 
                harmful chemicals in hygiene products, and where sustainable choices are the natural, 
                affordable default — not a luxury.
              </motion.p>
              <motion.p variants={fadeInUp}>
                We envision Saukhyam satellite centres in every state of India, each staffed by 
                local women entrepreneurs, creating a nationwide network of sustainable menstrual 
                hygiene and women&apos;s empowerment.
              </motion.p>
            </motion.div>
            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://saukhyampads.org/cdn/shop/files/5_01f142f9-1e34-44d2-93ce-bdd0ceca925d_2048x2048.png?v=1746945196"
                alt="Saukhyam satellite centre"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Globe size={14} />
              Our Journey
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Milestones Along the Way
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {timelineEvents.map((event) => (
              <motion.div key={event.year} variants={fadeInUp} className={styles.timelineItem}>
                <div className={styles.timelineDot}>{event.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Users size={14} />
              The Team
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              People Behind Saukhyam
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              A passionate team of women dedicated to changing the world, one pad at a time.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.teamGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeInUp} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  {member.name.charAt(0)}
                </div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamRole}>{member.role}</div>
                <p className={styles.teamBio}>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Award size={14} />
              Recognition
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Awards &amp; Accolades
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.awardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {awards.map((award) => (
              <motion.div key={award.id} variants={fadeInUp} className={styles.awardCard}>
                <div className={styles.awardIcon}>
                  <Trophy size={22} />
                </div>
                <div className={styles.awardName}>{award.title}</div>
                <div className={styles.awardOrg}>{award.organization} • {award.year}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp}>Join the Reusable Revolution</motion.h2>
            <motion.p variants={fadeInUp}>
              Every pad you buy creates a wave of change — for your health, for rural women, and for the planet.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products" className={styles.ctaBtn}>
                <ShoppingBag size={20} />
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
