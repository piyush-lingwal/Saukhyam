'use client';

import Link from 'next/link';
import { useRef, type MouseEvent, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowRight, Leaf, Play, Settings2, ShieldCheck } from 'lucide-react';
import styles from './ManufacturingJourneySection.module.css';

type JourneyCard = {
  step: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  icon: typeof Leaf;
};

const journeyCards: JourneyCard[] = [
  {
    step: '01',
    title: 'Responsible Material Sourcing',
    description:
      'The journey begins with banana fiber, a renewable resource derived from agricultural residue. By giving new purpose to natural materials, the factory supports a more sustainable production ecosystem.',
    linkLabel: 'Learn About Banana Fiber',
    href: '/why-banana-fiber',
    icon: Leaf,
  },
  {
    step: '02',
    title: 'Precision Manufacturing',
    description:
      'Advanced production processes convert raw fiber into high-performance absorbent layers. Every stage is carefully designed to ensure consistency, efficiency, and product reliability.',
    linkLabel: 'Explore the Production Process',
    href: '#production-process',
    icon: Settings2,
  },
  {
    step: '03',
    title: 'Tested for Performance',
    description:
      'Before reaching users, products undergo thorough inspection and testing to meet rigorous standards for comfort, durability, absorbency, and long-term use.',
    linkLabel: 'View Quality Standards',
    href: '/science',
    icon: ShieldCheck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const cardStagger = { visible: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } } };

function HighlightedIntro() {
  return (
    <>
      Inside the Saukhyam Factory, <span className={styles.highlight}>innovation</span>, precision,
      and <span className={styles.highlight}>sustainability</span> come together to transform{' '}
      <span className={styles.highlight}>banana fiber</span> into reusable menstrual products that
      serve communities across India.
    </>
  );
}

function JourneyCardItem({ card, index }: { card: JourneyCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 260, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 260, damping: 22 });
  const Icon = card.icon;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -5);
    rotateY.set(((x - centerX) / centerX) * 5);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.div
        ref={cardRef}
        className={styles.cardInner}
        style={
          reduceMotion
            ? undefined
            : {
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformPerspective: 900,
              }
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.cardStepNum} aria-hidden="true">
          {card.step}
        </span>

        <motion.div
          className={styles.cardIconWrap}
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }
          }
        >
          <Icon size={26} strokeWidth={1.75} />
        </motion.div>

        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardDesc}>{card.description}</p>

        <Link href={card.href} className={styles.cardLink}>
          {card.linkLabel}
          <ArrowRight size={15} aria-hidden="true" className={styles.cardLinkArrow} />
        </Link>
      </motion.div>
    </motion.article>
  );
}

function FloatingShape({
  className,
  delay = 0,
  children,
}: {
  className: string;
  delay?: number;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -14, 0],
              rotate: [0, 6, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : { duration: 7, repeat: Infinity, ease: 'easeInOut', delay }
      }
    >
      {children}
    </motion.div>
  );
}

export default function ManufacturingJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [-30, 35]);

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const lineScale = useTransform(timelineProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="manufacturing-journey"
      className={styles.section}
      aria-labelledby="manufacturing-journey-heading"
    >
      <div className="container">
        <div className={styles.shell}>
          <div className={styles.shellBg} aria-hidden="true" />
          <motion.div
            className={styles.shellParallax}
            style={reduceMotion ? undefined : { y: parallaxY }}
            aria-hidden="true"
          />
          <motion.div
            className={styles.shellParallax2}
            style={reduceMotion ? undefined : { y: parallaxY2 }}
            aria-hidden="true"
          />
          <div className={styles.fiberTexture} aria-hidden="true" />
          <div className={styles.leafSilhouettes} aria-hidden="true" />

          <FloatingShape className={styles.floatShape1} delay={0}>
            <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 12C18 4 34 4 40 12C46 20 62 20 76 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </FloatingShape>
          <FloatingShape className={styles.floatShape2} delay={1.2}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 4C24 4 10 18 10 28C10 36 16 42 24 42C32 42 38 36 38 28C38 18 24 4 24 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </FloatingShape>
          <FloatingShape className={styles.floatShape3} delay={2.4}>
            <svg viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 10H62M10 10C16 6 22 6 28 10C34 14 40 14 46 10C52 6 58 6 62 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </FloatingShape>

          <motion.header
            className={styles.header}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Our Manufacturing Journey
            </motion.span>
            <motion.h2
              id="manufacturing-journey-heading"
              className={styles.title}
              variants={fadeUp}
            >
              Turning Nature into Sustainable Care
            </motion.h2>
            <motion.p className={styles.subtitle} variants={fadeUp}>
              <HighlightedIntro />
            </motion.p>
          </motion.header>

          <div ref={timelineRef} className={styles.timeline}>
            <div className={styles.timelineLineTrack} aria-hidden="true">
              <motion.div
                className={styles.timelineLine}
                style={reduceMotion ? { scaleX: 1 } : { scaleX: lineScale }}
              />
            </div>

            <motion.div
              className={styles.cardsGrid}
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {journeyCards.map((card, index) => (
                <JourneyCardItem key={card.step} card={card} index={index} />
              ))}
            </motion.div>
          </div>

          <motion.footer
            className={styles.cta}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.h3 className={styles.ctaTitle} variants={fadeUp}>
              Interested in Seeing the Complete Process?
            </motion.h3>
            <motion.p className={styles.ctaDesc} variants={fadeUp}>
              Discover how sustainable materials, innovative manufacturing, and rigorous quality
              standards come together inside the Saukhyam Factory.
            </motion.p>
            <motion.div className={styles.ctaActions} variants={fadeUp}>
              <Link href="#production-process" className={styles.btnPrimary}>
                Explore Factory Operations
                <ArrowRight size={17} aria-hidden="true" className={styles.btnPrimaryArrow} />
              </Link>
              <Link href="#manufacturing-hub" className={styles.btnSecondary}>
                <Play size={16} aria-hidden="true" />
                Watch Process Overview
              </Link>
            </motion.div>
          </motion.footer>
        </div>
      </div>
    </section>
  );
}
