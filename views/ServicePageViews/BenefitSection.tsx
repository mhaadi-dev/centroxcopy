import CommonCardwithIcon from "@/Components/common/CommonCardwithIcon";
import SectionHeader from "@/Components/common/SectionHeader";
import classNames, {
  section_wrapper_class, text_para_2,
} from "@/helpers/common";
import Icon from "@/assets/Icon.webp";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg"

const BenefitSection = () => {
  const cardsData = [
    {
      icon: Icon,
      heading: "Deeply Integrated",
      description:
        "We meticulously analyze your codebase, data pipelines, and research objectives to create LLMs that seamlessly fit into your existing workflows and infrastructure. This ensures smooth integration and minimizes disruptions.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Optimized for Performance",
      description:
        "We employ advanced techniques like quantization, distillation, and parallelization to ensure maximum efficiency on your hardware, even with large-scale models. This results in faster inference times, reduced costs, and improved user experience.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Adaptable & Scalable",
      description:
        "Your AI needs evolve, and so should your models. We build LLMs that can learn and grow alongside your projects, effortlessly integrating with your existing systems and scaling to handle increasing demands",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Cutting-Edge",
      description:
        "We're on the top of latest advancements in LLM which has made us adept in incorporating the latest research in transformer architectures, RLHF, chain-of-thought prompting, and retrieval-augmented generation (RAG). This ensures your solutions are always at the cutting edge of AI innovation.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
  ];

  return (
    <section
      id="challenges"
      className={classNames(section_wrapper_class, "mx-auto")}
      aria-label="centrox-benefits"
    >
      <SectionHeader
        tagText="Benefits"
        headingText="Tailor-Made LLMs"
        para1Text="For startups like you, the best foot forward is to customise existing LLMs according to your unique business needs. We collaborate deeply with your team throughout the entire development lifecycle, ensuring your LLM is deeply integrated, optimised, adaptable, and cutting-edge."
        heading2Text="Key Features & Benefits"
      />
      
     
      <div
        className="grid mt-4 grid-cols-1 lg:grid-cols-2 gap-8 w-full "
      >
        {cardsData.map((card, index) => (
          <CommonCardwithIcon
            key={index}
            isGradientBg={true}
            Icon={card.icon}
            heading={card.heading}
            description={card.description}
            className="h-auto lg:!h-[20rem] !rounded-3xl w-full"
          />
        ))}
      </div>
      {/* <p className={classNames(text_para_2,"text-center my-4")}>Centrox AI understands these pain points. We have the expertise to build custom LLMs that overcome these limitations and deliver exceptional results for your specific needs.</p> */}
      <div className="flex justify-center items-center my-4"><Button content="Schedule a Discussion" Icon={Arrow} iconClassName="!-mt-1" isLefticon={false}/></div>
    </section>
  );
};

export default BenefitSection;
