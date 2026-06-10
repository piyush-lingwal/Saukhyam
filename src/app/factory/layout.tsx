import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saukhyam Factory | Manufacturing Change, Empowering Women',
  description:
    'Explore one of India\'s largest reusable menstrual pad manufacturing facilities — combining banana fiber innovation, sustainable production, and livelihood creation for rural women.',
};

export default function FactoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
