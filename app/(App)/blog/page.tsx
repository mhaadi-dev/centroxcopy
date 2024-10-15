// ./src/app/(blog)/page.tsx

import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { POSTS_QUERYResult } from "../../../sanity.types";
import { Posts } from "@/Components/delete/posts";

export default async function Page() {
  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
  });

  return (
    <div className="h-screen bg-white">
      <Posts posts={posts} />;
    </div>
  );
}
