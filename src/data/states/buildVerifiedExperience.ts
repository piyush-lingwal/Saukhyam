import type { ExpTheme, StateExperience, StateInitiative } from './experienceData';
import { getStateGallery, getStateHeroImage } from './stateGalleryImages';
import { VERIFIED_STATE_CONTENT, type VerifiedStatePatch } from './verifiedStateContent';

const HEAL: StateExperience['heal'] = [
  { key: 'health', title: 'Health',
    description: 'Chemical-free, breathable banana-fibre pads reduce rashes, infections and period pain — paired with HEAL wellness circles for PCOS, cramps and heavy flow.' },
  { key: 'environment', title: 'Environment',
    description: 'Every reusable pad replaces hundreds of disposables, keeping plastic out of landfills and drains while cutting menstrual-waste carbon emissions.' },
  { key: 'active', title: 'Active Living',
    description: 'Comfortable, leak-proof protection lets girls stay in school and women stay at work, sport and life — no period should pause a dream.' },
  { key: 'livelihoods', title: 'Livelihoods',
    description: 'Rural women are trained and equipped to manufacture pads in satellite centres, turning agro-waste into dignified, steady income.' },
];

interface StateMeta {
  slug: string;
  svgId: string;
  name: string;
  shortName: string;
  capital: string;
  theme: ExpTheme;
  enteredYear: number;
  heroImageFallback?: string;
  mapQuickStats?: StateExperience['mapQuickStats'];
  initiatives?: StateInitiative[];
}

function build(meta: StateMeta, patch: VerifiedStatePatch): StateExperience {
  const gallery = getStateGallery(meta.slug, meta.name) ?? [];
  const heroImage =
    getStateHeroImage(meta.slug) ??
    meta.heroImageFallback ??
    gallery[0]?.src ??
    '/images/blog/img-000.jpg';

  const about = patch.about ?? {};
  return {
    slug: meta.slug,
    svgId: meta.svgId,
    name: meta.name,
    shortName: meta.shortName,
    capital: meta.capital,
    theme: meta.theme,
    enteredYear: meta.enteredYear,
    heroBadge: patch.heroBadge,
    sourceBlogSlug: patch.sourceBlogSlug,
    mapQuickStats: meta.mapQuickStats,
    hero: {
      title: patch.hero?.title ?? `Saukhyam in ${meta.name}`,
      subtitle: patch.hero?.subtitle ?? '',
      image: heroImage,
    },
    stats: patch.stats ?? [],
    about: {
      intro: about.intro ?? '',
      challenge: about.challenge ?? '',
      action: about.action ?? '',
      impact: about.impact ?? '',
    },
    heal: HEAL,
    initiatives: meta.initiatives,
    districts: patch.districts ?? [],
    beneficiaries: patch.beneficiaries ?? [],
    timeline: patch.timeline ?? [],
    gallery,
    csr: patch.csr ?? [],
  };
}

export function buildVerifiedExperience(meta: StateMeta): StateExperience | undefined {
  const patch = VERIFIED_STATE_CONTENT[meta.slug];
  if (!patch) return undefined;
  return build(meta, patch);
}

/* ── Bihar ── */
export const biharExperience = build(
  {
    slug: 'bihar',
    svgId: 'br',
    name: 'Bihar',
    shortName: 'BR',
    capital: 'Patna',
    theme: 'teal',
    enteredYear: 2013,
    heroImageFallback: '/images/blog/musaharCover.jpg',
    mapQuickStats: [
      { label: 'Partner', value: 'SBI Foundation' },
      { label: 'Community', value: 'Musahar outreach' },
      { label: 'Context', value: 'REACH' },
    ],
    initiatives: [{
      id: 'sbi-musahar',
      category: 'Foundation Partnership',
      title: 'SBI Foundation — Musahar Girls & Women',
      badge: 'Active distribution',
      description: 'When Mansi Kumari from SBI Foundation reached out to distribute Saukhyam reusable pads among Musahar girls and women in Bihar, Saukhyam said yes immediately — building on village-level work that began in 2013–14 with a tuition teacher, a health worker, and one basti.',
      highlights: [
        'Estimated 40 lakh Musahar people in Bihar',
        'Bihar hosted a pre-pandemic Saukhyam production centre (saukhyampads.org/satellite-centres)',
        'Peer adoption within tight-knit Dalit communities accelerates behaviour change',
      ],
    }],
  },
  VERIFIED_STATE_CONTENT.bihar,
);

/* ── Telangana ── */
export const telanganaExperience = build(
  {
    slug: 'telangana',
    svgId: 'tg',
    name: 'Telangana',
    shortName: 'TG',
    capital: 'Hyderabad',
    theme: 'teal',
    enteredYear: 2021,
    mapQuickStats: [
      { label: 'Partnership', value: 'Telangana Govt.' },
      { label: 'Ceremony', value: 'Hyderabad' },
      { label: 'Access', value: 'SHG networks' },
    ],
    initiatives: [{
      id: 'tg-govt',
      category: 'Government Partnership',
      title: 'Telangana District Government Collaboration',
      badge: 'Formal ceremony · Hyderabad',
      description: 'At a formal ceremony in Hyderabad, Saukhyam joined Telangana district government officials to formalise a collaborative partnership on menstrual health — enabling access to government-administered women\'s SHG networks, anganwadis, and district health infrastructure.',
      highlights: [
        'District administration and social welfare departments engaged',
        'Telangana SRLM satellite-centre development under hub-and-spoke model',
        '"We need them to open doors" — Anju Bist on government as active partner',
      ],
    }],
  },
  VERIFIED_STATE_CONTENT.telangana,
);

/* ── Assam ── */
export const assamExperience = build(
  {
    slug: 'assam',
    svgId: 'as',
    name: 'Assam',
    shortName: 'AS',
    capital: 'Dispur',
    theme: 'green',
    enteredYear: 2022,
    heroImageFallback: '/images/blog/img-008.jpg',
    mapQuickStats: [
      { label: 'Programme', value: 'REACH & CARE' },
      { label: 'Region', value: 'Northeast India' },
      { label: 'National reach', value: '30L+ women' },
    ],
    initiatives: [
      {
        id: 'assam-reach',
        category: 'Northeast REACH',
        title: 'REACH in Assam & the Northeast',
        badge: 'Hub-and-spoke supply',
        description: 'Assam is part of Saukhyam\'s northeastern REACH footprint — bringing menstrual health awareness and reusable pads to rural communities through partner NGOs, local facilitators, and semi-processed materials from the Kerala hub.',
        highlights: [
          'Supplied through post-pandemic hub-and-spoke model from Kerala',
          'Awareness videos in multiple Indian languages for local facilitators',
          'Community trust-building before product distribution',
        ],
      },
      {
        id: 'assam-care',
        category: 'CARE Campus Network',
        title: 'CARE — Students from Assam on National Teams',
        badge: 'Azim Premji University · 2026',
        description: 'Anju Bist highlighted CARE student teams that include participants from Assam alongside Mumbai, Gorakhpur, and other cities — working under Pooja Gopal at Azim Premji University to make sustainable menstruation mainstream on campus.',
        highlights: [
          '~200 campus switches ≈ 1 tonne CO₂ prevented per year',
          'CARE is product-agnostic — reusables, cups, and period panties',
          'India\'s net-zero commitment needs campus-level climate action',
        ],
      },
    ],
  },
  VERIFIED_STATE_CONTENT.assam,
);

/* ── Madhya Pradesh ── */
export const madhyaPradeshExperience = build(
  {
    slug: 'madhya-pradesh',
    svgId: 'mp',
    name: 'Madhya Pradesh',
    shortName: 'MP',
    capital: 'Bhopal',
    theme: 'amber',
    enteredYear: 2021,
    mapQuickStats: [
      { label: 'SRLM', value: 'Active' },
      { label: 'Research', value: 'DAVV Indore' },
      { label: 'Model', value: 'Satellite centres' },
    ],
    initiatives: [
      {
        id: 'mp-srlm',
        category: 'Government Partnership',
        title: 'Madhya Pradesh State Rural Livelihood Mission',
        badge: 'Satellite centre development',
        description: 'Saukhyam works with MP SRLM to set up district satellite production centres under the hub-and-spoke model — training women in awareness workshops first, then production once distribution teams move inventory consistently for at least three months.',
        highlights: [
          'One of five SRLM partner states on saukhyampads.org',
          'Only sewing machines needed at new satellite centres',
          'Sales and production teams are typically different women',
        ],
      },
      {
        id: 'mp-research',
        category: 'Research & HEAL',
        title: 'DAVV University — Prof Sujata Sharma',
        badge: 'Indore · PhD research',
        description: 'Prof Sujata Sharma, research scholar at DAVV University, Indore, documents her Saukhyam journey and pursues PhD research on social entrepreneurship and menstrual hygiene in rural and semi-urban India — extending personal impact to community scale.',
        highlights: [
          'My Saukhyam Journey blog, April 2024 — saukhyampads.org',
          'Supervised by Dr Sukhjeet Kaur Matharu, Prestige Institute of Management & Research',
          'HEAL switch stories from MP users on saukhyampads.org testimonials',
        ],
      },
      {
        id: 'mp-fibre',
        category: 'Supply Chain',
        title: 'Banana-Fibre Processing',
        badge: 'Planned expansion',
        description: 'Plans reported to establish banana-fibre extraction units in Madhya Pradesh — strengthening the local supply chain for Saukhyam\'s central Kerala hub.',
        highlights: [
          'Connects agro-waste to pad production',
          'Shortens supply chain for central India',
        ],
      },
    ],
  },
  VERIFIED_STATE_CONTENT['madhya-pradesh'],
);

/* ── Uttarakhand ── */
export const uttarakhandExperience = build(
  {
    slug: 'uttarakhand',
    svgId: 'ut',
    name: 'Uttarakhand',
    shortName: 'UK',
    capital: 'Dehradun',
    theme: 'green',
    enteredYear: 2023,
    heroImageFallback: '/images/blog/shreyasCover.jpg',
    mapQuickStats: [
      { label: 'SRLM', value: 'Satellite centres' },
      { label: 'Recognition', value: 'Shreyas Award' },
      { label: 'Network', value: 'Rotary 3080' },
    ],
    initiatives: [
      {
        id: 'uk-srlm',
        category: 'Government Partnership',
        title: 'Uttarakhand State Rural Livelihood Mission',
        badge: 'Satellite centre development',
        description: 'Saukhyam partners with Uttarakhand SRLM to establish district satellite production centres — bringing the hub-and-spoke model to hill and riverine communities. Uttarakhand also hosted a pre-pandemic production centre.',
        highlights: [
          'District centres capable of serving entire districts',
          'Awareness workshops precede production training',
          'Catchment area must be large — reusables are not a repeat buy for 3 years',
        ],
      },
      {
        id: 'uk-rotary',
        category: 'Community Network',
        title: 'Rotary District 3080 · Shreyas Award',
        badge: 'Haridwar · 2025–26',
        description: 'Anju Bist received the Shreyas Award 2025–26 from Rotary International District 3080 at their Annual District Conference in Haridwar — alongside Kruti Bharucha (Peepul) and Anshu Gupta (Goonj). Shreyas (Sanskrit: what is ultimately good for society) reflects over a decade of Saukhyam\'s community service.',
        highlights: [
          '100+ Rotary Clubs in the district network',
          'Serves Chandigarh, Punjab, Haryana, HP, and Uttarakhand',
          'Club leaders exploring co-created REACH partnerships after Haridwar',
        ],
      },
    ],
  },
  VERIFIED_STATE_CONTENT.uttarakhand,
);

export const FULL_VERIFIED_STATE_EXPERIENCES: StateExperience[] = [
  biharExperience,
  telanganaExperience,
  assamExperience,
  madhyaPradeshExperience,
  uttarakhandExperience,
];

export const FULL_VERIFIED_STATE_SLUGS = new Set(
  FULL_VERIFIED_STATE_EXPERIENCES.map(s => s.slug),
);
