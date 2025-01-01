// ./src/sanity/client.ts

import "server-only";

import { draftMode } from "next/headers";
import { createClient, type QueryOptions, type QueryParams } from "next-sanity";

import { token } from "@/helpers/sanityToken";
import { dataset, projectId } from "@/config/secret";

export const client = createClient({
  projectId,
  dataset,
  apiVersion : "2022-03-07",
  useCdn: true,
  stega: {
    enabled :true,
    studioUrl: "/studio",
  },
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 0,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = true
  if (isDraftMode && !token) {
    
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    // Do not cache in Draft Mode
    dynamicRevalidate = 0;
  } else if (tags.length) {
    // Cache indefinitely if tags supplied, purge with revalidateTag()
    dynamicRevalidate = false;
  }

  return client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode &&
      {
        token: token,
        perspective: "previewDrafts",
        stega: true,
      } satisfies QueryOptions),
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}