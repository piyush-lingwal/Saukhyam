'use client';

import { useEffect, useState } from 'react';
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
  TbSparkles,
  TbRocket,
  TbInfinity,
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
    month: 'July',
    name: 'Plastic Free Month',
    desc: 'Microplastics from disposable pads enter our bodies and most people do not know about this. CARE runs awareness campaigns around plastic-free choices for periods.',
  },
  {
    month: 'September',
    name: 'PCOS Awareness Month',
    desc: 'Run the HEAL challenge on campus - connect period health with the chemical exposure from disposable pads. PCOS affects 6 crore Indian women.',
  },
  {
    month: 'April',
    name: 'Earth Day',
    desc: '1 girl switching saves 125+ kg of lifetime pad waste. Earth Day is a powerful moment for campus-wide sustainability pledges.',
  },
  {
    month: 'June',
    name: 'World Environment Day',
    desc: 'Celebrate the campus\'s progress toward its sustainability and carbon reduction commitments with visible campaigns and ambassador recognitions.',
  },
];

const careathonSteps = [
  {
    num: '01',
    icon: TbSchool,
    title: 'Implement CARE on Your Campus',
    desc: 'One college implements CARE properly — across at least two semesters — with ambassadors, mentors, store availability, and sustained campaigns.',
    tag: 'CARE Impact Certificate',
  },
  {
    num: '02',
    icon: TbBuildingCommunity,
    title: 'Become a Nodal College',
    desc: 'After a full year of successful implementation, the college is invited to become a Nodal CARE College — the top 5% of all CARE campuses in India.',
    tag: 'Nodal College Status',
  },
  {
    num: '03',
    icon: TbTrophy,
    title: 'Host a Careathon',
    desc: 'Invite other colleges in the city to participate in a semester-long competition. Teams sign up, set targets, and race to make the shift on their campuses.',
    tag: 'Careathon Host Trophy',
  },
  {
    num: '04',
    icon: TbInfinity,
    title: 'Sustain and Graduate',
    desc: 'Ambassadors graduate and new teams are formed each year. The movement becomes self-sustaining — CARE lives beyond any single batch of students.',
    tag: 'Self-sustaining Movement',
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

  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'care';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, []);

  const handleCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCollegeSubmitted(true);
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
                    fill="rgba(139,47,201,0.2)"
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
              <div className={care.sectionBadge}><TbCalendarEvent size={14} /> Key Dates</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--care-purple-dark)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 'var(--space-4)' }}>
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


      {/* ── 3. Careathon Journey ── */}
      <section className={care.journeySection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

            {/* Header */}
            <motion.div variants={fadeInUp} className={care.journeyHeader}>
              <div className={care.sectionBadge}>
                <TbTrophy size={14} /> Multi-College Competition
              </div>
              <h2 className={care.journeyTitle}>The Careathon Journey</h2>
              <p className={care.journeySubtitle}>
                Four phases — from first implementation to a self-sustaining city-wide movement.
                Every college starts at Phase 01.
              </p>
            </motion.div>

            {/* 2×2 milestone grid */}
            <motion.div variants={stagger} className={care.journeyGrid}>
              {careathonSteps.map((step) => (
                <motion.div key={step.num} variants={fadeInUp} className={care.journeyCard}>
                  <div className={care.journeyCardWatermark}>{step.num}</div>
                  <div className={care.journeyCardPhase}>Phase {step.num}</div>
                  <div className={care.journeyCardIcon}><step.icon size={26} /></div>
                  <div className={care.journeyCardTitle}>{step.title}</div>
                  <p className={care.journeyCardDesc}>{step.desc}</p>
                  <div className={care.journeyCardTag}>
                    <TbSparkles size={12} /> {step.tag}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div variants={fadeInUp} className={care.journeyCallout}>
              <div className={care.journeyCalloutText}>
                <div className={care.journeyCalloutTitle}>
                  Ready to Start Your Campus Journey?
                </div>
                <p className={care.journeyCalloutDesc}>
                  Register below — whether your city already has CARE or you&apos;re the first to bring it.
                  As a pioneer, you become the Nodal College when the Careathon launches in your city.
                </p>
              </div>
              <a href="#college-form" className={care.journeyCalloutBtn}>
                <TbRocket size={18} />
                Start at Phase 01
                <TbArrowRight size={18} />
              </a>
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
                  Start CARE at your college. Our team will guide you every step — from forming
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

