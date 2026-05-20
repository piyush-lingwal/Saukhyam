import type { Metadata } from 'next';
import StatesIndex from '@/components/states/StatesIndex';

export const metadata: Metadata = {
  title: 'REACH & CARE — State Impact',
  description: 'Explore Saukhyam REACH and CARE programmes across Maharashtra, Karnataka, Kerala, and 8 more regions — impact, campaigns, and volunteer opportunities.',
};

export default function StatesIndexPage() {
  return <StatesIndex />;
}
