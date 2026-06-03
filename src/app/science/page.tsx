'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Microscope, Layers, Droplets, Shield, Heart, Leaf,
  ShoppingBag, Sparkles, Sun, Wind, Ban, Recycle,
  FlaskConical, Globe, AlertTriangle, Flag,
  BookOpen, ExternalLink, FileText, ChevronRight,
  XCircle, CheckCircle2, Beaker, Brain, Activity,
  ShieldAlert, Atom,
} from 'lucide-react';
import {
  hiddenDangersStudies,
  recentResearchStudies,
  keyFindings,
  chemicalsFound,
  researchConclusion,
} from '@/data/research';
import ScienceSectionNav from '@/components/products/ScienceSectionNav';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.06 } } };

const padLayers = [
  { num: 1, name: 'Top Layer - Soft Cotton', desc: '100% cotton surface for comfort and breathability', icon: Heart },
  { num: 2, name: 'Absorbent Core - Banana Fiber', desc: 'Natural banana fiber with antimicrobial properties (3g-9g)', icon: Leaf },
  { num: 3, name: 'Moisture Barrier - PU Layer', desc: 'Polyurethane leak-proof layer prevents any seepage', icon: Shield },
  { num: 4, name: 'Base Layer - Cotton Back', desc: 'Breathable cotton back with snap-button wings', icon: Wind },
];

const comparisonData = [
  { feature: 'Material', saukhyam: 'Banana Fiber + Cotton', disposable: 'Wood Pulp + Plastic + SAP Gel' },
  { feature: 'Chemicals', saukhyam: 'Zero - 100% Chemical Free', disposable: 'Dioxins, Phthalates, VOCs, Chlorine' },
  { feature: 'Lifespan', saukhyam: '2-3 Years (100+ cycles)', disposable: 'Single Use (4-8 hours)' },
  { feature: 'Cost / Year', saukhyam: '₹200-400 / year', disposable: '₹2,400-4,000 / year' },
  { feature: 'Waste Generated', saukhyam: '0 kg (biodegradable)', disposable: '125+ kg lifetime waste' },
  { feature: 'Decomposition', saukhyam: '6 months (compostable)', disposable: '500-800 years' },
  { feature: 'Skin Safety', saukhyam: 'Hypoallergenic, no irritation', disposable: 'Rashes, allergies, hormonal disruption' },
  { feature: 'Absorbency', saukhyam: 'High (natural fiber wicking)', disposable: 'High (chemical SAP gel)' },
];

const healthBenefits = [
  { icon: Heart, title: 'Reduced Period Pain', desc: 'Users report up to 60% reduction in cramps after switching. Banana fiber\'s therapeutic properties may help naturally.' },
  { icon: Shield, title: 'No Chemical Exposure', desc: 'Zero dioxins, phthalates, or synthetic polymers touching your skin. 100% chemical-free every cycle.' },
  { icon: Droplets, title: 'Better Skin Health', desc: 'Breathable cotton + natural fiber means no rashes, no itching, no dryness. Your skin can breathe.' },
  { icon: Sun, title: 'Natural Disinfection', desc: 'Sunlight drying naturally kills 99.9% bacteria - no need for chemical sanitizers or UV sterilizers.' },
  { icon: Wind, title: 'Breathable Design', desc: 'Natural materials allow air circulation, preventing the humid environment that causes infections with plastic pads.' },
  { icon: Recycle, title: 'Planet Healing', desc: 'One woman switching saves 125+ kg of non-biodegradable waste. Each pad is fully compostable at end-of-life.' },
];

const iconMap: Record<string, typeof FlaskConical> = {
  FlaskConical,
  Globe,
  AlertTriangle,
  Flag,
};

const categoryIcons: Record<string, typeof FlaskConical> = {
  chemicals: FlaskConical,
  'india-specific': Flag,
  reproductive: Activity,
  'heavy-metals': ShieldAlert,
  phthalates: Beaker,
  vocs: Atom,
  safety: Shield,
  pcos: Brain,
  mechanistic: Microscope,
};

const categoryLabels: Record<string, string> = {
  chemicals: 'Chemical Analysis',
  'india-specific': 'India Specific',
  reproductive: 'Reproductive Health',
  'heavy-metals': 'Heavy Metals',
  phthalates: 'Phthalates',
  vocs: 'VOCs',
  safety: 'Safety Assessment',
  pcos: 'PCOS Link',
  mechanistic: 'Mechanistic',
};

export default function SciencePage() {
  return (
    <div className={styles.sciencePage}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className="container">
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className={styles.heroBreadcrumb}>
              <Link href="/">Home</Link>
              <ChevronRight size={14} />
              <Link href="/products">Products</Link>
              <ChevronRight size={14} />
              <span>Science</span>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.heroLabel}>
              <Microscope size={14} />
              The Science Behind Saukhyam
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
              Why <span className={styles.heroAccent}>Banana Fiber</span>
              <br />
              Changes Everything
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDesc}>
              India&apos;s first banana fiber absorbent technology - naturally antimicrobial,
              chemical free, and scientifically proven to be better for your body.
              Backed by 16+ peer-reviewed studies.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.heroActions}>
              <Link href="/products" className={styles.heroBtnPrimary}>
                <ShoppingBag size={18} />
                Switch Now
              </Link>
              <a href="#research" className={styles.heroBtnSecondary}>
                <BookOpen size={18} />
                Read the Research
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Pad Anatomy ── */}
      <section id="layers" className={styles.section}>
        <div className="container">
          <ScienceSectionNav />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Layers size={14} />
              What&apos;s Inside a Saukhyam Pad
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              4 Layers of Natural Protection
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Each layer is carefully engineered - natural, functional, and skin-safe.
              Zero chemicals. Zero compromise.
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
              {padLayers.map(layer => {
                const LayerIcon = layer.icon;
                return (
                  <motion.div key={layer.num} variants={fadeInUp} className={styles.layer}>
                    <div className={styles.layerNum}>{layer.num}</div>
                    <div className={styles.layerInfo}>
                      <h4>{layer.name}</h4>
                      <p>{layer.desc}</p>
                    </div>
                    <div className={styles.layerIcon}>
                      <LayerIcon size={18} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className={styles.layersSummary}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className={styles.summaryHighlight}>
                <Leaf size={20} />
                <div>
                  <strong>The Magic of Layer 2</strong>
                  <p>
                    Unlike tree-based cellulose used in disposable pads (which requires
                    deforestation and chemical processing), banana fiber is sourced from
                    <strong> agricultural waste</strong>. Banana trees fruit only once, then
                    are cut - we transform that waste into a powerful absorbent material
                    with natural antimicrobial properties.
                  </p>
                </div>
              </motion.div>
              <motion.p variants={fadeInUp}>
                Research shows banana fiber contains <strong>pathogenesis-related (PR) proteins</strong> - 
                naturally occurring antimicrobial compounds. This means the absorbent core actively resists
                bacterial growth, making it inherently hygienic without any chemical treatment.
              </motion.p>
              <motion.p variants={fadeInUp}>
                The <strong>PU (polyurethane) leak-proof layer</strong> is breathable yet impermeable,
                preventing leakage while allowing air flow - eliminating the &quot;greenhouse effect&quot;
                created by plastic-backed disposable pads.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section id="comparison" className={`${styles.section} ${styles.sectionAlt}`}>
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

          <motion.div
            className={styles.comparisonTableWrap}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th><span className={styles.thGood}>🌿 Saukhyam Reusable</span></th>
                  <th><span className={styles.thBad}>🚫 Disposable Pads</span></th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map(row => (
                  <tr key={row.feature}>
                    <td><strong>{row.feature}</strong></td>
                    <td className={styles.highlight}>
                      <CheckCircle2 size={14} className={styles.inlineIcon} />
                      {row.saukhyam}
                    </td>
                    <td className={styles.danger}>
                      <XCircle size={14} className={styles.inlineIcon} />
                      {row.disposable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── Health Benefits: Why Switch ── */}
      <section id="benefits" className={styles.section}>
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
              Why Switch
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              How Switching Heals Your Body
            </motion.h2>
            <motion.p variants={fadeInUp} className={`${styles.sectionDesc} ${styles.sectionDescCenter}`}>
              Thousands of women report measurable health improvements
              after switching to Saukhyam.
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

      {/* ══════════════════════════════════════════════════ */}
      {/*  THE EVIDENCE - Research & Data                   */}
      {/* ══════════════════════════════════════════════════ */}

      {/* ── Key Findings Stats ── */}
      <section id="research" className={styles.statsBar}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.sectionCenter}
          >
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <FlaskConical size={14} />
              The Evidence
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              The Hidden Dangers in Disposable Pads
            </motion.h2>
            <motion.p variants={fadeInUp} className={`${styles.sectionDesc} ${styles.sectionDescCenter}`}>
              Recent peer-reviewed research confirms that disposable sanitary napkins
              contain harmful chemicals linked to reproductive health disorders.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {keyFindings.map((finding) => {
              const Icon = iconMap[finding.icon] || FlaskConical;
              return (
                <motion.div key={finding.label} variants={fadeInUp} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.statValue}>{finding.stat}</div>
                  <div className={styles.statLabel}>{finding.label}</div>
                  <p className={styles.statDesc}>{finding.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Chemicals Found ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <ShieldAlert size={14} />
              What&apos;s Inside Your Disposable Pad
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              Chemicals Found in Disposable Pads
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              Research from 16+ studies reveals these hazardous substances in commercial
              sanitary napkins - many of which are endocrine disruptors.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.chemicalsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerFast}
          >
            {chemicalsFound.map((chem) => (
              <motion.div
                key={chem.name}
                variants={fadeInUp}
                className={`${styles.chemicalCard} ${styles[chem.severity]}`}
              >
                <div className={styles.chemicalHeader}>
                  <XCircle size={18} className={styles.chemicalDanger} />
                  <h4>{chem.name}</h4>
                  <span className={`${styles.severityBadge} ${styles[chem.severity]}`}>
                    {chem.severity === 'high' ? 'High Risk' : 'Moderate Risk'}
                  </span>
                </div>
                <p>{chem.effect}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Research Section 1: Hidden Dangers ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeInUp} className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>
              <FileText size={14} />
              Research Compilation - 2024
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitleLight}>
              The Hidden Dangers in Disposable Sanitary Napkins
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDescLight}>
              We compiled these studies in 2024 when we first started approaching doctors.
              Doctors were more willing to believe us after we shared this research with them.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.studiesStack}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {hiddenDangersStudies.map((study) => {
              const CategoryIcon = categoryIcons[study.category] || FlaskConical;
              return (
                <motion.div key={study.id} variants={fadeInUp} className={styles.studyCard}>
                  <div className={styles.studyNumber}>{study.number}</div>
                  <div className={styles.studyContent}>
                    <div className={styles.studyMeta}>
                      <span className={styles.studyCategoryBadge}>
                        <CategoryIcon size={12} />
                        {categoryLabels[study.category]}
                      </span>
                      <span className={styles.studyYear}>{study.year}</span>
                    </div>
                    <h3 className={styles.studyTitle}>{study.title}</h3>
                    <p className={styles.studySummary}>{study.summary}</p>
                    <div className={styles.studyCitation}>
                      <span className={styles.citationAuthors}>{study.authors}</span>
                      <span className={styles.citationJournal}>{study.journal}, {study.year}</span>
                    </div>
                    {study.paperUrl && (
                      <a
                        href={study.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.studyLink}
                      >
                        <ExternalLink size={14} />
                        Read Full Paper
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Research Section 2: Recent Studies ── */}
      <section className={styles.section}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeInUp} className={styles.sectionLabel}>
              <Beaker size={14} />
              Research Compilation - 2025
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitle}>
              11 Recent Peer-Reviewed Papers
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.sectionDesc}>
              High-quality journal publications on chemicals/toxins in disposable
              menstrual products and related health impacts - including evidence around PCOS.
            </motion.p>
          </motion.div>

          <div className={styles.researchColumns}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h3 className={styles.columnTitle}>
                <FlaskConical size={18} />
                Chemicals in Menstrual Products
              </h3>
              <div className={styles.compactStudies}>
                {recentResearchStudies.slice(0, 7).map((study) => {
                  const CategoryIcon = categoryIcons[study.category] || FlaskConical;
                  return (
                    <motion.div key={study.id} variants={fadeInUp} className={styles.compactStudyCard}>
                      <div className={styles.compactStudyNum}>{study.number}</div>
                      <div className={styles.compactStudyBody}>
                        <h4>{study.title}</h4>
                        <div className={styles.compactMeta}>
                          <span className={styles.compactJournal}>{study.journal}</span>
                          <span className={styles.compactYear}>{study.year}</span>
                        </div>
                        <p>{study.summary}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h3 className={styles.columnTitle}>
                <Brain size={18} />
                EDCs Linked to PCOS
              </h3>
              <div className={styles.compactStudies}>
                {recentResearchStudies.slice(7).map((study) => {
                  const CategoryIcon = categoryIcons[study.category] || FlaskConical;
                  return (
                    <motion.div key={study.id} variants={fadeInUp} className={`${styles.compactStudyCard} ${styles.pcosCard}`}>
                      <div className={`${styles.compactStudyNum} ${styles.pcosNum}`}>{study.number}</div>
                      <div className={styles.compactStudyBody}>
                        <h4>{study.title}</h4>
                        <div className={styles.compactMeta}>
                          <span className={styles.compactJournal}>{study.journal}</span>
                          <span className={styles.compactYear}>{study.year}</span>
                        </div>
                        <p>{study.summary}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* PCOS callout */}
              <motion.div variants={fadeInUp} className={styles.pcosCallout}>
                <AlertTriangle size={20} />
                <div>
                  <strong>The PCOS Connection</strong>
                  <p>
                    Human studies increasingly link higher endocrine-disrupting
                    chemical (EDC) exposures with PCOS. Animal studies confirm
                    BPA can induce PCOS-like syndrome - establishing causation.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Research Conclusion ── */}
      <section className={`${styles.section} ${styles.sectionConclusion}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.conclusionContent}
          >
            <motion.span variants={fadeInUp} className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}>
              <BookOpen size={14} />
              Summary
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitleLight}>
              {researchConclusion.headline}
            </motion.h2>
            <motion.div className={styles.conclusionPoints} variants={stagger}>
              {researchConclusion.points.map((point, i) => (
                <motion.div key={i} variants={fadeInUp} className={styles.conclusionPoint}>
                  <CheckCircle2 size={20} className={styles.conclusionCheckGreen} />
                  <p>{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp}>The Science Is Clear. Make the Switch.</motion.h2>
            <motion.p variants={fadeInUp}>
              16+ peer-reviewed studies. 7 countries tested. The evidence is
              overwhelming - chemical-free banana fiber pads are the healthier choice.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.ctaButtons}>
              <Link href="/products" className={styles.ctaBtn}>
                <ShoppingBag size={20} />
                Shop Now
              </Link>
              <Link href="/faq" className={styles.ctaBtnOutline}>
                <BookOpen size={20} />
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
