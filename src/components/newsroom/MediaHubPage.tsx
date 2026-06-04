'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Search, X, ArrowRight, ChevronRight, Newspaper,
  TrendingUp, Trophy, Globe, LayoutGrid, List, ExternalLink,
} from 'lucide-react';
import {
  pressMentions, pressTickerMessages, spotlightStory,
  type PressMention,
} from '@/data/newsroom/pressMediaContent';
import s from './premiumMedia.module.css';

/* ══════════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════════ */
type LangFilter = 'all' | 'en' | 'hi';
type ViewMode   = 'magazine' | 'list';

type MagazineChunk =
  | { kind: 'medium';  items: PressMention[]; startIdx: number }
  | { kind: 'compact'; items: PressMention[]; startIdx: number };

/* ══════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════ */
function getDomain(href: string) {
  try { return new URL(href).hostname.replace(/^www\./, ''); }
  catch { return 'press'; }
}
function getInitial(s: string) { return getDomain(s).charAt(0).toUpperCase(); }
function getFavicon(href: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(getDomain(href))}&sz=64`;
}
function normText(str: string) { return str.toLowerCase().replace(/\s+/g, ' ').trim(); }

const ACCENTS = ['#16a34a','#0d9488','#059669','#166534','#15803d','#0f766e','#047857','#065f46'];
function accent(href: string) {
  const h = getDomain(href).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return ACCENTS[h % ACCENTS.length];
}

function toMagazineChunks(items: PressMention[]): MagazineChunk[] {
  const chunks: MagazineChunk[] = [];
  let i = 0;
  while (i < items.length) {
    const s2 = i;
    const mid = items.slice(i, i + 2);
    if (mid.length) { chunks.push({ kind: 'medium',  items: mid, startIdx: s2 }); i += 2; }
    const s3 = i;
    const cmp = items.slice(i, i + 4);
    if (cmp.length) { chunks.push({ kind: 'compact', items: cmp, startIdx: s3 }); i += 4; }
  }
  return chunks;
}

/* ══════════════════════════════════════════════════════
   STATIC
══════════════════════════════════════════════════════ */
const LANG_TABS: { key: LangFilter; label: string }[] = [
  { key: 'all', label: 'All'     },
  { key: 'en',  label: 'English' },
  { key: 'hi',  label: 'हिंदी'   },
];
const STATS = [
  { end: 50,  suffix: '+',  label: 'Press Features', Icon: Newspaper  },
  { end: 30,  suffix: 'L+', label: 'Women Reached',  Icon: TrendingUp },
  { end: 20,  suffix: '+',  label: 'Awards Won',      Icon: Trophy     },
  { end: 27,  suffix: '',   label: 'States Covered',  Icon: Globe      },
];
const PRESS_LOGOS = [
  '1..webp','2..webp','5..webp','6..webp','7..webp','11..webp',
  '12..webp','13..webp','17..webp','19..webp','23..webp','25..webp',
  '26..webp','27..webp','30..webp','32..webp','35..webp','36..webp',
];

/* ══════════════════════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════════════════════ */
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now(), dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ══════════════════════════════════════════════════════
   SKELETON
══════════════════════════════════════════════════════ */
function Skeleton() {
  return (
    <div className={s.skeletonWrap}>
      <div className={s.skeletonMediumRow}>
        {[0,1].map(i => (
          <div key={i} className={s.skeletonMedium}>
            <div className={s.skeletonLeft} />
            <div className={s.skeletonRight}>
              <div className={`${s.sk} ${s.skW80}`} />
              <div className={`${s.sk} ${s.skW60}`} />
              <div className={`${s.sk} ${s.skW90}`} style={{ marginTop: 12 }} />
              <div className={`${s.sk} ${s.skW70}`} />
              <div className={`${s.sk} ${s.skW40}`} style={{ marginTop: 14 }} />
            </div>
          </div>
        ))}
      </div>
      <div className={s.skeletonCompactRow}>
        {[0,1,2,3].map(i => (
          <div key={i} className={s.skeletonCompact}>
            <div className={s.skeletonAvatar} />
            <div className={`${s.sk} ${s.skW60}`} />
            <div className={`${s.sk} ${s.skW90}`} />
            <div className={`${s.sk} ${s.skW70}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MEDIUM CARD  (horizontal, 2 per row)
══════════════════════════════════════════════════════ */
function MediumCard({ item, globalIdx }: { item: PressMention; globalIdx: number }) {
  const ac     = accent(item.href);
  const domain = getDomain(item.href);
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={s.mediumCard}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (globalIdx % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      {/* Left panel */}
      <div className={s.mediumLeft} style={{ background: `${ac}12` }}>
        <div className={s.mediumAvatar} style={{ background: ac, color: '#fff' }}>
          <span className={s.mediumAvatarLetter}>{getInitial(item.href)}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getFavicon(item.href)}
            alt=""
            className={s.mediumFavicon}
            loading="lazy"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <span className={s.mediumDomain}>{domain}</span>
        <span className={item.lang === 'hi' ? s.tagHi : s.tagEn}>
          {item.lang === 'hi' ? 'हिंदी' : 'EN'}
        </span>
        <div className={s.mediumAccentBar} style={{ background: ac }} />
      </div>

      {/* Right content */}
      <div className={s.mediumRight}>
        <h3 className={s.mediumTitle}>{item.title}</h3>
        <p className={s.mediumExcerpt}>{item.excerpt}</p>
        <span className={s.mediumReadMore}>
          Read Article <ChevronRight size={14} aria-hidden />
        </span>
      </div>
    </motion.a>
  );
}

/* ══════════════════════════════════════════════════════
   COMPACT TILE  (4 per row)
══════════════════════════════════════════════════════ */
function CompactTile({ item, globalIdx }: { item: PressMention; globalIdx: number }) {
  const ac     = accent(item.href);
  const domain = getDomain(item.href);
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={s.compactTile}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.38, delay: (globalIdx % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className={s.compactTop}>
        <div className={s.compactAvatar} style={{ background: `${ac}18`, color: ac }}>
          <span className={s.compactAvatarLetter}>{getInitial(item.href)}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getFavicon(item.href)}
            alt=""
            className={s.compactFavicon}
            loading="lazy"
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        <span className={s.compactDomain}>{domain}</span>
        <ExternalLink size={11} className={s.compactExt} aria-hidden />
      </div>
      <p className={s.compactTitle}>{item.title}</p>
      <div className={s.compactAccentBar} style={{ background: ac }} />
    </motion.a>
  );
}

/* ══════════════════════════════════════════════════════
   LIST ROW  (table view)
══════════════════════════════════════════════════════ */
function ListRow({ item, num }: { item: PressMention; num: number }) {
  const ac     = accent(item.href);
  const domain = getDomain(item.href);
  return (
    <motion.tr
      className={s.listRow}
      onClick={() => window.open(item.href, '_blank', 'noopener')}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: Math.min(num * 0.025, 0.5) }}
    >
      <td className={`${s.listCell} ${s.listNumCell}`}>{num}</td>
      <td className={`${s.listCell} ${s.listPubCell}`}>
        <div className={s.listPub}>
          <div className={s.listAvatar} style={{ background: `${ac}18`, color: ac }}>
            <span className={s.listAvatarLetter}>{getInitial(item.href)}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getFavicon(item.href)}
              alt=""
              className={s.listFavicon}
              loading="lazy"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <span className={s.listDomain}>{domain}</span>
        </div>
      </td>
      <td className={`${s.listCell} ${s.listHeadlineCell}`}>
        <span className={s.listHeadline}>{item.title}</span>
      </td>
      <td className={`${s.listCell} ${s.listLangCell}`}>
        <span className={item.lang === 'hi' ? s.tagHi : s.tagEn}>
          {item.lang === 'hi' ? 'हिंदी' : 'EN'}
        </span>
      </td>
      <td className={`${s.listCell} ${s.listArrowCell}`}>
        <span className={s.listArrow}><ArrowRight size={14} aria-hidden /></span>
      </td>
    </motion.tr>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function MediaHubPage() {
  const [lang,     setLang]     = useState<LangFilter>('all');
  const [query,    setQuery]    = useState('');
  const [loading,  setLoading]  = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('magazine');

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const base = lang === 'all' ? pressMentions : pressMentions.filter(i => i.lang === lang);
    const q    = normText(query);
    return q ? base.filter(i => normText(`${i.title} ${i.excerpt}`).includes(q)) : base;
  }, [lang, query]);

  const isDefault = !query && lang === 'all';
  const gridItems = isDefault ? filtered.slice(1) : filtered;
  const chunks    = useMemo(() => toMagazineChunks(gridItems), [gridItems]);
  const enCount   = pressMentions.filter(m => m.lang === 'en').length;
  const hiCount   = pressMentions.filter(m => m.lang === 'hi').length;

  return (
    <div className={s.page}>

      {/* ── Ticker ── */}
      <div className={s.ticker} aria-hidden>
        <div className={s.tickerTrack}>
          {[...pressTickerMessages, ...pressTickerMessages, ...pressTickerMessages].map((m, i) => (
            <span key={i} className={s.tickerItem}>
              <span className={s.tickerDot} />{m}
            </span>
          ))}
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section className={s.hero}>
        <div className={s.heroBg} />
        <div className="container">
          <motion.div
            className={s.heroContent}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className={s.heroBadge}>
              <Newspaper size={12} aria-hidden /> Media &amp; Press Coverage
            </span>
            <h1 className={s.heroTitle}>
              Stories of<br />
              <span className={s.heroAccent}>Real Change.</span>
            </h1>
            <p className={s.heroDesc}>
              Over a decade of recognition — from grassroots villages to global stages.
              {' '}{pressMentions.length} features across India&rsquo;s most trusted publications.
            </p>
          </motion.div>
          <motion.div
            className={s.statsRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {STATS.map(({ end, suffix, label, Icon }) => (
              <div key={label} className={s.statItem}>
                <Icon size={16} className={s.statIcon} aria-hidden />
                <strong className={s.statNum}><Counter end={end} suffix={suffix} /></strong>
                <span className={s.statLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ SPOTLIGHT ══ */}
      <section className={s.spotlightSection}>
        <div className="container">
          <div className={s.featuredLabel}><span>✦ Featured Story</span></div>
          <motion.a
            href={spotlightStory.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.spotlightCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className={s.spotlightLeft}>
              <div className={s.spotlightPub}>
                <div className={s.spotlightAvatar}>
                  <span>{getInitial(spotlightStory.href)}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={getFavicon(spotlightStory.href)} alt="" className={s.spotlightFavicon}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <span className={s.spotlightDomain}>{getDomain(spotlightStory.href)}</span>
              </div>
              <div className={s.spotlightQuoteBlock}>
                <span className={s.bigQuote}>&ldquo;</span>
                <p className={s.spotlightPullQuote}>{spotlightStory.excerpt}</p>
              </div>
            </div>
            <div className={s.spotlightRight}>
              <span className={s.spotlightBadge}>Top Story</span>
              <h2 className={s.spotlightTitle}>{spotlightStory.title}</h2>
              <span className={s.spotlightCta}>Read full article <ArrowRight size={15} aria-hidden /></span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* ══ LOGO STRIP ══ */}
      <section className={s.logosSection}>
        <div className="container">
          <p className={s.logosLabel}>As featured in</p>
          <div className={s.logoStripWrap}>
            <div className={s.logoStrip}>
              {[...PRESS_LOGOS, ...PRESS_LOGOS].map((src, i) => (
                <div key={i} className={s.logoItem}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/Press_And_Media/${src}`} alt="" className={s.logoImg}
                    onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = '0'; }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FILTER BAR ══ */}
      <div className={s.filterSection} id="archive">
        <div className="container">
          <div className={s.filterBar}>
            {/* Language tabs */}
            <div className={s.filterTabs} role="tablist">
              {LANG_TABS.map(({ key, label }) => {
                const count = key === 'all' ? pressMentions.length : key === 'en' ? enCount : hiCount;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={lang === key}
                    onClick={() => setLang(key)}
                    className={`${s.filterTab} ${lang === key ? s.filterTabActive : ''}`}
                  >
                    {label}<span className={s.tabCount}>{count}</span>
                  </button>
                );
              })}
            </div>

            <div className={s.filterRight}>
              {/* View toggle */}
              <div className={s.viewToggle} role="group" aria-label="View mode">
                <button
                  type="button"
                  className={`${s.viewBtn} ${viewMode === 'magazine' ? s.viewBtnActive : ''}`}
                  onClick={() => setViewMode('magazine')}
                  title="Magazine view"
                  aria-pressed={viewMode === 'magazine'}
                >
                  <LayoutGrid size={14} aria-hidden />
                </button>
                <button
                  type="button"
                  className={`${s.viewBtn} ${viewMode === 'list' ? s.viewBtnActive : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List view"
                  aria-pressed={viewMode === 'list'}
                >
                  <List size={14} aria-hidden />
                </button>
              </div>

              {/* Search */}
              <div className={s.searchWrap} role="search">
                <Search size={14} className={s.searchIcon} aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search publications…"
                  className={s.searchInput}
                  aria-label="Search press coverage"
                />
                <AnimatePresence>
                  {query && (
                    <motion.button
                      type="button"
                      className={s.clearBtn}
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                    >
                      <X size={10} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ CONTENT ══ */}
      <section className={s.contentSection}>
        <div className="container">
          <p className={s.resultsCount}>
            <strong>{filtered.length}</strong>{' '}
            {filtered.length === 1 ? 'story' : 'stories'}
            {query && <> matching &ldquo;{query}&rdquo;</>}
          </p>

          {loading ? (
            <Skeleton />
          ) : filtered.length === 0 ? (
            <motion.div className={s.empty} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Newspaper size={44} aria-hidden />
              <p>No stories found. Try another filter or search term.</p>
              <button type="button" className={s.clearAllBtn}
                onClick={() => { setQuery(''); setLang('all'); }}>
                Clear filters
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">

              {/* ─ MAGAZINE VIEW ─ */}
              {viewMode === 'magazine' && (
                <motion.div
                  key={`mag-${lang}-${query}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={s.magazineWrap}
                >
                  {chunks.map((chunk, ci) =>
                    chunk.kind === 'medium' ? (
                      <div key={ci} className={s.chunkMedium}>
                        {chunk.items.map((item, ii) => (
                          <MediumCard key={item.id} item={item} globalIdx={ii} />
                        ))}
                      </div>
                    ) : (
                      <div key={ci} className={s.chunkCompact}>
                        {chunk.items.map((item, ii) => (
                          <CompactTile key={item.id} item={item} globalIdx={ii} />
                        ))}
                      </div>
                    )
                  )}
                </motion.div>
              )}

              {/* ─ LIST VIEW ─ */}
              {viewMode === 'list' && (
                <motion.div
                  key={`list-${lang}-${query}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={s.tableWrap}>
                    <table className={s.listTable}>
                      <thead className={s.listHead}>
                        <tr>
                          <th className={`${s.listTh} ${s.thNum}`}>#</th>
                          <th className={`${s.listTh} ${s.thPub}`}>Publication</th>
                          <th className={`${s.listTh} ${s.thHeadline}`}>Headline</th>
                          <th className={`${s.listTh} ${s.thLang}`}>Lang</th>
                          <th className={`${s.listTh} ${s.thArrow}`} />
                        </tr>
                      </thead>
                      <tbody className={s.listBody}>
                        {filtered.map((item, i) => (
                          <ListRow key={item.id} item={item} num={i + 1} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          )}
        </div>
      </section>


    </div>
  );
}
