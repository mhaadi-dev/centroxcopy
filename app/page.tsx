import { Navbar } from "@/Components/Navbar/navbar";
import { LogosCarousel } from "@/views/LogosCarousel";
import { Section3 } from "@/views/Section3";

import { SnapMeasure } from "@/views/SnapandMeasure";
// import { Testimonial } from "@/views/Testimonial";

import { POCS } from "@/views/POCS";

// import WebsiteFooter from "@/Components/common/WebsiteFooter";
// import  BannerSection  from "@/Components/MainPageComponents/Banner";
import dynamic from "next/dynamic";
import useScrollToElement from "@/deploy/hooks/useScrollToElement";

const WebsiteFooter = dynamic (()=>import("@/Components/common/WebsiteFooter"),{ssr:false})

const BannerSection = dynamic (()=>import("@/Components/MainPageComponents/Banner"),{ssr:false})


const Testimonial = dynamic (()=>import("@/views/Testimonial"),{ssr:false})



// import useScrollToElement from "@/hooks/useScrollToElement";

export default async function Home() {
  //  useScrollToElement();  
 
  return (

    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden gap-10 max-w-[2500px] mx-auto">
      <Navbar />
      <VideoComponent />
      <LogosCarousel />
      <SnapMeasure />
      <Section3 />
      <POCS />
      <Testimonial />
      <BannerSection/>
      
      <WebsiteFooter />
    </main>
  );
}

const VideoComponent = () => {


  return (
    <section>
     
      <video
        id="video"
        src="https://res.cloudinary.com/dptdgpwtu/video/upload/v1720607084/heroSec_euq39g.mp4"
        autoPlay
        muted
        loop
        className={`h-screen sm:h-[50rem] 3xl:h-[75vh] w-full object-cover visible `}
      >
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col gap-10 absolute -mt-[100%]  mx-5 sm:mx-0 lg:-mt-[32%] 2xl:-mt-[28%] sm:ml-[25%] items-center w-[90%] sm:w-[50%] rounded-2xl p-2 sm:p-10  text-center">
        <div className="text-white text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-thin tracking-normal">
          Leading <span className="font-extrabold">Innovation</span> with
          <span className="font-extrabold ml-1 sm:ml-3">
            Artificial Intelligence
          </span>
        </div>
        <div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold w-[75%] tracking-wide">
          Unleashing Potential: ML Community's Hub for Models and Applications.
        </div>
      </div>
    </section>
  );
};
