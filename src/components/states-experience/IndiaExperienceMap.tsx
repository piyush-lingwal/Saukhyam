'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Users, ArrowUpRight, ArrowLeft, X, Sun, Moon,
  MousePointerClick, Hand, Sparkles,
} from 'lucide-react';
import { INDIA_VIEWBOX, INDIA_LOCATIONS } from '@/data/states/indiaMapGeometry';
import {
  experienceBySvgId, stateExperiences, EXP_THEME_COLORS,
  type StateExperience,
} from '@/data/states/experienceData';
import { HOME_MAP_ANCHOR, impactNav } from '@/data/states/impactNav';
import { useSiteTheme } from '@/context/SiteThemeContext';
import s from './indiaExperienceMap.module.css';

interface Box { x: number; y: number; w: number; h: number }
const FULL: Box = { x: 0, y: 0, w: 612, h: 696 };

function fmt(n: number): string {
  if (n >= 1_00_000) return `${(n / 1_00_000).toFixed(n % 1_00_000 === 0 ? 0 : 1)}L`;
  if (n >= 1_000)    return `${(n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}

/* deterministic particle config (avoids hydration mismatch) */
const PARTICLES = Array.from({ length: 14 }).map((_, i) => ({
  left: (i * 67) % 100,
  top: (i * 41 + 13) % 100,
  size: 4 + (i % 4) * 3,
  delay: (i % 7) * 0.8,
  dur: 9 + (i % 5) * 2,
}));

export default function IndiaExperienceMap() {
  const router = useRouter();
  const { theme, toggleTheme } = useSiteTheme();
  const [selected, setSelected] = useState<StateExperience | null>(null);
  const [hovered, setHovered] = useState<{ exp: StateExperience; x: number; y: number } | null>(null);
  const [vb, setVb] = useState<Box>(FULL);

  const vbRef = useRef<Box>(FULL);
  const rafRef = useRef<number>(0);
  const clickTimer = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const animateVb = useCallback((to: Box) => {
    cancelAnimationFrame(rafRef.current);
    const from = { ...vbRef.current };
    const t0 = performance.now();
    const dur = 650;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { vbRef.current = to; setVb(to); return; }
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const cur: Box = {
        x: from.x + (to.x - from.x) * e,
        y: from.y + (to.y - from.y) * e,
        w: from.w + (to.w - from.w) * e,
        h: from.h + (to.h - from.h) * e,
      };
      vbRef.current = cur;
      setVb(cur);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => () => { cancelAnimationFrame(rafRef.current); if (clickTimer.current) window.clearTimeout(clickTimer.current); }, []);

  const zoomTo = useCallback((exp: StateExperience, bbox: DOMRect) => {
    const pad = Math.max(bbox.width, bbox.height) * 0.55;
    animateVb({
      x: bbox.x - pad,
      y: bbox.y - pad,
      w: bbox.width + pad * 2,
      h: bbox.height + pad * 2,
    });
    setSelected(exp);
    setHovered(null);
    router.prefetch(`/states/${exp.slug}`);
  }, [animateVb, router]);

  const reset = useCallback(() => {
    animateVb(FULL);
    setSelected(null);
  }, [animateVb]);

  const handleClick = useCallback((e: React.MouseEvent<SVGPathElement>, exp: StateExperience) => {
    const bbox = (e.currentTarget as SVGPathElement).getBBox();
    if (clickTimer.current) { window.clearTimeout(clickTimer.current); clickTimer.current = null; }
    clickTimer.current = window.setTimeout(() => {
      zoomTo(exp, bbox);
      clickTimer.current = null;
    }, 230);
  }, [zoomTo]);

  const handleDouble = useCallback((exp: StateExperience) => {
    if (clickTimer.current) { window.clearTimeout(clickTimer.current); clickTimer.current = null; }
    router.push(`/states/${exp.slug}`);
  }, [router]);

  const handleMove = useCallback((e: React.MouseEvent, exp: StateExperience) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setHovered({ exp, x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section className={s.stage}>
      {/* aurora + particles */}
      <div className={s.aurora} aria-hidden />
      <div className={s.auroraB} aria-hidden />
      <div className={s.particles} aria-hidden>
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={s.particle}
            style={{
              left: `${p.left}%`, top: `${p.top}%`,
              width: p.size, height: p.size,
              animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* top bar */}
      <div className={s.topBar}>
        <div className={s.topBarLeft}>
          <Link href={HOME_MAP_ANCHOR} className={s.backBtn}>
            <ArrowLeft size={15} aria-hidden /> {impactNav.homepageMap}
          </Link>
        </div>
        <button type="button" className={s.themeBtn} onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <div className={s.inner}>
        {/* heading */}
        <motion.div
          className={s.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={s.title}>Saukhyam <span className={s.titleAccent}>Across India</span></h1>
          <p className={s.subtitle}>
            Healing periods and the planet across {stateExperiences.length} states.
            <span className={s.hint}><MousePointerClick size={13} aria-hidden /> Click to zoom</span>
            <span className={s.hint}><Hand size={13} aria-hidden /> Double-click for state page</span>
          </p>
          <nav className={s.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">{impactNav.breadcrumbHome}</Link>
            <span aria-hidden>›</span>
            <span>{impactNav.impactMapHub}</span>
          </nav>
        </motion.div>

        {/* map */}
        <div className={s.mapWrap} ref={wrapRef}>
          <svg viewBox={`${vb.x} ${vb.y} ${vb.w} ${vb.h}`} className={s.svg} role="img" aria-label="Interactive map of India">
            <defs>
              <filter id="exp-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="3.2" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {INDIA_LOCATIONS.map(loc => {
              const exp = experienceBySvgId[loc.id];
              const isActive = !!exp;
              const isSel = selected?.svgId === loc.id;
              const isHov = hovered?.exp.svgId === loc.id;
              const tc = exp ? EXP_THEME_COLORS[exp.theme] : null;
              return (
                <path
                  key={loc.id}
                  d={loc.path}
                  className={[
                    s.path,
                    isActive ? s.active : s.inactive,
                    isSel ? s.selected : '',
                    isHov ? s.hovered : '',
                  ].join(' ')}
                  style={tc ? ({ fill: isSel || isHov ? tc.base : tc.deep, ['--glow' as string]: tc.glow }) : undefined}
                  filter={isSel ? 'url(#exp-glow)' : undefined}
                  onClick={isActive ? (e) => handleClick(e, exp) : undefined}
                  onDoubleClick={isActive ? () => handleDouble(exp) : undefined}
                  onMouseMove={isActive ? (e) => handleMove(e, exp) : undefined}
                  onMouseLeave={isActive ? () => setHovered(null) : undefined}
                  role={isActive ? 'button' : undefined}
                  tabIndex={isActive ? 0 : undefined}
                  aria-label={isActive ? `${exp.name}: open impact page` : undefined}
                  onKeyDown={isActive ? (e) => { if (e.key === 'Enter') router.push(`/states/${exp.slug}`); } : undefined}
                />
              );
            })}
          </svg>

          {/* hover label */}
          <AnimatePresence>
            {hovered && !selected && (
              <motion.div
                className={s.hoverLabel}
                style={{ left: hovered.x, top: hovered.y }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.14 }}
              >
                {hovered.exp.name}
              </motion.div>
            )}
          </AnimatePresence>

          {/* reset button */}
          <AnimatePresence>
            {selected && (
              <motion.button
                type="button"
                className={s.resetBtn}
                onClick={reset}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <X size={14} /> Reset map
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* quick-stats glass popup */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.slug}
              className={s.popup}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ ['--accent' as string]: EXP_THEME_COLORS[selected.theme].base }}
            >
              <div className={s.popupTop}>
                <div>
                  <span className={s.popupSince}><Sparkles size={12} aria-hidden /> Since {selected.enteredYear}</span>
                  <h3 className={s.popupName}>{selected.name}</h3>
                </div>
                <span className={s.popupDot} />
              </div>
              <div className={s.popupStats}>
                {(selected.mapQuickStats ?? [
                  { label: 'Women', value: `${fmt(selected.stats[0]?.value ?? 0)}+` },
                  { label: 'Pads', value: `${fmt(selected.environment?.padsDistributed ?? 0)}+` },
                  { label: 'Villages', value: `${fmt(selected.stats[2]?.value ?? 0)}+` },
                ]).map((item) => (
                  <div key={item.label} className={s.popupStat}>
                    <Users size={15} aria-hidden />
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <Link href={`/states/${selected.slug}`} className={s.popupBtn}>
                Explore {selected.shortName} <ArrowUpRight size={15} aria-hidden />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* quick chips */}
        <div className={s.chips}>
          {stateExperiences.map(st => (
            <Link key={st.slug} href={`/states/${st.slug}`} className={s.chip}>
              {st.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
