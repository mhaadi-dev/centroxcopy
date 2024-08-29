import { Button } from "@/Components/Button.js/button"
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp"
import Image from "next/image"
import Arrow from "@/assets/RightArrow.svg";
import classNames, { h2ClassName, sectionDiscriptions, sectionsubheadings } from "@/helpers/common";

export const BannerSection =({heading,btnText,bgImage}:any)=>{
    return (<section className="mt-24   lg:mt-40 flex w-4/5 mx-auto flex-col">
        <div className=" flex flex-col gap-12 relative rounded-2xl overflow-hidden py-20 bg-black border border-gray-700">
            {bgImage && 
            <Image src={bgImage} className="absolute object-fill w-full h-full top-0 "  alt="bg-img" fill />
        }
            <h3 className={classNames(h2ClassName,"z-10 font-bold")}> {heading}</h3>
            <div className="flex justify-center z-10" >
            <Button Icon={Arrow} isLefticon={false} iconClassName="-mt-1"  content={btnText || "Talk to our Expert"} className="!rounded-full"/>
            </div>
        </div>
    </section>)
}