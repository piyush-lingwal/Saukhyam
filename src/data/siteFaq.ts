import { healFaqItems, type HealFAQCategory, type HealFAQItem } from './healFaq';
import { internshipFaqItems } from './internshipFaq';

export type SiteFAQCategory = HealFAQCategory;

export type WhyReusableSubsection =
  | 'period-problems'
  | 'pcos-pmos'
  | 'results-medical'
  | 'sustainability'
  | 'community';

export type BananaFiberSubsection = 'science-hormones' | 'research-evidence';

export type SiteFAQSubsection = WhyReusableSubsection | BananaFiberSubsection;

export interface SiteFAQItem {
  id: string;
  category: SiteFAQCategory;
  question: string;
  paragraphs: string[];
  bullets?: string[];
  subsection?: SiteFAQSubsection;
}

export const siteFaqCategories: { id: SiteFAQCategory; label: string }[] = [
  { id: 'why-reusable', label: 'Why Choose Reusable Pads' },
  { id: 'usage-guide', label: 'Usage Guide' },
  { id: 'washing-care', label: 'Washing & Care' },
  { id: 'banana-fiber', label: 'Banana Fiber & Technology' },
  { id: 'about', label: 'About Saukhyam' },
  { id: 'products', label: 'Products' },
  { id: 'internship', label: 'Internship Program' },
  { id: 'heal-platform', label: 'HEAL Platform' },
  { id: 'heal-challenge', label: 'HEAL Challenge' },
];

export const whyReusableSubsections: { id: WhyReusableSubsection; label: string }[] = [
  { id: 'period-problems', label: 'Period Problems' },
  { id: 'pcos-pmos', label: 'PCOS / PMOS' },
  { id: 'results-medical', label: 'Results & Medical Guidance' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'community', label: 'Community' },
];

export const bananaFiberSubsections: { id: BananaFiberSubsection; label: string }[] = [
  { id: 'science-hormones', label: 'Science & Hormones' },
  { id: 'research-evidence', label: 'Research & Evidence' },
];

const VALID_CATEGORIES = new Set<string>(siteFaqCategories.map(c => c.id));

const subsectionById: Record<string, SiteFAQSubsection> = {
  'mh-8': 'period-problems',
  'pp-1': 'period-problems',
  'pp-1b': 'period-problems',
  'pp-2': 'period-problems',
  'pp-3': 'period-problems',
  'pp-3b': 'period-problems',
  'pp-4': 'period-problems',
  'pp-5': 'period-problems',
  'pp-6': 'period-problems',
  'pp-7': 'period-problems',
  'pc-1': 'pcos-pmos',
  'pc-1b': 'pcos-pmos',
  'pc-2': 'pcos-pmos',
  'pc-3': 'pcos-pmos',
  'pc-4': 'pcos-pmos',
  'pc-4b': 'pcos-pmos',
  'pc-5': 'pcos-pmos',
  'pc-6': 'pcos-pmos',
  'pc-7': 'pcos-pmos',
  'pc-8': 'pcos-pmos',
  'us-2': 'results-medical',
  'us-3': 'results-medical',
  'us-4': 'results-medical',
  'us-6': 'results-medical',
  'md-1': 'results-medical',
  'md-2': 'results-medical',
  'md-3': 'results-medical',
  'md-4': 'results-medical',
  'md-4b': 'results-medical',
  'en-1': 'sustainability',
  'en-2': 'sustainability',
  'en-3': 'sustainability',
  'en-4': 'sustainability',
  'en-5': 'sustainability',
  'en-5b': 'sustainability',
  'co-1': 'community',
  'co-2': 'community',
  'co-3': 'community',
  'co-4': 'community',
  'ho-1': 'science-hormones',
  'ho-2': 'science-hormones',
  'ho-2b': 'science-hormones',
  'ho-2c': 'science-hormones',
  'ho-3': 'science-hormones',
  'ho-4': 'science-hormones',
  'ho-5': 'science-hormones',
  'ho-6': 'science-hormones',
  'rs-1': 'research-evidence',
  'rs-2': 'research-evidence',
  'rs-2b': 'research-evidence',
  'rs-2c': 'research-evidence',
  'rs-3': 'research-evidence',
  'rs-4': 'research-evidence',
  'rs-5': 'research-evidence',
  'rs-6': 'research-evidence',
};

/** Legacy product & general FAQs from the original FAQ / product content library. */
const legacySiteFaqs: SiteFAQItem[] = [
  {
    id: 'legacy-f1',
    category: 'products',
    question: 'Why are people switching to reusable pads?',
    paragraphs: [
      'Disposable pads contain harmful chemicals like dioxins, phthalates, and volatile organic compounds. These can cause skin irritation, allergies, hormonal disruption, and other health issues. Reusable pads are chemical-free, eco-friendly, and save money in the long run — one set lasts 2–3 years.',
    ],
  },
  {
    id: 'legacy-f2',
    category: 'products',
    question: 'Are reusable pads leak-proof?',
    paragraphs: [
      'Yes! Saukhyam pads have a PU (polyurethane) leak-proof layer at the bottom that prevents any leakage. For best results, use well-fitting underwear to hold the pad securely in place.',
    ],
  },
  {
    id: 'legacy-f4',
    category: 'products',
    question: 'How long do Saukhyam pads last?',
    paragraphs: [
      'With proper care, Saukhyam pads last a minimum of 1–2 years, with many customers reporting use for 3–5 years. This makes them incredibly cost-effective compared to monthly purchases of disposables.',
    ],
  },
  {
    id: 'legacy-f5',
    category: 'products',
    question: 'Will they work for heavy flow?',
    paragraphs: [
      'Yes! Our night pads are 12 inches long with 9gm of banana fiber and a 4-inch wide absorbent area. For extra heavy flow, use a night pad with an additional insert or our 3-fold pads.',
    ],
  },
  {
    id: 'legacy-f7',
    category: 'usage-guide',
    question: 'How do I use Saukhyam pads?',
    paragraphs: [
      'Place the pad on your underwear with the absorbent side up. The wings fold around your underwear and are secured with a snap button. Change every 4–5 hours during the day. Night pads can be worn for longer.',
    ],
  },
  {
    id: 'legacy-f8',
    category: 'usage-guide',
    question: 'Can I use them while traveling?',
    paragraphs: [
      'Absolutely! Carry a wet bag to store used pads. You can simply hold the pad under a running tap, squeeze, and store in the wet bag to wash later at home. Our packs include wet bags for this purpose.',
    ],
  },
  {
    id: 'legacy-f9',
    category: 'products',
    question: 'How many pads do I need?',
    paragraphs: [
      'For a complete menstrual cycle, we recommend our Super Pack or Value Pack which includes day pads, night pads, and accessories. Typically, 4–6 day pads and 2–3 night pads provide full cycle coverage.',
    ],
  },
  {
    id: 'legacy-f11',
    category: 'washing-care',
    question: 'Do they become hard or rough after washing?',
    paragraphs: [
      'They may feel slightly stiff after air drying. Simply iron the pad or soak briefly in a solution with a little baking soda, lemon, or neem leaves — this restores softness. They become softer with each wash!',
    ],
  },
  {
    id: 'legacy-f12',
    category: 'about',
    question: 'Who runs Saukhyam?',
    paragraphs: [
      'Saukhyam is managed by the Mata Amritanandamayi Math and registered as Ayurarogya Saukhyam Foundation (Section 8 company). It is a social enterprise initiated as part of the Amrita SeRVe project covering 101 villages across 20+ states.',
    ],
  },
];

function normalizeQuestion(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function toSiteItem(item: HealFAQItem): SiteFAQItem {
  return {
    id: item.id,
    category: item.category,
    question: item.question,
    paragraphs: item.paragraphs,
    bullets: item.bullets,
    subsection: subsectionById[item.id],
  };
}

function buildSiteFaqItems(): SiteFAQItem[] {
  const seen = new Set<string>();
  const items: SiteFAQItem[] = [];

  const addItem = (item: SiteFAQItem) => {
    const key = normalizeQuestion(item.question);
    if (seen.has(key)) return;
    seen.add(key);
    items.push(item);
  };

  for (const item of healFaqItems) {
    addItem(toSiteItem(item));
  }

  for (const item of legacySiteFaqs) {
    addItem(item);
  }

  for (const item of internshipFaqItems) {
    addItem({
      id: item.id,
      category: 'internship',
      question: item.question,
      paragraphs: [item.answer],
    });
  }

  return items;
}

export const siteFaqItems: SiteFAQItem[] = buildSiteFaqItems();

export function isValidSiteFaqCategory(value: string): value is SiteFAQCategory {
  return VALID_CATEGORIES.has(value);
}

export function getSiteFaqCount(category: SiteFAQCategory): number {
  return siteFaqItems.filter(item => item.category === category).length;
}

export function getSiteFaqCategoryLabel(category: SiteFAQCategory): string {
  return siteFaqCategories.find(c => c.id === category)?.label ?? category;
}

export function getSiteFaqSearchText(item: SiteFAQItem): string {
  const parts = [
    item.question,
    ...item.paragraphs,
    ...(item.bullets ?? []),
    getSiteFaqCategoryLabel(item.category),
  ];
  return parts.join(' ').toLowerCase();
}

export function searchSiteFaq(query: string, category?: SiteFAQCategory): SiteFAQItem[] {
  const trimmed = query.trim().toLowerCase();
  const pool = category
    ? siteFaqItems.filter(item => item.category === category)
    : siteFaqItems;

  if (!trimmed) return pool;

  return pool.filter(item => getSiteFaqSearchText(item).includes(trimmed));
}

export function getSiteFaqSubsections(category: SiteFAQCategory) {
  if (category === 'why-reusable') return whyReusableSubsections;
  if (category === 'banana-fiber') return bananaFiberSubsections;
  return [];
}
