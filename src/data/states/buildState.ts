import type { StatePageData, StateSlug, StateTheme, ProgramFocus } from '@/types/statePage';
import { STATE_IMAGES, STATE_COORDS } from './constants';

interface StateConfig {
  slug: StateSlug;
  name: string;
  shortName: string;
  tagline: string;
  heroSubtitle: string;
  theme: StateTheme;
  programFocus: ProgramFocus;
  imageIndex: number;
  womenReached: number;
  villages: number;
  centres: number;
  campuses?: number;
  capital: string;
  highlight: string;
}

export function buildState(c: StateConfig): StatePageData {
  const img = STATE_IMAGES[c.imageIndex % STATE_IMAGES.length];
  const isNational = c.slug === 'national';
  const focusCare = c.programFocus === 'care' || c.programFocus === 'both';
  const focusReach = c.programFocus === 'reach' || c.programFocus === 'both';

  return {
    slug: c.slug,
    name: c.name,
    shortName: c.shortName,
    tagline: c.tagline,
    heroSubtitle: c.heroSubtitle,
    theme: c.theme,
    programFocus: c.programFocus,
    heroImage: img,
    mapCoords: STATE_COORDS[c.slug],
    mission: isNational
      ? 'Saukhyam REACH and CARE programmes unite rural empowerment with campus sustainability - healing periods and the planet across India.'
      : `In ${c.name}, Saukhyam bridges REACH rural outreach and CARE campus action - bringing chemical-free menstrual health, livelihoods, and climate-conscious choices to ${c.highlight}.`,
    missionPoints: [
      focusReach ? 'Satellite centres training rural women in pad manufacturing' : 'Urban campus ambassador networks driving reusable adoption',
      'Community health workshops breaking menstrual taboos',
      'Distribution of starter packs to underserved women and girls',
      focusCare ? 'College workshops on sustainable menstruation and CO₂ impact' : 'Partnerships with panchayats and local NGOs',
    ].filter(Boolean) as string[],
    stats: [
      { value: c.womenReached, suffix: '+', label: 'Women Reached' },
      { value: c.villages, suffix: '+', label: isNational ? 'Districts Active' : 'Villages & Communities' },
      { value: c.centres, suffix: '+', label: 'Satellite Centres' },
      { value: c.campuses ?? Math.round(c.centres * 1.5), suffix: '+', label: 'CARE Campus Partners' },
    ],
    campaigns: [
      {
        id: '1',
        title: focusReach ? `${c.shortName} Village Switch Drive` : `${c.shortName} Campus Green Periods`,
        description: `Flagship ${focusReach ? 'REACH' : 'CARE'} campaign distributing starter packs and training local ambassadors across ${c.highlight}.`,
        category: focusReach ? 'reach' : 'care',
        status: 'active',
        image: STATE_IMAGES[(c.imageIndex + 1) % STATE_IMAGES.length],
      },
      {
        id: '2',
        title: 'HEAL Wellness Circles',
        description: 'Three-month healing cohorts for women with PCOS, cramps, and heavy flow - combining reusables with lifestyle guidance.',
        category: 'health',
        status: 'active',
        image: STATE_IMAGES[(c.imageIndex + 2) % STATE_IMAGES.length],
      },
      {
        id: '3',
        title: 'Zero-Waste Period Challenge',
        description: 'Tracking disposable pad reduction in schools and colleges - measurable environmental impact for NAAC reporting.',
        category: 'sustainability',
        status: 'upcoming',
        image: STATE_IMAGES[(c.imageIndex + 3) % STATE_IMAGES.length],
      },
    ],
    outreach: [
      { title: 'Panchayat Awareness Sessions', description: 'Breaking taboos with village leaders and ASHA workers.', location: c.capital, date: 'Ongoing' },
      { title: 'School Menstrual Health Days', description: 'Age-appropriate education for adolescent girls.', location: `Rural ${c.shortName}`, date: 'Monthly' },
      { title: 'Saukhyam Sakhi Training', description: 'Local women trained as community health ambassadors.', location: 'Satellite centres', date: 'Quarterly' },
    ],
    healthcare: {
      title: 'Healthcare Initiatives',
      items: [
        'Free pad distribution at primary health centres',
        'Gynaecology camp partnerships for underserved women',
        'First-period kits for adolescent girls in government schools',
        'Postpartum recovery support in tribal and rural blocks',
      ],
    },
    sustainability: {
      title: 'Sustainability Programs',
      items: [
        'Banana fiber waste upcycling from local farms',
        'Disposable pad waste audits in partner institutions',
        'Tree plantation drives linked to every 100 switches',
        'Biodegradable pad end-of-life composting pilots',
      ],
    },
    timeline: [
      { year: '2017', title: 'First Outreach', description: `Initial REACH workshops in ${c.shortName}.` },
      { year: '2019', title: 'Satellite Centre', description: 'Local pad manufacturing unit established.' },
      { year: '2022', title: 'CARE Launch', description: 'Campus ambassador programme expanded to universities.' },
      { year: '2024', title: 'Scale-Up', description: `${c.womenReached.toLocaleString()}+ women reached statewide.` },
    ],
    partners: [
      { name: 'Amrita SeRVe', type: 'Implementation Partner' },
      { name: `${c.shortName} State Rural Livelihood Mission`, type: 'Government' },
      { name: 'Local SHG Federations', type: 'Community' },
      { name: 'District Health Department', type: 'Healthcare' },
    ],
    testimonials: [
      {
        quote: `Switching to Saukhyam changed how I experience periods - no rashes, less pain, and I feel proud supporting women in my village.`,
        name: 'Community Member',
        role: `${c.shortName} REACH beneficiary`,
      },
      {
        quote: 'Our campus reduced disposable waste by 40% in one semester. CARE made sustainability tangible for students.',
        name: 'Student Ambassador',
        role: `CARE Partner, ${c.capital}`,
      },
    ],
    volunteerRoles: [
      'Community workshop facilitator',
      'Campus ambassador lead',
      'Translation & local language content',
      'Event coordination & logistics',
      'Social media storytelling',
    ],
    faqs: [
      {
        question: `How can I volunteer in ${c.name}?`,
        answer: 'Fill out the volunteer form below or email reach@saukhyampads.org with your city and skills. We onboard volunteers quarterly.',
      },
      {
        question: 'What is the difference between REACH and CARE?',
        answer: 'REACH focuses on rural communities, satellite centres, and village outreach. CARE targets college campuses and urban youth sustainability.',
      },
      {
        question: 'Can my organisation partner with Saukhyam?',
        answer: 'Yes - NGOs, colleges, and CSR teams can partner for distribution, workshops, or sponsorship. Contact us via the partner page.',
      },
    ],
    gallery: [
      { id: 'g1', src: STATE_IMAGES[c.imageIndex % STATE_IMAGES.length], alt: `Outreach in ${c.shortName}`, category: 'outreach' },
      { id: 'g2', src: STATE_IMAGES[(c.imageIndex + 1) % STATE_IMAGES.length], alt: 'Training session', category: 'training' },
      { id: 'g3', src: STATE_IMAGES[(c.imageIndex + 2) % STATE_IMAGES.length], alt: 'Health workshop', category: 'health' },
      { id: 'g4', src: STATE_IMAGES[(c.imageIndex + 3) % STATE_IMAGES.length], alt: 'Campus event', category: 'campus' },
    ],
    analytics: [
      { label: 'Switch Rate', value: `${12 + (c.imageIndex % 8)}%`, change: '+2.1% this quarter' },
      { label: 'Pads Distributed', value: `${Math.round(c.womenReached * 0.4)}+`, change: 'Starter packs' },
      { label: 'CO₂ Prevented', value: `${Math.round(c.womenReached * 5.8 / 1000)}t`, change: 'Est. annual' },
    ],
  };
}
