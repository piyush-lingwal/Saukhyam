'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Microscope,
  Layers,
  ShoppingBag,
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
  Leaf,
} from 'lucide-react';
import styles from './SaukhyamPadsPage.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const padLayers = [
  {
    num: 1,
    title: 'Top Layer — Soft Cotton',
    description: '100% cotton surface for comfort and breathability',
  },
  {
    num: 2,
    title: 'Absorbent Core — Banana Fiber',
    description: 'Natural banana fiber with antimicrobial properties (3g–9g)',
  },
  {
    num: 3,
    title: 'Moisture Barrier — PU Layer',
    description: 'Polyurethane leak-proof layer prevents any seepage',
  },
  {
    num: 4,
    title: 'Base Layer — Cotton Back',
    description: 'Breathable cotton back with snap-button wings',
  },
];

const comparisonRows = [
  { feature: 'Material', saukhyam: 'Banana Fiber + Cotton', disposable: 'Wood Pulp + Plastic + SAP Gel' },
  { feature: 'Chemicals', saukhyam: 'Zero — 100% Chemical Free', disposable: 'Dioxins, Phthalates, VOCs, Chlorine' },
  { feature: 'Lifespan', saukhyam: '2–3 Years (100+ cycles)', disposable: 'Single Use (4–8 hours)' },
  { feature: 'Cost / Year', saukhyam: '₹200–400 / year', disposable: '₹2,400–4,000 / year' },
  { feature: 'Waste Generated', saukhyam: '0 kg (biodegradable)', disposable: '125+ kg lifetime waste' },
  { feature: 'Decomposition', saukhyam: '6 months (compostable)', disposable: '500–800 years' },
  { feature: 'Skin Safety', saukhyam: 'Hypoallergenic, no irritation', disposable: 'Rashes, allergies, hormonal disruption' },
  { feature: 'Absorbency', saukhyam: 'High (natural fiber wicking)', disposable: 'High (chemical SAP gel)' },
];

type LayerCardProps = {
  num: number;
  title: string;
  description: string;
};

function LayerCard({ num, title, description }: LayerCardProps) {
  return (
    <motion.article variants={fadeInUp} className={styles.layerCard}>
      <div className={styles.layerCardTop}>
        <span className={styles.layerNum} aria-hidden="true">
          {num}
        </span>
        <h3 className={styles.layerTitle}>{title}</h3>
      </div>
      <p className={styles.layerDesc}>{description}</p>
    </motion.article>
  );
}

export default function SaukhyamPadsPage() {
  const [concern, setConcern] = useState('');

  const handleRecommendation = (e: FormEvent) => {
    e.preventDefault();
    const q = concern.trim();
    if (q) {
      window.location.href = `/products?search=${encodeURIComponent(q)}`;
    } else {
      window.location.href = '/products';
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.nav variants={fadeInUp} className={styles.heroBreadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link href="/science">Science</Link>
            </motion.nav>

            <motion.div variants={fadeInUp} className={styles.heroTag}>
              <Microscope size={14} aria-hidden="true" />
              The Science Behind Saukhyam
            </motion.div>

            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              The Innovation Behind{' '}
              <span className={styles.heroAccent}>Saukhyam Pads</span> Changes Everything
            </motion.h1>

            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              India&apos;s first banana fiber absorbent technology — naturally antimicrobial,
              chemical-free, and scientifically proven to be better for your body. Backed by 16+
              peer-reviewed studies.
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroActions}>
              <Link href="/products" className={styles.btnPrimary}>
                <ShoppingBag size={18} aria-hidden="true" />
                Switch Now
              </Link>
              <Link href="/science#research" className={styles.btnSecondary}>
                <BookOpen size={18} aria-hidden="true" />
                Read the Research
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What's Inside */}
      <section className={styles.layersSection}>
        <div className="container">
          <motion.header
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.sectionEyebrow}>
              <Layers size={14} aria-hidden="true" />
              What&apos;s Inside a Saukhyam Pad
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              4 Layers of Natural Protection
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Each layer is carefully engineered — natural, functional, and skin-safe. Zero
              chemicals. Zero compromise.
            </motion.p>
          </motion.header>

          <div className={styles.layersGrid}>
            <motion.div
              className={styles.cardsColumn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
            >
              {padLayers.map(layer => (
                <LayerCard
                  key={layer.num}
                  num={layer.num}
                  title={layer.title}
                  description={layer.description}
                />
              ))}
            </motion.div>

            <motion.aside
              className={styles.rightColumn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className={styles.magicBox}>
                <h3 className={styles.magicTitle}>
                  <Sparkles size={20} aria-hidden="true" />
                  The Magic of Layer 2
                </h3>
                <p className={styles.magicLead}>
                  Unlike tree-based cellulose used in disposable pads (which requires deforestation
                  and chemical processing), banana fiber is sourced from{' '}
                  <strong className={styles.magicHighlight}>agricultural waste</strong>.
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className={styles.extraText}>
                Banana trees fruit only once, then are cut — we transform that waste into a
                powerful absorbent material with natural antimicrobial properties.
              </motion.p>

              <motion.p variants={fadeInUp} className={styles.extraText}>
                Research shows banana fiber contains pathogenesis-related (PR) proteins — naturally
                occurring antimicrobial compounds. This means the absorbent core actively resists
                bacterial growth without any chemical treatment.
              </motion.p>

              <motion.p variants={fadeInUp} className={styles.extraText}>
                The PU (polyurethane) leak-proof layer is breathable yet impermeable, preventing
                leakage while allowing airflow — eliminating the greenhouse effect created by
                plastic-backed disposable pads.
              </motion.p>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <motion.header
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Saukhyam vs. Disposable Pads
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              See how natural banana fiber compares to chemically-processed disposable pads.
            </motion.p>
          </motion.header>

          <motion.div
            className={styles.tableCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className={styles.tableScroll}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>
                      <span className={styles.thGood}>🌿 Saukhyam</span>
                    </th>
                    <th>
                      <span className={styles.thBad}>🚫 Disposable</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 1 ? styles.rowAlt : undefined}>
                      <td className={styles.featureCell}>{row.feature}</td>
                      <td className={styles.cellGood}>
                        <CheckCircle2 size={14} className={styles.rowIcon} aria-hidden="true" />
                        {row.saukhyam}
                      </td>
                      <td className={styles.cellBad}>
                        <XCircle size={14} className={styles.rowIcon} aria-hidden="true" />
                        {row.disposable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Help box */}
          <motion.div
            className={styles.helpBox}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className={styles.helpTitle}>Still Not Sure? Let Us Help You</h3>
            <p className={styles.helpDesc}>
              Tell us your concern and we&apos;ll point you to the right pack.
            </p>
            <form className={styles.helpForm} onSubmit={handleRecommendation}>
              <input
                type="text"
                className={styles.helpInput}
                placeholder="Enter your concern (e.g., heavy flow, skin irritation)"
                value={concern}
                onChange={e => setConcern(e.target.value)}
                aria-label="Your concern"
              />
              <button type="submit" className={styles.helpBtn}>
                Get Recommendation
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className={styles.ctaIcon} aria-hidden="true">
              <Leaf size={32} />
            </motion.div>
            <motion.h2 variants={fadeInUp} className={styles.ctaTitle}>
              Make the Switch to Safer Period Care
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.ctaDesc}>
              Join 30 lakh+ women who chose chemical-free, planet-friendly period care.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products" className={styles.ctaBtn}>
                <ShoppingBag size={20} aria-hidden="true" />
                Shop Saukhyam Pads
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
