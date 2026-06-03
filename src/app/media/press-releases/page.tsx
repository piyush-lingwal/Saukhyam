import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import PressReleasesView from '@/components/newsroom/views/PressReleasesView';

export const metadata: Metadata = {
  title: 'Press Releases',
  description:
    'Official Saukhyam Foundation press releases: milestones, partnerships, and programme announcements.',
};

export default function PressReleasesPage() {
  return (
    <NewsroomShell
      activeSlug="press-releases"
      title="Press Releases"
      lead="Official announcements and milestones from Saukhyam Foundation."
    >
      <PressReleasesView />
    </NewsroomShell>
  );
}
