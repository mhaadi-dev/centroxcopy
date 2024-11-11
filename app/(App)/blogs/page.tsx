import React from 'react'
import LandingLayout from '../layout'
import BlogHeader from '@/Components/common/BlogHeader'
import BlogBanner from '@/Components/common/BlogBanner'
import CommonDisplayCardsGrid from '@/Components/common/CommonDisplayCardsGrid'
import TabsWithGridCards from '@/Components/common/TabsWithGridCards'
import IndustryBanner from '@/Components/common/IndustryBanner'
import SubnavBar from '@/Components/Navbar/SubnavBar'
import GridBlogCardsWithPagination from '@/Components/common/GridBlogCardsWithPagination'
import dummyDisplay from "@/assets/dummyDisplay.webp";
import PaginationControls from '@/Components/common/PaginationControls'

const page = () => {
 
  const cardData = [
    {
      image: dummyDisplay,
      title: "Exploring the Future of AI in Healthcare",
      category: "HealthTech",
      date: "Nov 5, 2024",
      subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "AI & Healthcare",
      duration: "15min read",
      name: "Jane Doe",
      
    },
    {
      image: dummyDisplay,
      title: "Centrox's Impact on E-commerce Optimization",
      category: "E-commerce",
      date: "Oct 22, 2024",
      subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
      tags: false,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "E-commerce",
      duration: "10min read",
      name: "John Smith",
    
    },
    {
      image: dummyDisplay,
      title: "The Role of AI in Sustainable Development",
      category: "Environment",
      date: "Sep 15, 2024",
      subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
      tags: true,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Sustainability",
      duration: "12min read",
      name: "Alice Green",
  
    },
    {
      image: dummyDisplay,
      title: "How Centrox is Transforming Financial Services",
      category: "Finance",
      date: "Aug 10, 2024",
      subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Finance",
      duration: "18min read",
      name: "Bob Gray",
    
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Exploring the Future of AI in Healthcare",
      category: "HealthTech",
      date: "Nov 5, 2024",
      subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "AI & Healthcare",
      duration: "15min read",
      name: "Jane Doe",
      
    },
    {
      image: dummyDisplay,
      title: "Centrox's Impact on E-commerce Optimization",
      category: "E-commerce",
      date: "Oct 22, 2024",
      subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
      tags: false,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "E-commerce",
      duration: "10min read",
      name: "John Smith",
    
    },
    {
      image: dummyDisplay,
      title: "The Role of AI in Sustainable Development",
      category: "Environment",
      date: "Sep 15, 2024",
      subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
      tags: true,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Sustainability",
      duration: "12min read",
      name: "Alice Green",
  
    },
    {
      image: dummyDisplay,
      title: "How Centrox is Transforming Financial Services",
      category: "Finance",
      date: "Aug 10, 2024",
      subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Finance",
      duration: "18min read",
      name: "Bob Gray",
    
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Exploring the Future of AI in Healthcare",
      category: "HealthTech",
      date: "Nov 5, 2024",
      subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "AI & Healthcare",
      duration: "15min read",
      name: "Jane Doe",
      
    },
    {
      image: dummyDisplay,
      title: "Centrox's Impact on E-commerce Optimization",
      category: "E-commerce",
      date: "Oct 22, 2024",
      subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
      tags: false,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "E-commerce",
      duration: "10min read",
      name: "John Smith",
    
    },
    {
      image: dummyDisplay,
      title: "The Role of AI in Sustainable Development",
      category: "Environment",
      date: "Sep 15, 2024",
      subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
      tags: true,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Sustainability",
      duration: "12min read",
      name: "Alice Green",
  
    },
    {
      image: dummyDisplay,
      title: "How Centrox is Transforming Financial Services",
      category: "Finance",
      date: "Aug 10, 2024",
      subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Finance",
      duration: "18min read",
      name: "Bob Gray",
    
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    }, {
      image: dummyDisplay,
      title: "Exploring the Future of AI in Healthcare",
      category: "HealthTech",
      date: "Nov 5, 2024",
      subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "AI & Healthcare",
      duration: "15min read",
      name: "Jane Doe",
      
    },
    {
      image: dummyDisplay,
      title: "Centrox's Impact on E-commerce Optimization",
      category: "E-commerce",
      date: "Oct 22, 2024",
      subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
      tags: false,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "E-commerce",
      duration: "10min read",
      name: "John Smith",
    
    },
    {
      image: dummyDisplay,
      title: "The Role of AI in Sustainable Development",
      category: "Environment",
      date: "Sep 15, 2024",
      subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
      tags: true,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Sustainability",
      duration: "12min read",
      name: "Alice Green",
  
    },
    {
      image: dummyDisplay,
      title: "How Centrox is Transforming Financial Services",
      category: "Finance",
      date: "Aug 10, 2024",
      subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Finance",
      duration: "18min read",
      name: "Bob Gray",
    
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    }, {
      image: dummyDisplay,
      title: "Exploring the Future of AI in Healthcare",
      category: "HealthTech",
      date: "Nov 5, 2024",
      subdescription: "AI is revolutionizing healthcare by enhancing diagnostic accuracy and personalized treatment.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "AI & Healthcare",
      duration: "15min read",
      name: "Jane Doe",
      
    },
    {
      image: dummyDisplay,
      title: "Centrox's Impact on E-commerce Optimization",
      category: "E-commerce",
      date: "Oct 22, 2024",
      subdescription: "Centrox leverages AI to streamline product categorization and personalization in e-commerce.",
      tags: false,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "E-commerce",
      duration: "10min read",
      name: "John Smith",
    
    },
    {
      image: dummyDisplay,
      title: "The Role of AI in Sustainable Development",
      category: "Environment",
      date: "Sep 15, 2024",
      subdescription: "AI plays a key role in addressing climate change and promoting sustainable practices.",
      tags: true,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Sustainability",
      duration: "12min read",
      name: "Alice Green",
  
    },
    {
      image: dummyDisplay,
      title: "How Centrox is Transforming Financial Services",
      category: "Finance",
      date: "Aug 10, 2024",
      subdescription: "AI-driven solutions by Centrox are reshaping the finance industry with data-driven insights.",
      tags: true,
      linkWithIcon: true,
      linkText: "",
      link: "",
      isSearchResult: false,
      label: "Finance",
      duration: "18min read",
      name: "Bob Gray",
    
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },{
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },{
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },{
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },{
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    },
    {
      image: dummyDisplay,
      title: "Advancements in AI for Real-time Data Processing",
      category: "Tech",
      date: "Jul 30, 2024",
      subdescription: "Real-time data processing is essential for AI applications in IoT and smart cities.",
      tags: false,
      linkWithIcon: false,
      linkText: "",
      link: "",
      isSearchResult: true,
      label: "Technology",
      duration: "20min read",
      name: "Emma Blue",
     
    }
  ];
  
 
    const benefitsData = [
        { 
         headerData:{
             tagText: "",
             headingText: "Blogs to Read",
             para1Text:
               "Company Updates and Technology Updates",
             heading2Text: "",
             para2Text:""
         },
         data: [{
           icon: "",
           heading: "Deep Understanding",
           description:
             "By training on your specific data, our chatbots comprehend your industry-specific terminology, product offerings, and customer pain points. This enables them to provide accurate, relevant, and contextually appropriate responses.",
           linkText: "",
           linkWithIcon: true,
           label:"hello"
         },
         {
           icon: "",
           heading: "Personalized Engagement",
           description:
             "We go beyond generic responses. Our chatbots leverage user data and past interactions to tailor conversations, offering personalized recommendations, proactive support, and solutions that meet individual needs.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Seamless Integration",
           description:
             "Our chatbots seamlessly integrate with your existing systems and workflows, such as CRM, knowledge bases, and ticketing systems. This ensures a smooth and efficient customer experience across all touchpoints.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Scalability & Availability",
           description:
             "Handle high volumes of inquiries 24/7, 365 days a year. Your customers will always receive timely and helpful support, even during peak periods, without the need for additional staffing.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Data-Driven Insights",
           description:
             "Every conversation is an opportunity to learn. Our chatbots collect valuable customer data and feedback, providing actionable insights to inform your business strategies, product development, and marketing efforts.",
           linkText: "",
           linkWithIcon: true,
         },
         {
           icon: "",
           heading: "Brand Consistency",
           description:
             "We ensure your chatbot reflects your brand's unique voice and values, building trust and fostering stronger customer relationships.",
           linkText: "",
           linkWithIcon: true,
         }],
         caption:"",
         btnText:""
     
     }
       ];
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
    <BlogHeader headingText='Blogs' paraText='Company Updates and Technology Updates'/>
     <BlogBanner heading='Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platformz' paraText='Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source.' date="Aug 14, 2024" name='Ahmed Ali' product='Product' duration='20 min read'/>
     <GridBlogCardsWithPagination cardData={cardData}/>
    
     <TabsWithGridCards headingText='Artificial Intelligence'/>
     <IndustryBanner heading="All the Good Stuff is here" description="Read these blogs to get to know more about Centrox." btnText="Talk to us" isBooking/>
     <TabsWithGridCards headingText='ML Ops'/>
      </>
    

  
  )
}

export default page
