// ./src/components/Posts.tsx

import { POSTS_QUERYResult } from "@/sanity.types";
import Link from "next/link";


export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts.map((post) => (
        //@ts-ignore
        <li key={post._id}>
          <Link
            className="block p-4 hover:bg-blue-50"
                    //@ts-ignore
            href={`blog/posts/${post?.slug?.current}`}>  {post?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}