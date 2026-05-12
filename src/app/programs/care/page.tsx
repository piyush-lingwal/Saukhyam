'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  TbSchool,
  TbUsers,
  TbLeaf,
  TbTrophy,
  TbCalendarEvent,
  TbBuildingCommunity,
  TbChartLine,
  TbMessageCircle,
  TbStar,
  TbCheck,
  TbArrowRight,
  TbBolt,
  TbCertificate,
  TbWorld,
  TbMail,
  TbRecycle,
  TbAward,
  TbBriefcase,
} from 'react-icons/tb';
import care from './care.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Data ─────────────────────────────────────────────────────── */

const heroStats = [
  { icon: TbLeaf, value: '5.8 kg', label: 'CO\u2082 prevented per girl, per year' },
  { icon: TbUsers, value: '200', label: 'Girls to prevent 1 ton CO\u2082' },
  { icon: TbChartLine, value: '16%', label: 'Campus tipping point' },
  { icon: TbCalendarEvent, value: '2 semesters', label: 'To sustained impact' },
];

const whatIsPoints = [
  {
    icon: TbUsers,
    title: 'Student-Led, Always',
    desc: 'CARE is driven by students, not faculty or Saukhyam. The best implementations happen when student ambassadors take initiative and believe in the cause.',
  },
  {
    icon: TbBuildingCommunity,
    title: 'Multi-Brand Access',
    desc: 'Unlike HEAL, CARE works with partner brands - reusable pads of various brands, menstrual cups, and period panties are all made available in the campus store.',
  },
  {
    icon: TbRecycle,
    title: 'Campus-Scale Impact',
    desc: '200 girls making the switch prevents 1 ton of CO\u2082 equivalent annually - and qualifies for NAAC sustainability reporting.',
  },
  {
    icon: TbWorld,
    title: 'Breaking Taboos Together',
    desc: 'Boys are equal participants - designing posters, manning stalls, and acting as ambassadors to normalize the conversation on campus.',
  },
];

const campaignTypes = [
  {
    icon: TbMessageCircle,
    title: 'Solidarity Circles',
    desc: 'Small group sessions where experienced users answer questions on usage, washing, and drying reusable products.',
  },
  {
    icon: TbBolt,
    title: 'Pop-up Stalls',
    desc: 'High-traffic areas near cafes and common rooms - both boys and girls can man these stalls.',
  },
  {
    icon: TbCalendarEvent,
    title: 'Hostel Campaigns',
    desc: 'Posters, one-on-one conversations, and buddy support within hostels over the full semester.',
  },
  {
    icon: TbStar,
    title: 'Awareness Workshops',
    desc: 'Structured workshops on the science of disposable pad chemicals, PCOS links, and environmental impact.',
  },
];

/* ── College logos (IIT first, then others) ── */
const collegeLogos = [
  'WhatsApp%20Image%202026-05-12%20at%206.28.24%20PM.jpeg',   // IIT logo
  'WhatsApp%20Image%202026-05-12%20at%206.28.25%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.26%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.26%20PM%20(1).jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.27%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.27%20PM%20(1).jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.27%20PM%20(2).jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.28%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.28%20PM%20(1).jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.29%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.29%20PM%20(1).jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.30%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.30%20PM%20(1).jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.31%20PM.jpeg',
  'WhatsApp%20Image%202026-05-12%20at%206.28.31%20PM%20(1).jpeg',
];
const row1 = collegeLogos.slice(0, 8);
const row2 = collegeLogos.slice(8);

const awardCategories = [
  {
    icon: TbTrophy,
    category: 'Student Award',
    title: 'CARE Ambassador of the Year',
    desc: 'Recognising the student ambassador or team that demonstrated exceptional initiative, sustained campaign effort, and measurable impact in shifting their campus toward reusable menstrual products.',
  },
  {
    icon: TbCertificate,
    category: 'Faculty/Staff Award',
    title: 'CARE Mentor of the Year',
    desc: 'Recognising the faculty or staff member who provided visible, sustained, and impactful support to the student ambassador team - enabling the movement to take root on campus.',
  },
];

const impactCards = [
  {
    num: '5.8',
    unit: 'kg',
    label: 'CO\u2082 equivalent prevented per girl per year for the rest of her menstruating life',
  },
  {
    num: '200',
    unit: '',
    label: 'Girls making the shift = 1 ton of CO\u2082 equivalent prevented every year',
  },
  {
    num: '1+',
    unit: 'ton',
    label: 'CO\u2082 equivalent qualifies for NAAC sustainability accreditation reporting',
  },
];

const campusBenefits = [
  {
    icon: TbCertificate,
    title: 'NAAC Accreditation',
    desc: '1 ton of CO\u2082 equivalent prevented is significant. Colleges can report this directly for NAAC and sustainability accreditation commitments.',
  },
  {
    icon: TbLeaf,
    title: 'Sustainability Takes Root',
    desc: 'As colleges tell us, CARE transforms the campus culture. Sustainability moves from a policy statement to lived practice - and extends beyond menstrual products over time.',
  },
  {
    icon: TbUsers,
    title: 'Breaking Taboos',
    desc: 'Boys and girls working on this topic together breaks deep taboos. It builds comfort, openness, and a culture of shared responsibility for health and environment.',
  },
];

const campusEvents = [
  {
    month: 'January – February',
    name: 'Semester 1 Campaign Launch',
    desc: 'CARE ambassadors kick off the academic year with hostel campaigns, pop-up stalls in high-traffic areas, and solidarity circles. Products are stocked in the campus store for the first time.',
    tag: 'Semester Start',
  },
  {
    month: 'May 28',
    name: 'World Menstrual Hygiene Day',
    desc: 'The biggest awareness moment in the CARE calendar. Campuses run open stalls, panel discussions, social media drives, and invite the wider community to join the conversation.',
    tag: 'Global Day',
  },
  {
    month: 'July – August',
    name: 'Semester 2 CARE Launch',
    desc: 'A fresh wave of hostel campaigns begins with new student cohorts. Nodal CARE Colleges support neighbouring campuses. Returning ambassadors mentor new recruits.',
    tag: 'Semester Start',
  },
  {
    month: 'November – December',
    name: 'CARE Awards Ceremony',
    desc: 'Annual recognition of top student ambassadors, faculty mentors, and the most impactful campuses of the year. Hosted city by city across India by Saukhyam Foundation.',
    tag: 'Annual Event',
  },
];

const diffusionPoints = [
  {
    num: '16%',
    title: 'The Campus Tipping Point',
    desc: 'Diffusion of Innovations research shows that once 16% of a group adopts a new behaviour, the adoption becomes self-sustaining. The remaining majority follows without active persuasion.',
  },
  {
    num: '200',
    title: 'Girls to Reach Tipping Point',
    desc: 'On a typical Indian college campus of 1,250 students, 200 girls switching to reusable products crosses the 16% threshold — and also prevents 1 ton of CO₂ annually.',
  },
  {
    num: '2',
    title: 'Semesters to Sustained Change',
    desc: 'Campuses that reach the tipping point in their first year consistently maintain and grow adoption in subsequent years — with minimal ongoing support from Saukhyam Foundation.',
  },
];

const careathonSteps = [
  {
    num: '01',
    icon: TbMail,
    title: 'Express Interest',
    desc: 'Fill out a simple online form with your college name, city, and contact details. No cost, no commitment — Saukhyam Foundation reviews every application personally.',
    color: '#7C3AED',
    gradient: 'linear-gradient(160deg, #6D28D9 0%, #7C3AED 100%)',
    glow: 'rgba(124,58,237,0.22)',
  },
  {
    num: '02',
    icon: TbUsers,
    title: 'Onboarding & Goal Setting',
    desc: 'A Saukhyam Foundation coordinator connects with your college. Together you set a semester switcher target, identify faculty mentors, and plan your campaign calendar.',
    color: '#0E7490',
    gradient: 'linear-gradient(160deg, #164E63 0%, #0E7490 100%)',
    glow: 'rgba(14,116,144,0.22)',
  },
  {
    num: '03',
    icon: TbSchool,
    title: 'Build Your Ambassador Team',
    desc: 'Recruit 4–5 student ambassadors — boys and girls, ideally from students who have already made the shift. Saukhyam provides training materials, campaign kits, and starter product packs at no charge.',
    color: '#047857',
    gradient: 'linear-gradient(160deg, #064E3B 0%, #047857 100%)',
    glow: 'rgba(4,120,87,0.22)',
  },
  {
    num: '04',
    icon: TbBolt,
    title: 'Run Campus Campaigns',
    desc: 'Host hostel campaigns, pop-up stalls, solidarity circles, and awareness workshops across the semester. Your ambassador team drives everything. Saukhyam supports with campaign materials and ongoing guidance.',
    color: '#B45309',
    gradient: 'linear-gradient(160deg, #92400E 0%, #B45309 100%)',
    glow: 'rgba(180,83,9,0.22)',
  },
  {
    num: '05',
    icon: TbAward,
    title: 'Measure & Earn Recognition',
    desc: 'Count your switchers, calculate your CO₂ impact, and receive a CARE Impact Certificate. High-performing campuses are nominated for the CARE Awards and may be invited to become Nodal CARE Colleges.',
    color: '#BE123C',
    gradient: 'linear-gradient(160deg, #881337 0%, #BE123C 100%)',
    glow: 'rgba(190,18,60,0.22)',
  },
];

/* ── CountUp stat — animates on scroll into view ── */
function CountUpStat({ num, unit }: { num: string; unit: string }) {
  const [displayed, setDisplayed] = useState('0');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isDecimal = num.includes('.');
    const isPlus   = num.includes('+');
    const target   = parseFloat(num.replace('+', ''));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration  = 1800;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          const value    = target * eased;
          setDisplayed(
            (isDecimal ? value.toFixed(1) : Math.round(value).toString()) +
            (isPlus && progress >= 1 ? '+' : '')
          );
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref} className={care.impactNum}>
      {displayed}
      {unit && <span className={care.impactNumUnit}>{unit}</span>}
    </div>
  );
}

/* ── Component ───────────────────────────────────────────── */

export default function CarePage() {
  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'care';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, []);

  const [notifEmail, setNotifEmail] = useState('');
  const [notifCity, setNotifCity]   = useState('');
  const [notifSent, setNotifSent]   = useState(false);

  const handleNotifSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifEmail.trim() && notifCity) setNotifSent(true);
  };

  return (
    <div className={care.carePage}>

      {/* ── 1. Hero ── */}
      <section className={care.heroSection}>
        <div className={care.heroTopBar} aria-hidden="true" />

        {/* Background campus photo — sits behind purple gradient overlay */}
        <div className={care.heroBgImageWrap} aria-hidden="true">
          <Image
            src="/CARE Page Photos/hero image.png"
            alt=""
            fill
            className={care.heroBgImage}
            priority
            quality={85}
          />
        </div>


        {/* CARE Logo — absolute top-left */}
        <div className={care.heroLogoWrap}>
          <Image
            src="/CareLogo/CARE logo_Horizontal with tag line.png"
            alt="CARE - Campus Action for Reusable Essentials"
            width={200}
            height={56}
            className={care.heroLogo}
            priority
          />
        </div>

        {/* Centered content */}
        <motion.div
          className={care.heroInner}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className={care.heroEyebrow}>
            Campus Action for Reusable Essentials
          </motion.div>

          <motion.h1 variants={fadeInUp} className={care.heroHeadline}>
            A Student-Led Movement
            <span className={care.heroHeadlineAccent}>for Sustainable Periods on Campus</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className={care.heroSubcopy}>
            CARE transforms college campuses - building student ambassadors, breaking taboos,
            and shifting an entire generation toward reusable menstrual products.
            No cost to the college. Real, measurable climate impact.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/programs/care/register" className={care.heroCta}>
              <TbSchool size={18} />
              Bring CARE to Your Campus
              <TbArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats shelf */}
        <motion.div
          className={care.heroStatsShelf}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className={care.heroStatItem}>
              <stat.icon size={18} className={care.heroStatIcon} />
              <span className={care.heroStatNum}>{stat.value}</span>
              <span className={care.heroStatLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>


      {/* ── 2. What is CARE? ── */}
      <section className={care.whatIsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.whatIsGrid}>

              {/* ── Left: headline + intro + CARE acronym + stat cards ── */}
              <div>
                <div className={care.sectionBadge}><TbBolt size={14} /> What is CARE?</div>
                <h2 className={care.whatIsHeadline}>
                  <span className={care.whatIsHeadlinePre}>The Campus is Where</span>
                  <span className={care.whatIsHeadlineAccent}>the Movement Starts</span>
                </h2>

                {/* Intro paragraph */}
                <p className={care.whatIsIntro}>
                  CARE is India&apos;s first structured, student-led campus programme for menstrual sustainability.
                  Unlike one-off awareness drives, CARE targets the campus as a unit - building
                  ambassadors, breaking taboos, and shifting an entire generation toward reusable products.
                  No cost to the college. Real, measurable impact.
                </p>

                {/* CARE Acronym Breakdown */}
                <div className={care.careAcronym}>
                  {[
                    { letter: 'C', word: 'Campus',    meaning: 'Taking the shift to where 200+ girls live, learn, and lead together.' },
                    { letter: 'A', word: 'Action',    meaning: 'Real campaigns and real products - not just awareness posters.' },
                    { letter: 'R', word: 'Reusable',  meaning: 'Cloth pads, menstrual cups, and period panties replacing disposables.' },
                    { letter: 'E', word: 'Essentials', meaning: 'A need every girl has, every month, for the next 30 years of her life.' },
                  ].map((item) => (
                    <motion.div key={item.letter} variants={fadeInUp} className={care.careAcronymRow}>
                      <span className={care.careAcronymLetter}>{item.letter}</span>
                      <span className={care.careAcronymWord}>{item.word}</span>
                      <span className={care.careAcronymMeaning}>{item.meaning}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stat mini-cards */}
                <div className={care.whatIsStatGrid}>
                  {[
                    { value: '₹0',    label: 'Cost to the college',        accent: '#7C3AED' },
                    { value: '200',   label: 'Girls = 1 ton CO₂ prevented', accent: '#C026D3' },
                    { value: 'NAAC',  label: 'Reportable sustainability impact', accent: '#E8185A' },
                  ].map((stat) => (
                    <div key={stat.value} className={care.whatIsStatCard} style={{ '--stat-accent': stat.accent } as React.CSSProperties}>
                      <span className={care.whatIsStatValue}>{stat.value}</span>
                      <span className={care.whatIsStatLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: bento mosaic grid ── */}
              <motion.div variants={stagger} className={care.bentoGrid}>
                {whatIsPoints.map((point, i) => (
                  <motion.div
                    key={point.title}
                    variants={fadeInUp}
                    transition={{ type: 'spring', stiffness: 110, damping: 20, delay: i * 0.1 }}
                    className={care.bentoCard}
                  >
                    <div className={care.bentoCardStripe} />
                    <div className={care.bentoCardBody}>
                      <div className={care.bentoCardIcon}>
                        <point.icon size={i === 0 ? 28 : 24} />
                      </div>
                      <div className={care.bentoCardText}>
                        <span className={care.bentoCardNum}>0{i + 1}</span>
                        <div className={care.bentoCardTitle}>{point.title}</div>
                        <p className={care.bentoCardDesc}>{point.desc}</p>
                      </div>
                    </div>

                    {/* Student image fills white space in card 1 */}
                    {i === 0 && (
                      <div className={care.bentoCardImageWrap}>
                        <Image
                          src="/CARE Page Photos/Students.png"
                          alt="CARE student ambassadors"
                          fill
                          className={care.bentoCardImage}
                          sizes="220px"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* ── Colleges Slider ── */}
      <section className={care.collegesSection}>
        <div className={care.collegesHeader}>
          <div className={care.collegesLabel}>Campuses on CARE</div>
          <div className={care.collegesTitle}>Colleges Driving the Movement</div>
        </div>

        <div className={care.sliderOuter}>
          {/* Row 1 — scrolls left */}
          <div className={care.sliderRow}>
            <div className={care.sliderTrack}>
              {[...row1, ...row1].map((f, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <div key={i} className={care.sliderLogoCard}>
                  <img
                    src={`/CollgeLOGO/${f}`}
                    alt={`Partner college ${(i % row1.length) + 1}`}
                    className={care.sliderLogoImg}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className={`${care.sliderRow} ${care['sliderRow--rtl']}`}>
            <div className={care.sliderTrack}>
              {[...row2, ...row2].map((f, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <div key={i} className={care.sliderLogoCard}>
                  <img
                    src={`/CollgeLOGO/${f}`}
                    alt={`Partner college ${(i % row2.length) + 9}`}
                    className={care.sliderLogoImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── How It Works ── */}
      <section className={care.careathonSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.careathonHeader}>
              <div className={care.sectionBadge}><TbBolt size={14} /> How It Works</div>
              <h2 className={care.careathonTitle}>Five Steps to a Greener Campus</h2>
              <p className={care.careathonSubtitle}>
                From expressing interest to reporting measurable impact — the CARE journey is
                designed to be simple, student-driven, and completely cost-free for your college.
              </p>
            </motion.div>

            {/* ── Horizontal step timeline ── */}
            <div className={care.careathonTrack}>
              {careathonSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.08 }}
                  className={care.careathonStepWrap}
                  style={{ '--step-color': step.color, '--step-gradient': step.gradient, '--step-glow': step.glow } as React.CSSProperties}
                >
                  {/* Circle badge */}
                  <div className={care.careathonCircle}>
                    <step.icon size={22} />
                    <span className={care.careathonCircleNum}>{step.num}</span>
                  </div>
                  {/* Content card */}
                  <div className={care.careathonStepCard}>
                    <div className={care.careathonStepTitle}>{step.title}</div>
                    <p className={care.careathonStepDesc}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Nodal College — premium light split card ── */}
            <motion.div variants={fadeInUp} className={care.nodalCallout}>
              {/* Left: content */}
              <div className={care.nodalCalloutLeft}>
                <div className={care.nodalCalloutBadge}>
                  <TbTrophy size={13} /> Exclusive Recognition
                </div>
                <h3 className={care.nodalCalloutTitle}>Become a Nodal CARE College</h3>
                <p className={care.nodalCalloutDesc}>
                  High-performing campuses are invited to the top tier of CARE — guiding
                  neighbouring colleges, earning national recognition, and leading India&apos;s
                  campus sustainability movement.
                </p>
                <div className={care.nodalBenefits}>
                  {[
                    'Guide neighbouring colleges in your city',
                    'Eligible for CARE Awards — Best Campus',
                    'National sustainability leader recognition',
                    'Priority Saukhyam Foundation partnership',
                  ].map((b) => (
                    <div key={b} className={care.nodalBenefitItem}>
                      <TbCheck size={14} />
                      {b}
                    </div>
                  ))}
                </div>
                <Link href="/programs/care/register" className={care.nodalCta}>
                  <TbTrophy size={17} />
                  Apply for Nodal Status
                  <TbArrowRight size={17} />
                </Link>
              </div>
              {/* Right: visual accent */}
              <div className={care.nodalCalloutRight}>
                <div className={care.nodalCalloutRightIcon}>
                  <TbTrophy size={40} />
                </div>
                <div className={care.nodalCalloutRightStat}>Top 5%</div>
                <div className={care.nodalCalloutRightStatLabel}>
                  of all CARE colleges<br />earn Nodal status
                </div>
                <div className={care.nodalCalloutRightTag}>
                  <TbAward size={13} /> Invitation-Only
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 3. CARE Structure ── */}
      <section className={care.structureSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.structureHeader}>
              <div className={care.sectionBadge}><TbUsers size={14} /> The CARE Team</div>
              <h2 className={care.structureTitle}>Roles, Responsibilities<br />and Campaigns</h2>
              <p className={care.structureSubtitle}>
                Every CARE implementation has three layers: a student team, a faculty support team,
                and a campus store making reusable products available.
              </p>
            </motion.div>

            {/* Role cards */}
            <motion.div variants={stagger} className={care.rolesGrid}>
              <motion.div variants={fadeInUp} className={care.roleCard}>
                <div className={care.roleCardHeader}>
                  <div className={care.roleIconCircle}><TbUsers size={28} /></div>
                  <div className={care.roleCardNum}>01</div>
                </div>
                <div className={care.roleCardBody}>
                  <div className={care.roleLabel}>Students</div>
                  <div className={care.roleTitle}>CARE Ambassadors</div>
                  <div className={care.roleCount}>Team of 4–5</div>
                  <p className={care.roleDesc}>
                    Chosen from students who have already made the shift themselves. They run hostel
                    campaigns, solidarity circles, and pop-up stalls — the engine of the movement.
                    Both boys and girls are welcome.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className={care.roleCard}>
                <div className={care.roleCardHeader}>
                  <div className={care.roleIconCircle}><TbSchool size={28} /></div>
                  <div className={care.roleCardNum}>02</div>
                </div>
                <div className={care.roleCardBody}>
                  <div className={care.roleLabel}>Faculty / Staff</div>
                  <div className={care.roleTitle}>CARE Mentors</div>
                  <div className={care.roleCount}>Team of 2–3</div>
                  <p className={care.roleDesc}>
                    Faculty or staff members with standing in the college who provide visible support
                    to the ambassador team. Their presence and authority enables the campaign
                    to reach wider and persist longer.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className={care.roleCard}>
                <div className={care.roleCardHeader}>
                  <div className={care.roleIconCircle}><TbBuildingCommunity size={28} /></div>
                  <div className={care.roleCardNum}>03</div>
                </div>
                <div className={care.roleCardBody}>
                  <div className={care.roleLabel}>Campus Store</div>
                  <div className={care.roleTitle}>Product Access</div>
                  <div className={care.roleCount}>Multi-brand</div>
                  <p className={care.roleDesc}>
                    Reusable pads of multiple brands, menstrual cups, and period panties made
                    available in the campus store. Saukhyam Foundation coordinates availability
                    with partner brands at no cost to the college.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Campaign types */}
            <motion.div variants={fadeInUp}>
              <div className={care.campaignsSub}>Our Campaigns</div>
            </motion.div>
            <motion.div variants={stagger} className={care.campaignsGrid}>
              {campaignTypes.map((c) => (
                <motion.div key={c.title} variants={fadeInUp} className={care.campaignCard}>
                  <div className={care.campaignIcon}><c.icon size={22} /></div>
                  <div className={care.campaignTitle}>{c.title}</div>
                  <div className={care.campaignDesc}>{c.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 4. Boys in the Conversation ── */}
      <section className={care.boysSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.boysGrid}>
              <div className={care.boysContent}>
                <div className={care.sectionBadge}><TbUsers size={14} /> Breaking Taboos</div>
                <h2>Boys Are Part of<br />This Conversation</h2>
                <p>
                  If only girls talk about periods, boys are never included in that conversation -
                  and taboos persist for another generation. CARE is intentionally designed so that
                  boys are equal participants.
                </p>
                <p>
                  Boys can design posters, man stalls, and act as ambassadors. Their visible
                  participation normalises the conversation, creates safer spaces for girls to
                  ask questions, and accelerates the culture shift on campus.
                </p>
                <div className={care.boysRoles}>
                  {['Design Posters', 'Man Stalls', 'Campus Ambassadors', 'Solidarity Circles', 'Awareness Campaigns'].map((role) => (
                    <span key={role} className={care.boysRolePill}>
                      <TbCheck size={14} /> {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className={care.videoFrame}>
                  <iframe
                    src="https://www.youtube.com/embed/fB9_nJ-j2v0"
                    title="Boys in the menstrual health conversation - 1 crore views"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className={care.videoCaption}>
                  Over 1 crore views — why including boys transforms the conversation
                </p>
                <a
                  href="https://www.youtube.com/watch?v=fB9_nJ-j2v0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={care.videoFallback}
                >
                  <TbArrowRight size={11} /> Also available on YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 5. Climate Impact ── */}
      <section className={care.impactSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.impactHeader}>
              <div className={care.sectionBadge} style={{ color: 'var(--care-hero-accent)' }}>
                <TbLeaf size={14} /> Measured. Published. Real.
              </div>
              <h2 className={care.impactTitle}>The Climate Impact</h2>
              <p className={care.impactSubtitle}>
                These numbers are based on peer-reviewed Life Cycle Assessment (LCA) research
                validated by an independent European environmental research group.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.impactGrid}>
              {impactCards.map((card) => (
                <motion.div key={card.label} variants={fadeInUp} className={care.impactCard}>
                  <CountUpStat num={card.num} unit={card.unit} />
                  <p className={care.impactLabel}>{card.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className={care.impactEquation}>
              <p>
                <strong>The equation:</strong> 1 girl switching saves 5.8 kg CO\u2082/year &times; 200 girls
                = <strong>1 ton CO\u2082 equivalent per year</strong>, every year, for the rest of their menstruating lifetime.
                This is equivalent to the annual carbon absorption of approximately 45 mature trees.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 6. Campus Benefits ── */}
      <section className={care.benefitsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.structureHeader}>
              <div className={care.sectionBadge}><TbStar size={14} /> What the Campus Gains</div>
              <h2 className={care.structureTitle}>
                No Cost. Real Gains.
              </h2>
              <p className={care.structureSubtitle}>
                Colleges that run CARE incur no expenses. What they gain is significant —
                in accreditation, in culture, and in the conversations their students have.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.benefitsGrid}>
              {campusBenefits.map((benefit) => (
                <motion.div key={benefit.title} variants={fadeInUp} className={care.benefitCard}>
                  <div className={care.benefitIconCircle}><benefit.icon size={26} /></div>
                  <h3 className={care.benefitTitle}>{benefit.title}</h3>
                  <p className={care.benefitDesc}>{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── Campus Events Timeline ── */}
      <section className={care.eventsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.eventsHeader}>
              <div className={care.sectionBadge}><TbCalendarEvent size={14} /> Mark Your Calendar</div>
              <h2 className={care.structureTitle}>Key Events in the CARE Year</h2>
              <p className={care.structureSubtitle}>
                CARE runs year-round. These are the anchor moments every campus should plan around.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.eventsGrid}>
              {campusEvents.map((ev) => (
                <motion.div key={ev.name} variants={fadeInUp} className={care.eventCard}>
                  <div className={care.eventTag}>{ev.tag}</div>
                  <div className={care.eventMonth}>{ev.month}</div>
                  <div className={care.eventName}>{ev.name}</div>
                  <p className={care.eventDesc}>{ev.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 7. CARE Awards ── */}
      <section className={care.awardsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.awardsHeader}>
              <div className={care.sectionBadge}>
                <TbAward size={14} /> Annual Recognition
              </div>
              <h2 className={care.awardsTitle}>CARE Awards</h2>
              <p className={care.awardsSubtitle}>
                Every year, Saukhyam Foundation hosts the CARE Awards to recognise the students
                and faculty who drove the most impactful campus transformations.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.awardsGrid}>
              {awardCategories.map((award) => (
                <motion.div key={award.title} variants={fadeInUp} className={care.awardCard}>
                  <div className={care.awardCardHeader}>
                    <div className={care.awardIconCircle}><award.icon size={30} /></div>
                  </div>
                  <div className={care.awardCardBody}>
                    <div className={care.awardCategory}>{award.category}</div>
                    <h3 className={care.awardTitle}>{award.title}</h3>
                    <p className={care.awardDesc}>{award.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className={care.nominationsStatus}>
              {notifSent ? (
                <div className={care.nominationsSuccess}>
                  <TbCheck size={20} />
                  <span>
                    You&apos;re on the list! We&apos;ll notify you when CARE Awards nominations
                    open in <strong>{notifCity}</strong>.
                  </span>
                </div>
              ) : (
                <>
                  <p className={care.nominationsStatusLabel}>
                    <strong>Nominations open city by city.</strong>{' '}Get notified the moment
                    they open in your region — no spam, just one email.
                  </p>
                  <form className={care.nominationsForm} onSubmit={handleNotifSubmit}>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={notifEmail}
                      onChange={(e) => setNotifEmail(e.target.value)}
                      className={care.nominationsInput}
                    />
                    <select
                      required
                      value={notifCity}
                      onChange={(e) => setNotifCity(e.target.value)}
                      className={care.nominationsSelect}
                    >
                      <option value="" disabled>Select city</option>
                      {['Ahmedabad','Bengaluru','Bhopal','Chennai','Delhi','Hyderabad',
                        'Indore','Jaipur','Kolkata','Lucknow','Mumbai','Nagpur',
                        'Pune','Surat','Vadodara','Other'].map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <button type="submit" className={care.nominationsSubmitBtn}>
                      <TbMail size={15} /> Notify Me
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 8. Partner Brand Section ── */}
      <section className={care.ctaBanner}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp}>Are You a Reusable Brand?</motion.h2>
            <motion.p variants={fadeInUp}>
              CARE works with multiple brands - not just Saukhyam. If you make reusable menstrual
              products, join the movement and get your products into campus stores across India.
              No exclusivity. Real reach.
            </motion.p>
            <motion.div variants={fadeInUp} className={care.ctaBannerBtns}>
              <Link href="/programs/care/partner" className={care.ctaBannerPrimary}>
                <TbBriefcase size={18} />
                Submit Brand Partnership
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

