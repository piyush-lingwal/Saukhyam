'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Leaf, ShieldCheck, Droplets, Wind, Heart, ArrowRight,
  ShoppingBag, Users, TreePine, Recycle, Trophy,
  Star, CheckCircle2, XCircle, Sparkles, Zap,
  GraduationCap, Globe, HandHeart,
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
  { icon: Users, number: '30 Lakh+', label: 'Women/Girls Who Switched' },
  { icon: TreePine, number: '17,400 T', label: 'CO₂e Prevented Annually' },
  { icon: Heart, number: '300+', label: 'Livelihoods for Rural Women' },
  { icon: Trophy, number: '20+', label: 'National & International Awards' },
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

          {/* Subtitle — World's first */}
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            The world&apos;s first reusable sanitary napkins<br />made from banana fiber.
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
            <span>5,00,000+ Women Healed</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className={styles.heroCTAs}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link href="/products" className={styles.btnHeroPrimary}>
              Start HEAL
            </Link>
            <Link href="/science" className={styles.btnHeroSecondary}>
              The HEAL Challenge
            </Link>
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

            <p className={styles.productsSectionTagline}>Sustainable • Chemical-Free • Empowering</p>

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

      {/* ── Amma & Programs — Next-Gen Bento Grid ── */}
      <section className={styles.bentoSection}>
        {/* Decorative background blobs */}
        <div className={styles.bentoBlobA} aria-hidden="true" />
        <div className={styles.bentoBlobB} aria-hidden="true" />

        <div className="container">
          <motion.div
            className={styles.bentoHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className={styles.bentoBadge}>
              <Heart size={14} />
              Our Foundation &amp; Programs
            </span>
            <h2 className={styles.bentoTitle}>
              Compassion That Creates <span className={styles.bentoTitleAccent}>Change</span>
            </h2>
          </motion.div>

          <motion.div
            className={styles.bentoGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* ── Card: Amma (spans 2 rows, left) ── */}
            <motion.div variants={fadeInUp} className={`${styles.bCard} ${styles.bCardAmma}`}>
              <div className={styles.bAmmaInner}>
                <div className={styles.bAmmaPhoto}>
                  <img
                    src="/amma.png"
                    alt="Mata Amritanandamayi (Amma)"
                    className={styles.bAmmaImg}
                    loading="lazy"
                  />
                </div>
                <div className={styles.bAmmaBody}>
                  <span className={styles.bAmmaTag}>Inspired by Amma</span>
                  <h3 className={styles.bAmmaName}>Mata Amritanandamayi</h3>
                  <p className={styles.bAmmaText}>
                    Saukhyam was born from Amma&apos;s vision — safe, chemical-free menstrual care for every woman, where sustainability is a way of life.
                  </p>
                  <div className={styles.bAmmaQuote}>
                    <span className={styles.bAmmaQM}>&ldquo;</span>
                    <p>When we take care of nature, nature takes care of us.</p>
                  </div>
                  <Link href="/about" className={styles.bAmmaLink}>
                    Read Our Story <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ── Card: HEAL ── */}
            <motion.a href="/programs/heal" variants={fadeInUp} className={`${styles.bCard} ${styles.bCardHeal}`}>
              <div className={styles.bCardLogo}>
                <img src="/HealLogo/HEAL logo RGB_Horizontal.png" alt="HEAL Program" className={styles.bCardLogoImg} />
              </div>
              <p className={styles.bCardSub}>Health, Environment &amp; Active Living</p>
              <p className={styles.bCardDesc}>
                Supporting women facing PCOS &amp; period disorders through holistic wellness and chemical-free pads.
              </p>
              <div className={styles.bCardMetrics}>
                <div className={styles.bMetric}>
                  <span className={styles.bMetricNum}>85%</span>
                  <span className={styles.bMetricLabel}>Pain Reduction</span>
                </div>
                <div className={styles.bMetric}>
                  <span className={styles.bMetricNum}>70%</span>
                  <span className={styles.bMetricLabel}>PCOS Improvement</span>
                </div>
              </div>
              <span className={styles.bCardArrow}>
                <ArrowRight size={18} />
              </span>
            </motion.a>

            {/* ── Card: Impact Stats (small) ── */}
            <motion.div variants={fadeInUp} className={`${styles.bCard} ${styles.bCardStats}`}>
              <div className={styles.bStatsContent}>
                <span className={styles.bStatsNum}>5L+</span>
                <span className={styles.bStatsLabel}>Women Empowered</span>
              </div>
              <div className={styles.bStatsAvatars}>
                <div className={styles.bAvatar} style={{ background: '#bbf7d0' }}>👩</div>
                <div className={styles.bAvatar} style={{ background: '#a7f3d0' }}>👩‍🦱</div>
                <div className={styles.bAvatar} style={{ background: '#6ee7b7' }}>👧</div>
                <div className={styles.bAvatar} style={{ background: '#34d399' }}>🧕</div>
                <span className={styles.bAvatarMore}>+4,99,996</span>
              </div>
            </motion.div>

            {/* ── Card: REACH ── */}
            <motion.a href="/programs/reach" variants={fadeInUp} className={`${styles.bCard} ${styles.bCardReach}`}>
              <div className={styles.bCardLogo}>
                <img src="/ReachLogo/HEAL logo RGB_Horizontal.png" alt="REACH Program" className={styles.bCardLogoImg} />
              </div>
              <p className={styles.bCardSub}>Rural Empowerment &amp; Community Health</p>
              <p className={styles.bCardDesc}>
                Bringing chemical-free menstrual hygiene to rural India through satellite centres and local manufacturing.
              </p>
              <div className={styles.bCardMetrics}>
                <div className={styles.bMetric}>
                  <span className={styles.bMetricNum}>101</span>
                  <span className={styles.bMetricLabel}>Villages</span>
                </div>
                <div className={styles.bMetric}>
                  <span className={styles.bMetricNum}>20+</span>
                  <span className={styles.bMetricLabel}>States</span>
                </div>
              </div>
              <span className={styles.bCardArrow}>
                <ArrowRight size={18} />
              </span>
            </motion.a>

            {/* ── Card: CARE ── */}
            <motion.a href="/programs/care" variants={fadeInUp} className={`${styles.bCard} ${styles.bCardCare}`}>
              <div className={styles.bCardLogo}>
                <img src="/CareLogo/CARE logo_Horizontal.png" alt="CARE Program" className={styles.bCardLogoImg} />
              </div>
              <p className={styles.bCardSub}>Campus Action for Reusable Essentials</p>
              <p className={styles.bCardDesc}>
                Empowering campuses to shift toward sustainable menstrual choices through workshops and ambassador programs.
              </p>
              <div className={styles.bCardMetrics}>
                <div className={styles.bMetric}>
                  <span className={styles.bMetricNum}>50+</span>
                  <span className={styles.bMetricLabel}>Campuses</span>
                </div>
                <div className={styles.bMetric}>
                  <span className={styles.bMetricNum}>10K+</span>
                  <span className={styles.bMetricLabel}>Students</span>
                </div>
              </div>
              <span className={styles.bCardArrow}>
                <ArrowRight size={18} />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── Impact Counter (directly after Products) ── */}
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
            <p style={{ color: 'var(--green-300)', fontSize: '1.25rem', fontWeight: '700', marginTop: 'var(--space-4)' }}>Real numbers. Real lives changed.</p>
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
            <h2 className={styles.testimonialMainHeading}>
              <span className={styles.testimonialHeadingAccent}>Real Stories, </span>
              <span className={styles.testimonialHeadingHighlight}>Real Healing</span>
            </h2>
            <Link href="/testimonials" className={styles.viewAllTestimonials}>
              View All Stories
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Auto-scrolling testimonial track — Row 1 */}
        <div className={styles.testimonialMarqueeWrap}>
          <div className={styles.testimonialMarquee}>
            <div className={styles.testimonialTrack}>
              {[...testimonials.slice(0, 7), ...testimonials.slice(0, 7)].map((t, i) => (
                <Link key={`r1-${t.id}-${i}`} href="/testimonials" className={styles.testimonialCard}>
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-scrolling testimonial track — Row 2 (reverse direction) */}
        <div className={styles.testimonialMarqueeWrap}>
          <div className={styles.testimonialMarquee}>
            <div className={`${styles.testimonialTrack} ${styles.testimonialTrackReverse}`}>
              {[...testimonials.slice(7), ...testimonials.slice(7)].map((t, i) => (
                <Link key={`r2-${t.id}-${i}`} href="/testimonials" className={styles.testimonialCard}>
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
                </Link>
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
