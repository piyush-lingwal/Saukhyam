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
  ArrowRight,
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
      'Banana fiber became part of a reusable journey\u2014created not for a single use, but for lasting care.',
    ],
  },
];

const journeySteps = [
  {
    step: '01',
    title: "Extracting Nature\u2019s Strength",
    body: 'Raw banana fiber is carefully separated and cleaned by skilled women artisans. What was once agricultural waste becomes the foundation of a sustainable innovation.',
    quote: 'Nature already created the solution. We simply gave it purpose.',
    image: '/why-banana-fiber/journey/journey-extract.png',
    caption: "Nature\u2019s waste becoming menstrual innovation.",
    imageAlt: 'Woman artisan separating raw banana fiber by hand',
  },
  {
    step: '02',
    title: 'Preparing the Fiber',
    body: 'The fibers are softened, refined, and processed to create a breathable absorbent layer designed for comfort and long-term use.',
    tagline: 'Soft on skin. Gentle on the environment.',
    image: '/why-banana-fiber/journey/journey-processing.png',
    caption: 'Combining traditional skill with sustainable technology.',
    imageAlt: 'Women refining banana fiber at processing machines',
  },
  {
    step: '03',
    title: 'Handcrafted With Precision',
    body: 'Every reusable pad is stitched with care by women-led teams using thoughtful craftsmanship and quality checks at every stage.',
    tagline: 'This is not factory mass production. This is human-centered creation.',
    image: '/why-banana-fiber/journey/journey-handcraft.png',
    caption: 'Every stitch is made with precision and purpose.',
    imageAlt: 'Artisan hands preparing banana fiber on a crafting machine',
  },
  {
    step: '04',
    title: 'Naturally Dyed & Finished',
    body: 'The vibrant red fabric reflects confidence, strength, and menstrual dignity. Each layer is carefully pressed, shaped, and assembled for durability and comfort.',
    tagline: 'Beautifully designed. Purposefully made.',
    image: '/why-banana-fiber/journey/journey-drying.png',
    caption: 'Prepared naturally for durability and comfort.',
    imageAlt: 'Women pressing and finishing naturally dyed red fabric',
  },
  {
    step: '05',
    title: 'Sustainable. Reusable. Empowering.',
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

      <div className={styles.sectionDivider} aria-hidden="true" />

      {/* SECTION 2: THE LIFE CYCLE */}
      <section
        id="plant-story"
        className={styles.plantStorySection}
        aria-labelledby="plant-story-title"
      >
        <div className={styles.plantStoryWatermark} aria-hidden="true">
          <span>ONE HARVEST</span>
          <span>SECOND PURPOSE</span>
        </div>
        <div className={styles.plantStoryGlow} aria-hidden="true" />
        <div className={styles.plantStoryGrain} aria-hidden="true" />

        <div className={`container ${styles.plantStoryContainer}`}>
          <motion.div
            className={styles.plantStoryHero}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div className={styles.plantStoryHeroContent} variants={fadeInUp}>
              <span className={styles.plantStoryBadge}>
                <Compass size={13} aria-hidden="true" />
                The Life Cycle
              </span>
              <h2 id="plant-story-title" className={styles.plantStoryTitle}>
                A Plant With Its Own Story
              </h2>
              <p className={styles.plantStoryIntro}>
                Not every plant lives the same journey. The banana plant completes its natural cycle in a single harvest — and what remains holds unexpected value.
              </p>
            </motion.div>

            <motion.div className={styles.plantStoryHeroVisual} variants={fadeInUp}>
              <div className={styles.plantStoryImageFrame}>
                <Image
                  src="/why-banana-fiber-macro.png"
                  alt="Close-up of natural banana plant fiber texture"
                  width={520}
                  height={520}
                  className={styles.plantStoryHeroImage}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.lifeCycleTimeline}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <div className={styles.lifeCycleTrack} aria-hidden="true" />
            {lifeCycleCards.map((card) => (
              <motion.article className={styles.lifeCycleCard} key={card.step} variants={fadeInUp}>
                <span className={styles.lifeCycleStep}>{card.step}</span>
                <h3 className={styles.lifeCycleCardTitle}>{card.title}</h3>
                <ul className={styles.lifeCycleList}>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          <motion.blockquote
            className={styles.plantStoryPhilosophy}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <span className={styles.plantStoryPhilosophyLabel}>More Than Material</span>
            <p>Innovation does not always begin with something new.</p>
            <p className={styles.plantStoryPhilosophyAccent}>Sometimes, it begins with what nature has already given.</p>
          </motion.blockquote>

          <motion.div
            className={styles.plantStoryClosingStrip}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
          >
            <p>Its story does not begin in a factory.</p>
            <p>It begins with the harvest.</p>
          </motion.div>

          <motion.div
            className={styles.plantStoryCtaWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
          >
            <a href="#journey-timeline" className={styles.plantStoryCta}>
              Discover the Story
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />

      {/* SECTION: FROM BANANA STEM TO DIGNITY */}
      <section className={styles.journeySection} aria-labelledby="journey-heading">
        <div className={styles.journeyHero}>
          <div className={styles.journeyHeroBg} aria-hidden="true">
            <Image
              src="/why-banana-fiber/journey/journey-handcraft.png"
              alt=""
              fill
              sizes="100vw"
              className={styles.journeyHeroImg}
            />
          </div>
          <div className={styles.journeyHeroOverlay} aria-hidden="true" />
          <div className={`container ${styles.journeyHeroInner}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.journeyEyebrow} variants={fadeInUp}>
                From Banana Stem to Dignity
              </motion.span>
              <motion.h2 id="journey-heading" className={styles.journeyHeroTitle} variants={fadeInUp}>
                Turning Banana Fiber Into Comfort, Confidence &amp; Change
              </motion.h2>
              <motion.p className={styles.journeyHeroSub} variants={fadeInUp}>
                Empowering women through sustainable menstrual care handcrafted from nature.
              </motion.p>
              <motion.a href="#journey-timeline" className={styles.journeyHeroBtn} variants={fadeInUp}>
                Discover the Journey
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="container">
          <motion.div
            className={styles.journeyIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.p className={styles.journeyIntroLead} variants={fadeInUp}>
              Crafted by Women. Powered by Nature. Designed for Comfort.
            </motion.p>
            <motion.p className={styles.journeyIntroText} variants={fadeInUp}>
              What begins as discarded banana stem fiber is transformed into something meaningful — soft, reusable menstrual pads that support both women and the planet.
            </motion.p>
            <motion.p className={styles.journeyIntroText} variants={fadeInUp}>
              Every thread tells a story of care, craftsmanship, sustainability, and empowerment.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.journeyTimelineHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <span className={styles.sectionBadge}>
              <Leaf size={12} style={{ marginRight: '4px' }} />
              The Journey of Banana Fiber
            </span>
          </motion.div>

          <div id="journey-timeline" className={styles.journeyTimeline}>
            {journeySteps.map((step, index) => (
              <motion.article
                key={step.step}
                className={`${styles.journeyStep} ${index % 2 === 1 ? styles.journeyStepReverse : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={staggerContainer}
              >
                <motion.div className={styles.journeyStepVisual} variants={fadeInUp}>
                  <div className={styles.journeyStepImageWrap}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={560}
                      height={420}
                      className={styles.journeyStepImage}
                    />
                  </div>
                  <p className={styles.journeyStepCaption}>{step.caption}</p>
                </motion.div>
                <motion.div className={styles.journeyStepContent} variants={fadeInUp}>
                  <span className={styles.journeyStepNum}>{step.step}</span>
                  <h3 className={styles.journeyStepTitle}>{step.title}</h3>
                  <p className={styles.journeyStepBody}>{step.body}</p>
                  {step.quote && (
                    <blockquote className={styles.journeyStepQuote}>&ldquo;{step.quote}&rdquo;</blockquote>
                  )}
                  {step.tagline && <p className={styles.journeyStepTagline}>{step.tagline}</p>}
                </motion.div>
              </motion.article>
            ))}
          </div>

          <motion.blockquote
            className={styles.journeyEmotionalQuote}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            &ldquo;Every reusable pad carries the effort of many women, the strength of nature, and the promise of sustainability.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      <div className={styles.sectionDividerAlt} aria-hidden="true" />

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

          <motion.div
            className={styles.userExperiencesQuotesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {experienceCards.map((quote) => (
              <motion.figure
                key={quote}
                className={styles.experienceCard}
                variants={fadeInUp}
              >
                <Quote size={22} className={styles.experienceCardIcon} aria-hidden="true" />
                <blockquote className={styles.experienceCardQuote}>&ldquo;{quote}&rdquo;</blockquote>
              </motion.figure>
            ))}
          </motion.div>

          <motion.div
            className={styles.experienceStatsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {experienceStats.map((stat) => (
              <motion.div key={stat.label} className={styles.experienceStatCard} variants={fadeInUp}>
                <div className={styles.experienceStatIconWrap} aria-hidden="true">
                  <stat.icon size={20} />
                </div>
                <span className={styles.experienceStatValue}>
                  <AnimatedCounter value={stat.value} suffix="%" duration={2.2} />
                </span>
                <span className={styles.experienceStatLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.scienceHandoff}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
          >
            <div className={styles.scienceHandoffLine} aria-hidden="true" />
            <p className={styles.scienceHandoffText}>
              From lived experience to laboratory inquiry
            </p>
            <a href="#science-lab" className={styles.scienceHandoffLink}>
              Inside Banana Fiber · Laboratory Testing
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
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
                <div className={styles.scienceLabTransitionLine} aria-hidden="true">
                  <span />
                  <FlaskConical size={14} />
                  <span />
                </div>
                <span className={styles.scienceLabSubBadge}>Active Compounds</span>
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

              <motion.div className={styles.scienceLabDisclaimer} variants={fadeInUp}>
                <p>
                  These findings do not claim that banana fiber alone relieves pain.
                  But they do open an important scientific conversation about the material and its potential role in menstrual comfort.
                </p>
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
                <Image
                  src="/why-banana-fiber/laboratory-testing.png"
                  alt="Banana fiber samples, microscope, and laboratory analysis equipment on a research bench"
                  width={560}
                  height={420}
                  className={styles.scienceLabImage}
                />
              </motion.div>

              <div className={styles.scienceMetricCards}>
                {scienceMethods.map((method) => (
                  <motion.div
                    className={`${styles.scienceMetricCard} ${method.isMetric ? styles.scienceMetricCardHighlight : ''}`}
                    key={method.title}
                    variants={fadeInUp}
                  >
                    <div className={styles.scienceMetricIcon} aria-hidden="true">
                      <method.icon size={method.isMetric ? 22 : 24} />
                    </div>
                    <span className={styles.scienceMetricTitle}>{method.title}</span>
                    <span className={styles.scienceMetricSubtitle}>{method.subtitle}</span>
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
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
              <Quote size={28} className={styles.philosophyQuoteIcon} aria-hidden="true" />
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
