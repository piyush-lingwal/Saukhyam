'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight,
  Leaf,
  Droplets,
  Activity,
  Compass,
  FlaskConical,
  Heart,
  Sparkles,
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

const processSteps = [
  { label: 'Harvest', icon: Compass },
  { label: 'Fiber', icon: Leaf },
  { label: 'Care', icon: Heart },
  { label: 'Reuse', icon: Activity },
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
  {
    title: 'Greater Comfort',
    quote: 'Comfort became part of the experience.',
  },
  {
    title: 'Gentler Experience',
    quote: 'Many users described the transition as softer and more breathable.',
  },
  {
    title: 'Meaningful Change',
    quote: 'For some, what began as a conscious choice became a lasting one.',
  },
];

const experienceStats = [
  { value: 77, label: 'Reported Pain Reduction' },
  { value: 81, label: 'Cycle Regularity Improvement' },
  { value: 92, label: 'Continued Use After 6 Months' },
];

const phytochemicals = [
  'p-Coumaric acid',
  'Caffeic acid',
  'Adenosine',
  'Coumarin',
  'Lauric acid',
  'Myristic acid',
  'Stachydrine',
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
  const plantStoryRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const { scrollYProgress: plantScrollProgress } = useScroll({
    target: plantStoryRef,
    offset: ['start end', 'end start'],
  });
  const plantVisualY = useTransform(plantScrollProgress, [0, 1], [40, -40]);

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

      {/* SECTION 2: THE BANANA PLANT STORY */}
      <section
        id="plant-story"
        ref={plantStoryRef}
        className={styles.plantStorySection}
        aria-labelledby="plant-story-title"
      >
        <div className={styles.plantStoryBg} aria-hidden="true">
          <Image
            src="/why-banana-fiber/plant-story-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.plantStoryBgImg}
          />
        </div>
        <div className={styles.plantStoryOverlay} aria-hidden="true" />
        <div className={styles.plantStoryGrain} aria-hidden="true" />

        <div className="container">
          <div className={styles.plantStoryGrid}>
            <motion.div
              className={styles.plantStoryContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.sectionBadge} variants={fadeInUp}>
                <Compass size={12} style={{ marginRight: '4px' }} />
                The Life Cycle
              </motion.span>

              <motion.h2
                id="plant-story-title"
                className={styles.plantStoryTitle}
                variants={fadeInUp}
              >
                A Plant With Its Own Story
              </motion.h2>

              <motion.div className={styles.narrativeBlock} variants={fadeInUp}>
                <p>Not all plants live the same way.</p>
                <p>A mango tree returns with fruit season after season. An orange tree continues its cycle year after year.</p>
                <p className={styles.emphasisLine}>The banana plant is different.</p>
                <p>It bears fruit only once.</p>
                <p>After harvest, the plant is cut because its journey of fruiting is complete. What remains is often seen as agricultural residue - something left behind after the harvest.</p>
              </motion.div>

              <div className={styles.narrativeDivider} aria-hidden="true" />

              <motion.div className={styles.narrativeBlock} variants={fadeInUp}>
                <p className={styles.emphasisLine}>But sometimes, what appears to be waste holds untold value.</p>
                <p>Saukhyam saw something more.</p>
                <p>From this harvested plant, banana fiber is carefully extracted and transformed into the heart of a reusable pad.</p>
              </motion.div>

              <div className={styles.narrativeDivider} aria-hidden="true" />

              <motion.div className={styles.narrativeBlock} variants={fadeInUp}>
                <p>Banana fiber is a natural cellulose fiber, much like the absorbent material used in conventional sanitary napkins. The difference lies in its origin.</p>
                <p>While sanitary napkins may be manufactured in India, the cellulose fiber used in many of them is imported from abroad. Large amounts of foreign exchange are spent purchasing this raw material.</p>
                <p className={styles.emphasisLine}>Banana fiber tells a different story.</p>
              </motion.div>

              <div className={styles.narrativeDivider} aria-hidden="true" />

              <motion.div className={styles.narrativeBlock} variants={fadeInUp}>
                <p>India is among the world&apos;s largest producers of bananas. With every harvest comes plant material that has already completed its natural life cycle. Instead of allowing this valuable resource to remain unused, banana fiber gives it a second purpose.</p>
                <p>This is not a material grown or cut specifically for extraction.</p>
                <p>It is created from what nature has already provided.</p>
                <p>That is what makes banana fiber special.</p>
                <p>Not simply because it is natural, but because it transforms agricultural residue into something meaningful, useful, and deeply connected to thoughtful living.</p>
              </motion.div>

              <div className={styles.narrativeDivider} aria-hidden="true" />

              <motion.div className={styles.narrativeBlock} variants={fadeInUp}>
                <p>For Saukhyam, banana fiber is more than an absorbent material.</p>
                <p>It is a reminder that innovation can begin with respect - respect for resources, for nature, and for the choices behind the products we use.</p>
              </motion.div>

              <motion.div className={styles.closingEmphasis} variants={fadeInUp}>
                <p className={styles.emphasisLineLarge}>These are not merely products made in India.</p>
                <p className={styles.emphasisLineLarge}>They are products whose story begins here.</p>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.plantStoryVisuals}
              style={{ y: plantVisualY }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
            >
              <div className={styles.visualStack}>
                <div className={styles.visualPrimary}>
                  <Image
                    src="/why-banana-fiber/plant-story-fiber.jpg"
                    alt="Close-up of golden banana fiber extracted from harvested plant stem"
                    width={480}
                    height={360}
                  />
                </div>
                <div className={styles.visualAccent}>
                  <Image
                    src="/why-banana-fiber/plant-story-bg.jpg"
                    alt="Harvested banana plant stem with visible natural fiber layers"
                    width={280}
                    height={200}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className={styles.sectionDividerAlt} aria-hidden="true" />

      {/* SECTION 3: RESOURCE & INDIA STORY */}
      <section className={styles.resourceSection}>
        <div className="container">
          <div className={styles.resourceGrid}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.sectionBadge} variants={fadeInUp}>
                <Sparkles size={12} style={{ marginRight: '4px' }} />
                India&apos;s Post-Harvest Resource
              </motion.span>

              <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
                Not Waste. A Resource Waiting to Be Seen.
              </motion.h2>

              <motion.div className={styles.sectionText} variants={fadeInUp}>
                <p>India grows more bananas than any other country in the world.</p>
                <p>And with every harvest comes plant material left behind.</p>
                <p>For many, this marks the end of the story.</p>
                <p>For Saukhyam, it is where the story begins.</p>
                <p>Banana fiber comes from this post-harvest material, giving new purpose to what already exists.</p>
                <p>It is a way of creating without asking nature for more.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <Image
                src="/why-banana-fiber-plant.png"
                alt="Cut banana plant stem highlighting layered natural fibers in warm sunlight"
                width={500}
                height={400}
                style={{ borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-lg)' }}
              />
            </motion.div>
          </div>

          <motion.div
            className={styles.organicBackground}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className={styles.processFlow} variants={fadeInUp}>
              {processSteps.map((step) => (
                <div className={styles.flowStep} key={step.label}>
                  <div className={styles.flowIconWrap}>
                    <step.icon size={24} />
                  </div>
                  <span className={styles.flowLabel}>{step.label}</span>
                </div>
              ))}
            </motion.div>
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

          <motion.div
            className={styles.journeyCta}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.h3 className={styles.journeyCtaTitle} variants={fadeInUp}>
              A Product That Does More Than Protect
            </motion.h3>
            <motion.ul className={styles.journeyCtaList} variants={fadeInUp}>
              <li>Sustainable living</li>
              <li>Reduced menstrual waste</li>
              <li>Women-led livelihoods</li>
              <li>Affordable long-term care</li>
            </motion.ul>
            <motion.div variants={fadeInUp}>
              <Link href="/products" className={styles.journeyCtaBtn}>
                Explore Our Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className={styles.sectionDividerAlt} aria-hidden="true" />

      {/* SECTION 4: ABSORBENCY */}
      <section className={styles.absorbencySection}>
        <div className="container">
          <div className={styles.centeredLayout}>
            <motion.span
              className={styles.sectionBadge}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <Droplets size={12} style={{ marginRight: '4px' }} />
              Performance Capacity
            </motion.span>

            <motion.h2
              className={styles.sectionTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              Why Banana Fiber Works
            </motion.h2>

            <motion.div
              className={styles.glassCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <div className={styles.metricBig}>
                <motion.span
                  className={styles.metricNum}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <AnimatedCounter value={6} decimals={0} suffix="×" />
                </motion.span>
                <span className={styles.metricLabel}>Absorption</span>
              </div>
              <div className={styles.absorbencyContent}>
                <p>
                  A material chosen for care must first perform its role well.
                </p>
                <p>
                  Banana fiber serves as the primary absorbent material in Saukhyam reusable pads.
                </p>
                <p>
                  Research conducted around Saukhyam banana fiber found that it can absorb up to six times its dry weight in fluid.
                </p>
                <p>
                  Its strength lies not only in where it comes from, but also in how effectively it functions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT USERS BEGAN NOTICING */}
      <section className={styles.userExperiencesSection} aria-labelledby="user-experiences-heading">
        <div className={styles.userExperiencesBg} aria-hidden="true" />
        <div className={styles.userExperiencesGlow} aria-hidden="true" />
        <div className={styles.userExperiencesGrain} aria-hidden="true" />

        <div className="container">
          <motion.div
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
              <p>Something unexpected began to emerge.</p>
              <p>Over time, many Saukhyam users began sharing experiences around comfort, consistency, and continued use.</p>
              <p>These observations inspired deeper scientific curiosity.</p>
            </motion.div>
          </motion.div>

          <div className={styles.userExperiencesGrid}>
            <motion.div
              className={styles.experienceCardsCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {experienceCards.map((card, i) => (
                <motion.figure
                  key={card.title}
                  className={styles.experienceCard}
                  variants={fadeInUp}
                  style={{ marginTop: i > 0 ? undefined : 0 }}
                >
                  <figcaption className={styles.experienceCardTitle}>{card.title}</figcaption>
                  <blockquote className={styles.experienceCardQuote}>&ldquo;{card.quote}&rdquo;</blockquote>
                </motion.figure>
              ))}
            </motion.div>

            <motion.div
              className={styles.experienceStatsCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {experienceStats.map((stat) => (
                <motion.div key={stat.label} className={styles.experienceStatCard} variants={fadeInUp}>
                  <span className={styles.experienceStatValue}>
                    <AnimatedCounter value={stat.value} suffix="%" duration={2.2} />
                  </span>
                  <span className={styles.experienceStatLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

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

      <div className={styles.scienceTransitionFade} aria-hidden="true" />

      {/* SECTION 6: INSIDE THE FIBER */}
      <section id="science-lab" className={styles.insideSection}>
        <div className={styles.moleculeOverlay} aria-hidden="true" />
        <div className="container">
          <div className={styles.centeredLayout}>
            <motion.span
              className={styles.sectionBadge}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <FlaskConical size={12} style={{ marginRight: '4px' }} />
              Inside Banana Fiber · Laboratory Testing
            </motion.span>

            <motion.h2
              className={styles.sectionTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              Looking Inside the Fiber
            </motion.h2>

            <motion.div
              className={styles.sectionText}
              style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <p>Banana fiber may appear simple.</p>
              <p>Its chemistry is not.</p>
              <p>Researchers studied the fiber using advanced analytical techniques to understand what it contains.</p>
              <p>The investigation revealed a complex profile of naturally occurring phytochemicals present within banana fiber.</p>
              <p>These compounds became the focus of further scientific exploration.</p>
            </motion.div>

            <motion.div
              className={styles.scienceCardGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div className={styles.scienceCard} variants={fadeInUp}>
                <FlaskConical size={28} />
                <span className={styles.scienceCardTitle}>LC–MS</span>
              </motion.div>

              <motion.div className={styles.scienceCard} variants={fadeInUp}>
                <Activity size={28} />
                <span className={styles.scienceCardTitle}>GC–MS</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT SCIENCE FOUND */}
      <section className={styles.findingsSection}>
        <div className="container">
          <div className={styles.findingsIntro}>
            <motion.span
              className={styles.sectionBadge}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <FlaskConical size={12} style={{ marginRight: '4px' }} />
              Active Compounds
            </motion.span>

            <motion.h2
              className={styles.sectionTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              What Science Found
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              The research identified 27 bioactive phytochemicals associated in scientific literature with anti-inflammatory, analgesic, and antinociceptive activities.
            </motion.p>

            <motion.p
              className={styles.compoundsIntro}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              Among them were compounds such as:
            </motion.p>
          </div>

          <motion.div
            className={styles.compoundsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {phytochemicals.map((name) => (
              <motion.div
                className={styles.compoundCard}
                key={name}
                variants={fadeInUp}
              >
                <span className={styles.compoundName}>{name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.findingsDisclaimer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <p>
              These findings do not claim that banana fiber alone relieves pain.
              But they do open an important scientific conversation about the material and its potential role in menstrual comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: SCIENCE CONTINUES */}
      <section className={styles.continuesSection}>
        <div className={`container ${styles.continuesContainer}`}>
          <motion.span
            className={styles.sectionBadge}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <Compass size={12} style={{ marginRight: '4px' }} />
            Future Inquiries
          </motion.span>

          <motion.h2
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            Science Is Still Listening
          </motion.h2>

          <motion.div
            className={styles.continuesText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <p>Research rarely ends with a single answer.</p>
            <p>The study notes that more work is needed to understand how these compounds behave, how they may interact with the body, and whether they contribute to the experiences reported by users.</p>
            <p>This is not the end of the investigation.</p>
            <p>It is the beginning of understanding banana fiber more deeply.</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9: SAUKHYAM PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.philosophyGrid}>
            <motion.div
              className={styles.philosophyContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.darkBadge} variants={fadeInUp}>
                <Heart size={12} style={{ marginRight: '6px', alignSelf: 'center' }} />
                Saukhyam Purpose
              </motion.span>

              <motion.h2 className={styles.philosophyTitle} variants={fadeInUp}>
                Why Saukhyam Chose Reusable
              </motion.h2>

              <motion.div className={styles.philosophyText} variants={fadeInUp}>
                <p>Some brands use banana fiber in disposable products.</p>
                <p>Saukhyam made a different choice.</p>
                <p>Even when a material comes from agricultural residue, it remains valuable.</p>
                <p>Inspired by Ammaji&apos;s vision, Saukhyam believes resources should be treated with care and used thoughtfully.</p>
                <p>That is why banana fiber became part of a reusable journey, one designed not for a single moment, but for lasting use.</p>
              </motion.div>

              <motion.div className={styles.philosophyQuoteBlock} variants={fadeInUp}>
                <blockquote className={styles.philosophyQuote}>
                  &ldquo;Sometimes the most meaningful materials are the ones nature has already provided.&rdquo;
                </blockquote>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.philosophyImageWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <Image
                src="/why-banana-fiber/reusable-pads.jpg"
                alt="Saukhyam red reusable pads styled on a wooden surface with yellow flowers and raw fiber"
                width={500}
                height={350}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
