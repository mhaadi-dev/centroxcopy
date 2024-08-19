import { CalendlyWidget } from "@/Components/common/Calendly";
import { GradientBox } from "@/Components/common/GradientCard";
import classNames, { sectionHeadings } from "@/helpers/common";

export const DataValidationSection3 = () => {
  return (
    <section className="mt-24 lg:mt-40 flex flex-col gap-8 w-4/5 mx-auto ">
      <h1 className={classNames(sectionHeadings,"!text-center")}>Our data validation services deliver</h1>
      <div className="flex w-3/4 mx-auto gap-12">
        <GradientBox
          className="!lg:w-full"
          heading="40%"
          text="Improvement in Data Accuracy"
        />

        <GradientBox
          className="!lg:w-full"
          heading="35%"
          text="Reduction in Data Errors"
        />
      </div>
      <div className="flex w-full justify-center">

      <CalendlyWidget btnText="Book A Demo"  isArrow/>
      </div>
    </section>
  );
};
