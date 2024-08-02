import { Button } from "@/Components/Button.js/button"
import { sectionheadings, sectionsubheadings } from "@/helpers/common"

export const DataOpsHeroSection  = ()=>{
    return <>
    <section className="flex items-center w-full mx-auto  mt-20 lg:mt-44 justify-center">
        <div className="flex flex-col gap-12">
            <h1 className={sectionheadings}>
                Advanced Image Annotation Solutions
            </h1>
            <p className={sectionsubheadings}>
                sadsa;ldkpowqk;
            </p>
            <Button content="Book a Call" className="!rounded-full "/>
        </div>
    
    </section>
    </>
}