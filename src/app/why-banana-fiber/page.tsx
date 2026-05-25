'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Leaf,
  Droplets,
  HelpCircle,
  Activity,
  Compass,
  FlaskConical,
  Heart,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

const staggerContainer = {
  visible: { 
    transition: { staggerChildren: 0.1 } 
  },
};

const processSteps = [
  { label: 'Harvest', desc: 'Sourcing cut banana plant stalks post-harvest.', icon: Compass },
  { label: 'Fiber', desc: 'Extracting strong absorbency fibers carefully.', icon: Leaf },
  { label: 'Care', desc: 'Crafting hygienic natural pad layers.', icon: Heart },
  { label: 'Reuse', desc: 'Lasting period care for years, not minutes.', icon: Activity },
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

export default function WhyBananaFiberPage() {
  return (
    <div className={styles.whyBananaFiberPage}>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className={styles.heroSection} aria-labelledby="hero-title">
        <div className={`container ${styles.heroContainer}`}>
          <motion.div 
            className={styles.heroContent}
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
              <ChevronRight size={12} />
              <Link href="/products">Products</Link>
              <ChevronRight size={12} />
              <span>Why Banana Fiber</span>
            </motion.nav>

            <motion.span className={styles.sectionBadge} variants={fadeInUp}>
              <Leaf size={12} style={{ marginRight: '4px' }} />
              Natural Care Origin
            </motion.span>

            <motion.h1 
              id="hero-title"
              className={styles.heroTitle}
              variants={fadeInUp}
            >
              Why Banana Fiber?
            </motion.h1>

            <motion.h2 className={styles.heroSubTitle} variants={fadeInUp}>
              Because period care begins long before a pad is made — it begins with the choices behind it.
            </motion.h2>

            <motion.div className={styles.heroText} variants={fadeInUp}>
              <p>
                Most people never stop to ask what makes a sanitary pad absorbent.
              </p>
              <p>
                Yet behind that simple layer lies an important story.
              </p>
              <p>
                The absorbent material used in many sanitary napkins is cellulose fiber. Saukhyam asked a different question:
              </p>
              <p>
                Could period care be created using a material that already exists in nature, without asking for more to be taken?
              </p>
              <p>
                That question led us to banana fiber.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroImageWrapper}>
              <Image 
                src="/why-banana-fiber-macro.png" 
                alt="Detailed macro view of raw golden-ivory organic banana fiber strands" 
                width={500} 
                height={625}
                priority
              />
            </div>
            <div className={styles.heroBlurBlob} aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />

      {/* ═══ SECTION 2 — THE BANANA PLANT STORY ═══ */}
      <section className={styles.plantStorySection}>
        <div className="container">
          <div className={styles.plantStoryGrid}>
            <motion.div 
              className={styles.plantStoryImageWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <Image 
                src="/why-banana-fiber/women-extracting.jpg" 
                alt="Saukhyam rural artisans working sitting together preparing raw banana fiber" 
                width={550} 
                height={370} 
              />
            </motion.div>

            <motion.div 
              className={styles.plantStoryContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.sectionBadge} variants={fadeInUp}>
                <Compass size={12} style={{ marginRight: '4px' }} />
                The Life Cycle
              </motion.span>
              
              <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
                A Plant With Its Own Story
              </motion.h2>

              <motion.div className={styles.sectionText} variants={fadeInUp}>
                <p>Not all plants live the same way.</p>
                <p>A mango tree fruits again and again. An orange tree returns every season.</p>
                <p>The banana plant is different.</p>
                <p>It bears fruit only once.</p>
                <p>After harvest, the plant is cut because its work is complete.</p>
                <p>What remains is often seen as agricultural residue.</p>
                <p>Saukhyam saw something more.</p>
                <p>From this harvested plant, banana fiber is carefully extracted and transformed into the heart of a reusable pad.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className={styles.sectionDividerAlt} aria-hidden="true" />

      {/* ═══ SECTION 3 — RESOURCE & INDIA STORY ═══ */}
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
                India's Post-Harvest Resource
              </motion.span>

              <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
                Not Waste. A Resource Waiting to Be Seen.
              </motion.h2>

              <motion.div className={styles.sectionText} variants={fadeInUp}>
                <p>India grows more bananas than any other country in the world.</p>
                <p>And with every harvest comes plant material left behind.</p>
                <p>For many, this marks the end of the story.</p>
                <p>For Saukhyam, it is where the story begins.</p>
                <p>Banana fiber comes from this post-harvest material — giving new purpose to what already exists.</p>
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
            <motion.h3 className={styles.flowTitle} variants={fadeInUp}>
              Visual Flow of Natural Transformation
            </motion.h3>

            <motion.div className={styles.processFlow} variants={fadeInUp}>
              {processSteps.map((step, idx) => (
                <div className={styles.flowStep} key={step.label}>
                  <div className={styles.flowIconWrap}>
                    <step.icon size={24} />
                  </div>
                  <span className={styles.flowLabel}>{step.label}</span>
                  <p className={styles.flowDesc}>{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className={styles.sectionDivider} aria-hidden="true" />

      {/* ═══ SECTION 4 — ABSORBENCY ═══ */}
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
                  6×
                </motion.span>
                <span className={styles.metricLabel}>Absorption</span>
              </div>
              <div className={styles.absorbencyContent}>
                <h3>Natural Performance Cores</h3>
                <p>
                  A material chosen for care must first perform its role well.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Banana fiber serves as the primary absorbent material in Saukhyam reusable pads.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Research conducted around Saukhyam banana fiber found that it can absorb up to six times its dry weight in fluid.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Its strength lies not only in where it comes from, but also in how effectively it functions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — USER EXPERIENCE TO SCIENCE ═══ */}
      <section className={styles.transitionSection}>
        <div className="container">
          <div className={styles.transitionGrid}>
            <motion.div 
              className={styles.darkContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.span className={styles.darkBadge} variants={fadeInUp}>
                <HelpCircle size={12} style={{ marginRight: '6px', alignSelf: 'center' }} />
                User Feedback
              </motion.span>

              <motion.h2 className={styles.darkTitle} variants={fadeInUp}>
                When Users Started Asking Questions
              </motion.h2>

              <motion.div className={styles.darkText} variants={fadeInUp}>
                <p>Something unexpected began to emerge.</p>
                <p>Among Saukhyam reusable pad users, 63.2% reported relief from menstrual cramps.</p>
                <p>This observation sparked curiosity.</p>
                <p>Could banana fiber contain naturally occurring compounds connected to comfort?</p>
                <p>Rather than making assumptions, researchers chose to investigate.</p>
                <p>That curiosity led to deeper scientific study.</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.darkMetric}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <span className={styles.darkMetricValue}>63.2%</span>
              <span className={styles.darkMetricLabel}>Users Reported Cramp Relief</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — INSIDE THE FIBER ═══ */}
      <section className={styles.insideSection}>
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
              Laboratory Testing
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
                <div className={styles.scienceCardHeader}>
                  <FlaskConical size={20} />
                  <span className={styles.scienceCardTitle}>LC–MS Analysis</span>
                </div>
                <p className={styles.scienceCardText}>
                  Liquid Chromatography–Mass Spectrometry was used to separate, identify, and quantify complex phytochemical compounds within the organic banana fiber structure.
                </p>
              </motion.div>

              <motion.div className={styles.scienceCard} variants={fadeInUp}>
                <div className={styles.scienceCardHeader}>
                  <Activity size={20} />
                  <span className={styles.scienceCardTitle}>GC–MS Analysis</span>
                </div>
                <p className={styles.scienceCardText}>
                  Gas Chromatography–Mass Spectrometry facilitated the detection of volatile and semi-volatile substances, mapping out the compound composition in detail.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — WHAT SCIENCE FOUND ═══ */}
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
          </div>

          <motion.div 
            className={styles.compoundsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {phytochemicals.map((name) => (
              <motion.div className={styles.compoundCard} key={name} variants={fadeInUp}>
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
              <strong>Scientific Note:</strong> These findings do not claim that banana fiber alone relieves pain. But they do open an important scientific conversation about the material and its potential role in menstrual comfort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 8 — SCIENCE CONTINUES ═══ */}
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

      {/* ═══ SECTION 9 — SAUKHYAM PHILOSOPHY ═══ */}
      <section className={styles.philosophySection}>
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
                <p>Inspired by Ammaji's vision, Saukhyam believes resources should be treated with care and used thoughtfully.</p>
                <p>That is why banana fiber became part of a reusable journey — one designed not for a single moment, but for lasting use.</p>
              </motion.div>

              <motion.div className={styles.philosophyQuoteBlock} variants={fadeInUp}>
                <blockquote className={styles.philosophyQuote}>
                  "Sometimes the most meaningful materials are the ones nature has already provided."
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
