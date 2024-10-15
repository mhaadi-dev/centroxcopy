import classNames, {
    sectionheadings,
  sectionsubheadings,
} from "@/helpers/common";


import Image from "next/image";

export const LogosSection = ({heading,description,data}:any) => {
  return (
    <section className="w-4/5 mx-auto  mt-24 lg:mt-40 flex flex-col gap-12">
      <h2 className={sectionheadings}>   {heading}</h2>
      <p className={sectionsubheadings}>
        {description}
      </p>
      <div className="grid grid-cols-2 gap-8">
        {data?.map((x:any, index:any) => {
          return (
            <div
              style={{
                border: "3px solid rgba(1, 184, 252, 0.20)",
                background: "rgba(1, 184, 252, 0.10)",
                boxShadow: "0px 0px 13px 0px rgba(1, 184, 252, 0.40) inset",
              }}
              key={index}
              className={classNames(
                " p-6  rounded-xl w-full flex flex-col gap-6",
                (index === data.length - 1 && index%2 == 0) ? "!col-span-2" : ""
              )}
            >
              <div className="flex justify-center  items-center">
                {x?.content?.map((el:any, idx:any) => {
                  return (
                    <div
                      className={classNames(
                        "flex w-full   flex-col gap-2 items-center"
                      )}
                    >
                      <div
                        className={classNames(
                          "flex w-full flex-col gap-2 items-center justify-center  py-4",
                          idx !== x.content.length - 1 ? "border-r-2 " : ""
                        )}
                      >
                        <figure className="h-12 w-12 relative">
                        {el.img && 
                        <Image
                          src={el.img}
                          className={classNames("h-full w-full object-cover ")}
                          fill
                          alt="icon"
                        />
                }
                        </figure>

                        <h5 className="text-white font-semibold text-xs text-center">
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
    </section>
  );
};
