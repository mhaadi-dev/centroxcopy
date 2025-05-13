import CommonCardwithIcon from "@/Components/common/CommonCardwithIcon";
import SectionHeader from "@/Components/common/SectionHeader";
import classNames, { section_wrapper_class, text_para_2 } from "@/helpers/common";
import { CalendlyWidget } from "./Calendly";
import CommonCard from "./CommonCard";
import CommonResizeableCard from "./CommonResizeableCard";

interface Props {
  data: any;
  caseStudyCards?: boolean;
  tags?: boolean;
  gridCols?: number;
  headingClassName?: string;
  gradientBg?: boolean;
  resizeableCardsLayout?: boolean;
  reverse?: boolean;
  className?: string;
}

const CommonDisplayCardsGrid = ({
  data,
  caseStudyCards = false,
  tags = false,
  gridCols,
  headingClassName = "",
  gradientBg = false,
  resizeableCardsLayout,
  reverse,
  className,
}: Props) => {
  // console.log("CommonDisplayCardsGrid data:", data);
  if (!data || !data[0]?.data) {
    return null;
  }

  return (
    <section
      style={{
        ...(gradientBg && {
          background:
            "linear-gradient(180deg, rgba(7, 157, 252, 0.00) 53.06%, rgba(7, 157, 252, 0.40) 72.78%, #060606 100%), #060606",
        }),
      }}
    >
      <section id="challenges" className={classNames(section_wrapper_class, "mx-auto")}>
        <SectionHeader
          tagText={data?.[0]?.headerData?.tagText}
          headingText={data?.[0]?.headerData?.headingText}
          para1Text={data?.[0]?.headerData?.para1Text}
          para2Text={data?.[0]?.headerData?.para2Text}
          heading2Text={data?.[0]?.headerData?.heading2Text}
        />
        <div
          className={classNames(
            "grid my-8 justify-between grid-cols-1 gap-8 w-full",
            gridCols ? `lg:grid-cols-${gridCols}` : "lg:grid-cols-2",
            className
          )}
        >
          {!caseStudyCards && !resizeableCardsLayout && data?.[0]?.data?.length > 0
            ? data?.[0].data?.map((card: any, index: number) => (
                <CommonCardwithIcon
                  key={index}
                  isGradientBg={true}
                  Icon={card?.icon?.src || card?.icon}
                  heading={card?.heading}
                  description={card?.description}
                  className="!h-auto !rounded-3xl w-full"
                  linkText={card?.linkText}
                  headingClassName={headingClassName}
                  symbol={card.symbol}
                  alt={card?.icon?.alt || card.alt}
                />
              ))
            : null}
          {caseStudyCards && data?.[0]?.data?.length > 0
            ? data?.[0].data.map((card: any, index: number) => (
                <CommonCard
                  key={card.link || index}
                  image={card.image}
                  title={card.title}
                  subdescription={card.subdescription}
                  tags={tags}
                  link={card.link}
                  linkText={card.linkText}
                  linkWithIcon={card.linkWithIcon}
                  label={card.label}
                  duration={card.duration}
                />
              ))
            : null}
          {resizeableCardsLayout && data?.[0]?.data?.length > 0
            ? data?.[0].data?.map((card: any, index: number) => (
                <CommonResizeableCard
                  key={index}
                  isGradientBg={true}
                  Icon={card.icon}
                  heading={card?.heading}
                  description={card?.description}
                  className={classNames(
                    "!h-auto !rounded-2xl w-full !border-[1px] !border-[#111F28]",
                    data?.[0].centerAlign ? "lg:w-2/3 mx-auto" : ""
                  )}
                  linkText={card?.linkText}
                  headingClassName={headingClassName}
                  symbol={card.symbol}
                  colSpan={card.colSpan}
                  reverse={card.reverse}
                  bentoImage={card?.bentoImage?.src ? card?.bentoImage?.src : card?.bentoImage}
                  altText={card?.bentoImage?.alt ? card?.bentoImage?.alt : card?.alt}
                />
              ))
            : null}
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
        )}
      </section>
    </section>
  );
};

export default CommonDisplayCardsGrid;