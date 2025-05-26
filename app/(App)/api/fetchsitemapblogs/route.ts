import { NextResponse } from 'next/server';
import { SITE_MAP_GET_BLOGS_AND_CATEGORIES_QUERY } from '@/sanity/query';
import { client } from '@/sanity/lib/client';

export const dynamic = 'force-static';
export const revalidate=process.env.NEXT_PUBLIC_ENV === 'staging' ? 10:600
export async function GET() {
  try {
    const data = await client.fetch(SITE_MAP_GET_BLOGS_AND_CATEGORIES_QUERY, {}, { cache: "force-cache" });
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching sitemap blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
