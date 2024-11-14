"use client"
import Image from "next/image";
import AppLogo from "../../public/images/updatedCentroxLogo.svg";
import Link from "next/link";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import TwitterIcon from "@/assets/twitter.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import { CalendlyWidget } from "../common/Calendly";
import classNames, { section_wrapper_class } from "@/helpers/common";

interface PropsI{
  text?:string,
  btnText?:string,
  icon?:any
}

const  BannerSection = ({text="Get an expert help in constructing your own models or utilizing foundational models for your business" , btnText = "Talk to Our AI Expert",icon = ''} :PropsI)=>{
    return <>
       <section className={classNames("relative mt-24 w-full",)}>
          <div className="absolute -inset-2">
            <div
              className="w-full mx-auto h-full  opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative overflow-hidden py-4 w-full mx-auto text-center bg-gray-900 rounded-3xl lg:text-left  ">
            <div className="p-6 lg:py-8 lg:px-14 ">
              <div className="flex flex-col gap-4 lg:flex-row   w-full  items-center justify-between">
                <h5 className="text-sm sm:text-3xl font-bold text-white w-full lg:w-2/3">
                 { "Get an expert help in constructing your own models or utilizing foundational models for your business."}
                </h5>

                <div className="flex   justify-center flex-end w-full lg:w-1/3  ">
                  <CalendlyWidget btnText="Talk to Our AI Expert" isArrow/>
                </div> 
              </div>
            </div>
          </div>
        </section>
    </>
}
export default BannerSection;