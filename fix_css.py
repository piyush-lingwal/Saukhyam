# Replace bento CSS section (lines 693-1149 inclusive, 1-indexed)
filepath = r'e:\Saukhyam\saukhyam-website\src\app\page.module.css'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines before: {len(lines)}")

new_css = r"""/* =============================================
   NEXT-GEN BENTO GRID — Split Card Layout
   ============================================= */

.bentoSection {
  position: relative;
  padding: clamp(4rem, 8vw, 7rem) 0;
  background: linear-gradient(165deg, #052e16 0%, #14532d 30%, #166534 60%, #15803d 100%);
  overflow: hidden;
}

.bentoBlobA {
  position: absolute;
  top: -10%;
  right: -8%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}

.bentoBlobB {
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.12), transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}

.bentoHeader {
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
  position: relative;
  z-index: 1;
}

.bentoBadge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #86efac;
  margin-bottom: 1rem;
}

.bentoTitle {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #fff;
}

.bentoTitleAccent {
  background: linear-gradient(135deg, #86efac, #4ade80, #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── 4-col Asymmetric Grid ──
   Row 1: Amma(2rows) | HEAL-Logo(sm) | HEAL-Info(wide)
   Row 2: Amma        | REACH-Info    | REACH-Logo(sm)
   Row 3: CARE-Logo   | CARE-Info(2)  | Stats
   ─────────────────────────────────────────── */
.bentoGrid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr 1fr 0.7fr;
  grid-template-rows: auto auto auto;
  gap: 14px;
  position: relative;
  z-index: 1;
  grid-template-areas:
    "amma  hlogo  hinfo  hinfo"
    "amma  rinfo  rinfo  rlogo"
    "clogo cinfo  cinfo  stats";
}

/* ── Shared card base ── */
.bCard {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(.4,0,.2,1);
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.bCard::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.bCard:hover {
  transform: translateY(-3px);
  border-color: rgba(134, 239, 172, 0.2);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3), 0 0 30px rgba(34, 197, 94, 0.06);
  color: #fff;
}

.bCard:hover::after {
  opacity: 1;
}

/* ═════════════════════════════════════
   AMMA — Large Photo Card (2 rows)
   ═════════════════════════════════════ */
.bAmma {
  grid-area: amma;
  padding: 0;
}

.bAmmaPhoto {
  position: relative;
  width: 100%;
  flex: 1;
  min-height: 220px;
  overflow: hidden;
}

.bAmmaImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.6s ease;
}

.bAmma:hover .bAmmaImg {
  transform: scale(1.04);
}

.bAmmaPhoto::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(to top, rgba(5, 46, 22, 0.95), transparent);
  pointer-events: none;
}

.bAmmaBody {
  padding: 1.2rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.bAmmaTag {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #4ade80;
}

.bAmmaName {
  font-family: var(--font-heading);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
}

.bAmmaText {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.bAmmaQuote {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border-left: 3px solid #22c55e;
  margin-top: 0.25rem;
}

.bAmmaQM {
  font-family: Georgia, serif;
  font-size: 1.6rem;
  line-height: 0.8;
  color: #4ade80;
  flex-shrink: 0;
}

.bAmmaQuote p {
  font-size: 0.75rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.45;
  margin: 0;
}

.bAmmaLink {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.4rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: #4ade80;
  text-decoration: none;
  transition: all 0.3s ease;
}

.bAmmaLink:hover {
  color: #86efac;
  gap: 0.6rem;
}

/* ═════════════════════════════════════
   LOGO CARDS — Small Square with Theme BG
   ═════════════════════════════════════ */
.bHealLogo,
.bReachLogo,
.bCareLogo {
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.bHealLogo {
  grid-area: hlogo;
  background: linear-gradient(145deg, rgba(219, 39, 119, 0.15), rgba(190, 24, 93, 0.08));
  border-color: rgba(219, 39, 119, 0.15);
}

.bHealLogo::after {
  background: linear-gradient(135deg, rgba(219, 39, 119, 0.1), transparent);
}

.bReachLogo {
  grid-area: rlogo;
  background: linear-gradient(145deg, rgba(20, 184, 166, 0.15), rgba(13, 148, 136, 0.08));
  border-color: rgba(20, 184, 166, 0.15);
}

.bReachLogo::after {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.1), transparent);
}

.bCareLogo {
  grid-area: clogo;
  background: linear-gradient(145deg, rgba(147, 51, 234, 0.15), rgba(126, 34, 206, 0.08));
  border-color: rgba(147, 51, 234, 0.15);
}

.bCareLogo::after {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), transparent);
}

.bLogoImage {
  width: 100%;
  max-width: 120px;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.85;
  transition: all 0.4s ease;
}

.bCard:hover .bLogoImage {
  opacity: 1;
  transform: scale(1.08);
}

/* ═════════════════════════════════════
   INFO CARDS — Wider content cards
   ═════════════════════════════════════ */
.bHealInfo,
.bReachInfo,
.bCareInfo {
  padding: 1.4rem 1.6rem;
  justify-content: center;
}

.bHealInfo {
  grid-area: hinfo;
  border-left: 3px solid rgba(219, 39, 119, 0.4);
}

.bHealInfo::after {
  background: linear-gradient(135deg, rgba(219, 39, 119, 0.04), transparent);
}

.bReachInfo {
  grid-area: rinfo;
  border-left: 3px solid rgba(20, 184, 166, 0.4);
}

.bReachInfo::after {
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.04), transparent);
}

.bCareInfo {
  grid-area: cinfo;
  border-left: 3px solid rgba(147, 51, 234, 0.4);
}

.bCareInfo::after {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.04), transparent);
}

.bInfoSub {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 0.5rem;
}

.bHealInfo .bInfoSub { color: rgba(244, 114, 182, 0.7); }
.bReachInfo .bInfoSub { color: rgba(94, 234, 212, 0.7); }
.bCareInfo .bInfoSub { color: rgba(192, 132, 252, 0.7); }

.bInfoDesc {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.5;
}

.bInfoMetrics {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.bInfoMetric {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.bInfoNum {
  font-family: var(--font-heading);
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  font-weight: 800;
  line-height: 1;
}

.bHealInfo .bInfoNum { color: #f472b6; }
.bReachInfo .bInfoNum { color: #5eead4; }
.bCareInfo .bInfoNum { color: #c084fc; }

.bInfoLabel {
  font-size: 0.58rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.35);
}

.bInfoArrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.4);
  margin-top: 1rem;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.bCard:hover .bInfoArrow {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateX(4px);
}

/* ═════════════════════════════════════
   IMPACT STATS CARD
   ═════════════════════════════════════ */
.bStats {
  grid-area: stats;
  background: linear-gradient(145deg, rgba(34, 197, 94, 0.18), rgba(16, 185, 129, 0.08));
  border-color: rgba(34, 197, 94, 0.15);
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.3rem;
  padding: 1.5rem;
}

.bStatsNum {
  font-family: var(--font-heading);
  font-size: clamp(2.4rem, 4.5vw, 3.2rem);
  font-weight: 800;
  background: linear-gradient(135deg, #86efac, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.bStatsLabel {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.45);
}

/* ═════════════════════════════════════
   RESPONSIVE
   ═════════════════════════════════════ */
@media (max-width: 1024px) {
  .bentoGrid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "amma  amma"
      "hlogo hinfo"
      "rinfo rlogo"
      "clogo cinfo"
      "stats stats";
  }
}

@media (max-width: 768px) {
  .bentoGrid {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    grid-template-areas:
      "amma  amma"
      "hlogo hinfo"
      "rinfo rlogo"
      "clogo cinfo"
      "stats stats";
  }

  .bentoSection {
    padding: clamp(3rem, 6vw, 5rem) 0;
  }
}

@media (max-width: 480px) {
  .bentoGrid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "amma"
      "hlogo"
      "hinfo"
      "rlogo"
      "rinfo"
      "clogo"
      "cinfo"
      "stats";
  }

  .bAmmaBody {
    padding: 1rem;
  }

  .bHealInfo,
  .bReachInfo,
  .bCareInfo {
    border-left: none;
    border-top: 3px solid rgba(255, 255, 255, 0.1);
  }

  .bHealInfo { border-top-color: rgba(219, 39, 119, 0.4); }
  .bReachInfo { border-top-color: rgba(20, 184, 166, 0.4); }
  .bCareInfo { border-top-color: rgba(147, 51, 234, 0.4); }
}

"""

new_section_lines = [line + '\n' for line in new_css.split('\n')]

# Replace lines 693-1149 (0-indexed: 692-1148)
new_lines = lines[:692] + new_section_lines + lines[1149:]

print(f"Total lines after: {len(new_lines)}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("CSS Done!")
