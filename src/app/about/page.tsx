'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  Leaf,
  Play,
  Quote,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import { pressMentions } from '@/data/newsroom/pressMediaContent';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const STORY_VIDEO_ID = '6nFDpxCS4PA';

const heroHighlights = [
  { emoji: '🌱', label: 'Sustainable Menstrual Care' },
  { emoji: '🤝', label: 'Community-Led Impact' },
  { emoji: '💚', label: 'Health & Dignity First' },
  { emoji: '♻️', label: 'Reusable Solutions' },
  { emoji: '🏡', label: 'Rural Livelihood Creation' },
  { emoji: '🌍', label: 'Climate-Conscious Innovation' },
];

const coreValues = [
  { emoji: '🌿', title: 'Sustainable Living', desc: 'Thoughtful choices that reduce waste and protect natural resources.' },
  { emoji: '💚', title: 'Health & Wellbeing', desc: 'Menstrual care that prioritizes comfort, safety, and confidence.' },
  { emoji: '🤝', title: 'Community Impact', desc: 'Building stronger communities through education and participation.' },
  { emoji: '♻️', title: 'Circular Thinking', desc: 'Creating solutions that are designed to be reused, repaired, and valued.' },
  { emoji: '🌍', title: 'Climate Responsibility', desc: 'Reducing environmental burden through conscious consumption.' },
  { emoji: '✨', title: 'Dignity For All', desc: 'Ensuring menstrual health is approached with respect, empathy, and inclusivity.' },
];

const timelineEvents = [
  { year: '2016', title: 'The Beginning', desc: 'A vision for sustainable menstrual health begins to take shape.' },
  { year: '2017', title: 'Research & Learning', desc: 'Exploring solutions that combine health, dignity, and sustainability.' },
  { year: '2018', title: 'Building Communities', desc: 'Training programs and community engagement initiatives expand.' },
  { year: '2019', title: 'Growing Awareness', desc: 'More institutions and communities join the movement.' },
  { year: '2020', title: 'Resilience Through Change', desc: 'Continued outreach and support during challenging times.' },
  { year: '2021', title: 'Recognition & Reach', desc: 'National and international platforms acknowledge the initiative.' },
  { year: '2023', title: 'Expanding Impact', desc: 'Programs reach more communities and partnerships strengthen.' },
  { year: 'Today', title: 'A Continuing Journey', desc: 'The mission continues through education, awareness, and sustainable practices.' },
];

const featuredAwards = [
  {
    id: 'fa-1',
    title: 'Women Transforming India Award',
    organization: 'NITI Aayog',
    description: 'Honoured among transformative women leaders driving social innovation across India.',
    image: '/images/awards/niti-aayog-2021-award.png',
    href: '/media/awards',
  },
  {
    id: 'fa-2',
    title: 'Best Social Initiative on Menstrual Hygiene',
    organization: 'Annual MHM Conference',
    description: 'Recognized for scalable, community-led menstrual health programs and sustainable solutions.',
    image: '/images/awards/mhm-2022-award.png',
    href: '/media/awards',
  },
  {
    id: 'fa-3',
    title: 'Red Shakti Award',
    organization: 'Club FM 93.5 Malayalam',
    description: 'Celebrated for empowering women through awareness, dignity, and grassroots impact.',
    image: '/images/awards/red-shakti-2023.png',
    href: '/media/awards',
  },
  {
    id: 'fa-4',
    title: 'Best CSR Initiative on MHM Award',
    organization: 'MHM India Summit',
    description: 'Acknowledged for partnerships that advance menstrual hygiene through responsible corporate action.',
    image: '/images/awards/mhm-2024-award-ceremony.png',
    href: '/media/awards',
  },
  {
    id: 'fa-5',
    title: 'Sheroes Recognition',
    organization: "Kerala Women's Commission",
    description: 'Honoured for leadership in women\'s health, dignity, and community transformation.',
    image: '/images/awards/sheroes-2024-ceremony.png',
    href: '/media/awards',
  },
  {
    id: 'fa-6',
    title: 'Lokmata Ahilyabai Holkar Samman',
    organization: 'Kamala Power Women Awards',
    description: 'National recognition for meaningful contribution to menstrual health and social impact.',
    image: '/images/awards/ahilyabai-2025-stage.jpg',
    href: '/media/awards',
  },
];

const featuredPress = [
  {
    publication: 'YourStory',
    logo: '1..webp',
    mention: pressMentions.find(item => item.href.includes('yourstory.com'))!,
  },
  {
    publication: 'The New Indian Express',
    logo: '7..webp',
    mention: pressMentions.find(item => item.href.includes('newindianexpress.com'))!,
  },
  {
    publication: 'BBC Hindi',
    logo: '12..webp',
    mention: pressMentions.find(item => item.href.includes('bbc.com'))!,
  },
  {
    publication: "People's Samachar",
    logo: '23..webp',
    mention: pressMentions.find(item => item.href.includes('peoplessamachar'))!,
  },
  {
    publication: 'The CSR Journal',
    logo: '32..webp',
    mention: pressMentions.find(item => item.href.includes('thecsrjournal'))!,
  },
  {
    publication: 'EdexLive',
    logo: '35..webp',
    mention: pressMentions.find(item => item.href.includes('edexlive.com'))!,
  },
];

export default function AboutPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const scrollToJourney = () => {
    document.getElementById('our-journey')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.aboutPage}>
      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBgImage} aria-hidden="true" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroCornerPattern} aria-hidden="true" />
        <div className={styles.heroLeafFloat1} aria-hidden="true" />
        <div className={styles.heroLeafFloat2} aria-hidden="true" />

        <div className={`container ${styles.heroContainer}`}>
          <motion.div className={styles.heroInner} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className={styles.heroEyebrow}>
              🌿 Our Story
            </motion.span>

            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Healing Periods.</span>
              <span className={styles.heroTitleGradient}>Healing the Planet.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Saukhyam began with a simple belief: menstrual care should be safe for people, gentle on the planet,
              and accessible to everyone.
            </motion.p>

            <motion.p variants={fadeUp} className={styles.heroSubtitleSecondary}>
              What started as a compassionate initiative has grown into a movement that brings together communities,
              makers, educators, healthcare workers, and volunteers to reimagine menstrual health through sustainable
              solutions.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.heroCtas}>
              <button type="button" className={styles.heroBtnPrimary} onClick={scrollToJourney}>
                Explore Our Journey
                <ArrowRight size={17} aria-hidden />
              </button>
              <Link href="/programs" className={styles.heroBtnSecondary}>
                Discover Our Programs
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.heroHighlights}>
              {heroHighlights.map(item => (
                <div key={item.label} className={styles.heroHighlight}>
                  <span className={styles.heroHighlightEmoji} aria-hidden="true">{item.emoji}</span>
                  <span className={styles.heroHighlightLabel}>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Inspired by Amma */}
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
              <Image
                src="/amma.png"
                alt="Mata Amritanandamayi (Amma), Spiritual Guide of Saukhyam"
                width={400}
                height={500}
                className={styles.ammaImage}
                loading="lazy"
              />
              <div className={styles.ammaImageGlow} aria-hidden="true" />
              <span className={styles.ammaFloatLeaf1} aria-hidden="true" />
              <span className={styles.ammaFloatLeaf2} aria-hidden="true" />
            </motion.div>

            <motion.div className={styles.ammaText} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className={styles.sectionBadge}>
                <Sparkles size={14} />
                Inspired By
              </motion.span>
              <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
                Mata Amritanandamayi (Amma)
                <span className={styles.titleUnderline} aria-hidden="true" />
              </motion.h2>
              <motion.div variants={fadeUp} className={styles.ammaQuoteBlock}>
                <Quote size={32} className={styles.ammaQuoteIcon} />
                <p className={styles.ammaQuoteText}>
                  When we take care of nature, nature takes care of us.
                </p>
              </motion.div>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Saukhyam was inspired by Amma&apos;s vision of a world where health, dignity, compassion, and
                environmental responsibility go hand in hand.
              </motion.p>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Her guidance encouraged the creation of practical solutions that address everyday challenges while
                caring for both people and the planet.
              </motion.p>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Today, Saukhyam continues to carry that spirit forward through menstrual health initiatives,
                community outreach, education programs, and sustainable living practices.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Story Video */}
      <section className={styles.videoSection}>
        <div className={styles.videoSectionOverlay} aria-hidden="true" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadgeLightOnDark}>
              Experience the Saukhyam Story
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitleLight}>
              See How a Simple Idea Became a Movement
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.videoDesc}>
              See how a simple idea evolved into a movement for menstrual health, sustainability, and social change.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.videoShell}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.videoCard}>
              {!videoPlaying ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${STORY_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Saukhyam story video preview"
                    className={styles.videoThumb}
                  />
                  <button
                    type="button"
                    className={styles.videoPlayBtn}
                    onClick={() => setVideoPlaying(true)}
                    aria-label="Play Saukhyam story video"
                  >
                    <span className={styles.videoPlayRing} aria-hidden="true" />
                    <span className={styles.videoPlayInner}>
                      <Play size={28} fill="currentColor" aria-hidden="true" />
                    </span>
                  </button>
                </>
              ) : (
                <iframe
                  className={styles.videoIframe}
                  src={`https://www.youtube.com/embed/${STORY_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Experience the Saukhyam Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Who We Are */}
      <section className={styles.whoSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Globe size={14} />
              Who We Are
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              More Than A Product.
              <br />
              <span className={styles.titleAccentGreen}>A Movement For Change.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              Ayurarogya Saukhyam Foundation is an initiative of the Mata Amritanandamayi Math and works across
              communities through awareness, education, sustainable menstrual solutions, and livelihood opportunities.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.bodyText}>
              Through collaborations with schools, healthcare institutions, volunteers, self-help groups, and rural
              communities, Saukhyam seeks to create lasting change in menstrual health practices while reducing
              environmental impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 5. Team Saukhyam */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.teamGrid}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.span variants={fadeUp} className={styles.sectionBadgeAlt}>
                <Users size={14} />
                The People Behind the Mission
              </motion.span>
              <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
                Team Saukhyam
              </motion.h2>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Behind every awareness workshop, training session, reusable solution, and community initiative is a
                dedicated team working toward a shared vision.
              </motion.p>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                Researchers, artisans, educators, healthcare professionals, volunteers, and community leaders come
                together to make menstrual health safer, more sustainable, and more accessible.
              </motion.p>
              <motion.p variants={fadeUp} className={styles.bodyText}>
                This journey has never belonged to one individual. It has always been a collective effort driven by
                compassion, innovation, and service.
              </motion.p>
            </motion.div>

            <motion.div
              className={styles.teamVisual}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/bentogrid_photo.jpeg"
                alt="Saukhyam team and community members working together"
                width={640}
                height={480}
                className={styles.teamImage}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Vision & Mission */}
      <section className={styles.visionSection}>
        <div className={styles.visionBlobA} aria-hidden="true" />
        <div className={styles.visionBlobB} aria-hidden="true" />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadgeLight}>
              <Target size={14} />
              What Drives Us Every Day
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitleLight}>
              Our Vision &amp; Mission
            </motion.h2>
          </motion.div>

          <motion.div className={styles.vmCards} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className={styles.vmCard}>
              <div className={`${styles.vmIcon} ${styles.vmIconVision}`}>
                <Sparkles size={24} />
              </div>
              <div className={styles.vmLabel}>Our Vision</div>
              <p className={styles.vmHeadline}>
                A world where sustainable menstrual care becomes the natural first choice, enabling healthier lives,
                cleaner communities, and a more responsible future.
              </p>
              <div className={styles.vmAccent} />
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.vmCard} ${styles.vmCardMission}`}>
              <div className={`${styles.vmIcon} ${styles.vmIconMission}`}>
                <Globe size={24} />
              </div>
              <div className={styles.vmLabel}>Our Mission</div>
              <p className={styles.vmHeadline}>
                To create accessible reusable menstrual solutions while fostering awareness, dignity, environmental
                responsibility, and community participation.
              </p>
              <div className={`${styles.vmAccent} ${styles.vmAccentBlue}`} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 7. Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Heart size={14} />
              What We Stand For
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Core Values
            </motion.h2>
          </motion.div>

          <motion.div className={styles.valuesGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {coreValues.map(value => (
              <motion.div key={value.title} variants={fadeUp} className={styles.valueCard}>
                <span className={styles.valueEmoji} aria-hidden="true">{value.emoji}</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Journey Timeline */}
      <section id="our-journey" className={styles.timelineSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Globe size={14} />
              Our Journey
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              From Compassion To Collective Change
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              Every meaningful movement begins with a simple question: How can menstrual care become healthier, more
              sustainable, and more accessible for everyone?
            </motion.p>
            <motion.p variants={fadeUp} className={styles.bodyText}>
              What followed became a shared journey of communities, educators, makers, healthcare professionals,
              volunteers, and supporters working together to create lasting change.
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
                  <div className={styles.timelineCard}>
                    <div className={styles.timelineCardBody}>
                      <span className={styles.timelineYear}>{event.year}</span>
                      <h3 className={styles.timelineTitle}>{event.title}</h3>
                      <p className={styles.timelineDesc}>{event.desc}</p>
                    </div>
                  </div>
                  <div className={styles.timelineDot} aria-hidden="true">
                    <div className={styles.timelineDotRing} />
                    <div className={styles.timelineDotCore} />
                  </div>
                  <div className={styles.timelineSpacer} aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Recognition */}
      <section className={styles.awardsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Award size={14} />
              Recognition
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Honoured For Meaningful Impact
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              Over the years, Saukhyam&apos;s work has been recognised by leading institutions, government bodies,
              healthcare organisations, and social impact platforms.
            </motion.p>
          </motion.div>

          <motion.div className={styles.awardsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {featuredAwards.map(award => (
              <motion.div key={award.id} variants={fadeUp} className={styles.awardCard}>
                <div className={styles.awardImageWrap}>
                  <Image src={award.image} alt={award.title} width={400} height={240} className={styles.awardImage} loading="lazy" />
                </div>
                <div className={styles.awardCardBody}>
                  <div className={styles.awardIconWrap}>
                    <Trophy size={18} />
                  </div>
                  <h4 className={styles.awardTitle}>{award.title}</h4>
                  <p className={styles.awardOrg}>{award.organization}</p>
                  <p className={styles.awardDesc}>{award.description}</p>
                  <Link href={award.href} className={styles.awardLink}>
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={styles.sectionCtaWrap}>
            <Link href="/media/awards" className={styles.sectionCtaLink}>
              View All Awards &amp; Recognitions <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 10. Media & Press */}
      <section className={styles.pressSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.sectionBadge}>
              <Globe size={14} />
              Media &amp; Press
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Stories That Inspire Conversations
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionDesc}>
              Saukhyam&apos;s journey has been featured across leading national and international media platforms
              highlighting sustainability, menstrual health awareness, community-driven impact, and social innovation.
            </motion.p>
          </motion.div>

          <motion.div className={styles.pressGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {featuredPress.map(item => (
              <motion.a
                key={item.publication}
                href={item.mention.href}
                variants={fadeUp}
                className={styles.pressCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.pressLogoWrap}>
                  <Image
                    src={`/Press_And_Media/${item.logo}`}
                    alt={`${item.publication} logo`}
                    width={120}
                    height={48}
                    className={styles.pressLogo}
                    loading="lazy"
                  />
                </div>
                <div className={styles.pressCardPub}>{item.publication}</div>
                <p className={styles.pressCardTitle}>{item.mention.title}</p>
                <p className={styles.pressCardSummary}>{item.mention.excerpt}</p>
                <span className={styles.pressCardLink}>
                  Read Story <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={styles.sectionCtaWrap}>
            <Link href="/media" className={styles.sectionCtaLink}>
              Explore Media &amp; Press Coverage <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 11. Join the Movement CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBlobA} aria-hidden="true" />
        <div className={styles.ctaBlobB} aria-hidden="true" />
        <div className="container">
          <motion.div className={styles.ctaContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.ctaEyebrow}>
              Join the Movement
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.ctaTitle}>
              Small Choices.
              <br />
              Lasting Change.
            </motion.h2>
            <motion.div variants={fadeUp} className={styles.ctaLines}>
              <p>Menstrual health is not just about products.</p>
              <p>It is about dignity.</p>
              <p>It is about education.</p>
              <p>It is about sustainability.</p>
              <p>It is about collective responsibility.</p>
            </motion.div>
            <motion.p variants={fadeUp} className={styles.ctaDesc}>
              Together, we can create healthier communities, reduce waste, and build a future where sustainable
              menstrual care is accessible to all.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.ctaButtons}>
              <Link href="/programs" className={styles.ctaBtnPrimary}>
                Explore Our Programs
              </Link>
              <Link href="/contact" className={styles.ctaBtnSecondary}>
                Get Involved
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
