import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  draftMode().enable();
  return NextResponse.redirect(new URL("https://staging.centrox.ai/blogs", request.url));
}
