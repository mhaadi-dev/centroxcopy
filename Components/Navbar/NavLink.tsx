
// import Image from "next/image";
// import useSize from "@/helpers/customHooks/useWidthHook";
// import { DropDown } from "../common/DropDown";
// import DropdownListItem from "./DropdownListItem";
// import ShootingStar from "@/assets/shootingstar.webp";

// interface Props {
//   text: string;
//   onClick: any;
//   columnData:any;
//   isMobileView?: boolean;
// }


// export const NavLink = ({ text, onClick,columnData,isMobileView=false }: Props) => {
//   // console.log("ccccccc",columnData)
//   return (
//     <div className="relative group">
//       <span
//         className="text-base font-semibold text-white cursor-pointer group-hover:text-blue-azure transition-colors duration-300" // Added group-hover here
//         onClick={() => onClick?.()}
//       >
//         {text}
//       </span>

//       {/* <div className="absolute rounded-b-2xl left-1/2 transform -translate-x-[25%] pt-7 bg-[#0A0A0A] w-[40%] md:w-auto text-white px-6 py-4 rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out scale-95">
//         <div className="text-[1rem] font-semibold uppercase">{text}</div>
//         <div className="flex  flex-wrap lg:flex-nowrap gap-x-[2rem]">
//             {columnData.length && columnData.map((dt:any,i:any)=>{
//                 return   <div className="w-full flex flex-col" key={i} >
//                     <DropdownListItem mainHeading={text} listData={dt} />
//           </div>
//             })} 
//         </div>
//       </div> */}

//     </div>
//   );
// };





"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "@/helpers/common";
import DropdownListItem from "./DropdownListItem";
import Image from "next/image";
import Link from "next/link";

interface Props {
  text: string;
  onClick: any;
  columnData: any;
  isMobileView?: boolean;
  socialIcons?:any
}

export const NavLink = ({ text, onClick, columnData, isMobileView = false,socialIcons }: Props) => {
  const [isOpen, setIsOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative group " ref={dropdownRef}>
    
      <span
        className="text-base font-semibold text-white cursor-pointer group-hover:text-blue-azure transition-colors duration-300"
        onClick={()=>{toggleDropdown(); 
          // onClick?.()
        }} 
      >
        {text}
      </span>

     
      <div
        className={classNames(
          "absolute rounded-b-2xl top-[2.9rem] origin-center transform -translate-x-[23%] 2xl:-translate-x-[27%] pt-7 bg-[#0A0A0A] w-[40%] md:w-auto text-white px-6 py-4 rounded-md shadow-lg transition-all duration-300 ease-out scale-95 opacity-0 pointer-events-none",
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none",
          columnData?.length < 3 ? "left-1/2 !-translate-x-1/2" : ""
        )}
      >
       
        <div className="text-[1rem] font-semibold uppercase">{text}</div>

        <div className="flex flex-wrap lg:flex-nowrap gap-x-[1rem]">
          {columnData?.length > 0 &&
            columnData.map((dt: any, i: number) => (
              <div className="w-full  flex flex-col" key={i}>
                <DropdownListItem mainHeading={text} listData={dt} />
              </div>
            ))}
        </div>
        <div className="flex gap-6 my-3">
           {socialIcons?.length && socialIcons?.map((icon:any,index:number)=>{
          return <Link href={icon.link} key={index}>
            <Image src={icon?.icon} alt="social icon"></Image>
          </Link>
        })}
        </div>
       
      </div>
    </div>
  );
};
