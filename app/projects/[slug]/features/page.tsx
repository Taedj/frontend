
import { getProjectBySlug } from '@/lib/github';
import FeaturesView from '@/components/Projects/FeaturesView';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  if (!data) return { title: 'Not Found' };
  return { title: `Features - ${data.config.name}`, description: `Full capabilities report for ${data.config.name}` };
}

export default async function FeaturesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  if (!data) notFound();
  return <FeaturesView data={data} />;
}
