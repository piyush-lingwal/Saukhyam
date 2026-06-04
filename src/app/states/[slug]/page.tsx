import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getExperience, getAllExperienceSlugs } from '@/data/states/experienceData';
import StateExperiencePage from '@/components/states-experience/StateExperiencePage';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllExperienceSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getExperience(slug);
  if (!data) return { title: 'State Not Found' };
  return {
    title: `${data.hero.title} | Saukhyam Impact`,
    description: data.hero.subtitle,
    keywords: ['Saukhyam', data.name, 'menstrual health', 'reusable pads', 'NGO', 'women empowerment'],
    openGraph: {
      title: data.hero.title,
      description: data.hero.subtitle,
      images: [{ url: data.hero.image, alt: data.name }],
    },
  };
}

export default async function StateExperienceRoute({ params }: Props) {
  const { slug } = await params;
  const data = getExperience(slug);
  if (!data) notFound();
  return <StateExperiencePage data={data} />;
}
