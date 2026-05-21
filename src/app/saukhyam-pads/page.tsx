import type { Metadata } from 'next';
import SaukhyamPadsPage from '@/components/saukhyam-pads/SaukhyamPadsPage';

export const metadata: Metadata = {
  title: 'Saukhyam Pads — The Innovation Behind Natural Protection',
  description:
    'Discover the 4 layers of Saukhyam reusable pads: banana fiber core, cotton comfort, and chemical-free protection backed by science.',
};

export default function Page() {
  return <SaukhyamPadsPage />;
}
