'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Newspaper,
  ExternalLink,
  ArrowRight,
  Heart,
  Globe,
  Star,
  Users,
  ChevronRight,
  CalendarDays,
  Award,
  Building2,
  Tag,
} from 'lucide-react';
import { pressItems } from '@/data/content';
import styles from './page.module.css';

/* ─────────────────────────────────────────────
   AWARDS TIMELINE DATA
   Add future years by inserting a new key here.
───────────────────────────────────────────── */
type AwardImage = { src: string; alt: string; featured?: boolean; contain?: boolean };
type AwardDetails = { label: string; value: string };
type AwardEntry = {
  title: string;
  organization: string;
  category: string;
  description: string;
  images: AwardImage[];
  details: AwardDetails[];
};
type AwardsTimeline = Record<string, AwardEntry[]>;

const awardsTimeline: AwardsTimeline = {
  '2016': [
    {
      title: 'Most Innovative Product Award',
      organization: 'National Institute of Rural Development, India',
      category: 'Innovation & Rural Development',
      description:
        'Saukhyam was honoured with the Most Innovative Product recognition at NIRD for pioneering a banana fiber based absorbent pad — a first in sustainable menstrual hygiene from rural India.',
      images: [
        { src: '/images/awards/placeholder-2016.jpg', alt: 'NIRD Innovation Award 2016', featured: true },
      ],
      details: [
        { label: 'Organization', value: 'National Institute of Rural Development' },
        { label: 'Year', value: '2016' },
        { label: 'Category', value: 'Innovative Product Award' },
      ],
    },
  ],
  '2017': [],
  '2018': [
    {
      title: 'Lauded at UN Climate Change Conference',
      organization: 'UNFCCC, Poland',
      category: 'Global Climate Impact',
      description:
        'Saukhyam was recognized at the United Nations Climate Change Conference in Poland for its climate-positive approach to menstrual hygiene — turning post-harvest banana waste into reusable menstrual care.',
      images: [
        { src: '/images/awards/placeholder-2018.jpg', alt: 'UN Climate Conference 2018', featured: true },
      ],
      details: [
        { label: 'Organization', value: 'UNFCCC — United Nations' },
        { label: 'Year', value: '2018' },
        { label: 'Category', value: 'Climate-Positive Innovation' },
        { label: 'Location', value: 'Poland' },
      ],
    },
  ],
  '2020': [
    {
      title: 'Top 10 Finalist — Climate Launchpad',
      organization: "World's Largest Green Business Competition",
      category: 'Global Green Business',
      description:
        'Among thousands of green businesses worldwide, Saukhyam earned its place among the Top 10 Finalists at Climate Launchpad — the world\'s largest green business competition — for its measurable impact on menstrual waste reduction.',
      images: [
        { src: '/images/awards/placeholder-2020a.jpg', alt: 'Climate Launchpad 2020', featured: true },
      ],
      details: [
        { label: 'Organization', value: "World's Largest Green Business Competition" },
        { label: 'Year', value: '2020' },
        { label: 'Category', value: 'Top 10 Global Green Business' },
      ],
    },
    {
      title: 'Social Enterprise of the Year',
      organization: 'Women for India & Social Founder Network',
      category: 'Social Enterprise',
      description:
        'Recognized for outstanding social impact and women-led enterprise model, Saukhyam received the Social Enterprise of the Year award from Women for India and the Social Founder Network.',
      images: [
        { src: '/images/awards/placeholder-2020b.jpg', alt: 'Social Enterprise Award 2020', featured: true },
      ],
      details: [
        { label: 'Organization', value: 'Women for India & Social Founder Network' },
        { label: 'Year', value: '2020' },
        { label: 'Category', value: 'Social Enterprise of the Year' },
      ],
    },
  ],
  '2021': [
    {
      title: 'Women Transforming India Award',
      organization: 'NITI Aayog, Government of India',
      category: 'Women Transforming India',
      description:
        'Saukhyam received the Women Transforming India Award in recognition of its contribution toward women-led innovation, sustainable menstrual healthcare, and social impact. Anju Bist was honoured among 75 transformative women across India at the award organized by NITI Aayog during Azadi ka Amrit Mahotsav — celebrating 75 years of India\'s independence.',
      images: [
        {
          src: '/images/awards/niti-aayog-2021-award.png',
          alt: 'Anju Bist receiving the Women Transforming India Award — NITI Aayog 2021',
          featured: true,
        },
        {
          src: '/images/awards/niti-aayog-2021-stage.png',
          alt: 'Anju Bist speaking at the Women Transforming India 2021 event — NITI Aayog stage',
          featured: false,
        },
        {
          src: '/images/awards/niti-aayog-group.png',
          alt: 'Anju Bist with Navy officers at the Women Transforming India event',
          featured: false,
        },
      ],
      details: [
        { label: 'Organization', value: 'NITI Aayog, Govt. of India' },
        { label: 'Year', value: '2021' },
        { label: 'Recognition', value: 'Women Transforming India Award' },
        { label: 'Event', value: 'Azadi ka Amrit Mahotsav' },
      ],
    },
  ],
  '2022': [
    {
      title: 'Best Social Initiative on Menstrual Hygiene',
      organization: 'Annual MHM Conference, New Delhi',
      category: 'Menstrual Hygiene Management',
      description:
        'Saukhyam was awarded the Best Social Initiative on Menstrual Hygiene at the Annual MHM Conference held in New Delhi — recognizing its scalable, nature-based approach to menstrual health and its direct impact in rural and semi-urban communities.',
      images: [
        {
          src: '/images/awards/mhm-2022-award.png',
          alt: 'Anju Bist receiving the Best Social Initiative on Menstrual Hygiene award at the Annual MHM India Summit',
          featured: true,
        },
      ],
      details: [
        { label: 'Organization', value: 'Annual MHM Conference' },
        { label: 'Year', value: '2022' },
        { label: 'Category', value: 'Best Social Initiative' },
        { label: 'Location', value: 'New Delhi' },
      ],
    },
  ],
  '2023': [
    {
      title: 'Red Shakti Award',
      organization: 'Radio FM 93.5 Malayalam',
      category: 'Women Empowerment',
      description:
        'Saukhyam received the Red Shakti Award in 2023 in recognition of its contribution toward women\'s empowerment, sustainable menstrual health innovation, and community impact. The award, presented by Radio FM 93.5 Malayalam, celebrates changemakers who uplift women through purpose-driven work.',
      images: [
        {
          src: '/images/awards/red-shakti-2023.png',
          alt: 'Saukhyam team at the Red Shakti Award ceremony — Radio FM 93.5 Malayalam',
          featured: true,
        },
      ],
      details: [
        { label: 'Organization', value: 'Radio FM 93.5 Malayalam' },
        { label: 'Year', value: '2023' },
        { label: 'Award', value: 'Red Shakti Award' },
      ],
    },
  ],
  '2024': [
    {
      title: 'Best CSR Initiative on MHM Award',
      organization: '4th MHM India Summit 2024 — Gramalaya, Tiruchirappalli',
      category: 'Menstrual Health & Sustainability',
      description:
        'Saukhyam was awarded the Best CSR Initiative on Menstrual Hygiene Management at the 4th MHM India Summit 2024 — the largest conclave of Menstrual Hygiene Management in India, organized by Gramalaya, Tiruchirappalli. This recognition reflects Saukhyam\'s continued contribution toward menstrual health awareness, reusable care solutions, and women-centered sustainable innovation.',
      images: [
        {
          src: '/images/awards/mhm-2024-award-ceremony.png',
          alt: 'Saukhyam receiving Best CSR Initiative on MHM Award at the 4th MHM India Summit 2024',
          featured: true,
        },
        {
          src: '/images/awards/mhm-2024-group.png',
          alt: 'Group photo at 4th MHM India Summit 2024',
          featured: false,
        },
        {
          src: '/images/awards/mhm-2024-ambassadors.png',
          alt: 'MHM Goodwill Ambassadors 2024 at the Summit',
          featured: false,
        },
      ],
      details: [
        { label: 'Event', value: '4th MHM India Summit 2024' },
        { label: 'Year', value: '2024' },
        { label: 'Category', value: 'Best CSR Initiative on MHM' },
        { label: 'Organized by', value: 'Gramalaya, Tiruchirappalli' },
      ],
    },
    {
      title: 'Sheroes Recognition 2024',
      organization: 'Women Commission Kerala — Sheroes Summit & Awards',
      category: 'Best Green Initiative — Personal Hygiene',
      description:
        'Saukhyam was recognized at the Sheroes Summit & Sheroes Awards 2024 in Thiruvananthapuram for its meaningful contribution toward women-led social impact, sustainable innovation, and menstrual health awareness. The recognition was awarded under the Best Green Initiative — Personal Hygiene category, celebrating Saukhyam\'s commitment to eco-conscious menstrual care.',
      images: [
        {
          src: '/images/awards/sheroes-2024-ceremony.png',
          alt: 'Saukhyam receiving Sheroes Award 2024 — Best Green Initiative, Personal Hygiene',
          featured: true,
        },
        {
          src: '/images/awards/sheroes-2024-group.png',
          alt: 'Group on stage at Sheroes Summit & Awards 2024, Hotel SP Grand Days, Thiruvananthapuram',
          featured: false,
        },
        {
          src: '/images/awards/sheroes-2024-stall.png',
          alt: 'Saukhyam product showcase at Sheroes Summit 2024',
          featured: false,
        },
      ],
      details: [
        { label: 'Organization', value: "Women Commission Kerala" },
        { label: 'Year', value: '2024' },
        { label: 'Recognition', value: 'Sheroes 2024' },
        { label: 'Category', value: 'Best Green Initiative — Personal Hygiene' },
        { label: 'Venue', value: 'Hotel SP Grand Days, Thiruvananthapuram' },
      ],
    },
  ],
  '2025': [
    {
      title: 'Lokmata Ahilyabai Holkar Samman',
      organization: 'Kamala Power Women Awards 4.0',
      category: "Women's Health & Social Impact",
      description:
        "Saukhyam received the Lokmata Ahilyabai Holkar Samman in 2025 in recognition of its contribution toward women's welfare, sustainable innovation, and social impact. Presented at the Kamala Power Women Awards 4.0 by the Minister of State for Health and Family Welfare, this honour acknowledges Saukhyam's role in transforming menstrual health access across India.",
      images: [
        {
          src: '/images/awards/ahilyabai-2025-ceremony.png',
          alt: 'Saukhyam receiving the Lokmata Ahilyabai Holkar Mahila Samman — Kamala Power Women Awards 4.0',
          featured: true,
        },
        {
          src: '/images/awards/ahilyabai-2025-stage.jpg',
          alt: 'Award presentation on stage — Lokmata Ahilyabai Holkar Mahila Samman 2025',
          featured: false,
        },
      ],
      details: [
        { label: 'Presented By', value: 'Minister of State for Health and Family Welfare' },
        { label: 'Year', value: '2025' },
        { label: 'Recognition', value: 'Lokmata Ahilyabai Holkar Samman' },
      ],
    },
    {
      title: 'Amara Raja Better Way Award for Women Employment',
      organization: 'The Amara Raja Better Way Awards 2025',
      category: 'Women Employment & Social Impact',
      description:
        'Ayurarogya Saukhyam Foundation was named Winner of the Amara Raja Better Way Award for Women Employment at The Amara Raja Better Way Awards 2025 — recognizing Saukhyam\'s commitment to creating sustainable livelihoods for women through banana fiber craftsmanship and menstrual care innovation.',
      images: [
        {
          src: '/images/awards/amara-raja-2025-stage.png',
          alt: 'Saukhyam Foundation receiving the Amara Raja Better Way Award for Women Employment on stage at the Amara Raja Better Way Awards 2025',
          featured: true,
          contain: true,
        },
      ],
      details: [
        { label: 'Award', value: 'Amara Raja Better Way Award' },
        { label: 'Category', value: 'Women Employment' },
        { label: 'Recipient', value: 'Ayurarogya Saukhyam Foundation' },
        { label: 'Year', value: '2025' },
      ],
    },
    {
      title: 'Fifth MHM India Summit 2025',
      organization: 'Gramalaya — Hotel Shangri-La Eros, New Delhi',
      category: 'Menstrual Health & Hygiene Management',
      description:
        'Saukhyam participated in and was recognized during the Fifth MHM India Summit 2025 — the largest conclave on Menstrual Hygiene Management, held at Hotel Shangri-La Eros, New Delhi on 21st November 2025. The summit, organized by Gramalaya and supported by the Ministry of Jal Shakti, highlighted Saukhyam\'s continued contribution toward menstrual health awareness, sustainable period care, and community impact across India.',
      images: [
        {
          src: '/images/awards/mhm5-2025-awards.png',
          alt: 'Saukhyam team receiving recognition at the Fifth MHM India Summit 2025 with medallions on stage',
          featured: true,
        },
        {
          src: '/images/awards/mhm5-2025-group.png',
          alt: 'Group photo at Fifth MHM India Summit 2025 — Hotel Shangri-La Eros, New Delhi',
          featured: false,
        },
        {
          src: '/images/awards/mhm5-2025-stall.png',
          alt: 'Saukhyam product showcase stall at Fifth MHM India Summit 2025',
          featured: false,
        },
      ],
      details: [
        { label: 'Event', value: 'Fifth MHM India Summit 2025' },
        { label: 'Year', value: '2025' },
        { label: 'Focus', value: 'Menstrual Health & Hygiene' },
        { label: 'Venue', value: 'Hotel Shangri-La Eros, New Delhi' },
        { label: 'Date', value: '21st November 2025' },
      ],
    },
    {
      title: 'Rural Healthcare Organization of the Year',
      organization: 'Uttarakhand Healthcare Innovation Summit & Awards 2025',
      category: 'Healthcare Heroes Award 2025',
      description:
        'Ayurarogya Saukhyam Foundation received the Healthcare Heroes Award 2025 for Rural Healthcare Organization of the Year at the Uttarakhand Healthcare Innovation Summit & Awards — held on 28th February 2025 at Hyatt Centric, Dehradun, Uttarakhand. Organized by Velox Media and powered by Apulki, this recognition celebrates Saukhyam\'s sustained work in making sustainable menstrual care accessible to rural communities across India.',
      images: [
        {
          src: '/images/awards/uttarakhand-2025-stage.png',
          alt: 'Anju Bist receiving the Healthcare Heroes Award at Uttarakhand Healthcare Innovation Summit 2025, Dehradun — Rural Healthcare Organization of the Year',
          featured: true,
        },
        {
          src: '/images/awards/uttarakhand-2025-certificate.png',
          alt: 'Healthcare Heroes Award 2025 certificate — Rural Healthcare Organization of the Year, Ayurarogya Saukhyam Foundation',
          featured: false,
          contain: true,
        },
      ],
      details: [
        { label: 'Award', value: 'Healthcare Heroes Award 2025' },
        { label: 'Category', value: 'Rural Healthcare Organization of the Year' },
        { label: 'Event', value: 'Uttarakhand Healthcare Innovation Summit' },
        { label: 'Date', value: '28th February 2025, Dehradun' },
      ],
    },
  ],
  '2026': [
    {
      title: 'Haridwar Rotary Matrch — Shreyas Award',
      organization: 'Rotary District Conference 2026',
      category: 'Community & Social Impact',
      description:
        "Saukhyam received the Shreyas Award at the Haridwar Rotary Matrch 2026 for its continued efforts in sustainable menstrual care, women's empowerment, and community-driven impact. The recognition, presented at the Rotary District Conference, acknowledges Saukhyam's role as a model of grassroots social innovation led by women, for women.",
      images: [
        {
          src: '/images/awards/rotary-2026-ceremony.png',
          alt: 'Anju Bist, Managing Director of Saukhyam Foundation, receiving the Shreyas Award at Haridwar Rotary Matrch 2026',
          featured: true,
        },
        {
          src: '/images/awards/rotary-2026-group.png',
          alt: 'Group photo at the Shreyas Awards Presentation — Rotary District Conference 2026',
          featured: false,
        },
      ],
      details: [
        { label: 'Recognition', value: 'Shreyas Award — Haridwar Rotary Matrch' },
        { label: 'Year', value: '2026' },
        { label: 'Focus', value: 'Community & Social Impact' },
        { label: 'Presented to', value: 'Ms. Anju Bist, Managing Director, Saukhyam Foundation' },
      ],
    },
    {
      title: 'SHE Awards 2026',
      organization: 'SHE Awards — International Women\'s Day 2026',
      category: 'Women\'s Empowerment & Social Impact',
      description:
        "Saukhyam was honored at the SHE Awards 2026 during International Women's Day celebrations, recognizing its continued contribution toward women's empowerment, sustainable menstrual health innovation, and meaningful social impact. The SHE Awards — Symbol of Her Excellence — celebrate extraordinary women changemakers across India.",
      images: [
        {
          src: '/images/awards/she-2026-ceremony.png',
          alt: 'Saukhyam receiving the SHE Award at International Women\'s Day 2026',
          featured: true,
        },
        {
          src: '/images/awards/she-2026-group.png',
          alt: 'Group photo of SHE Awards 2026 recipients — International Women\'s Day celebration',
          featured: false,
        },
        {
          src: '/images/awards/she-2026-trophies.png',
          alt: 'SHE Awards 2026 trophies on display',
          featured: false,
        },
      ],
      details: [
        { label: 'Recognition', value: 'SHE Awards — Symbol of Her Excellence' },
        { label: 'Occasion', value: "International Women's Day" },
        { label: 'Year', value: '2026' },
      ],
    },
    {
      title: 'NGO Healthcare Outreach Excellence — Heroes Award',
      organization: '2nd Edition Himalayan Healthcare Innovation Summit 2026',
      category: 'Healthcare Innovation & NGO Excellence',
      description:
        "Saukhyam's founder Anju Bist was honoured with the NGO Healthcare Outreach Excellence Heroes Award 2026 at the 2nd Edition Himalayan Healthcare Innovation Summit — organized by Velox and supported by SETU Aayog. This recognition celebrates Saukhyam's role in delivering sustainable healthcare solutions, women's wellbeing, and innovation-driven social impact across underserved communities.",
      images: [
        {
          src: '/images/awards/himalaya-2026-stage.png',
          alt: 'Saukhyam team receiving the NGO Healthcare Outreach Excellence Heroes Award at Himalayan Healthcare Innovation Summit 2026',
          featured: true,
        },
        {
          src: '/images/awards/himalaya-2026-team.png',
          alt: 'Saukhyam team at the Himalayan Healthcare Innovation Summit 2026',
          featured: false,
        },
      ],
      details: [
        { label: 'Award', value: 'NGO Healthcare Outreach Excellence — Heroes Award' },
        { label: 'Event', value: 'Himalayan Healthcare Innovation Summit 2026' },
        { label: 'Year', value: '2026' },
        { label: 'Supported by', value: 'SETU Aayog & Velox' },
      ],
    },
  ],
};

const timelineYears = ['2016', '2017', '2018', '2020', '2021', '2022', '2023', '2024', '2025', '2026'];
const DEFAULT_YEAR = '2021';

/* ── animation variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };
const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const contentReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0, y: -12, scale: 0.99,
    transition: { duration: 0.28, ease: [0.65, 0, 0.35, 1] as const },
  },
};

/* ── hero stats ── */
const heroStats = [
  { value: '10+', label: 'National & Global Awards', icon: Trophy },
  { value: '2016', label: 'Recognition Journey Began', icon: Star },
  { value: '5L+', label: 'Women Impacted', icon: Users },
];

/* ── AwardShowcase sub-component ── */
function AwardShowcase({ entry }: { entry: AwardEntry }) {
  const featured = entry.images.find((img) => img.featured) ?? entry.images[0];
  const supporting = entry.images.filter((img) => !img.featured);
  const hasRealImage = featured?.src && !featured.src.includes('placeholder');

  return (
    <motion.div
      key={entry.title}
      className={styles.showcase}
      variants={contentReveal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Left — Image gallery */}
      <motion.div className={styles.showcaseImages} variants={fadeInLeft}>
        <div className={`${styles.showcaseFeaturedWrap} ${featured?.contain ? styles.showcaseFeaturedWrapContain : ''}`}>
          {hasRealImage ? (
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={featured?.contain ? styles.showcaseFeaturedImgContain : styles.showcaseFeaturedImg}
              priority
            />
          ) : (
            <div className={styles.showcasePlaceholder} aria-hidden="true">
              <Trophy size={40} />
              <span>{entry.organization}</span>
            </div>
          )}
          {!featured?.contain && <div className={styles.showcaseFeaturedOverlay} aria-hidden="true" />}
        </div>

        {supporting.length > 0 && (
          <div className={styles.showcaseSupportingRow}>
            {supporting.map((img) => {
              const isReal = img.src && !img.src.includes('placeholder');
              return (
                <div
                  key={img.src}
                  className={`${styles.showcaseSupportingWrap} ${img.contain ? styles.showcaseSupportingWrapContain : ''}`}
                >
                  {isReal ? (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 900px) 50vw, 25vw"
                      className={img.contain ? styles.showcaseSupportingImgContain : styles.showcaseSupportingImg}
                    />
                  ) : (
                    <div className={styles.showcasePlaceholderSmall} aria-hidden="true">
                      <Trophy size={22} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* Right — Award content */}
      <motion.div className={styles.showcaseContent} variants={fadeInRight}>
        <span className={styles.showcaseTag}>
          <CalendarDays size={12} aria-hidden="true" />
          {entry.details.find((d) => d.label === 'Year')?.value ?? ''} Recognition
        </span>

        <h3 className={styles.showcaseTitle}>{entry.title}</h3>

        <p className={styles.showcaseOrg}>
          <Building2 size={14} aria-hidden="true" />
          {entry.organization}
        </p>

        <div className={styles.showcaseDivider} aria-hidden="true" />

        <p className={styles.showcaseDesc}>{entry.description}</p>

        {/* Details card */}
        <div className={styles.showcaseDetailsCard}>
          <p className={styles.showcaseDetailsLabel}>
            <Tag size={12} aria-hidden="true" />
            Award Details
          </p>
          <ul className={styles.showcaseDetailsList}>
            {entry.details.map((d) => (
              <li key={d.label} className={styles.showcaseDetailsItem}>
                <span className={styles.showcaseDetailsKey}>{d.label}</span>
                <span className={styles.showcaseDetailsVal}>{d.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main page ── */
export default function ImpactPage() {
  const [activeYear, setActiveYear] = useState(DEFAULT_YEAR);
  const activeAwards = awardsTimeline[activeYear] ?? [];

  return (
    <div className={styles.impactPage}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroGrain} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div className={styles.heroLeft} initial="hidden" animate="visible" variants={stagger}>
              <motion.span className={styles.heroLabel} variants={fadeInUp}>
                <Trophy size={14} aria-hidden="true" />
                Awards &amp; Recognition
              </motion.span>
              <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                A Journey of<br />
                <span className={styles.heroAccent}>Recognition</span>
              </motion.h1>
              <motion.p className={styles.heroDesc} variants={fadeInUp}>
                Over the years, Saukhyam&apos;s work has been acknowledged across
                innovation, sustainability, and women&apos;s health platforms in
                India and beyond.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <a href="#timeline" className={styles.heroBtn}>
                  Explore the Timeline
                  <ChevronRight size={16} aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroRight} initial="hidden" animate="visible" variants={stagger}>
              {heroStats.map((stat) => (
                <motion.div key={stat.label} className={styles.heroStatCard} variants={fadeInRight}>
                  <div className={styles.heroStatIconWrap} aria-hidden="true">
                    <stat.icon size={20} />
                  </div>
                  <span className={styles.heroStatValue}>{stat.value}</span>
                  <span className={styles.heroStatLabel}>{stat.label}</span>
                </motion.div>
              ))}
              <motion.div className={styles.heroStatAccent} variants={fadeInRight} aria-hidden="true">
                <Globe size={15} />
                <span>International &amp; National Platforms</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TIMELINE ── */}
      <section id="timeline" className={styles.timelineSection}>
        <div className={styles.timelineBg} aria-hidden="true" />
        <div className={styles.timelineGlow} aria-hidden="true" />

        <div className="container">

          {/* Section header */}
          <motion.div
            className={styles.timelineHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span className={styles.sectionLabel} variants={fadeInUp}>
              <Award size={13} aria-hidden="true" />
              Recognition Trail
            </motion.span>
            <motion.h2 className={styles.timelineTitle} variants={fadeInUp}>
              A Journey of Recognition
            </motion.h2>
            <motion.p className={styles.timelineSubtitle} variants={fadeInUp}>
              Over the years, Saukhyam&apos;s work has been acknowledged across innovation,
              sustainability, and women&apos;s health platforms in India and beyond.
            </motion.p>
          </motion.div>

          {/* Year selector */}
          <motion.div
            className={styles.yearNav}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            role="tablist"
            aria-label="Select award year"
          >
            <div className={styles.yearNavTrack}>
              {timelineYears.map((year) => {
                const hasAwards = (awardsTimeline[year] ?? []).length > 0;
                return (
                  <button
                    key={year}
                    role="tab"
                    aria-selected={activeYear === year}
                    className={`${styles.yearBtn} ${activeYear === year ? styles.yearBtnActive : ''} ${!hasAwards ? styles.yearBtnEmpty : ''}`}
                    onClick={() => setActiveYear(year)}
                  >
                    {year}
                    {hasAwards && (
                      <span className={styles.yearBtnDot} aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className={styles.yearNavLine} aria-hidden="true" />
          </motion.div>

          {/* Award showcase */}
          <div className={styles.showcaseArea} role="tabpanel">
            <AnimatePresence mode="wait">
              {activeAwards.length > 0 ? (
                <motion.div
                  key={activeYear}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={stagger}
                  className={styles.showcaseList}
                >
                  {activeAwards.map((award, i) => (
                    <AwardShowcase key={`${activeYear}-${i}`} entry={award} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={`empty-${activeYear}`}
                  className={styles.emptyYear}
                  variants={contentReveal}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className={styles.emptyYearIcon} aria-hidden="true">
                    <Star size={32} />
                  </div>
                  <p className={styles.emptyYearText}>
                    {parseInt(activeYear) > 2025
                      ? 'The recognition journey continues.'
                      : 'No awards recorded for this year.'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── PRESS COVERAGE ── */}
      <section id="press" className={styles.pressSection}>
        <div className={styles.pressBg} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.pressSectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span className={styles.sectionLabel} variants={fadeInUp}>
              <Newspaper size={13} aria-hidden="true" />
              Press Coverage
            </motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeInUp}>
              In the Media
            </motion.h2>
            <motion.p className={styles.sectionDesc} variants={fadeInUp}>
              Featured across India&apos;s most trusted publications for impact in
              menstrual health, sustainability, and women&apos;s empowerment.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.pressGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {pressItems.map((item) => (
              <motion.a
                key={item.id}
                variants={fadeInUp}
                className={styles.pressCard}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.pressPublication}>{item.publication}</span>
                <h3 className={styles.pressTitle}>{item.title}</h3>
                <span className={styles.pressLink}>
                  Read Article
                  <ExternalLink size={12} aria-hidden="true" />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className={styles.ctaLabel} variants={fadeInUp}>
              Be Part of the Impact
            </motion.span>
            <motion.h2 className={styles.ctaTitle} variants={fadeInUp}>
              Every pad you purchase<br />
              <span className={styles.ctaAccent}>empowers a rural woman</span>
            </motion.h2>
            <motion.p className={styles.ctaDesc} variants={fadeInUp}>
              And helps heal the planet — one reusable cycle at a time.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products" className={styles.ctaBtn}>
                <Heart size={16} aria-hidden="true" />
                Shop Saukhyam
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
