import Accordion from "@/Components/common/Accordian"
import classNames, { basicLayoutclass, sectionheadings } from "@/helpers/common"

interface FaqsI{
    title:string,
    text:string,
    active:boolean
}
interface PropsI{
    heading?:string,
    faqsData:FaqsI[],
}
export const FaqsSection = ({heading,faqsData}:PropsI)=>{
    return (
      <div className="relative overflow-hidden pb-12 "
        style={{
          background: "linear-gradient(180deg, rgba(7, 157, 252, 0.00) 53.06%, rgba(7, 157, 252, 0.40) 72.78%, #060606 100%), #060606"
        }}
      >
    <section className={basicLayoutclass} 
   
    >
        <h2 className={sectionheadings}>{heading}</h2>
        <div>
        {faqsData.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          id={`faqs-${index}`}
          active={faq.active}
        >
          {faq.text}
        </Accordion>
      ))}
      </div>
    </section>
    </div>
    )
}