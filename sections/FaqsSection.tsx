import Accordion from "@/Components/common/Accordian"
import SectionTag from "@/Components/common/SectionTag"
import classNames, { basicLayoutclass, sectionheadings } from "@/helpers/common"


export const FaqsSection = ({heading,subHeading,data,addTag=false}:any)=>{
    return (
      <div className="relative overflow-hidden pb-12 "
        style={{
          background: "linear-gradient(180deg, rgba(7, 157, 252, 0.00) 53.06%, rgba(7, 157, 252, 0.40) 72.78%, #060606 100%), #060606"
        }}
      >
    <section className="w-[90%] sm:w-auto mx-[1.5rem] 2xl:mx-[15rem] mt-12 " 
   
    >
      {addTag && <SectionTag text="FAQs" />}
        <h2 className={sectionheadings}>{heading}</h2>
       {subHeading &&  <p className="text-gray-100 text-[1.5rem] mx-auto text-center">{subHeading}</p>}
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