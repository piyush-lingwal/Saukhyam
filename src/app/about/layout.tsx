import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story — From Banana Fiber to Healing Pads',
  description:
    'Discover how Anju Bist and Mata Amritanandamayi Math created India\'s first banana fiber reusable sanitary pad, empowering 30 lakh+ women across 4,137 villages.',
  openGraph: {
    title: 'Our Story — Saukhyam Reusable Pads',
    description:
      'From banana farm to healing pad: the story of India\'s most impactful menstrual health movement.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
