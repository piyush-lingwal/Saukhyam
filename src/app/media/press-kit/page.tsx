import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import PressKitView from '@/components/newsroom/views/PressKitView';

export const metadata: Metadata = {
  title: 'Press Kit',
  description:
    'Download the Saukhyam press kit: logos, founder biography, fact sheet, and campaign photography for editorial use.',
};

export default function PressKitPage() {
  return (
    <NewsroomShell
      activeSlug="press-kit"
      title="Press Kit"
      lead="Logos, bios, fact sheets, and photography for journalists and partners."
    >
      <PressKitView />
    </NewsroomShell>
  );
}
