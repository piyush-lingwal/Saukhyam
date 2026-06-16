export interface HealChallengeFAQItem {
  id: string;
  question: string;
  paragraphs: string[];
  bullets?: string[];
}

export const healChallengeFaqItems: HealChallengeFAQItem[] = [
  {
    id: 'hc-faq-1',
    question: 'Will the HEAL Challenge work with any reusable pad, or only Saukhyam?',
    paragraphs: [
      'The core principle—removing chemical exposure—can work with any high-quality reusable period product made from natural, toxin-free materials. However, Saukhyam Reusable Pads are the only product supported by over two years of documented case studies and user outcomes. Therefore, refund eligibility applies only to Saukhyam products.',
    ],
  },
  {
    id: 'hc-faq-2',
    question: 'What if I have a structural condition like endometriosis or fibroids?',
    paragraphs: [
      'The HEAL Challenge is not intended to treat structural medical conditions. However, many participants report improvements in pain, comfort, and overall menstrual experience after switching to reusable pads. Any underlying medical condition should continue to be managed with professional healthcare guidance.',
    ],
  },
  {
    id: 'hc-faq-3',
    question: 'What role do environmental toxins play in PCOS or hormonal imbalances?',
    paragraphs: [
      'Research shows that endocrine-disrupting chemicals such as dioxins, phthalates, and VOCs can interfere with hormonal regulation. Since menstrual products come into prolonged contact with sensitive tissue, reducing exposure to unnecessary chemicals may support overall menstrual health and hormonal balance.',
    ],
  },
  {
    id: 'hc-faq-4',
    question: 'Do I need to make a 100% switch from day one?',
    paragraphs: [
      'A complete switch is recommended for the best results. However, if transitioning gradually feels easier, follow the 2–3–4 approach:',
      'Continue consistent use for six months to complete the challenge.',
    ],
    bullets: [
      'Month 1: Use reusable pads for 2 days.',
      'Month 2: Use reusable pads for 3 days.',
      'Month 3 onward: Use reusable pads throughout your cycle.',
    ],
  },
  {
    id: 'hc-faq-5',
    question: 'What if my periods are irregular or I skip months?',
    paragraphs: [
      'You can still participate. Simply use reusable pads whenever your period occurs. The objective is to complete at least 2–3 full cycles using reusable pads during the challenge period to observe potential changes.',
    ],
  },
  {
    id: 'hc-faq-6',
    question: 'What about nutrition, exercise, and sleep?',
    paragraphs: [
      'Healthy lifestyle habits contribute to overall well-being and hormonal balance. While we encourage good nutrition, movement, hydration, and rest, the HEAL Challenge focuses specifically on reducing menstrual-product-related chemical exposure through reusable alternatives.',
    ],
  },
  {
    id: 'hc-faq-7',
    question: 'How do I officially enroll, and how does the refund process work?',
    paragraphs: [
      'To join the HEAL Challenge, complete the enrollment form before purchasing Saukhyam Reusable Pads. After completing six months of participation, if you are not satisfied with your experience, submit the refund request form and return the used pads according to the provided instructions. Once verified, the refund will be processed. Both forms are available in the “Enroll in HEAL Challenge” section.',
    ],
  },
];

export const healChallengeTrustItems = [
  {
    id: 'trust-1',
    title: 'Science-Informed',
    description: 'Based on menstrual health research',
    icon: 'flask' as const,
  },
  {
    id: 'trust-2',
    title: '6-Month Challenge',
    description: 'Structured healing journey',
    icon: 'calendar' as const,
  },
  {
    id: 'trust-3',
    title: 'Refund Promise',
    description: 'Risk-free participation',
    icon: 'shield' as const,
  },
  {
    id: 'trust-4',
    title: 'Community Impact',
    description: 'Thousands of women empowered',
    icon: 'heart' as const,
  },
];
