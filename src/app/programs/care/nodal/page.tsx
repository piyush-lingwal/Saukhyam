'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  TbTrophy,
  TbSchool,
  TbBuildingCommunity,
  TbInfinity,
  TbArrowRight,
  TbCheck,
  TbSparkles,
  TbRocket,
  TbSend,
  TbShieldCheck,
  TbStar,
  TbUsers,
  TbChartLine,
  TbAward,
} from 'react-icons/tb';
import care from '../care.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Data ─────────────────────────────────────────────────────── */

const careathonSteps = [
  {
    num: '01',
    icon: TbSchool,
    title: 'Implement CARE on Your Campus',
    desc: 'One college implements CARE properly - across at least two semesters - with ambassadors, mentors, store availability, and sustained campaigns.',
    tag: 'CARE Impact Certificate',
  },
  {
    num: '02',
    icon: TbBuildingCommunity,
    title: 'Become a Nodal College',
    desc: 'After a full year of successful implementation, the college is invited to become a Nodal CARE College - the top 5% of all CARE campuses in India.',
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
    desc: 'Ambassadors graduate and new teams are formed each year. The movement becomes self-sustaining - CARE lives beyond any single batch of students.',
    tag: 'Self-sustaining Movement',
  },
];

const nodalPerks = [
  {
    icon: TbTrophy,
    title: 'Careathon Host Trophy',
    desc: 'Your campus is officially recognised as the city anchor - receiving a dedicated Careathon Host Trophy from Saukhyam Foundation.',
  },
  {
    icon: TbUsers,
    title: 'Guide Neighbouring Colleges',
    desc: 'Lead other campuses in your city as they start CARE. Your student ambassadors become mentors for the wider movement.',
  },
  {
    icon: TbChartLine,
    title: 'National Sustainability Leader',
    desc: 'Nodal Colleges are featured in Saukhyam Foundation communications and recognised as national leaders in campus sustainability.',
  },
  {
    icon: TbAward,
    title: 'Priority for CARE Awards',
    desc: 'Hosting a Careathon fast-tracks your nomination for the CARE Awards ceremony - the highest annual recognition in the programme.',
  },
];

type NodalForm = {
  collegeName: string;
  city: string;
  contactPerson: string;
  designation: string;
  email: string;
  semesters: string;
  switchers: string;
  hostPlan: string;
};

/* ── Component ───────────────────────────────────────────── */

export default function CareNodalPage() {
  const [form, setForm] = useState<NodalForm>({
    collegeName: '', city: '', contactPerson: '', designation: '',
    email: '', semesters: '', switchers: '', hostPlan: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.pageTheme = 'care';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={care.carePage}>

      {/* ── Top banner ── */}
      <section className={care.registerBanner}>
        <div className="container">
          <div className={care.registerBannerInner}>
            <div className={care.registerBannerLeft}>
              <div className={care.registerBannerIconCircle} style={{ background: 'linear-gradient(135deg, #92400E, #D97706)' }}>
                <TbTrophy size={24} />
              </div>
              <div>
                <div className={care.registerBannerTitle}>Nodal CARE College Programme</div>
                <p className={care.registerBannerDesc}>
                  The top tier of CARE - host a Careathon, guide neighbouring colleges,
                  and earn national recognition as a sustainability leader.
                </p>
              </div>
            </div>
            <Link href="/programs/care" className={care.registerBannerBack}>
              <ArrowLeft size={16} /> Back to CARE
            </Link>
          </div>
        </div>
      </section>


      {/* ── What is a Nodal College ── */}
      <section className={care.benefitsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.structureHeader}>
              <div className={care.sectionBadge} style={{ color: '#D97706' }}>
                <TbStar size={14} /> Invitation-Level Recognition
              </div>
              <h2 className={care.structureTitle}>What is a Nodal CARE College?</h2>
              <p className={care.structureSubtitle}>
                Nodal Colleges are the top 5% of CARE campuses - colleges that have already
                implemented CARE successfully and are ready to lead the movement in their city
                by hosting a Careathon.
              </p>
            </motion.div>

            <motion.div variants={stagger} className={care.benefitsGrid}>
              {nodalPerks.map((perk) => (
                <motion.div key={perk.title} variants={fadeInUp} className={care.benefitCard}>
                  <div
                    className={care.benefitIconCircle}
                    style={{ background: 'linear-gradient(135deg, rgba(180,83,9,0.12), rgba(217,119,6,0.18))', color: '#B45309' }}
                  >
                    <perk.icon size={26} />
                  </div>
                  <h3 className={care.benefitTitle}>{perk.title}</h3>
                  <p className={care.benefitDesc}>{perk.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── Careathon Journey ── */}
      <section className={care.journeySection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

            <motion.div variants={fadeInUp} className={care.journeyHeader}>
              <div className={care.sectionBadge}>
                <TbTrophy size={14} /> Multi-College Competition
              </div>
              <h2 className={care.journeyTitle}>The Careathon Journey</h2>
              <p className={care.journeySubtitle}>
                Four phases - from first implementation to a self-sustaining city-wide movement.
                Every college starts at Phase 01.
              </p>
            </motion.div>

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

            <motion.div variants={fadeInUp} className={care.journeyCallout}>
              <div className={care.journeyCalloutText}>
                <div className={care.journeyCalloutTitle}>
                  Already Running CARE for a Year?
                </div>
                <p className={care.journeyCalloutDesc}>
                  If your campus has completed at least two semesters of CARE, you may be
                  eligible to apply for Nodal status. Fill in the form below.
                </p>
              </div>
              <a href="#nodal-form" className={care.journeyCalloutBtn}>
                <TbRocket size={18} />
                Apply for Nodal Status
                <TbArrowRight size={18} />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* ── Nodal Application Form ── */}
      <section id="nodal-form" className={care.formsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.formsHeader}>
              <div className={care.sectionBadge} style={{ color: '#D97706' }}>
                <TbTrophy size={14} /> Apply for Nodal Status
              </div>
              <h2 className={care.formsTitle}>Become a Nodal CARE College</h2>
              <p className={care.formsSubtitle}>
                Tell us about your campus implementation. Our team reviews every application
                and reaches out within 5 working days.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={care.formCard}>
              {/* Left accent panel - gold theme */}
              <div
                className={care.formCardLeft}
                style={{ background: 'linear-gradient(160deg, #92400E 0%, #B45309 50%, #D97706 100%)' }}
              >
                <div className={care.formCardIcon}><TbTrophy size={26} /></div>
                <h3 className={care.formCardTitle}>Nodal College Application</h3>
                <p className={care.formCardDesc}>
                  Only campuses that have already run CARE for at least two semesters are
                  eligible. Our team will verify your implementation before granting Nodal status.
                </p>
                <div className={care.formCardTrust}>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> Minimum 2 semesters of CARE required
                  </div>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> Free to apply - no fees
                  </div>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> Response within 5 working days
                  </div>
                </div>
              </div>

              {/* Right form panel */}
              <div className={care.formCardRight}>
                {submitted ? (
                  <div className={care.formSuccessMsg}>
                    <TbShieldCheck size={22} />
                    <div>
                      <strong>Application received!</strong> Our team will review your
                      campus implementation and reach out within 5 working days.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>College / University Name *</label>
                      <input
                        type="text" required className={care.formInput}
                        placeholder="Your institution name"
                        value={form.collegeName}
                        onChange={(e) => setForm({ ...form, collegeName: e.target.value })}
                      />
                    </div>
                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>City *</label>
                        <input
                          type="text" required className={care.formInput}
                          placeholder="City"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                        />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Semesters Run *</label>
                        <select
                          required className={care.formInput}
                          value={form.semesters}
                          onChange={(e) => setForm({ ...form, semesters: e.target.value })}
                        >
                          <option value="" disabled>Select</option>
                          <option value="2">2 semesters</option>
                          <option value="3">3 semesters</option>
                          <option value="4">4 semesters</option>
                          <option value="5+">5+ semesters</option>
                        </select>
                      </div>
                    </div>
                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Your Name *</label>
                        <input
                          type="text" required className={care.formInput}
                          placeholder="Contact person"
                          value={form.contactPerson}
                          onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                        />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Designation</label>
                        <input
                          type="text" className={care.formInput}
                          placeholder="Student / Faculty / NSS"
                          value={form.designation}
                          onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Email *</label>
                        <input
                          type="email" required className={care.formInput}
                          placeholder="your@college.edu"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Girls Who Switched (approx.)</label>
                        <input
                          type="number" className={care.formInput}
                          placeholder="e.g. 120"
                          value={form.switchers}
                          onChange={(e) => setForm({ ...form, switchers: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className={care.formGroup}>
                      <label className={care.formLabel}>How do you plan to host the Careathon?</label>
                      <textarea
                        className={care.formTextarea}
                        placeholder="Describe your city network, neighbouring colleges you could invite, your ambassador team's capacity..."
                        value={form.hostPlan}
                        onChange={(e) => setForm({ ...form, hostPlan: e.target.value })}
                      />
                    </div>
                    <button type="submit" className={care.formSubmitBtn} style={{ background: 'linear-gradient(135deg, #92400E, #D97706)' }}>
                      <TbSend size={18} /> Submit Application
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── CTA Banner ── */}
      <section className={care.ctaBanner}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp}>
              Not Yet Running CARE?
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Nodal status comes after a full year of implementation. Start CARE on your campus
              first - we&apos;ll guide you every step of the way.
            </motion.p>
            <motion.div variants={fadeInUp} className={care.ctaBannerBtns}>
              <Link href="/programs/care/register" className={care.ctaBannerPrimary}>
                <TbSchool size={18} />
                Register Your Campus
                <TbArrowRight size={18} />
              </Link>
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
