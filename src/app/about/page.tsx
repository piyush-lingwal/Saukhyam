'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Check,
  Factory,
  FlaskConical,
  Globe,
  GraduationCap,
  HandHelping,
  Handshake,
  Heart,
  Leaf,
  Lightbulb,
  Megaphone,
  Play,
  Quote,
  Recycle,
  Shield,
  Sparkles,
  ShoppingBag,
  Target,
  TrendingUp,
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

const heroImpactCards = [
  {
    icon: Heart,
    title: 'Menstrual Health & Dignity',
    desc: 'Supporting safe, comfortable, and informed menstrual care.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Living',
    desc: 'Encouraging reusable choices that reduce environmental impact.',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    desc: 'Building awareness through education and grassroots engagement.',
  },
  {
    icon: HandHelping,
    title: 'Rural Livelihoods',
    desc: 'Creating meaningful livelihood opportunities through local production.',
  },
  {
    icon: Globe,
    title: 'Climate Responsibility',
    desc: 'Promoting practices that help reduce menstrual waste.',
  },
  {
    icon: Lightbulb,
    title: 'Social Innovation',
    desc: 'Developing practical solutions that combine health, sustainability, and accessibility.',
  },
];

const storyMilestones = [
  {
    step: '01',
    title: 'Inspired by Compassion',
    desc: "Guided by Amma's vision, Saukhyam was founded on the belief that health, dignity, and care should be accessible to all.",
  },
  {
    step: '02',
    title: 'Building Awareness',
    desc: 'Through education and community engagement, conversations around menstrual health began reaching more homes, schools, and communities.',
  },
  {
    step: '03',
    title: 'Creating Sustainable Choices',
    desc: 'The initiative expanded reusable menstrual solutions that support both personal wellbeing and environmental responsibility.',
  },
  {
    step: '04',
    title: 'Strengthening Communities',
    desc: 'Training, outreach, and local participation created opportunities for shared learning and collective action.',
  },
  {
    step: '05',
    title: 'Growing a Movement',
    desc: 'What began as a small initiative evolved into a wider movement supported by volunteers, educators, healthcare professionals, and communities.',
  },
  {
    step: '06',
    title: 'Looking Ahead',
    desc: 'Saukhyam continues to work toward a future where sustainable menstrual care becomes a natural and accessible choice for everyone.',
  },
];

const coreValues = [
  {
    icon: Leaf,
    title: 'Sustainable Living',
    desc: 'Encouraging responsible choices that help protect natural resources and reduce environmental impact.',
    color: '#16a34a',
  },
  {
    icon: Heart,
    title: 'Health & Wellbeing',
    desc: 'Supporting menstrual care solutions that prioritize comfort, safety, and confidence.',
    color: '#0d9488',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    desc: 'Creating opportunities for awareness, learning, and meaningful participation.',
    color: '#2563eb',
  },
  {
    icon: Sparkles,
    title: 'Circular Innovation',
    desc: 'Promoting reusable and sustainable practices that encourage long-term positive change.',
    color: '#7c3aed',
  },
  {
    icon: Globe,
    title: 'Environmental Responsibility',
    desc: 'Working toward a future where everyday choices contribute to a healthier planet.',
    color: '#0284c7',
  },
  {
    icon: HandHelping,
    title: 'Dignity & Inclusion',
    desc: 'Ensuring menstrual health is approached with respect, empathy, accessibility, and understanding.',
    color: '#b45309',
  },
];

const timelineEvents = [
  {
    year: '2014',
    title: 'The Beginning of Research & Innovation',
    desc: 'Saukhyam began as a research project at Amrita University, supported by the Department of Science and Technology, Government of India. The mission was to discover an eco-friendly absorbent material that could replace tree-based cellulose used in sanitary products.',
    highlights: [
      'Research on sustainable menstrual materials began',
      'Banana fiber identified as a natural absorbent solution',
      'Focus on health, environment, and dignity',
    ],
    icon: FlaskConical,
    image: {
      src: '/images/about/amrita-university-research.png',
      alt: 'Amrita Vishwa Vidyapeetham, where Saukhyam began as a research project on sustainable menstrual materials',
    },
  },
  {
    year: '2016',
    title: 'Launching Sustainable Reusable Pads',
    desc: 'The first reusable menstrual pads were launched, creating a healthier and more sustainable alternative for menstruators.',
    highlights: [
      'Introduction of reusable cloth-based pads',
      'Focus on affordable and eco-conscious menstrual care',
    ],
    icon: Recycle,
    image: {
      src: '/images/about/mission-pads.png',
      alt: 'Reusable menstrual pads promoting sustainable lifestyle choices',
    },
  },
  {
    year: '2017',
    title: "World's First Banana Fiber Reusable Pads",
    desc: 'Saukhyam introduced reusable pads made using banana fiber, an agro-waste material, creating a revolutionary approach to sustainable menstrual health.',
    highlights: [
      'First reusable menstrual pads using banana fiber',
      'SHG groups trained in Uttar Pradesh and Telangana',
      'Women empowered through sustainable livelihoods',
    ],
    icon: Factory,
    image: {
      src: '/images/factory/manufacturing-hub-team.png',
      alt: 'Rural women working on banana fiber processing and handmade production',
    },
  },
  {
    year: '2018',
    title: 'Building Community Networks',
    desc: 'Community training, awareness programs, and production networks expanded to make sustainable menstrual care accessible.',
    highlights: ['Awareness workshops', 'Community participation', 'Women-led production'],
    icon: Users,
  },
  {
    year: '2019',
    title: 'Growing Awareness & Outreach',
    desc: 'More communities, institutions, and partners joined the movement to promote reusable menstrual solutions.',
    highlights: ['Expanding reach', 'Increasing menstrual health awareness'],
    icon: Megaphone,
  },
  {
    year: '2020',
    title: 'Resilience During COVID-19',
    desc: 'During the pandemic, production centers faced temporary challenges. The journey continued by rebuilding systems and strengthening local production models.',
    highlights: ['Production restarted in Kerala', 'Development of hub-and-spoke production model'],
    icon: Shield,
    image: {
      src: '/images/blog/musaharCommunity.jpg',
      alt: 'Community support and women groups rebuilding together',
    },
  },
  {
    year: '2021',
    title: 'Scaling Impact Through Partnerships',
    desc: 'Saukhyam Foundation was established and began collaborations with state governments and rural livelihood missions to expand production and distribution.',
    highlights: [
      'Partnerships with Madhya Pradesh, Uttarakhand, Karnataka, Telangana, and Kerala',
      'Larger production facilities developed',
      'Reusable pad standards introduced',
    ],
    icon: Handshake,
    image: {
      src: '/images/awards/niti-aayog-2021-stage.png',
      alt: 'Government partnerships and expanded production facilities',
    },
  },
  {
    year: '2022 – 2023',
    title: 'Expanding Sustainable Menstrual Care',
    desc: 'Production networks expanded, reaching more rural communities through government partnerships and local initiatives.',
    highlights: [
      'Rural distribution and awareness programs',
      'Subsidized access for communities where affordability remained a challenge',
    ],
    icon: TrendingUp,
    image: {
      src: '/images/blog/li-23-reach-distribution.png',
      alt: 'Rural distribution and community outreach programs',
    },
  },
  {
    year: '2024',
    title: 'New Initiatives: REACH, CARE & HEAL',
    desc: 'New initiatives focused on adolescent health, period education, and solving menstrual health challenges.',
    highlights: ['REACH', 'CARE', 'HEAL Challenge', 'Period awareness programs'],
    icon: GraduationCap,
    image: {
      src: '/images/blog/li-17-reach-hall.png',
      alt: 'Students participating in education and awareness workshops',
    },
  },
  {
    year: '2025 – Today',
    title: 'A Continuing Journey',
    desc: 'From research to a global movement, Saukhyam continues working towards sustainable menstrual care, women\'s empowerment, and a zero-waste future.',
    highlights: ['Sustainable menstrual solutions', 'Community empowerment', 'Climate responsibility'],
    icon: Globe,
    image: {
      src: '/images/about/vision-community.png',
      alt: 'Community members united in the sustainable menstrual care movement',
    },
    closingMessage:
      'Together, we continue creating healthier lives, cleaner communities, and a more responsible future.',
  },
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

        <div className={`container ${styles.heroContainer}`}>
          <motion.div className={styles.heroInner} initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className={styles.heroBadge}>
              Our Story
            </motion.span>

            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Healing Periods.</span>
              <span className={styles.heroTitleGradient}>Healing the Planet.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.heroSubtitle}>
              Born from a vision to make menstrual hygiene safe, sustainable, and empowering, Saukhyam creates
              reusable menstrual solutions that support healthier lives, stronger communities, and a cleaner planet.
            </motion.p>

            <motion.p variants={fadeUp} className={styles.heroSubtitleSecondary}>
              Guided by compassion and driven by purpose, Saukhyam works at the intersection of menstrual health,
              sustainability, education, and community wellbeing.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.heroImpactGrid}>
              {heroImpactCards.map(card => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className={styles.heroImpactCard}>
                    <div className={styles.heroImpactIcon}>
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className={styles.heroImpactTitle}>{card.title}</h3>
                    <p className={styles.heroImpactDesc}>{card.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.heroScroll} aria-hidden="true">
          <div className={styles.heroScrollDot} />
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

      {/* 3. Split-screen Story + Video */}
      <section className={styles.splitStorySection}>
        <div className={styles.splitStoryBg} aria-hidden="true" />
        <div className={`container ${styles.splitStoryContainer}`}>
          <div className={styles.splitStoryGrid}>
            <motion.div
              className={styles.splitStoryVideoCol}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className={styles.splitVideoCard} whileHover={{ y: -4 }} transition={{ duration: 0.35 }}>
                {!videoPlaying ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${STORY_VIDEO_ID}/maxresdefault.jpg`}
                      alt="Saukhyam story video preview"
                      className={styles.splitVideoThumb}
                    />
                    <button
                      type="button"
                      className={styles.splitVideoPlayBtn}
                      onClick={() => setVideoPlaying(true)}
                      aria-label="Play Saukhyam story video"
                    >
                      <span className={styles.splitVideoPlayRing} aria-hidden="true" />
                      <span className={styles.splitVideoPlayInner}>
                        <Play size={26} fill="currentColor" aria-hidden="true" />
                      </span>
                    </button>
                  </>
                ) : (
                  <iframe
                    className={styles.splitVideoIframe}
                    src={`https://www.youtube.com/embed/${STORY_VIDEO_ID}?autoplay=1&rel=0`}
                    title="Experience the Saukhyam Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </motion.div>

              <p className={styles.splitVideoCaption}>
                See how a simple idea grew into a movement for sustainable menstrual care.
              </p>

              <div className={styles.splitStoryCtas}>
                <button type="button" className={styles.splitBtnPrimary} onClick={scrollToJourney}>
                  Explore Our Journey
                  <ArrowRight size={16} aria-hidden />
                </button>
                <Link href="/programs" className={styles.splitBtnSecondary}>
                  Discover Our Programs
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.splitStoryContentCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className={styles.splitStoryLabel}>
                The Journey
              </motion.span>
              <motion.h2 variants={fadeUp} className={styles.splitStoryTitle}>
                Milestones Along the Way
              </motion.h2>

              <div className={styles.storyMilestoneList}>
                {storyMilestones.map((item, index) => (
                  <motion.div
                    key={item.step}
                    className={styles.storyMilestoneItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.storyMilestoneMarker}>
                      <span className={styles.storyMilestoneStep}>{item.step}</span>
                      {index < storyMilestones.length - 1 && (
                        <span className={styles.storyMilestoneLine} aria-hidden="true" />
                      )}
                    </div>
                    <div className={styles.storyMilestoneBody}>
                      <h3 className={styles.storyMilestoneTitle}>{item.title}</h3>
                      <p className={styles.storyMilestoneDesc}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.blockquote variants={fadeUp} className={styles.storyQuoteCard}>
                <Quote size={22} className={styles.storyQuoteIcon} aria-hidden="true" />
                <p>
                  Every sustainable choice begins with care—for ourselves, for others, and for the planet.
                </p>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      <div className={styles.sectionBridge} aria-hidden="true" />

      {/* 4. Vision & Mission */}
      <section className={styles.visionSection}>
        <div className={styles.visionBlobA} aria-hidden="true" />
        <div className={styles.visionBlobB} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.visionSectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className={styles.sectionBadgeLight}>
              <Target size={14} />
              Purpose &amp; Direction
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.visionSectionTitle}>
              What Drives Us Every Day
            </motion.h2>
          </motion.div>

          <div className={styles.vmBlocks}>
            <motion.article
              className={styles.vmBlock}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.vmBlockContent}>
                <h3 className={styles.vmBlockHeading}>
                  <Sparkles size={22} className={styles.vmBlockHeadingIcon} aria-hidden="true" />
                  Our Vision
                </h3>
                <p className={styles.vmBlockText}>
                  A world where sustainable menstrual care becomes the natural first choice, enabling healthier lives,
                  cleaner communities, and a more responsible future.
                </p>
                <p className={styles.vmBlockHighlight}>
                  Reusables providing a much more wholesome period experience become the first choice for menstruators
                  everywhere.
                </p>
              </div>
              <div className={styles.vmBlockImageWrap}>
                <Image
                  src="/images/about/vision-community.png"
                  alt="Women learning about sustainable reusable menstrual care together outdoors"
                  width={640}
                  height={480}
                  className={styles.vmBlockImage}
                  loading="lazy"
                />
              </div>
            </motion.article>

            <motion.article
              className={`${styles.vmBlock} ${styles.vmBlockMission}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.vmBlockContent}>
                <h3 className={styles.vmBlockHeading}>
                  <Globe size={22} className={styles.vmBlockHeadingIcon} aria-hidden="true" />
                  Our Mission
                </h3>
                <p className={styles.vmBlockText}>
                  To create accessible reusable menstrual solutions while fostering awareness, dignity, environmental
                  responsibility, and community participation.
                </p>
                <p className={styles.vmBlockHighlight}>
                  Combat climate change, support zero-waste, empower women, and transform lives — all through our
                  beautiful reusable menstrual pads.
                </p>
              </div>
              <div className={styles.vmBlockImageWrap}>
                <Image
                  src="/images/about/mission-pads.png"
                  alt="Handcrafted reusable menstrual pads made with natural materials and care"
                  width={640}
                  height={480}
                  className={styles.vmBlockImage}
                  loading="lazy"
                />
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className={styles.valuesLabel}>
              Our Values
            </motion.span>
            <motion.h2 variants={fadeUp} className={styles.valuesTitle}>
              What We Stand For
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.valuesSubheading}>
              The principles that guide every initiative, partnership, and action at Saukhyam.
            </motion.p>
          </motion.div>

          <motion.div className={styles.valuesGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {coreValues.map(value => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={fadeUp} className={styles.valueCard}>
                  <div className={styles.valueIconWrap} style={{ color: value.color, borderColor: `${value.color}30`, background: `${value.color}12` }}>
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 7. Journey Timeline */}
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
          </motion.div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true" />
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.year}
                  className={`${styles.timelineRow} ${isLeft ? styles.timelineRowLeft : styles.timelineRowRight}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 24 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.timelineCard}>
                    {event.image ? (
                      <div className={styles.timelineCardImage}>
                        <Image
                          src={event.image.src}
                          alt={event.image.alt}
                          width={640}
                          height={280}
                          loading="lazy"
                        />
                        {Icon && (
                          <div className={styles.timelineCardImageBadge} aria-hidden="true">
                            <Icon size={18} strokeWidth={1.75} />
                          </div>
                        )}
                      </div>
                    ) : Icon ? (
                      <div className={styles.timelineIconVisual} aria-hidden="true">
                        <Icon size={36} strokeWidth={1.5} />
                      </div>
                    ) : null}
                    <div className={styles.timelineCardBody}>
                      <span className={styles.timelineYear}>{event.year}</span>
                      <h3 className={styles.timelineTitle}>{event.title}</h3>
                      <p className={styles.timelineDesc}>{event.desc}</p>
                      {event.highlights.length > 0 && (
                        <ul className={styles.timelineHighlights}>
                          {event.highlights.map(highlight => (
                            <li key={highlight} className={styles.timelineHighlightItem}>
                              <Check size={14} className={styles.timelineHighlightIcon} aria-hidden="true" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                      {event.counters && event.counters.length > 0 && (
                        <div className={styles.timelineCounters}>
                          {event.counters.map(counter => (
                            <div key={counter.label} className={styles.timelineCounter}>
                              <span className={styles.timelineCounterValue}>{counter.value}</span>
                              <span className={styles.timelineCounterLabel}>{counter.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {event.closingMessage && (
                        <p className={styles.timelineClosing}>{event.closingMessage}</p>
                      )}
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

      {/* 8. Recognition */}
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

      {/* 9. Media & Press */}
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

      {/* 10. CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBlobA} aria-hidden="true" />
        <div className={styles.ctaBlobB} aria-hidden="true" />
        <div className="container">
          <motion.div className={styles.ctaContent} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className={styles.ctaTitle}>
              Join the Reusable Revolution
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.ctaDesc}>
              Every pad you buy creates a wave of change, for your health, for rural women, and for the planet.
              Be part of something bigger.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.ctaButtons}>
              <Link href="/products" className={styles.ctaBtnPrimary}>
                <ShoppingBag size={18} aria-hidden />
                Switch Now
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
