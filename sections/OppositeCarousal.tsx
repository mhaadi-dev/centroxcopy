import { VerticalCarousal } from "@/Components/common/VeritcalCarousal";
import classNames, {
  h2ClassName,
  h3ClassName,
  h4ClassName,
  p3ClassName,
  sectionheadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";
import icon from "@/public/images/genAi/opencvicon.svg";
import Image from "next/image";


interface PropsI{

}
const data = {
  heading:"Industries we have worked with",
    details: [
      {
        img: icon,
        heading: "Health Care",
        description: "We deliver precise annotations",
      },
      {
        img: icon,
        heading: "Health Care",
        description: "We deliver precise annotations",
      },
      {
        img: icon,
        heading: "Health Care",
        description: "We deliver precise annotations",
      },
    ],
  }

export const OppositeCarousal = () => {
  return (
    <section className="mt-24 lg:mt-40 w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-24 ">
      <div className="w-full lg:w-2/5 bg-black overflow-hidden flex gap-4   h-[80vh]  ">
        <div className="w-full ">
          <VerticalCarousal />
        </div>

        <div className="w-full ">
          <VerticalCarousal isReverse={true} />
        </div>
      </div>

      <div className="w-full lg:w-1/2  flex flex-col gap-12">
        <h2
          className={classNames(h2ClassName, "lg:!text-left lg:!w-full ")}
        >
          {" "}
          {data.heading}
        </h2>
        <div className="flex flex-col gap-12">
          {data.details.map((x,index)=>{
            return(
              <div className="flex flex-col gap-4">
                <figure className="relative h-16 w-16  ">
                  <Image src={x.img} className="object-cover" alt="icon-alt" fill/>
                 
                </figure>
                <div className="flex flex-col gap-2">
                <h3 className={classNames(h3ClassName,"lg:!w-full lg:!text-left")}>{x.heading}</h3>
                  <p className={p3ClassName}>{x.description}</p>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
