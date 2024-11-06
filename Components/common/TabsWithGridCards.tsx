import classNames, {
  section_wrapper_class,
  text_h2_class,
  text_para_3,
} from "@/helpers/common";
import React from "react";
import CommonCard from "./CommonCard";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import CommonTabs from "./CommonTabs";
interface Props {
   headingText?:string
}
const TabsWithGridCards = ({headingText}:Props) => {
  const cards = [1, 2, 3, 4, 5];

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
     
    }
  ];
  

  return (
    <section className={classNames(section_wrapper_class, "flex flex-col gap-4 ")}>
      { headingText && <h2 className={text_h2_class}>{headingText}</h2>}
     <CommonTabs/>

      <div
        className={classNames(
          "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {cardData.slice(0, 2).map((card, index) => {
          return (
            <CommonCard
              key={index}
              colSpan={index < 2 ? 2 : 1}
              name={card.name}
              date={card.date}
              label={card.label}
              duration={card.duration}
              image={dummyDisplay}
              subdescription={card.subdescription}
              title={card.title}
            />
          );
        })}
      </div>
      <div
        className={classNames(
          "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {cardData.slice(2).map((card, index) => (
          <CommonCard
            key={index}
            name={card.name}
            date={card.date}
            label={card.label}
            duration={card.duration}
            image={dummyDisplay}
            subdescription={card.subdescription}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default TabsWithGridCards;
