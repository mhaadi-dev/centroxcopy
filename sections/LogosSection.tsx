import { CalendlyWidget } from "@/Components/common/Calendly";
import SectionHeader from "@/Components/common/SectionHeader";
import classNames, {
  section_wrapper_class,
    sectionheadings,
  sectionsubheadings,
  text_para_2,
} from "@/helpers/common";


import Image from "next/image";

export const LogosSection = ({heading,description,data,btnText="",caption=""}:any) => {
  return (
    <section className={classNames(section_wrapper_class)}>
      {/* <h2 className={sectionheadings}>   {heading}</h2>
      <p className={sectionsubheadings}>
        {description}
      </p> */}
      <SectionHeader tagText="Tech Stack" headingText={heading} para1Text={description}/>
      <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-8 mt-8">
        {data?.map((x:any, index:any) => {
          return (
            <div
              style={{
                border: "2px solid rgba(6, 119, 230, 0.8)",
                background: "radial-gradient(270% 67.74% at 20% 100%, rgba(7, 157, 252, 0.18) 0%, rgba(4, 93, 150, 0.06) 100%), #060606",

                // boxShadow: "0px 0px 13px 0px rgba(1, 184, 252, 0.40) inset",
              }}
              key={index}
              className={classNames(
                " p-4 lg:p-6  rounded-[2rem] w-full flex flex-col gap-6",
                (index === data.length - 1 && index%2 == 0) ? "" : ""
              )}
            >
              <div className="flex h-[6.5rem] lg:h-auto w-full lg:w-4/5 mx-auto overflow-hidden   justify-center  items-center">
                {x?.content?.map((el:any, idx:any) => {
                  return (
                    <div
                      className={classNames(
                        "flex w-full   flex-col gap-2 items-center"
                      )}
                    >
                      <div
                        className={classNames(
                          "flex w-full flex-col gap-2 items-center justify-center px-1   py-4",
                          idx !== x.content.length - 1 ? "border-r-2 " : ""
                        )}
                      >
                        <figure className="h-12 w-14 relative ">
                        {el.img && 
                        <Image
                          src={el.img}
                          className={classNames("h-full w-full object-contain ")}
                          
                          alt="icon"
                        />
                }
                        </figure>

                        <h5 className="text-white font-semibold  text-[0.55rem] lg:text-[0.7rem] text-center">
                          {el.caption}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 className={classNames(sectionsubheadings, "!font-semibold")}>
                {x.title}
              </h3>
            </div>
          );
        })}
      </div>
{  caption &&    <p className={classNames(text_para_2,"text-center w-full my-6 mx-auto")}>{caption}</p>
}
{btnText &&  <div className="flex justify-center py-5 my-4"><CalendlyWidget btnText={btnText} isArrow/></div> }
    </section>
  );
};
