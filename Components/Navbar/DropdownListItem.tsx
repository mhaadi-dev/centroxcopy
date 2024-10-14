//@ts-nocheck
import Image from "next/image";

interface Props {
  listData: [];
  mainHeading: string;
}

const DropdownListItem = ({ listData, mainHeading }: Props) => {
  console.log(listData);
  return (
    <>
      {listData.length > 0 &&
        listData.map((item, i) => {
          console.log("oooooooooo",item)
          return (
           item.isCardNavItem ?  <div key={i} className=" h-48 min-w-[13rem] max-w-[12rem] p-1 bg-none relative"     
        >
          <Image src={item?.bg_img} alt="bg" className="absolute bottom-0 right-0"></Image>
            {item?.image && i === 0 && (
                <Image
                  src={item.image}
                  alt="ai"
                  className="h-[24px] w-[24px] -ml-4"
                />
              )}
              <div>
                <h3 className="w-full flex gap-x-2">
                  <span className="font-semibold text-base hover:text-blue-azure transition-all duration-200 cursor-pointer">{item.heading}</span>
                </h3>
                {item.description && (
                  <p className="w-full text-[#9CA3AF]">{item.description}</p>
                )}
              </div>
           </div>:   <div
              key={i}
              className="cursor-pointer  hover:text-blue-azure flex items-start justify-start gap-x-2 min-w-[15rem] max-w-full p-1 rounded-md text-white"
            
            >
              {item?.image && i === 0 && (
                <Image
                  src={item.image}
                  alt="ai"
                  className="h-[24px] w-[24px] -ml-4"
                />
              )}
              <div>
                <h3 className="w-full flex gap-x-2">
                  <span className="font-semibold text-base">{item.heading}</span>
                </h3>
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
