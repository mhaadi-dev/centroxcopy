"use client"


import { Fragment, useState } from "react";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { CALENDLY_URL } from "@/config/secret";
import classNames from "@/helpers/common";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface PropsI{
  btnText?:string,
  btnClassName? :string,
  isArrow?:boolean,
  containerclass?:string
  customClassName?:string
}

export const CalendlyWidget = ({btnText,btnClassName,isArrow = false,containerclass,customClassName}:PropsI) => {
 
    const [isOpen, setIsOpen] = useState(false);
  
    const openCalendlyPopup = () => {
      setIsOpen(true);
    };
  console.log(btnText,"from calandly")
    const closeCalendlyPopup = () => {
      setIsOpen(false);
  };
    return (
      <div className={classNames(containerclass)}>
        <Button
          onClick={openCalendlyPopup}
          content={btnText}
          iconClassName="-mt-1"
          isLefticon={false}
          customClassName={customClassName}  
          className={classNames("text-white",btnClassName)}
            Icon={isArrow ? Arrow : ""}
        />
       <Transition.Root show={isOpen} as={Fragment}>
   
   <Dialog as="div" className="relative z-[1000] bg-black" onClose={closeCalendlyPopup}>
     <Transition.Child
       as={Fragment}
       enter="ease-out duration-300"
       enterFrom="opacity-0"
       enterTo="opacity-100"
       leave="ease-in duration-200"
       leaveFrom="opacity-100"
       leaveTo="opacity-0"
     >
       <div className="fixed inset-0 bg-gray-800  transition-opacity" />
     </Transition.Child>

     <div className="fixed inset-0 z-10 overflow-y-auto ">
       <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 ">
         <Transition.Child
           as={Fragment}
           enter="ease-out duration-300"
           enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
           enterTo="opacity-100 translate-y-0 sm:scale-100"
           leave="ease-in duration-200"
           leaveFrom="opacity-100 translate-y-0 sm:scale-100"
           leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
         >
           <Dialog.Panel
             className={classNames(
               "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 py-8 border-2 h-[50rem]  ",
             )}
           >
             <div className="absolute top-0 right-0 pt-4 pr-4 sm:block  ">
               <button
                 type="button"
                 className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none "
                 onClick={closeCalendlyPopup}
               >
                 <span className="sr-only">Close</span>
                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
               </button>
             </div>
             <iframe
                src={CALENDLY_URL}
                style={{ width: "100%", height: "100%", border: "none" }}
                scrolling="auto"
                title="Calendly Scheduling"
              ></iframe>

           </Dialog.Panel>
         </Transition.Child>
       </div>
     </div>
   </Dialog>
 </Transition.Root>

      </div>
    );
  };