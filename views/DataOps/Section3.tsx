import { sectionheadings, sectionSectionDescription, sectionsSectionHeadings } from "@/helpers/common"

export const DataOpsSection3 = ()=>{
    return (<section className="mt-20 lg:mt-44 flex flex-col gap-8">
        <h2 className={sectionheadings}>Industries we have worked with </h2>
        <div className="w-4/5 mx-auto grid grid-cols-3 gap-12 border-2">
            <div className="flex flex-col gap-4">
            <div className={sectionsSectionHeadings}>Healthcare</div>
            <div className={sectionSectionDescription}>We deliver precise annotations of X-rays and MRIs, enhancing diagnostics and treatment planning.</div>
            </div>

            <div className="flex flex-col gap-4">
            <div className={sectionsSectionHeadings}>Healthcare</div>
            <div className={sectionSectionDescription}>We deliver precise annotations of X-rays and MRIs, enhancing diagnostics and treatment planning.</div>
            </div>

            <div className="flex flex-col gap-4">
            <div className={sectionsSectionHeadings}>Healthcare</div>
            <div className={sectionSectionDescription}>We deliver precise annotations of X-rays and MRIs, enhancing diagnostics and treatment planning.</div>
            </div>
        </div>
    </section>)
 
}