import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials — Real Stories, Real Healing',
  description:
    'Hear from 5 lakh+ women who switched to Saukhyam reusable pads — stories of period pain relief, PCOS improvement, skin healing, and a healthier, chemical-free cycle.',
  openGraph: {
    title: 'Testimonials — Saukhyam Reusable Pads',
    description:
      'Real stories from women across India who healed their periods with banana fiber pads.',
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
