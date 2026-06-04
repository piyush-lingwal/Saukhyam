import type { LegalSection, LegalTocItem } from './types';

export const privacyToc: LegalTocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'non-personal', title: 'Non-Personal Information' },
  { id: 'personal', title: 'Personal Information' },
  { id: 'purpose', title: 'Purpose & Use' },
  { id: 'sharing', title: 'Sharing & Disclosure' },
  { id: 'statistics', title: 'Aggregated Statistics' },
  { id: 'security', title: 'Security' },
  { id: 'external-links', title: 'External Links' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'access-control', title: 'Your Choices' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'rights', title: 'Your Rights' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes', title: 'Policy Changes' },
  { id: 'contact', title: 'Contact' },
];

export const privacySections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    paragraphs: [
      'Your privacy matters deeply to us. This Privacy Policy explains what we collect when you visit or buy from www.saukhyampads.org, how we use it, and when we may share it. It applies to information collected through the website, not to information gathered from other sources unless stated.',
      'By using the website, you acknowledge this Policy. If you do not agree, please discontinue use.',
    ],
  },
  {
    id: 'non-personal',
    title: 'Non-Personal Information',
    paragraphs: [
      'Like most websites, we collect non-personally-identifying data that browsers and servers typically share: browser type, language preference, referring site, and the date and time of requests. We use this in aggregate to understand how visitors use the site.',
      'We may also collect IP addresses for logged-in users and disclose them only under the same conditions as personally-identifying information described below.',
    ],
  },
  {
    id: 'personal',
    title: 'Personal Information',
    paragraphs: [
      'When you interact with us, especially when you purchase products, we collect information needed to complete the transaction. This may include your name, email, phone number, billing and shipping addresses, and payment details processed through our payment partners.',
      'We may also collect personal information when you contact customer support, subscribe to newsletters, or voluntarily submit forms. Cookies and similar technologies may also collect personal information as described in the Cookies section.',
      'We collect only what is necessary for the purpose of your interaction with Saukhyam Reusable Pads.',
    ],
  },
  {
    id: 'purpose',
    title: 'Purpose & Use',
    paragraphs: [
      'We use collected information to fulfil orders, provide customer support, improve our services, and, where permitted, send marketing or service updates.',
      'Registered users who provide an email may occasionally receive messages about new features or important updates; we aim to keep these minimal.',
      'If you contact support, we may use your message (including publishing a redacted version) to clarify your request or help other users.',
      'We use Google AdWords remarketing to reach visitors who previously browsed our site, and Google Analytics to understand behaviour. Data use follows this Policy and Google’s policies. See Google Analytics documentation for how Google processes data.',
    ],
  },
  {
    id: 'sharing',
    title: 'Sharing & Disclosure',
    paragraphs: [
      'We share personally-identifying information only with employees, contractors, and affiliated organisations who need it to process information on our behalf and who agree to keep it confidential. Some partners may be located outside your home country; by using the website you consent to such transfers where required.',
      'We do not rent or sell your personal information. We may disclose information when required by law (for example a subpoena or court order) or when we believe in good faith that disclosure is necessary to protect Saukhyam, others, or the public.',
      'We take reasonable measures to protect against unauthorised access, use, alteration, or destruction of personal information.',
    ],
  },
  {
    id: 'statistics',
    title: 'Aggregated Statistics',
    paragraphs: [
      'We may collect and publish aggregated statistics about visitor behaviour. Aggregated data does not identify you personally.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'We use commercially reasonable safeguards, including secure servers and payment gateways, to protect your information. No method of transmission over the Internet is completely secure; we cannot guarantee absolute security during transmission.',
    ],
  },
  {
    id: 'external-links',
    title: 'External Links',
    paragraphs: [
      'Our website may link to third-party sites we do not operate. We encourage you to read their privacy policies and terms. We are not responsible for third-party content or practices.',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    paragraphs: [
      'We use cookies and similar technologies to personalise content, serve relevant advertising, and remember preferences. A cookie is stored on your device and sent back when you return.',
      'You may refuse cookies in your browser settings; some features may not work correctly without them. Continuing to use the site without changing settings means you accept our use of cookies.',
    ],
  },
  {
    id: 'access-control',
    title: 'Your Choices',
    paragraphs: [
      'You may unsubscribe from marketing emails using the link in each message or through your account if registered. You can update personal data through your account or request account deletion.',
      'You may withdraw cookie consent by changing browser settings. For Google Ads, adjust preferences via Google Ad Settings or opt out of interest-based ads via browser plugins.',
      'We do not change our practices solely in response to “Do Not Track” browser signals.',
    ],
  },
  {
    id: 'retention',
    title: 'Data Retention',
    paragraphs: [
      'We erase personal information when you withdraw consent, after purposes expire, or within a reasonable retention period, except where law requires longer retention.',
    ],
  },
  {
    id: 'rights',
    title: 'Your Rights',
    paragraphs: [
      'Under applicable Indian law, you may request access, correction, completion, updating, or erasure of personally-identifying information we hold. Contact us using the details below to exercise these rights.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    paragraphs: [
      'Disputes relating to this Policy are governed by applicable laws of India, including the Information Technology Act, 2000 and related e-commerce provisions.',
    ],
  },
  {
    id: 'changes',
    title: 'Policy Changes',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top reflects the current version. Continued use after changes constitutes acceptance. The live site policy was previously updated on December 25, 2023; this page reflects our current published practices.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'For privacy questions, grievances, or requests to access or change your information, contact us using the details below.',
    ],
  },
];
