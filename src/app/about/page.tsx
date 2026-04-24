'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Heart, Leaf, Users, Trophy, ShoppingBag,
  Target, Globe, Award, Sparkles, ArrowRight,
  Recycle, Shield, CheckCircle2, Quote,
} from 'lucide-react';
import { teamMembers, awards, pressItems } from '@/data/content';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const impactStats = [
  { value: '30L+', label: 'Women & Girls Empowered', icon: Users },
  { value: '4,137', label: 'Villages Reached', icon: Globe },
  { value: '280+', label: 'Rural Livelihoods Created', icon: Heart },
  { value: '20+', label: 'National & Global Awards', icon: Trophy },
];

const timelineEvents = [
  {
    year: '2016',
    title: 'The Seed Was Planted',
    desc: 'Anju Bist, inspired by Amma\'s vision, began researching sustainable menstrual hygiene solutions at Amritapuri Ashram, Kerala.',
    image: 'https://saukhyampads.org/cdn/shop/files/6_d1942f75-768a-4d32-bb23-666a71990a71_2048x2048.png?v=1746945194',
  },
  {
    year: '2017',
    title: 'Banana Fiber Discovery',
    desc: 'After extensive R&D, the team developed India\'s first banana fiber absorbent core — 100% chemical free, biodegradable, and antimicrobial.',
    image: null,
  },
  {
    year: '2018',
    title: 'First Production Unit',
    desc: 'Established the first manufacturing centre in Amritapuri, training rural women to handcraft reusable pads with dignity and skill.',
    image: '/Blog_Images/IMG_8023_1024x1024.webp',
  },
  {
    year: '2019',
    title: 'National Recognition',
    desc: 'Recognized by NITI Aayog as a Women Transforming India initiative. Expanded to multiple satellite centres across states.',
    image: null,
  },
  {
    year: '2020',
    title: 'Scaling Impact',
    desc: 'Reached 1 Lakh women during the pandemic. Launched online outreach and distributed starter packs to tribal communities.',
    image: '/Blog_Images/1.webp',
  },
  {
    year: '2021',
    title: 'International Stage',
    desc: 'Featured at the UN Climate Change Conference (UNFCCC) in Poland. ISO standards for reusable pads notified in India.',
    image: null,
  },
  {
    year: '2023',
    title: 'Mission Goes Global',
    desc: 'Crossed 5 Lakh users. Featured at COP28. Expanded HEAL, CARE & REACH programs to 11 states, 4,137 villages.',
    image: '/bentogrid_photo.jpeg',
  },
  {
    year: '2026',
    title: '30 Lakh Lives Changed',
    desc: 'Today, Saukhyam stands as India\'s most impactful menstrual health movement — built by women, for women, healing the planet.',
    image: null,
  },
];

const pillars = [
  { icon: Leaf, label: 'Zero Waste', desc: '100% biodegradable banana fiber & cotton', color: '#16a34a' },
  { icon: Heart, label: "Women's Health", desc: 'Chemical-free, healing periods for all', color: '#dc1464' },
  { icon: Users, label: 'Empower Makers', desc: 'Rural women earning dignified livelihoods', color: '#0d9488' },
  { icon: Globe, label: 'Climate Action', desc: 'Eliminating 125+ kg of pad waste per woman', color: '#7c3aed' },
  { icon: Shield, label: 'Toxin-Free', desc: 'No dioxins, phthalates, or bleach — ever', color: '#b45309' },
  { icon: Recycle, label: 'Circular Economy', desc: 'From agricultural waste to healing product', color: '#0284c7' },
];

const featuredPressItems = pressItems.slice(0, 6);

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>

      {/* ── CINEMATIC HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBgImage} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContainer}`}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className={styles.heroBadge}>
              <Heart size={14} />
              Our Story
            </motion.div>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Healing Periods.
              <br />
              <span className={styles.heroTitleGreen}>Healing the Planet.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Born from a vision to make menstrual hygiene safe, sustainable, and empowering —
              Saukhyam is India&apos;s first reusable pad made from banana fiber, handcrafted by rural women.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.heroStats}>
              {impactStats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className={styles.heroStat}>
                    <div className={styles.heroStatIcon}><Icon size={16} /></div>
                    <div className={styles.heroStatValue}>{s.value}</div>
                    <div className={styles.heroStatLabel}>{s.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll nudge */}
        <div className={styles.heroScroll} aria-hidden="true">
          <div className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ── AMMA'S INSPIRATION ── */}
      <section className={styles.ammaSection}>
        <div className="container">
          <div className={styles.ammaGrid}>
            <motion.div
              className={styles.ammaImageWrap}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/amma.png"
                alt="Mata Amritanandamayi (Amma) — Spiritual Guide of Saukhyam"
                className={styles.ammaImage}
                loading="lazy"
              />
              <div className={styles.ammaImageGlow} aria-hidden="true" />
            </motion.div>

            <motion.div
              className={styles.ammaText}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className={styles.sectionBadge}>
                <Sparkles size={14} />
                Inspired By
              </motion.span>
              <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
                Mata Amritanandamayi
                <span className={styles.titleUnderline} aria-hidden="true" />
              </motion.h2>
              <motion.div variants={fadeUp} className={styles.ammaQuoteBlock}>
                <Quote size={32} className={styles.ammaQuoteIcon} />
                <p className={styles.ammaQuoteText}>
                  When we take care of nature, nature takes care of us.
                </p>
                <span className={styles.ammaQuoteAuthor}>— Amma</span>
              </motion.div>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Saukhyam was born from <strong>Amma&apos;s compassionate vision</strong> — a world where every woman
                has access to safe, non-polluting menstrual care. Under her guidance, Anju Bist
                embarked on a journey that would transform the lives of millions.
              </motion.p>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Ayurarogya Saukhyam Foundation is an initiative of the{' '}
                <strong>Mata Amritanandamayi Math</strong>, part of the Amrita SeRVe project
                covering 101 model villages across 22+ states.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/programs" className={styles.linkBtn}>
                  Explore Our Programs <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className={styles.founderSection}>
        <div className="container">
          <motion.div
            className={styles.founderGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className={styles.founderTextCol}>
              <span className={styles.sectionBadgeAlt}>
                <Heart size={14} />
                The Founder
              </span>
              <h2 className={styles.sectionTitle}>
                Anju Bist —<br />
                <span className={styles.titleAccentGreen}>The Padwoman of India</span>
              </h2>
              <p className={styles.bodyText}>
                <strong>Anju Bist</strong> began as a researcher with a single question: why do the
                women she met in rural India suffer so silently every month? Disposable pads were
                too expensive, too toxic, and ending up in rivers and fields.
              </p>
              <p className={styles.bodyText}>
                After years of R&amp;D at Amritapuri Ashram, she discovered the extraordinary
                potential of <strong>banana fiber</strong> — the agricultural waste of a tree that
                bears fruit once and is then discarded. From that waste she created India&apos;s
                first banana fiber reusable sanitary napkin.
              </p>
              <p className={styles.bodyText}>
                Recognized by <strong>NITI Aayog</strong> among 75 Women Transforming India,
                Anju has turned a single pad into a movement touching 30 lakh lives.
              </p>
              <div className={styles.founderBadges}>
                <div className={styles.founderBadge}>
                  <CheckCircle2 size={16} className={styles.founderBadgeIcon} />
                  NITI Aayog — Women Transforming India
                </div>
                <div className={styles.founderBadge}>
                  <CheckCircle2 size={16} className={styles.founderBadgeIcon} />
                  Featured at UN Climate Conference
                </div>
                <div className={styles.founderBadge}>
                  <CheckCircle2 size={16} className={styles.founderBadgeIcon} />
                  Rural Healthcare Innovator of the Year 2025
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={styles.founderImageCol}
            >
              <div className={styles.founderPhotoFrame}>
                <img
                  src="/anju-bist.png"
                  alt="Anju Bist — Founder & Managing Director, Saukhyam"
                  className={styles.founderPhoto}
                  loading="lazy"
                />
                <div className={styles.founderPhotoCard}>
                  <div className={styles.founderPhotoCardName}>Anju Bist</div>
                  <div className={styles.founderPhotoCardRole}>Founder &amp; Managing Director</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT'S MADE ── */}
      <section className={styles.howMadeSection}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Leaf size={14} />
              The Innovation
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              From Banana Farm to Healing Pad
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              A zero-waste journey that transforms agricultural residue into the world&apos;s most
              natural menstrual care product.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.howMadeGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { step: '01', title: 'Banana Harvest', desc: 'Banana trees bear fruit once, then are cut down. Their fibrous trunk — normally agricultural waste — is our raw material.', img: 'https://saukhyampads.org/cdn/shop/files/6_d1942f75-768a-4d32-bb23-666a71990a71_2048x2048.png?v=1746945194' },
              { step: '02', title: 'Fiber Extraction', desc: 'The pseudostem is processed to extract long, strong fibers with natural antimicrobial pathogenesis-related proteins.', img: '/Blog_Images/IMG_8023_1024x1024.webp' },
              { step: '03', title: 'Handcrafted by Women', desc: 'Trained rural women in our satellite centres layer cotton, banana fiber, and PU to handcraft each pad with care.', img: '/Blog_Images/1.webp' },
              { step: '04', title: 'Reaches You', desc: 'Each pad lasts 2–3 years, replaces 200+ disposables, and arrives ready to heal your periods and the planet.', img: '/bentogrid_photo.jpeg' },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className={styles.howMadeCard}>
                <div className={styles.howMadeImageWrap}>
                  <img src={item.img} alt={item.title} className={styles.howMadeImage} loading="lazy" />
                  <div className={styles.howMadeStepBadge}>{item.step}</div>
                </div>
                <div className={styles.howMadeCardBody}>
                  <h3 className={styles.howMadeTitle}>{item.title}</h3>
                  <p className={styles.howMadeDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── VISION & MISSION (dark section) ── */}
      <section className={styles.visionSection}>
        <div className={styles.visionBlobA} aria-hidden="true" />
        <div className={styles.visionBlobB} aria-hidden="true" />
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className={styles.sectionBadgeLight}>
              <Target size={14} />
              Purpose &amp; Direction
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitleLight}>
              What Drives Us Every Day
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.vmCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className={styles.vmCard}>
              <div className={`${styles.vmIcon} ${styles.vmIconVision}`}>
                <Sparkles size={24} />
              </div>
              <div className={styles.vmLabel}>Our Vision</div>
              <h3 className={styles.vmHeadline}>
                Reusables providing a wholesome period experience become the first choice
                for every menstruator — everywhere.
              </h3>
              <p className={styles.vmDesc}>
                A world where no woman compromises her health due to harmful chemicals, and where
                sustainable choices are the natural, affordable default.
              </p>
              <div className={styles.vmAccent} />
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.vmCard} ${styles.vmCardMission}`}>
              <div className={`${styles.vmIcon} ${styles.vmIconMission}`}>
                <Globe size={24} />
              </div>
              <div className={styles.vmLabel}>Our Mission</div>
              <h3 className={styles.vmHeadline}>
                Combat climate change, empower women, and transform lives — through
                beautiful reusable menstrual pads.
              </h3>
              <p className={styles.vmDesc}>
                All handcrafted by rural women using India&apos;s first banana fiber absorbent
                technology, at the intersection of health, ecology, and livelihood.
              </p>
              <div className={`${styles.vmAccent} ${styles.vmAccentBlue}`} />
            </motion.div>
          </motion.div>

          {/* Pillars */}
          <motion.div
            className={styles.pillarsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.label} variants={fadeUp} className={styles.pillarCard}>
                  <div className={styles.pillarIcon} style={{ background: `${p.color}20`, color: p.color }}>
                    <Icon size={20} />
                  </div>
                  <strong className={styles.pillarLabel}>{p.label}</strong>
                  <span className={styles.pillarDesc}>{p.desc}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className={styles.timelineSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Globe size={14} />
              Our Journey
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Milestones Along the Way
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              From a single ashram in Kerala to 30 lakh lives across India — a decade of
              compassion in action.
            </motion.p>
          </motion.div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true" />

            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  className={`${styles.timelineRow} ${isLeft ? styles.timelineRowLeft : styles.timelineRowRight}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Card */}
                  <div className={styles.timelineCard}>
                    {event.image && (
                      <div className={styles.timelineCardImage}>
                        <img src={event.image} alt={event.title} loading="lazy" />
                      </div>
                    )}
                    <div className={styles.timelineCardBody}>
                      <span className={styles.timelineYear}>{event.year}</span>
                      <h3 className={styles.timelineTitle}>{event.title}</h3>
                      <p className={styles.timelineDesc}>{event.desc}</p>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className={styles.timelineDot} aria-hidden="true">
                    <div className={styles.timelineDotRing} />
                    <div className={styles.timelineDotCore} />
                  </div>

                  {/* Empty spacer opposite side */}
                  <div className={styles.timelineSpacer} aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className={styles.awardsSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Award size={14} />
              Recognition
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Awards &amp; Accolades
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              Nationally and internationally recognized for impact in women&apos;s health,
              sustainability, and rural empowerment.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.awardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {awards.map((award) => (
              <motion.div key={award.id} variants={fadeUp} className={styles.awardCard}>
                <div className={styles.awardYearBadge}>{award.year}</div>
                <div className={styles.awardIconWrap}>
                  <Trophy size={20} />
                </div>
                <h4 className={styles.awardTitle}>{award.title}</h4>
                <p className={styles.awardOrg}>{award.organization}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRESS COVERAGE ── */}
      <section className={styles.pressSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Globe size={14} />
              Media
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              As Featured In
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.pressGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {featuredPressItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                variants={fadeUp}
                className={styles.pressCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.pressCardPub}>{item.publication}</div>
                <p className={styles.pressCardTitle}>{item.title}</p>
                <span className={styles.pressCardLink}>
                  Read Article <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBlobA} aria-hidden="true" />
        <div className={styles.ctaBlobB} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className={styles.ctaTitle}>
              Join the Reusable Revolution
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.ctaDesc}>
              Every pad you buy creates a wave of change — for your health, for rural women, and for
              the planet. Be part of something bigger.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.ctaButtons}>
              <Link href="/products" className={styles.ctaBtnPrimary}>
                <ShoppingBag size={18} />
                Shop Now
              </Link>
              <Link href="/programs" className={styles.ctaBtnSecondary}>
                Our Programs
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
