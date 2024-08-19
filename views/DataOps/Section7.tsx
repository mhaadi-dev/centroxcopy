import classNames, { sectionheadings } from "@/helpers/common"
import Testimonial from "../Testimonial"

export const DataOpsTestimonialSection = ()=>{

    return( 
    <>
    <h2 className={classNames(sectionheadings , " mt-24 lg:mt-44 -mb-36")}>Centrox work with Data Annotations</h2>
    <Testimonial/>
    </>
    )
}