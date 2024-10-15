import Accordion from "@/Components/common/Accordian"
import { basicLayoutclass, sectionheadings } from "@/helpers/common"

const faqs = [
    {
      title: "How does Centrox AI adapt its annotation process for specialised data and complex projects?",
      text: "At Centrox AI our approach is based on your project’s unique needs. We start by understanding the specific requirements of your data and then design customized annotation protocols.",
      active: false,
    },
    {
      title:
        "What steps does Centrox AI take to ensure high accuracy in annotations?",
      text: "We combine AI tools with expert human review to maintain accuracy. Our process includes automated checks, multiple rounds of validation, and feedback from experts.",
      active: false,
    },
    {
      title: "How does Centrox AI handle very large datasets or sudden changes in data volume?",
      text: " We’re set up to handle big projects and sudden spikes in data volume with ease. By using cloud-based systems and flexible teams, we can scale up or down quickly as needed. This ensures that no matter how large or variable your data, we deliver consistent quality and timely results.",
      active: false,
    },
    {
      title: "What measures does Centrox AI use to protect data security?",
      text: "We use strict access controls, and secure data transfer methods and we regularly review our security protocols to keep your data safe.",
      active: false,
    },
]  
export const NlpSection7 = ()=>{
    return (<section className={basicLayoutclass}>
        <h2 className={sectionheadings}>We're Often Asked</h2>
        <div>
        {faqs.map((faq, index) => (
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
    </section>)
}