import type { Metadata } from 'next';
import BlogListing from '@/components/blog/BlogListing';

export const metadata: Metadata = {
  title: 'Blog — Stories & Insights',
  description:
    'Real stories, science, and sustainability from Saukhyam — 25 articles on reusable pads, community impact, and menstrual health.',
  openGraph: {
    title: 'Saukhyam Blog — Real Stories. Real Change.',
    description: 'Impact stories, health insights, and voices from women across India.',
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
