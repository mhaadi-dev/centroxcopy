import classNames, { h2ClassName, sectionheadings } from "@/helpers/common";
import MultipleItems from "./SlickCarousal";


export const CaseStudiesCarousalSection = ({heading,description,data}:any) => {
  return (
    <div className="w-full overflow-x-hidden mt-20 lg:mt-44 ">
      <div className="w-[90%] lg:ml-[10%]  mx-auto  relative  overflow-x-hidden pb-20 lg:pb-32 flex flex-col gap-12 ">

            <h2 className={classNames(h2ClassName,"lg:!w-full  lg:!text-left")}>{heading}</h2>
        <MultipleItems data={data} />
      </div>
    </div>
  );
};
