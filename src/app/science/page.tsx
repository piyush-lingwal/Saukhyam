'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  recentResearchStudies,
  chemicalsFound,
  type ResearchStudy,
} from '@/data/research';
import styles from './page.module.css';
import { AnimatePresence } from 'framer-motion';

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

const allStudies: ResearchStudy[] = recentResearchStudies;

const heroGlassStats = [
  { value: '11', label: 'Scientific Publications' },
  { value: 'Plant-Based', label: 'Banana Fiber Technology' },
  { value: 'Free From', label: 'Synthetic Additives' },
];

function AnimatedStat({
  value,
  suffix = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frameId: number;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const featuredAreas = [
  { id: 'materials', label: 'Menstrual Product Materials', icon: Layers, desc: 'Exploring constituent safety and plastic-free alternatives.' },
  { id: 'hormonal', label: 'Hormonal Health Research', icon: Brain, desc: 'Epidemiological studies on EDCs and menstrual wellness.' },
  { id: 'endocrine', label: 'Endocrine Disruption Studies', icon: FlaskConical, desc: 'Mechanistic and exposure pathways of chemical absorption.' },
  { id: 'sustainable', label: 'Sustainable Period Care', icon: Leaf, desc: 'Lifecycle impacts and biodegradable banana fiber cores.' },
];

function getCategoryTag(category: string): string {
  switch (category) {
    case 'chemicals': return 'Material Safety';
    case 'vocs': return 'Toxicology';
    case 'heavy-metals': return 'Environmental Exposure';
    case 'phthalates': return 'Endocrine Research';
    case 'safety': return 'Material Safety';
    case 'pcos': return 'Hormonal Health';
    case 'mechanistic': return 'Endocrine Research';
    default: return 'Material Safety';
  }
}

const evidenceCards = [
  {
    value: 11,
    display: null as string | null,
    subtitle: 'Peer-Reviewed Studies',
    desc: 'Published in leading journals including BJOG, Environment International, and PLOS ONE',
    icon: BookOpen,
    animate: true,
  },
  {
    value: 7,
    display: null,
    subtitle: 'Countries Tested',
    desc: 'Heavy metals identified in pads from China, Japan, South Korea, USA, UK, Australia, and Germany',
    icon: Globe,
    animate: true,
  },
  {
    value: 22,
    display: null,
    subtitle: 'Human Studies on BPA-PCOS/PMOS Link',
    desc: 'Most reporting higher BPA exposure among women with PCOS/PMOS',
    icon: Microscope,
    animate: true,
  },
  {
    value: null,
    display: 'Higher',
    subtitle: 'Chemical Load in Indian Pads',
    desc: 'Indian brands reported higher concentrations of certain chemicals compared with products studied from the US, EU, and Japan',
    icon: ShieldAlert,
    animate: false,
  },
];

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
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [expandedStudies, setExpandedStudies] = useState<Record<string, boolean>>({});

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], [0, 70]);
  const heroContentY = useTransform(heroScroll, [0, 1], [0, 35]);

  const toggleSummary = (id: string) => {
    setExpandedStudies(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const modalStudies = useMemo(
    () => (chemicalModal ? studiesForChemical(chemicalModal) : []),
    [chemicalModal]
  );

  const filteredStudies = useMemo(() => {
    if (selectedArea === 'All') return allStudies;
    if (selectedArea === 'materials') {
      return allStudies.filter(s => ['chemicals', 'vocs', 'heavy-metals', 'safety'].includes(s.category));
    }
    if (selectedArea === 'hormonal') {
      return allStudies.filter(s => ['pcos', 'mechanistic'].includes(s.category));
    }
    if (selectedArea === 'endocrine') {
      return allStudies.filter(s => ['phthalates', 'pcos', 'mechanistic'].includes(s.category));
    }
    if (selectedArea === 'sustainable') {
      return allStudies.filter(s => ['chemicals', 'safety'].includes(s.category));
    }
    return allStudies;
  }, [selectedArea]);

  return (
    <div className={styles.sciencePage}>
      {/* ═══ SECTION 1, HERO ═══ */}
      <section
        ref={heroRef}
        className={styles.hero}
        aria-labelledby="science-hero-heading"
      >
        <motion.div className={styles.heroBgLayer} style={{ y: heroBgY }} aria-hidden="true">
          <Image
            src="/science/hero-lab.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImg}
          />
        </motion.div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroGrain} aria-hidden="true" />

        <div className={`container ${styles.heroContainer}`}>
          <motion.div
            className={styles.heroContent}
            style={{ y: heroContentY }}
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
              <span className={styles.breadcrumbCurrent}>Science</span>
            </motion.nav>

            <motion.span variants={fadeInUp} className={styles.heroSecondaryPill}>
              About Disposable Pads
            </motion.span>

            <motion.h1
              id="science-hero-heading"
              variants={fadeInUp}
              className={styles.heroTitle}
            >
              The Science Behind Safer Period Care
            </motion.h1>

            <motion.p variants={fadeInUp} className={styles.heroBody}>
              Scientific studies identify chemicals in disposable sanitary pads that may be absorbed through intimate tissues and interfere with endocrine function.
            </motion.p>

            <motion.div variants={fadeInUp} className={styles.heroGlassStats}>
              {heroGlassStats.map(stat => (
                <div key={stat.label} className={styles.heroGlassCard}>
                  <span className={styles.heroGlassValue}>
                    {stat.value === '11' ? <AnimatedStat value={11} /> : stat.value}
                  </span>
                  <span className={styles.heroGlassLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2, CHEMICAL EXPOSURE ═══ */}
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
              Research from 11 studies reports the presence of multiple chemicals in commercial
              sanitary napkins, several classified as endocrine-disrupting or biologically active
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

      {/* ═══ SECTION 3, THE EVIDENCE ═══ */}
      <section id="evidence" className={styles.evidenceLuxury}>
        <div className={styles.evidenceLuxuryBg} aria-hidden="true" />
        <div className={styles.evidenceLuxuryPattern} aria-hidden="true" />
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
              The Hidden Dangers in Disposable Pads
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
                  <h3 className={styles.evidenceLuxuryCardStat}>
                    {card.animate && card.value !== null ? (
                      <AnimatedStat value={card.value} />
                    ) : (
                      card.display
                    )}
                  </h3>
                  <p className={styles.evidenceLuxuryCardLabel}>{card.subtitle}</p>
                  <p className={styles.evidenceLuxuryCardDesc}>{card.desc}</p>
                  <div className={styles.evidenceCardGlow} aria-hidden="true" />
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

      {/* ═══ SECTION 4, RESEARCH LIBRARY ═══ */}
      <section id="research" className={styles.librarySection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className={styles.libraryIntro}
          >
            <motion.span variants={fadeInUp} className={styles.libraryLabel}>
              Research Database
            </motion.span>
            <motion.h2 variants={fadeInUp} className={styles.h2Center}>
              Research &amp; Scientific Literature
            </motion.h2>
            <motion.p variants={fadeInUp} className={styles.subCenter}>
              A curated collection of published studies exploring menstrual product materials, endocrine-active compounds, intimate wellness, and reproductive health.
            </motion.p>
          </motion.div>

          {/* Featured Research Areas (Filter block) */}
          <motion.div
            className={styles.featuredBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3 variants={fadeInUp} className={styles.featuredHeading}>
              Featured Research Areas
            </motion.h3>
            <motion.div variants={fadeInUp} className={styles.featuredGrid}>
              <button
                type="button"
                onClick={() => setSelectedArea('All')}
                className={`${styles.featuredCard} ${selectedArea === 'All' ? styles.featuredActive : ''}`}
              >
                <div className={styles.featuredIconWrap}>
                  <BookOpen size={20} />
                </div>
                <div className={styles.featuredText}>
                  <h4 className={styles.featuredTitle}>All Literature</h4>
                  <p className={styles.featuredDesc}>View all 11 scientific publications.</p>
                </div>
              </button>
              {featuredAreas.map(area => {
                const AreaIcon = area.icon;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedArea(area.id)}
                    className={`${styles.featuredCard} ${selectedArea === area.id ? styles.featuredActive : ''}`}
                  >
                    <div className={styles.featuredIconWrap}>
                      <AreaIcon size={20} />
                    </div>
                    <div className={styles.featuredText}>
                      <h4 className={styles.featuredTitle}>{area.label}</h4>
                      <p className={styles.featuredDesc}>{area.desc}</p>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Research papers grid */}
          <motion.div
            className={styles.libraryGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerFast}
          >
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study) => {
                const isExpanded = expandedStudies[study.id];
                const displayNum = study.number;
                
                // Mapped tag
                const tag = getCategoryTag(study.category);
                
                // Fallback to Google Scholar if no paperUrl
                const viewUrl = study.paperUrl || `https://scholar.google.com/scholar?q=${encodeURIComponent(study.title)}`;

                return (
                  <motion.article
                    layout
                    key={study.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45 }}
                    className={styles.paperCard}
                  >
                    <div className={styles.paperHeader}>
                      <span className={styles.paperCategoryBadge}>{tag}</span>
                      <span className={styles.paperYearBadge}>{study.year}</span>
                    </div>

                    <h4 className={styles.paperTitle}>{study.title}</h4>
                    <p className={styles.paperJournal}>{study.journal}</p>
                    <p className={styles.paperAuthors}>{study.authors}</p>

                    <div className={styles.paperActions}>
                      <button
                        type="button"
                        onClick={() => toggleSummary(study.id)}
                        className={styles.btnSummary}
                        aria-expanded={isExpanded}
                      >
                        Research Summary
                      </button>
                      <a
                        href={viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnView}
                      >
                        View Study
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          className={styles.expandedSummary}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className={styles.summaryContent}>
                            <h5>Study Abstract &amp; Finding:</h5>
                            <p>{study.summary}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ═══ SECTION 5, HORMONAL HEALTH ═══ */}
      <section className={styles.hormonalSection}>
        <div className={styles.hormonalBg} aria-hidden="true">
          <Image
            src="/science/pcos-wellness.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.hormonalBgImg}
          />
        </div>
        <div className={styles.hormonalOverlay} aria-hidden="true" />
        <div className={styles.hormonalGrain} aria-hidden="true" />
        <div className="container">
          <div className={styles.hormonalGrid}>
            <motion.div
              className={styles.hormonalContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
            >
              <motion.span variants={fadeInUp} className={styles.hormonalLabel}>
                Research &amp; Hormonal Health
              </motion.span>
              <motion.h2 variants={fadeInUp} className={styles.hormonalTitle}>
                The PCOS/PMOS &amp; Hormonal Health Conversation
              </motion.h2>
              <motion.p variants={fadeInUp} className={styles.hormonalDesc}>
                Emerging scientific research continues to explore the relationship between endocrine-active compounds and hormonal health. Studies across human and laboratory models are encouraging deeper conversations around ingredient transparency, intimate wellness, and long-term reproductive health.
              </motion.p>

              {/* Supporting info cards */}
              <motion.div variants={fadeInUp} className={styles.infoCardsGrid}>
                <div className={styles.infoCard}>
                  <div className={styles.infoCardIcon}>
                    <Microscope size={18} />
                  </div>
                  <div className={styles.infoCardText}>
                    <h4>Human &amp; Laboratory Studies</h4>
                    <p>Epidemiological and in-vivo models exploring chemical pathways.</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <div className={styles.infoCardIcon}>
                    <FlaskConical size={18} />
                  </div>
                  <div className={styles.infoCardText}>
                    <h4>Ongoing Hormonal Health Research</h4>
                    <p>Active investigation into endocrine disruption and intimate wellness.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className={styles.hormonalCtaWrap}>
                <a href="#research" className={styles.btnHormonalCta}>
                  Learn About the Research
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
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
              11 peer-reviewed studies. 7 countries tested. The evidence is overwhelming.
              Chemical-free banana fiber pads are the healthier choice.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.ctaActions}>
              <Link href="/products" className={styles.ctaPrimary}>
                <ShoppingBag size={20} aria-hidden="true" />
                Switch Now
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
