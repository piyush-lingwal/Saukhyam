import { notFound } from 'next/navigation';
import { getStateBySlug } from '@/data/states';
import StatePageView from '@/components/states/StatePageView';

type Props = { params: Promise<{ slug: string }> };

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();
  return <StatePageView state={state} />;
}
