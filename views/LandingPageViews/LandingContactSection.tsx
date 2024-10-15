import ContactInput from "@/Components/common/ContactInput"
import SectionTag from "@/Components/common/SectionTag"
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common"

const LandingContactSection = () => {
  return (
    <section className={classNames(section_wrapper_class)}>
    
      <header aria-label="Centrox Contact" className="flex flex-col gap-y-4 ">
      <SectionTag text="Contact"/>
        <h2 className={classNames(text_h2_class,"text-center")}>
          Let's Discuss Your Vision
        </h2>
        <p className={classNames(text_para_2,"text-center w-full sm:w-[60%] mx-auto")}>
        Book an exclusive 1:1 call today with our AI expert to discuss and discover what we can do to accelerate your Gen AI development and deployment.
        </p>
      </header>
      <ContactInput/>
    </section>
  )
}

export default LandingContactSection
