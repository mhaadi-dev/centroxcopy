import SubnavBar from '@/Components/Navbar/SubnavBar'
import BlogBanner from '@/Components/common/BlogBanner';
import BlogContentSection from '@/Components/common/BlogContentSection';
import IndustryBanner from '@/Components/common/IndustryBanner';
import { client } from '@/sanity/lib/client';
import { GET_BLOG_BY_ID_QUERY, GET_BLOGS_BY_CATEGORY_QUERY } from '@/sanity/query';
import LandingBlogSection from '@/views/LandingPageViews/LandingBlogSection';
import { notFound } from 'next/navigation';
import React from 'react';

// Use generateMetadata to dynamically set meta title and description
export async function generateMetadata({ searchParams }: any) {
  const { id } = searchParams;
  let query;
  if(id){
   query = GET_BLOG_BY_ID_QUERY(id);
  }else{
     query = GET_BLOG_BY_ID_QUERY('');

  }
let blogData;
  if(id){
     blogData = await client.fetch(query, { id });
  }else{
     blogData = await client.fetch(query, { id:'id' });

  }
  

  if (!blogData) {
  notFound()
  }
   function cleanMetaText(text: string): string {
    if (!text) return "";
    return text
      .replace(/[\u200B-\u200D\uFEFF]/g, "") 
      .replace(/\s+/g, " ")                  
      .trim();                               
  }
  // const metaTitle = cleanMetaText(blogData?.meta_title) || "";
  // const metaDescription = cleanMetaText(blogData?.meta_description) || "";
  const metaTitle = (blogData?.meta_title) || "";
  const metaDescription = (blogData?.meta_description) || "";

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: 'article',
    },
  };
}

const Page = async ({ searchParams }: any) => {
  const { id } = searchParams; 
  let similarBlogs=[]

  const query = GET_BLOG_BY_ID_QUERY(id);

  const blogData = await client.fetch(query, { 
     id
  });

  if (!blogData) {
    notFound()
  }
  else{
    const query = GET_BLOGS_BY_CATEGORY_QUERY(blogData?.content_item?.category);
    similarBlogs=await client.fetch(query, { 
     category: blogData?.content_item?.category
   });
  }
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
    <section className='relative'>
      <SubnavBar imageLink = {"/blogs"} title='Blogs' navItems={[]} />
      <BlogBanner
        className="!mt-28 lg:mt-0"
        heading={blogData.content_item?.banner_data?.banner_heading}
        paraText={blogData.content_item?.banner_data?.banner_description}
        date={new Date(blogData.content_item?.date).toLocaleDateString()}
        name={blogData.content_item?.name}
        product='Product'
        duration={blogData.content_item?.duration}
      />
      <BlogContentSection content={blogData.content_item?.blog_data} />
     { similarBlogs?.length > 1 && <LandingBlogSection cardsData={similarBlogs || []} className="overflow-hidden" />}
      <IndustryBanner
        heading="Good Stuff is All Here"
        description="We will help you develop whatever you desire in your AI development. This is a placeholder"
        btnText="Talk to Our AI Expert"
        isBooking
      />
    </section>
  );
};

export default Page;
