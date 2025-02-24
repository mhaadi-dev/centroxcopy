import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import Image from "next/image";
import classNames, {  section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";

import LandingAboutUsPattern from "@/assets/LandingAboutUsPattern.webp";
import Link from "next/link";
import ImageComponent from "@/Components/common/ImageComponent";
import ImageComponent2 from "@/Components/common/ImageComponent2";

export const LandingAboutUs = () => {


 
  return (
    <section className={classNames(section_wrapper_class,"flex flex-col gap-4 justify-center items-center relative ")  }
    > 
    {/* <Image src={LandingAboutUsPattern} alt="bg" className="absolute z-[1] object-cover bottom-0" width={1888} height={637} loading="lazy"></Image> */}
      <div
        className={classNames(
          "flex  sm:mt-0  py-0 sm:px-0",
          " sm:mx-0 "
        )}
     
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start h-full py-6 sm:mx-0">
          <h2 className={classNames(text_h2_class)}>
            Bridging the Gap between research and real-world applications
          </h2>

          <div className="sm:mt-8 3xl:mt-10 w-[95%] 2xl:w-[83%] 3xl:w-[85%] text-lg sm:text-2xl 3xl:text-4xl text-white leading-6">
            <p className={classNames(text_para_2)}>
              We at Centrox AI understand the challenges companies face when
              navigating the complexities of Gen AI development and deployment.
              Centrox AI is a full-cycle AI development company on a mission to
              augment business that are moving the innovation needle in Gen AI.
            </p>
            <br />
            <div className="lg:hidden">
            <ImageComponent/>
            </div>
            
      
            <p className={classNames(text_para_2,"mt-4")}>
              We want to enable you to focus on your core product and achieve
              your business goals faster while we take over your Gen AI
              development life cycle. We want to put our AI technical depth,
              collaborative approach, and commitment to delivering to good use
              by helping you out.
            </p>
          </div>
          <Link href="/contact" className="z-[1]">
             <Button
            content="Contact Us Now"
            Icon={Arrow}
            iconClassName="-mt-1"
            isLefticon={false}
            className="mt-2 !px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem] sm:mt-8 mx-0"
          />
          </Link>
         
        </div>
   
       <ImageComponent2/>
      </div>
    </section>
  );
};
