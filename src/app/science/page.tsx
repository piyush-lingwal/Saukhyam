'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Microscope, Layers, Droplets, Shield, Heart, Leaf,
  ShoppingBag, Sparkles, Sun, Wind, ThermometerSun,
  Ban, Recycle,
} from 'lucide-react';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const padLayers = [
  { num: 1, name: 'Top Layer — Soft Cotton', desc: '100% cotton surface for comfort and breathability' },
  { num: 2, name: 'Absorbent Core — Banana Fiber', desc: 'Natural banana fiber with antimicrobial properties (3g–9g)' },
  { num: 3, name: 'Moisture Barrier — PU Layer', desc: 'Polyurethane leak-proof layer prevents any seepage' },
  { num: 4, name: 'Base Layer — Cotton Back', desc: 'Breathable cotton back with snap-button wings' },
];

const comparisonData = [
  { feature: 'Material', saukhyam: 'Banana Fiber + Cotton', disposable: 'Wood Pulp + Plastic + SAP Gel', status: 'good' },
  { feature: 'Chemicals', saukhyam: 'Zero — 100% Chemical Free', disposable: 'Dioxins, Phthalates, VOCs, Chlorine', status: 'good' },
  { feature: 'Lifespan', saukhyam: '2-3 Years (100+ cycles)', disposable: 'Single Use (4-8 hours)', status: 'good' },
  { feature: 'Cost / Year', saukhyam: '₹200-400 / year', disposable: '₹2,400-4,000 / year', status: 'good' },
  { feature: 'Waste Generated', saukhyam: '0 kg (biodegradable)', disposable: '125+ kg lifetime waste', status: 'good' },
  { feature: 'Decomposition', saukhyam: '6 months (compostable)', disposable: '500-800 years', status: 'good' },
  { feature: 'Skin Safety', saukhyam: 'Hypoallergenic, no irritation', disposable: 'Rashes, allergies, hormonal disruption', status: 'good' },
  { feature: 'Absorbency', saukhyam: 'High (natural fiber wicking)', disposable: 'High (chemical SAP gel)', status: 'neutral' },
];

const healthBenefits = [
  { icon: Heart, title: 'Reduced Period Pain', desc: 'Users report up to 60% reduction in cramps after switching. Banana fiber\'s therapeutic properties may help naturally.' },
  { icon: Shield, title: 'No Chemical Exposure', desc: 'Zero dioxins, phthalates, or synthetic polymers touching your skin. 100% chemical-free every cycle.' },
  { icon: Droplets, title: 'Better Skin Health', desc: 'Breathable cotton + natural fiber means no rashes, no itching, no dryness. Your skin can breathe.' },
  { icon: Sun, title: 'Natural Disinfection', desc: 'Sunlight drying naturally kills 99.9% bacteria — no need for chemical sanitizers or UV sterilizers.' },
  { icon: Wind, title: 'Breathable Design', desc: 'Natural materials allow air circulation, preventing the humid environment that causes infections with plastic pads.' },
  { icon: Recycle, title: 'Planet Healing', desc: 'One woman switching saves 125+ kg of non-biodegradable waste. Each pad is fully compostable at end-of-life.' },
];

export default function SciencePage() {
  return (
    <div className={styles.sciencePage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className={styles.heroLabel}>
              <Microscope size={14} />
              The Science
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Why <span className={styles.heroAccent}>Banana Fiber</span><br />
              Changes Everything
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              India&apos;s first banana fiber absorbent technology — naturally antimicrobial, 
              chemical free, and scientifically proven to be better for your body.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Pad Anatomy ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Layers size={14} />
              Pad Anatomy
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              What&apos;s Inside a Saukhyam Pad
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              4 carefully engineered layers — each one natural, functional, and skin-safe.
            </motion.p>
          </motion.div>

          <div className={styles.layersGrid}>
            <motion.div
              className={styles.layersVisual}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {padLayers.map(layer => (
                <motion.div key={layer.num} variants={fadeInUp} className={styles.layer}>
                  <div className={styles.layerNum}>{layer.num}</div>
                  <div className={styles.layerInfo}>
                    <h4>{layer.name}</h4>
                    <p>{layer.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={styles.layersSummary}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeInUp}>
                <strong>The magic is in Layer 2</strong> — the banana fiber core. Unlike tree-based cellulose 
                used in disposable pads (which requires deforestation and chemical processing), banana fiber 
                is sourced from <strong>agricultural waste</strong>. Banana trees fruit only once, then are 
                cut down — we transform that waste into powerful absorbent material.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Research shows banana fiber contains <strong>pathogenesis-related (PR) proteins</strong> — 
                naturally occurring antimicrobial compounds. This means the absorbent core actively resists 
                bacterial growth, making it inherently hygienic without any chemical treatment.
              </motion.p>
              <motion.p variants={fadeInUp}>
                The <strong>PU (polyurethane) leak-proof layer</strong> is breathable yet impermeable, 
                preventing leakage while allowing air flow. This dual action keeps you dry and comfortable 
                while eliminating the &quot;greenhouse effect&quot; created by plastic-backed disposable pads.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Ban size={14} />
              The Comparison
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Saukhyam vs. Disposable Pads
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              See how natural banana fiber compares to chemically-processed disposable pads.
            </motion.p>
          </motion.div>

          <motion.table
            className={styles.comparisonTable}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <thead>
              <tr>
                <th>Feature</th>
                <th>🌿 Saukhyam Reusable</th>
                <th>🚫 Disposable Pads</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map(row => (
                <tr key={row.feature}>
                  <td><strong>{row.feature}</strong></td>
                  <td className={styles.highlight}>{row.saukhyam}</td>
                  <td className={styles.danger}>{row.disposable}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </section>

      {/* ── Health Benefits ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.sectionCenter}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Sparkles size={14} />
              Health Benefits
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              How Switching Heals Your Body
            </motion.h2>
            <motion.p variants={fadeInUp} className={`${styles.sectionDesc} ${styles.sectionDescCenter}`}>
              Thousands of women report measurable health improvements after switching to Saukhyam.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.benefitsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {healthBenefits.map(b => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} variants={fadeInUp} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}><Icon size={24} /></div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp}>Ready to Make the Switch?</motion.h2>
            <motion.p variants={fadeInUp}>
              Experience the difference that chemical-free, banana fiber pads can make in your life.
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
