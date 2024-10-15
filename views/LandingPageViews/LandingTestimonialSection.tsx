import SectionTag from "@/Components/common/SectionTag";
import InstaCure from "@/assets/InstaCure.svg";
import Derq from "@/assets/DERQ.svg";
import Bluecore from "@/assets/Bluecore.svg";
import Rankpage from "@/assets/Rank Page.svg";

import TestimonialCarousel from "@/Components/common/TestimonialCarousel";
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";

const imagesArray = [Derq, InstaCure, Bluecore, Rankpage];

const dataArray = [
  {
    name: "Danis Loyed",
    position: "CEO DERQ",
    description:
      "“Centrox AI Services has been an invaluable partner in our AI initiatives. Their expertise in [specific AI area, e.g., natural language processing] has helped us develop innovative solutions that have significantly improved our [business outcome]. The team's dedication and ability to deliver results on time and within budget have exceeded our expectations.”",
  },
  {
    name: "Adam Frade",
    position: "CEO Instacured",
    description:
      "We've been working with Centrox AI for several years, and we've been consistently impressed with their expertise and professionalism. They have a deep understanding of AI technology and are able to translate complex concepts into actionable solutions. Their team is always responsive and willing to go the extra mile to ensure our satisfaction",
  },
  {
    name: "John Adam",
    position: "CEO Bluecore",
    description:
      "Centrox AI has helped us to unlock the full potential of our data. Their AI-powered tools and services have enabled us to gain valuable insights that we would never have been able to uncover on our own. We're grateful for their partnership and look forward to continuing to work with them in the future.",
  },
  {
    name: "Waleed",
    position: "CEO RANKPAGE",
    description:
      "We were initially skeptical about outsourcing our AI projects, but Centrox AI quickly changed our minds. Their team is highly skilled and knowledgeable, and they have a proven track record of delivering successful AI solutions. We're confident that they will continue to be a valuable partner for our organization",
  },
];

const LandingTestimonialSection = () => {
  return (
    <section className={classNames(section_wrapper_class)}>
      
      <header aria-label="Centrox case studies" className="text-white flex flex-col gap-y-4 ">
      <SectionTag text="Testimonials" />
        <h2 className={classNames(text_h2_class,"text-center")}>
          What Our Clients Say
        </h2>
        <p className={classNames(text_para_2,"text-center w-full mx-auto")}>
          Hear from tech leaders who trusted us and have partnered with us to
          achieve their Gen AI goals
        </p>
      </header>
      <TestimonialCarousel imagesArray={imagesArray} dataArray={dataArray} />
    </section>
  );
};

export default LandingTestimonialSection;
