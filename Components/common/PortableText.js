import classNames from "@/helpers/common";
import { slugify } from "@/sanity/lib/helpers";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const text_h1_main = "text-[#E5E7EB] text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] font-heading font-semibold leading-[2rem] 2xl:leading-[3rem]";
const text_h2 = "text-[#E5E7EB] text-[1.35rem] lg:text-[1.73rem] 2xl:text-[2.4rem] font-heading font-semibold leading-[2rem] 2xl:leading-[3.7rem]";
const text_h3 = "text-[#E5E7EB] text-[1.2rem] lg:text-[1.38rem] 2xl:text-[1.65rem] font-heading font-semibold leading-[2rem] 2xl:leading-[3rem]";
const text_h4 = "text-[#E5E7EB] text-[1.1rem] lg:text-[1.15rem] 2xl:text-[1.5rem] font-heading font-semibold leading-[2rem] 2xl:leading-[3rem]";
const text_h5 = "text-[#E5E7EB] text-[1rem] lg:text-[1.1rem] 2xl:text-[1.35rem] font-heading font-semibold leading-[2rem] 2xl:leading-[3rem]";
const text_h6 = "text-[#E5E7EB] text-[0.9rem] lg:text-[1.1rem] 2xl:text-[1.16rem] font-heading font-semibold leading-[2rem] 2xl:leading-[3rem]";
const text_para_3 = "text-[#E5E7EB] text-[0.75rem] lg:text-[0.85rem] 2xl:text-[1rem] leading-[1.35rem] 2xl:leading-[1.6rem]";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const PortableComponent = {
  block: {
    h1: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h1 id={anchorId} className={classNames(text_h1_main)}>{children}</h1>;
    },
    h2: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h2 id={anchorId} className={classNames(text_h2, "mt-4 mb-1 lg:mb-2")}>{children}</h2>;
    },
    h3: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h3 id={anchorId} className={classNames(text_h3, "mt-4 mb-1 lg:mb-2")}>{children}</h3>;
    },
    h4: ({ children }) => {
      const anchorId = slugify(children?.[0] || children?.props?.children[0]);
      return <h4 id={anchorId} className={classNames(text_h4, "mt-4 mb-1")}>{children}</h4>;
    },
    h5: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h5 id={anchorId} className={classNames(text_h5, "mt-4 mb-1")}>{children}</h5>;
    },
    h6: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h6 id={anchorId} className={classNames(text_h6, "mt-4 mb-1")}>{children}</h6>;
    },
    normal: ({ children }) => <p className="text-[0.88rem] mb-2 lg:text-[0.95rem] 2xl:text-[1.15rem] text-[#E5E7EB] text-start lg:text-justify">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-4 mb-2 text-white">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="text-left text-[0.88rem] lg:text-[0.95rem] 2xl:text-[1.15rem] lg:text-left list-disc pl-5 text-white">{children}</ul>,
    number: ({ children }) => <ol className="text-left lg:text-left list-decimal pl-5 my-4 flex flex-col gap-2 text-white">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-white">{children}</em>,
    highlight: ({ children }) => (
      <span className="bg-[#079DFC4D] px-1">{children}</span>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.newTab ? "_blank" : "_self"}
        rel={`${value?.newTab ? "noopener noreferrer" : ""} ${value?.nofollow ? "nofollow" : ""}`.trim()}
        className="text-blue-500 underline"
      >
        {children}
      </a>
    ),
    youtubeLink: ({ value, children }) => {
      const videoId = getYouTubeVideoId(value?.url);

      if (!videoId) {
        return <span className="text-red-500">{children} (Invalid YouTube URL)</span>;
      }
      return (
        <div className="my-6 w-full overflow-visible">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={children?.toString() || "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full !h-[60vh]  rounded-lg"
          />
        </div>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).url();
      return (
        <figure className="my-8">
          <img src={imageUrl} alt={value.alt || "Image"} title={value.alt || "Image"} className="w-full h-auto" />
          {value.caption && <figcaption className="text-md text-center text-gray-400 mt-2">{value.caption}</figcaption>}
        </figure>
      );
    },
    table: ({ value }) => {
      const { thead, rows, caption } = value;
      return (
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-gray-300">
            {thead && (
              <thead className="bg-gray-900">
                <tr>
                  {thead.map((header, index) => (
                    <th key={index} className="px-4 py-2 capitalize border border-gray-300 font-semibold text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows?.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={cellIndex} className={classNames(text_para_3, "px-4 py-2 text-sm lg:text-x border border-gray-300")}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {caption && <p className="text-sm w-full text-center text-gray-500 mt-2">{caption}</p>}
        </div>
      );
    },
    codeBlock: ({ value }) => {
      const { language, code } = value;
      return (
        <div className="my-6">
          <SyntaxHighlighter language={language || "javascript"} style={dracula} className="rounded-lg p-4">
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};