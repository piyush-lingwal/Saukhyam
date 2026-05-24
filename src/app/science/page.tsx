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
} from 'lucide-react';
import {
  hiddenDangersStudies,
  recentResearchStudies,
  chemicalsFound,
  type ResearchStudy,
} from '@/data/research';
import ResearchAccordion from '@/components/science/ResearchAccordion';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.05 } } };

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

const SCIENCE_HERO_IMAGE = '/science/hero-doctor.png';

const heroGlassStats = [
  { value: '11', label: 'Scientific Publications' },
  { value: 'Plant-Based', label: 'Banana Fiber Technology' },
  { value: 'Free From', label: 'Synthetic Additives' },
];

const evidenceCards = [
  {
    title: '16+',
    subtitle: 'Peer-Reviewed Studies',
    desc: 'Published in top journals including BJOG, Environment International, and PLOS ONE',
    icon: BookOpen,
  },
  {
    title: '7',
    subtitle: 'Countries Tested',
    desc: 'Heavy metals found in pads from China, Japan, South Korea, USA, UK, Australia & Germany',
    icon: Globe,
  },
  {
    title: '22',
    subtitle: 'Human Studies on BPA-PCOS Link',
    desc: 'Most showing higher BPA exposure among women with PCOS',
    icon: Microscope,
  },
  {
    title: 'Higher',
    subtitle: 'Chemical Load in Indian Pads',
    desc: 'Indian brands contain higher concentrations of hazardous chemicals than US, EU, Japan brands',
    icon: ShieldAlert,
  },
];

const SCIENCE_PCOS_IMAGE = '/science/pcos-wellness.png';

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
      <section className={styles.hero} aria-labelledby="science-hero-heading">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src={SCIENCE_HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.nav
              variants={fadeInUp}
              className={styles.heroBreadcrumb}
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">
                {' '}
                &gt;{' '}
              </span>
              <Link href="/science">Science</Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">
                {' '}
                &gt;{' '}
              </span>
              <span className={styles.breadcrumbCurrent}>About Disposable Pads</span>
            </motion.nav>

            <motion.span variants={fadeInUp} className={styles.heroSecondaryPill}>
              The Science Behind Saukhyam
            </motion.span>

            <motion.h1
              id="science-hero-heading"
              variants={fadeInUp}
              className={styles.heroTitle}
            >
              <span className={styles.heroTitleLine}>The Science Behind</span>
              <span className={styles.heroTitleAccent}>Safer Period Care</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className={styles.heroBody}>
              Scientific studies identify chemicals in disposable sanitary pads that may be absorbed through intimate tissues and interfere with endocrine function.
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroGlassStats}>
              {heroGlassStats.map(stat => (
                <div key={stat.label} className={styles.heroGlassCard}>
                  <span className={styles.heroGlassValue}>{stat.value}</span>
                  <span className={styles.heroGlassLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div>
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

      {/* ═══ SECTION 2 — THE EVIDENCE ═══ */}
      <section id="research" className={styles.evidenceLuxury}>
        <div className={styles.evidenceLuxuryInner}>
          <motion.header
            className={styles.evidenceLuxuryHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.evidenceLuxuryTag}>
              <FlaskConical size={14} aria-hidden="true" />
              The Evidence
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.evidenceLuxuryTitle}>
              The Science of Disposable Pads
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.evidenceLuxuryDesc}>
              Recent scientific research explores chemicals in disposable sanitary napkins and their possible role in endocrine and reproductive health concerns.
            </motion.p>
          </motion.header>

          <motion.div
            className={styles.evidenceLuxuryGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {evidenceCards.map(card => {
              const CardIcon = card.icon;
              return (
                <motion.article
                  key={card.subtitle}
                  variants={fadeInUp}
                  className={styles.evidenceLuxuryCard}
                >
                  <div className={styles.evidenceLuxuryIconWrap}>
                    <CardIcon size={22} aria-hidden="true" />
                  </div>
                  <h3 className={styles.evidenceLuxuryCardStat}>{card.title}</h3>
                  <p className={styles.evidenceLuxuryCardLabel}>{card.subtitle}</p>
                  <p className={styles.evidenceLuxuryCardDesc}>{card.desc}</p>
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
              <span className={styles.highlightNumber}>11</span> Recent Peer-Reviewed Papers
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

        </div>
      </section>

      {/* ═══ SECTION 5 — PCOS ═══ */}
      <section className={styles.pcosPremium}>
        <div className={styles.pcosPremiumMedia} aria-hidden="true">
          <Image
            src={SCIENCE_PCOS_IMAGE}
            alt="Doctor and patient in a supportive wellness consultation"
            fill
            sizes="100vw"
            className={styles.pcosPremiumBg}
            priority={false}
          />
          <div className={styles.pcosPremiumOverlay} />
        </div>
        <div className={styles.pcosPremiumWrap}>
          <motion.div
            className={styles.pcosPremiumGlass}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            <motion.span variants={fadeInUp} className={styles.pcosPremiumTag}>
              Research &amp; Hormonal Health
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.pcosPremiumTitle}>
              The PCOS Connection
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.pcosPremiumDesc}>
              Human studies increasingly link higher endocrine-disrupting chemical (EDC) exposures
              with PCOS. Animal studies confirm BPA can induce PCOS-like syndrome — establishing
              causation.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a href="#research" className={styles.pcosPremiumCta}>
                Explore The Research
                <ChevronRight size={18} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
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
