'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import styles from './TestimonialsCTA.module.css';

export default function TestimonialsCTA() {
  return (
    <section className={styles.ctaSection}>
      {/* Background Banner Image - No filters/overlays */}
      <img
        src="/images/testimonials-footer-banner.jpg"
        alt="Saukhyam Reusable Pads Banner"
        className={styles.bannerImage}
      />

      {/* Overlay Content */}
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
            href="/products"
            className={styles.ctaButton}
            aria-label="Switch Now to Saukhyam reusable pads"
          >
            <Heart className={styles.heartIcon} size={24} aria-hidden="true" />
            <span className={styles.buttonText}>Switch Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
