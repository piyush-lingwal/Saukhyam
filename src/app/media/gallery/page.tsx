import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import GalleryView from '@/components/newsroom/views/GalleryView';

export const metadata: Metadata = {
  title: 'Campaign Gallery',
  description:
    'Saukhyam Foundation campaign gallery: HEAL, CARE, and REACH programme moments across India.',
};

export default function GalleryPage() {
  return (
    <NewsroomShell
      activeSlug="gallery"
      title="Campaign Gallery"
      lead="Visual stories from grassroots outreach, campuses, and recognition events."
    >
      <GalleryView />
    </NewsroomShell>
  );
}
