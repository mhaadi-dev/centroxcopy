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
   cardsData?:any
   headerData?:any
   includeButton?:boolean
   cardsCaption?:string
   buttonText?:string
}
const CommonDisplayCardsGrid = ({cardsData=[],headerData,cardsCaption="",includeButton=false,buttonText=""}:Props) => {
  

  return (
    <section
      id="challenges"
      className={classNames(section_wrapper_class, "mx-auto")}
    >
      <SectionHeader
        tagText={headerData?.tagText}
        headingText={headerData?.headingText}
        para1Text={headerData?.para1Text}
        para2Text={headerData?.para2Text}
        heading2Text={headerData?.heading2Text}
      />
      
     
      <div
        className="grid my-6 grid-cols-1 lg:grid-cols-2 gap-8 w-full "
      >
        {cardsData.map((card:any, index:number) => (
          <CommonCardwithIcon
            key={index}
            isGradientBg={true}
            Icon={card?.icon}
            heading={card?.heading}
            description={card?.description}
            className="h-auto lg:!h-[20rem] !rounded-3xl w-full"
          />
        ))}
      </div>
     {cardsCaption && <p className={classNames(text_para_2,"text-center my-4")}>{cardsCaption}</p>}
{ includeButton &&  <div className="flex justify-center items-center my-6"><CalendlyWidget btnText={buttonText} isArrow/></div>
}    </section>
  );
};

export default CommonDisplayCardsGrid;
