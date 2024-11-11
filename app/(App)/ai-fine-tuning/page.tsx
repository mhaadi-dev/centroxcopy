import { NlpHeroSection } from "@/views/NLP/NlpHerosection";
import LandingLayout from "../layout";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import { NlpSection4 } from "@/views/NLP/Section4";
import BannerSection from "@/Components/MainPageComponents/Banner";
import { NlpSection7 } from "@/views/NLP/Section7";
import { AccordoinImageSection } from "@/views/DataValidation/Section4";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import { ReadytoBuildChatbot } from "@/views/CustomChatbot/Readytobuild";



const PointsData = [
  {
    title: "Data Scarcity",
    description:
      "Achieve exceptional results even with limited labeled data through techniques like transfer learning and data augmentation.",
  },
  {
    title: "Overfitting & Generalization",
    description:
      "Prevent overfitting and ensure your model generalizes well to new, unseen data.",
  },
  {
    title: "Bias Mitigation",
    description:
      "Identify and address potential biases in pre-trained models to ensure fair and ethical AI solutions.",
  },
  {
    title: "Performance Bottlenecks",
    description:
      "Optimize model size and complexity for efficient inference and deployment, even on resource-constrained environments.",
  },
];
const GenericAiChallengesData = [
  {
    title: "Generalize",
    description:
      "Adapt to your unique dataset and specific task requirements.",
  },
  {
    title: "Maintain Accuracy",
    description:
      "Deliver consistently reliable and precise outputs.",
  },
  {
    title: "Avoid Bias",
    description:
      "Mitigate inherent biases present in large pre-trained models.",
  },
  {
    title: "Optimize Efficiency",
    description:
      "Run efficiently on your infrastructure, especially with limited resources.",
  },

];



const accordianData = [
  {
    title: "Domain Adaptation",
    description:
      "Your model will understand your industry's unique vocabulary, terminology, and context, leading to drastically improved accuracy and relevance.",
  },
  {
    title: "Enhanced Performance",
    description:
      "Achieve state-of-the-art results on your specific tasks, even with limited labeled data.",
  },
  {
    title: "Reduced Bias & Improved Fairness",
    description:
      "Mitigate unwanted biases in pre-trained models, ensuring your AI solutions are fair and ethical.",
  },
  {
    title: "Optimized Efficiency",
    description:
      "Reduce model size and computational requirements, enabling faster inference and deployment on resource-constrained environments,",
  },
 
];
export default function Page() {
  return (
    <>
      <LandingLayout>
        <NlpHeroSection />
          <PointsandImagesSection
            mainHeading="The Challenge of Generic AI Models"
            mainDescription="Pre-trained models often fall short when it comes to real-world applications. "
            subDescription="Pre-trained models struggle to:"
            data={GenericAiChallengesData}
            gradient
            button="Discuss Your Fine-Tuning Challenges"

          />
          <PointsandImagesSection data={accordianData}
          mainHeading="How We Help Your Model Speak Your Language?"
          mainDescription="Fine-tuning is the key to exploiting your AI model's full potential. At Centrox AI, we specialize in tailoring state-of-the-art models to your specific needs."
          reverse
          />
          
          {/* <AccordoinImageSection
                    img={img}
                    button="Set A Free Consulatation"
                    accordionData={accordianData}
                    subHeading="asdsad"
                    subDescription="asd"
          /> */}
          <NlpSection4/>
          <PointsandImagesSection
            heading="Addressing Your AI Challenges"
            description="We understand the complexities of AI model development. Our fine-tuning expertise helps you overcome common challenges:"
            button="Overcome Your AI Challenges with Centrox AI"
          
            data={PointsData}

          />
           <ReadytoBuildChatbot
          heading="Your AI Journey Starts Here"
          description="Ready to unleash the full potential of your AI models?"
          description2="Schedule a technical deep-dive with our team to discuss your vision and explore how we can collaborate to achieve your goals."
          btnText="Lets Talk"
        />
          {/* <BannerSection /> */}
          <NlpSection7/>
      </LandingLayout>
    </>
  );
}
