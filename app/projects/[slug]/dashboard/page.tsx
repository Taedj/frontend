
import { getProjectBySlug } from '@/lib/github';
import DashboardView from '@/components/Projects/DashboardView';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  if (!data) return { title: 'Not Found' };
  return { title: `Dashboard - ${data.config.name}`, description: `Manage your ${data.config.name} account` };
}

export default async function DashboardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  if (!data) notFound();
  return <DashboardView data={data} />;
}
