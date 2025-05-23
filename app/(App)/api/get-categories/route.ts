import { client } from "@/sanity/lib/client";
import { GET_ALL_CATEGORIES } from "@/sanity/query";
import { NextResponse } from "next/server";

export const dynamic = 'force-static';

// Fetch all categories from Sanity
export async function GET() {
  try {
    const allCategories = await client.fetch(GET_ALL_CATEGORIES, {}, { cache: "force-cache" });

    // Return the categories as JSON
    return NextResponse.json(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Error fetching categories" },
      { status: 500 }
    );
  }
}
