import { STATE_IMAGES, CITY_COORDS } from './constants';
import { getStateGallery, getStateHeroImage } from './stateGalleryImages';
import { VERIFIED_STATE_CONTENT } from './verifiedStateContent';
import { uttarPradeshExperience } from './uttarPradeshExperience';
import {
  FULL_VERIFIED_STATE_EXPERIENCES,
  FULL_VERIFIED_STATE_SLUGS,
} from './buildVerifiedExperience';

/* ════════════════════════════════════════════════════════════
   SAUKHYAM ACROSS INDIA — State Experience dataset
   Reusable, data-driven template content for /states/[slug].
   ════════════════════════════════════════════════════════════ */

export const SAUKHYAM_CONTACT = {
  org: 'Saukhyam Reusable Pads',
  addressLines: [
    'Saukhyam House',
    'Mata Amritanandamayi Math',
    'Amritapuri PO',
    'Kollam, Kerala 690546',
  ],
  phone: '+91 6282 103 073',
  email: 'info@saukhyampads.org',
};

export type GalleryCategory =
  | 'workshops' | 'schools' | 'communities' | 'volunteers' | 'awareness';

export type ExpTheme = 'green' | 'teal' | 'amber' | 'purple';

export interface ExpStat {
  key: string;
  label: string;
  /** Numeric value for count-up animation. Omit when `display` is set. */
  value?: number;
  /** Verbatim text for verified non-numeric facts (e.g. "7–10", "Barabanki & Lucknow"). */
  display?: string;
  suffix?: string;
  prefix?: string;
}

export interface HealCard {
  key: 'health' | 'environment' | 'active' | 'livelihoods';
  title: string;
  description: string;
}

export interface DistrictNode {
  name: string;
  /** Legacy slot position (0–100) when lat/lng absent */
  x: number;
  y: number;
  lat?: number;
  lng?: number;
  /** Nudge label away from overlapping neighbours (SVG units) */
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: 'start' | 'middle' | 'end';
  womenReached?: number;
  programs?: number;
  /** Factual note when district-level counts are not published */
  note?: string;
}

export interface Beneficiary {
  name: string;
  district: string;
  quote: string;
  photo?: string;
  /** e.g. "LinkedIn post, Apr 2026" */
  source?: string;
}

export interface TimelineItem {
  phase: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export interface CsrDistrict {
  name: string;
  targetBeneficiaries?: number;
  fundingGoal?: number;
  raised?: number;
  /** Narrative-only partnership card when funding figures are not published */
  narrative?: string;
}

export interface StateInitiative {
  id: string;
  category: string;
  title: string;
  badge?: string;
  description: string;
  highlights: string[];
}

export interface StateInspiration {
  title: string;
  body: string;
  linkUrl: string;
  linkLabel: string;
}

export interface StateOfficeContact {
  title: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  location: string;
}

export interface StateExperience {
  slug: string;
  svgId: string;
  name: string;
  shortName: string;
  capital: string;
  theme: ExpTheme;
  enteredYear: number;
  hero: { title: string; subtitle: string; image: string };
  stats: ExpStat[];
  about: { intro: string; challenge: string; action: string; impact: string };
  heal: HealCard[];
  districts: DistrictNode[];
  beneficiaries: Beneficiary[];
  environment?: {
    padsDistributed: number;
    plasticKg: number;
    carbonTonnes: number;
    treesSaved: number;
  };
  timeline: TimelineItem[];
  gallery: GalleryItem[];
  csr: CsrDistrict[];
  /** Optional hero badge override (default: "Since {enteredYear}") */
  heroBadge?: string;
  /** Verified quick facts for the interactive map popup */
  mapQuickStats?: { label: string; value: string }[];
  /** Link to primary source blog post */
  sourceBlogSlug?: string;
  /** Partnership / activity pillars (e.g. UPSRLM, hospitals, NGOs) */
  initiatives?: StateInitiative[];
  /** Amma / founding inspiration block */
  inspiration?: StateInspiration;
  /** State-level contact (shown instead of or alongside national HQ) */
  stateContact?: StateOfficeContact;
}

/* ── Shared HEAL framework copy (national) ── */
const HEAL_CARDS: HealCard[] = [
  { key: 'health', title: 'Health',
    description: 'Chemical-free, breathable banana-fibre pads reduce rashes, infections and period pain — paired with HEAL wellness circles for PCOS, cramps and heavy flow.' },
  { key: 'environment', title: 'Environment',
    description: 'Every reusable pad replaces hundreds of disposables, keeping plastic out of landfills and drains while cutting menstrual-waste carbon emissions.' },
  { key: 'active', title: 'Active Living',
    description: 'Comfortable, leak-proof protection lets girls stay in school and women stay at work, sport and life — no period should pause a dream.' },
  { key: 'livelihoods', title: 'Livelihoods',
    description: 'Rural women are trained and equipped to manufacture pads in satellite centres, turning agro-waste into dignified, steady income.' },
];

const PORTRAITS = [
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
];

const GALLERY_CATEGORIES: GalleryCategory[] = ['workshops', 'schools', 'communities', 'volunteers', 'awareness'];

/* position slots for stylised district maps */
const SLOTS: Record<number, [number, number][]> = {
  3: [[34, 36], [66, 42], [50, 72]],
  4: [[32, 32], [68, 32], [35, 70], [68, 70]],
  5: [[30, 28], [66, 30], [50, 52], [32, 72], [72, 68]],
  6: [[28, 30], [62, 24], [80, 46], [52, 56], [30, 64], [72, 76]],
};

interface StateConfig {
  slug: string;
  svgId: string;
  name: string;
  shortName: string;
  capital: string;
  enteredYear: number;
  womenReached: number;
  theme: ExpTheme;
  majorCities: string[];
  imageIndex: number;
  districtsOverride?: DistrictNode[];
  beneficiariesOverride?: Beneficiary[];
  aboutOverride?: Partial<StateExperience['about']>;
}

function buildDistricts(c: StateConfig): DistrictNode[] {
  if (c.districtsOverride) return c.districtsOverride;
  const cities = c.majorCities.slice(0, 6);
  const slots = SLOTS[Math.max(3, Math.min(6, cities.length))] ?? SLOTS[4];
  const weights = [0.26, 0.22, 0.18, 0.14, 0.12, 0.08];
  return cities.map((name, i) => {
    const [x, y] = slots[i] ?? [50, 50];
    const geo = CITY_COORDS[name];
    const womenReached = Math.round(c.womenReached * (weights[i] ?? 0.1));
    return {
      name,
      x,
      y,
      lat: geo?.lat,
      lng: geo?.lng,
      womenReached,
      programs: Math.max(3, Math.round(womenReached / 600)),
    };
  });
}

function buildBeneficiaries(c: StateConfig): Beneficiary[] {
  if (c.beneficiariesOverride) return c.beneficiariesOverride;
  const names = ['Sunita', 'Geeta', 'Anjali'];
  const quotes = [
    'Switching to Saukhyam ended my rashes and saved my family real money every month.',
    'I no longer miss school during my periods — and I teach other girls what I learned.',
    'Making these pads gives me my own income and a sense of pride in my village.',
  ];
  const cities = c.majorCities;
  return names.map((name, i) => ({
    name,
    district: cities[i % cities.length],
    quote: quotes[i],
    photo: PORTRAITS[i % PORTRAITS.length],
  }));
}

function buildState(c: StateConfig): StateExperience {
  if (FULL_VERIFIED_STATE_SLUGS.has(c.slug)) {
    throw new Error(`buildState called for full verified state: ${c.slug}`);
  }
  const verified = VERIFIED_STATE_CONTENT[c.slug];
  const womenReached = c.womenReached;
  const villages = Math.round(womenReached / 240);
  const schools = Math.round(villages * 1.2);
  const padsDistributed = womenReached * 3;
  const workshops = Math.round(villages * 1.4);
  const plasticKg = Math.round(womenReached * 1.8);
  const carbonTonnes = Math.round((womenReached * 5.8) / 1000);
  const treesSaved = Math.round(womenReached / 250);
  const wasteReducedTonnes = Math.round(plasticKg / 1000);
  const customGallery = getStateGallery(c.slug, c.name);
  const img = getStateHeroImage(c.slug) ?? STATE_IMAGES[c.imageIndex % STATE_IMAGES.length];

  const gallery: GalleryItem[] = customGallery ?? Array.from({ length: 10 }).map((_, i) => ({
    id: `${c.slug}-g${i}`,
    src: STATE_IMAGES[(c.imageIndex + i) % STATE_IMAGES.length],
    alt: `Saukhyam ${GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length]} in ${c.name}`,
    category: GALLERY_CATEGORIES[i % GALLERY_CATEGORIES.length],
  }));

  const defaultStats: ExpStat[] = [
    { key: 'women', label: 'Women Reached', value: womenReached, suffix: '+' },
    { key: 'schools', label: 'Schools Covered', value: schools, suffix: '+' },
    { key: 'villages', label: 'Villages Impacted', value: villages, suffix: '+' },
    { key: 'pads', label: 'Reusable Pads Distributed', value: padsDistributed, suffix: '+' },
    { key: 'workshops', label: 'Workshops Conducted', value: workshops, suffix: '+' },
    { key: 'waste', label: 'Waste Reduced', value: wasteReducedTonnes, suffix: ' T' },
  ];

  const defaultAbout = {
    intro: c.aboutOverride?.intro ??
      `Across ${c.name}, Saukhyam works hand-in-hand with communities to make menstruation safe, sustainable and stigma-free — combining awareness, women's empowerment and environmental responsibility.`,
    challenge: c.aboutOverride?.challenge ??
      `Many women and girls in ${c.name} faced limited menstrual-health awareness, costly or unsafe products, and the silent burden of disposable waste piling up in their communities.`,
    action: c.aboutOverride?.action ??
      `Saukhyam runs awareness workshops, distributes chemical-free reusable pads, trains local women as community health ambassadors, and partners with schools, panchayats and self-help groups.`,
    impact: c.aboutOverride?.impact ??
      `Today, ${womenReached.toLocaleString('en-IN')}+ women and girls across ${villages}+ villages have healthier periods, girls stay in school, and tonnes of plastic waste are prevented every year.`,
  };

  const about = verified?.about ? { ...defaultAbout, ...verified.about } : defaultAbout;

  return {
    slug: c.slug,
    svgId: c.svgId,
    name: c.name,
    shortName: c.shortName,
    capital: c.capital,
    theme: c.theme,
    enteredYear: c.enteredYear,
    heroBadge: verified?.heroBadge,
    sourceBlogSlug: verified?.sourceBlogSlug,
    hero: {
      title: verified?.hero?.title ?? `Saukhyam in ${c.name}`,
      subtitle: verified?.hero?.subtitle ??
        `Empowering Women. Creating Sustainable Futures. Transforming Menstrual Health Across ${c.name}.`,
      image: img,
    },
    stats: verified?.stats ?? defaultStats,
    about,
    heal: HEAL_CARDS,
    districts: verified?.districts ?? buildDistricts(c),
    beneficiaries: verified?.beneficiaries ?? buildBeneficiaries(c),
    environment: verified?.omitEnvironment ? undefined : {
      padsDistributed,
      plasticKg,
      carbonTonnes,
      treesSaved,
    },
    timeline: verified?.timeline ?? [
      { phase: `${c.enteredYear}`, title: 'Awareness Programs', description: `First menstrual-health workshops and pad demonstrations launched across ${c.capital} and nearby blocks.` },
      { phase: `${c.enteredYear + 1}`, title: 'District Expansion', description: `Programs scaled to ${Math.min(6, c.majorCities.length)} districts with local ambassador networks.` },
      { phase: `${c.enteredYear + 2}`, title: 'Community Outreach', description: 'Panchayat sessions, school menstrual-health days and SHG partnerships deepened grassroots reach.' },
      { phase: `${c.enteredYear + 3}`, title: 'Women Empowerment', description: `Satellite production and Saukhyam Sakhi training turned beneficiaries into earners and leaders.` },
    ],
    gallery,
    csr: verified?.csr ?? buildDistricts(c).slice(0, 3).map((d, i) => {
      const goal = [1200000, 950000, 800000][i] ?? 800000;
      return {
        name: d.name,
        targetBeneficiaries: Math.round((d.womenReached ?? 0) * 0.6),
        fundingGoal: goal,
        raised: Math.round(goal * [0.62, 0.41, 0.28][i]),
      };
    }),
  };
}

/* ════════════════════════════════════════════════════════════
   STATE CONFIGS  (20 states)
   ════════════════════════════════════════════════════════════ */
const CONFIGS: StateConfig[] = [
  { slug: 'maharashtra', svgId: 'mh', name: 'Maharashtra', shortName: 'MH', capital: 'Mumbai', enteredYear: 2023, womenReached: 42000, theme: 'teal', majorCities: ['Mumbai', 'Nerul', 'Kharghar', 'Belapur', 'Jawahar', 'Nandurbar'], imageIndex: 0 },
  { slug: 'kerala', svgId: 'kl', name: 'Kerala', shortName: 'KL', capital: 'Thiruvananthapuram', enteredYear: 2017, womenReached: 52000, theme: 'green', majorCities: ['Kollam', 'Kochi', 'Thrissur', 'Kozhikode', 'Kannur'], imageIndex: 4 },
  { slug: 'tamil-nadu', svgId: 'tn', name: 'Tamil Nadu', shortName: 'TN', capital: 'Chennai', enteredYear: 2018, womenReached: 38000, theme: 'teal', majorCities: ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Salem'], imageIndex: 3 },
  { slug: 'karnataka', svgId: 'ka', name: 'Karnataka', shortName: 'KA', capital: 'Bengaluru', enteredYear: 2019, womenReached: 35000, theme: 'green', majorCities: ['Bengaluru', 'Mysuru', 'Belagavi', 'Hubballi', 'Kalaburagi'], imageIndex: 1 },
  { slug: 'rajasthan', svgId: 'rj', name: 'Rajasthan', shortName: 'RJ', capital: 'Jaipur', enteredYear: 2023, womenReached: 22000, theme: 'amber', majorCities: ['Jaipur', 'Jodhpur', 'Barmer', 'Udaipur', 'Bikaner'], imageIndex: 0 },
  { slug: 'gujarat', svgId: 'gj', name: 'Gujarat', shortName: 'GJ', capital: 'Gandhinagar', enteredYear: 2020, womenReached: 28000, theme: 'teal', majorCities: ['Ahmedabad', 'Surat', 'Kutch', 'Dahod', 'Rajkot'], imageIndex: 2 },
  { slug: 'punjab', svgId: 'pb', name: 'Punjab', shortName: 'PB', capital: 'Chandigarh', enteredYear: 2022, womenReached: 16000, theme: 'green', majorCities: ['Amritsar', 'Ludhiana', 'Patiala', 'Bathinda', 'Jalandhar'], imageIndex: 3 },
  { slug: 'haryana', svgId: 'hr', name: 'Haryana', shortName: 'HR', capital: 'Chandigarh', enteredYear: 2022, womenReached: 14000, theme: 'amber', majorCities: ['Gurugram', 'Faridabad', 'Hisar', 'Rohtak', 'Karnal'], imageIndex: 5 },
  { slug: 'west-bengal', svgId: 'wb', name: 'West Bengal', shortName: 'WB', capital: 'Kolkata', enteredYear: 2021, womenReached: 31000, theme: 'green', majorCities: ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur', 'Sundarbans'], imageIndex: 2 },
  { slug: 'odisha', svgId: 'or', name: 'Odisha', shortName: 'OD', capital: 'Bhubaneswar', enteredYear: 2021, womenReached: 24000, theme: 'teal', majorCities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur'], imageIndex: 3 },
  { slug: 'chhattisgarh', svgId: 'ct', name: 'Chhattisgarh', shortName: 'CG', capital: 'Raipur', enteredYear: 2022, womenReached: 17000, theme: 'green', majorCities: ['Raipur', 'Bilaspur', 'Bastar', 'Korba', 'Durg'], imageIndex: 1 },
  { slug: 'jharkhand', svgId: 'jh', name: 'Jharkhand', shortName: 'JH', capital: 'Ranchi', enteredYear: 2022, womenReached: 15000, theme: 'teal', majorCities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'], imageIndex: 2 },
  { slug: 'himachal-pradesh', svgId: 'hp', name: 'Himachal Pradesh', shortName: 'HP', capital: 'Shimla', enteredYear: 2023, womenReached: 9000, theme: 'green', majorCities: ['Shimla', 'Mandi', 'Kangra', 'Solan', 'Kullu'], imageIndex: 5 },
  { slug: 'andhra-pradesh', svgId: 'ap', name: 'Andhra Pradesh', shortName: 'AP', capital: 'Amaravati', enteredYear: 2021, womenReached: 26000, theme: 'green', majorCities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Anantapur', 'Tirupati'], imageIndex: 3 },
];

export const stateExperiences: StateExperience[] = [
  uttarPradeshExperience,
  ...FULL_VERIFIED_STATE_EXPERIENCES,
  ...CONFIGS.map(buildState),
];

export const experienceBySlug: Record<string, StateExperience> = Object.fromEntries(
  stateExperiences.map(s => [s.slug, s]),
);

export const experienceBySvgId: Record<string, StateExperience> = Object.fromEntries(
  stateExperiences.map(s => [s.svgId, s]),
);

export function getExperience(slug: string): StateExperience | undefined {
  return experienceBySlug[slug];
}

export function getAllExperienceSlugs(): string[] {
  return stateExperiences.map(s => s.slug);
}

export const EXP_THEME_COLORS: Record<ExpTheme, { base: string; deep: string; glow: string }> = {
  green:  { base: '#22c55e', deep: '#15803d', glow: 'rgba(34,197,94,0.55)' },
  teal:   { base: '#14b8a6', deep: '#0f766e', glow: 'rgba(20,184,166,0.55)' },
  amber:  { base: '#f59e0b', deep: '#b45309', glow: 'rgba(245,158,11,0.5)' },
  purple: { base: '#a855f7', deep: '#7e22ce', glow: 'rgba(168,85,247,0.5)' },
};
