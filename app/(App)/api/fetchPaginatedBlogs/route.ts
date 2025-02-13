import { client } from "@/sanity/lib/client";
import { calculateReadingTime } from "@/sanity/lib/helpers";
import { GET_PAGINATED_BLOGS_BY_CATEGORY_QUERY } from "@/sanity/query";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
      const category = searchParams.get("category") || "";
      const page = parseInt(searchParams.get("page") || "1"); 
      const limit = 6; 
      const startRange = (page - 1) * limit;
      const endRange = startRange + limit;
  
      const query = GET_PAGINATED_BLOGS_BY_CATEGORY_QUERY(category, startRange, endRange);
      const blogsData = await client.fetch(query, {
        category,
        startRange,
        endRange
      });
      const blogDataWithReadingTime = blogsData?.map((blog: any) => ({
            ...blog,
            duration: calculateReadingTime(blog.content_item?.blog_data || ''), 
            content_item: {
              ...blog.content_item,
              blog_data: [], 
            },
          }));
//   console.log("blogs data on server",blogsData)
      return NextResponse.json(blogDataWithReadingTime);
    } catch (error) {
      console.error("Error fetching paginated blogs:", error);
      return NextResponse.json({ error: "Error fetching paginated blogs" }, { status: 500 });
    }
  }
  