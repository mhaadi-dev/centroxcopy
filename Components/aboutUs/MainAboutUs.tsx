import Image from "next/image";
import HeroImage from "@/public/images/updatedAboutUs.webp";

import LinkedIn from "@/assets/linkedin.svg";

import BannerSection from "../MainPageComponents/Banner";
import classNames, {
  section_wrapper_class,
  text_h1_main,
  text_para_2,
  text_para_main,
} from "@/helpers/common";

export const MainAboutUs = (props: any) => {
  return (
    <>
      <main className={classNames("flex flex-col   gap-y-8 lg:gap-y-16")}>
        <div className="relative h-auto lg:h-screen flex items-center ">
          <Image
            src={props.props?.props[0]?.bgImage}
            alt="background"
            layout="fill"
            className="opacity-100 object-cover absolute inset-0 h-auto"
          />
          <div className="flex z-10 flex-col gap-4 pt-24 lg:pt-0   items-center w-full lg:w-[83%] mx-auto  rounded-2xl p-2   text-center">
            <h1
              className={classNames(
                text_h1_main,
                "    tracking-normal w-[60%] !bg-gradient-to-r from-text_gradient-primary to-text_gradient-faded bg-clip-text !text-transparent"
              )}
            >
              <span className="text-[#E5E7EB]">{props?.props?.props[0]?.mainSectionheading?.split(" ").slice(0,3).join(" ")} </span> {props?.props?.props[0]?.mainSectionheading?.split(" ").slice(3).join(" ")}
            </h1>
            <p
              className={classNames(
                text_para_main,"mx-auto w-[95%] lg:!w-[60%] lg:!max-w-[60%]"
              )}
            >
              {props?.props?.props[0]?.description || ""}
            </p>
          </div>
        </div>
        <section
          className={classNames(
            section_wrapper_class,
            "flex flex-col  gap-y-16 lg:gap-y-32"
          )}
        > 
        <div className="flex flex-col gap-4">
           <h2 className="text-3xl font-extrabold sm:text-2xl lg:text-6xl  text-center text-white">
            {props?.props?.props[0]?.secondSectionHeading}
          </h2>
          <p
              className={classNames(
                text_para_main,"mx-auto text-center w-[95%] lg:!w-[70%] lg:!max-w-[70%]"
              )}
            >
              {props?.props?.props[0]?.seconSectionDescription || ""}
            </p>
        </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[98%] lg:w-full gap-16 lg:gap-10 mx flex-wrap text-white">
            {props?.props?.props[0]?.LeadersImgs?.map((el: any, index: any) => {
              if (
                !el?.img &&
                !el?.name &&
                !el?.designation &&
                !el.linkedINUrl
              ) {
                return null; 
              }
              return (
                <div
                  key={index}
                  className="flex w-full border-2 border-red-200 flex-col justify-center items-center p-4 rounded-xl"
                  style={{
                    border: "1px solid rgba(3, 34, 182, 0.20)",

                    background:
                      "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
                    boxShadow:
                      "0px 0px 16px 0px rgba(255,  255, 255, 0.10) inset",
                    backdropFilter: "blur(18px)",
                  }}
                >
                  <div className="relative  h-96 w-full   ">
                    {el.img && (
                      <Image
                        src={el.img}
                        alt="image-data"
                        fill
                        //   placeholder="blur"
                        // blurDataURL={blurDataURLs[index]}
                        // onLoad={() => handleImageLoad(index, el.img.src)}
                        className="rounded-2xl  object-cover "
                        
                      />
                    )}
                  </div>
                  <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
                    {el.name}
                  </p>
                  <div className="flex justify-between items-left w-full mt-1">
                    <p className=" font-semibold text-xs md:text-sm  text-blue-azure">
                      {el.designation}
                    </p>
                    <a href={el.linkedINUrl} target="_blank" rel="noreferrer">
                      <Image src={LinkedIn} className="w-5" alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 flex-col">
             <h2 className="text-3xl font-extrabold sm:text-2xl lg:text-6xl  text-center text-white ">
            {props?.props?.props?.[0]?.teamSectionHeading}
          </h2>
          <p
              className={classNames(
                text_para_main,"mx-auto text-center w-[95%] lg:!w-[70%] lg:!max-w-[70%]"
              )}
            >
              {props?.props?.props[0]?.teamSectionDescription || ""}
            </p>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 w-full mx-auto text-white  ">
            {props?.props?.props?.[0]?.teamSectionImgs?.map(
              (el: any, index: number) => {
                if (
                  !el?.img &&
                  !el?.name &&
                  !el?.designation &&
                  !el.linkedINUrl
                ) {
                  return null; // Skip rendering this item if all properties are null
                }
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center p-4 rounded-xl"
                    style={{
                      border: "1px solid rgba(3, 34, 182, 0.20)",

                      background:
                        "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
                      boxShadow:
                        "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
                      backdropFilter: "blur(18px)",
                    }}
                  >
                    <div className="  ">
                      {el.img && (
                        <Image
                          src={el.img}
                          alt="image-data"
                          objectFit="cover"
                          className="rounded-xl  object-cover "
                          placeholder="blur"
                        />
                      )}
                    </div>
                    <div className=" w-full">
                      <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
                        {el.name}
                      </p>
                      <div className="flex justify-between items-left w-full mt-1">
                        <p className=" font-semibold text-xs md:text-sm  text-blue-azure">
                          {el.designation}
                        </p>
                        <a
                          href={el.linkedINUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={LinkedIn} className="w-5" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <BannerSection />
        </section>

        {/* {showToast && <Toast showToast={showToast} setShowToast={setShowToast} />} */}
      </main>
    </>
  );
};
