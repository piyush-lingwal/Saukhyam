'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronRight, Globe, GraduationCap, MapPin, Heart, Users,
  Leaf, Stethoscope, Recycle, HandHeart, Building2, Mail, Send,
  CheckCircle2, Moon, Sun,
} from 'lucide-react';
import type { StatePageData } from '@/types/statePage';
import { useSiteTheme } from '@/context/SiteThemeContext';
import AnimatedStat from './AnimatedStat';
import FAQAccordion from './FAQAccordion';
import StickyActions from './StickyActions';
import styles from '@/app/programs/states/statePage.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const themeClass: Record<string, string> = {
  green: styles.heroGreen,
  teal: styles.heroTeal,
  purple: styles.heroPurple,
  amber: styles.heroAmber,
};

export default function StatePageView({ state }: { state: StatePageData }) {
  const { theme, toggleTheme } = useSiteTheme();
  const [galleryFilter, setGalleryFilter] = useState<string>('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredGallery = useMemo(() => {
    if (galleryFilter === 'all') return state.gallery;
    return state.gallery.filter(g => g.category === galleryFilter);
  }, [state.gallery, galleryFilter]);

  const programLabel =
    state.programFocus === 'both' ? 'REACH & CARE' :
    state.programFocus === 'reach' ? 'REACH' : 'CARE';

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src={state.heroImage} alt={state.name} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.heroOverlay} ${themeClass[state.theme]}`} aria-hidden />
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <Link href="/programs">Programs</Link>
            <ChevronRight size={12} />
            <Link href="/programs/states">States</Link>
            <ChevronRight size={12} />
            <span>{state.name}</span>
            <button type="button" onClick={toggleTheme} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }} aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </nav>
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.span variants={fadeUp} className={styles.heroLabel}>
              <Globe size={14} /> {programLabel} · {state.shortName}
            </motion.span>
            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              {state.name}: <span className={styles.heroAccent}>{state.tagline}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.heroSubtitle}>{state.heroSubtitle}</motion.p>
            <motion.div variants={fadeUp} className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryBtn}><Heart size={16} /> Support {state.shortName}</Link>
              <Link href="/programs/reach" className={styles.glassBtn}><Globe size={16} /> REACH</Link>
              <Link href="/programs/care" className={styles.glassBtn}><GraduationCap size={16} /> CARE</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <motion.div className={styles.statsGlass} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className={styles.statsGrid}>
              {state.stats.map(s => <AnimatedStat key={s.label} stat={s} />)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.section}>
        <div className="container">
          <motion.div className={styles.missionGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
            <motion.div variants={fadeUp}>
              <span className={styles.sectionBadge}><Leaf size={12} /> Mission</span>
              <h2 className={styles.sectionTitle}>Our work in {state.name}</h2>
              <p className={styles.sectionDesc}>{state.mission}</p>
            </motion.div>
            <motion.div variants={fadeUp} className={styles.missionList}>
              {state.missionPoints.map((p, i) => (
                <div key={i} className={styles.missionItem}>
                  <div className={styles.missionIcon}><CheckCircle2 size={18} /></div>
                  <span>{p}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Analytics */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Impact</span>
            <h2 className={styles.sectionTitle}>Analytics snapshot</h2>
          </div>
          <div className={styles.analyticsGrid}>
            {state.analytics.map(a => (
              <motion.div key={a.label} className={styles.analyticsCard} whileHover={{ y: -4 }}>
                <div className={styles.analyticsValue}>{a.value}</div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{a.label}</div>
                <div className={styles.analyticsChange}>{a.change}</div>
              </motion.div>
            ))}
          </div>
          <div className={styles.mapWrap}>
            <div className={styles.mapPlaceholder}>
              <MapPin size={32} />
              <strong>{state.name}</strong>
              <span>{state.mapCoords.lat.toFixed(2)}°N, {state.mapCoords.lng.toFixed(2)}°E</span>
              <Link href={`https://www.google.com/maps?q=${state.mapCoords.lat},${state.mapCoords.lng}`} target="_blank" rel="noopener noreferrer" className={styles.glassBtn} style={{ marginTop: '0.5rem' }}>
                View on map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Campaigns</span>
            <h2 className={styles.sectionTitle}>Featured campaigns</h2>
          </div>
          <div className={styles.cardsGrid}>
            {state.campaigns.map((c, i) => (
              <motion.article key={c.id} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className={styles.cardImage}>
                  <Image src={c.image} alt={c.title} fill sizes="33vw" />
                </div>
                <div className={styles.cardBody}>
                  <span className={`${styles.cardTag} ${c.status === 'active' ? styles.tagActive : styles.tagUpcoming}`}>{c.status}</span>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <motion.div className={styles.sectionHeader} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className={styles.sectionBadge}><Users size={12} /> Outreach</span>
            <h2 className={styles.sectionTitle}>State-specific activities</h2>
          </motion.div>
          <div className={styles.cardsGrid}>
            {state.outreach.map((a, i) => (
              <motion.div key={i} className={styles.infoCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3>{a.title}</h3>
                <p className={styles.cardDesc}>{a.description}</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>
                  <MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> {a.location} · {a.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare & Sustainability */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.twoCol}>
            <motion.div className={styles.infoCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3><Stethoscope size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />{state.healthcare.title}</h3>
              <ul className={styles.infoList}>{state.healthcare.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </motion.div>
            <motion.div className={styles.infoCard} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3><Recycle size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />{state.sustainability.title}</h3>
              <ul className={styles.infoList}>{state.sustainability.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <span className={styles.sectionBadge}>Timeline</span>
          <h2 className={styles.sectionTitle}>Our journey in {state.shortName}</h2>
          <motion.div className={styles.timeline} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {state.timeline.map((e, i) => (
              <motion.div key={i} className={styles.timelineItem} variants={fadeUp}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineYear}>{e.year}</div>
                <div className={styles.timelineTitle}>{e.title}</div>
                <p className={styles.timelineDesc}>{e.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Voices from {state.name}</h2>
          <div className={styles.testimonialGrid}>
            {state.testimonials.map((t, i) => (
              <motion.blockquote key={i} className={styles.testimonialCard} whileHover={{ y: -4 }}>
                <p className={styles.testimonialQuote}>{t.quote}</p>
                <div className={styles.testimonialAuthor}>{t.name}</div>
                <div className={styles.testimonialRole}>{t.role}</div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Volunteer */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.sectionTitle}><Building2 size={22} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />Partners</h2>
              <div className={styles.partnersRow}>
                {state.partners.map(p => (
                  <div key={p.name} className={styles.partnerChip}>{p.name}<span>{p.type}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h2 className={styles.sectionTitle}><HandHeart size={22} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />Volunteer</h2>
              <div className={styles.volunteerList}>
                {state.volunteerRoles.map(r => (
                  <div key={r} className={styles.volunteerItem}><CheckCircle2 size={16} /> {r}</div>
                ))}
              </div>
              <Link href="/contact" className={styles.primaryBtn} style={{ marginTop: '1.5rem', display: 'inline-flex' }}>Apply to volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Gallery</h2>
          <div className={styles.filterTabs}>
            {['all', 'outreach', 'health', 'training', 'campus'].map(f => (
              <button key={f} type="button" className={`${styles.filterTab} ${galleryFilter === f ? styles.filterTabActive : ''}`} onClick={() => setGalleryFilter(f)}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
          <div className={styles.galleryGrid}>
            {filteredGallery.map(g => (
              <motion.div key={g.id} className={styles.galleryItem} layout whileHover={{ scale: 1.02 }}>
                <Image src={g.src} alt={g.alt} fill sizes="25vw" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
          <FAQAccordion faqs={state.faqs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.newsletter}>
            <Mail size={28} style={{ marginBottom: '0.5rem' }} />
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800 }}>Stay connected with {state.shortName}</h3>
            <p style={{ opacity: 0.9, marginTop: '0.5rem' }}>Impact updates, volunteer openings, and campaign news.</p>
            {subscribed ? (
              <p style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <CheckCircle2 size={18} /> Subscribed successfully!
              </p>
            ) : (
              <form className={styles.newsletterForm} onSubmit={e => { e.preventDefault(); setSubscribed(true); }}>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className={styles.newsletterInput} />
                <button type="submit" className={styles.newsletterBtn}>Subscribe <Send size={14} /></button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className={styles.donateCta}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2>Fund dignity in {state.name}</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 1.5rem' }}>
              Every donation sponsors starter packs, satellite training, and campus workshops.
            </p>
            <Link href="/contact" className={styles.primaryBtn}>Donate or partner <Heart size={16} /></Link>
          </motion.div>
        </div>
      </section>

      <StickyActions />
    </div>
  );
}
