import { sectionheadings, sectionHeadings, sectionSectionDescription, sectionsSectionHeadings } from "@/helpers/common";
import bgImg from "@/public/images/customchatbot/customchatbotbg.webp";
import Image from "next/image";
// const Data = [
//   {
//     img: "",
//     title: "Fine Tuning Expertise",
//     descriptions: [
//       {
//         heading: "Elevate Model Performance",
//         subHeading:
//           "We take state-of-the-art open-source foundation models and tailor them precisely to your domain-specific data and tasks",
//       },
//       {
//         heading: "Enhanced Accuracy & Relevance",
//         subHeading:
//           " Fine-tuning ensures your LLM understands your unique vocabulary, terminology, and context, delivering more accurate and relevant responses.",
//       },
//       {
//         heading: "Reduced Hallucinations",
//         subHeading:
//           "We mitigate the risk of the model generating false or misleading information by fine-tuning it on your verified data.",
//       },
//     ],
//   },

//   {
//     img: "",
//     title: "Retrieval Augmented Generation (RAG)",
//     descriptions: [
//       {
//         heading: "Real-Time Knowledge Integration",
//         subHeading:
//           "Combine the power of LLMs with the vastness of your knowledge base, databases, or documents.",
//       },
//       {
//         heading: "Up-to-date & Factual Responses",
//         subHeading:
//           " RAG enables your LLM to access and synthesize the latest information, providing responses that are always relevant and accurate.",
//       },
//       {
//         heading: "Dynamic & Adaptable Solutions",
//         subHeading:
//           "As your knowledge base evolves, your RAG-powered LLM automatically adapts, ensuring consistent and reliable performance.",
//       },
//     ],
//   },
//   {
//     img: "",
//     title: "Custom Chatbot Development",
//     descriptions: [
//       {
//         heading: "Tailored Conversational Experiences",
//         subHeading:
//           "We build chatbots that align perfectly with your brand voice, user needs, and business goals.",
//       },
//       {
//         heading: "Enhanced User Engagement",
//         subHeading:
//           " Our chatbots go beyond simple Q&A, offering personalized recommendations, interactive conversations, and even task automation.",
//       },
//       {
//         heading: "Seamless Integration",
//         subHeading:
//           "We integrate your custom chatbot into your existing platforms (website, app, messaging channels) for a frictionless user experience.",
//       },
//     ],
//   },
// ];

const Data = [
  {
    title: "Fine-Tuning Expertise",
    description:
      "We choose open-source foundation models and tailor them precisely to your specific use-cases.",
  },
  {
    title: "Retrieval Augmented Generation (RAG)",
    description:
      "We can augment existing LLMs with  your proprietary knowledge base enabling them to respond more intelligently to your business-specific queries.",
  },
  {
    title: "AI Agents",
    description:
      "We can build AI agents for you that fetch real time data from the internet and answer your user queries with the latest information.",
  },
];
export const LLmSection4 = () => {
  return (
    <section className="w-4/5 mx-auto mt-20 lg:mt-44 flex flex-col gap-12 relative pb-20">
      {/* <Image
        className="absolute w-full h-[80%]  bottom-0  left-[10%] "
        src={bgImg}
        alt="bg-img"
      /> */}
      <h2 className={sectionheadings}>Our Core Offerings</h2>
      <div className="w-full mx-auto flex flex-col gap-12 ">

      {Data.map((x,index)=>{
        return (<div key={index} className={`w-full rounded-xl p-4 border border-gray-500 flex ${index === 1  ? "flex-row-reverse" : "" }   gap-12`}>
          <div className="flex flex-col justify-center gap-4 w-2/5" >
            <h3 className={sectionsSectionHeadings}>
              {x.title}
            </h3>
            <p className={sectionSectionDescription}>
              {x.description}
            </p>
          </div>
          <div className="w-3/5 h-[15rem] bg-blue-200"/>
          
        </div>)
      })}

      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {Data.map((x, index) => {
          return (
            <div className="w-full flex flex-col gap-4 border-2 border-gray-300 p-4 lg:p-8 bg-gray-500 rounded-2xl z-10" key={index}>
                <div className="h-30 lg:h-40 flex flex-col gap-4">
              <figure className="h-20 bg-white "></figure>
              <h3 className="text-white font-semibold tex-xl lg:text-2xl">{x.title}</h3>
              </div>
              <div className="mt-4">
              {x.descriptions.map((sub, index) => {
                return (
                  <div className="flex flex-col gap-2 ">
                    <h4 className="text-white font-semibold text-md lg:text-lg">{sub.heading}</h4>
                    <h5 className="text-white font-medium text-xs lg:text-sm">
                      {sub.subHeading}
                    </h5>
                  </div>
                );
              })}
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};
