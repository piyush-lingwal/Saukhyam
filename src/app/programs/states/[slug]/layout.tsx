import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStateBySlug, getAllStateSlugs } from '@/data/states';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllStateSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return { title: 'State Not Found' };

  return {
    title: `${state.name} - REACH & CARE Impact`,
    description: state.heroSubtitle,
    keywords: ['REACH', 'CARE', 'Saukhyam', state.name, 'menstrual health', 'reusable pads'],
    openGraph: {
      title: `${state.name} | Saukhyam REACH & CARE`,
      description: state.tagline,
      images: [{ url: state.heroImage, alt: state.name }],
    },
  };
}

export default async function StateSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getStateBySlug(slug)) notFound();
  return children;
}
