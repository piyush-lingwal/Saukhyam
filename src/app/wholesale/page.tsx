'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Leaf,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Landmark,
  Handshake,
  Hospital,
  Home,
  Globe2,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import styles from './page.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.07 } } };

const organizations = [
  {
    title: 'Schools & Colleges',
    icon: GraduationCap,
    image: '/images/blog/li-15-campus-brainstorm.png',
    alt: 'Students at a campus menstrual health awareness session',
  },
  {
    title: 'NGOs & Foundations',
    icon: HeartHandshake,
    image: '/images/blog/musaharCommunity.jpg',
    alt: 'Community outreach with rural women',
  },
  {
    title: 'CSR Initiatives',
    icon: Briefcase,
    image: '/images/awards/amara-raja-2025-stage.png',
    alt: 'CSR partnership ceremony',
  },
  {
    title: 'Government Programs',
    icon: Landmark,
    image: '/images/awards/niti-aayog-stage.png',
    alt: 'Government institutional partnership event',
  },
  {
    title: 'Self Help Groups (SHGs)',
    icon: Handshake,
    image: '/why-banana-fiber/women-extracting.jpg',
    alt: 'Women in a self-help group working with banana fiber',
  },
  {
    title: 'Hospitals & Health Centers',
    icon: Hospital,
    image: '/science/hero-doctor.png',
    alt: 'Healthcare professional supporting menstrual health',
  },
  {
    title: 'Hostels & Residential Institutions',
    icon: Home,
    image: '/images/internships/hero-interns.png',
    alt: 'Students in a residential institution',
  },
  {
    title: 'Community Organizations',
    icon: Globe2,
    image: '/images/blog/li-23-reach-distribution.png',
    alt: 'Community distribution of reusable menstrual health kits',
  },
];

const programCards = [
  {
    title: 'HEAL Program',
    desc: 'Holistic menstrual health education and awareness initiatives for schools and communities.',
    href: '/programs/heal',
  },
  {
    title: 'CARE Program',
    desc: 'Campus-based menstrual health advocacy, leadership, and peer education initiatives.',
    href: '/programs/care',
  },
  {
    title: 'REACH Program',
    desc: 'Community-focused outreach and menstrual health access programs in underserved regions.',
    href: '/programs/reach',
  },
];

const supportServices = [
  'Menstrual Health Awareness Sessions',
  'Community Workshops',
  'Training of Trainers',
  'Community Health Worker Training',
];

const programSupportOptions = [
  'Menstrual Health Awareness Session',
  'Community Workshop',
  'Training of Trainers',
  'HEAL Program',
  'CARE Program',
  'REACH Program',
  'Community Health Worker Training',
  'Product Distribution Only',
];

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const orgName = (form.elements.namedItem('orgName') as HTMLInputElement).value.trim();
    const contactPerson = (form.elements.namedItem('contactPerson') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
    const location = (form.elements.namedItem('location') as HTMLInputElement).value.trim();
    const beneficiaries = (form.elements.namedItem('beneficiaries') as HTMLInputElement).value.trim();
    const beneficiaryType = (form.elements.namedItem('beneficiaryType') as HTMLSelectElement).value;
    const timeline = (form.elements.namedItem('timeline') as HTMLSelectElement).value;
    const awareness = (form.elements.namedItem('awareness') as HTMLSelectElement).value;
    const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement).value.trim();

    const supportChecked = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[name="programSupport"]:checked'),
    ).map((el) => el.value);

    const subject = encodeURIComponent(`Partnership Support Request — ${orgName}`);
    const body = encodeURIComponent(
      `Organization: ${orgName}\nContact Person: ${contactPerson}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nNumber of Beneficiaries: ${beneficiaries}\nBeneficiary Type: ${beneficiaryType}\nTentative Timeline: ${timeline}\nAwareness Session: ${awareness}\nProgram Support Required: ${supportChecked.join(', ') || 'None selected'}\n\nAdditional Details:\n${notes}`,
    );
    window.location.href = `mailto:info@saukhyampads.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* ── Section 1: Hero ── */}
      <section className={styles.hero} aria-labelledby="wholesale-hero-heading">
        <div className={styles.heroBg} aria-hidden>
          <Image
            src="/images/wholesale/hero-bulk-orders.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.heroBgImage}
            priority
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden />

        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span className={styles.heroBadge} variants={fadeUp}>
              <Leaf size={14} aria-hidden />
              Bulk & Institutional Partnerships
            </motion.span>
            <motion.h1 id="wholesale-hero-heading" className={styles.heroTitle} variants={fadeUp}>
              Looking to Place a Bulk Order?
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Whether you are a school, college, NGO, CSR team, government department, self-help
              group, hospital, hostel, or community organization, we would be delighted to support
              your initiative.
            </motion.p>
            <motion.div className={styles.heroCtas} variants={fadeUp}>
              <Link href="/contact" className={styles.heroBtnPrimary}>
                Request a Bulk Order
              </Link>
              <Link href="/contact" className={styles.heroBtnSecondary}>
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Who We Work With ── */}
      <section className={styles.section} aria-labelledby="partners-heading">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span className={styles.sectionEyebrow} variants={fadeUp}>
              <Handshake size={13} aria-hidden /> Our Partners
            </motion.span>
            <motion.h2 id="partners-heading" className={styles.sectionTitle} variants={fadeUp}>
              Who We <span className={styles.accent}>Work With</span>
            </motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeUp}>
              From classrooms to community halls, we partner with institutions that care about
              dignified, sustainable menstrual health for every beneficiary.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.orgGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerFast}
          >
            {organizations.map((org) => {
              const Icon = org.icon;
              return (
                <motion.article
                  key={org.title}
                  className={styles.orgCard}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.orgThumb}>
                    <Image
                      src={org.image}
                      alt={org.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={styles.orgThumbImg}
                    />
                    <div className={styles.orgIconOverlay}>
                      <Icon size={18} aria-hidden />
                    </div>
                  </div>
                  <h3 className={styles.orgTitle}>{org.title}</h3>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Requirement Form ── */}
      <section
        id="requirement-form"
        className={`${styles.section} ${styles.sectionAlt} ${styles.requirementSection}`}
        aria-labelledby="requirement-heading"
      >
        <div className={styles.requirementWrap}>
          <motion.div
            className={styles.requirementCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className={styles.requirementLeafTop} aria-hidden />
            <div className={styles.requirementLeafBottom} aria-hidden />

            <div className={styles.requirementHeader}>
              <h2 id="requirement-heading" className={styles.requirementTitle}>
                Tell Us About Your Requirement
              </h2>
              <p className={styles.requirementSub}>
                Share a few details about your initiative and our team will recommend the most
                suitable products, program support, and implementation approach for your
                organization.
              </p>
            </div>

            {submitted ? (
              <motion.div
                className={styles.successBox}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Sparkles size={28} className={styles.successIcon} aria-hidden />
                <h3>Thank you for your interest</h3>
                <p>
                  Your email client should open shortly with your requirement details. Our team will
                  get back to you as soon as we can.
                </p>
                <button
                  type="button"
                  className={styles.successReset}
                  onClick={() => setSubmitted(false)}
                >
                  Submit another requirement
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Organization Details</h3>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="orgName">Organization Name *</label>
                      <input
                        id="orgName"
                        name="orgName"
                        type="text"
                        placeholder="Enter organization name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contactPerson">Contact Person *</label>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@organization.org"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="location">Location *</label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Program Details</h3>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="beneficiaries">Number of Beneficiaries *</label>
                      <input
                        id="beneficiaries"
                        name="beneficiaries"
                        type="text"
                        placeholder="Approximate number of women or girls"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="beneficiaryType">Beneficiary Type *</label>
                      <select id="beneficiaryType" name="beneficiaryType" required defaultValue="">
                        <option value="" disabled>Select beneficiary type</option>
                        <option value="School Students">School Students</option>
                        <option value="College Students">College Students</option>
                        <option value="Self Help Groups (SHGs)">Self Help Groups (SHGs)</option>
                        <option value="Rural Communities">Rural Communities</option>
                        <option value="Urban Communities">Urban Communities</option>
                        <option value="Factory Workers">Factory Workers</option>
                        <option value="Hospital Staff">Hospital Staff</option>
                        <option value="Community Health Workers">Community Health Workers</option>
                        <option value="NGO Beneficiaries">NGO Beneficiaries</option>
                        <option value="Mixed Groups">Mixed Groups</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="timeline">Tentative Timeline *</label>
                      <select id="timeline" name="timeline" required defaultValue="">
                        <option value="" disabled>Select timeline</option>
                        <option value="Immediate (Within 1 Month)">Immediate (Within 1 Month)</option>
                        <option value="1–3 Months">1–3 Months</option>
                        <option value="3–6 Months">3–6 Months</option>
                        <option value="6–12 Months">6–12 Months</option>
                        <option value="Planning Stage">Planning Stage</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="awareness">Awareness Session Requirement *</label>
                      <select id="awareness" name="awareness" required defaultValue="">
                        <option value="" disabled>Select option</option>
                        <option value="Yes, Required">Yes, Required</option>
                        <option value="No, Products Only">No, Products Only</option>
                        <option value="Need More Information">Need More Information</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Program Support Required</h3>
                  <div className={styles.checkboxGrid}>
                    {programSupportOptions.map((option) => (
                      <label key={option} className={styles.checkboxItem}>
                        <input type="checkbox" name="programSupport" value={option} />
                        <span className={styles.checkboxBox} aria-hidden />
                        <span className={styles.checkboxLabel}>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.formSection}>
                  <h3 className={styles.formSectionTitle}>Additional Details</h3>
                  <div className={styles.formGroup}>
                    <label htmlFor="notes">Tell Us More</label>
                    <textarea
                      id="notes"
                      name="notes"
                      placeholder="Please share your program objectives, target community, expected budget range, preferred products, or any specific requirements. This helps us recommend the most suitable solution."
                      rows={5}
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Request Partnership Support
                  <ArrowRight size={18} aria-hidden />
                </button>
                <p className={styles.trustMessage}>
                  Your information will only be used to respond to your inquiry and discuss suitable
                  program options.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Holistic Programs ── */}
      <section className={styles.holisticSection} aria-labelledby="beyond-heading">
        <div className={styles.holisticContainer}>
          <motion.div
            className={styles.holisticHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span className={styles.sectionEyebrow} variants={fadeUp}>
              <BookOpen size={13} aria-hidden /> Holistic Programs
            </motion.span>
            <motion.h2 id="beyond-heading" className={styles.holisticTitle} variants={fadeUp}>
              Beyond Product Distribution
            </motion.h2>
            <motion.p className={styles.holisticSub} variants={fadeUp}>
              Creating lasting impact through menstrual health education, awareness, and community
              engagement.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.programCardsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerFast}
          >
            {programCards.map((program) => (
              <motion.article key={program.title} className={styles.programCompactCard} variants={fadeUp}>
                <h3 className={styles.programCompactTitle}>{program.title}</h3>
                <p className={styles.programCompactDesc}>{program.desc}</p>
                <Link href={program.href} className={styles.programCompactLink}>
                  Learn More <ArrowRight size={14} aria-hidden />
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className={styles.supportGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerFast}
          >
            {supportServices.map((service) => (
              <motion.div key={service} className={styles.supportItem} variants={fadeUp}>
                <CheckCircle2 size={18} className={styles.supportCheck} aria-hidden />
                <span>{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Final CTA ── */}
      <section className={styles.ctaBanner} aria-labelledby="final-cta-heading">
        <div className={styles.ctaLeafPattern} aria-hidden />
        <div className={styles.ctaContainer}>
          <div className={styles.ctaGrid}>
            <motion.div
              className={styles.ctaContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.h2 id="final-cta-heading" className={styles.ctaTitle} variants={fadeLeft}>
                Let&apos;s Build Healthier Communities Together
              </motion.h2>
              <motion.p className={styles.ctaText} variants={fadeLeft}>
                Partner with Saukhyam to create sustainable menstrual health programs for your
                beneficiaries.
              </motion.p>
              <motion.div className={styles.ctaButtons} variants={fadeLeft}>
                <Link href="/products" className={styles.ctaBtnPrimary}>
                  Explore Our Products
                  <ArrowRight size={17} aria-hidden />
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.ctaVisual}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeRight}
            >
              <div className={styles.ctaImageWrap}>
                <Image
                  src="/images/factory/manufacturing-hub-team.png"
                  alt="Saukhyam team supporting schools, NGOs, and community organizations"
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className={styles.ctaImage}
                />
              </div>
              <div className={styles.ctaFloatCard}>
                <p className={styles.ctaFloatTitle}>Trusted by</p>
                <ul className={styles.ctaFloatList}>
                  <li>Schools</li>
                  <li>NGOs</li>
                  <li>CSR Programs</li>
                  <li>Community Organizations</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
