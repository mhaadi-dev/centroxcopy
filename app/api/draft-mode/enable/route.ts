// ./src/app/api/draft-mode/enable/route.ts

import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

const clientWithToken = client.withConfig({ token });

export async function GET(request: NextRequest) {
  let url = request.url;
  url = url.replace('http://localhost:3000', 'https://staging.centrox.ai');
  
  console.log("request url is",url)
  if (!process.env.SANITY_API_READ_TOKEN) {
    console.log("Missing environment variable SANITY_API_READ_TOKEN")

    return new Response("Missing environment variable SANITY_API_READ_TOKEN", {
      status: 500,
    });
  }

  const { isValid, redirectTo = "/" ,studioOrigin} = await validatePreviewUrl(
    clientWithToken,
    url
  );
  console.log("STUDIO ORDIGIN ISSSSSSSSSSSSSS",studioOrigin)
  if (!isValid) {
    console.log("invalid secretttt")
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();
  return NextResponse.redirect(new URL(redirectTo, request.url));
}