// ./src/components/Post.tsx

import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { POSTS_QUERYResult } from "@/sanity.types";

export function Post({ post }: { post: POSTS_QUERYResult }) {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;
        return (
          <Image
            src={urlFor(value.asset._ref).width(600).height(400).url()}
            width={600}
            height={400}
            alt={value.alt || 'Blog Image'}
            className="my-4"
          />
        );
      },
      // Add other custom block types here if needed
    },
    // Optionally, customize other PortableText elements like marks, blocks, etc.
  };
    // @ts-ignore
  const { title, mainImage, body } = post || {};
    // console.log("body here in blog page is",body)
  return (
    <main className="container mx-auto prose prose-lg p-4 bg-white h-screen">
      {title ? <h1>{title}</h1> : null}
      {mainImage?.asset?._ref ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={urlFor(mainImage?.asset?._ref).width(300).height(300).url()}
          width={300}
          height={300}
          alt={title || ""}
        />
      ) : null}
      {body ? <PortableText value={body} components={components}/> : null}
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}