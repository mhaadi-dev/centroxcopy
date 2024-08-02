import classNames, {
  sectionheadings,
  sectionHeadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";
import icon from "@/public/images/llmchatbot/sectionIcon.svg";
import Image from "next/image";
export const LlmSection2 = () => {
  return (
    <section className="flex flex-col gap-8 mt-20 lg:mt-44 w-4/5 mx-auto">
      <h2 className={classNames(sectionheadings,"lg:w-full lg:mx-0 lg:text-left ")}>
      We tag team with AI startups who have the vision but are:      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start items-start gap-4">
          <Image src={icon} className="w-6" alt="icon" />
          <p className={sectionSectionDescription}>
            Unsure which foundation model (GPT, Llama, or others) best suits
            their use case?
          </p>
        </div>

        <div className="flex gap-4">
          <Image src={icon} className="w-6" alt="icon" />
          <p className={sectionSectionDescription}>
            Struggling with data preprocessing, tokenization, or model
            architecture optimization?
          </p>
        </div>

        <div className="flex gap-4">
          <Image src={icon} className="w-6" alt="icon" />
          <p className={sectionSectionDescription}>
            Concerned about fine-tuning efficiency, overfitting, or catastrophic
            forgetting?
          </p>
        </div>

        <p className={classNames(sectionSectionDescription ,"font-semibold mt-8")}>
          We facilitate them in every step of the development process to bring
          their optimal product to market faster.
        </p>
      </div>
    </section>
  );
};
