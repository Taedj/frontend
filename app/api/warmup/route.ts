import { NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// All the endpoints we need to pre-fetch for the portfolio homepage
const ENDPOINTS = {
  config: '/core/config/',
  services: '/home/services/',
  skills: '/home/skills/',
  works: '/home/works/',
  educations: '/home/educations/',
  experiences: '/home/experiences/',
  reviews: '/home/reviews/',
  categories: '/home/services_categories/',
};

async function fetchEndpoint(path: string): Promise<unknown> {
  try {
    const res = await fetch(`${BACKEND_URL}${path}`, {
      cache: 'no-store', // Always fetch fresh from backend
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(`[warmup] Failed to fetch ${path}:`, err);
    return null;
  }
}

export async function GET() {
  const startTime = Date.now();

  // Fetch all endpoints in parallel
  const results = await Promise.allSettled(
    Object.entries(ENDPOINTS).map(async ([key, path]) => {
      const data = await fetchEndpoint(path);
      return [key, data] as const;
    })
  );

  const payload: Record<string, unknown> = {};
  for (const result of results) {
    if (result.status === 'fulfilled' && result.value[1] !== null) {
      payload[result.value[0]] = result.value[1];
    }
  }

  const elapsed = Date.now() - startTime;
  console.log(`[warmup] Fetched all data in ${elapsed}ms`);

  return NextResponse.json(
    { data: payload, fetchedAt: new Date().toISOString(), elapsed },
    {
      headers: {
        // Cache on Vercel edge for 10 minutes, serve stale while revalidating
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=300',
      },
    }
  );
}
