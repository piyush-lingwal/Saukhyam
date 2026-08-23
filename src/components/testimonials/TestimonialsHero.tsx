'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Star, Calendar } from 'lucide-react';
import styles from './TestimonialsHero.module.css';

export default function TestimonialsHero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Banner Image with responsive support and overlay */}
      <div className={styles.heroBgContainer}>
        <Image
          src="/images/testimonials-hero.jpg"
          alt="Saukhyam Banana Fiber Reusable Pads Banner"
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
        <div className={styles.heroBgOverlay} />
      </div>

      <div className={styles.heroContainer}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLinkHome}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator} aria-hidden="true">&gt;</span>
          <span className={styles.breadcrumbCurrent}>Testimonials</span>
        </nav>

        {/* Heading */}
        <h1 className={styles.mainHeading}>
          Real Stories, Real Healing
        </h1>

        {/* Description */}
        <p className={styles.description}>
          Hear from women across India who experienced measurable health improvements after switching to Saukhyam reusable pads.
        </p>

        {/* Statistics Cards */}
        <div className={styles.statsRow}>
          {/* Card 1 */}
          <div className={styles.statCard}>
            <div className={styles.iconWrapper}>
              <Users className={styles.statIcon} size={26} aria-hidden="true" />
            </div>
            <div className={styles.statNumber}>20</div>
            <div className={styles.statLabel}>VERIFIED STORIES</div>
          </div>

          {/* Card 2 */}
          <div className={styles.statCard}>
            <div className={styles.iconWrapper}>
              <Star className={styles.statIcon} size={26} aria-hidden="true" />
            </div>
            <div className={styles.statNumber}>5.0</div>
            <div className={styles.statLabel}>AVERAGE RATING</div>
          </div>

          {/* Card 3 */}
          <div className={styles.statCard}>
            <div className={styles.iconWrapper}>
              <Calendar className={styles.statIcon} size={26} aria-hidden="true" />
            </div>
            <div className={styles.statNumber}>2–8 Years</div>
            <div className={styles.statLabel}>USAGE DURATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}

