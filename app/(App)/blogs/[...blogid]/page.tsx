import SubnavBar from '@/Components/Navbar/SubnavBar'
import BlogBanner from '@/Components/common/BlogBanner';
import BlogContentSection from '@/Components/common/BlogContentSection';
import IndustryBanner from '@/Components/common/IndustryBanner';
import classNames, { section_wrapper_class } from '@/helpers/common'
import LandingBlogSection from '@/views/LandingPageViews/LandingBlogSection';
import React from 'react'

const page = () => {
    const navItems = [
        {
          subNavTitle: "Artificial Intelligence",
          subItems: [
            { subTitle: "AI ethics and bias", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Machine Learning",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "ML Ops",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Generative AI",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Data Annotation",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        }
      ];
  return (
   <>
     <SubnavBar title='Blogs' navItems={navItems}/>
     <BlogBanner className="!mt-28 lg:!mt-56" heading='Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platformz' paraText='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.' date="Aug 14, 2024" name='Ahmed Ali' product='Product' duration='20 min read'/>
   <BlogContentSection/>
   <LandingBlogSection className="overflow-hidden"/>
   <IndustryBanner heading="Good Stuff is All Here" description="We will help you develope what ever you desire in your AI developement. This is a place holder" btnText="Talk to Our AI Expert" isBooking/>
   </>
  )
}

export default page
