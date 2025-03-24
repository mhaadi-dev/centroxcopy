import "server-only";

import { draftMode } from "next/headers";
import { createClient, type QueryOptions, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

const isStaging = process.env.NEXT_PUBLIC_ENV === "staging";
const isProduction = process.env.NEXT_PUBLIC_ENV === "production";
const allowCDN = !isStaging; 

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: allowCDN, 
  token: isProduction ? undefined : undefined, 
  stega: {
    enabled: isStaging,
    studioUrl: "/studio",
  },
  ignoreBrowserTokenWarning: true, // Prevent warnings in the browser
});

/**
 * Fetch data from Sanity with support for preview drafts.
 */
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 10,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  let isDraftMode = false;

  try {
    isDraftMode = isStaging && draftMode().isEnabled; 
  } catch (error) {
    console.warn("draftMode() must be called within a request scope.");
  }

  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  let dynamicRevalidate = revalidate;
  if (isDraftMode) {
    dynamicRevalidate = 0;
  } else if (tags.length) {
    dynamicRevalidate = false; 
  }

  return client.fetch<QueryResponse>(query, params, {
    token: isDraftMode ? token : undefined, 
    perspective: isDraftMode ? "previewDrafts" : "published", 
    next: {
      revalidate: dynamicRevalidate,
      tags,
    },
  });
}

/**
 * Ensure createdAt and updatedAt fields are set before saving.
 */
const setCreatedAtAndUpdatedAt = async (doc: any) => {
  if (!doc._createdAt) {
    doc.createdAt = new Date().toISOString();
  }
  doc.updatedAt = new Date().toISOString();
  return doc;
};

/**
 * Create or update a blog in Sanity.
 */
export async function createOrUpdateBlog(blog: any) {
  const modifiedBlog = await setCreatedAtAndUpdatedAt(blog);
  await client.createOrReplace(modifiedBlog);
}
