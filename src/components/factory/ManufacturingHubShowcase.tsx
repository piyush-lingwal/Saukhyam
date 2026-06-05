'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Gauge,
  GitBranch,
  Layers3,
  MapPin,
  Play,
  Settings2,
  X,
} from 'lucide-react';
import styles from './ManufacturingHubShowcase.module.css';

const VIDEO_ID = 'Q-nxYk30pho';
const FACTORY_IMAGE = '/images/factory/step-05-stitching.png';

const featureCards = [
  {
    icon: Gauge,
    title: 'Production Capacity',
    value: '10000',
    numeric: 10000,
    animate: true,
    description: 'Reusable pads produced monthly.',
  },
  {
    icon: Building2,
    title: 'Scalable Infrastructure',
    value: '100000',
    numeric: 100000,
    animate: true,
    description: 'Potential monthly production capacity.',
  },
  {
    icon: GitBranch,
    title: 'Central Manufacturing Hub',
    value: 'Hub & Satellite Model',
    animate: false,
    description: 'Coordinates production across multiple centers.',
  },
  {
    icon: Settings2,
    title: 'Integrated Operations',
    value: 'End-to-End Process',
    animate: false,
    description: 'Processing, assembly, stitching, and quality assurance under one ecosystem.',
  },
];

const highlightFacts = [
  { icon: MapPin, label: 'Kuzhithura, Kollam' },
  { icon: Gauge, label: '10,000 Pads / Month' },
  { icon: Layers3, label: 'Scalable to 100,000' },
  { icon: Building2, label: 'Central Production Hub' },
];

const floatingBadges = [
  { label: '10K / Month', top: '12%', left: '8%', delay: 0 },
  { label: '100K Scale', top: '68%', left: '14%', delay: 0.4 },
  { label: 'Hub Operations', top: '22%', right: '6%', delay: 0.8 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerCards = { visible: { transition: { staggerChildren: 0.12 } } };

function FormattedCountUp({
  end,
  className,
}: {
  end: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(
    prefersReducedMotion ? end.toLocaleString('en-IN') : '0',
  );

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(end.toLocaleString('en-IN'));
      return;
    }

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(end * eased);
      setDisplay(current.toLocaleString('en-IN'));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, end, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function BlueprintOverlay() {
  return (
    <svg
      className={styles.blueprintSvg}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="24" y="20" width="352" height="260" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 4" opacity="0.45" />
      <line x1="24" y1="90" x2="376" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="24" y1="180" x2="376" y2="180" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="140" y1="20" x2="140" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="260" y1="20" x2="260" y2="280" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <rect x="48" y="44" width="72" height="36" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
      <rect x="280" y="200" width="80" height="48" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
      <circle cx="200" cy="150" r="28" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <path d="M48 110 L120 110" stroke="currentColor" strokeWidth="0.5" opacity="0.35" markerEnd="url(#arrow)" />
      <path d="M280 224 L360 224" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <text x="52" y="38" fill="currentColor" fontSize="8" opacity="0.5" fontFamily="monospace">
        PROD-ZONE A
      </text>
      <text x="284" y="194" fill="currentColor" fontSize="8" opacity="0.5" fontFamily="monospace">
        ASSEMBLY
      </text>
    </svg>
  );
}

function CardConnectors() {
  return (
    <svg className={styles.cardConnectors} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        d="M25 25 L75 25 L75 75 L25 75 Z"
        fill="none"
        stroke="url(#connectorGrad)"
        strokeWidth="0.4"
        strokeDasharray="2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.line
        x1="50" y1="25" x2="50" y2="75"
        stroke="url(#connectorGrad)"
        strokeWidth="0.35"
        strokeDasharray="2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.45 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.line
        x1="25" y1="50" x2="75" y2="50"
        stroke="url(#connectorGrad)"
        strokeWidth="0.35"
        strokeDasharray="2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.45 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />
      <defs>
        <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ManufacturingHubShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [tourOpen, setTourOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const blueprintY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-16, 32]);

  useEffect(() => {
    if (!tourOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTourOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [tourOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        id="manufacturing-hub"
        className={styles.section}
        aria-labelledby="manufacturing-hub-heading"
      >
        <div className={styles.sectionBg} aria-hidden="true" />
        <div className={styles.sectionGrid} aria-hidden="true" />
        <div className={styles.sectionGlow} aria-hidden="true" />
        <motion.div className={styles.floatOrb1} style={{ y: orbY1 }} aria-hidden="true" />
        <motion.div className={styles.floatOrb2} style={{ y: orbY2 }} aria-hidden="true" />

        <div className="container">
          <div className={styles.layout}>
            <motion.div
              className={styles.imageCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeLeft}
            >
              <div className={styles.imageFrameGlow} aria-hidden="true" />
              <motion.div
                className={styles.imageFrame}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.imageInner}>
                  <Image
                    src={FACTORY_IMAGE}
                    alt="Saukhyam manufacturing hub production floor with industrial sewing operations"
                    fill
                    sizes="(max-width: 960px) 100vw, 58vw"
                    className={styles.factoryImage}
                  />
                  <div className={styles.imageGradient} aria-hidden="true" />
                  <motion.div className={styles.blueprintLayer} style={{ y: blueprintY }}>
                    <BlueprintOverlay />
                  </motion.div>

                  {[12, 48, 78].map((top, i) => (
                    <motion.span
                      key={top}
                      className={styles.glowDot}
                      style={{ top: `${top}%`, left: `${20 + i * 28}%` }}
                      animate={{ opacity: [0.35, 0.9, 0.35], scale: [1, 1.25, 1] }}
                      transition={{ duration: 2.8 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                      aria-hidden="true"
                    />
                  ))}

                  {floatingBadges.map((badge) => (
                    <motion.div
                      key={badge.label}
                      className={styles.floatBadge}
                      style={{
                        top: badge.top,
                        left: badge.left,
                        right: badge.right,
                      }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: badge.delay,
                      }}
                    >
                      <span className={styles.floatBadgeDot} aria-hidden="true" />
                      {badge.label}
                    </motion.div>
                  ))}

                  <div className={styles.capacityIndicator} aria-hidden="true">
                    <motion.span
                      className={styles.capacityBar}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <span className={styles.capacityLabel}>Capacity Utilization</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.contentCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.span className={styles.eyebrow} variants={fadeUp}>
                Manufacturing Hub
              </motion.span>
              <motion.h2
                id="manufacturing-hub-heading"
                className={styles.title}
                variants={fadeUp}
              >
                Built to Scale. Designed for{' '}
                <span className={styles.titleAccent}>Reliability.</span>
              </motion.h2>

              <motion.div className={styles.description} variants={fadeUp}>
                <p>
                  Located in Kuzhithura, Kollam, Kerala, the Saukhyam Factory serves as the central
                  production hub supporting multiple satellite manufacturing centers across India.
                </p>
                <p>
                  With a current production capacity of 10,000 reusable menstrual pads per month and
                  infrastructure designed for rapid expansion, the facility can scale production up
                  to 100,000 pads monthly based on demand requirements.
                </p>
                <p>
                  Every stage of production, from fiber preparation and fabric processing to
                  stitching, assembly, and quality inspection, is coordinated through this
                  centralized manufacturing ecosystem.
                </p>
              </motion.div>

              <motion.div
                className={styles.featureGrid}
                variants={staggerCards}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <CardConnectors />
                {featureCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.article
                      key={card.title}
                      className={styles.featureCard}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={styles.featureIcon} aria-hidden="true">
                        <Icon size={18} strokeWidth={1.75} />
                      </div>
                      <h3 className={styles.featureTitle}>{card.title}</h3>
                      {card.animate && card.numeric ? (
                        <FormattedCountUp end={card.numeric} className={styles.featureValue} />
                      ) : (
                        <span className={styles.featureValue}>{card.value}</span>
                      )}
                      <p className={styles.featureDesc}>{card.description}</p>
                    </motion.article>
                  );
                })}
              </motion.div>

              <motion.div className={styles.ctaRow} variants={fadeUp}>
                <a href="#production-process" className={styles.btnPrimary}>
                  Explore Production Process
                  <ArrowRight size={17} className={styles.btnArrow} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className={styles.btnSecondary}
                  onClick={() => setTourOpen(true)}
                >
                  <Play size={15} aria-hidden="true" />
                  View Factory Tour
                </button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className={styles.highlightBar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {highlightFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  className={styles.highlightItem}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                >
                  {index > 0 && (
                    <span className={styles.highlightSep} aria-hidden="true">
                      <motion.span
                        className={styles.highlightSepLine}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      />
                    </span>
                  )}
                  <div className={styles.highlightIcon} aria-hidden="true">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <span className={styles.highlightLabel}>{fact.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {tourOpen && (
        <div
          className={styles.tourOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Factory tour video"
          onClick={() => setTourOpen(false)}
        >
          <motion.div
            className={styles.tourModal}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.tourClose}
              onClick={() => setTourOpen(false)}
              aria-label="Close factory tour"
            >
              <X size={20} />
            </button>
            <iframe
              className={styles.tourIframe}
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Saukhyam Factory Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
