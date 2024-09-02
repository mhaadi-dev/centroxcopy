import Accordion from "@/Components/common/Accordian"
import classNames, { basicLayoutclass, sectionheadings } from "@/helpers/common"


export const FaqsSection = ({heading,data}:any)=>{
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
        {data?.map((faq:any, index:number) => (
        <Accordion
          key={index}
          title={faq.question}
          id={`faqs-${index}`}
          active={faq.active}
        >
          {faq.question}
        </Accordion>
      ))}
      </div>
    </section>
    </div>
    )
}