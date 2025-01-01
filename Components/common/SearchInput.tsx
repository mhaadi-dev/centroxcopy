"use client";
import { Input } from "@/views/Contactus";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import searchicon from "@/assets/searchicon.svg"
import { useEffect, useRef, useState } from "react";
import useSize from "@/helpers/windowWidth";
import { useRouter } from "next/navigation";
import classNames from "@/helpers/common";

const SearchInput = ({name="",btnText="",placeholder="",btnClassName="",containerClassName="",icon1,icon2,setUserQueryInput,onClick,value}:any) => {
  const [userInputVal, setUserInputVal] = useState("");
  const { width } = useSize();
  const [isClient, setIsClient] = useState(false);

  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

useEffect(()=>{
        setUserQueryInput(userInputVal)
    
    
},[userInputVal])
  

  return (
    <>
      {isClient && (
        <div className="flex flex-col gap-y-4">
          <section
            aria-label="Centrox Contact"
            className={classNames("flex bg-transparent rounded-full border-2 border-[#6B7280] mx-auto w-full sm:w-[70%] xl:w-[50%] p-2 sm:p-3 mt-0",containerClassName)}
          >
            <input
              ref={inputRef}
              name={name||"email"}
              id={name||"email"}
              autoComplete="off"
              onChange={(e) => {
                setUserInputVal(e.target.value);
              }}
              value={userInputVal}
              placeholder={placeholder||"Your Email"}
              className="text-white bg-transparent w-full text-xl rounded-full px-2 lg:px-4 focus:bg-transparent outline-none placeholder:text-[0.8rem] placeholder:lg:text-[1.1rem] py-2"
            />
            
              <Button
                onClick={onClick}
                content={width != null && width > 768 && btnText || ""}
                Icon={searchicon}
                iconClassName="!mt-1"
                isLefticon={true}
                className={classNames("w-auto  !rounded-full   lg:w-[30%]  sm:!px-[1.4rem] 2xl:!px-[2rem] sm:!py-[0.5rem] 2xl:!py-[1.15rem]",btnClassName)}
              />
          
          </section>
        
        </div>
      )}
    </>
  );
};

export default SearchInput;
