import CommonCardwithIcon from "@/Components/common/CommonCardwithIcon";
import SectionHeader from "@/Components/common/SectionHeader";
import classNames, {
  section_wrapper_class, text_para_2,
} from "@/helpers/common";
import Icon from "@/assets/Icon.webp";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg"

const ChallengesSection = () => {
  const cardsData = [
    {
      icon: Icon,
      heading: "Domain-Specific Challenges",
      description:
        "Generic models often struggle with industry-specific jargon, terminology, and nuanced context, leading to inaccurate or irrelevant outputs. This can severely impact the user experience and hinder the effectiveness of your AI applications.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Performance Bottlenecks",
      description:
        "Large pre-trained models can be computationally expensive and slow, making them impractical for real-time applications or deployment on resource-constrained environments. This can lead to delays, increased costs, and frustrated users.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Data Scarcity",
      description:
        "Training effective LLMs typically requires vast amounts of high-quality, labeled data, which can be costly and time-consuming to acquire. This can significantly slow down your development process and limit the potential of your AI solutions.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
    {
      icon: Icon,
      heading: "Bias & Fairness",
      description:
        "Pre-trained models can inherit biases from their training data, leading to unfair or discriminatory outputs. This can have serious ethical and legal implications for your business.",
      linkText: "Learn More",
      linkWithIcon: true,
    },
  ];

  return (
    <section
      id="challenges"
      className={classNames(section_wrapper_class, "mx-auto")}
      aria-label="centrox-industries"
    >
      <SectionHeader
        tagText="Challenges"
        headingText="The Challenge of Generatic LLMs"
        para1Text="Are you pushing the boundaries of what's possible with AI, but pre-trained models are holding you back?"
        para2Text="You're not alone. Many startups are facing the limitations of generic LLMs:"
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
      <p className={classNames(text_para_2,"text-center my-4")}>Centrox AI understands these pain points. We have the expertise to build custom LLMs that overcome these limitations and deliver exceptional results for your specific needs.</p>
      <div className="flex justify-center items-center my-4"><Button content="Schedule a Discussion" Icon={Arrow} iconClassName="!-mt-1" isLefticon={false}/></div>
    </section>
  );
};

export default ChallengesSection;
