"use client";
import { Input } from "@/views/Contactus";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { useEffect, useRef, useState } from "react";
import useSize from "@/helpers/windowWidth";
import { useRouter } from "next/navigation";
import classNames from "@/helpers/common";

const ContactInput = ({name="",btnText="",placeholder="",btnClassName="",containerClassName="",icon1,icon2}:any) => {
  const [userInput, setUserInput] = useState("");
  const { width } = useSize();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToContactPage = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userInput !== "") {
      if (emailRegex.test(userInput)) {
        localStorage.setItem("usermail", userInput);
        router.push("/contact");
        setIsEmailInvalid(false); 
      } else {
        setIsEmailInvalid(true); 
        inputRef.current?.focus();
      }
    } else {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };
  

  return (
    <>
      {isClient && (
        <div className="flex flex-col gap-y-4">
          <section
            aria-label="Centrox Contact"
            className={classNames("flex bg-transparent rounded-full border-2 border-[#6B7280] mx-auto w-full sm:w-[70%] xl:w-[50%] p-2 sm:p-3 mt-6",containerClassName)}
          >
            <input
              ref={inputRef}
              name={name||"email"}
              id={name||"email"}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
              value={userInput}
              placeholder={placeholder||"Your Email"}
              className="text-white bg-transparent w-full text-xl rounded-full px-4 outline-none placeholder:text-xl py-2"
            />
            {width != null && width > 768 && (
              <Button
                onClick={goToContactPage}
                content={btnText || "Get Started"}
                Icon={Arrow}
                iconClassName="!-mt-1"
                isLefticon={false}
                className={classNames("w-full sm:w-[60%] !px-[0.5rem] !py-[0.5rem] sm:!px-[1.4rem] 2xl:!px-[2rem] sm:!py-[0.5rem] 2xl:!py-[1.15rem]",btnClassName)}
              />
            )}
          </section>
          {width != null && width < 768 && (
            <div className="flex justify-center w-full">
              <Button
                onClick={goToContactPage}
                content={btnText||"Get Started"}
                Icon={Arrow}
                iconClassName="!-mt-1"
                isLefticon={false}
                className="w-1.5/3 sm:w-1/3 !px-[0.5rem] !py-[0.5rem] sm:!px-[2rem] sm:!py-[1rem]"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ContactInput;
