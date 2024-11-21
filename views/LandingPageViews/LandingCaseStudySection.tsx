import { ProductsCarousal } from '@/Components/common/ProductsCarousal'
import SectionTag from '@/Components/common/SectionTag'
import dummyDisplay from "@/assets/dummyDisplay.webp";
import {CaseStudyCarousal} from "@/Components/common/CaseStudyCarousal"
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common';
interface CaseStudyDataProps {
  headerData: {
    tagText?: string;
    heading?: string;
    paraText?: string;
  };
  data: {
    title?: string;
    subTagText?: string;
    description?: string;
    tags?: string[];
    btnText?: string;
    link?: string;
    isBookingButton?: boolean;
    image?:any
  }[];
}

const LandingCaseStudySection = (data:CaseStudyDataProps) => {
  return (
    <section className={classNames(section_wrapper_class)}>
      
    <header aria-label="Centrox case studies" className="text-white flex flex-col gap-y-4 ">
  { data.headerData.tagText &&  <SectionTag text={data.headerData.tagText}/>}
       {data.headerData.heading && <h2 className={classNames(text_h2_class,"text-center")}>
        {data.headerData.heading}
        </h2>}
        {data.headerData.paraText &&<p className={classNames(text_para_2,"text-center")}>
        {data.headerData.paraText}
        </p>}
      </header>
      <CaseStudyCarousal data={data.data}/>
    </section>
  )
}

export default LandingCaseStudySection
