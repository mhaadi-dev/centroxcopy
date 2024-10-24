import { CarouselwithStackAnimation } from "@/Components/common/CarouselwithStackAnimation";
import SectionTag from "@/Components/common/SectionTag";
import dummyDisplay from "@/assets/dummyDisplay.webp";

import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";


const LandingSolutionsSection = (props:any) => {
  return (
    <>
   
      <section id="solutions" aria-label="Centrox Blog" className={classNames(section_wrapper_class,"flex flex-col gap-y-4 mx-auto")}>
      <SectionTag text="Solutions" />
       {props?.heading &&  <h2 className={classNames(text_h2_class,"text-center")}>
          {props?.heading}
        </h2>}
      {props?.description &&  <p className={classNames(text_para_2,"sm:w-[60%] text-center mx-auto")}>
        {props?.description}
        </p>
        }
        <CarouselwithStackAnimation data={props?.data} tagHeading={props?.tagHeading || ""} />
      </section>
      
    </>
  );
};

export default LandingSolutionsSection;
