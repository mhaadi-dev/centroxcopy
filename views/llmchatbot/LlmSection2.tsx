import classNames, {
  sectionheadings,
  sectionHeadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";
import fineTuningImg from "@/public/images/llmchatbot/finedTuning.webp"
import annotatedDataImg from "@/public/images/llmchatbot/annotatedData.webp"
import leftUnion from "@/public/images/llmchatbot/leftUnion.png"

import rightUnion from "@/public/images/llmchatbot/rightunion.png"
import icon from "@/public/images/llmchatbot/sectionIcon.svg";
import results from "@/public/images/llmchatbot/results.webp"
import Image from "next/image";
export const LlmSection2 = () => {
  return (
    <div className="w-full pb-20 pt-4" 
    style={{
      background:"linear-gradient(180deg, rgba(7, 157, 252, 0.00) 58.61%, #079DFC 100%), #060606;"
    }}>
    <section className="flex flex-col gap-8 mt-20 lg:mt-44 w-4/5 mx-auto"
   
    >
      <h2 className={classNames(sectionheadings,"lg:w-full lg:mx-0 lg:text-left ")}>
      We tag team with AI startups who have the vision but are:      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-start gap-1 lg:gap-4">
          <Image src={icon} className="w-6" alt="icon" />
          <p className={classNames(sectionSectionDescription,"!text-left")}>
            Unsure which foundation model (GPT, Llama, or others) best suits
            their use case?
          </p>
        </div>

        <div className="flex gap-1 lg:gap-4">
          <Image src={icon} className="w-6" alt="icon" />
          <p className={classNames(sectionSectionDescription,"!text-left")}>
            Struggling with data preprocessing, tokenization, or model
            architecture optimization?
          </p>
        </div>

        <div className="flex gap-1 lg:gap-4">
          <Image src={icon} className="w-6" alt="icon" />
          <p className={classNames(sectionSectionDescription,"!text-left")}>
            Concerned about fine-tuning efficiency, overfitting, or catastrophic
            forgetting?
          </p>
        </div>

        <p className={classNames(sectionSectionDescription ,"font-semibold mt-8 !text-left")}>
          We facilitate them in every step of the development process to bring
          their optimal product to market faster.
        </p>

      </div>

      <div className="w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center mt-12 gap-4 lg:gap-0">
        <Image src={annotatedDataImg} alt="annotated data  img" className="w-3/4 lg:w-[30%] my-0 lg:my-[5%] -mr-0 lg:-mr-20  lg:z-10 " />
        <Image src={leftUnion} alt="union-img " className="hidden lg:block h-[75%] -mr-20 " />
        <Image src={fineTuningImg} alt="fine tuning img" className="w-full lg:w-1/2 z-10 "/>
        <Image src={rightUnion} alt="union-img " className="hidden lg:block h-[75%] -ml-20  " />
        <Image  src={results} alt="results img" className="w-3/4 lg:w-[30%] my-0 lg:my-[5%] z-10 -ml-0  lg:-ml-20 "/>

      </div>
    </section>
    </div>
  );
};
