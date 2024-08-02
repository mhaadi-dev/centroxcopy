import classNames, { sectionheadings, sectionsubheadings } from "@/helpers/common"

export const DataOpsSection2 = ()=>{
    return <section className="mt-20 lg-mt-44 flex flex-col gap-8">
        <h2 className={classNames(sectionheadings , "")}>
        Cost-Efficient Data Annotation 
Without Compromising Quality
        </h2>
        <p className={sectionsubheadings}>
        We understand founders' challenges and bring years of AI experience to solve complex problems. Our cost-effective solutions combine technical knowledge with innovative methods to deliver results.
        </p>
        <div className="h-96 w-4/5 mx-auto border-2"></div>
    </section>
}