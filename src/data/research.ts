// ═══════════════════════════════════════════════════
//  RESEARCH DATA - Peer-Reviewed Studies on
//  Chemicals in Disposable Menstrual Products
// ═══════════════════════════════════════════════════

export interface ResearchStudy {
  id: string;
  number: number;
  title: string;
  authors: string;
  journal: string;
  year: number;
  summary: string;
  category: 'chemicals' | 'india-specific' | 'reproductive' | 'heavy-metals' | 'phthalates' | 'vocs' | 'safety' | 'pcos' | 'mechanistic';
  paperUrl?: string;
}

export interface ResearchSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  context: string;
  studies: ResearchStudy[];
}

// ── Section 1: The Hidden Dangers (2024 compilation) ──
// These studies were first compiled when Saukhyam started approaching doctors.
// Doctors were more willing to listen after reviewing this evidence.

export const hiddenDangersStudies: ResearchStudy[] = [
  {
    id: 'hd-1',
    number: 1,
    title: 'Toxic Chemicals Are Present And Can Be Absorbed',
    authors: 'Marroquin, Joanna, et al.',
    journal: 'BJOG: An International Journal of Obstetrics & Gynaecology',
    year: 2024,
    summary: 'Conducted a systematic review revealing the widespread presence of endocrine-disrupting chemicals like phthalates, volatile organic compounds, dioxins and fragrances in commercial menstrual products. These toxins can be absorbed through the skin or mucosal tissues, especially in the highly permeable vaginal area.',
    category: 'chemicals',
    paperUrl: 'https://doi.org/10.1111/1471-0528.17670',
  },
  {
    id: 'hd-2',
    number: 2,
    title: 'India-Specific Evidence: Health and Environmental Concerns',
    authors: 'Kumar, Binay, et al.',
    journal: 'Environmental Science and Pollution Research',
    year: 2024,
    summary: 'Focused on the Indian market, reporting high levels of toxic compounds in popular sanitary napkin brands, including pesticide residues and heavy metals like lead, cadmium and mercury. Links exposure to these chemicals with hormonal imbalances, infertility and chronic inflammation. Furthermore, Indian sanitary pads contain higher concentrations of these hazardous chemicals compared to products sold in developed countries like the USA, Europe, and Japan.',
    category: 'india-specific',
    paperUrl: 'https://doi.org/10.1007/s11356-024-33552-0',
  },
  {
    id: 'hd-3',
    number: 3,
    title: 'Direct Impact on Reproductive Health',
    authors: 'Gaikwad, Mayuri K., et al. & Avhad, Pooja, et al.',
    journal: 'Research Journal of Pharmacology and Pharmacodynamics',
    year: 2023,
    summary: 'Emphasized how repeated exposure to endocrine-disrupting chemicals in sanitary products disrupts the endocrine system, affecting ovulation and menstrual cycles. Findings show potential links to delayed menarche, irregular periods, painful cramps and PCOS-like symptoms in long-term users.',
    category: 'reproductive',
  },
  {
    id: 'hd-4',
    number: 4,
    title: 'Heavy Metals Across Global Brands',
    authors: 'Ma, Jiayi, et al.',
    journal: 'Environmental Technology & Innovation',
    year: 2024,
    summary: 'Tested sanitary napkins from seven countries (China, Japan, South Korea, USA, UK, Australia and Germany) and found dangerous levels of heavy metals, including arsenic and lead. These metals are known to accumulate in the body and have been linked to neurotoxicity and reproductive system damage.',
    category: 'heavy-metals',
    paperUrl: 'https://doi.org/10.1016/j.eti.2024.103606',
  },
  {
    id: 'hd-5',
    number: 5,
    title: 'Phthalates: A Silent Threat',
    authors: 'Tang, Zhenwu, et al.',
    journal: 'Environmental Science & Technology',
    year: 2019,
    summary: 'Identified phthalates (plasticizers commonly used in pad backings and adhesives) in sanitary napkins from six countries (Japan, South Korea, USA, UK, Australia and Germany). Phthalates are known endocrine disruptors linked to early puberty, irregular cycles, and even ovarian dysfunction.',
    category: 'phthalates',
    paperUrl: 'https://doi.org/10.1021/acs.est.9b04714',
  },
];

// ── Section 2: More Research Papers (2025 compilation) ──
// 11 recent, peer-reviewed papers from high-quality journals on
// chemicals/toxins in disposable menstrual products and related health impacts
// (including evidence around PCOS).

export const recentResearchStudies: ResearchStudy[] = [
  {
    id: 'rr-1',
    number: 1,
    title: 'Chemical characterization of menstrual & intimate-care products',
    authors: 'Various authors',
    journal: 'Environment International',
    year: 2025,
    summary: 'Broad survey of chemicals present across product types - phthalates, parabens, phenols. Highlights potential for endocrine exposure and a need for transparency in menstrual product composition.',
    category: 'chemicals',
  },
  {
    id: 'rr-2',
    number: 2,
    title: 'Safety assessment of commercial sanitary pads: Cytotoxicity, VOCs, and microplastics',
    authors: 'Various authors',
    journal: 'Journal of Hazardous Materials',
    year: 2025,
    summary: 'Found toluene in most pads, microplastic shedding and in-vitro cytotoxicity signals. Demonstrates that commercial pads release harmful substances during normal use.',
    category: 'vocs',
  },
  {
    id: 'rr-3',
    number: 3,
    title: 'Chemicals in menstrual products: a systematic review',
    authors: 'Marroquin, Joanna, et al.',
    journal: 'BJOG',
    year: 2024,
    summary: 'Synthesis of evidence on VOCs, phthalates, metals and other constituents in pads/tampons. Identifies data gaps and calls for standardized testing and disclosure.',
    category: 'chemicals',
  },
  {
    id: 'rr-4',
    number: 4,
    title: 'Tampons as a source of exposure to metal(loid)s',
    authors: 'Various authors',
    journal: 'Environment International',
    year: 2024,
    summary: 'Measured metals (e.g., lead, cadmium, others) in tampons and estimated exposures. Underscores need for stricter quality control across menstrual products.',
    category: 'heavy-metals',
  },
  {
    id: 'rr-5',
    number: 5,
    title: 'Sanitary pads & diapers contain higher phthalate contents than common plastic goods',
    authors: 'Various authors',
    journal: 'PLOS ONE',
    year: 2019,
    summary: 'Reported comparatively high phthalate levels in pads/diapers, raising concern about intimate exposure routes. Products designed for intimate contact had higher chemical loads than everyday plastics.',
    category: 'phthalates',
  },
  {
    id: 'rr-6',
    number: 6,
    title: 'Risk assessment of VOCs detected in sanitary pads',
    authors: 'Various authors',
    journal: 'Journal of Toxicology and Environmental Health, Part A',
    year: 2019,
    summary: 'Identified multiple volatile organic compounds and performed exposure/risk assessment for pad users. Quantifies the level of chemical exposure during normal pad usage.',
    category: 'vocs',
  },
  {
    id: 'rr-7',
    number: 7,
    title: 'Safety evaluation of absorbent hygiene pads: review of constituents & risk assessment',
    authors: 'Various authors',
    journal: 'Sustainability',
    year: 2018,
    summary: 'Reviews hazard identification and exposure assessments for pad constituents. Outlines conservative models used by regulators/industry, revealing gaps in current safety standards.',
    category: 'safety',
  },
  {
    id: 'rr-8',
    number: 8,
    title: 'Bisphenol A (BPA) and PCOS in humans: systematic review',
    authors: 'Various authors',
    journal: 'International Journal of Gynecology & Obstetrics',
    year: 2024,
    summary: 'Across 22 human studies, most showed higher BPA exposure among women with PCOS. Establishes a clear epidemiological association between BPA exposure and polycystic ovary syndrome.',
    category: 'pcos',
  },
  {
    id: 'rr-9',
    number: 9,
    title: 'Phthalates & PCOS: systematic literature review',
    authors: 'Various authors',
    journal: 'PubMed Indexed Review',
    year: 2023,
    summary: 'Summarizes human data suggesting associations between prenatal or higher phthalate exposure and PCOS features. Emphasizes the need for better-designed longitudinal studies.',
    category: 'pcos',
  },
  {
    id: 'rr-10',
    number: 10,
    title: 'BPA exposure and PCOS-like phenotypes (mechanistic)',
    authors: 'Various authors',
    journal: 'Reproductive BioMedicine Online',
    year: 2025,
    summary: 'Adolescent BPA exposure induced PCOS-like syndrome and fertility effects in rats. Supports biological plausibility of endocrine-disrupting chemical mechanisms - not just correlational but causal.',
    category: 'mechanistic',
  },
  {
    id: 'rr-11',
    number: 11,
    title: 'Metabolomics in BPA-exposed PCOS patients',
    authors: 'Various authors',
    journal: 'Environmental Science and Pollution Research',
    year: 2023,
    summary: 'Metabolomics analysis suggests disrupted steroid and lipid pathways in BPA-exposed PCOS patients. Reveals the molecular mechanisms through which endocrine disruptors affect hormonal health.',
    category: 'mechanistic',
  },
];

// ── Summary Data for Visual Sections ──

export interface KeyFinding {
  icon: string; // lucide icon name
  stat: string;
  label: string;
  description: string;
}

export const keyFindings: KeyFinding[] = [
  {
    icon: 'FlaskConical',
    stat: '16+',
    label: 'Peer-Reviewed Studies',
    description: 'Published in top journals including BJOG, Environment International, and PLOS ONE',
  },
  {
    icon: 'Globe',
    stat: '7',
    label: 'Countries Tested',
    description: 'Heavy metals found in pads from China, Japan, South Korea, USA, UK, Australia & Germany',
  },
  {
    icon: 'AlertTriangle',
    stat: '22',
    label: 'Human Studies on BPA-PCOS Link',
    description: 'Most showing higher BPA exposure among women with PCOS',
  },
  {
    icon: 'Flag',
    stat: 'Higher',
    label: 'Chemical Load in Indian Pads',
    description: 'Indian brands contain higher concentrations of hazardous chemicals than US, EU, Japan brands',
  },
];

export const chemicalsFound = [
  { name: 'Phthalates', effect: 'Endocrine disruptors linked to early puberty, irregular cycles, ovarian dysfunction', severity: 'high' },
  { name: 'Dioxins', effect: 'Carcinogenic compounds from chlorine bleaching of pad materials', severity: 'high' },
  { name: 'VOCs (Toluene etc.)', effect: 'Volatile organic compounds causing headaches, dizziness, hormonal disruption', severity: 'high' },
  { name: 'BPA (Bisphenol A)', effect: 'Linked to PCOS in 22 human studies; induces PCOS-like syndrome in animal models', severity: 'high' },
  { name: 'Heavy Metals', effect: 'Lead, cadmium, arsenic, mercury - neurotoxic, accumulate in body over time', severity: 'high' },
  { name: 'Parabens', effect: 'Preservatives that mimic estrogen; linked to hormonal imbalance', severity: 'medium' },
  { name: 'Pesticide Residues', effect: 'Found in Indian brands; linked to chronic inflammation and infertility', severity: 'medium' },
  { name: 'Microplastics', effect: 'Shed from pad surfaces during use; long-term effects under study', severity: 'medium' },
  { name: 'Fragrances', effect: 'Synthetic chemicals causing allergic reactions and skin sensitization', severity: 'medium' },
  { name: 'SAP (Super Absorbent Polymers)', effect: 'Synthetic gel that holds moisture but creates humid, bacteria-friendly environment', severity: 'medium' },
];

export const researchConclusion = {
  headline: 'The Scientific Consensus Is Clear',
  points: [
    'Pads/tampons contain EDCs (endocrine disrupting chemicals) such as phthalates and parabens, VOCs, metals and shed microplastics.',
    'Human studies increasingly link higher EDC exposures with PCOS.',
    'Indian pads contain higher chemical concentrations than products in developed nations.',
    'The highly permeable vaginal area makes chemical absorption more efficient than skin contact elsewhere.',
    'The consensus: reduce unnecessary chemical exposures, improve product disclosure/testing, and study real-world exposures more rigorously.',
  ],
};
