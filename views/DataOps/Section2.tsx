import classNames, { sectionheadings, sectionsubheadings } from "@/helpers/common"

export const DataOpsSection2 = ()=>{
    return <section className="mt-20 lg-mt-44 flex flex-col gap-8 pt-20"
    style={{
        backgroundImage: "radial-gradient(60.34% 71.45% at 60.94% 3.76%, rgba(7, 157, 252, 0.30) 0%, rgba(7, 157, 252, 0.00) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#000000"
      }}>
        <h2 className={classNames(sectionheadings , "lg:!w-1/2")}>
        Cost-Efficient Data Annotation 
Without Compromising Quality
        </h2>
        <p className={classNames(sectionsubheadings,"lg:!w-1/2")}>
        We understand founders' challenges and bring years of AI experience to solve complex problems. Our cost-effective solutions combine technical knowledge with innovative methods to deliver results.
        </p>
        <div className="h-96 w-4/5 mx-auto border-2"></div>
    </section>
}