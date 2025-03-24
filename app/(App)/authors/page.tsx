import classNames, {
  section_wrapper_class,
  text_h1_main,
  text_para_3
} from "@/helpers/common";
import Image from "next/image";
import React from "react";
import LinkedIn from "@/assets/linkedin.svg";
import mhbn from "@/assets/Mhbn.png";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { title } from "node:process";
export const metadata = {
  title:"Authors | Blogs-Centrox AI",
  description: "Learn about our AI experts content writers.",
  alternates: {
    canonical: "https://centrox.ai/authors"
  }
}
async function getAuthors() {
  const query = `*[_type == "author"]{
      _id,
      name,
      bio,
      linkedin,
      "imageUrl": image.asset->url,
      alt,
      "slug": slug.current
    }`;
  return await client.fetch(query);
}

const Page = async () => {
  const authors = await getAuthors();

  return (
    <main className={classNames(section_wrapper_class, "")}>
      <h1 className={classNames(text_h1_main, "!mt-32 mb-8")}>Authors</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-5 lg:gap-10 3xl:gap-20 w-full mx-auto text-white">
        {authors.map((author: any) => (
          <Link
            key={author._id}
            href={`/authors/${author._id}`}
            className="flex flex-col justify-center items-center p-4 rounded-xl bg-black"
            style={{
              border: "1px solid rgba(3, 34, 182, 0.20)",
              background:
                "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
              boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
              backdropFilter: "blur(18px)"
            }}
          >
            {author.imageUrl && (
              <Image
                src={author.imageUrl}
                alt={author.alt || "Author Image"}
                width={384}
                height={512}
                className="rounded-xl object-cover aspect-square bg-black"
              />
            )}

            <div className="w-full">
              <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
                {author.name}
              </p>
              <div className="flex justify-between items-baseline">
                <p
                  className={classNames(
                    text_para_3,
                    "text-blue-azure font-medium"
                  )}
                >
                  CEO Centrox AI
                </p>
                {author.linkedin && (
                  <Link
                    href={author.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 flex items-center gap-2 text-blue-500 hover:underline"
                  >
                    <Image
                      src={LinkedIn}
                      className="w-5"
                      alt="LinkedIn Profile"
                    />
                  </Link>
                )}
              </div>
              <div className="flex flex-col justify-between items-left w-full mt-1">
                <p className={classNames(text_para_3)}>
                  {author.bio || "No biography available."}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
