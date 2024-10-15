import Accordion from "@/Components/common/Accordian"
import SectionTag from "@/Components/common/SectionTag"
import classNames, { basicLayoutclass, section_wrapper_class, sectionheadings, text_h2_class, text_para_2 } from "@/helpers/common"


export const FaqsSection = ({heading,subHeading,data,addTag=false}:any)=>{
    return (
      <div className="relative overflow-hidden pb-12 "
        style={{
          background: "linear-gradient(180deg, rgba(7, 157, 252, 0.00) 53.06%, rgba(7, 157, 252, 0.40) 72.78%, #060606 100%), #060606"
        }}
      >
    <section className={classNames(section_wrapper_class,"flex flex-col gap-y-4")}
    >
      {addTag && <SectionTag text="FAQs" />}
        <h2 className={classNames(text_h2_class,"text-center")}>{heading}</h2>
       {subHeading &&  <p className={classNames(text_para_2,"text-center mx-auto")}>{subHeading}</p>}
        <div>
        {data?.map((faq:any, index:number) => (
        <Accordion
          key={index}
          title={faq.question}
          id={`faqs-${index}`}
          active={faq.active}
        >
          {faq.answer}
        </Accordion>
      ))}
      </div>
    </section>
    </div>
    )
}