
import Image from "next/image";
import useSize from "@/helpers/customHooks/useWidthHook";
import { DropDown } from "../common/DropDown";
import DropdownListItem from "./DropdownListItem";
import ShootingStar from "@/assets/shootingstar.webp";



interface Props {
  text: string;
  onClick: any;
  columnData:any;
  isMobileView?: boolean;
}


export const NavLink = ({ text, onClick,columnData,isMobileView=false }: Props) => {
  // console.log("ccccccc",columnData)
  return (
    <div className="relative group">
      <span
        className="text-base font-semibold text-white cursor-pointer group-hover:text-blue-azure transition-colors duration-300" // Added group-hover here
        onClick={() => onClick?.()}
      >
        {text}
      </span>

      <div className="absolute rounded-b-2xl left-1/2 transform -translate-x-[20%] pt-7 bg-[#0A0A0A] w-[40%] md:w-auto text-white px-6 py-4 rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out scale-95">
        <div className="text-[1rem] font-semibold uppercase">{text}</div>
        <div className="flex  flex-wrap lg:flex-nowrap gap-x-[2rem]">
            {columnData.length && columnData.map((dt:any,i:any)=>{
                return   <div className="w-full flex flex-col" key={i} >
                    <DropdownListItem mainHeading={text} listData={dt} />
          </div>
            })} 
        </div>
      </div>

    </div>
  );
};
