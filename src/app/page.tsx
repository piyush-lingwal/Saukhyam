'use client';

import { useRef, useState } from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Leaf, ShieldCheck, Droplets, Wind, Heart, ArrowRight,
  ShoppingBag, Users, TreePine, Recycle, Trophy,
  Star, CheckCircle2, XCircle, Sparkles, Zap,
  GraduationCap, Globe, HandHeart, ChevronLeft, ChevronRight,
  Check, Eye
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
  { icon: Heart, number: '280+', label: 'Livelihoods for Rural Women' },
  { icon: Trophy, number: '20+', label: 'National & International Awards' },
];

const pressLogos = [
  '1..webp', '2..webp', '5..webp', '6..webp', '7..webp',
  '11..webp', '12..webp', '13..webp', '17..webp', '19..webp',
  '23..webp', '25..webp', '26..webp', '27..webp', '30..webp',
  '32..webp', '35..webp', '36..webp', '37..webp', '39..webp',
  '42..webp', '44..webp', '45..webp',
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [recentlyAdded, setRecentlyAdded] = useState<Record<string, boolean>>({});
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollWidth = window.innerWidth > 768 ? 400 : 300;
      const amount = direction === 'left' ? -scrollWidth : scrollWidth;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: typeof products[number]) => {
    addItem(product);
    setRecentlyAdded((prev) => ({ ...prev, [product.id]: true }));
    window.setTimeout(() => {
      setRecentlyAdded((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const toggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

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
        <div className={styles.productsAmbientGlow} aria-hidden="true" />
        <div className={styles.productsAmbientGlowSecondary} aria-hidden="true" />
        <div className={styles.productsMesh} aria-hidden="true" />
        <div className="container">
          <motion.div
            className={`${styles.productsHeader} section-header`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.productsHeaderPanel}>
              <span className="section-badge">
                <ShoppingBag size={14} />
                Our Products
              </span>

              <p className={styles.productsSectionTagline}>Sustainable • Toxin-Free</p>
            </div>
          </motion.div>

          <div className={styles.productsShowcase}>
            <motion.div
              className={styles.productGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {products.slice(0, 8).map((product) => {
                const isAdded = !!recentlyAdded[product.id];
                const isWished = !!wishlist[product.id];

                return (
                  <motion.article
                    key={product.id}
                    variants={fadeInUp}
                    className={styles.productCard}
                  >
                    <div className={styles.productCardAura} aria-hidden="true" />

                    <Link href={`/products/${product.slug}`} className={styles.productStageLink}>
                      <div className={styles.productImageWrap}>
                        <div className={styles.productImageHalo} aria-hidden="true" />
                        {product.images[0] ? (
                          <img src={product.images[0]} alt={product.name} loading="lazy" />
                        ) : (
                          <Leaf size={48} className={styles.productPlaceholder} />
                        )}

                        {product.features && product.features.length > 0 && (
                          <div className={styles.featuresPeek} aria-hidden="true">
                            {product.features.slice(0, 2).map((feature) => (
                              <span key={feature} className={styles.featureChip}>{feature}</span>
                            ))}
                          </div>
                        )}

                      </div>
                    </Link>

                    <div className={styles.productInfo}>
                      <div className={styles.productText}>
                        <div className={styles.productTitleRow}>
                          <Link href={`/products/${product.slug}`} className={styles.productNameLink}>
                            <h3 className={styles.productName}>{product.name}</h3>
                          </Link>
                          <button
                            type="button"
                            className={`${styles.wishlistBtn} ${isWished ? styles.wishlistActive : ''}`}
                            onClick={(e) => toggleWishlist(e, product.id)}
                            aria-label={isWished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
                            aria-pressed={isWished}
                          >
                            <Heart
                              size={16}
                              strokeWidth={2}
                              fill={isWished ? '#dc1464' : 'none'}
                            />
                          </button>
                        </div>
                        {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                      </div>
                      <div className={styles.productActionRow}>
                        <div className={styles.productPriceWrap}>
                          <div className={styles.productPrice}>₹{product.price}</div>
                        </div>
                        <button
                          className={`${styles.addToCartBtn} ${isAdded ? styles.addToCartAdded : ''}`}
                          onClick={() => handleAddToCart(product)}
                          aria-label={`Add ${product.name} to cart`}
                          disabled={isAdded}
                        >
                          {isAdded ? (
                            <>
                              <Check size={16} />
                              <span className={styles.addToCartLabel}>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag size={16} />
                              <span className={styles.addToCartLabel}>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Amma & Programs — Next-Gen Bento Grid ── */}
      <section className={styles.bentoSection}>
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
              Our Foundational Programs
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
            {/* Amma — Large Photo Card (spans 2 rows) */}
            <motion.div variants={fadeInUp} className={`${styles.bCard} ${styles.bAmma}`}>
              <div className={styles.bAmmaPhoto}>
                <img src="/amma.png" alt="Mata Amritanandamayi (Amma)" className={styles.bAmmaImg} loading="lazy" />
              </div>
              <div className={styles.bAmmaBody}>
                <span className={styles.bAmmaTag}>Inspired by Amma</span>
                <h3 className={styles.bAmmaName}>Mata Amritanandamayi</h3>
                <p className={styles.bAmmaText}>
                  Saukhyam was born from Amma&apos;s vision - safe, non-polluting, toxin-free menstrual care for every menstruator.
                </p>
                <div className={styles.bAmmaQuote}>
                  <span className={styles.bAmmaQM}>&ldquo;</span>
                  <p>When we take care of nature, nature takes care of us.</p>
                </div>
                <Link href="/about" className={styles.bAmmaLink}>
                  Read Our Story <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            {/* HEAL Logo Card (small square) */}
            <motion.a href="/programs/heal" variants={fadeInUp} className={`${styles.bCard} ${styles.bHealLogo}`}>
              <img src="/HealLogo/HEAL logo RGB_Vertical.png" alt="HEAL" className={styles.bLogoImage} />
            </motion.a>

            {/* HEAL Info Card (wider) */}
            <motion.a href="/programs/heal" variants={fadeInUp} className={`${styles.bCard} ${styles.bHealInfo}`}>
              <p className={styles.bInfoSub}>Health, Environment &amp; Active Living</p>
              <p className={styles.bInfoDesc}>
                Healing period problems (yes, PCOS too!) with comfy reusable pads that promote healthier cycles
              </p>
              <div className={styles.bInfoMetrics}>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>77%</span>
                  <span className={styles.bInfoLabel}>Pain Reduction</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>81%</span>
                  <span className={styles.bInfoLabel}>Cycle Regularity Improvement</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>92%</span>
                  <span className={styles.bInfoLabel}>Users Continued Beyond 6 Months</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>74%</span>
                  <span className={styles.bInfoLabel}>Complete Shift in 3 Months</span>
                </div>
              </div>
              <span className={styles.bInfoArrow}><ArrowRight size={16} /></span>
            </motion.a>

            {/* CARE Info Card (Row 2, flipped) */}
            <motion.a href="/programs/care" variants={fadeInUp} className={`${styles.bCard} ${styles.bCareInfo}`}>
              <p className={styles.bInfoSub}>Campus Action for Reusable Essentials</p>
              <p className={styles.bInfoDesc}>
                Just 200 students switching can help a college campus reduce 1&nbsp;tonne of CO₂ emissions every year
              </p>
              <div className={styles.bInfoMetrics}>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>52</span>
                  <span className={styles.bInfoLabel}>Campuses</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>1.3K</span>
                  <span className={styles.bInfoLabel}>Ambassadors</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>11.7K</span>
                  <span className={styles.bInfoLabel}>Students</span>
                </div>
              </div>
              <span className={styles.bInfoArrow}><ArrowRight size={16} /></span>
            </motion.a>

            {/* CARE Logo Card (small square) */}
            <motion.a href="/programs/care" variants={fadeInUp} className={`${styles.bCard} ${styles.bCareLogo}`}>
              <img src="/CareLogo/CARE logo_Vertical.png" alt="CARE" className={styles.bLogoImage} />
            </motion.a>

            {/* REACH Logo Card (small square) */}
            <motion.a href="/programs/reach" variants={fadeInUp} className={`${styles.bCard} ${styles.bReachLogo}`}>
              <img src="/ReachLogo/HEAL logo RGB_Vertical.png" alt="REACH" className={styles.bLogoImage} />
            </motion.a>

            {/* REACH Info Card (Row 3) */}
            <motion.a href="/programs/reach" variants={fadeInUp} className={`${styles.bCard} ${styles.bReachInfo}`}>
              <p className={styles.bInfoSub}>Rural Empowerment and<br />Community&nbsp;Health</p>
              <p className={styles.bInfoDesc}>
                The future of period care - made by women, for women, in Saukhyam&rsquo;s rural production centres
              </p>
              <div className={styles.bInfoMetrics}>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>4137</span>
                  <span className={styles.bInfoLabel}>Villages</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>11</span>
                  <span className={styles.bInfoLabel}>States</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>30L+</span>
                  <span className={styles.bInfoLabel}>Women &amp; Girls Empowered</span>
                </div>
                <div className={styles.bInfoMetric}>
                  <span className={styles.bInfoNum}>280+</span>
                  <span className={styles.bInfoLabel}>Rural Livelihoods Enabled</span>
                </div>
              </div>
              <span className={styles.bInfoArrow}><ArrowRight size={16} /></span>
            </motion.a>

            {/* Community Photo Card */}
            <motion.div variants={fadeInUp} className={`${styles.bCard} ${styles.bCommunity}`}>
              <img src="/bentogrid_photo.jpeg" alt="Saukhyam community — women empowered across rural India" className={styles.bCommunityImg} loading="lazy" />
              <div className={styles.bCommunityOverlay}>
                <span className={styles.bCommunityNum}>30L+</span>
                <span className={styles.bCommunityLabel}>Women &amp; Girls Empowered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Press & Media Marquee ── */}
      <section className={styles.pressSection} aria-labelledby="press-heading">
        <div className="container">
          <motion.div
            className={styles.pressHeaderWrap}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 id="press-heading" className={styles.pressHeading}>
              <span className={styles.pressHeadingLine} aria-hidden="true" />
              <span className={styles.pressHeadingText}>Press &amp; Media</span>
              <span className={styles.pressHeadingLine} aria-hidden="true" />
            </h2>
          </motion.div>
        </div>

        <div
          className={styles.pressMarquee}
          role="region"
          aria-label="Scrolling gallery of press and media logos that have featured Saukhyam"
        >
          <div className={styles.pressTrack} aria-hidden="false">
            {[...pressLogos, ...pressLogos].map((logo, idx) => (
              <div key={`${logo}-${idx}`} className={styles.pressItem}>
                <img
                  src={`/Press_And_Media/${logo}`}
                  alt=""
                  className={styles.pressLogo}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
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
            <div className={styles.testimonialCtas}>
              <Link href="/testimonials" className={styles.viewAllTestimonials}>
                View All Stories
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://g.co/kgs/2if6XD"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.googleReviewBtn}
                aria-label="Leave a review on Google"
              >
                <svg className={styles.googleReviewIcon} viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                Leave a Google Review
              </a>
            </div>
          </motion.div>
        </div>

        {/* Simple Testimonial Slider */}
        <div className={styles.testimonialSliderWrap}>
          <button 
            className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
            onClick={() => scrollTestimonials('left')}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.testimonialSliderContainer} ref={scrollRef}>
            <div className={styles.testimonialTrack}>
              {testimonials.map((t, i) => (
                <Link key={`slide-${t.id}-${i}`} href="/testimonials" className={styles.testimonialCard}>
                  <div className={styles.testimonialCardTop}>
                    <span className={`${styles.conditionBadge} ${styles[`condition_${t.condition}`]}`}>
                      {t.mainProblem}
                    </span>
                    <div className={styles.testimonialStars}>
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} className={styles.testimonialAvatarImg} loading="lazy" />
                      ) : (
                        t.name.charAt(0)
                      )}
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

          <button 
            className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
            onClick={() => scrollTestimonials('right')}
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* ── Impact Counter (after Testimonials) ── */}
      <section className={styles.impactSection}>
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge" style={{ background: 'rgba(22,101,52,0.1)', color: 'var(--green-700)' }}>
              <Heart size={14} />
              Our Impact
            </span>
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
