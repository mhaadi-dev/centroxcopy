import ContactInput from "@/Components/common/ContactInput"
import SectionTag from "@/Components/common/SectionTag"

const LandingContactSection = () => {
  return (
    <section className="w-[90%] sm:w-auto mx-[1.5rem] lg:mx-[15rem] my-12">
      <SectionTag text="Contact"/>
      <header aria-label="Centrox Contact" className="text-white ">
        <h2 className="font-semibold text-center text-[1.5rem] lg:text-5xl my-4">
          Let's Discuss Your Vision
        </h2>
        <p className="text-center mx-auto w-full text-[1rem] sm:w-[70%]  sm:text-[1.5rem]">
        Book an exclusive 1:1 call today with our AI expert to discuss and discover what we can do to accelerate your Gen AI development and deployment.
        </p>
      </header>
      <ContactInput/>
    </section>
  )
}

export default LandingContactSection
