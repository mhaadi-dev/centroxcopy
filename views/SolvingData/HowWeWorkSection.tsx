import analyzingImg from "@/public/images/solvingdata/AnalyzingData.svg";
import onboardingImg from "@/public/images/solvingdata/Onboarding.svg";
import annotatingImg from "@/public/images/solvingdata/AnnotatingData.svg";
import reviewImg from "@/public/images/solvingdata/Reviewannotations.svg";
import feedbackImg from "@/public/images/solvingdata/feedback.svg";
import exportingLabelsImg from "@/public/images/solvingdata/exportinglabels.svg";
import Image from "next/image";
import { sectionheadings, sectionsubheadings } from "@/helpers/common";

const CardData = [
  {
    img: analyzingImg,
    text: "Analyzing Data",
  },
  {
    img: onboardingImg,
    text: "Onboarding",
  },
  {
    img: annotatingImg,
    text: "Annotating Data",
  },
  {
    img: reviewImg,
    text: "Reviewing Annotations",
  },
  {
    img: feedbackImg,
    text: "Feedback",
  },
  {
    img: exportingLabelsImg,
    text: "Exporting Labels",
  },
];

export const HowWeWorkSection = () => {
  return (
    <>
      <section className="flex flex-col gap-8 w-4/5 mx-auto pt-24 lg:pt-60">
        <h2 className={sectionheadings}>How We Work</h2>
        <p className={sectionsubheadings}>
          Through our highly personalized workflow, we combine advanced AI
          algorithms with human oversight to deliver precise data services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CardData.map((card, index) => {
            return (
              <div
                className="w-full rounded-xl p-6 lg:p-8 flex flex-col gap-1  lg:gap-4"
                style={{
                  background: `${
                    index === 0
                      ? "radial-gradient(88.59% 70.63% at 100% 100%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)"
                      : index === 1
                      ? "radial-gradient(64.26% 107.81% at 50% -34.18%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)"
                      : index === 2
                      ? "radial-gradient(89.96% 89.67% at 100% 0%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06) "
                      : index == 3
                      ? "radial-gradient(88.95% 70.79% at 0% 100%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)"
                      : index == 4
                      ? " radial-gradient(60.31% 101.17% at 50% 157.03%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)"
                      : index == 5
                      ? "radial-gradient(88.59% 70.63% at 100% 100%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)"
                      : "radial-gradient(94.87% 91.02% at 0% 3.12%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)}"
                  } `,
                }}
              >
                <div className="flex justify-between ">
                  <Image src={card.img} className="w-8" alt="icon" />
                  <div
                    style={{
                      background:
                        " radial-gradient(205.46% 176.53% at 50% 100%, #002237 0%, rgba(0, 0, 0, 0.00) 100%), rgba(0, 0, 0, 0.10)",
                    }}
                    className=" flex items-center rounded-full justify-center w-8 h-8 bg-red-200"
                  >
                    <span className="text-white ">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-white text-xl lg:text-2xl font-semibold ">
                  {card.text}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
