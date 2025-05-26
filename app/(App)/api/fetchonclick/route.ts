import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Update this path if necessary
import {  GET_PAGINATED_ARTICLES_QUERY_ONSPECIFICPAGE} from '@/sanity/query';

export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      const { lastId,index } = body;
  
    
  
      const blogData = await client.fetch(GET_PAGINATED_ARTICLES_QUERY_ONSPECIFICPAGE, { lastId,index }, { cache: "force-cache" });
  
      return NextResponse.json(blogData);
    } catch (error) {
      console.error('Error fetching paginated blog data:', error);
      return NextResponse.json({ error: 'Failed to fetch paginated blogs' }, { status: 500 });
    }
  }
  