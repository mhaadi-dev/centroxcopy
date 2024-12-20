// app/api/fetchBlogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Update this path if necessary
import { GET_PAGINATED_ARTICLES_QUERY, SEARCH_BLOGS_QUERY } from '@/sanity/query';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lastId = searchParams.get('lastId') || '';

  try {
    const blogData = await client.fetch(GET_PAGINATED_ARTICLES_QUERY, { lastId });

    return NextResponse.json(blogData);
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      const { keyword } = body;
  
      if (!keyword || typeof keyword !== 'string') {
        return NextResponse.json({ error: 'Keyword is required and should be a string' }, { status: 400 });
      }
  
      // Fetch blogs using the keyword
      const blogData = await client.fetch(SEARCH_BLOGS_QUERY(keyword));
  
      return NextResponse.json(blogData);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
  }
  