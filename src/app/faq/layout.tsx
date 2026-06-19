import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Your central Saukhyam knowledge hub — menstrual health, reusable pads, HEAL Challenge, products, internships, platform, and more.',
  openGraph: {
    title: 'FAQ — Saukhyam Knowledge Hub',
    description:
      'Browse categorized FAQs on reusable pads, menstrual health, HEAL, products, internships, and more.',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
