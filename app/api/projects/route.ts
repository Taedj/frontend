import { getProjects } from '@/lib/github';
import { NextResponse } from 'next/server';

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://sticky-grata-tidjanizitouni-028d59c3.koyeb.app';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Try to fetch dynamic ecosystem projects from Django backend first
    const backendUrl = `${BACKEND_URL.replace(/\/$/, '')}/home/ecosystem-projects/`;
    const res = await fetch(backendUrl, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const data = await res.json();
      const results = Array.isArray(data) ? data : data?.results;
      if (Array.isArray(results) && results.length > 0) {
        return NextResponse.json(results);
      }
    }
  } catch (err) {
    console.warn('[Ecosystem Projects] Backend fetch failed, falling back to local/GitHub:', err);
  }

  // 2. Fallback to existing GitHub / local sync file if backend returns empty or error
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (fallbackErr) {
    console.error('Failed to fetch projects fallback:', fallbackErr);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
