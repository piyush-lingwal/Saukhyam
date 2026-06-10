import type { Metadata } from 'next';
import NewsroomShell from '@/components/newsroom/NewsroomShell';
import MediaHubPage from '@/components/newsroom/MediaHubPage';

export const metadata: Metadata = {
  title: 'Media & Press | Saukhyam Foundation',
  description:
    'Official Saukhyam press and media archive — coverage on reusable pads, banana fibre innovation, and menstrual health across India.',
  keywords: [
    'Saukhyam press',
    'Anju Bist media coverage',
    'reusable sanitary pads media',
    'banana fiber pads press',
    'NGO menstrual health media',
  ],
  openGraph: {
    title: 'Media & Press | Saukhyam Foundation',
    description:
      'Press archive aligned with the official Saukhyam Press & Media page — features, headlines, and excerpts.',
    type: 'website',
    url: 'https://saukhyampads.org/media',
  },
  alternates: {
    canonical: '/media',
  },
};

export default function MediaPage() {
  return (
    <NewsroomShell
      activeSlug="hub"
      title="Media & Press"
      lead=""
      showSidebar={false}
      hideHeader
    >
      <MediaHubPage />
    </NewsroomShell>
  );
}
