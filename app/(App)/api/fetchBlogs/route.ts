// app/api/fetchBlogs/route.ts
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import {
  GET_PAGINATED_ARTICLES_QUERY,
  PAGINATED_SEARCH_BLOGS_QUERY,
  TOTAL_SEARCH_BLOGS_COUNT_QUERY
} from "@/sanity/query";
import { calculateReadingTime } from "@/sanity/lib/helpers";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const startRange = parseInt(searchParams.get("startRange") || "0");
  const endRange = parseInt(searchParams.get("endRange") || "3");

  if (
    isNaN(startRange) ||
    isNaN(endRange) ||
    startRange < 0 ||
    endRange <= startRange
  ) {
    return NextResponse.json(
      {
        error:
          "Invalid range parameters. Ensure startRange and endRange are valid and endRange > startRange."
      },
      { status: 400 }
    );
  }

  try {
    const blogData = await client.fetch(GET_PAGINATED_ARTICLES_QUERY, {
      startRange,
      endRange
    });
    // const blogDataWithReadingTime = blogData?.map((blog: any) => ({
    //   ...blog,
    //   duration: calculateReadingTime(blog.content_item?.blog_data || ''),
    //   content_item: {
    //     ...blog.content_item,
    //     blog_data: [],
    //   },
    // }));
    return NextResponse.json(blogData);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keyword, startRange, endRange } = body;
    if (!keyword || typeof keyword !== "string") {
      return NextResponse.json(
        { error: "Keyword is required and should be a string" },
        { status: 400 }
      );
    }

    const blogData = await client.fetch(
      PAGINATED_SEARCH_BLOGS_QUERY(keyword, startRange, endRange)
    );
    const totalBlogs = await client.fetch(
      TOTAL_SEARCH_BLOGS_COUNT_QUERY(keyword)
    );
    return NextResponse.json({ blogData, totalBlogs });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
