// @ts-nocheck
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
import { PortableText } from "@portabletext/react";
import {PortableComponent} from "@/Components/common/PortableText"



interface DataI{
  icon:any,
  title:string,
  description:string,
}
interface PropsI{
  data:any
  mainHeading:string,
  mainDescription:string,
}

export const BenefitsSection = ({data,mainHeading,mainDescription}:PropsI) => {
  console.log("data in benefits section is",data)
  return (
    <section className="flex flex-col gap-12 w-4/5 mx-auto mt-24 lg:mt-40 ">
      <div className="flex flex-col gap-4">
        
        
      <h2 className={classNames(h2ClassName, "lg:!w-full lg:!text-left")}>
        {mainHeading}
        
      </h2>
      <p className={p2ClassName}>
      {mainDescription}
      </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 ">
        {data.map((x:any,index:number)=>{
          console.log("x here is",x)
            return (
                <div className="flex flex-col w-full gap-4 items-start">
                  <div className="flex justify-center lg:justify-start  w-full">
                <figure className="h-20 w-20 relative">
      {x.icon && ( 
        <Image
          src={x.icon}
          alt={x.alt}
          loading="lazy"
          fill
          className="object-fill w-full h-full"
        />
      )}
    </figure>
    </div>
                        <div  className="flex flex-col gap-2">

                        <h4 className={classNames(h4ClassName,"lg:!w-full lg:!text-left")}>{x.heading}</h4>
                        <div>
                        {x.description ? <PortableText value={x.description} components={PortableComponent} /> : null}

                          </div>
                    </div>
                </div>
            )
        })}
       
       {/* {data ? <PortableText value={data.descriptoin} /> : null} */}

      </div>
    </section>
  );
};
