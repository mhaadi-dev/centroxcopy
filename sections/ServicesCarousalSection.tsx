import { ProductsCarousal } from "@/Components/common/ProductsCarousal";
import { ServiceCarousal } from "@/Components/common/ServicesCarousal";
import classNames, { h2ClassName, sectionheadings } from "@/helpers/common";

export const ServiceCarousalSection = () => {
  return (
    <div className="w-full overflow-hidden mt-24 lg:mt-40 flex flex-col gap-12">
      <h2
        className={classNames(h2ClassName, "lg:ml-[10%] lg:!w-full lg:!text-left")}
      >
        Need Other Services
      </h2>
      <section className="relative  lg:ml-[10%]    w-full  mx-auto  overflow-x-hidden pb-32 flex flex-col gap-12">
        {" "}
        <ServiceCarousal />
      </section>
    </div>
  );
};
