import { getProjectBySlug } from '@/lib/github';
import PrivacyPolicyView from '@/components/Projects/PrivacyPolicyView';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = await getProjectBySlug(slug);

    const name = data?.config.name || (slug === 'maydi3ch' ? 'Ma Ydi3ch' : slug);
    const brand = data?.config.brand || 'Taedj Dev';

    return {
        title: `Privacy Policy - ${name} | ${brand}`,
        description: `Official Privacy Policy and Data Safety disclosures for ${name}.`,
    };
}

export default async function ProjectPrivacyPolicyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getProjectBySlug(slug);

    const projectName = data?.config.name || (slug === 'maydi3ch' ? 'Ma Ydi3ch' : slug);
    const projectSlug = slug;
    const brandName = data?.config.brand || 'Taedj Dev';

    return (
        <PrivacyPolicyView
            projectName={projectName}
            projectSlug={projectSlug}
            brandName={brandName}
        />
    );
}
