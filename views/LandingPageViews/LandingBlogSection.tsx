"use client";
import React, { useEffect, useState } from "react";
import { ProductsCarousal } from "@/Components/common/ProductsCarousal";
import SectionTag from "@/Components/common/SectionTag";
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";
import { slugify } from "@/sanity/lib/helpers";

interface CardsDataI {
  _id: string;
  name: string;
  slug: { _type: string; current: string };
  subslug: { _type: string; current: string };
  content_item: {
    linkWithIcon: boolean;
    isSearchResult: boolean | null;
    label: string;
    duration: string;
    name: string;
    subdescription: string;
    tags: string[];
    linkText: string;
    image: any;
    title: string;
    category: string;

  };
}

interface PropsI {
  cardsData?: CardsDataI[];
  className?: string;
  heading?: string;
  description?: string;
  category?: string;
}

const LandingBlogSection = ({ cardsData, className, heading, description, category }: PropsI) => {
  const [similarBlogs, setSimilarBlogs] = useState<CardsDataI[]>(cardsData || []);
  const [isVisible, setIsVisible] = useState(true); // Force true to test fetch
  const [error, setError] = useState<string | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  // Log rendering and check initial visibility
  useEffect(() => {
    // console.log("LandingBlogSection rendered, props:", { category, heading, description });

    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInViewport = rect.top >= -200 && rect.top <= window.innerHeight + 200;
        if (isInViewport) {
          console.log("Section is in/near viewport on mount, setting isVisible to true");
          setIsVisible(true);
        }
      }
    };

    checkVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Section entered viewport, setting isVisible to true");
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Fetch related blogs when component is visible
  useEffect(() => {
    // console.log("Fetch useEffect, conditions:", { isVisible, category, hasCardsData: !!cardsData });
    if (!isVisible || cardsData) {
      // console.log("Fetch skipped:", { isVisible, category, hasCategory: !!category, hasCardsData: !!cardsData });
      return;
    }

    if (!category) {
      console.warn("Category is empty, proceeding with fetch to test API");
    }

    const fetchSimilarBlogs = async () => {
      
      console.log("Initiating fetch for category:", category || "empty");
      try {
        const response = await fetch(`/api/blogs-by-category?category=${slugify(category || "")}`, {
          cache: "force-cache"
        });
        console.log("API response:", { status: response.status, ok: response.ok });
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const blogs = await response.json();
        // console.log("Fetched blogs:", blogs);

        const mappedBlogs: CardsDataI[] = blogs.map((blog: any) => ({
          _id: blog._id || "",
          name: blog.name || blog.meta_title || "",
          slug: blog.label || { _type: "slug", current: blog.slug?.current || "" },
          subslug: blog.subslug || { _type: "slug", current: "" },
          content_item: {
            linkWithIcon: blog.content_item?.linkWithIcon ?? false,
            isSearchResult: blog.content_item?.isSearchResult ?? null,
            label: blog.content_item?.label || blog.meta_title || "",
            duration: blog.content_item?.duration || "",
            name: blog.content_item?.name || blog.name || "",
            subdescription: blog.content_item?.subdescription || blog.meta_description || "",
            tags: blog.content_item?.tags || [],
            linkText: blog.content_item?.linkText || "Read More",
            image: blog.content_item?.image || blog.content_item?.preview_image || null,
            title: blog.content_item?.title || blog.meta_title || "",
            category: blog.content_item?.category || blog.category?.category_name || ""
          
          }
        }));

        setSimilarBlogs(blogs || []);
      } catch (error: any) {
        console.error("Error fetching similar blogs:", error.message);
        setError("Failed to load related blogs. Please try again later.");
      }
    };

    fetchSimilarBlogs();
  }, [isVisible, category, cardsData]);

  // Render error state if fetching fails
  if (error) {
    return (
      <section className={classNames(section_wrapper_class, className)} ref={ref}>
        <section aria-label="Centrox Blog" className="flex flex-col gap-y-4">
          <SectionTag text="Blogs" />
          <h2 className={classNames(text_h2_class, "text-center")}>
            {heading || "Centrox Blog Stay Ahead of the Curve"}
          </h2>
          <p className={classNames(text_para_2, "text-center w-full sm:w-[60%] mx-auto")}>
            {description ||
              "Our AI engineers are active contributors in the community and regularly share their insights and expertise on our blog. Explore their latest articles on Generative AI and LLM."}
          </p>
          <p className="text-red-500 text-center">{error}</p>
        </section>
      </section>
    );
  }

  // Don't render if no blogs are available
  if (!similarBlogs.length) {
    console.log("No blogs to render, returning null");
    return null;
  }

  return (
    <section className={classNames(section_wrapper_class, className)} ref={ref}>
      <section aria-label="Centrox Blog" className="flex flex-col gap-y-4">
        <SectionTag text="Blogs" />
        <h2 className={classNames(text_h2_class, "text-center")}>
          {heading || "Centrox Blog Stay Ahead of the Curve"}
        </h2>
        <p className={classNames(text_para_2, "text-center w-full sm:w-[60%] mx-auto")}>
          {description ||
            "Our AI engineers are active contributors in the community and regularly share their insights and expertise on our blog. Explore their latest articles on Generative AI and LLM."}
        </p>
      </section>

      <ProductsCarousal data={similarBlogs.slice(0,6)} />
    </section>
  );
};

export default LandingBlogSection;