import classNames, { text_h2_class, text_para_3 } from "@/helpers/common";
import React from "react";
import SocialIconsContainer from "./SocialIconsContainer";
import Image from "next/image";
import dummyDisplay from "@/assets/dummyDisplay.webp"
import mhbn from "@/assets/mhbnimg.webp"
import { PortableText } from "next-sanity";
import { PortableComponent } from "./PortableText";
const MainBlogContent = ({data}:any) => {
  return (
    <div className=" text-white px-2 w-full ">
     
   
          {data?    <PortableText value={data} 
          //@ts-ignore
          components={PortableComponent}  /> :null}
    
      <div>
        <SocialIconsContainer className="border-none !bg-gray-800/0"/>
        <div className=" flex gap-4 items-center">
            <div className="w-2/4 lg:w-1/4  rounded-full">
            <Image className="w-full rounded-full aspect-square object-cover flex items-center justify-center" src={mhbn} alt="user"></Image>
            </div>
          
            <div className="w-full">
                <h3 className={classNames("font-semibold uppercase")}>Ahmad Murad</h3>
                <p className={classNames(text_para_3)}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus corrupti blanditiis sapiente? Dicta, magnam Cupiditate quibusdam amet iusto. Dolores, consequatur!</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogContent;
