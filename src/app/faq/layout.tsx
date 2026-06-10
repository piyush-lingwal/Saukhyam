import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Get answers to common questions about Saukhyam reusable pads — how to use, wash, dry, durability, sizing, ordering, and more.',
  openGraph: {
    title: 'FAQ — Saukhyam Reusable Pads',
    description:
      'Everything you need to know about switching to reusable banana fiber pads.',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
