import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import NewsroomView from '@/components/newsroom/views/NewsroomView';

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'Latest Saukhyam Foundation news, press coverage, impact stories, and programme updates for media professionals.',
};

export default function NewsroomPage() {
  return (
    <NewsroomShell
      activeSlug="newsroom"
      title="Newsroom"
      lead="The latest stories, coverage, and impact updates from across our programmes."
    >
      <NewsroomView />
    </NewsroomShell>
  );
}
