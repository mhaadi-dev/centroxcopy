import classNames, { text_h1_main, text_h2_class, text_h3_class, text_para_2, text_para_3 } from "@/helpers/common";
import { slugify } from "@/sanity/lib/helpers";
import { urlFor } from "@/sanity/lib/image";
import React from "react";

export const PortableComponent = {
  block: {
    h1: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h1 id={anchorId} className={classNames(text_h1_main)}>{children}</h1>;
    },
    h2: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h2 id={anchorId} className={classNames(text_h2_class)}>{children}</h2>;
    },
    h3: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h3 id={anchorId} className={classNames(text_h3_class)}>{children}</h3>;
    },
    h4: ({ children }) => {
      const anchorId = slugify(children?.[0] || children?.props?.children[0]);
      return <h4 id={anchorId} className="text-3xl font-medium my-4 text-white">{children}</h4>;
    },
    h5: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h5 id={anchorId} className="text-2xl font-medium my-4 text-white">{children}</h5>;
    },
    h6: ({ children }) => {
      const anchorId = slugify(children?.[0]);
      return <h6 id={anchorId} className="text-xl font-medium my-4 text-white">{children}</h6>;
    },
    p: ({ children }) => <p className={classNames(text_para_3)}>{children}</p>,
    normal: ({ children }) => <p className="text-base text-start lg:text-left lg:text-lg text-[#E5E7EB]">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-white">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="text-left lg:text-left list-disc pl-5 my-4 text-white">{children}</ul>,
    number: ({ children }) => <ol className="text-left lg:text-left list-decimal pl-5 my-4 text-white">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic text-white">{children}</em>,
    link: ({ value, children }) => (
      <a href={value?.href} className="text-blue-500 underline">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).url();
      
      return (
        <figure className="my-4">
        <img 
          src={imageUrl} 
          alt={value.alt || "Image"} 
          title={value.alt || "Image"} 
          className="w-full h-auto" 
        />
        {value.caption && <figcaption className="text-sm text-gray-400 mt-2">{value.caption}</figcaption>}
      </figure>
      );
    },
  },
};
