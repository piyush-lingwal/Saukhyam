'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import styles from '@/app/blog/[slug]/page.module.css';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <motion.section
      className={styles.newsletter}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.newsletterIcon}><Mail size={24} /></div>
      <h3 className={styles.newsletterTitle}>Stay in the loop</h3>
      <p className={styles.newsletterDesc}>
        Get stories, health insights, and impact updates from Saukhyam — no spam, unsubscribe anytime.
      </p>
      {submitted ? (
        <p className={styles.newsletterSuccess}>
          <CheckCircle2 size={18} /> Thank you! We&apos;ll be in touch soon.
        </p>
      ) : (
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={styles.newsletterInput}
            aria-label="Email address"
          />
          <button type="submit" className={styles.newsletterBtn}>
            Subscribe <Send size={16} />
          </button>
        </form>
      )}
    </motion.section>
  );
}
