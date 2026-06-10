import type { StateExperience } from './experienceData';

/* ════════════════════════════════════════════════════════════
   UTTAR PRADESH — verified content
   Sources:
   - https://saukhyam-in-up.lovable.app (initiatives, stats, UP contact, Amma)
   - LinkedIn li-2 (Kumbh Mela → UPSRLM MoU details)
   - Blog images: kumbhCover, kumbhGathering, kumbhMou, kumbhWomen
   ════════════════════════════════════════════════════════════ */

const HEAL = [
  { key: 'health' as const, title: 'Health',
    description: 'Chemical-free, breathable banana-fibre pads reduce rashes, infections and period pain — paired with HEAL wellness circles for PCOS, cramps and heavy flow.' },
  { key: 'environment' as const, title: 'Environment',
    description: 'Every reusable pad replaces hundreds of disposables, keeping plastic out of landfills and drains while cutting menstrual-waste carbon emissions.' },
  { key: 'active' as const, title: 'Active Living',
    description: 'Comfortable, leak-proof protection lets girls stay in school and women stay at work, sport and life — no period should pause a dream.' },
  { key: 'livelihoods' as const, title: 'Livelihoods',
    description: 'Rural women are trained and equipped to manufacture pads in satellite centres, turning agro-waste into dignified, steady income.' },
];

export const uttarPradeshExperience: StateExperience = {
  slug: 'uttar-pradesh',
  svgId: 'up',
  name: 'Uttar Pradesh',
  shortName: 'UP',
  capital: 'Lucknow',
  theme: 'green',
  enteredYear: 2025,
  heroBadge: 'UPSRLM · Akanksha · RML · AIIMS',
  sourceBlogSlug: 'ganga-kumbh-upsrlm-partnership',
  hero: {
    title: 'A quiet revolution in menstrual health, taking root across Uttar Pradesh.',
    subtitle: 'From government partnerships to leading hospitals and grassroots outreach — Saukhyam is bringing safe, sustainable, reusable cloth pads and menstrual health education to women and girls across UP.',
    image: '/images/blog/kumbhCover.jpg',
  },
  mapQuickStats: [
    { label: 'Partnerships', value: '4 major' },
    { label: 'Districts', value: '75+' },
    { label: 'MoU', value: 'UPSRLM signed' },
  ],
  stats: [
    { key: 'partnerships', label: 'Major Partnerships', value: 4 },
    { key: 'districts', label: 'Districts in Reach', display: '75+' },
    { key: 'mou', label: 'UPSRLM MoU', display: 'Signed' },
    { key: 'eco', label: 'Programme Model', display: 'Reusable & Safe' },
  ],
  about: {
    intro: 'Saukhyam Foundation is working hand in hand across Uttar Pradesh — through government, civil society, hospitals and academia — all rooted in one purpose: dignified, healthy, sustainable periods for every woman.',
    challenge: 'At the banks of the Ganga during Kumbh Mela, many Kalpavasis — rural women living near the Sangam — had little access to safe, sustainable menstrual products. Disposable waste and limited awareness kept millions of women and girls across UP from dignified, healthy periods.',
    action: 'Saukhyam has partnered with UPSRLM (Prerna), Akanksha Samiti, Dr. Ram Manohar Lohia Institute of Medical Sciences, and AIIMS Gorakhpur — running awareness sessions, MoU-backed rollouts, clinical research discussions, and community MHM programmes from Lucknow to Gorakhpur and Prayagraj.',
    impact: 'Ground-level rollout is under way: reusable cloth pads and MHM education are reaching women through self-help groups, hospitals, schools and community sessions — with a five-year UPSRLM MoU targeting 7–10 production centres and scope to serve roughly 5 crore rural menstruators under 30 across the state.',
  },
  heal: HEAL,
  initiatives: [
    {
      id: 'upsrlm',
      category: 'Government Partnership',
      title: 'UPSRLM — Uttar Pradesh State Rural Livelihoods Mission',
      badge: 'MoU signed March 2026 · Rollout under way',
      description: 'Saukhyam has formally partnered with the Uttar Pradesh State Rural Livelihood Mission (Prerna) to introduce reusable cloth pads to women across rural Uttar Pradesh. Through UPSRLM\'s wide network of self-help groups, the programme is taking eco-friendly menstrual care to women who previously had little or no access to safe options. Implementation is now under way at the ground level, with awareness sessions, distribution and training of community resource persons.',
      highlights: [
        'At the UPSRLM \'Prerna\' office, Vibhuti Khand, Lucknow',
        'Meeting with the leadership at SRLM, Lucknow',
        'With the Principal Secretary, Rural Development, Government of UP',
      ],
    },
    {
      id: 'akanksha',
      category: 'State-wide Awareness',
      title: 'Akanksha Samiti — Menstrual Health Across UP',
      badge: 'State-wide MHM MoU',
      description: 'In partnership with Akanksha Samiti, Saukhyam is taking the message of safe, sustainable menstruation to every district of Uttar Pradesh — with a special focus on rural communities and adolescent girls. Together, we are building a movement around Menstrual Health & Hygiene (MHM) education and the adoption of reusable sanitary pads as a healthier choice for women and the planet.',
      highlights: [
        'Hon\'ble Lt. Governor of J&K visiting the Saukhyam stall at Maha Kumbh, Prayagraj',
        'Certificate distribution programme with Akanksha Samiti, Prayagraj',
      ],
    },
    {
      id: 'rmlims',
      category: 'Clinical Research',
      title: 'Dr. Ram Manohar Lohia Institute, Lucknow',
      badge: 'Research study in discussion',
      description: 'Saukhyam is in active discussions with Dr. Ram Manohar Lohia Institute of Medical Sciences (RMLIMS), Lucknow, to undertake a clinical research study on the positive health impact of reusable cloth pads on young adolescent girls. Multiple meetings have been held with the Director, Registrar and senior medical leadership to shape the study design and pathway forward.',
      highlights: [
        'With the Director, RMLIMS, Lucknow',
        'With the Registrar, RML Hospital, Lucknow',
      ],
    },
    {
      id: 'aiims-gorakhpur',
      category: 'Community Outreach',
      title: 'AIIMS Gorakhpur — Community MHM Programmes',
      badge: 'Community sessions active',
      description: 'Saukhyam has engaged with the Department of Community & Family Medicine at AIIMS Gorakhpur to take menstrual health and hygiene education directly to the community. Several public awareness lectures on eco-friendly menstrual solutions have already been conducted, supported by senior doctors and faculty at the institute.',
      highlights: [
        'Public awareness lecture at AIIMS Gorakhpur',
        'Awareness session by Dr. Priyanka Yadav',
        'With doctors at AIIMS Gorakhpur',
      ],
    },
  ],
  districts: [
    { name: 'Lucknow', x: 0, y: 0, lat: 26.8467, lng: 80.9462, labelDx: 5, labelDy: 7, labelAnchor: 'start', note: 'UPSRLM Prerna office · RMLIMS research partnership' },
    { name: 'Gorakhpur', x: 0, y: 0, lat: 26.7606, lng: 83.3732, labelDy: 7, note: 'AIIMS Gorakhpur community MHM programmes' },
    { name: 'Prayagraj', x: 0, y: 0, lat: 25.4358, lng: 81.8463, labelDy: 7, note: 'Maha Kumbh outreach · Akanksha Samiti programmes' },
    { name: 'Barabanki', x: 0, y: 0, lat: 26.9398, lng: 81.1944, labelDx: -5, labelDy: 7, labelAnchor: 'end', note: 'First UPSRLM programme district (LinkedIn)' },
  ],
  beneficiaries: [
    {
      name: 'Women at Kumbh Mela',
      district: 'Prayagraj (Sangam)',
      quote: 'Pehle discomfort hota tha … ab lagta hai normal dinon jaisa hi hai.',
      source: 'Anju Bist, LinkedIn — From the Banks of the Ganga to 5 Crore Rural Menstruators',
    },
    {
      name: 'Dr. Priyanka Yadav',
      district: 'Uttar Pradesh',
      quote: 'For a long time I struggled with very irregular periods. Within six months of using Saukhyam, my periods became completely regular — coming on time every month, without any medication. It felt like my body was finding its natural rhythm again.',
      source: 'HEAL programme testimonial · State Director, Uttar Pradesh',
    },
  ],
  timeline: [
    {
      phase: '2025',
      title: 'Maha Kumbh Outreach',
      description: 'At the banks of the Ganga, Saukhyam invited rural Kalpavasis to switch to reusable pads and keep rivers clean. Hon\'ble Lt. Governor of J&K visited the Saukhyam stall at Maha Kumbh, Prayagraj. Certificate distribution programmes with Akanksha Samiti followed in Prayagraj.',
    },
    {
      phase: 'Mar 2026',
      title: 'UPSRLM MoU Signed',
      description: 'Saukhyam Foundation signed a MoU with Uttar Pradesh State Rural Livelihood Mission (Prerna). Ground-level rollout began — awareness sessions, distribution and training of community resource persons through UPSRLM\'s self-help group network, starting from Vibhuti Khand, Lucknow.',
    },
    {
      phase: '2026',
      title: 'Akanksha Samiti Partnership',
      description: 'MoU with Akanksha Samiti to spread MHM awareness state-wide across all districts of UP, with special focus on rural communities and adolescent girls.',
    },
    {
      phase: '2026',
      title: 'RMLIMS & AIIMS Gorakhpur',
      description: 'Active discussions with Dr. Ram Manohar Lohia Institute for adolescent girls\' research study. Community awareness lectures launched with AIIMS Gorakhpur Department of Community & Family Medicine.',
    },
  ],
  gallery: [
    {
      id: 'up-g1',
      src: '/images/blog/kumbhCover.jpg',
      alt: 'Saukhyam at Kumbh Mela — outreach on the banks of the Ganga, Uttar Pradesh',
      category: 'awareness',
    },
    {
      id: 'up-g2',
      src: '/images/blog/kumbhGathering.jpg',
      alt: 'Rural women gathering at Kumbh Mela to learn about reusable menstrual pads',
      category: 'communities',
    },
    {
      id: 'up-g3',
      src: '/images/blog/kumbhMou.jpg',
      alt: 'MoU signing ceremony between Saukhyam Foundation and Uttar Pradesh State Rural Livelihood Mission',
      category: 'workshops',
    },
    {
      id: 'up-g4',
      src: '/images/blog/kumbhWomen.jpg',
      alt: 'Women at Kumbh Mela choosing Saukhyam reusable pads for their families',
      category: 'communities',
    },
  ],
  csr: [],
  inspiration: {
    title: 'Guided by Amma\'s vision of compassion in action',
    body: 'Saukhyam is inspired and guided by Sri Mata Amritanandamayi Devi (Amma) — whose teaching of selfless service to women and the environment is at the heart of everything we do.',
    linkUrl: 'https://www.amritapuri.org',
    linkLabel: 'Visit amritapuri.org',
  },
  stateContact: {
    title: 'UP State Office',
    name: 'Dr. Priyanka Yadav',
    role: 'State Director, Uttar Pradesh',
    phone: '+91 70078 97725',
    email: 'depriyanka@saukhyampads.org',
    location: 'Lucknow, Uttar Pradesh',
  },
};
