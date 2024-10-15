import { VerticalCarousal } from "@/Components/common/VeritcalCarousal";
import classNames, {
  sectionheadings,
  sectionSectionDescription,
  sectionsSectionHeadings,
} from "@/helpers/common";

export const DataOpsSection4 = () => {
  return (
    <section className="mt-24 lg:mt-40 w-4/5 mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 ">
      <div className="w-full lg:w-1/2 bg-black overflow-hidden flex gap-4 rounded-3xl border-4 border-green-900  " >
        <div className="w-full  border-2 border-red-200">
          <VerticalCarousal />
        </div>

        <div className="w-full border-2 border-red-200">
          <VerticalCarousal  isReverse={true}/>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-12">
        <h2 className={classNames(sectionheadings,"lg:!text-left lg:!w-full ")}> Industries we have worked with  </h2>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h3 className={sectionsSectionHeadings}>Health Care</h3>
            <p className={sectionSectionDescription}>
              We deliver precise annotations of X-rays and MRIs, enhancing
              diagnostics and treatment planning.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className={sectionsSectionHeadings}>Health Care</h3>
            <p className={sectionSectionDescription}>
              We deliver precise annotations of X-rays and MRIs, enhancing
              diagnostics and treatment planning.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className={sectionsSectionHeadings}>Health Care</h3>
            <p className={sectionSectionDescription}>
              We deliver precise annotations of X-rays and MRIs, enhancing
              diagnostics and treatment planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
