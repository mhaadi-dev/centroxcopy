import { NextResponse } from 'next/server';
import { SITE_MAP_GET_BLOGS_AND_CATEGORIES_QUERY } from '@/sanity/query';
import { client } from '@/sanity/lib/client';

export async function GET() {
  try {
    const data = await client.fetch(SITE_MAP_GET_BLOGS_AND_CATEGORIES_QUERY);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching sitemap blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}
