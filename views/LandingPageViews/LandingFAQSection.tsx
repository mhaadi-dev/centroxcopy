import SectionTag from "@/Components/common/SectionTag";
import { FaqsSection } from "@/sections/FaqsSection";

const LandingFAQSection = () => {
  const data = [
    {
      question:
        "Will outsourcing LLM development compromise the quality and performance of my AI solution?",
      answer:
        "Absolutely not. We're committed to delivering state-of-the-art LLM solutions that meet or exceed your expectations. Our team consists of experienced engineers and researchers who adhere to best practices and employ cutting-edge techniques to ensure optimal performance, accuracy, and robustness.",
    },
    {
      question:
        "How can I be sure that my proprietary data will be handled securely and confidentially?",
      answer:
        "Data security and privacy are paramount to us. We implement strict data handling protocols, including encryption, access controls, and secure storage, to safeguard your sensitive information. We're also happy to sign NDAs and comply with any specific data governance requirements you may have.",
    },
    {
      question:
        "Will I have control and visibility over the LLM development process?",
      answer:
        "Transparency and collaboration are core values at Centrox. We believe in open communication and regular updates throughout the development lifecycle. We'll provide you with access to project management tools, progress reports, and performance metrics, ensuring you have full visibility into every stage of development.",
    },
    {
      question:
        "How can I ensure that the LLM aligns with my specific business needs and technical requirements?",
      answer:
        "We take a collaborative approach to LLM development, working closely with you to understand your unique requirements and challenges. We'll tailor our solutions to your specific domain, use case, and performance expectations, ensuring seamless integration with your existing infrastructure and workflows.",
    },
    {
      question:
        "What if I encounter challenges or issues after the LLM is deployed?",
      answer:
        "We provide ongoing support and maintenance to ensure your LLM continues to perform optimally. We'll proactively monitor your model, address any issues or bugs, and implement updates and improvements as needed. We're committed to your long-term success.",
    },
  ];
  return (
    <section>
      
      <FaqsSection
        heading="Your Questions, Answered"
        subHeading="We understand the complexities and nuances of LLM development, and we're here to address your concerns"
        data={data}
        addTag={true}
      />
    </section>
  );
};

export default LandingFAQSection;
