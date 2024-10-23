import CommonCardwithIcon from "@/Components/common/CommonCardwithIcon";
import SectionHeader from "@/Components/common/SectionHeader";
import classNames, {
  section_wrapper_class, text_para_2,
} from "@/helpers/common";
import Icon from "@/assets/Icon.webp";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg"
import { CalendlyWidget } from "./Calendly";
interface Props{
  data:any
}
const CommonDisplayCardsGrid = ({data}:Props) => {
if(!data){
  return null
}
  return (
    <section
      id="challenges"
      className={classNames(section_wrapper_class, "mx-auto")}
    >
      <SectionHeader
        tagText={data?.[0]?.headerData?.tagText}
        headingText={data?.[0]?.headerData?.headingText}
        para1Text={data?.[0]?.headerData?.para1Text}
        para2Text={data?.[0]?.headerData?.para2Text}
        heading2Text={data?.[0]?.headerData?.heading2Text}
      />
      
     
      <div
        className={classNames("grid my-8 grid-cols-1 lg:grid-cols-2 gap-8 w-full auto-rows-fr")} 
      >
        {data?.[0]?.data?.length>0? data?.[0].data?.map((card:any, index:number) => (
          <CommonCardwithIcon
            key={index}
            isGradientBg={true}
            Icon={card?.icon}
            heading={card?.heading}
            description={card?.description}
            className="h-full !rounded-3xl w-full"
            linkText={card?.linkText}
          />
        )): "" }
      </div>
     {data?.[0]?.caption && <p className={classNames(text_para_2,"text-center my-4")}>{data?.[0]?.caption}</p>}
{ data?.[0]?.btnText &&  <div className="flex justify-center items-center my-6"><CalendlyWidget btnText={data?.[0]?.btnText} isArrow/></div>
}    </section>
  );
};

export default CommonDisplayCardsGrid;
