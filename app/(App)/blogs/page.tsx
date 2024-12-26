import React from 'react';
import BlogHeader from '@/Components/common/BlogHeader';
import BlogBanner from '@/Components/common/BlogBanner';
import GridBlogCardsWithPagination from '@/Components/common/GridBlogCardsWithPagination';
import IndustryBanner from '@/Components/common/IndustryBanner';
import SubnavBar from '@/Components/Navbar/SubnavBar';
import { client } from '@/sanity/lib/client';
import { GET_PAGINATED_ARTICLES_QUERY, GET_TOTAL_BLOGS_COUNT } from '@/sanity/query';
import { notFound } from 'next/navigation';
import { urlFor } from '@/sanity/lib/image';

export const revalidate = 120;

const fetchSanityData = async () => {
  const totalBlogsCount = await client.fetch(GET_TOTAL_BLOGS_COUNT);
  const blogData = await client.fetch(GET_PAGINATED_ARTICLES_QUERY, {
    startRange: 0,
    endRange: 5,
  });
  return { totalBlogsCount, blogData };
};

const BlogPage = async () => {
  try {
    const { totalBlogsCount, blogData } = await fetchSanityData();

    // if (!blogData || blogData.length === 0) {
    //   notFound();
    // }
    return (
      <>
        <SubnavBar title="Blogs" navItems={[]} />
        <BlogHeader headingText="Blogs" paraText="Company Updates and Technology Updates" />
        <BlogBanner
          heading={blogData?.[0]?.content_item?.banner_data?.banner_heading}
          paraText={blogData?.[0]?.content_item?.banner_data?.banner_description}
          date={new Date(blogData?.[0]?.content_item?.date).toLocaleDateString()}
          name={blogData?.[0]?.content_item?.name}
          product={blogData?.[0]?.content_item?.category}
          duration={blogData?.[0]?.content_item.duration}
          banner_image={(blogData?.[0]?.content_item?.image?.image)}
          category={(blogData?.[0]?.content_item?.category)}
          label={(blogData?.[0]?.content_item?.label)}
          id={(blogData?.[0]?._id)}
        />
        <GridBlogCardsWithPagination
          cardData={blogData}
          cardsPerPage={5}
          totalBlogsCount={totalBlogsCount}
        />
        <IndustryBanner
          heading="All the Good Stuff is here"
          description="Read these blogs to get to know more about Centrox."
          btnText="Talk to us"
          isBooking
        />
      </>
    );
  } catch (error) {
    console.error('Error fetching blog data:', error);
    // notFound();
  }
};

export default BlogPage;


//       image: dummyDisplay,
//       title: "Exploring the Future of AI in Healthcare",
//       category: "HealthTech",
//       date: "Nov 5, 2024",
//       subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "AI & Healthcare",
//       duration: "15min read",
//       name: "Jane Doe",
      
//     },
//     {
//       image: dummyDisplay,
//       title: "Centrox's Impact on E-commerce Optimization",
//       category: "E-commerce",
//       date: "Oct 22, 2024",
//       subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
//       tags: false,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "E-commerce",
//       duration: "10min read",
//       name: "John Smith",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "The Role of AI in Sustainable Development",
//       category: "Environment",
//       date: "Sep 15, 2024",
//       subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
//       tags: true,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Sustainability",
//       duration: "12min read",
//       name: "Alice Green",
  
//     },
//     {
//       image: dummyDisplay,
//       title: "How Centrox is Transforming Financial Services",
//       category: "Finance",
//       date: "Aug 10, 2024",
//       subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Finance",
//       duration: "18min read",
//       name: "Bob Gray",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Exploring the Future of AI in Healthcare",
//       category: "HealthTech",
//       date: "Nov 5, 2024",
//       subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "AI & Healthcare",
//       duration: "15min read",
//       name: "Jane Doe",
      
//     },
//     {
//       image: dummyDisplay,
//       title: "Centrox's Impact on E-commerce Optimization",
//       category: "E-commerce",
//       date: "Oct 22, 2024",
//       subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
//       tags: false,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "E-commerce",
//       duration: "10min read",
//       name: "John Smith",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "The Role of AI in Sustainable Development",
//       category: "Environment",
//       date: "Sep 15, 2024",
//       subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
//       tags: true,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Sustainability",
//       duration: "12min read",
//       name: "Alice Green",
  
//     },
//     {
//       image: dummyDisplay,
//       title: "How Centrox is Transforming Financial Services",
//       category: "Finance",
//       date: "Aug 10, 2024",
//       subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Finance",
//       duration: "18min read",
//       name: "Bob Gray",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Exploring the Future of AI in Healthcare",
//       category: "HealthTech",
//       date: "Nov 5, 2024",
//       subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "AI & Healthcare",
//       duration: "15min read",
//       name: "Jane Doe",
      
//     },
//     {
//       image: dummyDisplay,
//       title: "Centrox's Impact on E-commerce Optimization",
//       category: "E-commerce",
//       date: "Oct 22, 2024",
//       subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
//       tags: false,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "E-commerce",
//       duration: "10min read",
//       name: "John Smith",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "The Role of AI in Sustainable Development",
//       category: "Environment",
//       date: "Sep 15, 2024",
//       subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
//       tags: true,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Sustainability",
//       duration: "12min read",
//       name: "Alice Green",
  
//     },
//     {
//       image: dummyDisplay,
//       title: "How Centrox is Transforming Financial Services",
//       category: "Finance",
//       date: "Aug 10, 2024",
//       subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Finance",
//       duration: "18min read",
//       name: "Bob Gray",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     }, {
//       image: dummyDisplay,
//       title: "Exploring the Future of AI in Healthcare",
//       category: "HealthTech",
//       date: "Nov 5, 2024",
//       subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "AI & Healthcare",
//       duration: "15min read",
//       name: "Jane Doe",
      
//     },
//     {
//       image: dummyDisplay,
//       title: "Centrox's Impact on E-commerce Optimization",
//       category: "E-commerce",
//       date: "Oct 22, 2024",
//       subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
//       tags: false,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "E-commerce",
//       duration: "10min read",
//       name: "John Smith",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "The Role of AI in Sustainable Development",
//       category: "Environment",
//       date: "Sep 15, 2024",
//       subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
//       tags: true,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Sustainability",
//       duration: "12min read",
//       name: "Alice Green",
  
//     },
//     {
//       image: dummyDisplay,
//       title: "How Centrox is Transforming Financial Services",
//       category: "Finance",
//       date: "Aug 10, 2024",
//       subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Finance",
//       duration: "18min read",
//       name: "Bob Gray",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     }, {
//       image: dummyDisplay,
//       title: "Exploring the Future of AI in Healthcare",
//       category: "HealthTech",
//       date: "Nov 5, 2024",
//       subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "AI & Healthcare",
//       duration: "15min read",
//       name: "Jane Doe",
      
//     },
//     {
//       image: dummyDisplay,
//       title: "Centrox's Impact on E-commerce Optimization",
//       category: "E-commerce",
//       date: "Oct 22, 2024",
//       subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
//       tags: false,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "E-commerce",
//       duration: "10min read",
//       name: "John Smith",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "The Role of AI in Sustainable Development",
//       category: "Environment",
//       date: "Sep 15, 2024",
//       subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
//       tags: true,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Sustainability",
//       duration: "12min read",
//       name: "Alice Green",
  
//     },
//     {
//       image: dummyDisplay,
//       title: "How Centrox is Transforming Financial Services",
//       category: "Finance",
//       date: "Aug 10, 2024",
//       subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
//       tags: true,
//       linkWithIcon: true,
//       linkText: "",
//       link: "",
//       isSearchResult: false,
//       label: "Finance",
//       duration: "18min read",
//       name: "Bob Gray",
    
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },{
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },{
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },{
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },{
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     },
//     {
//       image: dummyDisplay,
//       title: "Advancements in AI for Real-time Data Processing",
//       category: "Tech",
//       date: "Jul 30, 2024",
//       subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
//       tags: false,
//       linkWithIcon: false,
//       linkText: "",
//       link: "",
//       isSearchResult: true,
//       label: "Technology",
//       duration: "20min read",
//       name: "Emma Blue",
     
//     }
//   ];
//        const navItems = [
//         {
//           subNavTitle: "Artificial Intelligence",
//           subItems: [
//             { subTitle: "AI ethics and bias", link: "" },
//             { subTitle: "item 2", link: "" },
//             { subTitle: "item 3", link: "" }
//           ]
//         },
//         {
//           subNavTitle: "Machine Learning",
//           subItems: [
//             { subTitle: "item 1", link: "" },
//             { subTitle: "item 2", link: "" },
//             { subTitle: "item 3", link: "" }
//           ]
//         },
//         {
//           subNavTitle: "ML Ops",
//           subItems: [
//             { subTitle: "item 1", link: "" },
//             { subTitle: "item 2", link: "" },
//             { subTitle: "item 3", link: "" }
//           ]
//         },
//         {
//           subNavTitle: "Generative AI",
//           subItems: [
//             { subTitle: "item 1", link: "" },
//             { subTitle: "item 2", link: "" },
//             { subTitle: "item 3", link: "" }
//           ]
//         },
//         {
//           subNavTitle: "Data Annotation",
//           subItems: [
//             { subTitle: "item 1", link: "" },
//             { subTitle: "item 2", link: "" },
//             { subTitle: "item 3", link: "" }
//           ]
//         }
//       ];