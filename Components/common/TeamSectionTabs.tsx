"use client";
import Image from "next/image";
import React, { useState } from "react";
import LinkedIn from "@/assets/linkedin.svg";
import classNames, { text_para_2 } from "@/helpers/common";

const TeamSectionTabs = ({ data }: any) => {

    const categories = {
        ai_engineers: (item: any) => item.designation.toLowerCase() === "ai engineer",
        
        // Updated web engineers category to include "full stack"
        web_engineers: (item: any) =>
          [
            "frontend engineer",
            "ui/ux designer",
            "full stack developer",
          ].includes(item.designation.toLowerCase()),
        
        backend_engineers: (item: any) => item.designation.toLowerCase().includes("backend engineer") || item.designation.toLowerCase().includes("devops") || item.designation.toLowerCase().includes("mlops"),
        
        product_managers: (item: any) => item.designation.toLowerCase() === "product manager",
        
        // Updated marketing category to include similar logic to web engineers
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

 
  const [currentTab, setCurrentTab] = useState<TabKey>("ai_engineers");


  const filteredData = data?.filter(categories[currentTab]);

  return (
    <section className="flex flex-col gap-10">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4">
        {Object.keys(categories).map((key) => (
          <div
            key={key}
            onClick={() => setCurrentTab(key as TabKey)}
            className={classNames(
              currentTab === key
                ? "text-white font-semibold bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black border-2 bg-[length:100%_160%] border-[#056EE199] rounded-xl"
                : "text-white hover:bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black bg-[length:100%_160%] hover:text-white hover:border-[#056EE199] border-2 border-gray-700 rounded-xl",
              "whitespace-nowrap py-2 px-4 cursor-pointer text-center transition-colors duration-100"
            )}
          >
            {key.replace("_", " ").toUpperCase()}
          </div>
        ))}
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 w-full mx-auto text-white">
        {filteredData?.map((el: any, index: number) => {
          if (!el?.img && !el?.name && !el?.designation && !el.linkedINUrl) {
            return null; // Skip rendering this item if all properties are null
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
                    className="rounded-xl object-cover"
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
