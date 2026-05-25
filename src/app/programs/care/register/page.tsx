'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  TbSchool,
  TbUsers,
  TbChartLine,
  TbCalendarEvent,
  TbBuildingCommunity,
  TbTrophy,
  TbArrowRight,
  TbHeartHandshake,
  TbSend,
  TbShieldCheck,
  TbCheck,
  TbBolt,
  TbMessageCircle,
  TbStar,
  TbRecycle,
  TbWorld,
  TbAward,
  TbCertificate,
  TbMail,
} from 'react-icons/tb';
import care from '../care.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Data ─────────────────────────────────────────────────────── */

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
    month: 'July',
    name: 'Plastic Free Month',
    desc: 'Microplastics from disposable pads enter our bodies and most people do not know about this. CARE runs awareness campaigns around plastic-free choices for periods.',
    tag: 'Awareness Month',
  },
  {
    month: 'September',
    name: 'PCOS/PMOS Awareness Month',
    desc: 'Run the HEAL challenge on campus, connect period health with the chemical exposure from disposable pads. PCOS/PMOS affects 6 crore Indian women.',
    tag: 'Awareness Month',
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


const whatIsPoints = [
  {
    icon: TbUsers,
    title: 'Student-Led, Always',
    desc: 'CARE is driven by students, not faculty or Saukhyam. The best implementations happen when student ambassadors take initiative and believe in the cause.',
  },
  {
    icon: TbBuildingCommunity,
    title: 'Multi-Brand Access',
    desc: 'Unlike HEAL, CARE works with partner brands, reusable pads of various brands, menstrual cups, and period panties are all made available in the campus store.',
  },
  {
    icon: TbRecycle,
    title: 'Campus-Scale Impact',
    desc: '200 girls making the switch prevents 1 ton of CO₂ equivalent annually, and qualifies for NAAC sustainability reporting.',
  },
  {
    icon: TbWorld,
    title: 'Breaking Taboos Together',
    desc: 'Boys are equal participants, designing posters, manning stalls, and acting as ambassadors to normalize the conversation on campus.',
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
    desc: 'High-traffic areas near cafes and common rooms, both boys and girls can man these stalls.',
  },
  {
    icon: TbCalendarEvent,
    title: 'Hostel Campaigns',
    desc: 'Posters, one-on-one conversations, and buddy support within hostels over the full semester.',
  },
  {
    icon: TbStar,
    title: 'Awareness Workshops',
    desc: 'Structured workshops on the science of disposable pad chemicals, PCOS/PMOS links, and environmental impact.',
  },
];

/* ── Interfaces ── */

interface CollegeForm {
  collegeName: string;
  city: string;
  contactPerson: string;
  designation: string;
  email: string;
  message: string;
}

/* ── Component ───────────────────────────────────────────── */

export default function CareRegisterPage() {
  const [collegeForm, setCollegeForm] = useState<CollegeForm>({
    collegeName: '', city: '', contactPerson: '', designation: '', email: '', message: '',
  });
  const [collegeSubmitted, setCollegeSubmitted] = useState(false);
  const [notifEmail, setNotifEmail] = useState('');
  const [notifCity, setNotifCity]   = useState('');
  const [notifSent, setNotifSent]   = useState(false);

  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'care';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, []);

  const handleCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCollegeSubmitted(true);
  };

  const handleNotifSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifEmail.trim() && notifCity) setNotifSent(true);
  };

  return (
    <div className={care.carePage}>

      {/* ── Top banner with back link ── */}
      <section className={care.registerBanner}>
        <div className="container">
          <div className={care.registerBannerInner}>
            <div className={care.registerBannerLeft}>
              <div className={care.registerBannerIconCircle}>
                <TbSchool size={24} />
              </div>
              <div>
                <div className={care.registerBannerTitle}>
                  Get Involved with CARE
                </div>
                <p className={care.registerBannerDesc}>
                  Understand the science behind the 16% tipping point, the Careathon model,
                  and register your campus or brand below.
                </p>
              </div>
            </div>
            <Link href="/programs/care" className={care.registerBannerBack}>
              <ArrowLeft size={16} /> Back to CARE
            </Link>
          </div>
        </div>
      </section>


      {/* ── Bring CARE to Your College ── */}
      <section className={care.whatIsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.whatIsGrid}>

              {/* Left: headline + intro + CARE acronym + stat cards */}
              <div>
                <div className={care.sectionBadge}><TbBolt size={14} /> Why CARE?</div>
                <h2 className={care.whatIsHeadline}>
                  <span className={care.whatIsHeadlinePre}>Bring CARE</span>
                  <span className={care.whatIsHeadlineAccent}>to Your College</span>
                </h2>

                <p className={care.whatIsIntro}>
                  CARE is India&apos;s first structured, student-led campus programme for menstrual sustainability.
                  Unlike one-off awareness drives, CARE targets the campus as a unit, building
                  ambassadors, breaking taboos, and shifting an entire generation toward reusable products.
                  No cost to the college. Real, measurable impact.
                </p>

                <div className={care.careAcronym}>
                  {[
                    { letter: 'C', word: 'Campus',     meaning: 'Taking the shift to where 200+ girls live, learn, and lead together.' },
                    { letter: 'A', word: 'Action',     meaning: 'Real campaigns and real products, not just awareness posters.' },
                    { letter: 'R', word: 'Reusable',   meaning: 'Cloth pads, menstrual cups, and period panties replacing disposables.' },
                    { letter: 'E', word: 'Essentials', meaning: 'A need every girl has, every month, for the next 30 years of her life.' },
                  ].map((item) => (
                    <motion.div key={item.letter} variants={fadeInUp} className={care.careAcronymRow}>
                      <span className={care.careAcronymLetter}>{item.letter}</span>
                      <span className={care.careAcronymWord}>{item.word}</span>
                      <span className={care.careAcronymMeaning}>{item.meaning}</span>
                    </motion.div>
                  ))}
                </div>

                <div className={care.whatIsStatGrid}>
                  {[
                    { value: '₹0',   label: 'Cost to the college',             accent: '#2D6748' },
                    { value: '200',  label: 'Girls = 1 ton CO₂ prevented',      accent: '#388E3C' },
                    { value: 'NAAC', label: 'Reportable sustainability impact',  accent: '#1A3A28' },
                  ].map((stat) => (
                    <div key={stat.value} className={care.whatIsStatCard} style={{ '--stat-accent': stat.accent } as React.CSSProperties}>
                      <span className={care.whatIsStatValue}>{stat.value}</span>
                      <span className={care.whatIsStatLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: bento mosaic grid */}
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


      {/* ── CARE Team: Roles, Responsibilities and Campaigns ── */}
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
                    campaigns, solidarity circles, and pop-up stalls, the engine of the movement.
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


      {/* ── 1. 16% Tipping Point ── */}
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
                  <line x1="40" y1="180" x2="380" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                  <path
                    d="M40,180 C55,180 65,175 80,160 C95,145 100,125 115,108 L115,180 Z"
                    fill="rgba(215,119,6,0.25)"
                    stroke="none"
                  />
                  <path
                    d="M115,108 C130,92 145,60 180,35 C215,10 235,10 270,35 C305,60 320,92 335,120 C350,148 360,165 375,175 L375,180 L115,180 Z"
                    fill="rgba(56,142,60,0.20)"
                    stroke="none"
                  />
                  <path
                    d="M40,180 C55,180 65,175 80,160 C95,145 100,125 115,108 C130,92 145,60 180,35 C215,10 235,10 270,35 C305,60 320,92 335,120 C350,148 360,165 375,175"
                    fill="none"
                    stroke="rgba(167,243,208,0.85)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line x1="115" y1="30" x2="115" y2="180" stroke="#34D399" strokeWidth="2" strokeDasharray="6,3" />
                  <text x="118" y="45" fill="#34D399" fontSize="11" fontWeight="700">16%</text>
                  <text x="118" y="58" fill="rgba(167,243,208,0.7)" fontSize="9">Tipping Point</text>
                  <text x="55" y="168" fill="rgba(215,185,100,0.85)" fontSize="9" fontWeight="700">The Chasm</text>
                  <text x="185" y="198" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">% of campus who have switched</text>
                  <text x="30" y="100" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle" transform="rotate(-90, 30, 100)">Adoption speed</text>
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


      {/* ── 2. Key Campus Events ── */}
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


      {/* ── CARE Awards ── */}
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
                    they open in your region, no spam, just one email.
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




      {/* ── 4. College Sign-up Form ── */}
      <section id="college-form" className={care.formsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.formsHeader}>
              <div className={care.sectionBadge}><TbHeartHandshake size={14} /> Register Your Campus</div>
              <h2 className={care.formsTitle}>Start CARE on Your Campus</h2>
              <p className={care.formsSubtitle}>
                Fill in this form and we will reach out to help you get started -
                or add you to an upcoming Careathon in your city.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={care.formCard}>
              {/* Left accent panel */}
              <div className={care.formCardLeft}>
                <div className={care.formCardIcon}><TbSchool size={26} /></div>
                <h3 className={care.formCardTitle}>Register Your Campus</h3>
                <p className={care.formCardDesc}>
                  Start CARE at your college. Our team will guide you every step, from forming
                  the ambassador team to stocking the campus store.
                </p>
                <div className={care.formCardTrust}>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> No cost to the college
                  </div>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> Student-led, faculty supported
                  </div>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> We respond within 5 working days
                  </div>
                </div>
              </div>

              {/* Right form panel */}
              <div className={care.formCardRight}>
                {collegeSubmitted ? (
                  <div className={care.formSuccessMsg}>
                    <TbShieldCheck size={22} />
                    <div>
                      <strong>Registration received!</strong> We will be in touch with details
                      on starting CARE at your campus within 5 working days.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleCollegeSubmit}>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>College / University Name *</label>
                      <input
                        type="text" required className={care.formInput}
                        placeholder="Your institution name"
                        value={collegeForm.collegeName}
                        onChange={(e) => setCollegeForm({ ...collegeForm, collegeName: e.target.value })}
                      />
                    </div>
                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>City *</label>
                        <input
                          type="text" required className={care.formInput}
                          placeholder="City"
                          value={collegeForm.city}
                          onChange={(e) => setCollegeForm({ ...collegeForm, city: e.target.value })}
                        />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Designation</label>
                        <input
                          type="text" className={care.formInput}
                          placeholder="Student / Faculty / NSS"
                          value={collegeForm.designation}
                          onChange={(e) => setCollegeForm({ ...collegeForm, designation: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Your Name *</label>
                        <input
                          type="text" required className={care.formInput}
                          placeholder="Contact person"
                          value={collegeForm.contactPerson}
                          onChange={(e) => setCollegeForm({ ...collegeForm, contactPerson: e.target.value })}
                        />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Email *</label>
                        <input
                          type="email" required className={care.formInput}
                          placeholder="your@college.edu"
                          value={collegeForm.email}
                          onChange={(e) => setCollegeForm({ ...collegeForm, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Tell us about your campus</label>
                      <textarea
                        className={care.formTextarea}
                        placeholder="Number of students, current sustainability efforts, what motivated you to reach out..."
                        value={collegeForm.message}
                        onChange={(e) => setCollegeForm({ ...collegeForm, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className={care.formSubmitBtn}>
                      <TbSend size={18} /> Register My Campus
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── 5. CTA Banner ── */}
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
                Register Now
                <TbArrowRight size={18} />
              </a>
              <Link href="/programs/care" className={care.ctaBannerSecondary}>
                <TbCheck size={18} />
                Learn More About CARE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

