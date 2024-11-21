//@ts-nocheck
import Image from "next/image";
import navigationIcon from "@/assets/navigationicon.svg"
import Link from "next/link";
import classNames, { text_h3_class } from "@/helpers/common";

interface Props {
  listData: [];
  mainHeading: string;
}

const DropdownListItem = ({ listData, mainHeading }: Props) => {
  // console.log(listData);
  return (
    <>
      {listData.length > 0 &&
        listData.map((item, i) => {
          // console.log("oooooooooo",item)
          return (
           item.isCardNavItem ?  <div key={i} className=" h-56 min-w-[13rem] p-1 bg-none relative"     
        >
          <Image src={item?.bg_img} alt="bg" className="absolute bottom-0 right-0"></Image>
            {item?.image  && (
                <Image
                  src={item.image}
                  alt="ai"
                  className="h-[24px] w-[24px] -ml-4"
                />
              )}
              <div>
                <Link href={item.link || "/"}>
                  <h3 className="w-full flex gap-x-2">
                  <span className="font-semibold text-md hover:text-blue-azure transition-all duration-200 cursor-pointer">{item.heading}</span>
                </h3>
                </Link>
                
                {item.description && (
                  <p className="w-full text-[#9CA3AF]">{item.description}</p>
                )}
              </div>
           </div>:   <div
              key={i}
              className="cursor-pointer group   hover:text-blue-azure flex items-start  justify-start gap-x-3 min-w-[15rem] max-w-full p-1 rounded-md text-white"
            
            >
              {item?.image  && (
                <div className="h-[20px] text-white  group-hover:text-blue-azure mt-3 w-[20px]">
                   <Image
                  src={item.image}
                  alt="ai"
                  className="w-full h-full "
                />
                </div>
               
              )}
              <div className="my-2 ">
                <Link href={item.link||"/"} >
                <h3 className={classNames("w-full group flex gap-x-2 text-[1rem]",)}>
                  {item.heading}
                </h3>
                </Link>
                
                {item.description && (
                  <p className="w-full text-[#9CA3AF]">{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DropdownListItem;
