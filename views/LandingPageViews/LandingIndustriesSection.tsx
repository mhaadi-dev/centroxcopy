import IndustryBanner from "@/Components/common/IndustryBanner"
import SectionTag from "@/Components/common/SectionTag"
import { TabCarousel } from "@/Components/common/TabCarousel"
import industryPic1 from "@/assets/industry1.webp"
import industryPic2 from "@/assets/industry2.webp"
import industryPic3 from "@/assets/industry3.webp"
import industryPic4 from "@/assets/industry4.webp"
import classNames, { section_wrapper_class } from "@/helpers/common"

const LandingIndustriesSection = () => {
  const tabs = [
    { name: "Healthcare", href: "#", current: true,cta:"Try Our Mental Health Chatbot" },
    { name: "Fashion Retail", href: "#", current: false,cta:"Try Our Body Measurement Tool" },
    { name: "Real Estate", href: "#", current: false,cta:"Try Our Real Estate Chatbot" },
    { name: "Fintech", href: "#", current: false,cta:"Learn more about AI in Fintech" },
  ];
  const gradientCardData=[
    {
      image:industryPic1,
        data:[
          {
            heading:"Medical Text Generation",
            description:"Automate the creation of clinical notes, discharge summaries, and other medical documents, freeing up valuable time for healthcare professionals and improving documentation accuracy."
          },
          {
            heading:"Personalized Health Recommendations",
            description:"Leverage LLMs to analyze patient data and generate tailored health recommendations, promoting proactive health management and improving patient outcomes."
          },
          {
            heading:"Mental Health Support",
            description:"Deploy our Mental Health Chatbot, a compassionate AI companion trained on evidence-based therapeutic techniques to support emotional well-being and offer personalized coping strategies."
          }
        ]
    },
    {
      image:industryPic2,
        data:[
          {
            heading:"AI-Powered Design Tools",
            description:"Accelerate the design process with generative models that assist in creating innovative concepts, generating unique patterns and textures, and streamlining production workflows, fostering creativity and efficiency."
          },
          {
            heading:"Personalized Fashion Recommendations",
            description:"Leverage LLMs to analyze customer preferences, body measurements, and style goals to offer tailored fashion recommendations, enhancing the online shopping experience and driving conversions."
          },
          {
            heading:"Dynamic Content Generation",
            description:"Automate the creation of product descriptions, social media captions, and marketing materials, saving time and resources while ensuring consistent brand messaging."
          }
        ]
    },
    {
      image:industryPic3,
        data:[
          {
            heading:"Property Descriptions & Listings",
            description:"Utilize LLMs to generate compelling and informative property descriptions and listings, highlighting key features and attracting potential buyers."
          },
          {
            heading:"Virtual Property Tours",
            description:"Create immersive 3D virtual tours with AI-generated environments and interactive elements, allowing potential buyers to explore properties remotely and enhancing their decision-making process."
          },
          {
            heading:"Personalized Property Recommendations",
            description:"Leverage LLMs to analyze user preferences and search history to provide tailored property recommendations, improving the efficiency of property search and discovery."
          }
        ]
    },
    {
      image:industryPic4,
        data:[
          {
            heading:"Fraud Detection & Prevention",
            description:"Implement advanced AI models to analyze transaction data, identify patterns indicative of fraudulent activity, and proactively prevent financial losses."
          },
          {
            heading:"Personalized Financial Advice",
            description:"Leverage LLMs to provide tailored financial recommendations based on individual risk profiles, investment goals, and market trends."
          },
          {
            heading:"Customer Support Automation",
            description:"Deploy intelligent chatbots to handle routine customer inquiries, provide account information, and assist with basic transactions, improving efficiency and customer satisfaction."
          }
        ]
    }
  ]
  return (
    <>
      <section id="industries" className={classNames(section_wrapper_class," mx-auto")}
      aria-label="centrox-industries">

    <SectionTag text="Industries"/>
    <section aria-label="Centrox Industries" className="text-white ">
        <h2 className="font-semibold text-center text-[1.5rem] lg:text-5xl my-4">
        Empowering AI Innovators Across Industries
        </h2>
        <p className="text-center w-full text-[1rem] sm:w-[60%] mx-auto sm:text-[1.5rem]">
        Generative AI and LLMs are transforming industries across the board. 
        Centrox has partnered with companies to deliver impactful LLM solutions in diverse domains.
        </p>
      </section>
     <TabCarousel isGradientCardsLayoutwithImage={true} gradientCardData={gradientCardData} headerTabs={tabs}/>
     <IndustryBanner/>
     
      </section>
    </>
  )
}

export default LandingIndustriesSection
