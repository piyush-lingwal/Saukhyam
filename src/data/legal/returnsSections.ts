import type { LegalSection, LegalTocItem } from './types';

export const returnsToc: LegalTocItem[] = [
  { id: 'introduction', title: 'Overview' },
  { id: 'standard-returns', title: 'Standard Returns' },
  { id: 'program-refunds', title: 'Wellness Program Refunds' },
  { id: 'sale-items', title: 'Sale & Final Purchases' },
  { id: 'damaged-incorrect', title: 'Damaged or Wrong Items' },
  { id: 'refunds', title: 'How Refunds Work' },
  { id: 'exchanges', title: 'Exchanges' },
  { id: 'how-to-return', title: 'How to Start a Return' },
  { id: 'shipping', title: 'Return Shipping' },
  { id: 'timeline', title: 'Refund Timeline' },
  { id: 'non-returnable', title: 'What We Cannot Accept' },
  { id: 'contact', title: 'Contact' },
  { id: 'updates', title: 'Policy Updates' },
];

export const returnsSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Overview',
    paragraphs: [
      'Ayurarogya Saukhyam Foundation (“Saukhyam”, “we”, “us”) wants every purchase to feel fair, respectful, and clear. This Return & Refund Policy works together with our Terms & Conditions and Privacy Policy on www.saukhyampads.org.',
      'Because we offer reusable menstrual health products, some rules balance your consumer rights with hygiene, safety, and responsible use of community resources. Specific product pages or promotional programmes may include additional terms. Please read those at checkout.',
    ],
  },
  {
    id: 'standard-returns',
    title: 'Standard Returns',
    paragraphs: [
      'For most online purchases, you may request a return within 30 days of delivery. Items must be unused and returned in their original packaging, with proof of purchase (order number or confirmation email).',
      'Once we receive and inspect eligible items, we will confirm whether a refund or exchange applies. Custom bulk, wholesale, or institutional orders may follow separate terms agreed in writing at the time of sale.',
    ],
  },
  {
    id: 'program-refunds',
    title: 'Wellness Program Refunds',
    paragraphs: [
      'Selected programmes (such as “Heal with Saukhyam”) may offer a satisfaction guarantee described on the product page. Where that guarantee applies, you may return pads, even after use, and receive a full refund if you are not satisfied, subject to the steps on that page.',
      'Typical steps include contacting us by message or email, completing a short endline survey, and sending the pads back. For eligible programme returns, we arrange or reimburse reasonable return shipping as stated on the offer page. This is designed to be judgement-free and focused on your wellbeing.',
    ],
  },
  {
    id: 'sale-items',
    title: 'Sale & Final Purchases',
    paragraphs: [
      'Products marked as sale, clearance, or “final purchase” on their product page are generally not eligible for return unless required by applicable law or we state otherwise in writing.',
      'If a product page states that we do not accept returns for that SKU, that page-specific wording applies in addition to this policy.',
    ],
  },
  {
    id: 'damaged-incorrect',
    title: 'Damaged or Wrong Items',
    paragraphs: [
      'If your order arrives damaged in transit, defective before first use, or incorrect, contact us promptly with photos and your order number. We prioritise replacement when stock allows; otherwise we offer a refund or store credit as appropriate.',
      'We handle these cases with care. Our goal is to fix the problem, not assign blame.',
    ],
  },
  {
    id: 'refunds',
    title: 'How Refunds Work',
    paragraphs: [
      'Approved refunds are issued to the original payment method where technically possible. If that is not feasible (for example with certain wallets or gateways), we will agree a transparent alternative with you.',
      'Partial refunds may apply when only part of a bundle qualifies, or when promotional shipping was subsidised. We will explain any adjustment before processing.',
    ],
  },
  {
    id: 'exchanges',
    title: 'Exchanges',
    paragraphs: [
      'You may exchange unused, sealed items for another size or pack when inventory and hygiene rules allow. Contact us before shipping anything back so we can confirm availability and instructions.',
    ],
  },
  {
    id: 'how-to-return',
    title: 'How to Start a Return',
    paragraphs: ['To begin a return or refund request:'],
    list: {
      type: 'ol',
      items: [
        'Email info@saukhyampads.org or use our Contact page with your order number and a brief description.',
        'Wait for eligibility confirmation and return instructions. Do not send items until we approve the return.',
        'Pack products securely; include any reference or form we provide.',
        'Ship using the agreed method and keep tracking proof until your case is closed.',
      ],
    },
  },
  {
    id: 'shipping',
    title: 'Return Shipping',
    paragraphs: [
      'Unless we confirm otherwise (for example defective items, wrong orders, or programme guarantees that include prepaid return shipping), you are responsible for return shipping costs.',
      'For approved quality or fulfilment issues, we may provide a prepaid label or reimburse reasonable postage after review, depending on operational capacity.',
    ],
  },
  {
    id: 'timeline',
    title: 'Refund Timeline',
    paragraphs: [
      'After we receive and inspect eligible returns, we usually initiate refunds within a few business days. Banks and payment partners may need additional time to show the amount on your statement. We will update you if delays occur beyond our control.',
    ],
  },
  {
    id: 'non-returnable',
    title: 'What We Cannot Accept',
    paragraphs: ['The following are typically not returnable, except where Indian consumer law requires otherwise:'],
    list: {
      type: 'ul',
      items: [
        'Opened intimate-use products where hygiene seals are broken (outside approved programme guarantees).',
        'Items clearly used beyond a trial described on a specific offer page.',
        'Sale or final-purchase items as marked on the product page.',
        'Free or beneficiary distribution packs already allocated to community programmes.',
        'Digital goods or licences once accessed.',
      ],
    },
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'For returns, refunds, or order questions, email info@saukhyampads.org or call +91 6282 103 073 (Monday-Friday, 09:00-17:00 IST). Include your order number for faster help.',
    ],
  },
  {
    id: 'updates',
    title: 'Policy Updates',
    paragraphs: [
      'We may update this Return & Refund Policy to reflect legal requirements, courier changes, or clearer guidance. The “Last updated” date at the top of this page will change when we do. Continued purchases after updates are subject to the revised policy.',
    ],
  },
];
