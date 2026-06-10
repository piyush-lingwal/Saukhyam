import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Saukhyam — reach out for orders, partnerships, bulk purchases, media inquiries, or to learn about our programs. Located in Amritapuri, Kollam, Kerala.',
  openGraph: {
    title: 'Contact Saukhyam Reusable Pads',
    description:
      'Phone: +91 628 210 3073 · Email: info@saukhyampads.org · Amritapuri, Kollam, Kerala 690546',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
