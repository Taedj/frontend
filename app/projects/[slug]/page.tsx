
import { getProjectBySlug } from '@/lib/github';
import ProjectView from '@/components/Projects/ProjectView';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);

  if (!data) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${data.config.name} | ${data.config.brand}`,
    description: data.hero.subtitle,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  
  if (!data) {
    notFound();
  }

  return <ProjectView data={data} />;
}
