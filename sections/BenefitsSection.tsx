import classNames, {
  h2ClassName,
  h4ClassName,
  p2ClassName,
  p3ClassName,
  p4ClassName,
  sectionheadings,
  sectionHeadings,
  sectionSectionDescription,
} from "@/helpers/common";
import Image from "next/image";


interface DataI{
  icon:any,
  title:string,
  description:string,
}
interface PropsI{
  data:DataI[]
}

export const BenefitsSection = ({data}:PropsI) => {
  return (
    <section className="flex flex-col gap-12 w-4/5 mx-auto mt-24 lg:mt-40">
      <div className="flex flex-col gap-4">
        
      <h2 className={classNames(h2ClassName, "!w-full !text-left")}>
        Benefits of our Data Annotations{" "}
      </h2>
      <p className={p2ClassName}>
        Rich in quality annotation helps artificial intelligence to improve its
        performance over time so the models can understand and process
        real-world information effectively.
      </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 ">
        {data.map((x,index)=>{
            return (
                <div className="flex flex-col w-full gap-6 items-start">
                        <Image src={x.icon} alt="icon" className="w-12"/>
                        <div  className="flex flex-col gap-2">

                        <h4 className={classNames(h4ClassName,"lg:!w-full lg:!text-left")}>{x.title}</h4>
                        <p className={p4ClassName}>{x.description}</p>
                    </div>
                </div>
            )
        })}
       
      </div>
    </section>
  );
};
