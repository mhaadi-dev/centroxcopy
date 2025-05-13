import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { GET_PAGINATED_CASE_STUDIES } from "@/sanity/query";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startRange = parseInt(searchParams.get("startRange") || "0", 10);
  const endRange = parseInt(searchParams.get("endRange") || "6", 10);

  try {
    const caseStudies = await client.fetch(GET_PAGINATED_CASE_STUDIES, {
      startRange,
      endRange,
    });
    return NextResponse.json(caseStudies);
  } catch (error) {
    console.error("Error fetching paginated case studies:", error);
    return NextResponse.json(
      { error: "Failed to fetch case studies" },
      { status: 500 }
    );
  }
}