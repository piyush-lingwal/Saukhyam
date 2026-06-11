'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Leaf,
  Recycle,
  Users,
  ArrowRight,
  Phone,
  Building2,
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Landmark,
  Handshake,
  Hospital,
  Home,
  Globe2,
  Building,
  User,
  MapPin,
  Hash,
  UserCircle,
  Calendar,
  Presentation,
  CheckCircle2,
  Sparkles,
  Send,
  BookOpen,
  Mic,
  Map,
  LeafyGreen,
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

const requirementFields = [
  { label: 'Organization Name', icon: Building },
  { label: 'Contact Person', icon: User },
  { label: 'Location', icon: MapPin },
  { label: 'Number of Beneficiaries', icon: Hash },
  { label: 'Beneficiary Type', icon: UserCircle },
  { label: 'Tentative Timeline', icon: Calendar },
  { label: 'Awareness Session Requirement', icon: Presentation },
];

const linkedPrograms = [
  {
    title: 'HEAL Program Implementation',
    desc: 'Holistic menstrual health education and awareness for schools and communities.',
    image: '/HEAL Page Photos/Photo3.png',
    href: '/programs/heal',
    reverse: false,
  },
  {
    title: 'CARE Program Implementation',
    desc: 'Campus-based menstrual health advocacy and peer education for colleges.',
    image: '/CARE Page Photos/hero image.png',
    href: '/programs/care',
    reverse: true,
  },
  {
    title: 'REACH Program Implementation',
    desc: 'Grassroots distribution and community engagement across underserved regions.',
    image: '/images/blog/li-23-reach-distribution.png',
    href: '/programs/reach',
    reverse: false,
  },
];

const supportServices = [
  'Menstrual Health Awareness Sessions',
  'Community Workshops',
  'Training of Trainers',
  'Community Health Worker Training',
];

const impactStats = [
  {
    icon: Users,
    value: '30+',
    suffix: ' Lakh',
    label: 'Women & Girls Reached Across India',
    animate: true,
    target: 30,
  },
  {
    icon: Mic,
    value: '1000+',
    label: 'Awareness Sessions Conducted',
    animate: true,
    target: 1000,
  },
  {
    icon: Map,
    value: '20+',
    label: 'States Across India',
    animate: true,
    target: 20,
  },
  {
    icon: LeafyGreen,
    value: '2–3 Years',
    label: 'Sustainable Alternative to Disposable Pads',
    animate: false,
  },
];

function AnimatedStatValue({
  target,
  prefix = '',
  suffix = '',
  trailingPlus = false,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  trailingPlus?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(target);
      return;
    }

    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {trailingPlus ? '+' : ''}
      {suffix}
    </span>
  );
}

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    document.getElementById('requirement-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
    const timeline = (form.elements.namedItem('timeline') as HTMLInputElement).value.trim();
    const awareness = (form.elements.namedItem('awareness') as HTMLSelectElement).value;
    const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement).value.trim();

    const subject = encodeURIComponent(`Bulk Order Request — ${orgName}`);
    const body = encodeURIComponent(
      `Organization: ${orgName}\nContact Person: ${contactPerson}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nNumber of Beneficiaries: ${beneficiaries}\nBeneficiary Type: ${beneficiaryType}\nTentative Timeline: ${timeline}\nAwareness Session Required: ${awareness}\n\nAdditional Notes:\n${notes}`,
    );
    window.location.href = `mailto:info@saukhyampads.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* ── Section 1: Hero ── */}
      <section className={styles.hero} aria-labelledby="wholesale-hero-heading">
        <div className={styles.heroOrb1} aria-hidden />
        <div className={styles.heroOrb2} aria-hidden />
        <div className={styles.heroGrain} aria-hidden />

        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className={styles.heroLabel} variants={fadeUp}>
                <Building2 size={13} /> Bulk & Institutional Partnerships
              </motion.span>
              <motion.h1 id="wholesale-hero-heading" className={styles.heroTitle} variants={fadeUp}>
                Looking to Place a Bulk Order?
              </motion.h1>
              <motion.p className={styles.heroSubtitle} variants={fadeUp}>
                Whether you are a school, college, NGO, CSR team, government department, self-help
                group, hospital, hostel, or community organization, we would be delighted to support
                your initiative.
              </motion.p>
              <motion.div className={styles.impactBadge} variants={fadeUp}>
                <Users size={18} className={styles.impactBadgeIcon} aria-hidden />
                30+ Lakh Women & Girls Reached Across India
              </motion.div>
              <motion.p className={styles.heroSupport} variants={fadeUp}>
                Saukhyam reusable pads are helping create healthier periods while reducing menstrual
                waste through sustainable menstrual health programs.
              </motion.p>
              <motion.div className={styles.heroCtas} variants={fadeUp}>
                <button type="button" className={styles.btnPrimary} onClick={scrollToForm}>
                  Request a Bulk Order
                  <ArrowRight size={17} aria-hidden />
                </button>
                <a href="tel:+916282103073" className={styles.btnSecondary}>
                  <Phone size={17} aria-hidden />
                  Talk to Our Team
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial="hidden"
              animate="visible"
              variants={fadeRight}
            >
              <div className={styles.heroImageWrap}>
                <Image
                  src="/images/blog/li-23-reach-distribution.png"
                  alt="Women, students, and community organizations receiving Saukhyam menstrual health kits"
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className={styles.heroImage}
                  priority
                />
              </div>
              <div className={styles.floatingBadges}>
                <span className={styles.floatBadge}>
                  <Leaf size={14} aria-hidden /> Sustainable
                </span>
                <span className={styles.floatBadge}>
                  <Recycle size={14} aria-hidden /> Reusable for 2–3 Years
                </span>
                <span className={styles.floatBadge}>
                  <Users size={14} aria-hidden /> 30+ Lakh Women Reached
                </span>
              </div>
            </motion.div>
          </div>
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
        <div className={styles.requirementGlow} aria-hidden />
        <div className="container">
          <motion.div
            className={styles.requirementCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className={styles.requirementHeader}>
              <h2 id="requirement-heading" className={styles.requirementTitle}>
                Tell Us About Your Requirement
              </h2>
              <p className={styles.requirementSub}>
                Share a few details and our team will respond with product options, pricing, and
                program support tailored to your organization.
              </p>
            </div>

            <div className={styles.checklistGrid} aria-label="Information we need">
              {requirementFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.label} className={styles.checkItem}>
                    <span className={styles.checkIcon}>
                      <Icon size={15} aria-hidden />
                    </span>
                    <CheckCircle2 size={16} className={styles.checkMark} aria-hidden />
                    {field.label}
                  </div>
                );
              })}
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
              <form className={styles.formGrid} onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                  <label htmlFor="orgName">Organization Name</label>
                  <input id="orgName" name="orgName" type="text" placeholder="Your organization" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@organization.org"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Location</label>
                  <input id="location" name="location" type="text" placeholder="City, State" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="beneficiaries">Number of Beneficiaries</label>
                  <input
                    id="beneficiaries"
                    name="beneficiaries"
                    type="text"
                    placeholder="e.g. 500 girls"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="beneficiaryType">Beneficiary Type</label>
                  <select id="beneficiaryType" name="beneficiaryType" required defaultValue="">
                    <option value="" disabled>Select type</option>
                    <option value="School students">School students</option>
                    <option value="College students">College students</option>
                    <option value="Rural women">Rural women</option>
                    <option value="SHG members">SHG members</option>
                    <option value="Hospital patients">Hospital patients</option>
                    <option value="Hostel residents">Hostel residents</option>
                    <option value="Community members">Community members</option>
                    <option value="Mixed / Other">Mixed / Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="timeline">Tentative Timeline</label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="e.g. March 2026"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="awareness">Awareness Session Requirement</label>
                  <select id="awareness" name="awareness" required defaultValue="">
                    <option value="" disabled>Select option</option>
                    <option value="Yes — awareness sessions needed">Yes — awareness sessions needed</option>
                    <option value="No — product distribution only">No — product distribution only</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label htmlFor="notes">Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us more about your program goals, budget considerations, or specific product needs..."
                    rows={4}
                  />
                </div>
                <div className={styles.formGroupFull}>
                  <button type="submit" className={styles.submitBtn}>
                    Submit Requirement
                    <Send size={17} aria-hidden />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: Beyond Distribution ── */}
      <section className={`${styles.section} ${styles.sectionBeige}`} aria-labelledby="beyond-heading">
        <div className="container">
          <motion.div
            className={styles.beyondIntro}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span className={styles.sectionEyebrow} variants={fadeUp}>
              <BookOpen size={13} aria-hidden /> Holistic Programs
            </motion.span>
            <motion.h2 id="beyond-heading" className={styles.beyondTitle} variants={fadeUp}>
              A Successful Menstrual Health Program Goes Beyond Distribution
            </motion.h2>
            <motion.p className={styles.beyondText} variants={fadeUp}>
              A lasting impact is created through awareness, education, and community engagement.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.programGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {linkedPrograms.map((program) => (
              <motion.article
                key={program.title}
                className={`${styles.programCard} ${program.reverse ? styles.programCardReverse : ''}`}
                variants={fadeUp}
              >
                <div className={styles.programVisual}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    className={styles.programImg}
                  />
                </div>
                <div className={styles.programBody}>
                  <div className={styles.programCheck}>
                    <CheckCircle2 size={18} aria-hidden />
                  </div>
                  <h3 className={styles.programName}>{program.title}</h3>
                  <p className={styles.programDesc}>{program.desc}</p>
                  <Link href={program.href} className={styles.programLink}>
                    Learn more <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className={styles.featureGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerFast}
          >
            {supportServices.map((service) => (
              <motion.div key={service} className={styles.featureCard} variants={fadeUp}>
                <div className={styles.featureCheck}>
                  <CheckCircle2 size={16} aria-hidden />
                </div>
                <p className={styles.featureText}>{service}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 5: Impact Statistics ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="impact-stats-heading">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span className={styles.sectionEyebrow} variants={fadeUp}>
              <Sparkles size={13} aria-hidden /> Our Impact
            </motion.span>
            <motion.h2 id="impact-stats-heading" className={styles.sectionTitle} variants={fadeUp}>
              Impact That <span className={styles.accent}>Speaks</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className={styles.statsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerFast}
          >
            {impactStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} className={styles.statCard} variants={fadeUp}>
                  <div className={styles.statIconWrap}>
                    <Icon size={24} aria-hidden />
                  </div>
                  <p className={styles.statValue}>
                    {stat.animate ? (
                      <AnimatedStatValue
                        target={stat.target!}
                        suffix={stat.suffix}
                        trailingPlus
                      />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className={styles.statLabel}>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Section 6: Final CTA ── */}
      <section className={styles.ctaBanner} aria-labelledby="final-cta-heading">
        <div className={styles.ctaOrb1} aria-hidden />
        <div className={styles.ctaOrb2} aria-hidden />

        <div className="container">
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
                <button type="button" className={styles.ctaBtnPrimary} onClick={scrollToForm}>
                  Request a Bulk Order
                  <ArrowRight size={17} aria-hidden />
                </button>
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
                  alt="Saukhyam team with women, students, and community outreach partners"
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  className={styles.ctaImage}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
