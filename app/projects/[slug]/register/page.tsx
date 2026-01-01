
import { getProjectBySlug } from '@/lib/github';
import RegistrationView from '@/components/Projects/RegistrationView';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  if (!data) return { title: 'Not Found' };
  return { title: `Register - ${data.config.name}`, description: `Create your account for ${data.config.name}` };
}

export default async function RegisterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  if (!data) notFound();
  return <RegistrationView data={data} />;
}
