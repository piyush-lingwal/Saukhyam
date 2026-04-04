'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Leaf, ShieldCheck, Droplets, Wind, Heart, ArrowRight,
  ShoppingBag, Users, TreePine, Recycle, Trophy,
  Star, CheckCircle2, XCircle, Sparkles, Zap,
} from 'lucide-react';
import { products } from '@/data/products';
import { testimonials } from '@/data/content';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

const tickerMessages = [
  '✨ 5 Lakh+ women have switched to Saukhyam',
  '🌿 Made with banana fiber — 100% chemical free',
  '♻️ Each pad lasts 2-3 years, saving 100+ kg waste',
  '🏆 Recognized by NITI Aayog & UN Climate Conference',
  '🇮🇳 Handcrafted by rural women across India',
  '💚 Join the reusable revolution today',
];

const trustItems = [
  { icon: ShieldCheck, label: 'Leak Proof', sub: 'PU barrier layer' },
  { icon: Heart, label: 'Gentle on Skin', sub: '100% cotton surface' },
  { icon: Leaf, label: 'Chemical Free', sub: 'Natural banana fiber' },
  { icon: Wind, label: 'Dries Fast', sub: 'Breathable design' },
];

const impactStats = [
  { icon: Users, number: '5,00,000+', label: 'Women Switched' },
  { icon: TreePine, number: '29 Lakh kg', label: 'CO₂ Prevented' },
  { icon: Recycle, number: '100+ kg', label: 'Waste Saved Per Person' },
  { icon: Trophy, number: '12+', label: 'National Awards' },
];

const reusablePoints = [
  '100% chemical free — no dioxins, phthalates, or bleach',
  'Banana fiber with natural antimicrobial properties',
  'Lasts 2-3 years with proper care',
  'Saves ₹3,000+ per year vs disposables',
  'Biodegradable — zero landfill waste',
  'Handcrafted by empowered rural women',
];

const disposablePoints = [
  'Contains dioxins, phthalates, and VOCs',
  'Synthetic superabsorbent polymers next to skin',
  'Single use — 12,000+ pads in a lifetime',
  'Costs ₹3,000-5,000 per year recurring',
  'Takes 500-800 years to decompose',
  'Mass-produced in chemical factories',
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  const { addItem } = useCart();

  return (
    <>
      {/* ── Announcement Ticker ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...tickerMessages, ...tickerMessages].map((msg, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDot} />
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        {/* Background glows */}
        <div className={styles.heroBg}>
          <div className={`${styles.heroGlow} ${styles.heroGlow1}`} />
          <div className={`${styles.heroGlow} ${styles.heroGlow2}`} />
        </div>

        {/* Side women images — visible on wide screens only */}
        <div className={styles.heroSideLeft} aria-hidden="true">
          <img src="/hero-woman-left.png.png" alt="" />
        </div>
        <div className={styles.heroSideRight} aria-hidden="true">
          <img src="/hero-woman-right.png.png" alt="" />
        </div>

        <div className={`container ${styles.heroContainer}`}>
          {/* Headline */}
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.heroTitleAccent}>
              Healing Periods.
            </span>
            <br />
            <span className={styles.heroTitleAccent}>
              Healing the Planet.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Sustainable • Chemical-Free • Empowering
          </motion.p>

          {/* Social proof pill */}
          <motion.div
            className={styles.heroPill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className={styles.heroPillAvatars}>
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className={styles.heroPillImg} />
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className={styles.heroPillImg} />
              <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100" alt="" className={styles.heroPillImg} />
            </div>
            <Sparkles size={16} className={styles.heroPillSparkle} />
            <span>Trusted by 5,00,000+ Women</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            India&apos;s first reusable pads made from banana fiber — handcrafted
            by rural women, 100% chemical-free, and built to last 2–3 years.
            Join the movement.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.heroCTAs}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link href="/products" className={styles.btnHeroPrimary}>
              Switch Now
            </Link>
            <Link href="/science" className={styles.btnHeroSecondary}>
              Why Switch?
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>5,00,000+</span>
              <span className={styles.heroStatLabel}>Women Switched</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>12+</span>
              <span className={styles.heroStatLabel}>Awards Won</span>
            </div>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>3 Years</span>
              <span className={styles.heroStatLabel}>Pad Lifespan</span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── Products ── */}
      <section className={styles.productsSection}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">
              <ShoppingBag size={14} />
              Our Products
            </span>
            <h2>Handcrafted With Love</h2>
            <p>Eco-friendly reusable pads made from banana fiber, lovingly stitched by rural women across India.</p>
          </motion.div>

          <motion.div
            className={styles.productGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {products.slice(0, 8).map((product) => (
              <motion.div key={product.id} variants={fadeInUp} className={styles.productCard}>
                {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                <Link href={`/products/${product.slug}`}>
                  <div className={styles.productImageWrap}>
                    {product.images[0] ? (
                      <img src={product.images[0]} alt={product.name} loading="lazy" />
                    ) : (
                      <Leaf size={48} className={styles.productPlaceholder} />
                    )}
                  </div>
                </Link>
                <div className={styles.productInfo}>
                  <Link href={`/products/${product.slug}`}>
                    <h3 className={styles.productName}>{product.name}</h3>
                  </Link>
                  <div className={styles.productPrice}>₹{product.price}</div>
                  <button
                    className={styles.addToCartBtn}
                    onClick={() => addItem(product)}
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Switch ── */}
      <section className={styles.whySwitch}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Zap size={14} />
              The Difference
            </span>
            <h2>Reusable vs Disposable</h2>
            <p>See why 5 lakh+ women have made the switch to Saukhyam.</p>
          </motion.div>

          <motion.div
            className={styles.comparisonGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={`${styles.comparisonCard} ${styles.good}`}>
              <div className={`${styles.comparisonCardTitle} ${styles.good}`}>
                <Leaf size={22} />
                Saukhyam Reusable
              </div>
              {reusablePoints.map((point, i) => (
                <div key={i} className={styles.comparisonItem}>
                  <CheckCircle2 size={18} className={styles.comparisonIcon} style={{ color: 'var(--green-500)' }} />
                  {point}
                </div>
              ))}
            </motion.div>

            <div className={styles.comparisonVs}>
              <div className={styles.vsCircle}>VS</div>
            </div>

            <motion.div variants={fadeInUp} className={`${styles.comparisonCard} ${styles.bad}`}>
              <div className={`${styles.comparisonCardTitle} ${styles.bad}`}>
                <XCircle size={22} />
                Disposable Pads
              </div>
              {disposablePoints.map((point, i) => (
                <div key={i} className={styles.comparisonItem}>
                  <XCircle size={18} className={styles.comparisonIcon} style={{ color: 'var(--terracotta)' }} />
                  {point}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Impact Counter ── */}
      <section className={styles.impactSection}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge" style={{ background: 'rgba(34,197,94,0.15)', color: 'var(--green-400)' }}>
              <Heart size={14} />
              Our Impact
            </span>
            <h2 style={{ color: 'var(--white)' }}>Making a Difference, One Pad at a Time</h2>
            <p style={{ color: 'var(--green-300)' }}>Real numbers. Real impact. Real lives changed.</p>
          </motion.div>

          <motion.div
            className={styles.impactGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {impactStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className={styles.impactCard}>
                <div className={styles.impactIcon}>
                  <stat.icon size={28} />
                </div>
                <div className={styles.impactNumber}>{stat.number}</div>
                <div className={styles.impactLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials — Animated Carousel ── */}
      <section className={styles.testimonialsSection}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">
              <Heart size={14} />
              Real Stories, Real Healing
            </span>
            <h2>Verified Testimonials</h2>
            <p>
              Hear from {testimonials.length} women across India who experienced measurable health improvements after switching to Saukhyam.
            </p>
          </motion.div>
        </div>

        {/* Auto-scrolling testimonial track — Row 1 */}
        <div className={styles.testimonialMarqueeWrap}>
          <div className={styles.testimonialMarquee}>
            <div className={styles.testimonialTrack}>
              {[...testimonials.slice(0, 7), ...testimonials.slice(0, 7)].map((t, i) => (
                <div key={`r1-${t.id}-${i}`} className={styles.testimonialCard}>
                  <div className={styles.testimonialCardTop}>
                    <span className={`${styles.conditionBadge} ${styles[`condition_${t.condition}`]}`}>
                      {t.mainProblem}
                    </span>
                    <span className={styles.durationBadge}>
                      {t.duration}
                    </span>
                  </div>
                  <div className={styles.testimonialStars}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialLocation}>{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-scrolling testimonial track — Row 2 (reverse direction) */}
        <div className={styles.testimonialMarqueeWrap}>
          <div className={styles.testimonialMarquee}>
            <div className={`${styles.testimonialTrack} ${styles.testimonialTrackReverse}`}>
              {[...testimonials.slice(7), ...testimonials.slice(7)].map((t, i) => (
                <div key={`r2-${t.id}-${i}`} className={styles.testimonialCard}>
                  <div className={styles.testimonialCardTop}>
                    <span className={`${styles.conditionBadge} ${styles[`condition_${t.condition}`]}`}>
                      {t.mainProblem}
                    </span>
                    <span className={styles.durationBadge}>
                      {t.duration}
                    </span>
                  </div>
                  <div className={styles.testimonialStars}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialLocation}>{t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>Ready to Make the Switch?</motion.h2>
            <motion.p variants={fadeInUp} className={styles.ctaDesc}>
              Join 5 lakh+ women who are healing their periods and healing the planet.
              Start your journey with Saukhyam today.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/products" className={styles.ctaBtnWhite}>
                <ShoppingBag size={20} />
                Shop Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
