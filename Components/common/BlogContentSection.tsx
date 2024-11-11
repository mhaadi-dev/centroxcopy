import classNames, { section_wrapper_class } from "@/helpers/common";
import React from "react";
import SocialIconsContainer from "./SocialIconsContainer";
import TableOfContent from "./TableOfContent";
import MainBlogContent from "./MainBlogContent";
import BlogSideBars from "./BlogSideBars";

const BlogContentSection = () => {
  return (
    <section
      className={classNames(
        section_wrapper_class,
        "flex lg:min-h-screen   justify-between "
      )}
    >
      <div className="w-[25%] hidden lg:flex flex-col max-h-[90vh] gap-y-4 bottom-0 sticky  top-0 ">
        <SocialIconsContainer />
        <TableOfContent />
      </div>

      <MainBlogContent />
      <BlogSideBars />

    </section>
  );
};

export default BlogContentSection;
