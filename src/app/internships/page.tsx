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
    desc: 'Every piece of work you do here reaches real communities, villages, schools, and health centres. You\'ll see your contribution live, not just in a report.',
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
    desc: 'Research, product, social media, and field outreach. Saukhyam gives you real exposure across disciplines, not siloed tasks.',
    color: '#7c3aed',
  },
];

const domains = [
  {
    icon: Code2,
    title: 'Tech',
    tagline: 'Digital solutions and innovation',
    color: '#0369a1',
  },
  {
    icon: Megaphone,
    title: 'Design & Social Media',
    tagline: 'Creative storytelling and communication',
    color: '#7c3aed',
  },
  {
    icon: BookOpen,
    title: 'Research & Documentation',
    tagline: 'Knowledge and evidence-based work',
    color: '#92400e',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    tagline: 'People-centered engagement',
    color: '#16a34a',
  },
  {
    icon: FlaskConical,
    title: 'Product & Sustainability Research',
    tagline: 'Responsible innovation and impact',
    color: '#0d9488',
  },
  {
    icon: Camera,
    title: 'Photography / Video / Storytelling',
    tagline: 'Visual narratives and impact stories',
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
  { icon: MessageSquare, step: '03', title: 'Interview / Discussion', desc: 'A 15 to 20 minute conversation to understand how you can contribute best.' },
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
    role: 'Tech Intern',
    institution: 'Pimpri Chinchwad University, Pune',
    degree: 'B.Tech, Computer Science Engineering',
    image: '/images/interns/shivani-hude.png',
    initials: 'SH',
    color: '#16a34a',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.Tech in Computer Science Engineering at Pimpri Chinchwad University, Pune.',
        full: 'I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science Engineering from Pimpri Chinchwad University and am presently continuing my undergraduate studies.',
      },
      {
        label: 'Internship Alongside Studies',
        preview: 'Balancing academics with meaningful real-world experience.',
        full: 'Balancing academics with meaningful real-world experience. My internship at Saukhyam runs alongside my degree, letting me apply classroom concepts to live projects while building professional skills in a mission-driven environment.',
      },
      {
        label: 'Area of Work',
        preview: 'Contributing to web development, UI/UX, and digital initiatives.',
        full: 'Contributing to web development, UI/UX, and digital initiatives. I help create and refine web pages, improve user experience, and support technology projects that advance Saukhyam\'s impact.',
      },
    ],
    testimonial: 'My internship at Saukhyam has been an enriching learning journey. The organization provides a supportive environment where innovation, creativity, and social impact go hand in hand. I have gained valuable technical skills, improved my problem-solving abilities, and learned how technology can be used to create meaningful change in society. Working with the Saukhyam team has been both inspiring and professionally rewarding.',
  },
  {
    name: 'Piyush Singh Lingwal',
    role: 'Tech Intern',
    institution: 'Veer Madho Singh Bhandari UTU, Uttarakhand',
    degree: 'B.Tech, Computer Science and Engineering',
    image: '/images/interns/piyush-lingwal.png',
    initials: 'PL',
    color: '#0369a1',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.Tech in Computer Science and Engineering at Uttarakhand Technical University.',
        full: 'I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering from Veer Madho Singh Bhandari Uttarakhand Technical University, Uttarakhand, and am presently continuing my undergraduate studies.',
      },
      {
        label: 'Internship Journey with Saukhyam',
        preview: 'Balancing academics with meaningful technology-driven experience.',
        full: 'Balancing my academic studies with my internship at Saukhyam has been a highly rewarding experience. The internship has allowed me to apply classroom concepts to real-world projects while developing practical skills in software development, digital transformation, and technology-driven problem solving. Working alongside my studies has strengthened my time management, teamwork, and professional communication skills.',
      },
      {
        label: 'Area of Work',
        preview: 'Contributing to digital initiatives, web development, and AI-assisted solutions.',
        full: 'As a Tech Intern at Saukhyam, I contribute to digital initiatives, web development, AI-assisted solutions, and technology-driven projects designed to improve organizational impact and enhance user experience.',
      },
    ],
    testimonial: 'My internship experience at Saukhyam has been both enriching and inspiring. The organization provides a supportive environment where learning and innovation are encouraged. I have gained valuable exposure to real-world project workflows, collaboration within teams, and the practical application of technology to solve meaningful problems. The guidance from mentors and the opportunity to work on impactful initiatives have significantly contributed to my personal and professional growth.',
  },
  {
    name: 'Anjali Nema',
    role: 'Data & Analytics Intern',
    institution: 'Indian Institute of Public Health, Gandhinagar',
    degree: 'Masters in Public Health (MPH)',
    image: '/images/interns/anjali-nema.png',
    initials: 'AN',
    color: '#0d9488',
    sections: [
      {
        label: 'Educational Background',
        preview: 'Masters in Public Health at Indian Institute of Public Health, Gandhinagar.',
        full: 'I am currently pursuing a Masters in Public Health from the Indian Institute of Public Health, Gandhinagar, and am presently in the final year of my studies.',
      },
      {
        label: 'Internship Journey with Saukhyam',
        preview: 'Applying academic learning to meaningful social impact challenges.',
        full: 'Alongside my academic journey, I have had the wonderful opportunity to intern with Saukhyam, where I have been able to apply my academic learning to real-world challenges within the social sector. This experience has allowed me to connect public health knowledge with practical impact and deepen my understanding of community-focused work.',
      },
      {
        label: 'Area of Work',
        preview: 'Supporting data organisation, analysis, and impact measurement.',
        full: 'As a Data & Analytics Intern at Saukhyam, I support the team in organising and interpreting data to help drive informed decision-making and measure the impact of programmes. My role involves working with data to generate meaningful insights that support evidence-based social initiatives.',
      },
    ],
    testimonial: 'Interning at Saukhyam has been a truly enriching experience. Working on menstrual health data has given me more than just analytical experience. It has given me a window into the lived realities of women and girls across India and shown me how deeply data can reflect human stories. The internship has not only sharpened my analytical skills but also deepened my understanding of how data can be a powerful tool for social change. The team has been incredibly supportive and motivating, making this a space where I could learn, grow, and contribute meaningfully. I am grateful for every opportunity this internship has offered me.',
  },
  {
    name: 'Trisha Shetty',
    role: 'Tech Intern',
    institution: 'Pimpri Chinchwad University, Pune',
    degree: 'B.Tech, Computer Science Engineering',
    image: '/images/interns/trisha-shetty.png',
    initials: 'TS',
    color: '#15803d',
    sections: [
      {
        label: 'Educational Background',
        preview: 'B.Tech in Computer Science Engineering at Pimpri Chinchwad University.',
        full: 'I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science Engineering at Pimpri Chinchwad University, Pune, and am presently in my undergraduate studies.',
      },
      {
        label: 'Internship Journey with Saukhyam',
        preview: 'Balancing academics with meaningful technology and social impact work.',
        full: 'Pursuing my academic studies while interning at Saukhyam has been a valuable and fulfilling experience. This journey has enabled me to connect classroom learning with real-world applications while strengthening my technical and professional capabilities. Working alongside my studies has helped me develop stronger time management, collaboration, and communication skills while gaining meaningful exposure to technology-driven social impact initiatives.',
      },
      {
        label: 'Area of Work',
        preview: 'Contributing to web development, digital initiatives, and user experience enhancement.',
        full: 'As a Tech Intern at Saukhyam, I contribute to website development, digital initiatives, and technology-driven projects aimed at enhancing organisational impact and improving user experience.',
      },
    ],
    testimonial: 'My internship journey at Saukhyam has been both insightful and rewarding. The organisation fosters a collaborative environment where creativity, innovation, and social impact come together. Through this experience, I have strengthened my technical knowledge, improved my problem-solving approach, and gained a deeper understanding of how technology can be used to support meaningful change. Working with the Saukhyam team has been a motivating experience that has contributed greatly to both my personal and professional development.',
  },
];

const faqs = [
  {
    q: 'Is the internship fully online?',
    a: 'The internship is primarily conducted online, allowing interns to work remotely and collaborate digitally. However, interns may occasionally be expected to contribute to Saukhyam programs or initiatives taking place in their city or state. While travel requirements are limited, some involvement in local activities may be part of the experience.',
  },
  {
    q: 'What is the duration of the internship?',
    a: 'The standard internship duration is six months, designed to provide meaningful hands-on learning, professional growth, and deeper engagement with Saukhyam\'s work. Shorter-duration internships may also be available depending on project requirements.',
  },
  {
    q: 'Is the internship paid?',
    a: 'The six-month internship generally includes a stipend after the initial period. The first month is usually unpaid, serving as an orientation and learning phase. Shorter-duration internships are typically unpaid.',
  },
  {
    q: 'Who can apply for the internship?',
    a: 'The six-month internship is generally intended for students currently enrolled in an undergraduate or graduate degree program who are interested in contributing through technology, creativity, research, or social impact initiatives.',
  },
  {
    q: 'What is the expected time commitment?',
    a: 'Interns are expected to contribute approximately 40 to 50 hours per month. This flexible structure allows students to balance academic responsibilities while gaining meaningful practical experience.',
  },
  {
    q: 'Will interns receive a certificate?',
    a: 'Yes. Interns who successfully complete their internship receive an official internship certificate from Saukhyam in recognition of their contribution and learning experience.',
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
          {intern.name}
          <span className={styles.internQuoteRole}>, {intern.role}</span>
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
            src="/images/internships/hero-interns.png"
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
              <Leaf size={13} /> Internship Program · Saukhyam Foundation
            </motion.span>

            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Intern With <span className={styles.heroTitleAccent}>Purpose</span>
            </motion.h1>

            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Transform your learning into real-world impact through purposeful work.
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
              <span className={styles.whyLabel}>Why Us</span>
              <h2 className={styles.sectionTitle}>
                Why Intern at <span className={styles.accent}>Saukhyam</span>?
              </h2>
              <p className={styles.whyIntro}>
                Most internships give you tasks. Saukhyam gives you a mission.
                We were built at Amritapuri Ashram, Kerala, rooted in Amma&apos;s vision of
                compassionate service, and every intern who joins us becomes part of that story.
              </p>
              <p className={styles.whyIntro}>
                Here, you won&apos;t shadow someone. You&apos;ll write campaigns that go live,
                research that informs policy, code that powers our platform, and field work
                that reaches villages across India. We trust you with real responsibility because
                we believe real learning only happens through real work.
              </p>
              <div className={styles.whyQuote}>
                <Quote size={20} className={styles.whyQuoteIcon} aria-hidden="true" />
                <p>&ldquo;We don&apos;t hire interns for the work. We invite them for the journey.&rdquo;</p>
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
        <div className={styles.domainsGlow} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            className={styles.domainsHeader}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span className={styles.domainsLabel} variants={fadeUp}>
              Open Domains
            </motion.span>
            <motion.h2 className={styles.domainsTitle} variants={fadeUp}>
              Internship <span className={styles.accent}>Domains</span>
            </motion.h2>
            <motion.p className={styles.domainsSubtitle} variants={fadeUp}>
              Choose a domain that aligns with your skills and passions, or explore across disciplines.
              We welcome curious, committed minds from diverse backgrounds.
            </motion.p>
            <motion.div className={styles.domainsAccentLine} variants={fadeUp} aria-hidden="true" />
          </motion.div>

          <motion.div
            className={styles.domainsGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {domains.map((d) => (
              <motion.article key={d.title} className={styles.domainCard} variants={fadeUp}>
                <div
                  className={styles.domainIconWrap}
                  style={{ '--dc': d.color } as React.CSSProperties}
                >
                  <d.icon size={22} strokeWidth={1.75} />
                </div>
                <div className={styles.domainCardBody}>
                  <h3 className={styles.domainTitle}>{d.title}</h3>
                  <p className={styles.domainTagline}>{d.tagline}</p>
                </div>
              </motion.article>
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
              Beyond the title, real skills, meaningful credentials, and a story that stands out.
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
              Create Impact With <span className={styles.ctaAccent}>Purpose</span>
            </motion.h2>
            <motion.p className={styles.ctaSubtitle} variants={fadeUp}>
              Grow professionally while contributing to work that creates lasting social value.
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
