'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import styles from './TestimonialsCTA.module.css';

export default function TestimonialsCTA() {
  return (
    <section className={styles.ctaSection}>
      {/* Background Overlay for readability */}
      <div className={styles.overlay} />

      <div className={styles.ctaContainer}>
        {/* Heading */}
        <h2 className={styles.heading}>
          Ready to Start Your Healing Journey?
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Join thousands of women who have made the switch to Saukhyam.
        </p>

        {/* Button */}
        <div className={styles.buttonWrapper}>
          <a
            href="https://master.d3ox30sljz8y1j.amplifyapp.com/products"
            className={styles.ctaButton}
            aria-label="Switch Now to Saukhyam reusable pads"
          >
            <Heart className={styles.heartIcon} size={27} aria-hidden="true" />
            <span className={styles.buttonText}>Switch Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
