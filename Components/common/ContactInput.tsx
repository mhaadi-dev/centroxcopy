"use client"
import { Input } from "@/views/Contactus"
import { Button } from "../Button.js/button"
import Arrow from "@/assets/RightArrow.svg"
import { useState } from "react"


const ContactInput = () => {
    const [userInput,setUserInput]=useState("")
  return (
    <section aria-label="Centrox Contact" className=" flex bg-transparent  rounded-full  border-2 border-[#6B7280] mx-auto w-full sm:w-[70%] xl:w-[50%] p-2 sm:p-3 mt-6">
      <input name="email" id="email" onChange={(e)=>{setUserInput(e.target.value)}} value={userInput} placeholder="Your Email" className="text-white bg-transparent w-full text-xl  rounded-full  px-4 outline-none placeholder:text-xl " />
      <Button content="Get Started" Icon={Arrow} iconClassName="!-mt-1" isLefticon={false} className=" w-full sm:w-[80%] !px-[0.5rem] !py-[0.5rem]  sm:!px-[2rem] sm:!py-[1rem]"/>
    </section>
  )
}

export default ContactInput
