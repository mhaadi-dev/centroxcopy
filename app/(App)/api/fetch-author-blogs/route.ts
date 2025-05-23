import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const dynamic = 'force-static';

const GET_AUTHOR_BLOGS_QUERY = groq`
  *[_type == "blog" && author._ref == $authorId] | order(_createdAt desc)[$startRange...$endRange] {
    _id,
    name,
    meta_title,
    meta_description,
    category->{
      _id,
      category_name
    },
    subslug,
    label,
    content_item {
      image { alt, "image": asset->url },
      alt,
      date,
      tags,
      linkText,
      linkWithIcon,
    
    },
    author->{
      _id,
      name,
      image,
      bio
    },
    keywords,
    _createdAt
  }
`;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const startRange = parseInt(searchParams.get("startRange") || "0");
  const endRange = parseInt(searchParams.get("endRange") || "3");
  const authorId = searchParams.get("authorId");

  if (
    isNaN(startRange) ||
    isNaN(endRange) ||
    startRange < 0 ||
    endRange <= startRange ||
    !authorId
  ) {
    return NextResponse.json(
      {
        error:
          "Invalid parameters. Ensure startRange, endRange are valid, endRange > startRange, and authorId is provided."
      },
      { status: 400 }
    );
  }

  try {
    const blogData = await client.fetch(GET_AUTHOR_BLOGS_QUERY, {
      startRange,
      endRange,
      authorId
    }, { cache: "force-cache" });
    return NextResponse.json(blogData);
  } catch (error) {
    console.error("Error fetching author blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch author blogs" },
      { status: 500 }
    );
  }
}
