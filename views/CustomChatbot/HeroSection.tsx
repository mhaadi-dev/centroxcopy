import { Button } from "@/Components/Button.js/button";
import Image from "next/image";
import img from "@/public/images/customchatbot/updatedHero.webp";
import Link from "next/link";
import { CalendlyWidget } from "@/Components/common/Calendly";
export const CustomChatbotHeroSection = () => {
  return (
    <>
      <section className="bg-black flex  flex-col gap-4  lg:gap-12 justify-center items-center pb-20"
      style={{
        background:"linear-gradient(180deg, rgba(7, 157, 252, 0.00) 58.61%, #079DFC 100%),  #060606; "
      }}>
        <h1 className="w-4/5 mx-auto  lg:w-full 2xl:w-1/2 text-2xl lg:text-4xl text-center lg:text-center  2xl:text-6xl text-white  font-bold mt-20 lg:mt-32 ">
          Be Available For Your Customers 24/7, 365
        </h1>
        <h3 className="text-white font-medium text-center   lg:text-center text-md lg:text-lg 2xl:text-xl w-1/2">
          Reduce churn and maximize retention with a chatbot that knows your
          business as well as you do, ready to assist your customers whenever
          they need it.
        </h3>
        <CalendlyWidget btnText="Book A Call Now"/>
     

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
