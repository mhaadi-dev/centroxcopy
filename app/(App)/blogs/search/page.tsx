"use client";
import IndustryBanner from "@/Components/common/IndustryBanner";
import SearchResultComponent from "@/Components/common/SearchResultComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SubnavBar from "@/Components/Navbar/SubnavBar";

// export const metadata = {
//   title: "Search Blogs | Centrox AI",
//   description:
//     "Search wide range of blogs related to AI.",
//   alternates: {
//     canonical: "https://centrox.ai/blogs/search"
//   }
// };
const Page = () => {
  const [showSearchComponent, setShowSearchComponent] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const router = useRouter();

  const toggleSearchComponent = (val: boolean) => {
    setShowSearchComponent(val);
  };

  useEffect(() => {
    if (!showSearchComponent) {
      router.push("/blogs");
    }
  }, [showSearchComponent, router]);

  const getAllCategories = async () => {
    try {
      const res = await fetch("/api/get-categories");
      const data = await res.json();
      setAllCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    // Set document title
    document.title = "Centrox Blogs - Stay Updated on AI and Tech";

    // Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the latest blogs on AI, Machine Learning, Generative AI, Data Annotation, and more. Stay updated with Centrox AI."
      );
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content =
        "Explore the latest blogs on AI, Machine Learning, Generative AI, Data Annotation, and more. Stay updated with Centrox AI.";
      document.head.appendChild(newMetaDescription);
    }

    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://centrox.ai/blogs/search");
    } else {
      const newCanonicalLink = document.createElement("link");
      newCanonicalLink.rel = "canonical";
      newCanonicalLink.href = "https://centrox.ai/blogs/search";
      document.head.appendChild(newCanonicalLink);
    }
  }, []);
// this is search page
  return (
    <>
      <SubnavBar
        imageLink="/blogs"
        title="Blogs"
        navItems={allCategories || []}
      />
      <SearchResultComponent setShowSearch={toggleSearchComponent} />
      <IndustryBanner
        heading="Good Stuff is all here"
        description="We will help you develop whatever you desire in your AI development. This is a placeholder."
        isBooking
        btnText="Talk to Our AI Expert"
      />
    </>
  );
};

export default Page;
