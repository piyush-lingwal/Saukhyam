'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Leaf,
  Sparkles,
  Globe,
} from 'lucide-react';
import styles from './page.module.css';
import ContactMap from '@/components/contact/ContactMap';

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

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    lines: [
      'Saukhyam Reusable Pads',
      'Saukhyam House,',
      'Mata Amritanandamayi Math',
      'Amritapuri PO,',
      'Kollam, Kerala 690546',
    ],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 6282 103 073'],
    href: 'tel:+916282103073',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@saukhyampads.org'],
    href: 'mailto:info@saukhyampads.org',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
  {
    icon: Globe,
    title: 'Website',
    lines: ['saukhyampads.org'],
    isLink: true,
    prefix: 'https://',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:info@saukhyampads.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} aria-hidden />
        <div className={styles.heroOrb2} aria-hidden />
        <div className={styles.heroOrb3} aria-hidden />
        <div className={styles.heroGrain} aria-hidden />

        <div className="container">
          <motion.div
            className={styles.heroInner}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span className={styles.heroLabel} variants={fadeUp}>
              <Leaf size={13} /> Get in Touch
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Contact Us
            </motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              We&apos;re here to help. Reach out to learn more about Saukhyam, our reusable pads,
              policies, or your order.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main two-column layout */}
      <section className={styles.mainSection}>
        <div className={styles.mainGlow} aria-hidden />
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Left: Contact info cards */}
            <motion.div
              className={styles.infoColumn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.p className={styles.infoEyebrow} variants={fadeLeft}>
                Reach Us Directly
              </motion.p>
              <motion.h2 className={styles.infoHeading} variants={fadeLeft}>
                Contact <span className={styles.accent}>Information</span>
              </motion.h2>

              <div className={styles.infoCards}>
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      className={styles.infoCard}
                      variants={fadeLeft}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className={styles.infoIconWrap}>
                        <Icon size={20} />
                      </div>
                      <div className={styles.infoBody}>
                        <h3 className={styles.infoTitle}>{card.title}</h3>
                        {card.lines.map((line) =>
                          card.href && card.lines.length === 1 ? (
                            <a key={line} href={card.href} className={styles.infoLink}>
                              {line}
                            </a>
                          ) : (
                            <p key={line} className={styles.infoLine}>
                              {line}
                            </p>
                          ),
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              className={styles.formColumn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeRight}
            >
              <div className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Send Us a Message</h2>
                  <p className={styles.formSubtext}>We&apos;d love to hear from you.</p>
                </div>

                {submitted ? (
                  <motion.div
                    className={styles.successBox}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Sparkles size={28} className={styles.successIcon} />
                    <h3>Thank you for reaching out</h3>
                    <p>Your email client should open shortly. We&apos;ll get back to you as soon as we can.</p>
                    <button
                      type="button"
                      className={styles.successReset}
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Full name"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Your Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                      />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                      Send Message
                      <Send size={17} />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive map */}
      <section className={styles.mapSection} aria-labelledby="find-us-heading">
        <div className="container">
          <motion.div
            className={styles.mapHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span className={styles.mapLabel} variants={fadeUp}>
              <MapPin size={13} /> Location
            </motion.span>
            <motion.h2 id="find-us-heading" className={styles.mapTitle} variants={fadeUp}>
              <span className={styles.mapTitleText}>
                Find Us on the <span className={styles.accent}>Map</span>
              </span>
              <span className={styles.mapTitleLine} aria-hidden />
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactMap />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
