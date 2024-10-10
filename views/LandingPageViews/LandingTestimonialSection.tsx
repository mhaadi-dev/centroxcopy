import SectionTag from "@/Components/common/SectionTag";
import InstaCure from "@/assets/InstaCure.svg";
import Derq from "@/assets/DERQ.svg";
import Bluecore from "@/assets/Bluecore.svg";
import Rankpage from "@/assets/Rank Page.svg";

import TestimonialCarousel from "@/Components/common/TestimonialCarousel";

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
    name: "Khalid Khushal",
    position: "CEO RANKPAGE",
    description:
      "We were initially skeptical about outsourcing our AI projects, but Centrox AI quickly changed our minds. Their team is highly skilled and knowledgeable, and they have a proven track record of delivering successful AI solutions. We're confident that they will continue to be a valuable partner for our organization",
  },
];

const LandingTestimonialSection = () => {
  return (
    <section className="text-white w-[90%] sm:w-auto mx-[1.5rem] lg:mx-[15rem] mt-12">
      <SectionTag text="Testimonials" />
      <header aria-label="Centrox case studies" className="text-white ">
        <h2 className="font-semibold text-center text-[1.5rem] lg:text-5xl my-4">
          What Our Clients Say
        </h2>
        <p className="text-center w-full text-[1rem] sm:w-[100%] mx-auto sm:text-[1.5rem]">
          Hear from tech leaders who trusted us and have partnered with us to
          achieve their Gen AI goals
        </p>
      </header>
      <TestimonialCarousel imagesArray={imagesArray} dataArray={dataArray} />
    </section>
  );
};

export default LandingTestimonialSection;
