import classNames, { h2ClassName, p3ClassName, p4ClassName, sectionheadings } from "@/helpers/common";
import icon from "@/public/images/template/customerTestimonial.svg"
import Image from "next/image";
const TestimonialData = [
  {
    testimonialData:
      "When the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is small",
    testimonialName: "Dr. Ahmed Butt",
    testimonialDesgination: "Director",
    testimonialCompany: "Centrox Ai",
  },
  {
    testimonialData:
      "When the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is small",
    testimonialName: "Dr. Ahmed Butt",
    testimonialDesgination: "Director",
    testimonialCompany: "Centrox Ai",
  },
  {
    testimonialData:
      "When the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is smallWhen the Title is small",
    testimonialName: "Dr. Ahmed Butt",
    testimonialDesgination: "Director",
    testimonialCompany: "Centrox Ai",
  },
];

export const CustomerTestimonials = ({data}:any) => {
  console.log("data in customer Carousal is",data)
  return (
    <section className="w-4/5 mx-auto  mt:24 pt-12 lg:mt-40  ">
      <div className="flex flex-col gap-12">
      <h1 className={h2ClassName}>What Our Customers think</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-12 ">
        {data?.map((x:any, index:number) => {
          return <div className=" pl-[12%] pt-20 border-2 rounded-2xl flex flex-col gap-4 w-full bg-gray-gray3 p-8 relative">
        <Image alt="icon" src={icon} className="absolute top-10 left-10" loading="lazy"/>

            <h3 className="text-white">{x.name}</h3>
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <h6 className={classNames(p4ClassName,"lg:!w-full lg:!text-left font-semibold")}>{x.testimonialName}</h6>
                    <p className="text-white">{x.designation}</p>
                    <p className="text-white">{x.companyName}</p>
                </div>
          </div>
          </div>
        })}
      </div>
      </div>
    
    </section>
  );
};
