import { Button } from "../Button.js/button"
import Arrow from "@/assets/RightArrow.svg"
import bannerBg from "@/assets/bannerBG.webp"
import Image from "next/image"
const IndustryBanner = () => {
  return (
    <div className="text-white w-[90%] mx-auto px-8 py-10 rounded-2xl relative mt-4" style={{
        backgroundImage: `url(${bannerBg.src})`,
        backgroundRepeat:"no-repeat"
    }}>
    
       

        <div className="bg-[#0a0b0cad] w-full md:w-[50%] flex flex-col gap-3 p-6 rounded-xl">
            <h3 className="text-[1.5rem] font-semibold">Your Industry</h3>
            <p className="text-md">We're keen to learn how we can harness the power of LLMs to drive innovation and growth in your specific field.</p>
         
            <div className="inline-block">   <Button content="Checkout Our Work"  Icon={Arrow} className="mt-2 !px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem] sm:mt-10 mx-0" iconClassName="!-mt-1" isLefticon={false}/></div>
        </div> 
    </div>
  )
}

export default IndustryBanner
