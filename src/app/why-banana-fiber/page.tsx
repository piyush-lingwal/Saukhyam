'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight,
  Leaf,
  Activity,
  FlaskConical,
  Heart,
  Sparkles,
  Quote,
  TrendingUp,
  RefreshCw,
  Users,
  Compass,
} from 'lucide-react';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const lifeCycleCards = [
  {
    step: '01',
    title: 'The Banana Plant Is Different',
    points: ['Bears fruit only once', 'Completes its natural cycle after harvest'],
  },
  {
    step: '02',
    title: 'After Harvest',
    points: ['Often treated as agricultural residue', 'Left behind despite its hidden value'],
  },
  {
    step: '03',
    title: 'Nature Finds a Second Purpose',
    points: [
      'Banana fiber carefully extracted',
      'Transformed into Saukhyam reusable pads',
      'Natural cellulose absorbency',
    ],
  },
  {
    step: '04',
    title: 'A Story That Begins Here',
    points: ['India grows millions of banana plants', 'Fiber gains a meaningful second life'],
  },
];

const fiberToCareCards = [
  {
    step: '01',
    title: 'Natural Performance',
    text: 'Banana fiber serves as the primary absorbent layer in Saukhyam reusable pads.',
  },
  {
    step: '02',
    title: 'Scientifically Studied',
    text: 'Research found Saukhyam banana fiber can absorb up to six times its dry weight.',
  },
  {
    step: '03',
    title: 'Purpose + Performance',
    text: 'Its value lies not only in origin, but in how effectively it performs.',
  },
];

const philosophyBlocks = [
  {
    label: 'A Different Choice',
    lines: [
      'Some brands use banana fiber in disposable products.',
      'Saukhyam chose another path.',
    ],
  },
  {
    label: 'Resources Deserve Respect',
    lines: [
      'Even agricultural residue carries value.',
      'Inspired by Ammaji\u2019s vision, Saukhyam believes materials should be used thoughtfully.',
    ],
  },
  {
    label: 'Designed for Longevity',
    lines: [
      'Banana fiber became part of a reusable journey, created not for a single use but for lasting care.',
    ],
  },
];

const journeySteps = [
  {
    step: '01',
    title: "Extracting Nature\u2019s Strength",
    short: 'Raw banana fiber carefully separated and cleaned by women artisans.',
    body: 'Raw banana fiber is carefully separated and cleaned by skilled women artisans. What was once agricultural waste becomes the foundation of a sustainable innovation.',
    quote: 'Nature already created the solution. We simply gave it purpose.',
    image: '/why-banana-fiber/journey/journey-extract.png',
    caption: "Nature\u2019s waste becoming menstrual innovation.",
    imageAlt: 'Woman artisan separating raw banana fiber by hand',
  },
  {
    step: '02',
    title: 'Preparing the Fiber',
    short: 'Fibers softened and refined into a breathable absorbent layer.',
    body: 'The fibers are softened, refined, and processed to create a breathable absorbent layer designed for comfort and long-term use.',
    tagline: 'Soft on skin. Gentle on the environment.',
    image: '/why-banana-fiber/journey/journey-processing.png',
    caption: 'Combining traditional skill with sustainable technology.',
    imageAlt: 'Women refining banana fiber at processing machines',
  },
  {
    step: '03',
    title: 'Handcrafted With Precision',
    short: 'Pads stitched with thoughtful craftsmanship and quality checks.',
    body: 'Every reusable pad is stitched with care by women-led teams using thoughtful craftsmanship and quality checks at every stage.',
    tagline: 'This is not factory mass production. This is human-centered creation.',
    image: '/why-banana-fiber/journey/journey-handcraft.png',
    caption: 'Every stitch is made with precision and purpose.',
    imageAlt: 'Artisan hands preparing banana fiber on a crafting machine',
  },
  {
    step: '04',
    title: 'Naturally Dyed & Finished',
    short: 'Layers pressed and assembled for durability and comfort.',
    body: 'The vibrant red fabric reflects confidence, strength, and menstrual dignity. Each layer is carefully pressed, shaped, and assembled for durability and comfort.',
    tagline: 'Beautifully designed. Purposefully made.',
    image: '/why-banana-fiber/journey/journey-drying.png',
    caption: 'Prepared naturally for durability and comfort.',
    imageAlt: 'Women pressing and finishing naturally dyed red fabric',
  },
  {
    step: '05',
    title: 'Sustainable. Reusable. Empowering.',
    short: 'Final reusable pad reducing waste and supporting menstrual care.',
    body: 'The final product is a reusable menstrual pad made from banana fiber \u2014 helping reduce waste while supporting healthier and more sustainable menstrual care.',
    tagline: 'One reusable pad can replace hundreds of disposable products.',
    image: '/why-banana-fiber/journey/journey-product.png',
    caption: 'Reusable care designed for comfort and confidence.',
    imageAlt: 'Hands holding finished Saukhyam reusable menstrual pads',
  },
];

const experienceCards = [
  'I felt noticeably more comfortable during my cycle after switching.',
  'The experience felt gentler and more breathable.',
  'What began as a sustainability choice became a comfort choice too.',
  'I continued using Saukhyam because the difference felt meaningful.',
];

const experienceStats = [
  { value: 77, label: 'Reported changes in menstrual comfort', icon: Heart },
  { value: 81, label: 'Improved cycle awareness', icon: TrendingUp },
  { value: 92, label: 'Continued beyond 6 months', icon: RefreshCw },
  { value: 74, label: 'Shifted from disposables within 3 months', icon: Users },
];

const phytochemicals = [
  'p-Coumaric acid',
  'Caffeic acid',
  'Adenosine',
  'Coumarin',
  'Lauric acid',
  'Myristic acid',
  'Stachydrine',
  'Ferulic acid',
];

const scienceMethods = [
  { title: 'LC–MS', subtitle: 'Advanced Analysis', icon: FlaskConical },
  { title: 'GC–MS', subtitle: 'Chemical Profiling', icon: Activity },
  { title: '27', subtitle: 'Active Compounds', icon: Sparkles, isMetric: true },
];

function AnimatedCounter({
  value,
  decimals = 0,
  suffix = '',
  duration = 2,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId: number;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function WhyBananaFiberPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <div className={styles.whyBananaFiberPage}>
      <div className={styles.grainOverlay} aria-hidden="true" />

      {/* SECTION 1: HERO */}
      <section
        ref={heroRef}
        className={styles.heroSection}
        aria-labelledby="hero-title"
      >
        <motion.div className={styles.heroBgLayer} style={{ y: heroBgY }} aria-hidden="true">
          <Image
            src="/why-banana-fiber/hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImg}
          />
        </motion.div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroLightLeak} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <motion.div
            className={styles.heroContent}
            style={{ y: heroContentY }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.nav
              className={styles.heroBreadcrumb}
              variants={fadeInUp}
              aria-label="Breadcrumb"
            >
              <Link href="/">Home</Link>
              <ChevronRight size={12} aria-hidden="true" />
              <Link href="/products">Products</Link>
              <ChevronRight size={12} aria-hidden="true" />
              <span className={styles.breadcrumbPill}>The Story Behind the Fiber</span>
            </motion.nav>

            <motion.h1
              id="hero-title"
              className={styles.heroTitle}
              variants={fadeInUp}
            >
              Why Banana Fiber?
            </motion.h1>

            <motion.p className={styles.heroLead} variants={fadeInUp}>
              Nature-inspired absorbent technology crafted from banana fiber, thoughtfully designed for comfort, reusability, and conscious period care. Supported by scientific research and rooted in responsible material choices.
            </motion.p>

            <motion.div className={styles.heroCTAs} variants={fadeInUp}>
              <Link href="/products" className={styles.heroBtnPrimary}>
                Switch Now
              </Link>
              <a href="#plant-story" className={styles.heroBtnSecondary}>
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE LIFE CYCLE */}
      <section
        id="plant-story"
        className={styles.plantStorySection}
        aria-labelledby="plant-story-title"
      >
        <div className={styles.plantStoryGlow} aria-hidden="true" />
        <div className={styles.plantStoryGrain} aria-hidden="true" />

        <div className={`container ${styles.plantStoryContainer}`}>
          <motion.header
            className={styles.plantStoryHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.span className={styles.plantStoryLabelBadge} variants={fadeInUp}>
              The Life Cycle
            </motion.span>
            <motion.h2 id="plant-story-title" className={styles.plantStoryTitle} variants={fadeInUp}>
              A Plant With Its Own Story
            </motion.h2>
            <motion.div className={styles.plantStoryHeaderDivider} aria-hidden="true" variants={fadeInUp}>
              <span />
              <span />
            </motion.div>
            <motion.p className={styles.plantStoryIntro} variants={fadeInUp}>
              Not every plant lives the same journey. The banana plant completes its natural cycle in a single harvest — and what remains holds unexpected value.
            </motion.p>
          </motion.header>

          <motion.div
            className={styles.lifeCycleTimeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <div className={styles.lifeCycleConnector} aria-hidden="true" />
            {lifeCycleCards.map((card) => (
              <motion.div className={styles.lifeCycleItem} key={card.step} variants={fadeInUp}>
                <div className={styles.lifeCycleNode}>{card.step}</div>
                <article className={styles.lifeCycleCard}>
                  <span className={styles.lifeCycleCardBg} aria-hidden="true">{card.step}</span>
                  <h3 className={styles.lifeCycleCardTitle}>{card.title}</h3>
                  <ul className={styles.lifeCycleList}>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            ))}
          </motion.div>

          <motion.blockquote
            className={styles.plantStoryPhilosophy}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <Quote size={42} className={styles.plantStoryPhilosophyIcon} aria-hidden="true" />
            <p className={styles.plantStoryPhilosophyText}>
              &ldquo;Innovation does not always begin with something new. Sometimes, it begins with what nature has already given.&rdquo;
            </p>
            <span className={styles.plantStoryPhilosophyLabel}>More Than Material</span>
          </motion.blockquote>
        </div>
      </section>

      {/* SECTION: THE JOURNEY OF SAUKHYAM */}
      <section className={styles.journeySection} aria-labelledby="journey-heading">
        <div className={styles.journeyBg} aria-hidden="true" />
        <div className={styles.journeyGrain} aria-hidden="true" />

        <div className="container">
          <motion.header
            className={styles.journeyHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.span className={styles.journeyLabel} variants={fadeInUp}>
              The Journey of Saukhyam
            </motion.span>
            <motion.h2 id="journey-heading" className={styles.journeyTitle} variants={fadeInUp}>
              From Fiber to Care
            </motion.h2>
            <motion.p className={styles.journeyIntro} variants={fadeInUp}>
              Every Saukhyam pad carries within it the hands of women artisans, the intelligence of nature, and the discipline of purposeful craft.
            </motion.p>
          </motion.header>

          <div className={styles.journeySteps}>

            {/* Step 01 */}
            <motion.div
              className={`${styles.journeyStep} ${styles.journeyStepLeft}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.journeyImageWrap} variants={fadeInUp}>
                <span className={styles.journeyStepBadge}>01</span>
                <Image
                  src="/journey-01-fiber-extraction.png"
                  alt="Women artisan carefully extracting raw banana fiber by hand"
                  width={680}
                  height={480}
                  className={styles.journeyImage}
                />
              </motion.div>
              <motion.div className={styles.journeyContent} variants={fadeInUp}>
                <span className={styles.journeyStepLabel}>Step 01</span>
                <h3 className={styles.journeyStepTitle}>Fiber Extraction</h3>
                <p className={styles.journeyStepText}>
                  The process begins at the source. Skilled women artisans carefully separate the banana stem fiber by hand, drawing out long, natural strands that will form the absorbent core of each pad. It is patient, skilled work — done with care from the very first touch.
                </p>
                <ul className={styles.journeyStepPoints}>
                  <li>Hand-separated from post-harvest banana stems</li>
                  <li>Natural cellulose fibers selected for quality</li>
                  <li>No chemical treatments at extraction stage</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              className={`${styles.journeyStep} ${styles.journeyStepRight}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.journeyContent} variants={fadeInUp}>
                <span className={styles.journeyStepLabel}>Step 02</span>
                <h3 className={styles.journeyStepTitle}>Preparing the Material</h3>
                <p className={styles.journeyStepText}>
                  Raw fiber moves into mechanical refinement. Women operating fiber-processing equipment clean, align, and prepare the strands into uniform, breathable layers. This stage transforms wild, uneven fiber into material precise enough for menstrual care.
                </p>
                <ul className={styles.journeyStepPoints}>
                  <li>Fiber cleaned and aligned using processing equipment</li>
                  <li>Uniform layers prepared for absorbency</li>
                  <li>Quality checks at every processing stage</li>
                </ul>
              </motion.div>
              <motion.div className={styles.journeyImageWrap} variants={fadeInUp}>
                <span className={styles.journeyStepBadge}>02</span>
                <Image
                  src="/journey-02-fiber-machines.png"
                  alt="Women processing banana fiber through mechanical refinement equipment"
                  width={680}
                  height={480}
                  className={styles.journeyImage}
                />
              </motion.div>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              className={`${styles.journeyStep} ${styles.journeyStepLeft}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.journeyImageWrap} variants={fadeInUp}>
                <span className={styles.journeyStepBadge}>03</span>
                <Image
                  src="/journey-03-fiber-sorting.png"
                  alt="Artisan sorting and refining banana fiber strands by hand"
                  width={680}
                  height={480}
                  className={styles.journeyImage}
                />
              </motion.div>
              <motion.div className={styles.journeyContent} variants={fadeInUp}>
                <span className={styles.journeyStepLabel}>Step 03</span>
                <h3 className={styles.journeyStepTitle}>Refining & Sorting</h3>
                <p className={styles.journeyStepText}>
                  Every fiber strand is examined. Artisans sort refined fiber by texture and quality, ensuring only the most suitable material reaches the stitching stage. This careful selection is what gives each Saukhyam pad its consistent softness and reliability.
                </p>
                <ul className={styles.journeyStepPoints}>
                  <li>Fiber sorted by texture and absorbency quality</li>
                  <li>Artisan-level inspection at this stage</li>
                  <li>Only the finest material passes forward</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Step 04 */}
            <motion.div
              className={`${styles.journeyStep} ${styles.journeyStepRight}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.journeyContent} variants={fadeInUp}>
                <span className={styles.journeyStepLabel}>Step 04</span>
                <h3 className={styles.journeyStepTitle}>Stitching &amp; Craftsmanship</h3>
                <p className={styles.journeyStepText}>
                  Women artisans stitch each pad with precision and care. The banana fiber layer is carefully assembled within the pad structure, with attention to form, comfort, and durability. This is not machine-only work — it is craftsmanship rooted in community and skill.
                </p>
                <ul className={styles.journeyStepPoints}>
                  <li>Precision stitching by trained women artisans</li>
                  <li>Fiber core assembled within pad layers</li>
                  <li>Each pad individually crafted and quality-checked</li>
                </ul>
              </motion.div>
              <motion.div className={styles.journeyImageWrap} variants={fadeInUp}>
                <span className={styles.journeyStepBadge}>04</span>
                <Image
                  src="/journey-04-stitching.png"
                  alt="Women artisans stitching Saukhyam reusable pads at sewing machines"
                  width={680}
                  height={480}
                  className={styles.journeyImage}
                />
              </motion.div>
            </motion.div>

            {/* Step 05 */}
            <motion.div
              className={`${styles.journeyStep} ${styles.journeyStepLeft}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.journeyImageWrap} variants={fadeInUp}>
                <span className={styles.journeyStepBadge}>05</span>
                <Image
                  src="/journey-05-drying-finishing.png"
                  alt="Women preparing and finishing naturally dyed fabric for Saukhyam pads"
                  width={680}
                  height={480}
                  className={styles.journeyImage}
                />
              </motion.div>
              <motion.div className={styles.journeyContent} variants={fadeInUp}>
                <span className={styles.journeyStepLabel}>Step 05</span>
                <h3 className={styles.journeyStepTitle}>Natural Dyeing &amp; Finishing</h3>
                <p className={styles.journeyStepText}>
                  Finished pads are naturally dyed and pressed into their final form. The deep red tones — symbolic of care and intention — come from a natural dyeing process. Fabric is laid out, dried in open air, and pressed with precision before final assembly.
                </p>
                <ul className={styles.journeyStepPoints}>
                  <li>Natural dyes applied for color and character</li>
                  <li>Air-dried for freshness and fabric integrity</li>
                  <li>Pressed and finished to premium standard</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Step 06 — Final Product */}
            <motion.div
              className={styles.journeyFinalStep}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.journeyFinalImageWrap} variants={fadeInUp}>
                <span className={`${styles.journeyStepBadge} ${styles.journeyStepBadgeFinal}`}>06</span>
                <Image
                  src="/journey-06-final-product.png"
                  alt="Finished Saukhyam reusable menstrual pads held with care"
                  width={540}
                  height={540}
                  className={styles.journeyFinalImage}
                />
              </motion.div>
              <motion.div className={styles.journeyFinalContent} variants={fadeInUp}>
                <span className={styles.journeyStepLabel}>Step 06</span>
                <h3 className={styles.journeyFinalTitle}>The Finished Saukhyam Pad</h3>
                <p className={styles.journeyFinalText}>
                  What began as discarded banana stem fiber — often left behind after harvest — has become a soft, reusable, purposefully crafted menstrual pad. Held in women's hands. Made by women's hands. Designed for women's care.
                </p>
                <blockquote className={styles.journeyFinalQuote}>
                  <Quote size={18} className={styles.journeyFinalQuoteIcon} aria-hidden="true" />
                  <p>&ldquo;Every pad carries the hands that made it and the material that gave itself to the purpose.&rdquo;</p>
                </blockquote>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION: CRAFTED BY WOMEN */}
      <section className={styles.craftedSection} aria-labelledby="crafted-heading">
        <div className={styles.craftedBg} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.craftedGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {/* LEFT: Video */}
            <motion.div className={styles.craftedVideoCol} variants={fadeInUp}>
              <div className={styles.craftedVideoWrap}>
                <div className={styles.craftedVideoFrame}>
                  <iframe
                    src="https://www.youtube.com/embed/Q-nxYk30pho"
                    title="Crafted by Women – Banana Fiber to Saukhyam Pad"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.craftedIframe}
                  />
                </div>
              </div>
              <p className={styles.craftedVideoCaption}>See how banana fiber becomes menstrual innovation</p>
              <a
                href="https://youtu.be/Q-nxYk30pho"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.craftedYouTubeLink}
              >
                Watch on YouTube
                <ChevronRight size={14} aria-hidden="true" />
              </a>

              {/* CTA buttons */}
              <motion.div
                className={styles.craftedCTAs}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <Link href="/why-banana-fiber#science-lab" className={styles.craftedBtnPrimary}>
                    <Sparkles size={15} className={styles.craftedBtnIcon} aria-hidden="true" />
                    Discover the Science
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link href="/why-banana-fiber#user-experiences" className={styles.craftedBtnGhost}>
                    Read User Stories
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats mini-cards */}
              <motion.div
                className={styles.craftedMiniStats}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={staggerContainer}
              >
                <motion.div className={styles.craftedMiniStat} variants={fadeInUp}>
                  <TrendingUp size={14} className={styles.craftedMiniStatIcon} aria-hidden="true" />
                  <span className={styles.craftedMiniStatValue}>63.2%</span>
                  <span className={styles.craftedMiniStatLabel}>Reported Comfort</span>
                </motion.div>
                <motion.div className={styles.craftedMiniStat} variants={fadeInUp}>
                  <Leaf size={14} className={styles.craftedMiniStatIcon} aria-hidden="true" />
                  <span className={styles.craftedMiniStatValue}>Natural</span>
                  <span className={styles.craftedMiniStatLabel}>Banana Fiber</span>
                </motion.div>
                <motion.div className={styles.craftedMiniStat} variants={fadeInUp}>
                  <RefreshCw size={14} className={styles.craftedMiniStatIcon} aria-hidden="true" />
                  <span className={styles.craftedMiniStatValue}>2+ Yrs</span>
                  <span className={styles.craftedMiniStatLabel}>Reusable Life</span>
                </motion.div>
              </motion.div>

              {/* Scroll indicator */}
              <div className={styles.craftedScrollHint} aria-hidden="true">
                <span className={styles.craftedScrollDot} />
                <span className={styles.craftedScrollText}>Scroll to Explore</span>
              </div>

              {/* Floating pulse accent */}
              <div className={styles.craftedPulseOrb} aria-hidden="true">
                <Leaf size={13} />
              </div>
            </motion.div>

            {/* RIGHT: Content */}
            <div className={styles.craftedContentCol}>
              <motion.span className={styles.craftedLabel} variants={fadeInUp}>
                Crafted With Purpose
              </motion.span>
              <motion.h2 id="crafted-heading" className={styles.craftedTitle} variants={fadeInUp}>
                Crafted by Women. Powered by Nature. Designed for Comfort.
              </motion.h2>
              <motion.p className={styles.craftedIntro} variants={fadeInUp}>
                What begins as discarded banana stem fiber is transformed into something meaningful, soft, reusable menstrual pads supporting women and the planet.
              </motion.p>

              <motion.div className={styles.craftedSteps} variants={staggerContainer}>
                {journeySteps.map((step) => (
                  <motion.article className={styles.craftedStep} key={step.step} variants={fadeInUp}>
                    <span className={styles.craftedStepNum}>{step.step}</span>
                    <div className={styles.craftedStepContent}>
                      <h3 className={styles.craftedStepTitle}>{step.title}</h3>
                      <p className={styles.craftedStepBody}>{step.short}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              <motion.blockquote className={styles.craftedQuote} variants={fadeInUp}>
                <Quote size={22} className={styles.craftedQuoteIcon} aria-hidden="true" />
                <p className={styles.craftedQuoteText}>
                  &ldquo;Every reusable pad carries the effort of many women, the strength of nature, and the promise of sustainability.&rdquo;
                </p>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FROM FIBER TO CARE */}
      <section className={styles.absorbencySection} aria-labelledby="fiber-to-care-heading">
        <div className={styles.absorbencyBg} aria-hidden="true" />
        <div className={styles.absorbencyGlow} aria-hidden="true" />

        <div className="container">
          <motion.div
            className={styles.absorbencyLayout}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className={styles.absorbencyHeader} variants={fadeInUp}>
              <span className={styles.absorbencyBadge}>
                <Heart size={13} aria-hidden="true" />
                Fiber to Care
              </span>
              <h2 id="fiber-to-care-heading" className={styles.absorbencyTitle}>
                From Fiber to Care
              </h2>
              <p className={styles.absorbencySubtitle}>
                A material chosen for care must first perform its role well.
              </p>
            </motion.div>

            <div className={styles.absorbencySplit}>
              <motion.div className={styles.absorbencyMetricCard} variants={fadeInUp}>
                <div className={styles.absorbencyMetricGlow} aria-hidden="true" />
                <div className={styles.absorbencyWave} aria-hidden="true" />
                <motion.span
                  className={styles.absorbencyMetricNum}
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatedCounter value={6} decimals={0} suffix="×" />
                </motion.span>
                <span className={styles.absorbencyMetricLabel}>Absorption</span>
              </motion.div>

              <motion.div className={styles.fiberCareCards} variants={staggerContainer}>
                {fiberToCareCards.map((card) => (
                  <motion.article className={styles.fiberCareCard} key={card.title} variants={fadeInUp}>
                    <span className={styles.fiberCareStep}>{card.step}</span>
                    <div>
                      <h3 className={styles.fiberCareCardTitle}>{card.title}</h3>
                      <p className={styles.fiberCareCardText}>{card.text}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: WHAT USERS BEGAN NOTICING */}
      <section className={styles.userExperiencesSection} aria-labelledby="user-experiences-heading">
        <div className={styles.userExperiencesBg} aria-hidden="true" />
        <div className={styles.userExperiencesGlow} aria-hidden="true" />
        <div className={styles.userExperiencesGrain} aria-hidden="true" />

        <div className="container">
          <motion.header
            className={styles.userExperiencesHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.span className={styles.userExperiencesPill} variants={fadeInUp}>
              User Experiences
            </motion.span>
            <motion.h2 id="user-experiences-heading" className={styles.userExperiencesTitle} variants={fadeInUp}>
              What Users Began Noticing
            </motion.h2>
            <motion.div className={styles.userExperiencesIntro} variants={fadeInUp}>
              <p className={styles.userExperiencesIntroLead}>Something unexpected began to emerge.</p>
              <p>Over time, many Saukhyam users began sharing experiences around greater menstrual comfort, long-term usability, and a more conscious relationship with period care.</p>
              <p>These observations sparked curiosity and inspired deeper scientific exploration.</p>
            </motion.div>
          </motion.header>

          <div className={styles.uxBody}>
            {/* LEFT: Quote cards */}
            <motion.div
              className={styles.uxQuotesCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {experienceCards.map((quote) => (
                <motion.figure
                  key={quote}
                  className={styles.uxQuoteCard}
                  variants={fadeInUp}
                >
                  <Quote size={20} className={styles.uxQuoteIcon} aria-hidden="true" />
                  <blockquote className={styles.uxQuoteText}>&ldquo;{quote}&rdquo;</blockquote>
                </motion.figure>
              ))}
            </motion.div>

            {/* RIGHT: Stats */}
            <motion.div
              className={styles.uxStatsCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {experienceStats.map((stat) => (
                <motion.div key={stat.label} className={styles.uxStatCard} variants={fadeInUp}>
                  <div className={styles.uxStatTop}>
                    <span className={styles.uxStatValue}>
                      <AnimatedCounter value={stat.value} suffix="%" duration={2.2} />
                    </span>
                    <div className={styles.uxStatIconWrap} aria-hidden="true">
                      <stat.icon size={18} />
                    </div>
                  </div>
                  <span className={styles.uxStatLabel}>{stat.label}</span>
                  <div className={styles.uxStatBar} aria-hidden="true">
                    <div
                      className={styles.uxStatBarFill}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MERGED: INSIDE THE FIBER + WHAT SCIENCE FOUND */}
      <section id="science-lab" className={styles.scienceLabSection} aria-labelledby="science-lab-heading">
        <div className={styles.scienceLabBg} aria-hidden="true" />
        <div className={styles.scienceLabGrain} aria-hidden="true" />
        <div className={styles.scienceLabGlow} aria-hidden="true" />

        <div className="container">
          <motion.header
            className={styles.scienceLabHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.span className={styles.scienceLabBadge} variants={fadeInUp}>
              <FlaskConical size={13} aria-hidden="true" />
              Inside Banana Fiber · Laboratory Testing
            </motion.span>
            <motion.h2 id="science-lab-heading" className={styles.scienceLabTitle} variants={fadeInUp}>
              Looking Inside the Fiber
            </motion.h2>
          </motion.header>

          <div className={styles.scienceLabGrid}>
            <motion.div
              className={styles.scienceLabStory}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.scienceLabNarrative} variants={fadeInUp}>
                <p>Banana fiber may appear simple.</p>
                <p>Its chemistry is not.</p>
                <p>Researchers studied the fiber using advanced analytical techniques to understand what it contains.</p>
                <p>The investigation revealed a complex profile of naturally occurring phytochemicals present within banana fiber.</p>
                <p>These compounds became the focus of further scientific exploration.</p>
              </motion.div>

              <motion.div className={styles.scienceLabTransition} variants={fadeInUp}>
                <div className={styles.scienceLabDivider} aria-hidden="true" />
                <h3 className={styles.scienceLabSubTitle}>What Science Found</h3>
                <p className={styles.scienceLabFinding}>
                  The research identified 27 bioactive phytochemicals associated in scientific literature with anti-inflammatory, analgesic, and antinociceptive activities.
                </p>
                <p className={styles.scienceLabCompoundsIntro}>Among them were compounds such as:</p>
              </motion.div>

              <motion.div className={styles.compoundPills} variants={staggerContainer}>
                {phytochemicals.map((name) => (
                  <motion.span className={styles.compoundPill} key={name} variants={fadeInUp}>
                    {name}
                  </motion.span>
                ))}
              </motion.div>

            </motion.div>

            <motion.aside
              className={styles.scienceLabVisual}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.scienceLabImageWrap} variants={fadeInUp}>
                <div className={styles.scienceLabImageGlow} aria-hidden="true" />
                <Image
                  src="/why-banana-fiber/laboratory-testing.png"
                  alt="Banana fiber samples, microscope, and laboratory analysis equipment on a research bench"
                  width={560}
                  height={420}
                  className={styles.scienceLabImage}
                />
              </motion.div>

              {/* Research Snapshot card */}
              <motion.div className={styles.scienceResearchSnapshot} variants={fadeInUp}>
                <span className={styles.scienceSnapshotLabel}>
                  <FlaskConical size={12} aria-hidden="true" />
                  Research Snapshot
                </span>
                <ul className={styles.scienceSnapshotList}>
                  <li>
                    <span className={styles.scienceSnapshotDot} aria-hidden="true" />
                    27 Bioactive Compounds Identified
                  </li>
                  <li>
                    <span className={styles.scienceSnapshotDot} aria-hidden="true" />
                    Advanced Analytical Testing
                  </li>
                  <li>
                    <span className={styles.scienceSnapshotDot} aria-hidden="true" />
                    Naturally Occurring Phytochemicals
                  </li>
                </ul>
              </motion.div>

              {/* Scientific detail row */}
              <motion.div className={styles.scienceDetailRow} variants={fadeInUp}>
                <span className={styles.scienceDetailItem}>
                  <Activity size={13} aria-hidden="true" />
                  Laboratory Evaluated
                </span>
                <span className={styles.scienceDetailDivider} aria-hidden="true" />
                <span className={styles.scienceDetailItem}>
                  <Sparkles size={13} aria-hidden="true" />
                  Scientific Literature Referenced
                </span>
              </motion.div>
            </motion.aside>
          </div>

          {/* Full-width disclaimer bar */}
          <motion.div
            className={styles.scienceLabDisclaimer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
          >
            <span className={styles.scienceLabDisclaimerIcon} aria-hidden="true">i</span>
            <p>
              These findings do not claim that banana fiber alone relieves pain, but they open an important scientific conversation about the material and its potential role in menstrual comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY SAUKHYAM CHOSE REUSABLE */}
      <section className={styles.philosophySection} aria-labelledby="philosophy-heading">
        <div className={styles.philosophyBgImage} aria-hidden="true">
          <Image
            src="/why-banana-fiber/philosophy-bg.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.philosophyBgImg}
          />
        </div>
        <div className={styles.philosophyOverlay} aria-hidden="true" />
        <div className={styles.philosophyGrain} aria-hidden="true" />

        <div className="container">
          <motion.div
            className={styles.philosophyInner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.header className={styles.philosophyHeader} variants={fadeInUp}>
              <span className={styles.philosophyBadge}>Saukhyam Purpose</span>
              <h2 id="philosophy-heading" className={styles.philosophyTitle}>
                Why Saukhyam Chose Reusable
              </h2>
            </motion.header>

            <div className={styles.philosophyBlocks}>
              {philosophyBlocks.map((block) => (
                <motion.article className={styles.philosophyBlock} key={block.label} variants={fadeInUp}>
                  <h3 className={styles.philosophyBlockLabel}>{block.label}</h3>
                  <div className={styles.philosophyBlockLines}>
                    {block.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.blockquote className={styles.philosophyQuotePanel} variants={fadeInUp}>
              <Quote size={36} className={styles.philosophyQuoteIcon} aria-hidden="true" />
              <div className={styles.philosophyQuoteDivider} aria-hidden="true" />
              <p className={styles.philosophyQuote}>
                &ldquo;Sometimes the most meaningful materials are the ones nature has already provided.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
