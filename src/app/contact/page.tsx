'use client';

import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send,
  MessageSquare, Globe,
} from 'lucide-react';
import styles from './page.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Amritapuri Ashram, Clappana P.O.,', 'Kollam, Kerala 690525, India'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@saukhyampads.org', 'orders@saukhyampads.org'],
    isLink: true,
    prefix: 'mailto:',
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 9876 543 210', '+91 4762 897 578'],
    isLink: true,
    prefix: 'tel:',
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
  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            We&apos;d love to hear from you! Whether it&apos;s questions, feedback, or partnership inquiries.
          </motion.p>
        </div>
      </section>

      <div className="container">
        <div className={styles.contactLayout}>
          {/* Info Cards */}
          <motion.div
            className={styles.contactInfo}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {contactInfo.map(info => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} variants={fadeInUp} className={styles.infoCard}>
                  <div className={styles.infoIcon}><Icon size={20} /></div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    {info.lines.map(line => (
                      <p key={line}>
                        {info.isLink ? (
                          <a href={`${info.prefix}${line.replace(/\s/g, '')}`}>{line}</a>
                        ) : line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={styles.formTitle}>
              <MessageSquare size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--color-primary)' }} />
              Send us a Message
            </h2>
            <form className={styles.formGrid} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="Full name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone (Optional)</label>
                <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <select id="subject">
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="partnership">Partnership</option>
                  <option value="satellite">Satellite Centre</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell us how we can help..." rows={5} required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Find Us</h2>
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.6!2d76.48!3d9.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnNDguMCJOIDc2wrAyOCc0OC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saukhyam Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
