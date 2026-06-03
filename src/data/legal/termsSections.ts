import type { LegalSection, LegalTocItem } from './types';

export const termsToc: LegalTocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'terms-of-offer', title: 'Terms of Offer' },
  { id: 'customer-solicitation', title: 'Customer Communications' },
  { id: 'proprietary-rights', title: 'Proprietary Rights' },
  { id: 'tax', title: 'Tax' },
  { id: 'intellectual-property', title: 'Intellectual Property' },
  { id: 'third-party-links', title: 'Third-Party Links' },
  { id: 'terms-of-use', title: 'Terms of Use' },
  { id: 'limited-license', title: 'Limited License' },
  { id: 'user-generated-content', title: 'User Content' },
  { id: 'your-account', title: 'Your Account' },
  { id: 'security', title: 'Security' },
  { id: 'payment-methods', title: 'Payment Methods' },
  { id: 'pricing-availability', title: 'Pricing & Availability' },
  { id: 'delivery', title: 'Delivery' },
  { id: 'disclaimer', title: 'Disclaimer of Warranties' },
  { id: 'limitation-of-liability', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'privacy', title: 'Privacy' },
  { id: 'general', title: 'General Provisions' },
  { id: 'contact', title: 'Contact' },
];

export const termsSections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'This document is an electronic record under the Information Technology Act, 2000 and applicable rules, including provisions relating to electronic records in other statutes as amended by the IT Act. It is published in line with applicable laws, including the Consumer Protection (E-Commerce) Rules, 2020, which require rules and regulations, privacy policy, and terms and conditions to be published for access or use of this website.',
      'Please read these Terms and Conditions (“T&C”, “Terms”) carefully before using www.saukhyampads.org, any mobile version of the website, or our mobile application (together, the “Website”), owned and operated by Ayurarogya Saukhyam Foundation, also known as Saukhyam Reusable Pads (“Company”, “Saukhyam”, “we”, “us”, or “our”). For purposes of these T&C, the Privacy Policy, Return and Refund Policy, and other policies on the Website (together, “Policies”), “you”, “your”, “customer”, and “user” mean any natural or legal person who browses the Website (whether registered or not) or places an order.',
      'By accessing, browsing, or using the Website, you agree to be bound by these T&C. If you do not agree, including any referenced policies or guidelines, please stop using the Website immediately. You may print these Terms using your browser’s print function (for example, Ctrl+P).',
      'The Website is intended for persons who can enter into legally binding contracts under the Indian Contract Act, 1872. By using the Website you represent that you are at least 18 years old and competent to contract. Users under 18 may use the Website only through a parent or legal guardian. Representatives of firms, partnerships, or sole proprietorships may use the Website for transactions only if duly authorized.',
      'We may amend or revise these T&C without prior notice. Revised terms will be posted on the Website with an updated date and take effect immediately upon upload. Continued use after changes means you accept the amended T&C. The version in force when you access the Website or place an order applies to that interaction. We recommend reviewing these Terms before each visit or purchase. These T&C do not override separate agreements you may already have with Saukhyam for other products or services.',
    ],
  },
  {
    id: 'terms-of-offer',
    title: 'Terms of Offer',
    paragraphs: [
      'The Website offers certain products (“Products”) for sale. By placing an order, you consent to these T&C. Products and any samples are for personal use only. Resale of Products or samples is prohibited unless we expressly authorize it in writing.',
      'We may cancel or reduce quantities intended for delivery, with or without notice, if we reasonably believe our terms may have been violated. We may modify, suspend, or discontinue any Product at any time without liability.',
      'Prices may change without prior notice. We strive for accurate product descriptions but do not warrant that descriptions, colours, information, or other Website content is always accurate, complete, reliable, current, or error-free. The Website may contain typographical errors or outdated information regarding pricing, availability, or services.',
    ],
  },
  {
    id: 'customer-solicitation',
    title: 'Customer Communications',
    paragraphs: [
      'When you visit the Website, place an order, or submit information, you consent to receive communications from us electronically, including transactional, promotional, and commercial messages, via email, SMS, phone, notices on the Website, or other channels.',
      'You may withdraw consent at any time using these opt-out options:',
    ],
    list: {
      type: 'ol',
      items: [
        'Use the unsubscribe link in any marketing email we send.',
        'Email info@saukhyampads.org with your opt-out request.',
        'Send a written removal request to the contact details in the Contact section below.',
      ],
    },
  },
  {
    id: 'proprietary-rights',
    title: 'Proprietary Rights',
    paragraphs: [
      'Our Products contain proprietary rights, including trade secrets. Copying, reproducing, modifying, duplicating, republishing, reselling, or redistributing Products, in whole or in part, in any format, is strictly prohibited.',
      'We own or control trademarks, trade dress, page layout, calls to action, text, images, technology, content, software, and the overall look and feel of the Website. No licence is granted to use Product or Website trademarks without our permission. All trademarks on the Website remain our intellectual property.',
    ],
  },
  {
    id: 'tax',
    title: 'Tax',
    paragraphs: ['You are responsible for paying applicable taxes on your purchases.'],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    paragraphs: [
      'The Website provides informational and marketing materials, some sourced from third parties. We do not necessarily endorse third-party information and disclaim liability for it. Use of such material is at your own risk.',
      'Content we create is protected under Indian intellectual property law. Unauthorized use may violate copyright, trademark, or other laws. Use Website content only for personal, non-commercial purposes.',
      'If you believe your work has been copied in a way that constitutes infringement, contact info@saukhyampads.org.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    paragraphs: [
      'Links to third-party sites are provided for convenience. We do not endorse, affiliate with, sponsor, or recommend those sites and are not responsible for their content or for loss arising from your use of them. Review their terms and privacy policies before use. Access is at your own risk.',
    ],
  },
  {
    id: 'terms-of-use',
    title: 'Terms of Use',
    paragraphs: [
      'Use the Website only for lawful purposes and in compliance with applicable laws, including intellectual property rules. Do not disrupt others’ use, resell Website materials without consent, send spam or junk mail, harass or abuse users, or engage in harmful, defamatory, obscene, or unlawful conduct.',
      'If you use the Website on behalf of another person, you confirm you have authority to bind them to these T&C. If they refuse, you agree to accept responsibility for misuse during that access.',
      'We may block users or deactivate accounts if we believe fair-use policy or these T&C have been violated.',
    ],
  },
  {
    id: 'limited-license',
    title: 'Limited License',
    paragraphs: [
      'We grant a limited, non-transferable licence to access Website content for personal, non-commercial use. You may not copy, reproduce, transmit, distribute, or create derivative works without our written consent or that of the relevant third-party rights holder.',
    ],
  },
  {
    id: 'user-generated-content',
    title: 'User-Generated Content',
    paragraphs: [
      'By submitting content through the Website, you grant us a non-exclusive, perpetual, worldwide, royalty-free, transferable licence to use, reproduce, display, modify, distribute, and sublicense that content as described in our Privacy Policy.',
      'You are responsible for your interactions and posts. We are not liable for harm from user interactions. We may monitor interactions and remove objectionable content without obligation. By using the Website, you waive claims against us relating to alleged infringement of rights in user content you provide.',
    ],
  },
  {
    id: 'your-account',
    title: 'Your Account',
    paragraphs: [
      'You may maintain one user account (“Account”). Keep your password confidential and secure your device. You are responsible for all activity under your Account. Information you provide is not treated as confidential unless stated otherwise and must not violate third-party rights.',
      'Accounts are non-transferable. Report suspected breaches promptly. We may require a password change or suspend or terminate accounts for security or T&C violations without liability to you.',
      'You are solely responsible for content you upload or transmit. We collect and use information as described in our Privacy Policy.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'Do not breach Website security, including accessing data or servers without authorization, probing vulnerabilities, interfering with service, distributing viruses, overloading systems, spamming, forging headers, or engaging in conduct that threatens public order or encourages unlawful activity. Violations may lead to civil or criminal liability.',
    ],
  },
  {
    id: 'payment-methods',
    title: 'Payment Methods',
    paragraphs: [
      'Payments may be made via credit card, debit card, net banking, and UPI. Payment gateway partners may change; we will notify users when applicable.',
    ],
  },
  {
    id: 'pricing-availability',
    title: 'Pricing & Availability',
    paragraphs: [
      'We may change prices, product availability, offers, and services on the Website at our sole discretion without prior notice.',
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery',
    paragraphs: [
      'Orders are typically delivered within 5-7 working days from purchase. Estimated timelines appear on your order details page; they are approximate and delays beyond our control may occur.',
      'After dispatch, we email a tracking number and courier details so you can follow your shipment.',
    ],
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of Warranties',
    paragraphs: [
      'You are solely responsible for how you use Products and the Website. Products and the Website are provided “as is” and “as available”. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
      'We do not warrant uninterrupted operation, error-free content, accurate third-party links, or that defects will be corrected. We may change or discontinue any aspect of the Website at any time. We are not liable for loss arising from inability to access or use the Website.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, we are not liable for direct, indirect, incidental, special, or consequential damages related to the Website, Products, or these T&C, including loss of profits, data issues, third-party links, viruses, inaccuracies, or events beyond our reasonable control.',
      'Some jurisdictions do not allow certain limitations; where prohibited, those limits may not apply to you.',
    ],
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    paragraphs: [
      'You agree to indemnify and hold harmless the Company and its contractors, agents, employees, officers, directors, shareholders, affiliates, and assigns from claims, damages, costs, and expenses (including reasonable legal fees) arising from your breach of these T&C, your use of the Website or Products, infringement claims, or information you supply.',
      'If we face third-party claims related to your use, we may seek written assurances from you. We may participate in your defence with counsel of our choice. Settlement requires our prior written consent. This section survives termination.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy',
    paragraphs: [
      'Our Privacy Policy forms part of these T&C and governs how we collect and use personal information. By using the Website you acknowledge that you have read and accept the Privacy Policy. See the Privacy Policy on the Website for full details.',
    ],
  },
  {
    id: 'general',
    title: 'General Provisions',
    paragraphs: [
      'Force majeure: We are not in default for delays caused by events beyond reasonable control, including natural disasters, war, terrorism, strikes, pandemics, hacking, utility failures, government orders, or similar events. Obligations are suspended for the duration of such events.',
      'We may cease Website operation or Product distribution at any time without notice. These T&C are the entire agreement between you and the Company on this subject. Failure to enforce a right is not a waiver. If a provision is invalid, the remainder stays in effect to reflect the parties’ intent where possible.',
      'These T&C are governed by the laws of India and the courts of Delhi (subject to applicable law). You consent to Delhi jurisdiction for disputes. You waive any right to participate in class actions; claims must be brought individually.',
      'We may terminate your access for breach of these T&C and cancel outstanding orders. These T&C survive termination. The Website is intended for use in India; access from elsewhere is at your own risk. You may not assign your rights; we may assign ours. Domestic use outside India is not represented as available.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'For questions about Products, the Website, or these Terms, including matters other than copyright notices, reach us using the details below.',
    ],
  },
];
