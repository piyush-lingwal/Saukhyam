import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import AwardsView from '@/components/newsroom/views/AwardsView';

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description:
    'Awards and recognition received by Saukhyam Foundation and Anju Bist for innovation, social impact, and menstrual health leadership.',
};

export default function AwardsPage() {
  return (
    <NewsroomShell
      activeSlug="awards"
      title="Awards & Recognition"
      lead="Honours from NITI Aayog, the UN, and institutions celebrating grassroots innovation."
    >
      <AwardsView />
    </NewsroomShell>
  );
}
