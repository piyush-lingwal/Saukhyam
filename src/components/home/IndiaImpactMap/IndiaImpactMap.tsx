'use client';

import { useState, useRef, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Users, School, Home, Briefcase, Recycle, TreePine, Droplets,
  Wind, Heart, ArrowRight, MapPin, Sparkles, HandHeart, X, Quote,
  ArrowUpRight, MousePointerClick, Hand,
} from 'lucide-react';
import { INDIA_VIEWBOX, INDIA_LOCATIONS } from '@/data/states/indiaMapGeometry';
import {
  stateImpacts, impactBySvgId, nationalTotals,
  HEAT_COLORS, HEAT_LABELS, type StateImpact, type HeatTier,
} from '@/data/states/impactMapData';
import { IMPACT_MAP_HUB, HOME_MAP_ANCHOR, impactNav } from '@/data/states/impactNav';
import s from './indiaImpactMap.module.css';

/* ─── helpers ─── */
function formatCompact(n: number): string {
  if (n >= 1_00_00_000) return `${(n / 1_00_00_000).toFixed(n % 1_00_00_000 === 0 ? 0 : 1)} Cr`;
  if (n >= 1_00_000)    return `${(n / 1_00_000).toFixed(n % 1_00_000 === 0 ? 0 : 1)} L`;
  if (n >= 1_000)       return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/* ─── animated counter (re-runs whenever `value` changes) ─── */
function AnimatedNumber({ value, format }: { value: number; format?: (n: number) => string }) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(0);
  useEffect(() => {
    if (prefersReducedMotion()) { setDisplay(value); return; }
    const from = fromRef.current;
    const t0 = performance.now();
    const dur = 900;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{format ? format(display) : display.toLocaleString('en-IN')}</>;
}

/* ─── scorecard tile ─── */
function ScoreTile({
  icon: Icon, value, label, format, accent, display,
}: {
  icon: React.ElementType; value?: number; label: string;
  format?: (n: number) => string; accent: string; display?: string;
}) {
  return (
    <div className={s.scoreTile}>
      <div className={s.scoreIcon} style={{ background: `${accent}18`, color: accent }}>
        <Icon size={16} aria-hidden />
      </div>
      <div className={s.scoreText}>
        <span className={`${s.scoreValue} ${display ? s.scoreValueText : ''}`}>
          {display ?? <AnimatedNumber value={value ?? 0} format={format} />}
        </span>
        <span className={s.scoreLabel}>{label}</span>
      </div>
    </div>
  );
}

function hoverSummary(impact: StateImpact): string {
  if (impact.scoreDisplays?.womenReached) {
    const parts = [impact.scoreDisplays.womenReached];
    if (impact.scoreDisplays.villages) parts.push(impact.scoreDisplays.villages);
    return parts.join(' · ');
  }
  return `${formatCompact(impact.womenReached)}+ women reached`;
}

/* ─── environmental metric row ─── */
function EcoMetric({
  icon: Icon, value, unit, label, format,
}: {
  icon: React.ElementType; value: number; unit: string; label: string;
  format?: (n: number) => string;
}) {
  return (
    <div className={s.ecoMetric}>
      <Icon size={15} className={s.ecoIcon} aria-hidden />
      <div className={s.ecoText}>
        <span className={s.ecoValue}>
          <AnimatedNumber value={value} format={format} />
          <span className={s.ecoUnit}>{unit}</span>
        </span>
        <span className={s.ecoLabel}>{label}</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN
════════════════════════════════════════════════════════════ */
export default function IndiaImpactMap(props: {
  embedded?: boolean;
  sectionId?: string;
} = {}) {
  return (
    <Suspense fallback={null}>
      <IndiaImpactMapInner {...props} />
    </Suspense>
  );
}

function IndiaImpactMapInner({
  embedded = false,
  sectionId = embedded ? 'impact-map' : 'india-impact-map',
}: {
  embedded?: boolean;
  sectionId?: string;
} = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<StateImpact | null>(null);
  const [hovered,  setHovered]  = useState<{ impact: StateImpact; x: number; y: number } | null>(null);
  const mapWrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const clickTimer = useRef<number | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => () => {
    if (clickTimer.current) window.clearTimeout(clickTimer.current);
  }, []);

  /* Restore selection from ?state=slug on REACH page */
  useEffect(() => {
    if (!embedded) return;
    const slug = searchParams.get('state');
    if (!slug) return;
    const impact = stateImpacts.find(s => s.slug === slug);
    if (impact) setSelected(impact);
  }, [embedded, searchParams]);

  const selectState = useCallback((impact: StateImpact) => {
    setSelected(impact);
    setHovered(null);
    if (embedded) {
      router.replace(`/programs/reach?state=${impact.slug}#impact-map`, { scroll: false });
    }
    impact.statePageHref && router.prefetch(impact.statePageHref);
  }, [embedded, router]);

  const navigateToState = useCallback((impact: StateImpact) => {
    if (!impact.statePageHref) return;
    router.push(impact.statePageHref);
  }, [router]);

  const handleStateClick = useCallback((impact: StateImpact) => {
    if (clickTimer.current) window.clearTimeout(clickTimer.current);
    clickTimer.current = window.setTimeout(() => {
      selectState(impact);
      clickTimer.current = null;
    }, 230);
  }, [selectState]);

  const handleStateDoubleClick = useCallback((impact: StateImpact) => {
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    navigateToState(impact);
  }, [navigateToState]);

  const handleMove = useCallback((e: React.MouseEvent, impact: StateImpact) => {
    const rect = mapWrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHovered({ impact, x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  /* lock body scroll when mobile sheet open is unnecessary; panel is inline */

  const active = selected;

  return (
    <section className={s.section} id={sectionId} ref={sectionRef}>
      <div className={s.blobA} aria-hidden />
      <div className={s.blobB} aria-hidden />

      <div className="container">
        {/* ── Header ── */}
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.badge}><MapPin size={14} aria-hidden /> {impactNav.homeBadge}</span>
          <h2 className={s.title}>
            One Movement, <span className={s.titleAccent}>Many States</span>
          </h2>
          <p className={s.subtitle}>
            {embedded
              ? <>Click a state to preview impact in the panel. Double-click to open the full state page.</>
              : 'Click a state for a quick snapshot here, or open the full map on the REACH program page.'}
          </p>
          {embedded && (
            <p className={s.mapHints}>
              <span className={s.mapHint}><MousePointerClick size={13} aria-hidden /> Click to preview</span>
              <span className={s.mapHint}><Hand size={13} aria-hidden /> Double-click for state page</span>
            </p>
          )}
          {!embedded && (
          <div className={s.headerActions}>
            <Link href={IMPACT_MAP_HUB} className={s.headerBtnPrimary}>
              {impactNav.exploreAll} <ArrowUpRight size={15} aria-hidden />
            </Link>
            <Link href={HOME_MAP_ANCHOR} className={s.headerBtnGhost}>
              You are here · Homepage preview
            </Link>
          </div>
          )}
        </motion.div>

        {/* ── Map + Dashboard ── */}
        <div className={s.layout}>

          {/* ─── LEFT: MAP ─── */}
          <motion.div
            className={s.mapCol}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={s.mapWrap} ref={mapWrapRef}>
              <svg
                viewBox={INDIA_VIEWBOX}
                className={s.mapSvg}
                role="img"
                aria-label="Map of India showing Saukhyam's state-wise impact"
              >
                {INDIA_LOCATIONS.map(loc => {
                  const impact = impactBySvgId[loc.id];
                  const isProgram = !!impact;
                  const isSelected = selected?.svgId === loc.id;
                  const isHovered = hovered?.impact.svgId === loc.id;
                  const fill = isProgram ? HEAT_COLORS[impact.heat] : undefined;
                  return (
                    <path
                      key={loc.id}
                      d={loc.path}
                      className={[
                        s.statePath,
                        isProgram ? s.stateProgram : s.stateInactive,
                        isSelected ? s.stateSelected : '',
                        isHovered ? s.stateHovered : '',
                      ].join(' ')}
                      style={fill ? { fill } : undefined}
                      onClick={isProgram ? () => handleStateClick(impact) : undefined}
                      onDoubleClick={isProgram && impact.statePageHref
                        ? () => handleStateDoubleClick(impact)
                        : undefined}
                      onMouseMove={isProgram ? (e) => handleMove(e, impact) : undefined}
                      onMouseLeave={isProgram ? () => setHovered(null) : undefined}
                      role={isProgram ? 'button' : undefined}
                      tabIndex={isProgram ? 0 : undefined}
                      aria-label={isProgram ? `${impact.name}: ${hoverSummary(impact)}` : undefined}
                      onKeyDown={isProgram ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectState(impact); }
                      } : undefined}
                    />
                  );
                })}
              </svg>

              {/* hover tooltip */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    className={s.tooltip}
                    style={{ left: hovered.x, top: hovered.y }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.14 }}
                  >
                    <strong>{hovered.impact.name}</strong>
                    <span>{hoverSummary(hovered.impact)}</span>
                    <em style={{ color: HEAT_COLORS[hovered.impact.heat] }}>
                      ● {HEAT_LABELS[hovered.impact.heat]}
                    </em>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* legend */}
            <div className={s.legend}>
              {(['high', 'medium', 'emerging'] as HeatTier[]).map(tier => (
                <span key={tier} className={s.legendItem}>
                  <span className={s.legendDot} style={{ background: HEAT_COLORS[tier] }} />
                  {HEAT_LABELS[tier]}
                </span>
              ))}
              <span className={s.legendItem}>
                <span className={`${s.legendDot} ${s.legendDotInactive}`} />
                Expanding soon
              </span>
            </div>

            {/* state chips (quick select) */}
            <div className={s.chips}>
              {stateImpacts.map(st => (
                <button
                  key={st.slug}
                  type="button"
                  className={`${s.chip} ${selected?.slug === st.slug ? s.chipActive : ''}`}
                  onClick={() => selectState(st)}
                  style={selected?.slug === st.slug ? { borderColor: HEAT_COLORS[st.heat], color: HEAT_COLORS[st.heat] } : undefined}
                >
                  {st.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT: DASHBOARD ─── */}
          <motion.div
            className={s.dashCol}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.slug}
                  className={s.dash}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* dash header */}
                  <div className={s.dashHead}>
                    <div className={s.dashHeadText}>
                      <span className={s.dashState}>
                        <span className={s.dashHeatDot} style={{ background: HEAT_COLORS[active.heat] }} />
                        {HEAT_LABELS[active.heat]} · Since {active.enteredYear}
                      </span>
                      <h3 className={s.dashTitle}>{active.name}</h3>
                      <p className={s.dashTagline}>{active.tagline}</p>
                    </div>
                    <button
                      type="button"
                      className={s.dashClose}
                      onClick={() => {
                        setSelected(null);
                        if (embedded) router.replace('/programs/reach#impact-map', { scroll: false });
                      }}
                      aria-label="Back to national overview"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* scorecards */}
                  <div className={s.scoreGrid}>
                    <ScoreTile
                      icon={Users}
                      value={active.womenReached}
                      display={active.scoreDisplays?.womenReached}
                      label="Women Reached"
                      format={n => `${formatCompact(n)}+`}
                      accent="#16a34a"
                    />
                    <ScoreTile
                      icon={School}
                      value={active.schools}
                      display={active.scoreDisplays?.schools}
                      label="Schools Covered"
                      format={n => `${n}+`}
                      accent="#2563eb"
                    />
                    <ScoreTile
                      icon={Home}
                      value={active.villages}
                      display={active.scoreDisplays?.villages}
                      label="Villages Impacted"
                      format={n => `${n}+`}
                      accent="#0d9488"
                    />
                    <ScoreTile
                      icon={Briefcase}
                      value={active.livelihoods}
                      display={active.scoreDisplays?.livelihoods}
                      label="Livelihoods"
                      format={n => `${n}+`}
                      accent="#d97706"
                    />
                  </div>

                  {/* environmental impact */}
                  {!active.hideEnvironmental && (
                  <div className={s.ecoBlock}>
                    <div className={s.ecoHead}>
                      <Recycle size={14} aria-hidden />
                      Environmental Impact
                    </div>
                    <div className={s.ecoGrid}>
                      <EcoMetric icon={Recycle}  value={active.padsPrevented} unit="" label="Disposable pads prevented" format={formatCompact} />
                      <EcoMetric icon={Wind}     value={active.co2Tonnes}     unit="t" label="CO₂e prevented / yr" format={n => n.toLocaleString('en-IN')} />
                      <EcoMetric icon={TreePine} value={active.treesSaved}    unit="" label="Trees equivalent saved" format={n => n.toLocaleString('en-IN')} />
                      <EcoMetric icon={Droplets} value={active.waterLitres}   unit="L" label="Water conserved" format={formatCompact} />
                    </div>
                  </div>
                  )}

                  {/* transformation story */}
                  <div className={s.storyBlock}>
                    <div className={s.storyCols}>
                      <div className={s.storyBefore}>
                        <span className={s.storyTag}>Before Saukhyam</span>
                        <ul>
                          {active.story.before.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                      <div className={s.storyArrow} aria-hidden><ArrowRight size={18} /></div>
                      <div className={s.storyAfter}>
                        <span className={`${s.storyTag} ${s.storyTagAfter}`}>After Saukhyam</span>
                        <ul>
                          {active.story.after.map((a, i) => <li key={i}>{a}</li>)}
                        </ul>
                      </div>
                    </div>
                    <blockquote className={s.quote}>
                      <Quote size={16} className={s.quoteIcon} aria-hidden />
                      <p>{active.story.quote}</p>
                      <footer>
                        <strong>{active.story.author}</strong> · {active.story.authorRole}
                      </footer>
                    </blockquote>
                  </div>

                  {/* SDG alignment */}
                  <div className={s.sdgBlock}>
                    <div className={s.sdgHead}>UN Sustainable Development Goals</div>
                    <div className={s.sdgRow}>
                      {active.sdgs.map(g => (
                        <span key={g.code} className={s.sdgBadge} title={g.label}>
                          <strong>SDG {g.code}</strong>
                          <span>{g.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CSR */}
                  <div className={s.csrCard}>
                    <div className={s.csrTop}>
                      <span className={s.csrBadge}><HandHeart size={13} aria-hidden /> Adopt {active.name}</span>
                      {active.csr.fundingGoal > 0 && (
                        <span className={s.csrGoal}>Goal ₹{formatCompact(active.csr.fundingGoal)}</span>
                      )}
                    </div>
                    <p className={s.csrNeed}>{active.csr.need}</p>
                    <p className={s.csrSupports}>{active.csr.supports}</p>
                    <Link href="/contact" className={s.csrBtn}>
                      Partner / Donate <ArrowRight size={14} aria-hidden />
                    </Link>
                    {active.statePageHref && (
                      <button
                        type="button"
                        className={s.statePageLink}
                        onClick={() => navigateToState(active)}
                      >
                        {impactNav.viewStateDetails(active.name)} <ArrowUpRight size={14} aria-hidden />
                      </button>
                    )}
                  </div>
                </motion.div>
              ) : (
                /* ── National overview (default) ── */
                <motion.div
                  key="national"
                  className={s.dash}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={s.dashHead}>
                    <div className={s.dashHeadText}>
                      <span className={s.dashState}>
                        <Sparkles size={13} aria-hidden /> National Overview
                      </span>
                      <h3 className={s.dashTitle}>Across {stateImpacts.length} States</h3>
                      <p className={s.dashTagline}>Healing periods and the planet, one community at a time.</p>
                    </div>
                  </div>

                  <div className={s.scoreGrid}>
                    <ScoreTile icon={Users}     value={nationalTotals.womenReached} label="Women Reached"   format={n => `${formatCompact(n)}+`} accent="#16a34a" />
                    <ScoreTile icon={School}    value={nationalTotals.schools}      label="Schools Covered" format={n => `${n}+`} accent="#2563eb" />
                    <ScoreTile icon={Home}      value={nationalTotals.villages}     label="Villages"        format={n => `${n}+`} accent="#0d9488" />
                    <ScoreTile icon={Briefcase} value={nationalTotals.livelihoods}  label="Livelihoods"     format={n => `${n}+`} accent="#d97706" />
                  </div>

                  <div className={s.ecoBlock}>
                    <div className={s.ecoHead}><Recycle size={14} aria-hidden /> Combined Environmental Impact</div>
                    <div className={s.ecoGrid}>
                      <EcoMetric icon={Recycle}  value={nationalTotals.padsPrevented} unit="" label="Disposable pads prevented" format={formatCompact} />
                      <EcoMetric icon={Wind}     value={nationalTotals.co2Tonnes}     unit="t" label="CO₂e prevented / yr" format={n => n.toLocaleString('en-IN')} />
                      <EcoMetric icon={TreePine} value={nationalTotals.treesSaved}    unit="" label="Trees equivalent saved" format={n => n.toLocaleString('en-IN')} />
                      <EcoMetric icon={Droplets} value={nationalTotals.waterLitres}   unit="L" label="Water conserved" format={formatCompact} />
                    </div>
                  </div>

                  <div className={s.prompt}>
                    <Heart size={18} className={s.promptIcon} aria-hidden />
                    <p>Select a state on the map{embedded ? ' — click to preview, double-click for the full page' : ''}.</p>
                    {!embedded && (
                    <Link href={IMPACT_MAP_HUB} className={s.promptLink}>
                      {impactNav.exploreAll} <ArrowUpRight size={14} aria-hidden />
                    </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
