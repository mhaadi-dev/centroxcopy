import { Button } from "@/Components/Button.js/button";
import { sectionheadings, sectionsubheadings } from "@/helpers/common";
import Arrow from "@/assets/RightArrow.svg";
import Link from "next/link";

const gradientCardData = [
  {
    figures: "110+",
    description: "Annotations Experts",
  },
  {
    figures: "6.80M",
    description: "Data Points Annotated",
  },
];

export const  ComprehensiveDataAnnotatoinsSection = () => {
  return (
    <>
      <section className="flex flex-col gap-8 w-4/5 mx-auto pt-24 lg:pt-60 ">
        <h2 className={sectionheadings}>
          Comprehensive Data Annotation Solutions Tailored for Every Sector
        </h2>
        <h4 className={sectionsubheadings}>
          Access professional AI annotation services from Centrox, supported by
          a skilled team dedicated to meeting diverse industry requirements.
        </h4>
        <div className="flex flex-col w-4/5 mx-auto lg:flex-row gap-8">
          {gradientCardData?.map((data, index) => {
            return (
              <div
                className="flex flex-col rounded-xl gap-4 p-6 w-full justify-center items-center  "
                key={index}
                style={{
                  background:
                    "radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.4) 0%, rgba(7, 157, 252, 0) 100%), rgba(1, 184, 252, 0.06)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-500 text-3xl lg:text-5xl font-bold">
                  {data.figures}
                </h3>
                <h3 className="text-white text-md lg:text-3xl text-center">{data.description}</h3>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href={"/aiExpert"}>
        <Button
          content="Book a Demo"
          isLefticon={false}
          iconClassName="-mt-1"
          Icon={Arrow}
          className="bg-blue-azure border-0 w-44 !rounded-full mt-3 sm:mt-4"
          // onClick={() => {
          // 	window.open("https://staging.bm.centrox.ai/", "_blank");
          // }}
        />
        </Link>
        </div>
      </section>
    </>
  );
};
