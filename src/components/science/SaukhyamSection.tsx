'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './SaukhyamSection.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const padLayers = [
  {
    num: 1,
    title: 'Top Layer, Soft Cotton',
    description: '100% cotton surface for comfort and breathability',
  },
  {
    num: 2,
    title: 'Absorbent Core, Banana Fiber',
    description: 'Natural banana fiber with antimicrobial properties (3g–9g)',
  },
  {
    num: 3,
    title: 'Moisture Barrier, PU Layer',
    description: 'Polyurethane leak-proof layer prevents any seepage',
  },
  {
    num: 4,
    title: 'Base Layer, Cotton Back',
    description: 'Breathable cotton back with snap-button wings',
  },
];

const comparisonRows = [
  { feature: 'Material', saukhyam: 'Banana Fiber + Cotton', disposable: 'Wood Pulp + Plastic + SAP Gel' },
  { feature: 'Chemicals', saukhyam: 'Zero, 100% Chemical Free', disposable: 'Dioxins, Phthalates, VOCs, Chlorine' },
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

type TableRowProps = {
  feature: string;
  saukhyam: string;
  disposable: string;
};

function TableRow({ feature, saukhyam, disposable }: TableRowProps) {
  return (
    <tr>
      <td>{feature}</td>
      <td className={styles.cellGood}>{saukhyam}</td>
      <td className={styles.cellBad}>{disposable}</td>
    </tr>
  );
}

export default function SaukhyamSection() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroInner}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
            The Innovation Behind Saukhyam Pads Changes Everything
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            India&apos;s first banana fiber absorbent technology, naturally antimicrobial,
            chemical-free, and scientifically proven to be better for your body. Backed by 16+
            peer-reviewed studies.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <Link href="/products" className={styles.btnPrimary}>
              Switch Now
            </Link>
            <a href="#research" className={styles.btnSecondary}>
              Read the Research
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 4 Layers */}
      <section className={styles.layersSection}>
        <motion.header
          className={styles.layersHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
            4 Layers of Natural Protection
          </motion.h2>
          <motion.p variants={fadeInUp} className={styles.sectionSubtitle}>
            Each layer is carefully engineered, natural, functional, and skin-safe. Zero
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
              <h3 className={styles.magicTitle}>✨ The Magic of Layer 2</h3>
              <ul className={styles.magicList}>
                <li>
                  Banana fiber is sourced from <strong>agricultural waste</strong>
                </li>
                <li>No deforestation required</li>
                <li>Naturally antimicrobial</li>
              </ul>
            </motion.div>

            <motion.p variants={fadeInUp} className={styles.extraText}>
              Banana trees fruit only once, then are cut, we transform that waste into a
              powerful absorbent material with natural antimicrobial properties.
            </motion.p>

            <motion.p variants={fadeInUp} className={styles.extraText}>
              Research shows banana fiber contains pathogenesis-related (PR) proteins , 
              naturally occurring antimicrobial compounds. This allows the absorbent core to
              resist bacterial growth naturally, without chemical treatment.
            </motion.p>

            <motion.p variants={fadeInUp} className={styles.extraText}>
              The PU (polyurethane) leak-proof layer is breathable yet impermeable, preventing
              leakage while allowing airflow, eliminating the &quot;greenhouse effect&quot;
              caused by plastic-backed disposable pads.
            </motion.p>
          </motion.aside>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.comparisonSection}>
        <div className={styles.comparisonInner}>
          <motion.header
            className={styles.comparisonHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Saukhyam vs. Disposable Pads
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionSubtitle}>
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
            <div className={styles.comparisonTableWrap}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>
                      <span className={styles.thGood}>🌿 Saukhyam Reusable</span>
                    </th>
                    <th>
                      <span className={styles.thBad}>🚫 Disposable Pads</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(row => (
                    <TableRow
                      key={row.feature}
                      feature={row.feature}
                      saukhyam={row.saukhyam}
                      disposable={row.disposable}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
