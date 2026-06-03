import type { StateSlug, StateTheme, ProgramFocus } from '@/types/statePage';
import { getStateBySlug } from './states';
import { getExperience } from './experienceData';
import { uttarPradeshExperience } from './uttarPradeshExperience';

/* ════════════════════════════════════════════════════════════
   Saukhyam — India Impact Map dataset
   Merges derived metrics from statePages with curated narrative
   (transformation stories, SDG alignment, CSR "Adopt a State").
   ════════════════════════════════════════════════════════════ */

export type HeatTier = 'high' | 'medium' | 'emerging';

export interface SDGItem { code: number; label: string; }

export interface QuickStat { label: string; value: string; }

export interface StateImpact {
  slug: StateSlug;
  svgId: string;
  name: string;
  shortName: string;
  capital: string;
  tagline: string;
  theme: StateTheme;
  programFocus: ProgramFocus;
  heroImage: string;
  enteredYear: string;
  heat: HeatTier;
  /* core metrics */
  womenReached: number;
  villages: number;
  schools: number;
  centres: number;
  campuses: number;
  livelihoods: number;
  /* environmental */
  padsPrevented: number;
  co2Tonnes: number;
  plasticKg: number;
  treesSaved: number;
  waterLitres: number;
  /* narrative */
  story: {
    before: string[];
    after: string[];
    quote: string;
    author: string;
    authorRole: string;
  };
  sdgs: SDGItem[];
  csr: { need: string; fundingGoal: number; supports: string };
  statePageHref?: string;
  /** Text override when a metric is qualitative (e.g. rollout phase) */
  scoreDisplays?: Partial<Record<'womenReached' | 'schools' | 'villages' | 'livelihoods', string>>;
  hideEnvironmental?: boolean;
}

/* Shared SDG set — all five apply to Saukhyam's model */
const SDGS: SDGItem[] = [
  { code: 3,  label: 'Good Health & Well-being' },
  { code: 5,  label: 'Gender Equality' },
  { code: 6,  label: 'Clean Water & Sanitation' },
  { code: 12, label: 'Responsible Consumption' },
  { code: 13, label: 'Climate Action' },
];

/* slug → India map svg id + curated content */
interface Curated {
  slug: StateSlug;
  svgId: string;
  capital: string;
  enteredYear: string;
  story: StateImpact['story'];
  csr: StateImpact['csr'];
}

const CURATED: Curated[] = [
  {
    slug: 'kerala', svgId: 'kl', capital: 'Thiruvananthapuram', enteredYear: '2017',
    story: {
      before: [
        'Disposable pads piled up as un-segregated waste across panchayats.',
        'Limited open conversation about menstrual health in households.',
      ],
      after: [
        'Home to Amrita SeRVe — the first Saukhyam production hub.',
        'Women-led units now train and supply across South India.',
        'HEAL wellness circles report measurably reduced period pain.',
      ],
      quote: 'I started stitching pads to earn — today I lead a unit of twelve women and we supply three districts.',
      author: 'Lakshmi', authorRole: 'Saukhyam Sakhi, Kollam',
    },
    csr: { need: 'Expand the Kollam production unit and add two satellite centres.', fundingGoal: 1200000, supports: 'Equips 40 women with machines, training & working capital.' },
  },
  {
    slug: 'tamil-nadu', svgId: 'tn', capital: 'Chennai', enteredYear: '2018',
    story: {
      before: [
        'Coastal fishing hamlets had little access to affordable menstrual products.',
        'Girls routinely missed school days during their periods.',
      ],
      after: [
        'Deep REACH roots from Kanyakumari fisheries to delta villages.',
        'University CARE chapters drive campus-wide switches.',
      ],
      quote: 'After the workshop I no longer miss college during my periods — and I convinced my whole hostel to switch.',
      author: 'Divya', authorRole: 'CARE Ambassador, Chennai',
    },
    csr: { need: 'Fund first-period kits for 5,000 adolescent girls in delta schools.', fundingGoal: 900000, supports: 'One kit gives a girl a full year of dignified, safe periods.' },
  },
  {
    slug: 'karnataka', svgId: 'ka', capital: 'Bengaluru', enteredYear: '2019',
    story: {
      before: [
        'North Karnataka tribal blocks were underserved by hygiene programmes.',
        'Awareness was concentrated only in urban pockets.',
      ],
      after: [
        'From Bengaluru tech campuses to North Karnataka villages.',
        'SHG federations now anchor distribution and training.',
      ],
      quote: 'Switching to Saukhyam meant no rashes and real savings — now I run awareness sessions in my taluk.',
      author: 'Geeta', authorRole: 'REACH Volunteer, Belagavi',
    },
    csr: { need: 'Sponsor 30 tribal-block awareness camps with starter packs.', fundingGoal: 750000, supports: 'Each camp reaches ~150 women with education and product.' },
  },
  {
    slug: 'maharashtra', svgId: 'mh', capital: 'Mumbai', enteredYear: '2020',
    story: {
      before: [
        'From Konkan to Vidarbha, rural women relied on unsafe cloth or costly disposables.',
        'Menstrual waste burdened both villages and cities.',
      ],
      after: [
        'Largest combined REACH + CARE footprint in the west.',
        '8 satellite centres and 22 campus partners and counting.',
      ],
      quote: 'My family laughed when I joined — now my pad income pays my daughter\'s school fees.',
      author: 'Sunita', authorRole: 'Saukhyam Sakhi, Vidarbha',
    },
    csr: { need: 'Adopt a Vidarbha district — 3 new centres + 5,000 starter packs.', fundingGoal: 1500000, supports: 'Builds local livelihoods while preventing millions of disposables.' },
  },
  {
    slug: 'gujarat', svgId: 'gj', capital: 'Gandhinagar', enteredYear: '2020',
    story: {
      before: [
        'Coastal and tribal districts had thin menstrual-health infrastructure.',
        'Self-help groups lacked a sustainable income product.',
      ],
      after: [
        'SHGs and satellite units power the movement statewide.',
        'Entrepreneurship paired with menstrual dignity.',
      ],
      quote: 'Our self-help group found both purpose and a steady income making Saukhyam pads.',
      author: 'Hetal', authorRole: 'SHG Lead, Kutch',
    },
    csr: { need: 'Seed two SHG-run micro-units in tribal Dahod & Narmada.', fundingGoal: 850000, supports: 'Turns agro-waste into income for 30 women per unit.' },
  },
  {
    slug: 'west-bengal', svgId: 'wb', capital: 'Kolkata', enteredYear: '2021',
    story: {
      before: [
        'Sundarbans communities faced flooding-related hygiene challenges.',
        'Taboos kept menstruation out of public conversation.',
      ],
      after: [
        'Community theatre and SHG partnerships break the silence.',
        'Reusable pads reach remote riverine blocks.',
      ],
      quote: 'The street play changed my mother\'s mind — now she buys reusable pads for all of us.',
      author: 'Moumita', authorRole: 'Youth Volunteer, South 24 Parganas',
    },
    csr: { need: 'Support 20 Sundarbans riverine outreach drives.', fundingGoal: 700000, supports: 'Brings pads + education to flood-prone island villages.' },
  },
  {
    slug: 'andhra-pradesh', svgId: 'ap', capital: 'Amaravati', enteredYear: '2021',
    story: {
      before: [
        'Banana farming left tonnes of pseudostem as agro-waste.',
        'Rayalaseema women had few local livelihood options.',
      ],
      after: [
        'Local banana fibre flows from farms to local hands.',
        'Expanding REACH circles across coastal Andhra.',
      ],
      quote: 'The same banana farms we worked now give us fibre to make pads — and a wage of our own.',
      author: 'Padma', authorRole: 'REACH Beneficiary, Anantapur',
    },
    csr: { need: 'Fund a banana-fibre processing line for one cluster.', fundingGoal: 950000, supports: 'Closes the loop: agro-waste in, livelihoods + pads out.' },
  },
  {
    slug: 'rajasthan', svgId: 'rj', capital: 'Jaipur', enteredYear: '2023',
    story: {
      before: [
        'Thar desert villages face acute water scarcity — washing was a barrier.',
        'Disposable access was minimal and expensive.',
      ],
      after: [
        'REACH brings low-water reusable solutions to desert districts.',
        'Livelihoods grow alongside menstrual dignity.',
      ],
      quote: 'They taught us a way to stay clean that needs very little water — that changed everything here.',
      author: 'Kavita', authorRole: 'REACH Volunteer, Barmer',
    },
    csr: { need: 'Sponsor water-smart hygiene kits for 4,000 desert households.', fundingGoal: 1000000, supports: 'Pairs reusable pads with low-water care guidance.' },
  },
  {
    slug: 'delhi', svgId: 'dl', capital: 'New Delhi', enteredYear: '2019',
    story: {
      before: [
        'Urban settlements generated heavy disposable-pad waste.',
        'Students lacked a tangible sustainability action.',
      ],
      after: [
        'CARE drives campus switches, policy dialogues and slum outreach.',
        '28 campus partners make the capital a CARE stronghold.',
      ],
      quote: 'Our college cut disposable waste by 40% in one semester — sustainability finally felt real.',
      author: 'Ananya', authorRole: 'CARE Campus Lead, New Delhi',
    },
    csr: { need: 'Back urban-slum outreach reaching 6,000 women.', fundingGoal: 800000, supports: 'Brings affordable reusables to dense urban settlements.' },
  },
];

function deriveImpact(c: Curated): StateImpact {
  const sp = getStateBySlug(c.slug);
  const womenReached = sp?.stats[0]?.value ?? 0;
  const villages     = sp?.stats[1]?.value ?? 0;
  const centres      = sp?.stats[2]?.value ?? 0;
  const campuses     = sp?.stats[3]?.value ?? 0;

  const heat: HeatTier =
    womenReached >= 38000 ? 'high' : womenReached >= 25000 ? 'medium' : 'emerging';

  return {
    slug: c.slug,
    svgId: c.svgId,
    name: sp?.name ?? c.slug,
    shortName: sp?.shortName ?? '',
    capital: c.capital,
    tagline: sp?.tagline ?? '',
    theme: sp?.theme ?? 'green',
    programFocus: sp?.programFocus ?? 'both',
    heroImage: sp?.heroImage ?? '',
    enteredYear: c.enteredYear,
    heat,
    womenReached,
    villages,
    schools: Math.round(villages * 1.2),
    centres,
    campuses,
    livelihoods: centres * 4,
    padsPrevented: womenReached * 150,
    co2Tonnes: Math.round((womenReached * 5.8) / 1000),
    plasticKg: Math.round(womenReached * 1.2),
    treesSaved: Math.round(womenReached / 250),
    waterLitres: womenReached * 60,
    story: c.story,
    sdgs: SDGS,
    csr: c.csr,
    statePageHref: getExperience(c.slug) ? `/states/${c.slug}` : undefined,
  };
}

/** Uttar Pradesh — verified content, standard dashboard layout (/states/uttar-pradesh) */
function buildUpImpact(): StateImpact {
  const exp = uttarPradeshExperience;
  const voice = exp.beneficiaries[0];
  return {
    slug: 'uttar-pradesh',
    svgId: exp.svgId,
    name: exp.name,
    shortName: exp.shortName,
    capital: exp.capital,
    tagline: 'From Kumbh outreach to a statewide UPSRLM MoU — reusable pads and MHM education across UP.',
    theme: 'green',
    programFocus: 'reach',
    heroImage: exp.hero.image,
    enteredYear: String(exp.enteredYear),
    heat: 'high',
    womenReached: 0,
    villages: 75,
    schools: exp.initiatives.length,
    centres: 4,
    campuses: 0,
    livelihoods: 7,
    padsPrevented: 0,
    co2Tonnes: 0,
    plasticKg: 0,
    treesSaved: 0,
    waterLitres: 0,
    story: {
      before: [exp.about.challenge],
      after: [exp.about.action, exp.about.impact],
      quote: voice?.quote ?? '',
      author: voice?.name ?? '',
      authorRole: voice?.district ?? '',
    },
    sdgs: SDGS,
    csr: {
      need: 'Scale the UPSRLM MoU — seed rural production centres and SHG training across Uttar Pradesh.',
      fundingGoal: 0,
      supports: 'Five-year partnership with UPSRLM (Prerna) takes reusable pads to self-help groups statewide, starting from Lucknow and Barabanki.',
    },
    statePageHref: `/states/${exp.slug}`,
    scoreDisplays: {
      womenReached: 'State-wide rollout',
      schools: '4 MHM programmes',
      villages: '75+ districts',
      livelihoods: '7–10 centres',
    },
    hideEnvironmental: true,
  };
}

export const stateImpacts: StateImpact[] = [
  ...CURATED.map(deriveImpact),
  buildUpImpact(),
];

/** Lookup by India-map svg id (e.g. 'mh'). */
export const impactBySvgId: Record<string, StateImpact> = Object.fromEntries(
  stateImpacts.map(s => [s.svgId, s]),
);

/** Nationwide totals (sum across mapped states). */
export const nationalTotals = stateImpacts.reduce(
  (acc, s) => ({
    womenReached: acc.womenReached + s.womenReached,
    villages:     acc.villages + s.villages,
    schools:      acc.schools + s.schools,
    centres:      acc.centres + s.centres,
    livelihoods:  acc.livelihoods + s.livelihoods,
    padsPrevented:acc.padsPrevented + s.padsPrevented,
    co2Tonnes:    acc.co2Tonnes + s.co2Tonnes,
    plasticKg:    acc.plasticKg + s.plasticKg,
    treesSaved:   acc.treesSaved + s.treesSaved,
    waterLitres:  acc.waterLitres + s.waterLitres,
  }),
  { womenReached: 0, villages: 0, schools: 0, centres: 0, livelihoods: 0, padsPrevented: 0, co2Tonnes: 0, plasticKg: 0, treesSaved: 0, waterLitres: 0 },
);

export const HEAT_COLORS: Record<HeatTier, string> = {
  high:     '#15803d',
  medium:   '#4ade80',
  emerging: '#fbbf24',
};

export const HEAT_LABELS: Record<HeatTier, string> = {
  high:     'High Impact',
  medium:   'Growing Impact',
  emerging: 'Emerging Programs',
};
