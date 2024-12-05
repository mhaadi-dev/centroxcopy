"use client";
import Image from "next/image";
import React, { useState } from "react";
import LinkedIn from "@/assets/linkedin.svg";
import classNames, { text_para_2 } from "@/helpers/common";

const TeamSectionTabs = ({ data }: any) => {

    const categories = {
      all: () => true,
        "AI/ml_engineers": (item: any) => item.designation.toLowerCase() === "ai engineer",
        
        developers: (item: any) =>
          [
            "frontend engineer",
            "ui/ux designer",
            "full stack developer",
            "backend engineer", "mlops","devops"
          ].includes(item.designation.toLowerCase()),
        
        
        product: (item: any) => item.designation.toLowerCase() === "product manager",
        
        marketing_specialists: (item: any) =>
          [
            "marketing",
            "marketer",
            "copy writer",
            "seo",
            "lead generation",
          ].some((keyword) => item.designation.toLowerCase().includes(keyword)),
      };
      

  type TabKey = keyof typeof categories;

 
  const [currentTab, setCurrentTab] = useState<TabKey>("all");


  const filteredData = data?.filter(categories[currentTab]);

  return (
    <section className="flex flex-col gap-[4.5rem]">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-4 ">
        {Object.keys(categories).map((key) => (
          <div
            key={key}
            onClick={() => setCurrentTab(key as TabKey)}
            className={classNames(
              currentTab === key
                ? "text-white font-semibold bg-gradient-to-t from-[#0071B9] to-[#056fe140]   bg-[length:100%_160%] border-2 border-t-0 border-l-0 border-r-0 border-[#056EE199] rounded-t-xl"
                : "text-white hover:bg-[#056fe118]  hover:text-white hover:border-[#056EE199] border-2 border-t-0 border-l-0 border-r-0 border-gray-200 rounded-t-xl",
              "whitespace-nowrap capitalize py-2 px-4 cursor-pointer text-center transition-colors duration-100",text_para_2
            )}
          >
            {key.replace("_", " ")}
          </div>
        ))}
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 w-full mx-auto text-white">
        {filteredData?.map((el: any, index: number) => {
          if (!el?.img && !el?.name && !el?.designation && !el.linkedINUrl) {
            return null; 
          }
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-4 rounded-xl"
              style={{
                border: "1px solid rgba(3, 34, 182, 0.20)",
                background:
                  "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
                boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
                backdropFilter: "blur(18px)",
              }}
            >
              <div>
                {el.img && (
                  <Image
                    src={el.img}
                    alt="Team Member"
                    objectFit="cover"
                    className="rounded-xl object-cover aspect-square"
                    placeholder="blur"
                  />
                )}
              </div>
              <div className="w-full">
                <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
                  {el.name}
                </p>
                <div className="flex justify-between items-left w-full mt-1">
                  <p className="font-semibold text-xs md:text-sm text-blue-azure">
                    {el.designation}
                  </p>
                  {el.linkedINUrl && (
                    <a href={el.linkedINUrl} target="_blank" rel="noreferrer">
                      <Image src={LinkedIn} className="w-5" alt="LinkedIn Profile" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSectionTabs;
