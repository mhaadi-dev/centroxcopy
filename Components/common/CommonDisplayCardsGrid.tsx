import CommonCardwithIcon from "@/Components/common/CommonCardwithIcon";
import SectionHeader from "@/Components/common/SectionHeader";
import classNames, {
  section_wrapper_class,
  text_h2_class,
  text_para_2,
} from "@/helpers/common";
import Icon from "@/assets/Icon.webp";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { CalendlyWidget } from "./Calendly";
import CommonCard from "./CommonCard";
import CommonResizeableCard from "./CommonResizeableCard";
import dummyDisplay from "@/assets/dummyDisplay.webp"
interface Props {
  data: any;
  caseStudyCards?: boolean;
  tags?:boolean;
  gridCols?:number
  headingClassName?:string
  gradientBg?:boolean,
  resizeableCardsLayout?:boolean,
  reverse?:boolean
}
const CommonDisplayCardsGrid = ({ data, caseStudyCards = false, tags=false,gridCols,headingClassName="",gradientBg=false,resizeableCardsLayout,reverse }: Props) => {
  console.log("data is:", data)
  if (!data) {
    return null;
  }
  return (
    <section style={{
      ...(gradientBg && {
        background:
          "linear-gradient(180deg, rgba(7, 157, 252, 0.00) 53.06%, rgba(7, 157, 252, 0.40) 72.78%, #060606 100%), #060606",
      }),
    }}>
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
        className={classNames(
          // "grid my-8  justify-between grid-cols-1 lg:grid-cols-2 gap-8 w-full auto-rows-fr",
          "grid my-8  justify-between grid-cols-1  gap-8 w-full ",
          gridCols ? `lg:grid-cols-${gridCols}`:"lg:grid-cols-2 "

        )}
      >
        {!caseStudyCards && !resizeableCardsLayout && data?.[0]?.data?.length > 0
          ? data?.[0].data?.map((card: any, index: number) => (
              <CommonCardwithIcon
                key={index}
                isGradientBg={true}
                Icon={ card?.icon?.src || card?.icon}
                heading={card?.heading}
                description={card?.description}
                className="!h-auto !rounded-3xl w-full"
                linkText={card?.linkText}
                headingClassName={headingClassName}
                symbol={card.symbol}
                alt={ card?.icon?.alt || card.alt}
              />
            ))
          : ""}
        {caseStudyCards && [1,2,3,4].map(card=>{
          return <CommonCard
          image={dummyDisplay}
          title="Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform"
          subdescription="Centrox is proud to be a Llama 3.1 405B is the largest openly available foundation model with capabilities that rival the best closed-source."
          tags={tags}
          link=""
          linkText="Learn More"
          linkWithIcon
          label={"Product"}
          duration="20min read"
        />
        })}

        {
          resizeableCardsLayout && data?.[0]?.data?.length > 0
          ? data?.[0].data?.map((card: any, index: number) => (
              <CommonResizeableCard
                key={index}
                isGradientBg={true}
                Icon={card.icon}
                heading={card?.heading}
                description={card?.description}
                className={classNames("!h-auto !rounded-2xl w-full   !border-[1px] !border-[#111F28]",data?.[0].centerAlign ? "lg:w-2/3 mx-auto" :"")}
                linkText={card?.linkText}
                headingClassName={headingClassName}
                symbol={card.symbol}
                colSpan={card.colSpan}
                reverse={card.reverse}
                bentoImage={   card?.bentoImage?.src ? card?.bentoImage?.src : card?.bentoImage}
                altText={ card?.bentoImage?.alt ? card?.bentoImage?.alt : card?.alt }
              />
            ))
          : ""}
          
          
        
      </div>
      {data?.[0]?.caption && (
        <p className={classNames(text_para_2, "text-center my-4")}>
          {data?.[0]?.caption}
        </p>
      )}
      {data?.[0]?.btnText && (
        <div className="flex justify-center items-center my-6">
          <CalendlyWidget btnText={data?.[0]?.btnText} isArrow />
        </div>
      )}{" "}
    </section>
    </section>
    
  );
};

export default CommonDisplayCardsGrid;
