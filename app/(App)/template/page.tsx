import { HeroSection } from "@/sections/HeroSection";
import heroImg from "@/public/images/genAi/genAIheroSection.webp";
import LandingLayout from "../layoutPage";
import { LogosCarousel } from "@/views/LogosCarousel";
import { CustomCarousalSection } from "@/sections/CustomCarousalSection";

import textExtractionImg from "@/public/images/solvingdata/newtextExtaractionImg.webp";
import twodBoudingImg from "@/public/images/solvingdata/new2dBouncingBoxesimg.webp";
import ImageSegmentation from "@/public/images/solvingdata/newimagesegmentionimg.webp";
import RareEventImg from "@/public/images/solvingdata/newrareeventimg.webp";
import { HorizentalBar } from "@/sections/HorizentalBarSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import CheckIcon from "@/public/images/genAi/awsicon.svg";
import { OppositeCarousal } from "@/sections/OppositeCarousal";
import { StepperSection } from "@/sections/StepperSection";
import { StepperDataI } from "@/Components/common/Stepper";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import MultipleItems from "@/sections/SlickCarousal";
import { CustomerTestimonials } from "@/sections/CustomersTestimonial";
import { ProductsCarousalSection } from "@/sections/ProducstsCarousal";
import { CaseStudiesCarousalSection } from "@/sections/CaseStudiesCarousalSection";
import { FaqsSection } from "@/sections/FaqsSection";
import { ContactForm } from "@/Components/common/ContactForm";
import { BannerSection } from "@/sections/TestimonialSection";
import { HoveredTextSection } from "@/sections/HoveredTextSection";
import { ServiceCarousalSection } from "@/sections/ServicesCarousalSection";

import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";


const CarousalData = [
  {
    title: "Text Extraction",
    description:
      "Our advanced NLP algorithms handles entity recognition, sentiment analysis, and context extraction, utilizing human-in-the-loop approaches to handle diverse datasets.",
    img: textExtractionImg,
  },
  {
    title: "2D Bounding Boxes",
    description:
      "We provide crucial identification and classification of object boundaries, even in complex and cluttered scenes for your AI application.",
    img: twodBoudingImg,
  },
  {
    title: "Image Segmentation",
    description:
      "By application of CNNs and FCNs we ensure that we handle your intricate AI project via segmentation process such as object detection and instance segmentation.",
    img: ImageSegmentation,
  },
  {
    title: "Rare Event Detection",
    description:
      "By focusing on anomalies we enhance the predictive capabilities of your models, enabling early detection of critical events.",
    img: RareEventImg,
  },
];

const HorizentalBarData = [
  {
    title: "Image Annotatoins",
    img: img,
    details: [
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
    ],
  },
  {
    title: "Image Annotatoins",
    img: img,

    details: [
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
    ],
  },
  {
    title: "Video Annotatoins",
    img: img,

    details: [
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
    ],
  },
  {
    title: "Image Annotatoins",
    img: img,

    details: [
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
      {
        heading: "Object Detection",
        description:
          "Uses bounding boxes and polygons to identify and locate objects in images. ",
      },
    ],
  },
];
const BenefitsData = [
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
  {
    icon: CheckIcon,
    title: "Accurate Annotation",
    description:
      "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
  },
];

const PointsImageData = [
  {
    title: "Expertise",
    description:
      "Access to a team of world-class AI researchers and engineers with deep knowledge of Generative AI.",
  },
  {
    title: "Customization",
    description:
      "Tailored solutions that address your specific challenges and unlock the full potential of your data.",
  },
  {
    title: "Performance",
    description:
      "State-of-the-art models optimized for accuracy, efficiency, and scalability. ",
  },
  {
    title: "Collaboration",
    description:
      "A true research partnership focused on achieving tangible outcomes.",
  },
];
const faqsData = [
  {
    title: "What types of Generative AI models do you specialize in?",
    text: "We specialize in a variety of Generative AI models, including Transformers (like GPT), GANs, and diffusion models. Our expertise spans both text and image generation, as well as other modalities.",
    active: false,
  },
  {
    title:
      "Can you help us develop a custom Generative AI model for our specific use case?",
    text: "Absolutely! We have extensive experience in designing and building custom Generative AI models tailored to the unique needs of our clients.",
    active: false,
  },
  {
    title: "Do you offer ongoing support and maintenance for deployed models?",
    text: "Yes, we provide ongoing support and maintenance to ensure your model continues to perform optimally and adapt to changing requirements.",
    active: false,
  },
  {
    title: "What kind of data do you need to train a Generative AI model?",
    text: "The type and amount of data required depend on the specific use case and model architecture. We'll work with you to assess your data and determine the best approach for training.",
    active: false,
  },
  {
    title: "How long does it take to develop and deploy a Generative AI model?",
    text: "The timeline varies depending on the complexity of the project and the availability of data. We'll provide you with a detailed project plan and timeline during our initial consultation.",
    active: false,
  },
  {
    title:
      "Can you help us integrate a Generative AI model into our existing systems?",
    text: "Yes, we have experience integrating Generative AI models into various platforms and workflows. We'll work with you to ensure a seamless integration process.",
    active: false,
  },
];
const stepperData: StepperDataI[] = [
  {
    status: false,
    title: "Problem Formulation",
    description:
      "We start with a deep dive into your problem space. We analyze your data, understand your constraints, and define clear success metrics.",
  },
  {
    status: false,

    title: "Architecture Design",
    description:
      "We leverage our expertise in Generative AI architectures to design a solution tailored to your specific needs. We explore novel techniques and stay abreast of the latest research to ensure optimal performance.",
  },
  {
    status: false,
    title: "Model Training & Fine-tuning",
    description:
      "We train and fine-tune your model using best practices and techniques, leveraging your domain-specific data to maximise accuracy and relevance.",
  },
  {
    status: false,
    title: "Evaluation & Validation",
    description:
      "We rigorously evaluate model performance using established benchmarks and your own custom metrics. We iterate on the design and training process until we achieve results that meet or exceed your expectations.",
  },
  {
    status: false,
    title: "Deployment & Optimization",
    description:
      "We deploy your model into your production environment, ensuring seamless integration and scalability. We continue to monitor performance and make optimizations as needed to maintain peak efficiency.",
  },
];
export default function Page() {
  return (
    <LandingLayout>
      <main className="max-w-[2500px] mx-auto bg-[#060606] ">
        <HeroSection
          heading="Advanced Annotation for Superior Data Quality"
          description="Advanced Annotations for Superior Data Quality"
          btnText="Book A Free Strategy Call"
          img={heroImg}
        />
        <LogosCarousel />
        <CustomCarousalSection data={CarousalData}
        heading />
        <HorizentalBar data={HorizentalBarData} />

        <BenefitsSection data={BenefitsData} />
        <OppositeCarousal />
        <HoveredTextSection/>

        <StepperSection
          heading=" Our Outcome Focused Process"
          description="We understand the intricacies of Transformers, GANs, and diffusion models. We collaborate closely with your team to design, train, and deploy models that solve your unique challenges and explore new possibilities. "
          data={stepperData}
          img={heroImg}
          button=" Book 1:1 Session"
        />
        <ServiceCarousalSection/>

        <PointsandImagesSection
          reverse
          mainHeading="Why Work With Us?"
          data={PointsImageData}
          img={heroImg}
          button="Book FREE Strategy Call"
        />
        <CaseStudiesCarousalSection heading="Computer Vision Development : Our Recent Case Studies" />

        <CustomerTestimonials />
        <ProductsCarousalSection />
        <FaqsSection faqsData={faqsData} heading="We're often asked" />
        <ContactForm />
        <BannerSection />

      </main>
    </LandingLayout>
  );
}
