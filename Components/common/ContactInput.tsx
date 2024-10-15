"use client"
import { Input } from "@/views/Contactus"
import { Button } from "../Button.js/button"
import Arrow from "@/assets/RightArrow.svg"
import { useEffect, useState } from "react"
import useSize from "@/helpers/windowWidth"
import { CalendlyWidget } from "./Calendly"


const ContactInput = () => {
    const [userInput,setUserInput]=useState("")
    const {width}=useSize()
    const [isClient,setIsClient]=useState(false)
    useEffect(()=>{
        setIsClient(true)
    })
  return <> 
 {isClient && <div className="flex flex-col gap-y-4"> 
     <section aria-label="Centrox Contact" className=" flex bg-transparent  rounded-full  border-2 border-[#6B7280] mx-auto w-full sm:w-[70%] xl:w-[50%] p-2 sm:p-3 mt-6">
      <input name="email" id="email" onChange={(e)=>{setUserInput(e.target.value)}} value={userInput} placeholder="Your Email" className="text-white bg-transparent w-full text-xl  rounded-full  px-4 outline-none placeholder:text-xl py-2 " />
      {width!=null && width >768 && <div className=" w-[90%] flex justify-end"><CalendlyWidget btnText="Get Started" btnClassName="w-full sm:!w-[100%] !px-[0.5rem] !py-[0.5rem]  sm:!px-[2rem] sm:!py-[1rem]" isArrow={true}/></div>  }
    </section>
    {width!=null && width <768 && 
    <div className="flex justify-center w-full">    <CalendlyWidget btnText="Get Started" btnClassName="w-full sm:!w-[100%] !px-[0.5rem] !py-[0.5rem]  sm:!px-[2rem] sm:!py-[1rem]" isArrow={true}/>
    </div>
    }
    </div>}
    </>
   
  
  
}

export default ContactInput
