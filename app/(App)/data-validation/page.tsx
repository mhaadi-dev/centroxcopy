import { DataValidationHeroSection } from "@/views/DataValidation/HeroSection";
import LandingLayout from "../layoutPage";
import { DataValidationSection2 } from "@/views/DataValidation/Section2";
import { DataValidationSection3 } from "@/views/DataValidation/Section3";
import { AccordoinImageSection } from "@/views/DataValidation/Section4";
import { DataValidationSection5 } from "@/views/DataValidation/Section5";
import { DataValidationSection7 } from "@/views/DataValidation/Section7";
import BannerSection from "@/Components/MainPageComponents/Banner";
import Arrow from "@/assets/RightArrow.svg";
import Testimonial from "@/views/Testimonial";
import { CalendlyWidget } from "@/Components/common/Calendly";
import { DataValidationSection8 } from "@/views/DataValidation/Section8";
import { DataValidationSection6 } from "@/views/DataValidation/Section6";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import checkIcon from "@/public/images/datavalidation/CheckCircle.svg";
import { DataValidationSection9 } from "@/views/DataValidation/Section9";
import bugImg from "@/public/images/datavalidation/Bug.svg"
import dataBaseIcon from "@/public/images/datavalidation/Database.svg"
import questionIcon from "@/public/images/datavalidation/Question.svg";
import humanIcon from "@/public/images/datavalidation/Vector.svg"

import CustomArrows from "@/sections/SlickCarousal";
import { CustomerTestimonials } from "@/sections/CustomersTestimonial";
import { HorizentalBar } from "@/sections/HorizentalBarSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { OppositeCarousal } from "@/sections/OppositeCarousal";
import { ProductsCarousal } from "@/Components/common/ProductsCarousal";
import { ProductsCarousalSection } from "@/sections/ProducstsCarousal";
import { ServiceCarousalSection } from "@/sections/ServicesCarousalSection";
import { HoveredTextSection } from "@/sections/HoveredTextSection";

const accordianData = [
  {
    title: "Enhanced Accuracy",
    content:
      "Validated data means your AI models are more precise and deliver reliable results.",
  },
  {
    title: "Scalable Solutions",
    content:
      "Our technology scales with your data, ensuring top performance no matter how much you have.",
  },
  {
    title: "Accelerated Insights",
    content:
      " Automated validation speeds up data processing, so you can make quicker, well-informed decisions.",
  },
  {
    title: "Quality Check",
    content:
      "We emphasize iterative feedback to continuously shape and refine annotations. We employ feedback, review a percentage of the dataset, and use automated scoring.",
  },
  {
    title: "Regulatory Compliance",
    content:
      "We help ensure your data practices comply with industry regulations, keeping your organization and stakeholders protected.",
  },
  {
    title: "Navigating Data Quality Needs",
    content:
      "We help you pinpoint the best strategies for achieving accurate, consistent, and high-quality data that powers your AI projects.",
  },
  {
    title: "Addressing Data Handling Complexities",
    content:
      "From preprocessing to integration, we streamline your data to ensure it’s seamlessly validated.",
  },
  {
    title: "Optimising Model Integrity",
    content:
      "We provide solutions to reduce risks like bias and overfitting, enhancing the overall performance of your AI models.",
  },
];

const PointsData = [
  {
    icon: checkIcon,
    title: "",
    description:
      "Our validation processes detect and rectify inaccuracies, ensuring your data is reliable and effective.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Seamlessly merge data from various sources into a unified, accurate dataset.",
  },
  {
    title: "",
    icon: checkIcon,

    description: "Applying  consistency checks to ensure uniformity.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Enhancing datasets with information that is relevant to improve its usability for more accurate model training.",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Conducting test to verify data on its quality making sure its meets the model performance criteria",
  },
  {
    title: "",
    icon: checkIcon,

    description:
      "Implement ongoing updates to maintain data quality throughout the process.",
  },
];

const PointsData2 = [
  {
    icon: dataBaseIcon,
    title: "Data Collection:",
    description:
      "We start by integrating the CCTV footage from DERQ, setting it up for thorough validation.",
  },
  {
    title: "Human Review:",
    icon: humanIcon,

    description:
      "Our team carefully examines the footage to spot and confirm potential collision scenarios, combining human insight with technical expertise.",
  },
  {
    title: "Error Detection:",
    icon: bugImg,

    description: "Our advanced algorithms, supported by human oversight, identify and correct errors.",
  },
  {
    title: "Ongoing Quality Checks:",
    icon: checkIcon,

    description:
      "With continuous real-time monitoring, our human-in-the-loop approach helps us quickly address any issues and keep data quality high.",
  },
  {
    title: "Insightful Reporting:",
    icon: questionIcon,

    description:
      "We provide detailed reports with actionable insights, helping DERQ fine-tune their prediction models for even better accuracy.",
  },
  
];

export default function Page() {
  return (
    <div className="">
      <LandingLayout>
        <DataValidationHeroSection />
        <PointsandImagesSection
          heading="Our Process of Improving Quality 
             "
          description=" Our strategic approach of improving the quality of the data demands
             a thorough understanding of your objectives which then helps us
             improve accuracy of your AI models."
          data={PointsData}
          button="Let's Begin Validation"
          bgShape
        />
        {/* <DataValidationSection2 /> */}
        {/* <DataValidationSection3 /> */}
        <AccordoinImageSection
          heading="Transform Data into a Strategic Advantage
"
          img={img}
          accordionData={accordianData}
          description="Our process is designed to address your requirements providing accuracy
and timely delivery with ongoing support."
        />
        <DataValidationSection5 />
        <DataValidationSection6 />

        <PointsandImagesSection
          heading="Precision in Collision Prediction"
          description="Precision in Collision Prediction"
          data={PointsData2}
          button="Let's Begin Validatoin "
          bgShape
          reverse
        />

        {/* <DataValidationSection7 /> */}
        <BannerSection
          text="Enhance Your Data Accuracy with Human Expertise"
          btnText="Discover How"
          icon={Arrow}
        />
        <Testimonial />
        <div className="mt-12 flex justify-center">
          <CalendlyWidget btnText="Learn More" btnClassName="!px-12" />
        </div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(70.34% 31.45% at 50.94% 50.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000000",
          }}
        >
          <DataValidationSection8 />
          <DataValidationSection9 />
        </div>
        <div className="w-full overflow-x-hidden">
        <div className="w-full lg:ml-[10%]  mx-auto  relative  overflow-x-hidden pb-32 ">
          {/* <VerticalCarousal/> */}


          
        <CustomArrows />
        </div>
        </div>
        {/* <HorizentalBar/> */}
        {/* <BenefitsSection/> */}
        {/* <OppositeCarousal/> */}
        {/* <HoveredTextSection/> */}

      </LandingLayout>
    </div>
  );
}
