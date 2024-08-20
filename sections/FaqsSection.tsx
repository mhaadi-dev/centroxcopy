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
        backgroundImage:   "radial-gradient(60.34% 40.45% at 60.94% 104.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)" ,
        backgroundRepeat:  "no-repeat",
        backgroundColor:   "#000000"
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