import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Science — Banana Fiber Pad Technology',
  description:
    'Learn the science behind Saukhyam\'s banana fiber reusable pads — natural antimicrobial properties, health benefits, chemical-free absorbency, and environmental impact data.',
  openGraph: {
    title: 'Banana Fiber Science — Saukhyam Reusable Pads',
    description:
      'From agricultural waste to the world\'s most natural menstrual care: the science of banana fiber pads.',
  },
};

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
