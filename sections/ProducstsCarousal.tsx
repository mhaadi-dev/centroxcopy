import { ProductsCarousal } from "@/Components/common/ProductsCarousal"
import classNames, { h3ClassName, sectionheadings } from "@/helpers/common"

export const ProductsCarousalSection = ({data,title}:any)=>{
    console.log("data in products sesion is",data);
    return (
        <div className="w-full overflow-hidden mt-24 lg:mt-40 ">
            

    <section className="relative  lg:ml-[10%]    w-[90%]  mx-auto  overflow-x-hidden pb-20 lg:pb-32 flex flex-col gap-4 lg:gap-12 ">
    <h2 className={classNames(h3ClassName,"lg:!w-full lg:!text-left")}>Learn more about Generative AI with Centrox</h2>
            <ProductsCarousal data={data}/>
    </section>
        </div>
    ) 
}