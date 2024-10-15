import classNames from "@/helpers/common";
import PlusColor from "@/assets/PlusColor.svg";
import Background from "@/assets/Background.svg";
import Image from "next/image";
export const GradientBox = ({ heading, text, className }: any) => {
    return (
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center relative">
          <div
            className={classNames(
              "w-[21rem] lg:w-[30rem] h-32  text-white rounded-3xl py-20  flex justify-center items-center ",
              className
            )}
            style={{
              background:
                "radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.4) 0%, rgba(7, 157, 252, 0) 100%), rgba(1, 184, 252, 0.06)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <Image src={Background} alt="sorry" className="w-full h-full" /> */}
            <div className="absolute flex gap-4 items-center  flex-col">
              <div className="flex items-center gap-3">
                <div className="text-5xl  inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-blue-500 font-bold">
                    {heading}
                  </span>
                </div>
                {/* <Image src={PlusColor} alt="sorry" className="w-8" /> */}
              </div>
              <div
                className="text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };