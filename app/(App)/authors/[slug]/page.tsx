// app/authors/[slug]/page.tsx
import { groq } from "next-sanity";
import classNames, {
  section_wrapper_class,
  text_h3_class,
  text_para_2
} from "@/helpers/common";
import Image from "next/image";
import React from "react";
import TabsWithGridCardsPagination from "@/Components/common/TabsWithGridCardsPagination";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { cleanMetaString } from "@/sanity/lib/helpers";
import GridBlogCardsWithPagination from "@/Components/common/GridBlogCardsWithPagination";

// Define the author type
type Author = {
  _id: string;
  name: string;
  slug: { current: string };
  bio?: string;
  image?: any;
  alt?: string;
  linkedin?: string;
};

// Define blog type based on your BlogSchema
type Blog = {
  _id: string;
  name: string;
  label: { current: string };
  mainImage?: any;
  category: { _id: string; title: string };
};

// Query for author data
const authorQuery = groq`
  *[_type == "author" && _id == $id][0] {
    _id,
    name,
    slug,
    bio,
    image,
    alt,
    linkedin
  }
`;

// Query for total blog count by author
const totalBlogCountQuery = groq`
  count(*[_type == "blog" && author._ref == $id])
`;

type Props = {
  params: {
    slug: string;
  };
};

// Generate static paths for all authors
export async function generateStaticParams() {
  const query = groq`*[_type == "author"]{_id}`;
  const authors = await client.fetch(query);
  return authors.map((author: { _id: string }) => ({
    slug: author._id
  }));
}

export default async function AuthorPage({ params: paramsProp }: Props) {
  const params = await paramsProp;
  const { slug } = params;
  // Fetch author data using ID
  const author: Author = await client.fetch(authorQuery, { id: slug });

  // Fetch total blog count for the author
  const totalBlogCount = await client.fetch(totalBlogCountQuery, { id: slug });

  // If author not found, return 404
  if (!author) {
    notFound();
  }

  return (
    <section className={classNames("py-10 bg-black")}>
      <div
        className={classNames(
          "w-full bg-black text-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6",
          section_wrapper_class
        )}
      >
        {/* Author Image */}
        <div className="flex-shrink-0">
          {author.image ? (
            <Image
              src={urlFor(author.image).url()}
              alt={author.alt || author.name}
              width={200}
              height={200}
              className="rounded-lg shadow-md object-cover"
            />
          ) : (
            <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>

        {/* Author Details */}
        <div className="flex flex-col">
          <h2 className={classNames(text_h3_class, "text-blue-azure")}>
            About {author.name}
          </h2>
          {author.bio ? (
            <p className={classNames(text_para_2)}>{author.bio}</p>
          ) : (
            <p className={classNames(text_para_2)}>
              No biography available for this author.
            </p>
          )}

          {/* Social Links */}
          {author.linkedin && (
            <div className="mt-4">
              <p className="font-semibold text-gray-300">
                Follow {author.name}
              </p>
              <div className="flex gap-3 mt-2 text-blue-500">
                <a
                  href={author.linkedin}
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Author's Blogs Section */}
      <div className="w-full mt-10">
        <h3 className={classNames(text_h3_class, section_wrapper_class)}>
          Blogs by {author.name}
        </h3>
        <GridBlogCardsWithPagination
          showPagination
          cardsPerPage={5}
          isAuthorPage
          authorId={slug}
          totalBlogsCount={totalBlogCount}
        />
      </div>
    </section>
  );
}

export async function generateMetadata({ params: paramsProp }: Props) {
  const params = await paramsProp;
  const author: Author = await client.fetch(authorQuery, { id: params.slug });

  if (!author) {
    return {
      title: "Author Not Found"
    };
  }

  return {
    title: `${cleanMetaString(author.name)} | Author Profile`,
    description:
      cleanMetaString(author.bio || "") ||
      `Read more about  ${cleanMetaString(author.name)} and their blogs`
  };
}
