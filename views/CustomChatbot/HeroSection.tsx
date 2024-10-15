import { Button } from "@/Components/Button.js/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CalendlyWidget } from "@/Components/common/Calendly";
interface PropsI{
  heading:string,
  description:string,
  btnText:string,
  img:StaticImageData,
}
export const BaseHeroSection = ({heading,description,btnText,img}:PropsI) => {
  return (
    <>
      <section className="bg-black flex  flex-col gap-4  lg:gap-12 justify-center items-center pb-20"
      style={{
        background:"linear-gradient(180deg, rgba(7, 157, 252, 0.00) 58.61%, #079DFC 100%),  #060606; "
      }}>
        <h1 className="w-4/5 mx-auto  lg:w-full 2xl:w-1/2 text-2xl lg:text-4xl text-center lg:text-center  2xl:text-6xl text-white  font-bold mt-20 lg:mt-32 ">
          {heading}
        </h1>
        <h3 className="text-white font-medium text-center   lg:text-center text-md lg:text-lg 2xl:text-xl lg:w-2/5">
          {description}
        </h3>
        <CalendlyWidget btnText={btnText}/>
     

        <figure className="w-[98%] lg:w-3/4  mx-auto">
          <Image src={img} alt="img" className="w-full" loading="eager" />
        </figure>

        {/* <div className="w-3/4 mx-auto bg-white h-[30rem] flex justify-center items-end border-2 px-12  rounded-xl">
          <div className="bg-red-200  h-[80%] w-[40%] rounded-l-xl mt-12  ">asdas</div>
          <div className="bg-green-200 h-full  w-1/2 rounded-xl -mb-12">asd</div>
          <div className="bg-red-200  h-[80%] w-[40%] rounded-r-xl mt-12">asfafs</div>
        </div> */}
      </section>
    </>
  );
};
