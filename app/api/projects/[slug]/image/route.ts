
import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Taedj';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');
    const branch = searchParams.get('branch') || 'master';

    if (!path) {
        return new NextResponse('Missing path', { status: 400 });
    }

    const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${slug}/contents/${path}?ref=${branch}`;

    try {
        const res = await fetch(url, {
            headers: {
                ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
                Accept: 'application/vnd.github.v3.raw',
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            return new NextResponse('Image not found', { status: res.status });
        }

        const blob = await res.blob();
        const contentType = res.headers.get('content-type') || 'image/png';

        return new NextResponse(blob, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error) {
        console.error('Image proxy error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
