import type { Metadata } from 'next';
import BlogListing from '@/components/blog/BlogListing';

export const metadata: Metadata = {
  title: 'Blog - Stories & Insights',
  description:
    'Real stories from HEAL, CARE, and REACH — Saukhyam programmes for health, campus sustainability, and rural empowerment.',
  openGraph: {
    title: 'Saukhyam Blog - Real Stories. Real Change.',
    description: 'Impact stories, health insights, and voices from women across India.',
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
