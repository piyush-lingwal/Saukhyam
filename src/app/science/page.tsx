'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Microscope,
  BookOpen,
  Layers,
  Globe,
  ShieldAlert,
  FlaskConical,
  Beaker,
  Atom,
  Wind,
  Droplets,
  Leaf,
  CircleDot,
  Sparkles,
  CheckCircle2,
  ShoppingBag,
  ChevronRight,
  X,
  ExternalLink,
  Brain,
  Activity,
} from 'lucide-react';
import {
  hiddenDangersStudies,
  recentResearchStudies,
  keyFindings,
  chemicalsFound,
  researchConclusion,
  type ResearchStudy,
} from '@/data/research';
import CountUp from '@/components/science/CountUp';
import ScienceHeroVisual from '@/components/science/ScienceHeroVisual';
import SciencePCOSVisual from '@/components/science/SciencePCOSVisual';
import ResearchAccordion from '@/components/science/ResearchAccordion';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.05 } } };

const statIcons: Record<string, typeof BookOpen> = {
  BookOpen,
  Globe,
  Microscope,
  ShieldAlert,
  FlaskConical,
};

const chemicalIcons: Record<string, typeof Beaker> = {
  Phthalates: Beaker,
  Dioxins: FlaskConical,
  'VOCs (Toluene etc.)': Wind,
  'BPA (Bisphenol A)': Atom,
  'Heavy Metals': ShieldAlert,
  Parabens: Droplets,
  'Pesticide Residues': Leaf,
  Microplastics: CircleDot,
  Fragrances: Sparkles,
  'SAP (Super Absorbent Polymers)': Layers,
};

const allStudies: ResearchStudy[] = [...hiddenDangersStudies, ...recentResearchStudies];

const SCIENCE_HERO_IMAGE = '/science/hero-saukhyam-pads.png';
/** Respectful wellness — gentle abdominal comfort representation */
const SCIENCE_PCOS_IMAGE =
  'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1920';

function studiesForChemical(name: string): ResearchStudy[] {
  const key = name.split(' ')[0].toLowerCase();
  return allStudies.filter(
    s =>
      s.title.toLowerCase().includes(key) ||
      s.summary.toLowerCase().includes(key) ||
      (key === 'voc' && (s.summary.includes('VOC') || s.title.includes('VOC'))) ||
      (key === 'bpa' && s.summary.toLowerCase().includes('bpa')) ||
      (key === 'sap' && s.summary.toLowerCase().includes('absorbent')) ||
      (name.includes('Heavy') && s.category === 'heavy-metals') ||
      (name.includes('Phthalate') && s.category === 'phthalates')
  );
}

export default function SciencePage() {
  const [chemicalModal, setChemicalModal] = useState<string | null>(null);

  const modalStudies = useMemo(
    () => (chemicalModal ? studiesForChemical(chemicalModal) : []),
    [chemicalModal]
  );

  const chemicalsCategory1 = recentResearchStudies.slice(0, 7);
  const chemicalsCategory2 = recentResearchStudies.slice(7);

  return (
    <div className={styles.sciencePage}>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src={SCIENCE_HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className="container">
          <motion.div
            className={styles.heroGrid}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className={styles.heroLeft}>
              <motion.nav
                variants={fadeInUp}
                className={styles.heroBreadcrumb}
                aria-label="Breadcrumb"
              >
                <Link href="/">Home</Link>
                <span className={styles.breadcrumbSep} aria-hidden="true">
                  /
                </span>
                <span className={styles.breadcrumbCurrent}>Science</span>
              </motion.nav>
              <div className={styles.heroTextPanel}>
                <motion.p variants={fadeInUp} className={styles.heroBrandTitle}>
                  The Science Behind Saukhyam
                </motion.p>
                <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
                  The Science Behind Safer Period Care
                </motion.h1>
                <motion.h2 variants={fadeInUp} className={styles.heroBananaTitle}>
                  Why <span className={styles.heroAccent}>Banana Fiber</span>
                  <br />
                  Changes Everything
                </motion.h2>
                <motion.p variants={fadeInUp} className={styles.heroBody}>
                  India&apos;s first banana fiber absorbent technology — naturally antimicrobial,
                  chemical free, and scientifically proven to be better for your body. Backed by
                  16+ peer-reviewed studies.
                </motion.p>
                <motion.div variants={fadeInUp} className={styles.heroActions}>
                  <Link href="/products" className={styles.btnPrimary}>
                    <ShoppingBag size={18} aria-hidden="true" />
                    Switch Now
                  </Link>
                  <a href="#research" className={styles.btnOutline}>
                    <BookOpen size={18} aria-hidden="true" />
                    Read the Research
                  </a>
                </motion.div>
              </div>
            </div>
            <motion.div variants={fadeInUp} className={styles.heroRight}>
              <ScienceHeroVisual />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2 — THE EVIDENCE ═══ */}
      <section id="research" className={styles.evidence}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className={styles.evidenceHeader}
          >
            <motion.span variants={fadeInUp} className={styles.eyebrow}>
              The Evidence
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.h2}>
              Research Compilation — 2025
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.lead}>
              Recent peer-reviewed research has documented chemicals and heavy metals in disposable
              menstrual products, while studies increasingly explore potential reproductive and
              hormonal impacts.
            </motion.p>
            <motion.p variants={fadeInUp} className={styles.leadSecondary}>
              Below is a research snapshot and detailed scientific compilation.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {keyFindings.map(finding => {
              const Icon = statIcons[finding.icon] || BookOpen;
              return (
                <motion.article key={finding.label} variants={fadeInUp} className={styles.statGlass}>
                  <div className={styles.statIconWrap}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <div className={styles.statValue}>
                    <CountUp value={finding.stat} />
                  </div>
                  <h3 className={styles.statLabel}>{finding.label}</h3>
                  <p className={styles.statDesc}>{finding.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 3 — CHEMICALS ═══ */}
      <section className={styles.chemicalsSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.centerHeader}
          >
            <motion.span variants={fadeInUp} className={styles.pillCenter}>
              Chemical Exposure
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.h2Center}>
              What&apos;s Inside Your Disposable Pad?
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.subCenter}>
              Research from 16+ studies reports the presence of multiple chemicals in commercial
              sanitary napkins — several classified as endocrine-disrupting or biologically active
              compounds.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.chemicalGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerFast}
          >
            {chemicalsFound.map(chem => {
              const Icon = chemicalIcons[chem.name] || FlaskConical;
              const related = studiesForChemical(chem.name);
              return (
                <motion.article
                  key={chem.name}
                  variants={fadeInUp}
                  className={`${styles.chemCard} ${chem.severity === 'high' ? styles.chemHigh : styles.chemMod}`}
                >
                  <div className={styles.chemIcon}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className={styles.chemName}>{chem.name}</h3>
                  <span
                    className={`${styles.riskBadge} ${chem.severity === 'high' ? styles.riskHigh : styles.riskMod}`}
                  >
                    {chem.severity === 'high' ? 'High Risk' : 'Moderate Risk'}
                  </span>
                  <p className={styles.chemEffect}>{chem.effect}</p>
                  {related.length > 0 && (
                    <button
                      type="button"
                      className={styles.chemTooltip}
                      onClick={() => setChemicalModal(chem.name)}
                    >
                      View related studies
                      <ChevronRight size={14} aria-hidden="true" />
                    </button>
                  )}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Chemical studies modal */}
      {chemicalModal && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chem-modal-title"
          onClick={() => setChemicalModal(null)}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setChemicalModal(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <h3 id="chem-modal-title" className={styles.modalTitle}>
              Studies related to {chemicalModal}
            </h3>
            <ul className={styles.modalList}>
              {modalStudies.map(study => (
                <li key={study.id}>
                  <strong>{study.title}</strong>
                  <span>
                    {study.journal}, {study.year}
                  </span>
                  <p>{study.summary}</p>
                  {study.paperUrl && (
                    <a href={study.paperUrl} target="_blank" rel="noopener noreferrer">
                      Read Full Paper <ExternalLink size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}

      {/* ═══ SECTION 4 — RESEARCH COMPILATION ═══ */}
      <section className={styles.researchSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.researchIntro}
          >
            <motion.h2 variants={fadeInUp} className={styles.h2}>
              11 Recent Peer-Reviewed Papers
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.lead}>
              High-quality scientific publications on chemicals, toxins and health impacts
              associated with menstrual products and endocrine exposure.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.categoryBlock}
          >
            <h3 className={styles.categoryTitle}>
              <FlaskConical size={20} aria-hidden="true" />
              Chemicals in Menstrual Products
            </h3>
            <p className={styles.categoryDesc}>Papers 1–7</p>
            <ResearchAccordion studies={chemicalsCategory1} timelineColor="green" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.categoryBlock}
          >
            <h3 className={`${styles.categoryTitle} ${styles.categoryNavy}`}>
              <Brain size={20} aria-hidden="true" />
              EDCs Linked to PCOS
            </h3>
            <p className={styles.categoryDesc}>Papers 8–11</p>
            <ResearchAccordion studies={chemicalsCategory2} timelineColor="navy" />
          </motion.div>

          {/* 2024 compilation — preserved in full */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.categoryBlock}
          >
            <h3 className={styles.categoryTitle}>
              <BookOpen size={20} aria-hidden="true" />
              Earlier Compilation — 2024
            </h3>
            <p className={styles.categoryDesc}>
              We compiled these studies in 2024 when we first started approaching doctors. Doctors
              were more willing to believe us after we shared this research with them.
            </p>
            <ResearchAccordion studies={hiddenDangersStudies} timelineColor="green" />
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 5 — PCOS ═══ */}
      <section className={styles.pcosSection}>
        <div className={styles.pcosMedia} aria-hidden="true">
          <Image
            src={SCIENCE_PCOS_IMAGE}
            alt=""
            fill
            sizes="100vw"
            className={styles.pcosBgImage}
          />
          <div className={styles.pcosOverlay} />
        </div>
        <div className="container">
          <div className={styles.pcosGrid}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.pcosVisualCol}
            >
              <SciencePCOSVisual />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className={styles.pcosContent}
            >
              <motion.span variants={fadeInUp} className={styles.eyebrow}>
                <Activity size={14} aria-hidden="true" />
                Hormonal Health
              </motion.span>
              <motion.h2 variants={fadeInUp} className={styles.h2}>
                The PCOS / PMOS Connection
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.bodyText}>
                Human studies increasingly link higher endocrine-disrupting chemical (EDC)
                exposures with PCOS. Animal studies confirm BPA can induce PCOS-like syndrome —
                establishing causation.
              </motion.p>
              <motion.blockquote variants={fadeInUp} className={styles.quoteBox}>
                Human evidence shows association. Experimental models demonstrate biological
                plausibility.
              </motion.blockquote>
              <motion.div variants={fadeInUp}>
                <Link href="/faq" className={styles.pcosBtn}>
                  Learn More About PCOS
                  <ChevronRight size={18} aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — CONSENSUS ═══ */}
      <section className={styles.consensusSection}>
        <div className={styles.consensusAmbient} aria-hidden="true" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.consensusHeader}
          >
            <motion.span variants={fadeInUp} className={styles.consensusEyebrow}>
              Summary
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.consensusTitle}>
              The Scientific Consensus Is Clear
            </motion.h2>
          </motion.div>

          <motion.ol
            className={styles.consensusList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {researchConclusion.points.map((point, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className={`${styles.consensusCard} ${i === researchConclusion.points.length - 1 ? styles.consensusCardFeatured : ''}`}
              >
                <span className={styles.consensusIndex} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className={styles.consensusCardBody}>
                  <CheckCircle2 size={20} className={styles.consensusIcon} aria-hidden="true" />
                  <p>{point}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ═══ SECTION 7 — CTA ═══ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaWave} aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z"
              fill="var(--science-cream)"
            />
          </svg>
        </div>
        <div className={styles.ctaParticles} aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.ctaInner}
          >
            <motion.div variants={fadeInUp} className={styles.ctaHeadlines}>
              <h2 className={styles.ctaTitle}>The Science Is Clear.</h2>
              <h2 className={styles.ctaTitle}>Make the Switch</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className={styles.ctaSub}>
              16+ peer-reviewed studies. 7 countries tested. The evidence is overwhelming —
              chemical-free banana fiber pads are the healthier choice.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.ctaActions}>
              <Link href="/products" className={styles.ctaPrimary}>
                <ShoppingBag size={20} aria-hidden="true" />
                Shop Now
              </Link>
              <Link href="/faq" className={styles.ctaSecondary}>
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
