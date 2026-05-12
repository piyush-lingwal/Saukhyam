'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import {
  TbBriefcase,
  TbSend,
  TbShieldCheck,
  TbLeaf,
  TbUsers,
  TbBuildingCommunity,
  TbArrowRight,
  TbCheck,
  TbWorld,
  TbHeartHandshake,
  TbStar,
} from 'react-icons/tb';
import care from '../care.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const partnerBenefits = [
  {
    icon: TbBuildingCommunity,
    title: 'Campus Store Access',
    desc: 'Your products are stocked in campus stores on every CARE-implementing college. Students who are already making the shift can discover and try your products.',
  },
  {
    icon: TbUsers,
    title: 'A Ready Audience',
    desc: 'CARE ambassadors and students are already convinced about reusables. They are not sceptics - they are active seekers. Your brand reaches them at the right moment.',
  },
  {
    icon: TbLeaf,
    title: 'Mission Alignment',
    desc: 'CARE is about the planet, period health, and breaking taboos. Partnering with CARE signals that your brand shares these values - not just sells a product.',
  },
  {
    icon: TbWorld,
    title: 'Pan-India Reach',
    desc: 'As CARE expands city by city through Careathons, your brand scales with it. One partnership, multiple campuses, multiple cities.',
  },
  {
    icon: TbStar,
    title: 'No Exclusivity Pressure',
    desc: 'CARE is not a single-brand programme. Students get to choose what works for them. Your brand is part of a movement, not a forced bundle.',
  },
  {
    icon: TbHeartHandshake,
    title: 'Co-branded Campaigns',
    desc: 'CARE ambassadors run posters, solidarity circles, and awareness events. Your brand can be featured in campaign materials distributed across hostels and common areas.',
  },
];

const eligibility = [
  'You make reusable menstrual products - cloth pads, menstrual cups, period panties, or similar',
  'Your products are made from natural, toxin-free materials',
  'You can supply products to campus stores at a reasonable price point for students',
  'You are willing to participate in awareness workshops and co-branded campaigns',
  'You align with CARE\'s values: sustainability, health, and taboo-breaking',
];

interface BrandForm {
  brandName: string;
  productType: string;
  website: string;
  contactPerson: string;
  email: string;
  phone: string;
  cities: string;
  message: string;
}

export default function CarePartnerPage() {
  const [form, setForm] = useState<BrandForm>({
    brandName: '', productType: '', website: '', contactPerson: '',
    email: '', phone: '', cities: '', message: '',
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
              <div className={care.registerBannerIconCircle}>
                <TbBriefcase size={24} />
              </div>
              <div>
                <div className={care.registerBannerTitle}>Partner Brand Programme</div>
                <p className={care.registerBannerDesc}>
                  Join CARE as a partner brand and reach thousands of students already making the shift.
                </p>
              </div>
            </div>
            <Link href="/programs/care" className={care.registerBannerBack}>
              <ArrowLeft size={16} /> Back to CARE
            </Link>
          </div>
        </div>
      </section>


      {/* ── Why Partner with CARE ── */}
      <section className={care.whatIsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} style={{ marginBottom: 'var(--space-10)' }}>
              <div className={care.sectionBadge}><TbHeartHandshake size={14} /> Why Partner with CARE?</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: 'var(--care-purple-dark)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 'var(--space-5)' }}>
                CARE is Not a Single-Brand Programme.
                <br />It Never Was.
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)', maxWidth: '680px', lineHeight: 1.78 }}>
                Unlike HEAL - which is built around Saukhyam products specifically - CARE is built
                around the campus. Any quality reusable menstrual product can be part of CARE.
                We believe students deserve choice. Partner brands make that choice meaningful.
              </p>
            </motion.div>

            <motion.div variants={stagger} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
              {partnerBenefits.map((b) => (
                <motion.div key={b.title} variants={fadeInUp} className={care.benefitCard}>
                  <div className={care.benefitIconCircle}><b.icon size={24} /></div>
                  <h3 className={care.benefitTitle}>{b.title}</h3>
                  <p className={care.benefitDesc}>{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── Eligibility ── */}
      <section className={care.structureSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
              <div>
                <div className={care.sectionBadge}><TbCheck size={14} /> Who Can Join?</div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--care-purple-dark)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 'var(--space-5)' }}>
                  Eligibility for CARE Partner Brands
                </h2>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                  CARE maintains a simple standard: the product must be genuinely better for
                  the planet and for the person using it. Here is what we look for.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {eligibility.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--care-purple-pale)', border: '1.5px solid rgba(139,47,201,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--care-purple)', flexShrink: 0, marginTop: 2 }}>
                        <TbCheck size={13} />
                      </div>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--care-purple-pale)', border: '1.5px solid rgba(139,47,201,0.15)', borderRadius: 'var(--radius-2xl)', padding: 'var(--space-8)' }}>
                <div className={care.sectionBadge}><TbArrowRight size={14} /> How It Works</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginTop: 'var(--space-4)' }}>
                  {[
                    { num: '1', title: 'Submit the form below', desc: 'Tell us about your brand and products. We will review and get back within 5 working days.' },
                    { num: '2', title: 'Onboarding call', desc: 'A short call to understand your product range, pricing for campus stores, and the cities you can serve.' },
                    { num: '3', title: 'Campus store listing', desc: 'Your products are listed with CARE-implementing colleges in your city. Ambassadors are briefed on your brand.' },
                    { num: '4', title: 'Co-branded campaigns', desc: 'You are included in CARE awareness events, solidarity circles, and campaign materials on campus.' },
                  ].map((step) => (
                    <div key={step.num} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--care-purple)', color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'var(--text-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--care-purple-dark)', marginBottom: 'var(--space-1)', fontSize: 'var(--text-base)' }}>{step.title}</div>
                        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── Partner Form ── */}
      <section id="brand-form" className={care.formsSection}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className={care.formsHeader}>
              <div className={care.sectionBadge}><TbBriefcase size={14} /> Apply Now</div>
              <h2 className={care.formsTitle}>Submit Your Brand Partnership</h2>
              <p className={care.formsSubtitle}>
                Fill in the form below. We review every application personally and respond
                within 5 working days.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={care.formCard}>
              {/* Left accent panel */}
              <div className={care.formCardLeft}>
                <div className={care.formCardIcon}><TbBriefcase size={26} /></div>
                <h3 className={care.formCardTitle}>Brand Partnership Application</h3>
                <p className={care.formCardDesc}>
                  Join CARE as a partner brand and reach thousands of students already making
                  the shift to reusable products across India.
                </p>
                <div className={care.formCardTrust}>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> No exclusivity pressure
                  </div>
                  <div className={care.formCardTrustItem}>
                    <TbCheck size={14} /> Pan-India campus reach
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
                      <strong>Application received!</strong> We will review your submission and
                      be in touch within 5 working days. Thank you for joining the CARE movement.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Brand Name *</label>
                        <input type="text" required className={care.formInput} placeholder="Your brand name"
                          value={form.brandName} onChange={(e) => setForm({ ...form, brandName: e.target.value })} />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Product Type *</label>
                        <select required className={care.formSelect} value={form.productType}
                          onChange={(e) => setForm({ ...form, productType: e.target.value })}>
                          <option value="">Select product type</option>
                          <option value="reusable-pads">Reusable Cloth Pads</option>
                          <option value="menstrual-cup">Menstrual Cups</option>
                          <option value="period-panties">Period Panties</option>
                          <option value="multiple">Multiple Product Types</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Website</label>
                      <input type="url" className={care.formInput} placeholder="https://yourbrand.com"
                        value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
                    </div>

                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Contact Person *</label>
                        <input type="text" required className={care.formInput} placeholder="Your name"
                          value={form.contactPerson} onChange={(e) => setForm({ ...form, contactPerson: e.target.value })} />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Phone</label>
                        <input type="tel" className={care.formInput} placeholder="+91 ..."
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>

                    <div className={care.formRow}>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Contact Email *</label>
                        <input type="email" required className={care.formInput} placeholder="you@yourbrand.com"
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div className={care.formGroup}>
                        <label className={care.formLabel}>Cities You Can Serve</label>
                        <input type="text" className={care.formInput} placeholder="Delhi, Bengaluru, Pune..."
                          value={form.cities} onChange={(e) => setForm({ ...form, cities: e.target.value })} />
                      </div>
                    </div>

                    <div className={care.formGroup}>
                      <label className={care.formLabel}>Tell Us About Your Brand *</label>
                      <textarea required className={care.formTextarea}
                        placeholder="Describe your products, materials, price range, and why you want to partner with CARE..."
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </div>

                    <button type="submit" className={care.formSubmitBtn}>
                      <TbSend size={18} /> Submit Partnership Application
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className={care.ctaBanner}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp}>Have Questions Before Applying?</motion.h2>
            <motion.p variants={fadeInUp}>
              Reach out to us directly and we will walk you through the partnership details.
            </motion.p>
            <motion.div variants={fadeInUp} className={care.ctaBannerBtns}>
              <Link href="/contact" className={care.ctaBannerPrimary}>
                Contact Saukhyam Foundation
              </Link>
              <Link href="/programs/care" className={care.ctaBannerSecondary}>
                <ArrowLeft size={16} />
                Back to CARE
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

