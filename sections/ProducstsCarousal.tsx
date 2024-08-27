import { ProductsCarousal } from "@/Components/common/ProductsCarousal"
import classNames, { sectionheadings } from "@/helpers/common"

export const ProductsCarousalSection = ()=>{
    return (
        <div className="w-full overflow-hidden mt-24 lg:mt-40 ">
            

    <section className="relative  lg:ml-[10%]    w-full  mx-auto  overflow-x-hidden pb-20 lg:pb-32 flex flex-col gap-12">
    <h2 className={classNames(sectionheadings,"lg:!w-full lg:!text-left")}>Learn more about Generative AI with Centrox</h2>
            <ProductsCarousal/>
    </section>
        </div>
    ) 
}