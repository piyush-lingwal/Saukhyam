'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Factory,
  Heart,
  Leaf,
  Package,
  Sparkles,
  Globe,
  Users,
} from 'lucide-react';
import CountUp from '@/components/science/CountUp';
import styles from './MissionStorySection.module.css';

const journeySteps = [
  {
    step: '01',
    title: 'Built for Scale',
    description:
      'With the capacity to produce over 1 million reusable pads annually, the Saukhyam Factory demonstrates how large-scale manufacturing can deliver both social impact and environmental responsibility.',
    highlight: '1M+',
    highlightSub: 'Annual Production Capacity',
    icon: Factory,
  },
  {
    step: '02',
    title: 'Powered by Banana Fiber',
    description:
      'Every pad begins with banana fiber, a renewable, nature-based material that transforms agricultural residue into a sustainable absorbent solution. What was once considered waste becomes a resource for healthier periods and a cleaner planet.',
    highlight: 'Natural',
    highlightSub: 'Banana Fiber',
    icon: Leaf,
  },
  {
    step: '03',
    title: 'Women at the Center',
    description:
      "Women's empowerment is embedded into every stage of production. Through skill development, training, and livelihood opportunities, the factory creates meaningful economic participation while advancing menstrual health across communities.",
    highlight: 'Women-Led',
    highlightSub: 'Impact',
    icon: Users,
  },
];

const impactTags = [
  { icon: Package, label: '1 Million Reusable Pads Annually' },
  { icon: Leaf, label: 'Sustainable Manufacturing' },
  { icon: Heart, label: "Women's Empowerment" },
  { icon: Sparkles, label: 'Banana Fiber Innovation' },
  { icon: Globe, label: 'Climate-Conscious Menstrual Health Solutions' },
];

const impactCards = [
  { icon: Package, value: '1M+', label: 'Pads Annual Capacity', animate: true },
  { icon: Leaf, value: 'Sustainable', label: 'Banana Fiber Technology', animate: false },
  { icon: Heart, value: 'Women-Led', label: 'Impact', animate: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.07 } } };

export default function MissionStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-20, 40]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={styles.section}
      aria-labelledby="mission-story-heading"
    >
      <div className={styles.sectionBg} aria-hidden="true" />
      <div className={styles.sectionPattern} aria-hidden="true" />
      <div className={styles.sectionGlow} aria-hidden="true" />
      <motion.div className={styles.floatOrb1} style={{ y: orbY1 }} aria-hidden="true" />
      <motion.div className={styles.floatOrb2} style={{ y: orbY2 }} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <motion.header
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <motion.span className={styles.missionBadge} variants={fadeUp}>
            <span className={styles.badgeShimmer} aria-hidden="true" />
            Our Mission at Scale
          </motion.span>

          <motion.h2
            id="mission-story-heading"
            className={styles.titleWrap}
            variants={fadeUp}
          >
            <span className={styles.titleText}>Where Innovation Meets Impact</span>
            <motion.span
              className={styles.titleUnderline}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            />
          </motion.h2>
        </motion.header>

        {/* Intro card */}
        <motion.div
          className={styles.introCard}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.introCornerTL} aria-hidden="true" />
          <span className={styles.introCornerBR} aria-hidden="true" />
          <p className={styles.introText}>
            At the heart of Amritapuri, the Saukhyam Factory stands as one of India&apos;s largest
            reusable menstrual pad manufacturing facilities, where sustainable innovation,
            women&apos;s empowerment, and environmental responsibility come together under one roof.
          </p>
        </motion.div>

        {/* 3-step journey */}
        <div className={styles.journeyWrap}>
          <motion.div
            className={styles.journeyLine}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />

          <div className={styles.journeySteps}>
            {journeySteps.map((item, index) => {
              const Icon = item.icon;
              const isAlt = index % 2 === 1;
              return (
                <motion.article
                  key={item.step}
                  className={`${styles.journeyCard} ${isAlt ? styles.journeyCardAlt : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={stagger}
                >
                  <span className={styles.journeyBgNum} aria-hidden="true">
                    {item.step}
                  </span>

                  <div className={styles.journeyNode} aria-hidden="true">
                    <span className={styles.journeyDot}>{item.step}</span>
                  </div>

                  <motion.div
                    className={styles.journeyBody}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.journeyTop}>
                      <span className={styles.journeyStepLabel}>Step {item.step}</span>
                      <div className={styles.journeyIconWrap}>
                        <Icon size={20} aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className={styles.journeyTitle}>{item.title}</h3>
                    <p className={styles.journeyDesc}>{item.description}</p>
                    <div className={styles.journeyHighlight}>
                      <span className={styles.journeyHighlightValue}>{item.highlight}</span>
                      <span className={styles.journeyHighlightSub}>{item.highlightSub}</span>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Impact tags */}
        <motion.div
          className={styles.tagCloud}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerFast}
        >
          {impactTags.map((tag) => {
            const Icon = tag.icon;
            return (
              <motion.span
                key={tag.label}
                className={styles.impactTag}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ duration: 0.25 }}
              >
                <Icon size={14} aria-hidden="true" />
                {tag.label}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Bottom impact cards */}
        <motion.div
          className={styles.impactCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerFast}
        >
          {impactCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className={styles.impactCard}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.impactCardIcon} aria-hidden="true">
                  <Icon size={22} />
                </div>
                {card.animate ? (
                  <CountUp value={card.value} className={styles.impactCardValue} />
                ) : (
                  <span className={styles.impactCardValue}>{card.value}</span>
                )}
                <span className={styles.impactCardLabel}>{card.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
