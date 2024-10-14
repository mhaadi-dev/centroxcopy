import { ProductsCarousal } from '@/Components/common/ProductsCarousal'
import SectionTag from '@/Components/common/SectionTag'
import dummyDisplay from "@/assets/dummyDisplay.webp";
import {CaseStudyCarousal} from "@/Components/common/CaseStudyCarousal"
const data = [
    {
      title:
        " 1 This will be the Title of the Case Study ",
        description:"We're keen to learn how we can harness the power of LLMs to drive innovation and growth in your specific."
    },
    {
        title:
          "2 This will be the Title of the Case Study ",
          description:"We're keen to learn how we can harness the power of LLMs to drive innovation and growth in your specific."
      },
      {
        title:
          "3 This will be the Title of the Case Study ",
          description:"We're keen to learn how we can harness the power of LLMs to drive innovation and growth in your specific."
      },
      {
        title:
          "4 This will be the Title of the Case Study ",
          description:"We're keen to learn how we can harness the power of LLMs to drive innovation and growth in your specific."
      },
  ];
const LandingCaseStudySection = () => {
  return (
    <section className='text-white w-[90%] sm:w-auto mx-[1.5rem] 2xl:mx-[15rem] mt-12'>
      <SectionTag text="Case Studies"/>
    <header aria-label="Centrox case studies" className="text-white ">
        <h2 className="font-semibold text-center text-[1.5rem] lg:text-5xl my-4">
        Real-World Results
        </h2>
        <p className="text-center w-full text-[1rem] sm:w-[70%] mx-auto sm:text-[1.5rem]">
        Explore how we've partnered with startups to think, build and ship Gen AI solutions faster
        </p>
      </header>
      <CaseStudyCarousal data={data}/>
    </section>
  )
}

export default LandingCaseStudySection
