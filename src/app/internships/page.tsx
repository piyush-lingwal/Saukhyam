'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Sprout,
  Heart,
  Globe,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Users,
  Lightbulb,
  FlaskConical,
  Megaphone,
  Code2,
  Camera,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Quote,
  FileText,
  MessageSquare,
  UserCheck,
  Rocket,
  ClipboardList,
} from 'lucide-react';
import styles from './page.module.css';

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.07 } } };

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const whyPillars = [
  {
    icon: Rocket,
    title: 'Real-World Impact',
    desc: 'Every piece of work you do here reaches real communities — villages, schools, health centres. You\'ll see your contribution live, not just in a report.',
    color: '#16a34a',
  },
  {
    icon: Heart,
    title: 'Women Empowerment Mission',
    desc: 'Join a movement built by women, for women. Help amplify the voices and livelihoods of 30 lakh+ women across India.',
    color: '#be123c',
  },
  {
    icon: FlaskConical,
    title: 'Sustainable Innovation',
    desc: 'Work at the intersection of ecology, health, and social justice. Saukhyam\'s banana fiber technology is a first-of-its-kind innovation worth being part of.',
    color: '#0d9488',
  },
  {
    icon: Lightbulb,
    title: 'Cross-Domain Exposure',
    desc: 'Research, product, social media, field outreach — Saukhyam gives you real exposure across disciplines, not siloed tasks.',
    color: '#7c3aed',
  },
];

const domains = [
  {
    icon: Code2,
    title: 'Tech & Web',
    desc: 'Build and improve Saukhyam\'s digital products, website, and internal tools that power our mission.',
    tags: ['Next.js', 'UI/UX', 'Dev'],
    color: '#0369a1',
  },
  {
    icon: Megaphone,
    title: 'Design & Social Media',
    desc: 'Craft compelling visual campaigns, content strategies, and brand communications that reach millions.',
    tags: ['Canva', 'Reels', 'Campaigns'],
    color: '#7c3aed',
  },
  {
    icon: BookOpen,
    title: 'Research & Documentation',
    desc: 'Support evidence-based work through field research, impact studies, grant documentation, and policy analysis.',
    tags: ['Field Research', 'Reports', 'Data'],
    color: '#92400e',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    desc: 'Work directly with our HEAL, CARE, REACH programs — engaging schools, colleges, and rural communities.',
    tags: ['HEAL', 'CARE', 'REACH'],
    color: '#16a34a',
  },
  {
    icon: FlaskConical,
    title: 'Product & Sustainability',
    desc: 'Assist in banana fiber R&D, sustainable product development, and eco-material research.',
    tags: ['R&D', 'Sustainability', 'Innovation'],
    color: '#0d9488',
  },
  {
    icon: Camera,
    title: 'Photography & Storytelling',
    desc: 'Document the human stories behind Saukhyam\'s impact through photography, video, and visual narratives.',
    tags: ['Photography', 'Video', 'Stories'],
    color: '#be123c',
  },
];

const gains = [
  { icon: Award, title: 'Certificate', desc: 'Official certificate from Ayurarogya Saukhyam Foundation.' },
  { icon: GraduationCap, title: 'Mentorship', desc: 'Direct mentoring by Saukhyam\'s founders and program leads.' },
  { icon: Briefcase, title: 'Live Projects', desc: 'Real deliverables that go into production.' },
  { icon: Star, title: 'Portfolio Work', desc: 'Tangible output to showcase your skills and contribution.' },
  { icon: Globe, title: 'Flexible Learning', desc: 'Remote-friendly with structured milestones and freedom.' },
  { icon: FileText, title: 'Recommendation Letter', desc: 'Strong LOR for exceptional interns for careers or grad school.' },
];

const journeySteps = [
  { icon: ClipboardList, step: '01', title: 'Fill the Form', desc: 'Share your background, domain interest, and availability via our short application.' },
  { icon: FileText,     step: '02', title: 'Application Review', desc: 'Our team reviews every application carefully and thoughtfully.' },
  { icon: MessageSquare, step: '03', title: 'Interview / Discussion', desc: 'A 15–20 minute conversation to understand how you can contribute best.' },
  { icon: UserCheck,    step: '04', title: 'Onboarding',  desc: 'Receive your welcome pack, get introduced to the team, and start your journey.' },
  { icon: Rocket,       step: '05', title: 'Impact Projects', desc: 'Dive into real work that shapes communities, products, and programs.' },
];

type InternSection = { label: string; preview: string; full: string };
type InternProfile = {
  name: string; role: string; institution: string; degree: string;
  image: string | null; initials: string; color: string;
  sections: InternSection[];
  testimonial: string;
};

const internsData: InternProfile[] = [
  {
    name: 'Shivani Hude',
    role: 'Web Development & Technology',
    institution: 'Pimpri Chinchwad University',
    degree: 'B.Tech — Computer Science Engineering',
    image: '/images/interns/shivani-hude.png',
    initials: 'SH',
    color: '#16a34a',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.Tech in Computer Science Engineering at Pimpri Chinchwad University.',
        full: 'I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science Engineering from Pimpri Chinchwad University and am currently in my final year.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Balancing academics with meaningful real-world experience.',
        full: 'Managing my internship at Saukhyam while continuing my academic studies has been a rewarding experience. It has allowed me to apply classroom knowledge to real-world projects, strengthen my professional skills, and gain practical exposure to social impact initiatives while balancing my educational responsibilities.',
      },
      {
        label: 'Area of Work',
        preview: 'Contributing to web development, UI/UX, and digital initiatives.',
        full: 'I work as a Web Development and Technology Intern, contributing to website development, content management, UI/UX improvements, and digital initiatives that support Saukhyam\'s mission. My responsibilities include creating and enhancing web pages, improving user experience, and assisting with various technology-related projects.',
      },
    ],
    testimonial: 'My internship at Saukhyam has been an enriching learning journey. The organization provides a supportive environment where innovation, creativity, and social impact go hand in hand. I have gained valuable technical skills, improved my problem-solving abilities, and learned how technology can be used to create meaningful change in society. Working with the Saukhyam team has been both inspiring and professionally rewarding.',
  },
  {
    name: 'Ananya Sharma',
    role: 'Content & Social Media',
    institution: 'Amity University, Noida',
    degree: 'B.A. — Mass Communication',
    image: null,
    initials: 'AS',
    color: '#7c3aed',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.A. Mass Communication at Amity University, Noida.',
        full: 'I am pursuing a Bachelor of Arts in Mass Communication from Amity University, Noida, currently in my third year with a focus on digital media and public communication.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Channelling my creativity into campaigns that reach thousands.',
        full: 'Balancing coursework with live content creation for Saukhyam has sharpened my skills tremendously. The internship challenged me to produce real campaigns — not just assignments — and gave me a professional sense of responsibility I\'d never experienced in a classroom.',
      },
      {
        label: 'Area of Work',
        preview: 'Building Saukhyam\'s social media voice and content strategy.',
        full: 'I craft Instagram reels, blog articles, campaign copy, and awareness posts for Saukhyam\'s digital channels. My work focuses on translating complex health and sustainability topics into approachable, relatable storytelling for a broad audience of women and change-makers.',
      },
    ],
    testimonial: 'Interning at Saukhyam changed how I think about purpose in creative work. I wrote campaigns published to thousands of women. This isn\'t just a résumé line — it\'s a story I\'ll carry for life. Every piece I created had a real reason behind it.',
  },
  {
    name: 'Rahul Menon',
    role: 'Impact Analytics',
    institution: 'IIT Madras',
    degree: 'B.Tech — Data Science',
    image: null,
    initials: 'RM',
    color: '#0d9488',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.Tech Data Science at IIT Madras, final year.',
        full: 'I am in the final year of my B.Tech in Data Science at IIT Madras, where my coursework covers machine learning, statistical modelling, and impact measurement.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Applying data science to grassroots social impact at scale.',
        full: 'Working on Saukhyam\'s community data while completing my degree has given me a unique dual perspective. I learn theory in class and apply it directly to a dataset that represents real villages and real people — a combination most students only encounter post-graduation.',
      },
      {
        label: 'Area of Work',
        preview: 'Analysing impact data across 11 states and 4,137 villages.',
        full: 'I built dashboards tracking Saukhyam\'s outreach across states, analysed community adoption data, and helped prepare impact reports used in grant applications. Working with data that has human meaning — not just numbers — fundamentally changed how I approach analytics.',
      },
    ],
    testimonial: 'Seeing how numbers translate into lives changed was humbling. Saukhyam trusted me with real work, not intern busywork. I analysed impact spanning 11 states — as a student, that kind of scale and responsibility is rare and genuinely transformative.',
  },
  {
    name: 'Priya Nair',
    role: 'Research & Documentation',
    institution: 'AIIMS Delhi',
    degree: 'MBBS — Final Year',
    image: null,
    initials: 'PN',
    color: '#be123c',
    sections: [
      {
        label: 'Educational Background',
        preview: 'Final-year MBBS student at AIIMS Delhi.',
        full: 'I am a final-year MBBS student at AIIMS Delhi, with a strong interest in public health, menstrual health policy, and community medicine. My medical training shaped my research lens significantly.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Connecting medical studies with grassroots women\'s health work.',
        full: 'My medical curriculum gave me clinical depth, but Saukhyam gave me field perspective. Balancing hospital rounds and field research was demanding but deeply rewarding — it made my understanding of menstrual health more complete than any textbook could.',
      },
      {
        label: 'Area of Work',
        preview: 'Field research, menstrual health documentation, and grant reports.',
        full: 'I conducted field surveys in rural communities, co-authored a menstrual hygiene research report, and contributed to a grant proposal document that drew on real community data. This report was used by Saukhyam\'s leadership in policy discussions — a responsibility I did not take lightly.',
      },
    ],
    testimonial: 'I co-authored a field research report used in a real grant proposal. That kind of responsibility as an undergrad is rare. Saukhyam gives you ownership and trusts you completely — it\'s the kind of experience that accelerates your professional growth like nothing else can.',
  },
  {
    name: 'Kavya Reddy',
    role: 'Community Outreach',
    institution: 'Tata Institute of Social Sciences',
    degree: 'M.A. — Social Work',
    image: null,
    initials: 'KR',
    color: '#d97706',
    sections: [
      {
        label: 'Educational Background',
        preview: 'M.A. Social Work at TISS, specialising in community development.',
        full: 'I am pursuing a Master\'s in Social Work from TISS Mumbai, with a specialisation in community development and rural health interventions. My coursework emphasises participatory research and grassroots programme design.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Field learning that complements every classroom concept.',
        full: 'TISS prepared me theoretically for community work, but Saukhyam showed me what it looks like in practice at scale. Every concept I study — participatory action, community mobilisation, behaviour change — I see implemented live, which deepens my academic learning tremendously.',
      },
      {
        label: 'Area of Work',
        preview: 'Supporting HEAL, CARE, and REACH programme outreach efforts.',
        full: 'I support Saukhyam\'s HEAL, CARE, and REACH programmes by coordinating with partner organisations, preparing community engagement materials, and helping with field monitoring. My work bridges head-office planning with ground-level realities across multiple states.',
      },
    ],
    testimonial: 'Saukhyam doesn\'t just let you observe — they let you contribute. I was involved in community conversations, programme planning, and field visits that shaped real decisions. For a student of social work, there is no better classroom than this.',
  },
  {
    name: 'Arjun Singh',
    role: 'Design & Visual Storytelling',
    institution: 'National Institute of Design',
    degree: 'B.Des — Communication Design',
    image: null,
    initials: 'AS',
    color: '#0369a1',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.Des Communication Design at National Institute of Design.',
        full: 'I am studying Communication Design at the National Institute of Design, where I specialise in visual systems, motion design, and brand storytelling. My training focuses on how design creates meaning and drives behaviour.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Designing with purpose for a mission that truly matters.',
        full: 'Design school teaches craft. Saukhyam taught me that design has a conscience. Working on real communication challenges — how to talk about menstrual health without stigma, how to present rural stories with dignity — changed my understanding of what good design is for.',
      },
      {
        label: 'Area of Work',
        preview: 'Creating visual identity, social content, and impact communication.',
        full: 'I design social media content, infographics, awareness posters, and event materials for Saukhyam\'s campaigns. I have also worked on visual documentation of field programmes — turning complex impact data into clean, readable visual stories that resonate with both communities and donors.',
      },
    ],
    testimonial: 'Design school teaches you craft. Saukhyam teaches you that design has a conscience. Every visual I created here had a purpose larger than aesthetics — it was about dignity, awareness, and reaching women who need information. That\'s design at its most meaningful.',
  },
];

const faqs = [
  {
    q: 'Is the internship remote or in-person?',
    a: 'Internships are primarily remote-friendly. Depending on your domain and preference, there may be optional in-person opportunities at our Amritapuri, Kerala campus or field program locations.',
  },
  {
    q: 'How long is the internship?',
    a: 'The minimum duration is 4 weeks. Most interns choose 6–12 week engagements for deeper impact. Duration is flexible and decided during the discussion call.',
  },
  {
    q: 'Is the internship paid?',
    a: 'Currently, internships at Saukhyam are unpaid but offer significant non-monetary value — mentorship, live projects, certificate, LOR, and a mission-driven community. Select roles may have stipends; this will be communicated during the discussion.',
  },
  {
    q: 'Who is eligible to apply?',
    a: 'Any student currently enrolled in an undergraduate, postgraduate, or professional program. We also accept gap-year students and recent graduates. No specific stream is required — we welcome all backgrounds.',
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Yes. All interns who complete their engagement receive an official Certificate of Internship from Ayurarogya Saukhyam Foundation. Exceptional interns are also considered for a Letter of Recommendation.',
  },
  {
    q: 'What commitment is expected each week?',
    a: 'Typically 10–20 hours per week, depending on your domain. We respect that you are actively studying, so we structure work around your academic schedule.',
  },
];

/* ─────────────────────────────────────────────
   INTERN CARD (accordion sections per card)
───────────────────────────────────────────── */
function InternCard({ intern }: { intern: InternProfile }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <motion.article className={styles.internCard} variants={fadeUp}>
      {/* ── Identity header ── */}
      <div className={styles.internCardHeader}>
        <div
          className={styles.internAvatarWrap}
          style={{ '--ic': intern.color } as React.CSSProperties}
        >
          {intern.image ? (
            <Image
              src={intern.image}
              alt={intern.name}
              fill
              sizes="80px"
              className={styles.internAvatarImg}
            />
          ) : (
            <span className={styles.internInitials}>{intern.initials}</span>
          )}
        </div>
        <div className={styles.internIdentity}>
          <h3 className={styles.internName}>{intern.name}</h3>
          <p className={styles.internRole}>{intern.role}</p>
          <p className={styles.internInstitution}>{intern.institution}</p>
          <p className={styles.internDegree}>{intern.degree}</p>
        </div>
      </div>

      <div className={styles.internCardDivider} />

      {/* ── Accordion sections ── */}
      <div className={styles.internAccordion}>
        {intern.sections.map((sec, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={sec.label} className={`${styles.internAccItem} ${isOpen ? styles.internAccItemOpen : ''}`}>
              <button
                className={styles.internAccTrigger}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.internAccLabel}>{sec.label}</span>
                <motion.span
                  className={styles.internAccChevron}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {!isOpen && (
                  <motion.p
                    className={styles.internAccPreview}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sec.preview}
                  </motion.p>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className={styles.internAccBody}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className={styles.internAccFull}>{sec.full}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className={styles.internCardDivider} />

      {/* ── Quote block ── */}
      <div className={styles.internQuoteBlock}>
        <Quote size={22} className={styles.internQuoteIcon} aria-hidden="true" />
        <blockquote className={styles.internQuoteText}>{intern.testimonial}</blockquote>
        <p className={styles.internQuoteAuthor}>
          — {intern.name}
          <span className={styles.internQuoteRole}> · {intern.role}</span>
        </p>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────── */
function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`} onClick={onClick}>
      <div className={styles.faqQuestion}>
        <span>{q}</span>
        <motion.span
          className={styles.faqChevron}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function InternshipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.page}>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section className={styles.hero}>
        {/* Background layers */}
        <div className={styles.heroBgImage} aria-hidden="true">
          <Image
            src="/Blog_Images/IMG_8023_1024x1024.webp"
            alt=""
            fill
            sizes="100vw"
            className={styles.heroBgImg}
            priority
          />
        </div>
        <div className={styles.heroBgOverlay} aria-hidden="true" />
        <div className={styles.heroGrain} aria-hidden="true" />

        <div className="container">
          <motion.div
            className={styles.heroInner}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span className={styles.heroLabel} variants={fadeUp}>
              <Leaf size={13} /> Internship Program · Ayurarogya Saukhyam Foundation
            </motion.span>

            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Intern With <em className={styles.heroTitleItalic}>Purpose</em>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Build skills. Create impact. Be part of meaningful change.
            </motion.p>

            <motion.div className={styles.heroCtas} variants={fadeUp}>
              <a
                href="https://forms.gle/uoPBrTUaejLJfhf36"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroBtnPrimary}
              >
                Apply Now <ArrowRight size={16} />
              </a>
              <a href="#domains" className={styles.heroBtnSecondary}>
                Explore Roles
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div className={styles.heroTrust} variants={stagger}>
              {[
                { val: '30L+', label: 'Women Impacted' },
                { val: '11', label: 'States' },
                { val: '4,137', label: 'Villages' },
                { val: '20+', label: 'Awards' },
              ].map((s) => (
                <motion.div key={s.label} className={styles.heroTrustItem} variants={fadeUp}>
                  <strong className={styles.heroTrustVal}>{s.val}</strong>
                  <span className={styles.heroTrustLabel}>{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.heroWave} aria-hidden="true">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
            <path d="M0 80L1440 80L1440 24C1200 70 960 4 720 34C480 64 240 14 0 44L0 80Z" fill="#fafcf9"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. WHY INTERN
      ══════════════════════════════════════ */}
      <section className={styles.whySection}>
        <div className="container">
          <motion.div
            className={styles.whyInner}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Left: storytelling text */}
            <motion.div className={styles.whyLeft} variants={fadeLeft}>
              <span className={styles.sectionLabel}>
                <Sprout size={13} /> Why Us
              </span>
              <h2 className={styles.sectionTitle}>
                Why Intern at <span className={styles.accent}>Saukhyam</span>?
              </h2>
              <p className={styles.whyIntro}>
                Most internships give you tasks. Saukhyam gives you a mission. 
                We were built at Amritapuri Ashram, Kerala — rooted in Amma's vision of 
                compassionate service — and every intern who joins us becomes part of that story.
              </p>
              <p className={styles.whyIntro}>
                Here, you won't shadow someone. You'll write campaigns that go live, 
                research that informs policy, code that powers our platform, and field work 
                that reaches villages across India. We trust you with real responsibility because 
                we believe real learning only happens through real work.
              </p>
              <div className={styles.whyQuote}>
                <Quote size={22} className={styles.whyQuoteIcon} />
                <p>"We don't hire interns for the work. We invite them for the journey."</p>
                <span>— Anju Bist, Founder, Saukhyam Foundation</span>
              </div>
            </motion.div>

            {/* Right: pillar cards */}
            <motion.div className={styles.whyRight} variants={stagger}>
              {whyPillars.map((p) => (
                <motion.div key={p.title} className={styles.whyCard} variants={fadeRight}>
                  <div className={styles.whyCardIcon} style={{ '--ic': p.color } as React.CSSProperties}>
                    <p.icon size={20} />
                  </div>
                  <div>
                    <h3 className={styles.whyCardTitle}>{p.title}</h3>
                    <p className={styles.whyCardDesc}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. DOMAINS
      ══════════════════════════════════════ */}
      <section className={styles.domainsSection} id="domains">
        <div className={styles.domainsBg} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className={styles.sectionHeaderCenter}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className={styles.sectionLabelLight} variants={fadeUp}>
              <Briefcase size={13} /> Open Domains
            </motion.span>
            <motion.h2 className={styles.sectionTitleLight} variants={fadeUp}>
              Internship <span className={styles.accentLight}>Domains</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitleLight} variants={fadeUp}>
              Choose a domain that aligns with your skills and passions — or explore across disciplines. 
              We welcome curious, committed minds from diverse backgrounds.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.domainsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {domains.map((d) => (
              <motion.div key={d.title} className={styles.domainCard} variants={fadeUp}>
                <div className={styles.domainIconWrap} style={{ '--dc': d.color } as React.CSSProperties}>
                  <d.icon size={22} />
                </div>
                <h3 className={styles.domainTitle}>{d.title}</h3>
                <p className={styles.domainDesc}>{d.desc}</p>
                <div className={styles.domainTags}>
                  {d.tags.map((t) => (
                    <span key={t} className={styles.domainTag}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHAT YOU'LL GAIN
      ══════════════════════════════════════ */}
      <section className={styles.gainsSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeaderCenter}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className={styles.sectionLabel} variants={fadeUp}>
              <Star size={13} /> Benefits
            </motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
              What You'll <span className={styles.accent}>Gain</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeUp}>
              Beyond the title — real skills, meaningful credentials, and a story that stands out.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.gainsGrid}
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {gains.map((g) => (
              <motion.div key={g.title} className={styles.gainCard} variants={fadeUp}>
                <div className={styles.gainIconWrap}>
                  <g.icon size={22} />
                </div>
                <h3 className={styles.gainTitle}>{g.title}</h3>
                <p className={styles.gainDesc}>{g.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. JOURNEY TIMELINE
      ══════════════════════════════════════ */}
      <section className={styles.journeySection}>
        <div className={styles.journeyBg} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className={styles.sectionHeaderCenter}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className={styles.sectionLabelLight} variants={fadeUp}>
              <CheckCircle2 size={13} /> Process
            </motion.span>
            <motion.h2 className={styles.sectionTitleLight} variants={fadeUp}>
              Internship <span className={styles.accentLight}>Journey</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitleLight} variants={fadeUp}>
              Simple. Meaningful. Transparent.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.timelineRow}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {journeySteps.map((s, i) => (
              <motion.div key={s.step} className={styles.timelineStep} variants={fadeUp}>
                {i < journeySteps.length - 1 && (
                  <div className={styles.timelineConnector} aria-hidden="true" />
                )}
                <div className={styles.timelineIconRing}>
                  <div className={styles.timelineIconInner}>
                    <s.icon size={20} />
                  </div>
                </div>
                <div className={styles.timelineBody}>
                  <span className={styles.timelineNum}>{s.step}</span>
                  <h3 className={styles.timelineTitle}>{s.title}</h3>
                  <p className={styles.timelineDesc}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. MEET OUR INTERNS — GRID
      ══════════════════════════════════════ */}
      <section className={styles.internsSection}>
        <div className={styles.internsBg} aria-hidden="true" />
        <div className={styles.internsGlow} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Section header */}
          <motion.div
            className={styles.internsHeader}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className={styles.sectionLabel} variants={fadeUp}>
              <Quote size={13} /> Intern Spotlight
            </motion.span>
            <motion.h2 className={styles.internsSectionTitle} variants={fadeUp}>
              Meet Our <em className={styles.internsTitleAccent}>Interns</em>
            </motion.h2>
            <motion.p className={styles.internsSectionSubtitle} variants={fadeUp}>
              Real experiences from students who chose to build something bigger than a portfolio.
            </motion.p>
            <motion.div className={styles.internsAccentLine} variants={fadeUp} aria-hidden="true" />
          </motion.div>

          {/* 3×2 Card grid */}
          <motion.div
            className={styles.internsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {internsData.map((intern) => (
              <InternCard key={intern.name} intern={intern} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════ */}
      <section className={styles.faqSection}>
        <div className={styles.faqBg} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className={styles.faqInner}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div className={styles.faqLeft} variants={fadeLeft}>
              <span className={styles.sectionLabel}>
                <MessageSquare size={13} /> FAQs
              </span>
              <h2 className={styles.sectionTitle}>
                Frequently Asked <span className={styles.accent}>Questions</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know before applying. Still have questions? 
                Write to us at{' '}
                <a href="mailto:info@saukhyampads.org" className={styles.faqEmail}>
                  info@saukhyampads.org
                </a>
              </p>
              <a
                href="https://forms.gle/uoPBrTUaejLJfhf36"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faqApplyBtn}
              >
                Apply Now <ArrowRight size={15} />
              </a>
            </motion.div>

            <motion.div className={styles.faqRight} variants={fadeRight}>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  open={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. BOTTOM CTA
      ══════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} aria-hidden="true" />
        <div className={styles.ctaGrain} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={styles.ctaInner}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div className={styles.ctaIconRing} variants={fadeUp} aria-hidden="true">
              <Sprout size={28} />
            </motion.div>
            <motion.span className={styles.ctaLabel} variants={fadeUp}>
              Apply Today
            </motion.span>
            <motion.h2 className={styles.ctaTitle} variants={fadeUp}>
              Ready to Create <span className={styles.ctaAccent}>Meaningful Impact</span>?
            </motion.h2>
            <motion.p className={styles.ctaSubtitle} variants={fadeUp}>
              Your skills can support sustainability, dignity, and change.
              Bring your best self — we'll give you a story worth telling.
            </motion.p>
            <motion.div className={styles.ctaBtns} variants={fadeUp}>
              <a
                href="https://forms.gle/uoPBrTUaejLJfhf36"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtnPrimary}
              >
                Apply Now <ArrowRight size={16} />
              </a>
              <Link href="/contact" className={styles.ctaBtnSecondary}>
                Ask a Question
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
