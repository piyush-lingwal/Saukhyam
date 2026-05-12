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
  TbCheck,
  TbArrowRight,
  TbBolt,
  TbCertificate,
  TbMail,
  TbAward,
  TbBriefcase,
  TbStar,
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
            A student-led menstrual health
            <span className={care.heroHeadlineAccent}>movement</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className={care.heroSubcopy}>
            CARE transforms college campuses - building student ambassadors, breaking taboos,
            and shifting an entire generation toward reusable menstrual products.
            No cost to the college.<br />Real, measurable climate impact.
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
                    {idx === 0 && (
                      <Link
                        href="/programs/care/register"
                        className={care.stepCardCta}
                      >
                        Get Started <TbArrowRight size={13} />
                      </Link>
                    )}
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
                    'National sustainability leader recognition',
                  ].map((b) => (
                    <div key={b} className={care.nodalBenefitItem}>
                      <TbCheck size={14} />
                      {b}
                    </div>
                  ))}
                </div>
                <Link href="/programs/care/nodal" className={care.nodalCta}>
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

