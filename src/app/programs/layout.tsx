import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs — HEAL, CARE & REACH',
  description:
    'Explore Saukhyam\'s impact programs: HEAL (Health, Environment & Active Living), CARE (Campus Action for Reusable Essentials), and REACH (Rural Empowerment and Community Health).',
  openGraph: {
    title: 'Programs — Saukhyam Reusable Pads',
    description:
      'HEAL · CARE · REACH — transforming menstrual health across 4,137 villages in 11 states.',
  },
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
