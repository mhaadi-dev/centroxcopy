export const PortableComponent = {
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
    // Other custom types can be added here
  },
  block: {
    h1: ({ children }) => <h1 className="text-6xl font-bold my-4 text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-5xl font-semibold my-4 text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-4xl font-medium my-4 text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-3xl font-medium my-4 text-white">{children}</h4>,
    h5: ({ children }) => <h5 className="text-2xl font-medium my-4 text-white">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xl font-medium my-4 text-white">{children}</h6>,
    p: ({ children }) => <p className="text-base font-medium my-4 text-white lg:text-md">{children}</p>,
    normal: ({ children }) => <p className="text-base text-center lg:text-left lg:text-md text-white">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-white">{children}</blockquote>
    ),
    // Add other block styles as needed
  },
  list: {
    bullet: ({ children }) => <ul className="text-center lg:text-left list-disc pl-5 my-4 text-white">{children}</ul>,
    number: ({ children }) => <ol className="text-center lg:text-left  list-decimal pl-5 my-4 text-white">{children}</ol>,
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
};
