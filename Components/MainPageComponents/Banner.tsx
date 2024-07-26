"use client"
import Image from "next/image";
import AppLogo from "../../public/images/updatedCentroxLogo.svg";
import Link from "next/link";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import TwitterIcon from "@/assets/twitter.svg";
import LinkedinIcon from "@/assets/linkedin.svg";


const  BannerSection = ()=>{
    return <>
       <section className="relative mt-24 lg:mt-60 w-[99%] mx-auto">
          <div className="absolute -inset-2">
            <div
              className="w-4/5 mx-auto h-full  opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative overflow-hidden w-4/5 mx-auto text-center bg-gray-900 rounded-3xl lg:text-left ">
            <div className="p-6 lg:py-8 lg:px-14 ">
              <div className="grid lg:flex   w-full items-center justify-center">
                <h5 className="text-sm sm:text-3xl font-bold text-white">
                  Get an expert help in constructing your own models or
                  utilizing foundational models for your business
                </h5>

                <div className="flex-1  mt-7 lg:mt-0 ml-[15%] sm:ml-[30%] lg:ml-8 justify-center ">
                  <Link href={"/aiExpert"}>
                    <Button
                      content="Talk to our AI expert"
                      className="bg-blue-azure border-0 w-40 sm:w-64 !rounded-full font-semibold"
                      isLefticon={false}
                   
                    />
                  </Link>
                </div> 
              </div>
            </div>
          </div>
        </section>
    </>
}
export default BannerSection;