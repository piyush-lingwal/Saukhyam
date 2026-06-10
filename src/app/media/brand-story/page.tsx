import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import BrandStoryView from '@/components/newsroom/views/BrandStoryView';

export const metadata: Metadata = {
  title: 'Brand Story',
  description:
    'The Saukhyam brand story: Amma\'s inspiration, banana fiber innovation, women-led production, and vision for healing periods and the planet.',
};

export default function BrandStoryPage() {
  return (
    <NewsroomShell
      activeSlug="brand-story"
      title="Brand Story"
      lead="From a village question to a national movement for chemical-free menstrual dignity."
    >
      <BrandStoryView />
    </NewsroomShell>
  );
}
