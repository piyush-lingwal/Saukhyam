'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Heart, Leaf, Activity, Briefcase,
  Users, School, Home, Recycle, CalendarCheck, Trash2, MapPin, Quote,
  ChevronLeft, ChevronRight, TreePine, Wind, Droplets, HandHeart,
  Phone, Mail, Sun, Moon, Sparkles, Target, Building2, HeartHandshake,
  Microscope, Hospital, ExternalLink, Handshake,
} from 'lucide-react';
import {
  SAUKHYAM_CONTACT, EXP_THEME_COLORS,
  type StateExperience, type GalleryCategory, type HealCard, type StateInitiative,
} from '@/data/states/experienceData';
import { HOME_MAP_ANCHOR, IMPACT_MAP_HUB, impactNav } from '@/data/states/impactNav';
import { useSiteTheme } from '@/context/SiteThemeContext';
import s from './stateExperience.module.css';
import StateDistrictMap from './StateDistrictMap';

/* ─── helpers ─── */
function fmt(n: number): string {
  if (n >= 1_00_00_000) return `${(n / 1_00_00_000).toFixed(1)} Cr`;
  if (n >= 1_00_000)    return `${(n / 1_00_000).toFixed(n % 1_00_000 === 0 ? 0 : 1)} L`;
  if (n >= 1_000)       return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}
const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const HEAL_ICONS: Record<HealCard['key'], React.ElementType> = {
  health: Heart, environment: Leaf, active: Activity, livelihoods: Briefcase,
};
const STAT_ICONS: Record<string, React.ElementType> = {
  women: Users, schools: School, villages: Home, pads: Recycle, workshops: CalendarCheck, waste: Trash2,
  partnerships: Handshake, districts: MapPin, mou: Target, eco: Leaf,
};
const INITIATIVE_ICONS: Record<string, React.ElementType> = {
  upsrlm: Building2,
  akanksha: HeartHandshake,
  rmlims: Microscope,
  'aiims-gorakhpur': Hospital,
};

/* ─── animated counter ─── */
function Counter({ value, format }: { value: number; format?: (n: number) => string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  useEffect(() => {
    if (!inView) return;
    if (reduced()) { setV(value); return; }
    const t0 = performance.now(), dur = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setV(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{format ? format(v) : v.toLocaleString('en-IN')}</span>;
}

/* ─── progress ring ─── */
function Ring({ pct, color, children }: { pct: number; color: string; children: React.ReactNode }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const R = 52, C = 2 * Math.PI * R;
  const [offset, setOffset] = useState(C);
  useEffect(() => {
    if (!inView) return;
    if (reduced()) { setOffset(C - (pct / 100) * C); return; }
    const t0 = performance.now(), dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setOffset(C - (e * pct / 100) * C);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, pct, C]);
  return (
    <div className={s.ringWrap}>
      <svg ref={ref} viewBox="0 0 120 120" className={s.ring}>
        <circle cx="60" cy="60" r={R} className={s.ringTrack} />
        <circle
          cx="60" cy="60" r={R}
          className={s.ringFill}
          stroke={color}
          strokeDasharray={C}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className={s.ringCenter}>{children}</div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN TEMPLATE
════════════════════════════════════════════════════════════ */
export default function StateExperiencePage({ data }: { data: StateExperience }) {
  const { theme, toggleTheme } = useSiteTheme();
  const accent = EXP_THEME_COLORS[data.theme];

  const [bIndex, setBIndex] = useState(0);
  const [galleryCat, setGalleryCat] = useState<'all' | GalleryCategory>('all');

  const galleryCats = useMemo<('all' | GalleryCategory)[]>(
    () => ['all', 'workshops', 'schools', 'communities', 'volunteers', 'awareness'],
    [],
  );
  const filteredGallery = useMemo(
    () => (galleryCat === 'all' ? data.gallery : data.gallery.filter(g => g.category === galleryCat)),
    [galleryCat, data.gallery],
  );

  const ben = data.beneficiaries;
  const BEN_PER_PAGE = 2;
  const benPages = Math.max(1, Math.ceil(ben.length / BEN_PER_PAGE));
  const visibleBen = ben.slice(bIndex * BEN_PER_PAGE, bIndex * BEN_PER_PAGE + BEN_PER_PAGE);
  const nextBen = () => setBIndex(i => (i + 1) % benPages);
  const prevBen = () => setBIndex(i => (i - 1 + benPages) % benPages);

  const cssVars = {
    ['--accent' as string]: accent.base,
    ['--accent-deep' as string]: accent.deep,
    ['--accent-glow' as string]: accent.glow,
  };

  const fade = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className={s.page} style={cssVars}>
      {/* floating top bar */}
      <div className={s.topBar}>
        <div className={s.topBarLeft}>
          <Link href={HOME_MAP_ANCHOR} className={s.backBtn}>
            <ArrowLeft size={15} aria-hidden /> {impactNav.homepageMap}
          </Link>
          <Link href={IMPACT_MAP_HUB} className={s.backBtn}>
            {impactNav.impactMapHub}
          </Link>
        </div>
        <button type="button" className={s.themeBtn} onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      {/* ══ HERO ══ */}
      <section className={s.hero}>
        <div className={s.heroImg} style={{ backgroundImage: `url(${data.hero.image})` }} aria-hidden />
        <div className={s.heroOverlay} aria-hidden />
        <div className={s.heroShapeA} aria-hidden />
        <div className={s.heroShapeB} aria-hidden />
        <nav className={s.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">{impactNav.breadcrumbHome}</Link>
          <span aria-hidden>›</span>
          <Link href={IMPACT_MAP_HUB}>{impactNav.impactMapHub}</Link>
          <span aria-hidden>›</span>
          <span>{data.name}</span>
        </nav>
        <div className={`container ${s.heroInner}`}>
          <motion.span className={s.heroBadge} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <MapPin size={13} aria-hidden /> {data.heroBadge ?? `Saukhyam · Since ${data.enteredYear}`}
          </motion.span>
          <motion.h1 className={s.heroTitle} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}>
            {data.hero.title}
          </motion.h1>
          <motion.p className={s.heroSubtitle} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
            {data.hero.subtitle}
          </motion.p>
          <motion.div className={s.heroCtas} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }}>
            <a href="#impact" className={s.btnPrimary}>Explore Impact <ArrowRight size={15} aria-hidden /></a>
            <a href="#volunteer" className={s.btnGhost}>Join The Movement</a>
          </motion.div>
        </div>
      </section>

      {/* ══ IMPACT DASHBOARD ══ */}
      {data.stats.length > 0 && (
      <section id="impact" className={s.section}>
        <div className="container">
          <SectionHead
            eyebrow="Programme Facts"
            title={data.sourceBlogSlug ? 'Verified milestones' : 'Measurable change on the ground'}
            sub={data.sourceBlogSlug
              ? `Published facts from Saukhyam's work in ${data.name}.`
              : `Saukhyam's footprint across ${data.name}.`}
          />
          <div className={s.statGrid}>
            {data.stats.map((st, i) => {
              const Icon = STAT_ICONS[st.key] ?? Sparkles;
              return (
                <motion.div key={st.key} className={s.statCard} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <div className={s.statIcon}><Icon size={20} aria-hidden /></div>
                  <div className={`${s.statValue} ${st.display ? s.statValueText : ''}`}>
                    {st.display ?? (
                      <>{st.prefix}<Counter value={st.value ?? 0} format={st.key === 'waste' ? undefined : (n) => n.toLocaleString('en-IN')} />{st.suffix}</>
                    )}
                  </div>
                  <div className={s.statLabel}>{st.label}</div>
                </motion.div>
              );
            })}
          </div>
          {data.sourceBlogSlug && (
            <p className={s.sourceNote}>
              Source:{' '}
              <Link href={`/blog/${data.sourceBlogSlug}`}>Read the full story on our blog</Link>
            </p>
          )}
        </div>
      </section>
      )}

      {/* ══ ABOUT — Challenge → Action → Impact ══ */}
      <section className={s.sectionAlt}>
        <div className="container">
          <SectionHead eyebrow="Our Story" title="From challenge to change" sub={data.about.intro} />
          <div className={s.storyGrid}>
            {([
              { tag: 'Challenge', body: data.about.challenge, num: '01' },
              { tag: 'Action', body: data.about.action, num: '02' },
              { tag: 'Impact', body: data.about.impact, num: '03' },
            ]).map((step, i) => (
              <motion.div key={step.tag} className={s.storyCard} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className={s.storyNum}>{step.num}</span>
                <span className={s.storyTag}>{step.tag}</span>
                <p className={s.storyBody}>{step.body}</p>
                {i < 2 && <span className={s.storyConnector} aria-hidden><ArrowRight size={18} /></span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INITIATIVES / ACTIVITIES ══ */}
      {data.initiatives && data.initiatives.length > 0 && (
      <section id="activities" className={s.sectionAlt}>
        <div className="container">
          <SectionHead
            eyebrow="Our Initiatives"
            title="Working hand in hand across Uttar Pradesh"
            sub="Four pillars of work — government, civil society, hospitals and academia — all rooted in one purpose: dignified, healthy, sustainable periods for every woman."
          />
          <div className={s.initGrid}>
            {data.initiatives.map((init, i) => {
              const Icon = INITIATIVE_ICONS[init.id] ?? Sparkles;
              return (
                <InitiativeCard key={init.id} init={init} icon={Icon} index={i} />
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* ══ HEAL FRAMEWORK ══ */}
      <section className={s.section}>
        <div className="container">
          <SectionHead eyebrow="The HEAL Framework" title="One model, four kinds of healing" sub="Every Saukhyam programme is built on four interlocking pillars." />
          <div className={s.healGrid}>
            {data.heal.map((card, i) => {
              const Icon = HEAL_ICONS[card.key];
              return (
                <motion.div key={card.key} className={s.healCard} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className={s.healGlow} aria-hidden />
                  <div className={s.healIcon}><Icon size={22} aria-hidden /></div>
                  <h3 className={s.healTitle}>{card.title}</h3>
                  <p className={s.healDesc}>{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ DISTRICT IMPACT MAP ══ */}
      {data.districts.length > 0 && (
      <section className={s.sectionAlt}>
        <div className="container">
          <SectionHead eyebrow="District Impact" title={`Where we work in ${data.shortName}`} sub="Hover or tap a district for programme details." />
          <StateDistrictMap svgId={data.svgId} stateName={data.name} districts={data.districts} />
        </div>
      </section>
      )}

      {/* ══ BENEFICIARY STORIES ══ */}
      {ben.length > 0 && (
      <section className={s.section}>
        <div className="container">
          <SectionHead eyebrow="Voices" title="Real stories, real change" sub={`Documented voices from ${data.name}.`} />
          <div className={s.benSlider}>
            {benPages > 1 && (
              <button type="button" className={s.benNav} onClick={prevBen} aria-label="Previous stories"><ChevronLeft size={20} /></button>
            )}
            <div className={s.benViewport}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={bIndex}
                  className={s.benRow}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >
                  {visibleBen.map(story => (
                    <article
                      key={`${story.name}-${story.district}`}
                      className={`${s.benCard} ${!story.photo ? s.benCardQuoteOnly : ''}`}
                    >
                      {story.photo && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={story.photo} alt={story.name} className={s.benPhoto} loading="lazy" />
                      )}
                      <div className={s.benBody}>
                        <Quote size={26} className={s.benQuoteIcon} aria-hidden />
                        <p className={s.benQuote}>{story.quote}</p>
                        <div className={s.benMeta}>
                          <strong>{story.name}</strong>
                          <span><MapPin size={11} aria-hidden /> {story.district}</span>
                          {story.source && <span className={s.benSource}>{story.source}</span>}
                        </div>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            {benPages > 1 && (
              <button type="button" className={s.benNav} onClick={nextBen} aria-label="Next stories"><ChevronRight size={20} /></button>
            )}
          </div>
          {benPages > 1 && (
            <div className={s.benDots}>
              {Array.from({ length: benPages }).map((_, i) => (
                <button key={i} type="button" className={`${s.benDot} ${i === bIndex ? s.benDotActive : ''}`} onClick={() => setBIndex(i)} aria-label={`Stories page ${i + 1}`} />
              ))}
            </div>
          )}
        </div>
      </section>
      )}

      {/* ══ ENVIRONMENTAL IMPACT ══ */}
      {data.environment && (
      <section className={s.sectionDark}>
        <div className={s.darkBlobA} aria-hidden />
        <div className={s.darkBlobB} aria-hidden />
        <div className="container">
          <SectionHead eyebrow="Environmental Impact" title="Healing the planet too" sub="Every reusable pad keeps disposables out of landfills and drains." dark />
          <div className={s.ecoGrid}>
            <div className={s.ecoRing}>
              <Ring pct={92} color={accent.base}>
                <span className={s.ecoRingVal}><Counter value={data.environment.padsDistributed} format={fmt} /></span>
                <span className={s.ecoRingLabel}>Pads Distributed</span>
              </Ring>
            </div>
            <div className={s.ecoRing}>
              <Ring pct={78} color="#38bdf8">
                <span className={s.ecoRingVal}><Counter value={data.environment.plasticKg} format={fmt} /></span>
                <span className={s.ecoRingLabel}>kg Plastic Prevented</span>
              </Ring>
            </div>
            <div className={s.ecoRing}>
              <Ring pct={64} color="#a3e635">
                <span className={s.ecoRingVal}><Counter value={data.environment.carbonTonnes} /></span>
                <span className={s.ecoRingLabel}>Tonnes CO₂ Reduced</span>
              </Ring>
            </div>
            <div className={s.ecoRing}>
              <Ring pct={71} color="#4ade80">
                <span className={s.ecoRingVal}><Counter value={data.environment.treesSaved} /></span>
                <span className={s.ecoRingLabel}>Trees Saved Equiv.</span>
              </Ring>
            </div>
          </div>
          <div className={s.ecoBadges}>
            <span className={s.ecoBadge}><Recycle size={14} aria-hidden /> Reusable</span>
            <span className={s.ecoBadge}><Wind size={14} aria-hidden /> Low Carbon</span>
            <span className={s.ecoBadge}><Droplets size={14} aria-hidden /> Water Smart</span>
            <span className={s.ecoBadge}><TreePine size={14} aria-hidden /> Biodegradable</span>
          </div>
        </div>
      </section>
      )}

      {/* ══ TIMELINE ══ */}
      {data.timeline.length > 0 && (
      <section className={s.section}>
        <div className="container">
          <SectionHead eyebrow="Our Journey" title={`The Saukhyam timeline in ${data.shortName}`} sub="How the movement grew, year by year." />
          <div className={s.timeline}>
            <span className={s.timelineLine} aria-hidden />
            {data.timeline.map((t, i) => (
              <motion.div
                key={i}
                className={`${s.timelineItem} ${i % 2 === 0 ? s.timelineLeft : s.timelineRight}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
              >
                <span className={s.timelineDot} aria-hidden />
                <div className={s.timelineCard}>
                  <span className={s.timelinePhase}>{t.phase}</span>
                  <h4 className={s.timelineTitle}>{t.title}</h4>
                  <p className={s.timelineDesc}>{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ══ GALLERY (masonry) ══ */}
      {data.gallery.length > 0 && (
      <section className={s.sectionAlt}>
        <div className="container">
          <SectionHead eyebrow="Gallery" title="Moments from the field" sub="Filter by programme type." />
          <div className={s.galleryFilters}>
            {galleryCats.map(cat => (
              <button
                key={cat}
                type="button"
                className={`${s.galleryFilter} ${galleryCat === cat ? s.galleryFilterActive : ''}`}
                onClick={() => setGalleryCat(cat)}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <motion.div layout className={s.masonry}>
            <AnimatePresence>
              {filteredGallery.map((g) => (
                <motion.figure
                  key={g.id}
                  layout
                  className={s.masonryItem}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <figcaption className={s.masonryCap}>{g.category}</figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      )}

      {/* ══ CSR / PARTNERSHIP ══ */}
      {data.csr.length > 0 && (
      <section className={s.section}>
        <div className="container">
          <SectionHead
            eyebrow="Partnership"
            title={data.csr.some(c => c.narrative) ? 'Scaling together' : 'Adopt a District'}
            sub={data.csr.some(c => c.narrative)
              ? 'Official partnerships driving impact across the state.'
              : 'Directly fund menstrual health and livelihoods where it\'s needed most.'}
          />
          <div className={s.csrGrid}>
            {data.csr.map((c, i) => {
              if (c.narrative) {
                return (
                  <motion.div key={c.name} className={s.csrCard} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <span className={s.csrName}><Target size={14} aria-hidden /> {c.name}</span>
                    <p className={s.csrNarrative}>{c.narrative}</p>
                    <Link href="/contact" className={s.csrBtn}>Partner with us <ArrowUpRight size={14} aria-hidden /></Link>
                  </motion.div>
                );
              }
              const pct = c.fundingGoal && c.raised
                ? Math.min(100, Math.round((c.raised / c.fundingGoal) * 100))
                : 0;
              return (
                <motion.div key={c.name} className={s.csrCard} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className={s.csrTop}>
                    <span className={s.csrName}><Target size={14} aria-hidden /> {c.name}</span>
                    <span className={s.csrPct}>{pct}%</span>
                  </div>
                  <div className={s.csrBar}><span className={s.csrBarFill} style={{ width: `${pct}%` }} /></div>
                  <div className={s.csrMeta}>
                    <div><strong>{c.targetBeneficiaries?.toLocaleString('en-IN')}</strong><span>Target beneficiaries</span></div>
                    <div><strong>₹{fmt(c.fundingGoal ?? 0)}</strong><span>Funding goal</span></div>
                  </div>
                  <Link href="/contact" className={s.csrBtn}>Sponsor {c.name} <ArrowUpRight size={14} aria-hidden /></Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      )}

      {/* ══ INSPIRATION (Amma) ══ */}
      {data.inspiration && (
      <section className={s.inspiration}>
        <div className={s.inspBlob} aria-hidden />
        <div className="container">
          <motion.div
            className={s.inspInner}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className={s.inspEyebrow}>Our Inspiration</span>
            <h2 className={s.inspTitle}>{data.inspiration.title}</h2>
            <p className={s.inspBody}>{data.inspiration.body}</p>
            <a
              href={data.inspiration.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.inspLink}
            >
              {data.inspiration.linkLabel} <ExternalLink size={14} aria-hidden />
            </a>
          </motion.div>
        </div>
      </section>
      )}

      {/* ══ VOLUNTEER ══ */}
      <section id="volunteer" className={s.volunteer}>
        <div className={s.volBlob} aria-hidden />
        <div className="container">
          <motion.div className={s.volInner} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <span className={s.volBadge}><HandHeart size={14} aria-hidden /> Get Involved</span>
            <h2 className={s.volTitle}>Become a Change Maker</h2>
            <p className={s.volText}>
              {data.stateContact
                ? 'Whether you\'re an institution, NGO, government department, school or individual — reach out to our Uttar Pradesh State Director to explore how we can work together.'
                : `Volunteers power every workshop, every switch and every story in ${data.name}. Lend your time, skills or voice to the movement.`}
            </p>
            <div className={s.volCtas}>
              {data.stateContact ? (
                <a href={`mailto:${data.stateContact.email}`} className={s.volBtnPrimary}>
                  Contact {data.stateContact.name} <ArrowRight size={15} aria-hidden />
                </a>
              ) : (
                <Link href="/contact" className={s.volBtnPrimary}>Join Saukhyam {data.name} <ArrowRight size={15} aria-hidden /></Link>
              )}
              <Link href="/programs/reach" className={s.volBtnGhost}>Learn about REACH</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section className={s.contact}>
        <div className="container">
          <div className={s.contactGrid}>
            <div className={s.contactInfo}>
              <SectionHead
                eyebrow="Get in Touch"
                title={data.stateContact ? 'Partner with us in Uttar Pradesh' : 'Contact Saukhyam'}
                sub={data.stateContact
                  ? 'Reach out to our Uttar Pradesh State Director to explore collaboration.'
                  : ''}
              />
              {data.stateContact && (
                <>
                  <div className={s.contactRow}>
                    <MapPin size={18} className={s.contactIcon} aria-hidden />
                    <div>
                      <strong>{data.stateContact.title}</strong>
                      <p>{data.stateContact.name} · {data.stateContact.role}</p>
                      <p>{data.stateContact.location}</p>
                    </div>
                  </div>
                  <a href={`tel:${data.stateContact.phone.replace(/\s/g, '')}`} className={s.contactRow}>
                    <Phone size={18} className={s.contactIcon} aria-hidden />
                    <div><strong>Phone</strong><p>{data.stateContact.phone}</p></div>
                  </a>
                  <a href={`mailto:${data.stateContact.email}`} className={s.contactRow}>
                    <Mail size={18} className={s.contactIcon} aria-hidden />
                    <div><strong>Email</strong><p>{data.stateContact.email}</p></div>
                  </a>
                  <div className={s.nationalNote}>
                    <strong>National headquarters</strong>
                    <p>{SAUKHYAM_CONTACT.org} · {SAUKHYAM_CONTACT.phone} · {SAUKHYAM_CONTACT.email}</p>
                  </div>
                </>
              )}
              {!data.stateContact && (
                <>
                  <div className={s.contactRow}>
                    <MapPin size={18} className={s.contactIcon} aria-hidden />
                    <div>
                      <strong>{SAUKHYAM_CONTACT.org}</strong>
                      {SAUKHYAM_CONTACT.addressLines.map((l) => <p key={l}>{l}</p>)}
                    </div>
                  </div>
                  <a href={`tel:${SAUKHYAM_CONTACT.phone.replace(/\s/g, '')}`} className={s.contactRow}>
                    <Phone size={18} className={s.contactIcon} aria-hidden />
                    <div><strong>Phone</strong><p>{SAUKHYAM_CONTACT.phone}</p></div>
                  </a>
                  <a href={`mailto:${SAUKHYAM_CONTACT.email}`} className={s.contactRow}>
                    <Mail size={18} className={s.contactIcon} aria-hidden />
                    <div><strong>Email</strong><p>{SAUKHYAM_CONTACT.email}</p></div>
                  </a>
                </>
              )}
            </div>
            <div className={s.contactCard}>
              <h3 className={s.contactCardTitle}>Partner with us in {data.name}</h3>
              <p className={s.contactCardText}>
                Whether you&rsquo;re a school, college, CSR team, NGO, government department or individual — there&rsquo;s a way for you to help us reach more women across UP.
              </p>
              <a
                href={data.stateContact ? `mailto:${data.stateContact.email}` : '/contact'}
                className={s.contactCardBtn}
              >
                Start a conversation <ArrowRight size={15} aria-hidden />
              </a>
              <a href="https://saukhyampads.org" target="_blank" rel="noopener noreferrer" className={s.contactExtLink}>
                Visit saukhyampads.org <ExternalLink size={13} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── initiative card ─── */
function InitiativeCard({
  init, icon: Icon, index,
}: {
  init: StateInitiative;
  icon: React.ElementType;
  index: number;
}) {
  return (
    <motion.article
      className={s.initCard}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={s.initTop}>
        <div className={s.initIcon}><Icon size={20} aria-hidden /></div>
        <span className={s.initCategory}>{init.category}</span>
      </div>
      <h3 className={s.initTitle}>{init.title}</h3>
      {init.badge && <span className={s.initBadge}>{init.badge}</span>}
      <p className={s.initDesc}>{init.description}</p>
      <ul className={s.initList}>
        {init.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </motion.article>
  );
}

/* ─── shared section heading ─── */
function SectionHead({ eyebrow, title, sub, dark }: { eyebrow: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <motion.div
      className={`${s.head} ${dark ? s.headDark : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className={s.eyebrow}>{eyebrow}</span>
      <h2 className={s.headTitle}>{title}</h2>
      {sub ? <p className={s.headSub}>{sub}</p> : null}
    </motion.div>
  );
}
