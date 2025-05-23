import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { GET_BLOGS_BY_CATEGORY_QUERY } from "@/sanity/query";

export const dynamic = 'force-static';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json({ error: "Category is required" }, { status: 400 });
  }

  try {
    const query = GET_BLOGS_BY_CATEGORY_QUERY(category);
    const blogs = await client.fetch(query, { category }, { cache: "force-cache" });
    const limitedBlogs = blogs.length > 6 ? blogs.slice(0, 6) : blogs;
    return NextResponse.json(limitedBlogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}