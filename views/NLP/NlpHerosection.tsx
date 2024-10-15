import classNames, {
  sectionheadings,
  sectionsubheadings,
} from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";

export const NlpHeroSection = () => {
  return (
    <>
      <div className="relative overflow-hidden pb-32 ">
        <section className="flex mt-24 lg:mt-40 w-4/5 mx-auto  gap-12 items-center  flex-col lg:flex-row ">
          <div
            className="hidden lg:block h-full w-4/5 absolute rotate-[133deg] -right-[25%] rounded-2xl  top-1/2  bottom-0    bg-green-200 "
            style={{
              background: "rgba(7, 157, 252, 0.10)",
              border: "2px solid rgba(7, 157, 252, 0.30)",
              fill: "rgba(7, 157, 252, 0.10)",
              strokeWidth: "4px",
              stroke: "rgba(7, 157, 252, 0.10)",
              backdropFilter: "blur(8px)",
            }}
          />{" "}
          <div className="w-full lg:w-1/2  flex flex-col gap-8 ">
            <h1
              className={classNames(
                sectionheadings,
                "lg:!text-left lg:!mx-0 lg:!w-4/5"
              )}
            >
              Fine-Tune Your AI Models. Achieve State-of-the-Art Performance.{" "}
            </h1>
            <p
              className={classNames(
                sectionsubheadings,
                "lg:!text-left lg:!mx-0 lg:!w-[90%]"
              )}
            >
              At Centrox AI, we help you go beyond the limitations of
              pre-trained models and achieve peak performance on your specific
              tasks.{" "}
            </p>
          </div>
          <figure className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            <Image
              src={img}
              alt="img"
              className="w-full lg:w-4/5 rounded-xl "
            />
          </figure>
        </section>
      </div>
    </>
  );
};
