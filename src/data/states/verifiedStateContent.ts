import type {
  Beneficiary, CsrDistrict, DistrictNode, ExpStat, StateExperience, TimelineItem,
} from './experienceData';

/* ════════════════════════════════════════════════════════════
   Verified state content — sourced from:
   - Anju Bist LinkedIn (https://www.linkedin.com/in/anjubist/)
   - Saukhyam Foundation LinkedIn (https://www.linkedin.com/company/saukhyam-foundation/)
   - Saukhyam LinkedIn posts in linkedinPosts.ts
   - https://saukhyampads.org/ (testimonials, blogs)
   - https://saukhyampads.org/pages/satellite-centres (hub-and-spoke, SRLM states)
   - Homepage impact figures: 30L+ women, 4137 villages, 11 states (amplify preview)
   Uttar Pradesh is maintained separately — not included here.
   ════════════════════════════════════════════════════════════ */

export interface VerifiedStatePatch {
  heroBadge?: string;
  hero?: Partial<Pick<StateExperience['hero'], 'title' | 'subtitle'>>;
  stats?: ExpStat[];
  about?: Partial<StateExperience['about']>;
  beneficiaries?: Beneficiary[];
  timeline?: TimelineItem[];
  districts?: DistrictNode[];
  sourceBlogSlug?: string;
  csr?: CsrDistrict[];
  /** When true, omit derived environment metrics (no verified state-level figures). */
  omitEnvironment?: boolean;
}

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

export const VERIFIED_STATE_CONTENT: Record<string, VerifiedStatePatch> = {
  maharashtra: {
    heroBadge: 'RMM · Main Mumbai partner',
    sourceBlogSlug: 'jyoti-rmm-mumbai-menstrual-awareness',
    hero: {
      title: 'From Nerul anganwadis to RMM-led Mumbai outreach — Saukhyam in Maharashtra.',
      subtitle: 'Jyoti Rajasthani Mahila Mandal (RMM) is Saukhyam\'s main associate in the Mumbai region — running workshops, free pad distribution, and campus outreach from Matunga to Karad, alongside BAIF programmes in Palghar and Nandurbar.',
    },
    stats: [
      { key: 'partnerships', label: 'Mumbai lead partner', display: 'Jyoti RMM' },
      { key: 'schools', label: 'CARE campuses', display: 'Karad · Mithibai' },
      { key: 'workshops', label: 'Since', display: '2023 — Nerul' },
      { key: 'districts', label: 'Rural', display: 'Nandurbar SHGs' },
    ],
    about: {
      intro: 'Saukhyam\'s Maharashtra work began in 2023 at a community anganwadi in Nerul and has grown through corporate sponsors, campus partnerships, intern-led outreach, and — since 2025 — a deep association with Jyoti Rajasthani Mahila Mandal (RMM) as the main Mumbai-region partner.',
      challenge: 'Women and students across the Mumbai metropolitan region, Konkan tribal blocks, and western Maharashtra needed trusted local partners to introduce reusables — not one-off distribution without follow-up.',
      action: '2023: First workshop at a Nerul anganwadi (Rotary Inner Wheel Foundation); second in Marol (Amazon); Lumina Datamatics subsidised distribution at seven Navi Mumbai colleges; BAIF programme in Jawahar (Palghar) and SHG production support in Nandurbar. 2024: SIES Graduate School of Technology (Engineering) students completed an internship developing a mobile app for Saukhyam. 2025: Management-student interns ran awareness workshops in schools and colleges; Inner Wheel Foundation ran a programme at a government residential school in Panvel; RMM became Saukhyam\'s main Mumbai associate — conducting workshops at their Mumbai premises, distributing pads for free, and leading sessions at Ramnarain Ruia College (Matunga), a school in Nala Sopara, and an ashram school in Dharampur, Gujarat; Project CARE launched at Krishna Vishwa Vidyapeeth, Karad; outreach at Mithibai College, Mumbai.',
      impact: 'RMM now anchors Saukhyam\'s Mumbai-region presence — combining free pad distribution with demonstration workshops that build lasting switch behaviour. From engineering interns building Saukhyam\'s app to CARE at Karad and Mithibai, Maharashtra shows campus, community, and SHG pathways working together.',
    },
    beneficiaries: [{
      name: 'Session participant',
      district: 'Mumbai',
      quote: 'I have used disposables for thirty years. Nobody ever showed me what else was possible. Today someone finally did.',
      source: 'Jyoti Rajasthani Mahila Mandal awareness session, Mumbai',
    }],
    timeline: [
      { phase: '2023', title: 'Nerul & Marol outreach', description: 'First Maharashtra workshop at a Nerul community anganwadi (Rotary Inner Wheel Foundation). Second workshop for community women in Marol (Amazon).' },
      { phase: '2023', title: 'Lumina campus distribution', description: 'Subsidised distribution at SIES (3 colleges), NMIMS Kharghar, DY Patil Belapur, YMT Ayurvedic College Belapur, and YMT School of Nursing Belapur.' },
      { phase: '2023', title: 'BAIF — Jawahar & Nandurbar', description: 'BAIF programme in Jawahar, Palghar district. Ongoing SHG support in Nandurbar for reusable pad production.' },
      { phase: '2024', title: 'SIES GST internship', description: 'Engineering students at SIES Graduate School of Technology completed an internship on mobile app development for Saukhyam.' },
      { phase: '2025', title: 'Intern-led workshops', description: 'Management-student interns conducted awareness workshops in schools and colleges across the region.' },
      { phase: '2025', title: 'Inner Wheel — Panvel', description: 'Inner Wheel Foundation programme at a government residential school in Panvel.' },
      { phase: '2025', title: 'RMM — main Mumbai partner', description: 'Association with Jyoti Rajasthani Mahila Mandal (RMM), Mumbai — main associate for the Mumbai region. RMM workshops at their premises, free pad distribution, Ramnarain Ruia College (Matunga), a school in Nala Sopara, and an ashram school in Dharampur, Gujarat.' },
      { phase: '2025', title: 'CARE — Karad & Mithibai', description: 'Project CARE at Krishna Vishwa Vidyapeeth, Karad. Outreach at Mithibai College, Mumbai.' },
    ],
    districts: [
      { name: 'Nerul', x: 72, y: 78, lat: 19.033, lng: 73.0297, note: '2023 first workshop · 2024 SIES GST app internship' },
      { name: 'Mumbai', x: 40, y: 48, lat: 19.076, lng: 72.8777, note: 'RMM premises · Mithibai College · free pad distribution' },
      { name: 'Matunga', x: 44, y: 52, lat: 19.0268, lng: 72.8534, note: 'RMM — Ramnarain Ruia College workshop' },
      { name: 'Panvel', x: 76, y: 84, lat: 18.9894, lng: 73.1175, note: '2025 — Inner Wheel, govt residential school' },
      { name: 'Nala Sopara', x: 28, y: 32, lat: 19.4618, lng: 72.7982, note: 'RMM — school awareness workshop' },
      { name: 'Karad', x: 18, y: 88, lat: 17.2896, lng: 74.1818, note: '2025 — Project CARE, Krishna Vishwa Vidyapeeth' },
    ],
    csr: [
      {
        name: 'RMM Mumbai partnership',
        narrative: 'Support Jyoti Rajasthani Mahila Mandal\'s free pad distribution and awareness workshops across the Mumbai region — Saukhyam\'s main local associate. Contact info@saukhyampads.org.',
      },
      {
        name: 'Nandurbar SHG production',
        narrative: 'Support women\'s self-help groups in Nandurbar working with BAIF on reusable pad production.',
      },
    ],
    omitEnvironment: true,
  },

  kerala: {
    heroBadge: 'Founded 2017 · Kerala hub',
    sourceBlogSlug: 'saukhyam-community-amritapuri-ammas-vision',
    hero: {
      title: 'Where Saukhyam began — Amritapuri, Kerala, and the hub that supplies India.',
      subtitle: 'Home to Saukhyam\'s central manufacturing hub, Amrita SeRVe village-adoption roots, and the community of changemakers gathered at Amma\'s ashram in Kollam.',
    },
    stats: [
      { key: 'partnerships', label: 'Founded', display: '2017 launch' },
      { key: 'districts', label: 'Production Hub', display: 'Kerala factory' },
      { key: 'mou', label: 'Model', display: 'Hub & spoke' },
      { key: 'eco', label: 'Roots', display: 'Amrita SeRVe · Amritapuri' },
    ],
    about: {
      intro: 'Kerala is Saukhyam\'s birthplace. The world\'s first reusable menstrual pad made from banana fibre was launched here in 2017, rooted in Amma\'s vision and Amrita University research that began in 2014.',
      challenge: 'Rural and underserved communities across Kerala — and later nationwide — needed menstrual products that were safe, affordable, and did not add to plastic waste.',
      action: 'A central manufacturing facility in Kerala serves as the hub in Saukhyam\'s hub-and-spoke model: banana fibre is processed and half-stitched pieces are sent to satellite centres across states for finishing, quality control, and local distribution. The Saukhyam community gathers at Amritapuri for renewal of purpose and shared mission.',
      impact: 'Kerala hosts Saukhyam\'s production hub and satellite units. Feature coverage in Mathrubhumi connected Saukhyam\'s Kerala community to its satellite centres and production story. Anju Bist, Managing Director, received the Women Transforming India Award from NITI Aayog (2022) for work that began here.',
    },
    beneficiaries: [{
      name: 'Saukhyam community member',
      district: 'Amritapuri',
      quote: 'When we gather at Amritapuri, it is more than a meeting — it is a renewal of why this work exists.',
      source: 'Saukhyam community gathering, Kerala',
    }],
    timeline: [
      { phase: '2014', title: 'Research begins', description: 'Saukhyam started as a DST-SEED funded research project at Amrita University, guided by Amma\'s vision that periods should be an experience of well-being.' },
      { phase: '2017', title: 'Pads launched', description: 'World\'s first reusable banana-fibre menstrual pad launched; Saukhyam Foundation formed to scale the mission.' },
      { phase: '2020s', title: 'Hub-and-spoke model', description: 'Central Kerala factory processes banana fibre; satellite centres across India finish and distribute pads locally.' },
      { phase: '2026', title: 'Community & media', description: 'Saukhyam changemakers gather at Amritapuri; Malayalam press features Amma and the Saukhyam community.' },
    ],
    districts: [
      { name: 'Kollam', x: 40, y: 72, lat: 8.8932, lng: 76.6141, note: 'Amritapuri · Saukhyam HQ region' },
      { name: 'Kochi', x: 55, y: 55, lat: 9.9312, lng: 76.2673, note: 'Central manufacturing hub' },
      { name: 'Thrissur', x: 48, y: 42, lat: 10.5276, lng: 76.2144, note: 'Satellite & outreach' },
    ],
    csr: [{
      name: 'Kerala satellite & production network',
      narrative: 'Support rural women trained in Saukhyam\'s hub-and-spoke production model — contact info@saukhyampads.org.',
    }],
    omitEnvironment: true,
  },

  bihar: {
    heroBadge: 'REACH · Musahar outreach',
    sourceBlogSlug: 'musahar-community-reusable-pads-bihar',
    hero: {
      title: 'Reaching Musahar girls and women — where dignity starts with one conversation.',
      subtitle: 'Partnering with SBI Foundation to distribute Saukhyam reusable pads among Musahar communities — an estimated 40 lakh people in Bihar alone, among India\'s most marginalised Dalit populations.',
    },
    stats: [
      { key: 'partnerships', label: 'Partner', display: 'SBI Foundation' },
      { key: 'districts', label: 'Community', display: 'Musahar outreach' },
      { key: 'workshops', label: 'Roots', display: '2013–14 villages' },
      { key: 'eco', label: 'History', display: 'Pre-2020 production' },
    ],
    about: {
      intro: 'Bihar is where Saukhyam\'s REACH work meets some of India\'s most underserved communities — including the Musahar Dalit community. "Musahar" literally means one who eats rats — a name rooted in extreme poverty, not choice. An estimated 40 lakh Musahars live in Bihar, with communities also across Uttar Pradesh, Jharkhand, West Bengal, and Nepal.',
      challenge: 'Anju Bist first encountered Musahar communities in 2013–14 while identifying villages for Amrita Vishwa Vidyapeetham teams — mud huts, pigs roaming freely, children out of school, girls married early, and little access to safe menstrual products. This was not decades ago; it was within the last generation.',
      action: 'Saukhyam started small in these communities: a tuition teacher, a health worker, one basti. Over time, children who chose education became young adults building different lives. When Mansi Kumari from SBI Foundation reached out to distribute reusable pads among Musahar girls and women in Bihar, the answer was immediate — yes. Bihar also hosted one of Saukhyam\'s pre-pandemic production centres (alongside Kerala, Odisha, Punjab, Uttar Pradesh, Uttarakhand, and West Bengal) before the hub-and-spoke model centred in Kerala.',
      impact: 'Menstrual health is not separate from poverty, education, or dignity — it is part of the same story. One product, one session, and one consistent conversation can shift a life trajectory. Saukhyam\'s Musahar outreach through SBI Foundation brings reusable pads and MHM education to communities mainstream programmes rarely reach.',
    },
    beneficiaries: [{
      name: 'Anju Bist',
      district: 'Bihar outreach',
      quote: 'How long before all 40 lakh Musahars in Bihar get that one chance? That question keeps us moving.',
      source: 'Anju Bist, LinkedIn — Reusable Pads for Musahar Girls and Women in Bihar',
    }],
    timeline: [
      { phase: '2013–14', title: 'Village identification', description: 'Amrita Vishwa Vidyapeetham teams identified backward villages in Bihar; first face-to-face contact with Musahar communities.' },
      { phase: '2013–14', title: 'One basti, one start', description: 'Intervention began with a tuition teacher, a health worker, and one basti — proof that scale is not required for impact to begin.' },
      { phase: 'Pre-2020', title: 'Production centre', description: 'Bihar hosted a Saukhyam village-level production centre under the distributed pre-pandemic model (saukhyampads.org/satellite-centres).' },
      { phase: '2025–26', title: 'SBI Foundation partnership', description: 'Mansi Kumari, SBI Foundation, partners with Saukhyam to distribute reusable pads among Musahar girls and women in Bihar.' },
      { phase: 'Ongoing', title: 'REACH expansion', description: 'Grassroots menstrual health work continues with NGO and foundation partners across Bihar.' },
    ],
    districts: [
      { name: 'Patna', x: 52, y: 42, lat: 25.5941, lng: 85.1376, note: 'REACH coordination' },
      { name: 'Gaya', x: 48, y: 58, lat: 24.7955, lng: 85.0002, note: 'Rural outreach' },
      { name: 'Muzaffarpur', x: 58, y: 32, lat: 26.1209, lng: 85.3647, note: 'Community programmes' },
    ],
    csr: [{
      name: 'Musahar community outreach',
      narrative: 'Partner with Saukhyam and SBI Foundation to extend reusable pad access and MHM education in Bihar\'s most marginalised communities.',
    }],
    omitEnvironment: true,
  },

  telangana: {
    heroBadge: 'Government partnership · Hyderabad',
    sourceBlogSlug: 'telangana-government-saukhyam-collaboration',
    hero: {
      title: 'When the state becomes a partner — scaling menstrual health through Telangana\'s institutions.',
      subtitle: 'A formal ceremony in Hyderabad with Telangana district government officials — plus SRLM satellite-centre development and real switch stories from women across the state.',
    },
    stats: [
      { key: 'partnerships', label: 'Partnership', display: 'Telangana Govt.' },
      { key: 'districts', label: 'Ceremony', display: 'Hyderabad' },
      { key: 'mou', label: 'SRLM', display: 'Satellite centres' },
      { key: 'workshops', label: 'Programme', display: 'REACH scale-up' },
    ],
    about: {
      intro: 'Telangana marks a significant step in Saukhyam\'s government partnerships — formalising collaboration with district administration, social welfare departments, and community health officers. Saukhyam also works with Telangana State Rural Livelihood Mission on satellite production centres capable of serving entire districts (saukhyampads.org/satellite-centres).',
      challenge: 'Government-administered communities and SHG networks reach millions of rural women — but need trusted product partners, trained facilitators, and honest conversations about what disposable pads may be doing to young bodies. Nearly 20–25% of menstruators are affected by PCOS — around 8 crore women and girls nationwide.',
      action: 'At a formal ceremony in Hyderabad, Saukhyam joined Telangana district government officials to sign and acknowledge a framework for taking REACH into government-administered communities — enabling access to thousands of government-administered women\'s SHG networks, anganwadis, and district health infrastructure. Under the hub-and-spoke model, women are trained in awareness workshops first; production training follows once distribution teams move inventory consistently for at least three months.',
      impact: 'When district collectors and social welfare administrations align behind menstrual health, community-level resistance drops and reach multiplies. Women like Laxmi in Hyderabad report that after four years with Saukhyam, severe pain eased, cycles became more regular, and skin issues improved — proof that the switch travels from policy tables to everyday life.',
    },
    beneficiaries: [{
      name: 'Laxmi',
      district: 'Hyderabad',
      quote: 'I dreaded periods. Severe pain, stiffening of the body, acne and hairfall. Periods came only once every 2 months. After 4 years with Saukhyam, pain is minimal, cycles are more regular, and skin issues improved.',
      source: 'Saukhyam user testimonial, saukhyampads.org',
    }],
    timeline: [
      { phase: '2021', title: 'REACH in Telangana', description: 'Community awareness and pad distribution programmes begin across Telangana districts.' },
      { phase: '2023+', title: 'SRLM engagement', description: 'Telangana listed among five SRLM partner states for district satellite production centres (with Haryana, MP, Maharashtra, Uttarakhand).' },
      { phase: '2025–26', title: 'Government formalisation', description: 'Formal ceremony in Hyderabad with Telangana district government officials to scale REACH through SHG and health infrastructure.' },
      { phase: 'Ongoing', title: 'District rollouts', description: 'Framework for government-administered community outreach under active implementation.' },
    ],
    districts: [
      { name: 'Hyderabad', x: 48, y: 52, lat: 17.385, lng: 78.4867, note: 'Government partnership ceremony' },
      { name: 'Warangal', x: 62, y: 38, lat: 17.9689, lng: 79.5941, note: 'REACH programmes' },
      { name: 'Karimnagar', x: 38, y: 32, lat: 18.4386, lng: 79.1288, note: 'Community outreach' },
    ],
    csr: [{
      name: 'Government-administered communities',
      narrative: 'Support Saukhyam\'s Telangana government partnership to reach SHG networks with reusable pads and MHM education.',
    }],
    omitEnvironment: true,
  },

  odisha: {
    heroBadge: 'HEAL · Bhubaneswar',
    sourceBlogSlug: 'heal-launch-bhubaneshwar-disposable-pads-health',
    hero: {
      title: 'HEAL in Bhubaneswar — asking whether disposable pads are affecting women\'s health.',
      subtitle: 'Launched at Nexus Esplanade Mall with Bhubaneswar Mayor Sulochana Das — data from 10,000+ girls showed 8 in 10 reporting period problems; over 5,000 young people shifted from disposables in one year.',
    },
    stats: [
      { key: 'partnerships', label: 'Programme', display: 'HEAL active' },
      { key: 'schools', label: 'HEAL cohort', display: '10,000+ girls' },
      { key: 'workshops', label: 'Switches', display: '5,000+ in 1 year' },
      { key: 'eco', label: 'Issue rate', display: '8/10 report problems' },
    ],
    about: {
      intro: 'Odisha is a HEAL programme stronghold — where Saukhyam asks hard questions about chemicals in disposable pads and supports girls facing cramps, rashes, irregular periods, and heavy bleeding.',
      challenge: 'Data from over 10,000 girls in the HEAL cohort showed around 8 in 10 reporting at least one menstrual health issue — cramps, rashes, irregular periods, or heavy bleeding. Chemicals in disposable pads including dioxins, SAP, and synthetic fragrance are under increasing scrutiny.',
      action: 'HEAL Launch at Nexus Esplanade Mall, Bhubaneswar brought Mayor Sulochana Das, CARE City Coordinator Madhusmita Mahapatra, and mentors who helped more than 5,000 young people shift away from disposable products in one year. Odisha also hosted a Saukhyam production centre before the hub-and-spoke model.',
      impact: 'HEAL is active in Bhubaneswar with plans to expand across Odisha. The programme encourages a six-month switch to reusables to observe health changes — because every girl deserves to know she cannot rule out what her pad is made of.',
    },
    beneficiaries: [{
      name: 'Saukhyam Foundation',
      district: 'Bhubaneswar',
      quote: 'We are not saying disposable pads are the only cause. We are saying we cannot rule them out — and every girl deserves to know that.',
      source: 'HEAL programme, Bhubaneswar launch',
    }],
    timeline: [
      { phase: 'Pre-2020', title: 'Production centre', description: 'Odisha hosted a Saukhyam village-level production centre under the pre-pandemic distributed model.' },
      { phase: '2024–25', title: 'HEAL data collection', description: 'HEAL programme analyses data from 10,000+ girls on period-related health issues.' },
      { phase: '2026', title: 'Nexus Esplanade launch', description: 'HEAL Launch in Bhubaneswar with Mayor Sulochana Das; 5,000+ young people shifted from disposables in one year.' },
      { phase: 'Next', title: 'Statewide expansion', description: 'HEAL active in Bhubaneswar with plans to expand across Odisha.' },
    ],
    districts: [
      { name: 'Bhubaneswar', x: 52, y: 48, lat: 20.2961, lng: 85.8245, note: 'HEAL Launch · Nexus Esplanade Mall' },
      { name: 'Cuttack', x: 58, y: 42, lat: 20.4625, lng: 85.883, note: 'HEAL outreach' },
      { name: 'Berhampur', x: 38, y: 68, lat: 19.3149, lng: 84.7941, note: 'Community programmes' },
    ],
    csr: [{
      name: 'HEAL expansion in Odisha',
      narrative: 'Support HEAL programme expansion across Odisha — bringing gynecologist-designed wellness support and reusable products to more girls.',
    }],
    omitEnvironment: true,
  },

  karnataka: {
    heroBadge: 'Government & campus partnerships',
    sourceBlogSlug: 'telangana-government-saukhyam-collaboration',
    hero: {
      title: 'Policy momentum, campus action, and rural satellite production in Karnataka.',
      subtitle: 'Listed alongside Bihar and Telangana as proof of India\'s menstrual health policy movement — with MoU-backed partnerships and district satellite centre development.',
    },
    stats: [
      { key: 'partnerships', label: 'Govt. collaboration', display: 'Active partner' },
      { key: 'mou', label: 'Documented', display: 'MoU signings' },
      { key: 'workshops', label: 'Programmes', display: 'REACH & CARE' },
      { key: 'eco', label: 'Policy', display: 'State MHM movement' },
    ],
    about: {
      intro: 'Karnataka is part of Saukhyam\'s expanding network of government partnerships — cited alongside Bihar and UPSRLM as evidence that menstrual health policy is moving at state level.',
      challenge: 'Urban campuses and rural blocks across Karnataka need both awareness and accessible, affordable reusable products — with local production to keep costs down.',
      action: 'Saukhyam conducts REACH awareness and CARE campus programmes across Karnataka. Documented MoU signings with partner organisations support satellite production and distribution. Saukhyam teams train rural women in awareness workshops before production training under the hub-and-spoke model.',
      impact: 'Karnataka represents the intersection of policy dialogue, institutional partnerships, and grassroots REACH — with satellite centre development aligned to serve entire districts.',
    },
    timeline: [
      { phase: '2019', title: 'Karnataka programmes begin', description: 'REACH expands from Bengaluru to North Karnataka blocks with SHG and panchayat partnerships.' },
      { phase: '2024–25', title: 'MoU partnerships', description: 'Formal MoU signings documented with partner organisations for production and distribution.' },
      { phase: '2025–26', title: 'Government collaboration', description: 'Karnataka cited among states where menstrual health policy is actively moving.' },
    ],
    districts: [
      { name: 'Bengaluru', x: 48, y: 62, lat: 12.9716, lng: 77.5946, note: 'CARE campus & urban outreach' },
      { name: 'Belagavi', x: 28, y: 38, lat: 15.8497, lng: 74.4977, note: 'North Karnataka REACH' },
      { name: 'Mysuru', x: 55, y: 72, lat: 12.2958, lng: 76.6394, note: 'Community programmes' },
    ],
    csr: [{
      name: 'Satellite production partnerships',
      narrative: 'Partner to support Karnataka satellite centres and rural women\'s training under Saukhyam\'s hub-and-spoke model.',
    }],
    omitEnvironment: true,
  },

  'madhya-pradesh': {
    heroBadge: 'SRLM · HEAL stories from Indore',
    sourceBlogSlug: 'pcos-and-reusable-pads',
    hero: {
      title: 'Satellite production, research from Indore, and real HEAL outcomes across Madhya Pradesh.',
      subtitle: 'Working with MP State Rural Livelihood Mission on district satellite centres — while women and researchers across the state document what switching to reusables can mean for PCOS, pain, and heavy flow.',
    },
    stats: [
      { key: 'partnerships', label: 'SRLM', display: 'Active collaboration' },
      { key: 'schools', label: 'Research', display: 'DAVV Indore' },
      { key: 'workshops', label: 'Training', display: 'Awareness first' },
      { key: 'eco', label: 'Supply chain', display: 'Fibre extraction planned' },
    ],
    about: {
      intro: 'Madhya Pradesh is one of five states where Saukhyam actively works with State Rural Livelihood Missions to set up satellite production centres — alongside Haryana, Maharashtra, Telangana, and Uttarakhand (saukhyampads.org/satellite-centres).',
      challenge: 'Rural women across MP need both menstrual health awareness and a sustainable income pathway — not one without the other. Prof Sujata Sharma, a research scholar at DAVV University, Indore, describes how costly disposable pads with toxic chemicals and plastics caused rashes and itching until she discovered reusables — turning personal relief into PhD research on social entrepreneurship and menstrual hygiene in rural India.',
      action: 'Saukhyam works with MP SRLM on awareness workshops and satellite centre setup. Under the hub-and-spoke model, only sewing machines are needed at new satellite centres; women train in awareness first, and production training follows once distribution teams move inventory consistently for at least three months. Plans are reported to establish banana-fibre extraction units in Madhya Pradesh to strengthen the local supply chain.',
      impact: 'Switch stories from across MP appear on saukhyampads.org: Sujata reports cyst-free ovaries after years of PCOS; Dr Jagrati saw heavy bleeding reduce within 2–3 months; Dharni went from 3–4 painkillers in two days to far more bearable periods in six months. Research from Indore now extends the personal impact Sujata experienced to other women in similar settings.',
    },
    beneficiaries: [
      {
        name: 'Sujata',
        district: 'Madhya Pradesh',
        quote: 'I suffered from PCOS for 12–15 years. After 3 years with Saukhyam, no rashes, no pain, blood color changed to healthy red, clots minimized. My ultrasound shows ovaries are cyst-free.',
        source: 'Saukhyam user testimonial, saukhyampads.org',
      },
      {
        name: 'Prof Sujata Sharma',
        district: 'Indore',
        quote: 'Saukhyam\'s reusable banana fiber pads transformed my menstrual experience — alleviating PMS symptoms, easing heavy flow, and regulating my cycle. I envision them as a catalyst for change across rural and semi-urban India.',
        source: 'My Saukhyam Journey blog, saukhyampads.org — DAVV University, Indore',
      },
    ],
    timeline: [
      { phase: '2021', title: 'MP outreach begins', description: 'REACH awareness programmes launch across Madhya Pradesh districts.' },
      { phase: '2023', title: 'Livelihood mission engagement', description: 'Saukhyam begins working with MP State Rural Livelihood Mission on menstrual health and satellite production.' },
      { phase: '2024', title: 'Research from Indore', description: 'Prof Sujata Sharma, DAVV University, publishes her Saukhyam journey and begins PhD research on menstrual hygiene social entrepreneurship.' },
      { phase: 'Ongoing', title: 'Satellite centre setup', description: 'District satellite production centres under development to serve entire districts under hub-and-spoke model.' },
    ],
    districts: [
      { name: 'Bhopal', x: 48, y: 52, lat: 23.2599, lng: 77.4126, note: 'SRLM coordination · REACH programmes' },
      { name: 'Indore', x: 38, y: 62, lat: 22.7196, lng: 75.8577, note: 'DAVV University · Prof Sujata Sharma research' },
      { name: 'Jabalpur', x: 58, y: 42, lat: 23.1815, lng: 79.9864, note: 'Satellite centre development' },
    ],
    csr: [{
      name: 'MP satellite production',
      narrative: 'Support Madhya Pradesh SRLM satellite centres training rural women in production and distribution — contact info@saukhyampads.org.',
    }],
    omitEnvironment: true,
  },

  uttarakhand: {
    heroBadge: 'SRLM · Shreyas Award · Haridwar',
    hero: {
      title: 'From Haridwar\'s Rotary conference to rural satellite production in Uttarakhand.',
      subtitle: 'Pre-pandemic production heritage, SRLM satellite-centre partnerships, and Shreyas Award 2025–26 recognition at Rotary District 3080 in Haridwar — connecting 100+ clubs across the north.',
    },
    stats: [
      { key: 'partnerships', label: 'SRLM', display: 'Satellite centres' },
      { key: 'districts', label: 'Recognition', display: 'Haridwar 2025–26' },
      { key: 'workshops', label: 'Network', display: 'Rotary 3080' },
      { key: 'eco', label: 'Heritage', display: 'Pre-2020 centre' },
    ],
    about: {
      intro: 'Uttarakhand is part of Saukhyam\'s north-India changemaker network — from pre-pandemic production roots to today\'s SRLM satellite partnerships. The Saukhyam community includes women from Kerala to Bihar to Uttarakhand, gathered around Amma\'s vision that periods should be an experience of well-being.',
      challenge: 'Hill and riverine communities across Uttarakhand need menstrual health access that works with local logistics and community trust structures — not one-off distribution without follow-up.',
      action: 'Uttarakhand hosted a Saukhyam production centre before the post-pandemic hub-and-spoke transition. Today Saukhyam works with Uttarakhand State Rural Livelihood Mission to set up district satellite centres. At the Rotary International District 3080 Annual District Conference in Haridwar, Anju Bist received the Shreyas Award 2025–26 alongside changemakers including Kruti Bharucha (Peepul) and Anshu Gupta (Goonj) — one of the district\'s highest honours for yeoman community service.',
      impact: 'Over 100 Rotary Clubs, Rotaract 3080, and Inner Wheel members serve communities across Chandigarh, Punjab, Haryana, Himachal Pradesh, and Uttarakhand — many exploring co-created REACH partnerships after Haridwar. Saukhyam\'s work began in 2014 as research guided by Amma; pads launched in 2017; Saukhyam Foundation formed in 2021 — with 30 lakh+ women and girls reached largely through REACH.',
    },
    beneficiaries: [{
      name: 'Saukhyam Foundation',
      district: 'Haridwar',
      quote: 'Recognition like this reminds us that meaningful change is sustained by leadership, vision, and communities working together.',
      source: 'Saukhyam Foundation LinkedIn — Shreyas Award, Rotary District 3080, Haridwar',
    }],
    timeline: [
      { phase: 'Pre-2020', title: 'Production centre', description: 'Uttarakhand hosted a Saukhyam village-level production centre under the distributed pre-pandemic model.' },
      { phase: '2014–17', title: 'Research to launch', description: 'Saukhyam began as a DST-SEED research project at Amrita University; world\'s first reusable banana-fibre pad launched in 2017.' },
      { phase: '2023', title: 'Uttarakhand programmes', description: 'REACH awareness and distribution expand across Uttarakhand districts.' },
      { phase: '2025–26', title: 'Shreyas Award, Haridwar', description: 'Anju Bist honoured with Shreyas Award at Rotary District 3080 Annual District Conference, Haridwar — alongside Peepul and Goonj founders.' },
      { phase: 'Ongoing', title: 'SRLM satellite centres', description: 'District satellite production centre development with Uttarakhand SRLM under hub-and-spoke model.' },
    ],
    districts: [
      { name: 'Dehradun', x: 42, y: 58, lat: 30.3165, lng: 78.0322, note: 'REACH coordination' },
      { name: 'Haridwar', x: 48, y: 48, lat: 29.9457, lng: 78.1642, note: 'Shreyas Award · Rotary District 3080 conference' },
      { name: 'Nainital', x: 55, y: 38, lat: 29.3803, lng: 79.4636, note: 'Hill district outreach' },
    ],
    csr: [{
      name: 'Uttarakhand satellite & outreach',
      narrative: 'Support SRLM satellite centres and Rotary-partnered REACH programmes across Uttarakhand\'s hill districts — contact info@saukhyampads.org.',
    }],
    omitEnvironment: true,
  },

  haryana: {
    heroBadge: 'SRLM satellite partnership',
    hero: {
      title: 'Rural satellite production and Chandigarh-region momentum.',
      subtitle: 'Part of Saukhyam\'s SRLM partnerships across Haryana, Maharashtra, Madhya Pradesh, Telangana, and Uttarakhand — with Rotary District 3080 serving Haryana communities.',
    },
    stats: [
      { key: 'partnerships', label: 'SRLM', display: 'Satellite centres' },
      { key: 'districts', label: 'Network', display: 'Rotary 3080' },
      { key: 'workshops', label: 'Programme', display: 'REACH' },
      { key: 'eco', label: 'Region', display: 'NCR & rural blocks' },
    ],
    about: {
      intro: 'Haryana is among the states where Saukhyam works with State Rural Livelihood Missions to establish satellite production centres capable of serving entire districts.',
      challenge: 'Fast-urbanising NCR districts and rural blocks across Haryana both need accessible reusable menstrual products and trained community facilitators.',
      action: 'Saukhyam partners with Haryana SRLM on satellite centre setup under the hub-and-spoke model. Rotary District 3080 — serving Haryana alongside Punjab, Himachal Pradesh, and Uttarakhand — connects club leaders exploring REACH partnerships.',
      impact: 'The Happyness for Her initiative and CARE/REACH programmes in the Chandigarh region create momentum that rural Haryana satellite centres can build on.',
    },
    omitEnvironment: true,
  },

  punjab: {
    heroBadge: 'CARE · Punjab University',
    hero: {
      title: 'Campus action and community momentum from Chandigarh to Punjab.',
      subtitle: 'CARE launched at Punjab University and CIHM under Happyness for Her — with Rotary and Inner Wheel committing to take REACH solutions into their communities.',
    },
    stats: [
      { key: 'partnerships', label: 'Campus', display: 'Punjab University' },
      { key: 'workshops', label: 'Initiative', display: 'CARE launched' },
      { key: 'eco', label: 'CSR', display: 'Happyness for Her' },
      { key: 'districts', label: 'Production history', display: 'Pre-2020 centre' },
    ],
    about: {
      intro: 'Punjab connects Saukhyam\'s campus CARE movement with rural REACH — through institutions like Punjab University and the Chandigarh-region Happyness for Her CSR initiative.',
      challenge: 'Campus students and rural women across Punjab need the same thing: visible, accessible reusables and honest conversations about what disposables may be doing to their bodies.',
      action: 'CARE (Campus Action for Reusable Essentials) launched at Punjab University and Chandigarh Institute of Hotel Management & Catering Technology — making reusables visible and accessible on campus. At Nexus Elante Mall, employees and retail partners consciously chose to switch under Happyness for Her. Punjab hosted a Saukhyam production centre before the hub-and-spoke model.',
      impact: 'If 200 girls on a campus switch to reusables, that prevents roughly 1 tonne of CO₂ emissions every year. Rotary Club and Inner Wheel members committed to taking these solutions into communities through REACH.',
    },
    timeline: [
      { phase: 'Pre-2020', title: 'Production centre', description: 'Punjab hosted a Saukhyam village-level production centre.' },
      { phase: '2025–26', title: 'Happyness for Her', description: 'CSR initiative at Nexus Elante Mall, Chandigarh — employees and partners switch to reusables.' },
      { phase: '2026', title: 'CARE campus launch', description: 'CARE launched at Punjab University and CIHM — reusables visible and accessible on campus.' },
    ],
    omitEnvironment: true,
  },

  'tamil-nadu': {
    heroBadge: 'Banana fibre supply chain',
    hero: {
      title: 'From Tamil Nadu\'s banana farms to pads that reach women nationwide.',
      subtitle: 'Banana pseudostem — the raw material for Saukhyam pads — is sourced from Tamil Nadu, with plans for fibre extraction units in the state.',
    },
    stats: [
      { key: 'partnerships', label: 'Supply chain', display: 'Banana fibre' },
      { key: 'eco', label: 'Agro-waste', display: 'Pseudostem use' },
      { key: 'workshops', label: 'Programmes', display: 'REACH & CARE' },
      { key: 'districts', label: 'Plans', display: 'Extraction units' },
    ],
    about: {
      intro: 'Tamil Nadu is central to Saukhyam\'s supply chain — banana stems from the state feed the banana-fibre processing that becomes pad filling nationwide.',
      challenge: 'Tonnes of banana pseudostem agro-waste is left on farms while women across India lack affordable, safe menstrual products.',
      action: 'Saukhyam sources banana fibre from Tamil Nadu for its central Kerala hub. Plans are underway to set up extraction units in Tamil Nadu (and Madhya Pradesh) to shorten the supply chain. REACH and CARE programmes operate across Tamil Nadu districts.',
      impact: 'Every pad connects Tamil Nadu\'s agro-waste economy to rural women\'s health — turning farm byproduct into dignity and income.',
    },
    omitEnvironment: true,
  },

  'west-bengal': {
    heroBadge: 'REACH · Production heritage',
    hero: {
      title: 'Grassroots REACH and a legacy of local production in West Bengal.',
      subtitle: 'West Bengal hosted a Saukhyam production centre before the hub-and-spoke model — and Musahar communities here, as in Bihar, face the same need for dignified menstrual care.',
    },
    stats: [
      { key: 'partnerships', label: 'History', display: 'Production centre' },
      { key: 'districts', label: 'Communities', display: 'Musahar presence' },
      { key: 'workshops', label: 'Programme', display: 'REACH' },
      { key: 'eco', label: 'Model today', display: 'Hub & spoke' },
    ],
    about: {
      intro: 'West Bengal is part of Saukhyam\'s eastern India REACH footprint — with historical roots as a pre-pandemic production state.',
      challenge: 'Musahar and other marginalised communities exist across West Bengal as well as Bihar — estimated in the lakhs — with extreme poverty limiting access to safe menstrual products.',
      action: 'West Bengal hosted a Saukhyam production centre under the pre-pandemic distributed model. Today, REACH programmes bring awareness and reusable pads through community sessions and partner NGOs.',
      impact: 'Saukhyam\'s hub-and-spoke model now supplies West Bengal from the central Kerala factory — while local teams focus on distribution, awareness, and community trust.',
    },
    omitEnvironment: true,
  },

  assam: {
    heroBadge: 'REACH · Northeast India · CARE',
    hero: {
      title: 'Menstrual health outreach in India\'s Northeast — from campus changemakers to rural REACH.',
      subtitle: 'Assam is part of Saukhyam\'s expanding REACH network — with students from Assam joining national CARE campus teams and rural communities reached through the hub-and-spoke supply model from Kerala.',
    },
    stats: [
      { key: 'partnerships', label: 'Programme', display: 'REACH & CARE' },
      { key: 'workshops', label: 'Network', display: 'Pan-India CARE' },
      { key: 'eco', label: 'Reach', display: '30L+ nationwide' },
      { key: 'districts', label: 'Region', display: 'Northeast India' },
    ],
    about: {
      intro: 'Assam is among the northeastern states where Saukhyam\'s REACH programme brings menstrual health awareness and reusable pads to rural and underserved communities — supplied through the Kerala hub under the post-pandemic hub-and-spoke model.',
      challenge: 'Remote Northeast communities face logistical barriers to menstrual product access and limited open conversation about period health. Saukhyam\'s mission — rooted in Amma\'s 2013 village-adoption work — began because girls dropped out of school and women lacked access to clean menstrual products.',
      action: 'Saukhyam\'s national CARE network includes changemakers from Assam. At Azim Premji University, CARE student lead Pooja Gopal\'s team brings together students from Mumbai, Gorakhpur, Assam, and beyond — working to help ~200 girls on campus switch to reusables (preventing roughly 1 tonne of CO₂ emissions per year if successful). Awareness videos in multiple Indian languages support local REACH facilitators across the Northeast.',
      impact: 'Since launching Saukhyam Pads in 2017, the Foundation has reached over 30 lakh women and girls largely through REACH — with Assam-connected campus leaders and field teams extending that mission into India\'s Northeast. Dr Ridima Kamal and colleagues represent Saukhyam at national women-led social impact gatherings, reflecting the team behind the field work.',
    },
    beneficiaries: [{
      name: 'CARE campus participant',
      district: 'Pan-India network',
      quote: 'We thought we were doing a workshop. By the end, we had a plan. And four of us had already decided to switch.',
      source: 'CARE cohort participant — Saukhyam Foundation LinkedIn',
    }],
    timeline: [
      { phase: '2013', title: 'Amrita SeRVe roots', description: 'Mata Amritanandamayi Math adopted 100 villages across India; lack of clean menstrual products identified as a driver of school dropout (saukhyampads.org).' },
      { phase: '2017', title: 'Saukhyam launch', description: 'World\'s first reusable banana-fibre pad launched; REACH begins scaling to underserved communities nationwide.' },
      { phase: '2022', title: 'REACH expansion', description: 'Saukhyam REACH programmes extend into Assam through partner NGOs and field teams.' },
      { phase: '2026', title: 'CARE campus network', description: 'Students from Assam join Azim Premji University CARE team led by Pooja Gopal — campus climate action through sustainable menstruation.' },
    ],
    districts: [
      { name: 'Guwahati', x: 52, y: 55, lat: 26.1445, lng: 91.7362, note: 'REACH coordination · Northeast hub' },
      { name: 'Dibrugarh', x: 68, y: 28, lat: 27.4728, lng: 94.912, note: 'Community outreach' },
      { name: 'Jorhat', x: 58, y: 38, lat: 26.7509, lng: 94.2037, note: 'Rural MHM programmes' },
    ],
    csr: [{
      name: 'Northeast community outreach',
      narrative: 'Partner to sponsor REACH awareness sessions and reusable pad access in Assam\'s rural communities — contact info@saukhyampads.org.',
    }],
    omitEnvironment: true,
  },

  rajasthan: {
    heroBadge: 'REACH · Desert communities',
    hero: {
      title: 'Low-water menstrual care for Rajasthan\'s desert districts.',
      subtitle: 'Saukhyam\'s REACH programme brings reusable pads and practical washing guidance to communities where water scarcity makes menstrual hygiene especially challenging.',
    },
    stats: [
      { key: 'partnerships', label: 'Programme', display: 'REACH' },
      { key: 'workshops', label: 'Approach', display: 'Low-water care' },
      { key: 'eco', label: 'Languages', display: 'Hindi awareness videos' },
      { key: 'districts', label: 'Focus', display: 'Desert blocks' },
    ],
    about: {
      intro: 'Rajasthan\'s Thar desert districts face acute water scarcity — making both disposable access and washing practices a barrier to menstrual dignity.',
      challenge: 'Women in desert villages often lack affordable products and practical guidance for maintaining reusables with minimal water.',
      action: 'Saukhyam REACH teams conduct awareness workshops with low-water care protocols — pairing reusable pads with guidance adapted to desert conditions. Saukhyam awareness videos are available in Hindi and other regional languages.',
      impact: 'Reusable pads reduce recurring cost and waste while Saukhyam\'s low-water protocols address the specific barrier desert communities face.',
    },
    omitEnvironment: true,
  },

  gujarat: {
    heroBadge: 'REACH · SHG partnerships',
    hero: {
      title: 'Self-help groups and sustainable menstrual care across Gujarat.',
      subtitle: 'Saukhyam awareness videos support rural resellers in Gujarati — connecting SHG networks with reusable pad training and distribution.',
    },
    stats: [
      { key: 'partnerships', label: 'Network', display: 'SHG federations' },
      { key: 'workshops', label: 'Language', display: 'Gujarati videos' },
      { key: 'eco', label: 'Programme', display: 'REACH' },
      { key: 'districts', label: 'Focus', display: 'Coastal & tribal' },
    ],
    about: {
      intro: 'Gujarat\'s SHG federations and coastal/tribal districts are natural partners for Saukhyam\'s REACH and livelihood model.',
      challenge: 'Self-help groups in Gujarat\'s tribal and coastal districts need a sustainable product that creates income while addressing menstrual health.',
      action: 'Saukhyam conducts awareness workshops and partners with SHGs for distribution. Awareness videos in Gujarati support rural resellers and community health ambassadors.',
      impact: 'SHG-led distribution turns menstrual dignity into a community enterprise — aligned with Saukhyam\'s hub-and-spoke production model.',
    },
    omitEnvironment: true,
  },

  'andhra-pradesh': {
    heroBadge: 'REACH · Banana belt',
    hero: {
      title: 'Agro-waste to dignity — REACH across Andhra Pradesh.',
      subtitle: 'Andhra Pradesh\'s banana-growing regions connect naturally to Saukhyam\'s banana-fibre pad model — with REACH programmes in coastal and Rayalaseema districts.',
    },
    stats: [
      { key: 'partnerships', label: 'Programme', display: 'REACH' },
      { key: 'eco', label: 'Material', display: 'Banana fibre' },
      { key: 'workshops', label: 'Languages', display: 'Telugu videos' },
      { key: 'districts', label: 'Region', display: 'Coastal AP' },
    ],
    about: {
      intro: 'Andhra Pradesh combines agricultural banana waste with rural women\'s need for safe, affordable menstrual products — a natural fit for Saukhyam\'s model.',
      challenge: 'Rayalaseema and coastal communities need both product access and income opportunities tied to local agriculture.',
      action: 'Saukhyam REACH programmes operate across Andhra Pradesh with awareness sessions in schools and communities. Telugu-language awareness videos support local facilitators.',
      impact: 'Banana fibre from the region can feed Saukhyam\'s supply chain while local women distribute and advocate for reusables in their districts.',
    },
    omitEnvironment: true,
  },

  chhattisgarh: {
    heroBadge: 'REACH · Tribal blocks',
    hero: {
      title: 'REACH in Chhattisgarh\'s tribal and rural communities.',
      subtitle: 'Part of Saukhyam\'s nationwide village-adoption roots through Amrita SeRVe — bringing MHM awareness and reusable pads to underserved blocks.',
    },
    stats: [
      { key: 'partnerships', label: 'Roots', display: 'Amrita SeRVe' },
      { key: 'workshops', label: 'Programme', display: 'REACH' },
      { key: 'eco', label: 'Focus', display: 'Tribal outreach' },
      { key: 'districts', label: 'Region', display: 'Central India' },
    ],
    about: {
      intro: 'Chhattisgarh is among the 20 states where Amrita SeRVe identified remote villages for adoption from 2013 — the same journey that led to Saukhyam\'s founding.',
      challenge: 'Tribal blocks in Bastar and surrounding districts have thin menstrual-health infrastructure and limited product access.',
      action: 'Saukhyam REACH teams conduct panchayat sessions and school menstrual-health days with SHG partnerships — following the awareness-first, production-second satellite model.',
      impact: 'Community health ambassadors trained through REACH create lasting local capacity beyond any single distribution event.',
    },
    omitEnvironment: true,
  },

  jharkhand: {
    heroBadge: 'REACH · Tribal outreach',
    hero: {
      title: 'Earned trust before giving a pad — REACH in Jharkhand\'s tribal villages.',
      subtitle: 'Musahar and tribal communities in Jharkhand face the same extreme poverty Anju Bist first documented in 2013–14 — Saukhyam REACH goes where conversations had never begun.',
    },
    stats: [
      { key: 'partnerships', label: 'Communities', display: 'Tribal villages' },
      { key: 'workshops', label: 'Approach', display: 'Trust-first REACH' },
      { key: 'eco', label: 'Linked states', display: 'Bihar · WB · UP' },
      { key: 'districts', label: 'Programme', display: 'MHM education' },
    ],
    about: {
      intro: 'Jharkhand\'s forested tribal villages are among the hardest places to start a conversation about menstruation — and among the most important.',
      challenge: 'Musahar communities also exist in Jharkhand alongside Bihar and West Bengal. Period poverty and stigma keep girls out of school and women out of economic participation.',
      action: 'Saukhyam REACH teams go where conversations had never begun — staying until trust is built before introducing reusable pads. The approach mirrors Bihar Musahar outreach: one session, one consistent support system.',
      impact: 'Tribal girls and women in Jharkhand receive MHM education and reusable pad access through partners who understand that intervention does not need scale to start working — it needs intent.',
    },
    omitEnvironment: true,
  },

  'himachal-pradesh': {
    heroBadge: 'REACH · Hill districts',
    hero: {
      title: 'Mountain communities and the Rotary network across Himachal Pradesh.',
      subtitle: 'Rotary District 3080 serves Himachal Pradesh alongside Punjab, Haryana, and Uttarakhand — connecting club leaders with Saukhyam\'s REACH programmes in hill districts.',
    },
    stats: [
      { key: 'partnerships', label: 'Network', display: 'Rotary 3080' },
      { key: 'workshops', label: 'Programme', display: 'REACH' },
      { key: 'eco', label: 'Region', display: 'Hill districts' },
      { key: 'districts', label: 'Focus', display: 'Rural HP' },
    ],
    about: {
      intro: 'Himachal Pradesh\'s hill districts present unique logistics for menstrual product distribution — and strong community networks through Rotary and Inner Wheel.',
      challenge: 'Scattered hill villages need facilitators who can travel between communities and sustain awareness beyond a single camp.',
      action: 'Rotary District 3080 club leaders across Himachal Pradesh explore REACH partnerships with Saukhyam following the Shreyas Award conference in Haridwar. REACH awareness sessions operate in HP districts.',
      impact: 'Institutional networks and grassroots REACH combine to reach women in Himachal\'s rural blocks with reusables and MHM education.',
    },
    omitEnvironment: true,
  },
};

/** Re-export HEAL cards for states that need local copy (optional). */
export { HEAL as VERIFIED_HEAL_CARDS };
