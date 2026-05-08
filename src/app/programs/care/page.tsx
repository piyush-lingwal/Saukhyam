'use client';

import { useEffect, useState } from 'react';
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
  TbFlask,
  TbCertificate,
  TbWorld,
  TbHeartHandshake,
  TbBriefcase,
  TbMail,
  TbSend,
  TbShieldCheck,
  TbRecycle,
  TbAward,
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

const campusEvents = [
  {
    month: 'July',
    name: 'Plastic Free Month',
    desc: 'Microplastics from disposable pads enter our bodies and most people do not know about this. CARE runs awareness campaigns around plastic-free choices for periods.',
    accent: '#0D9488',
  },
  {
    month: 'September',
    name: 'PCOS Awareness Month',
    desc: 'Run the HEAL challenge on campus - connect period health with the chemical exposure from disposable pads. PCOS affects 6 crore Indian women.',
    accent: '#0F766E',
  },
  {
    month: 'April',
    name: 'Earth Day',
    desc: '1 girl switching saves 125+ kg of lifetime pad waste. Earth Day is a powerful moment for campus-wide sustainability pledges.',
    accent: '#134E4A',
  },
  {
    month: 'June',
    name: 'World Environment Day',
    desc: 'Celebrate the campus\'s progress toward its sustainability and carbon reduction commitments with visible campaigns and ambassador recognitions.',
    accent: '#0D9488',
  },
];

const careathonSteps = [
  {
    num: '01',
    title: 'Implement CARE on Your Campus',
    desc: 'One college implements CARE properly - across at least two semesters - with ambassadors, mentors, store availability, and sustained campaigns.',
  },
  {
    num: '02',
    title: 'Become a Nodal College',
    desc: 'After a full year of successful implementation, the college is ready to host a Careathon in its city. Full credit to Tula\'s Institute, Dehradun for coining this term.',
  },
  {
    num: '03',
    title: 'Host a Careathon',
    desc: 'Invite other colleges in the city to participate in a semester-long competition. Teams sign up, set targets, and work to make the same shift on their campuses.',
  },
  {
    num: '04',
    title: 'Sustain and Graduate',
    desc: 'After the Careathon, all colleges continue their CARE implementation. Ambassadors graduate and new teams are formed - the movement becomes self-sustaining.',
  },
];

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

/* ── Component ───────────────────────────────────────────── */

interface BrandForm {
  brandName: string;
  productType: string;
  website: string;
  email: string;
  message: string;
}

interface CollegeForm {
  collegeName: string;
  city: string;
  contactPerson: string;
  designation: string;
  email: string;
  message: string;
}

export default function CarePage() {
  const [brandForm, setBrandForm] = useState<BrandForm>({
    brandName: '', productType: '', website: '', email: '', message: '',
  });
  const [collegeForm, setCollegeForm] = useState<CollegeForm>({
    collegeName: '', city: '', contactPerson: '', designation: '', email: '', message: '',
  });
  const [brandSubmitted, setBrandSubmitted] = useState(false);
  const [collegeSubmitted, setCollegeSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'care';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, []);

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBrandSubmitted(true);
  };

  const handleCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCollegeSubmitted(true);
  };

  return (
    <div className={care.carePage}>

      {/* ── 1. Hero ── */}
      <section className={care.heroSection}>
        <div className={care.heroTopBar} aria-hidden="true" />

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

          <motion.a variants={fadeInUp} href="#college-form" className={care.heroCta}>
            <TbSchool size={18} />
            Bring CARE to Your Campus
            <TbArrowRight size={18} />
          </motion.a>
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
              <div className={care.whatIsText}>
                <div className={care.sectionBadge}>
                  <TbBolt size={14} /> What is CARE?
                </div>
                <h2 className="sectionTitle" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--care-teal-dark)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 'var(--space-5)' }}>
                  The Campus is Where
                  the Movement Starts
                </h2>
                <p>
                  CARE stands for <strong>Campus Action for Reusable Essentials</strong>. It is a structured,
                  student-driven programme designed to shift an entire college campus away from
                  disposable sanitary napkins toward reusable menstrual products.
                </p>
                <p>
                  Unlike individual health programmes, CARE targets the campus as a unit. When
                  200 girls on a single campus make the shift, the climate impact is measurable,
                  reportable, and transformative. And because it is student-led, the change
                  runs deeper than any top-down policy.
                </p>
                <p>
                  The role of campus administration is to provide visible support. The role of
                  Saukhyam Foundation is to supply products, training, and campaign materials.
                  The role of student ambassadors is everything else.
                </p>
              </div>

              <div className={care.whatIsKeyPoints}>
                {whatIsPoints.map((point) => (
                  <motion.div key={point.title} variants={fadeInUp} className={care.keyPointCard}>
                    <div className={care.keyPointIcon}>
                      <point.icon size={22} />
                    </div>
                    <div>
                      <div className={care.keyPointTitle}>{point.title}</div>
                      <div className={care.keyPointDesc}>{point.desc}</div>
                    </div>
                  </motion.div>
                ))}
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
                <div className={care.roleIconCircle}><TbUsers size={28} /></div>
                <div className={care.roleLabel}>Students</div>
                <div className={care.roleTitle}>CARE Ambassadors</div>
                <div className={care.roleCount}>Team of 4-5</div>
                <p className={care.roleDesc}>
                  Chosen from students who have already made the shift themselves. They run hostel
                  campaigns, solidarity circles, and pop-up stalls. They are the engine of the movement.
                  Both boys and girls are welcome.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className={care.roleCard}>
                <div className={care.roleIconCircle}><TbSchool size={28} /></div>
                <div className={care.roleLabel}>Faculty / Staff</div>
                <div className={care.roleTitle}>CARE Mentors</div>
                <div className={care.roleCount}>Team of 2-3</div>
                <p className={care.roleDesc}>
                  Faculty or staff members with standing in the college who provide visible support
                  to the ambassador team. Their presence and authority enables the campaign
                  to reach wider and persist longer.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className={care.roleCard}>
                <div className={care.roleIconCircle}><TbBuildingCommunity size={28} /></div>
                <div className={care.roleLabel}>Campus Store</div>
                <div className={care.roleTitle}>Product Access</div>
                <div className={care.roleCount}>Multi-brand</div>
                <p className={care.roleDesc}>
                  Reusable pads of multiple brands, menstrual cups, and period panties are made
                  available in the campus store. Saukhyam Foundation coordinates availability
                  with partner brands at no cost to the college.
                </p>
              </motion.div>
            </motion.div>

            {/* Campaign types */}
            <motion.div variants={stagger} className={care.campaignsGrid}>
              {campaignTypes.map((c) => (
                <motion.div key={c.title} variants={fadeInUp} className={care.campaignCard}>
                  <div className={care.campaignIcon}><c.icon size={24} /></div>
                  <div className={care.campaignTitle}>{c.title}</div>
                  <div className={care.campaignDesc}>{c.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 4. 16% Tipping Point ── */}
      <section className={care.diffusionSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.diffusionHeader}>
              <div className={care.sectionBadge} style={{ color: 'var(--care-hero-accent)' }}>
                <TbChartLine size={14} /> The Science of Adoption
              </div>
              <h2 className={care.diffusionTitle}>Why 16% Is the Target</h2>
              <p className={care.diffusionSubtitle}>
                Every new idea spreads through a population following a predictable bell curve.
                Cross 16% and the shift becomes self-sustaining. Fall short and the movement stalls.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={care.diffusionContent}>
              {/* Bell Curve SVG */}
              <div className={care.bellCurveWrap}>
                <svg viewBox="0 0 400 220" className={care.bellCurveSvg} aria-label="Diffusion of Innovation bell curve">
                  {/* Axes */}
                  <line x1="40" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

                  {/* Filled area up to 16% — the "chasm" zone */}
                  <path
                    d="M40,180 C55,180 65,175 80,160 C95,145 100,125 115,108 L115,180 Z"
                    fill="rgba(215,119,6,0.25)"
                    stroke="none"
                  />

                  {/* Bell curve fill area after 16% */}
                  <path
                    d="M115,108 C130,92 145,60 180,35 C215,10 235,10 270,35 C305,60 320,92 335,120 C350,148 360,165 375,175 L375,180 L115,180 Z"
                    fill="rgba(13,148,136,0.2)"
                    stroke="none"
                  />

                  {/* Bell curve line */}
                  <path
                    d="M40,180 C55,180 65,175 80,160 C95,145 100,125 115,108 C130,92 145,60 180,35 C215,10 235,10 270,35 C305,60 320,92 335,120 C350,148 360,165 375,175"
                    fill="none"
                    stroke="rgba(167,243,208,0.85)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* 16% vertical marker */}
                  <line x1="115" y1="30" x2="115" y2="180" stroke="#34D399" strokeWidth="2" strokeDasharray="6,3" />
                  <text x="118" y="45" fill="#34D399" fontSize="11" fontWeight="700">16%</text>
                  <text x="118" y="58" fill="rgba(167,243,208,0.7)" fontSize="9">Tipping Point</text>

                  {/* Chasm label */}
                  <text x="55" y="168" fill="rgba(215,185,100,0.85)" fontSize="9" fontWeight="700">The Chasm</text>

                  {/* Axis labels */}
                  <text x="185" y="198" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">% of campus who have switched</text>
                  <text x="30" y="100" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle" transform="rotate(-90, 30, 100)">Adoption speed</text>

                  {/* Segments */}
                  <text x="75" y="120" fill="rgba(215,185,100,0.65)" fontSize="8" textAnchor="middle">Innovators</text>
                  <text x="160" y="75" fill="rgba(167,243,208,0.7)" fontSize="8" textAnchor="middle">Early Majority</text>
                  <text x="270" y="70" fill="rgba(167,243,208,0.7)" fontSize="8" textAnchor="middle">Late Majority</text>
                  <text x="355" y="150" fill="rgba(167,243,208,0.5)" fontSize="8" textAnchor="middle">Laggards</text>
                </svg>
              </div>

              {/* Explanation points */}
              <div className={care.diffusionPoints}>
                <motion.div variants={fadeInUp} className={care.diffusionPoint}>
                  <div className={care.diffusionPointNum}>16%</div>
                  <div>
                    <div className={care.diffusionPointTitle}>The Campus Tipping Point</div>
                    <p className={care.diffusionPointDesc}>
                      Once 16% of menstruating students on a campus have switched to reusable
                      products, the adoption becomes self-sustaining. Peer influence takes over
                      and the campaign no longer needs to push as hard.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className={care.diffusionPoint}>
                  <div className={care.diffusionPointNum}>1 yr</div>
                  <div>
                    <div className={care.diffusionPointTitle}>Time to Reach 16%</div>
                    <p className={care.diffusionPointDesc}>
                      A team of 4-5 ambassadors working one-on-one, sustained over two semesters,
                      can reach the 16% tipping point on most campuses. One semester is given,
                      with a second if needed.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className={care.diffusionPoint}>
                  <div className={care.diffusionPointNum}>&nbsp;</div>
                  <div>
                    <div className={care.diffusionPointTitle}>Calculate Your Campus Target</div>
                    <p className={care.diffusionPointDesc}>
                      The ambassador team starts by calculating: How many girls are on this campus?
                      What is 16% of that number? That becomes the goal - and it guides the entire
                      campaign strategy.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 5. Key Campus Events ── */}
      <section className={care.eventsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.eventsHeader}>
              <div className={care.sectionBadge}><TbCalendarEvent size={14} /> Key Dates</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--care-teal-dark)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 'var(--space-4)' }}>
                Run Campaigns on These Days
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
                These dates give campaigns a hook - a reason to reach out, put up posters,
                and host events that are already on the public consciousness.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.eventsGrid}>
              {campusEvents.map((ev) => (
                <motion.div key={ev.name} variants={fadeInUp} className={care.eventCard}>
                  <div className={care.eventMonth}>{ev.month}</div>
                  <div className={care.eventName}>{ev.name}</div>
                  <p className={care.eventDesc}>{ev.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 6. Careathon ── */}
      <section className={care.careathonSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.careathonHeader}>
              <div className={care.sectionBadge}><TbTrophy size={14} /> Multi-College Competition</div>
              <h2 className={care.careathonTitle}>What is a Careathon?</h2>
              <p className={care.careathonSubtitle}>
                Just as a hackathon brings coders together to solve problems, a Careathon brings
                colleges together to compete on sustainability. Coined by Tula&apos;s Institute, Dehradun.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.careathonTrack}>
              {careathonSteps.map((step, idx) => (
                <div key={step.num}>
                  <motion.div variants={fadeInUp} className={care.careathonStep}>
                    <div className={care.careathonStepNum}>{step.num}</div>
                    <div>
                      <div className={care.careathonStepTitle}>{step.title}</div>
                      <p className={care.careathonStepDesc}>{step.desc}</p>
                    </div>
                  </motion.div>
                  {idx < careathonSteps.length - 1 && (
                    <div className={care.careathonConnector}>
                      <div className={care.careathonConnectorLine} />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Nodal College callout */}
            <motion.div variants={fadeInUp} className={care.nodalCallout}>
              <div className={care.nodalCalloutIcon}><TbBuildingCommunity size={24} /></div>
              <div>
                <div className={care.nodalCalloutTitle}>Become a Nodal College</div>
                <p className={care.nodalCalloutDesc}>
                  If your city already has a CARE implementation, you can join a future Careathon.
                  If your city does not yet have CARE - sign up below to be the first. As a Nodal College,
                  you will eventually host the Careathon for your city.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 7. CARE Awards ── */}
      <section className={care.awardsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.awardsHeader}>
              <div className={care.sectionBadge} style={{ color: 'var(--care-hero-accent)' }}>
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
                  <div className={care.awardIconCircle}><award.icon size={30} /></div>
                  <div className={care.awardCategory}>{award.category}</div>
                  <h3 className={care.awardTitle}>{award.title}</h3>
                  <p className={care.awardDesc}>{award.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className={care.nominationsStatus}>
              <div className={care.nominationsBadge}>
                <TbCalendarEvent size={16} />
                Nominations open city by city - check back when announced for your region
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 8. Boys in the Conversation ── */}
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
                  Over 1 crore views - why including boys transforms the conversation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 9. Climate Impact ── */}
      <section className={care.impactSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.impactHeader}>
              <div className={care.sectionBadge} style={{ color: 'var(--care-hero-accent)' }}>
                <TbLeaf size={14} /> Measured. Published. Real.
              </div>
              <h2 className={care.impactTitle}>The Climate Impact</h2>
              <p className={care.impactSubtitle}>
                These numbers come from published literature and calculations validated in
                collaboration with a European research institute.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.impactGrid}>
              {impactCards.map((card) => (
                <motion.div key={card.label} variants={fadeInUp} className={care.impactCard}>
                  <div className={care.impactNum}>
                    {card.num}
                    {card.unit && <span className={care.impactNumUnit}>{card.unit}</span>}
                  </div>
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


      {/* ── 10. Campus Benefits ── */}
      <section className={care.benefitsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
              <div className={care.sectionBadge}><TbStar size={14} /> What the Campus Gains</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--care-teal-dark)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 'var(--space-4)' }}>
                No Cost. Real Gains.
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
                Colleges that run CARE incur no expenses. What they gain is significant -
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


      {/* ── 11. Forms ── */}
      <section id="college-form" className={care.formsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.formsHeader}>
              <div className={care.sectionBadge}><TbHeartHandshake size={14} /> Join the Movement</div>
              <h2 className={care.formsTitle}>Two Ways to Get Involved</h2>
              <p className={care.formsSubtitle}>
                Whether you are a brand wanting to partner with CARE, or a college
                ready to start the movement on your campus - reach out here.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.formsGrid}>

              {/* Form A — Brand Partnership */}
              <motion.div variants={fadeInUp} className={care.formCard}>
                <div className={care.formCardIcon}><TbBriefcase size={24} /></div>
                <h3 className={care.formCardTitle}>Partner Brand Sign-up</h3>
                <p className={care.formCardDesc}>
                  Are you a brand making reusable menstrual products? Join the CARE movement and
                  make your products available in campus stores across India.
                </p>

                {brandSubmitted ? (
                  <div className={care.formSuccessMsg}>
                    <TbShieldCheck size={20} />
                    Thank you! We will be in touch with you shortly about the CARE partnership.
                  </div>
                ) : (
                  <form onSubmit={handleBrandSubmit}>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Brand Name *</label>
                      <input
                        type="text"
                        required
                        className={care.formInput}
                        placeholder="Your brand name"
                        value={brandForm.brandName}
                        onChange={(e) => setBrandForm({ ...brandForm, brandName: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Product Type *</label>
                      <select
                        required
                        className={care.formSelect}
                        value={brandForm.productType}
                        onChange={(e) => setBrandForm({ ...brandForm, productType: e.target.value })}
                      >
                        <option value="">Select product type</option>
                        <option value="reusable-pads">Reusable Cloth Pads</option>
                        <option value="menstrual-cup">Menstrual Cups</option>
                        <option value="period-panties">Period Panties</option>
                        <option value="multiple">Multiple Product Types</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Website</label>
                      <input
                        type="url"
                        className={care.formInput}
                        placeholder="https://yourbrand.com"
                        value={brandForm.website}
                        onChange={(e) => setBrandForm({ ...brandForm, website: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Contact Email *</label>
                      <input
                        type="email"
                        required
                        className={care.formInput}
                        placeholder="you@yourbrand.com"
                        value={brandForm.email}
                        onChange={(e) => setBrandForm({ ...brandForm, email: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Message</label>
                      <textarea
                        className={care.formTextarea}
                        placeholder="Tell us about your brand and why you want to partner with CARE..."
                        value={brandForm.message}
                        onChange={(e) => setBrandForm({ ...brandForm, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className={care.formSubmitBtn}>
                      <TbSend size={18} /> Submit Brand Partnership
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Form B — College Sign-up */}
              <motion.div variants={fadeInUp} className={care.formCard}>
                <div className={care.formCardIcon}><TbSchool size={24} /></div>
                <h3 className={care.formCardTitle}>College Sign-up</h3>
                <p className={care.formCardDesc}>
                  Ready to start CARE on your campus? Fill in this form and we will reach out
                  to help you get started - or add you to an upcoming Careathon in your city.
                </p>

                {collegeSubmitted ? (
                  <div className={care.formSuccessMsg}>
                    <TbShieldCheck size={20} />
                    Thank you! We will be in touch with details on starting CARE at your campus.
                  </div>
                ) : (
                  <form onSubmit={handleCollegeSubmit}>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>College / University Name *</label>
                      <input
                        type="text"
                        required
                        className={care.formInput}
                        placeholder="Your institution name"
                        value={collegeForm.collegeName}
                        onChange={(e) => setCollegeForm({ ...collegeForm, collegeName: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>City *</label>
                      <input
                        type="text"
                        required
                        className={care.formInput}
                        placeholder="City"
                        value={collegeForm.city}
                        onChange={(e) => setCollegeForm({ ...collegeForm, city: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Your Name *</label>
                      <input
                        type="text"
                        required
                        className={care.formInput}
                        placeholder="Contact person name"
                        value={collegeForm.contactPerson}
                        onChange={(e) => setCollegeForm({ ...collegeForm, contactPerson: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Designation</label>
                      <input
                        type="text"
                        className={care.formInput}
                        placeholder="Student / Faculty / NSS Coordinator / Other"
                        value={collegeForm.designation}
                        onChange={(e) => setCollegeForm({ ...collegeForm, designation: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Email *</label>
                      <input
                        type="email"
                        required
                        className={care.formInput}
                        placeholder="your@college.edu"
                        value={collegeForm.email}
                        onChange={(e) => setCollegeForm({ ...collegeForm, email: e.target.value })}
                      />
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Message</label>
                      <textarea
                        className={care.formTextarea}
                        placeholder="Tell us about your campus - number of students, current sustainability efforts, what motivated you to reach out..."
                        value={collegeForm.message}
                        onChange={(e) => setCollegeForm({ ...collegeForm, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className={care.formSubmitBtn}>
                      <TbSend size={18} /> Register My Campus
                    </button>
                  </form>
                )}
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 12. CTA Banner ── */}
      <section className={care.ctaBanner}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp}>
              Start CARE on Your Campus
            </motion.h2>
            <motion.p variants={fadeInUp}>
              No cost. No complexity. Student-led, supported by Saukhyam Foundation.
              One campus can change a city.
            </motion.p>
            <motion.div variants={fadeInUp} className={care.ctaBannerBtns}>
              <a href="#college-form" className={care.ctaBannerPrimary}>
                <TbSchool size={18} />
                Register Your Campus
                <ArrowRight size={18} />
              </a>
              <Link href="/contact" className={care.ctaBannerSecondary}>
                <TbMail size={18} />
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
