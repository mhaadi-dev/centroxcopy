import { CarouselwithStackAnimation } from "@/Components/common/CarouselwithStackAnimation";
import SectionTag from "@/Components/common/SectionTag";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import SolutionsImage1 from "@/assets/solutionpic1.webp"
import SolutionsImage2 from "@/assets/solutionPic2.webp"
import SolutionsImage3 from "@/assets/solutionPic3.webp"
import SolutionsImage4 from "@/assets/solutionPic4.webp"
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";

const data = [
  {
    img: SolutionsImage1,
    description:"Provides empathetic support and personalized coping strategies for individuals experiencing emotional distress.Trained on a curated dataset of evidence-based therapeutic techniques and mental health resources.",
    heading: "Mental Health Chatbot",
    date: "July 17, 2024",
  },
  {
    img: SolutionsImage2,
    description:
      "Provides intelligent property search, answer queries, schedule viewings, and offer tailored recommendations.Integrates with real estate databases and APIs to provide up-to-date property information and streamline the customer journey.",
    heading: "Real-Estate Chatbot ",
    date: "July 17, 2024",
  },
  {
    img: SolutionsImage3,
    description:
      "Utilizes computer vision and deep learning algorithms to accurately estimate body dimensions from just two photos.Enables precise garment fitting, personalized recommendations, and reduced return rates for fashion retailers.",
    heading: "Body Measurements Tool",
    date: "July 17, 2024",
  },
  {
    img: SolutionsImage4,
    description:
      "Automates the process of tagging fashion products with relevant attributes (style, color, neckline, etc.) using computer vision and image recognition techniques.Improves efficiency, accuracy, and consistency in product cataloging for fashion retailers.",
    heading: "Labelling Dresses with AI",
    date: "July 17, 2024",
  },
];
const LandingSolutionsSection = () => {
  return (
    <>
   
      <section id="solutions" aria-label="Centrox Blog" className={classNames(section_wrapper_class,"flex flex-col gap-y-4 mx-auto")}>
      <SectionTag text="Solutions" />
        <h2 className={classNames(text_h2_class,"text-center")}>
          Centrox&apos;s Solutions
        </h2>
        <p className={classNames(text_para_2,"sm:w-[60%] text-center mx-auto")}>
        Explore our suite of production-ready Generative AI products, 
      built to address real-world challenges across diverse industries
        </p>
        <CarouselwithStackAnimation data={data} />
      </section>
      
    </>
  );
};

export default LandingSolutionsSection;
