"use client";
import Image from "next/image";
import React, { useState } from "react";
import LinkedIn from "@/assets/linkedin.svg";
import classNames, { text_para_2 } from "@/helpers/common";

const TeamSectionTabs = ({ data }:any) => {
  const categories = ["all", "AI/ml_engineers", "Engineers", "product", "marketing_specialists"];
  const [currentTab, setCurrentTab] = useState("all");

  // Filter data based on the selected category
  const filteredData =
    currentTab === "all" ? data : data.filter((item:any) => item.category === currentTab);

  return (
    <section className="flex flex-col gap-[4.5rem]">
      {/* Tabs */}
      <div className="flex-col flex gap-x- lg:gap-x-0 lg:flex-row gap-y-4">
        {categories.map((key) => (
          <div
            key={key}
            onClick={() => setCurrentTab(key)}
            className={classNames(
              currentTab === key
                ? "text-white font-semibold bg-gradient-to-t from-[#0071B9] to-[#056fe140] bg-[length:100%_160%] border-2 border-t-0 border-l-0 border-r-0 border-[#056EE199] rounded-t-xl"
                : "text-white hover:bg-[#056fe118] hover:text-white hover:border-[#056EE199] border-2 border-t-0 border-l-0 border-r-0 border-gray-200 rounded-t-xl",
              "whitespace-nowrap flex-1 capitalize py-2 px-4 cursor-pointer text-center transition-colors duration-100",
              text_para_2
            )}
          >
            {key.replace("_", " ")}
          </div>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 w-full mx-auto text-white">
        {filteredData.map((el:any, index:number) => (
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
            {el.img && (
              <Image
                src={el.img}
                alt={el?.alt || "Team Member"}
                objectFit="cover"
                className="rounded-xl object-cover aspect-square"
                placeholder="blur"
              />
            )}
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
        ))}
      </div>
    </section>
  );
};

export default TeamSectionTabs;
