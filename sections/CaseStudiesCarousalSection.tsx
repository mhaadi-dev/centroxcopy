import classNames, { h2ClassName, sectionheadings } from "@/helpers/common";
import MultipleItems from "./SlickCarousal";

interface PropsI{
    heading:string
}
export const CaseStudiesCarousalSection = ({heading}:PropsI) => {
  return (
    <div className="w-full overflow-x-hidden mt-20 lg:mt-44 ">
      <div className="w-full lg:ml-[10%]  mx-auto  relative  overflow-x-hidden pb-20 lg:pb-32 flex flex-col gap-12 ">

            <h2 className={classNames(h2ClassName,"lg:!w-full  lg:!text-left")}>{heading}</h2>
        <MultipleItems />
      </div>
    </div>
  );
};
