"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkedIn from "@/assets/linkedin.svg";
import classNames, { text_para_2 } from "@/helpers/common";
import TeamGrid from "./TeamGrid";

const TeamSectionTabs = ({ data }: any) => {
  const categories = [
    "all",
    "AI/ml_engineers",
    "Engineers",
    "product",
    "marketing_specialists",
  ];
  const [currentTab, setCurrentTab] = useState("all");
  const [filteredData,setFilteredData]=useState([])

  const aiMlEngineers = data.filter((item: any) => item.category === "AI/ml_engineers");
  const engineers = data.filter((item: any) => item.category === "Engineers");
  const product = data.filter((item: any) => item.category === "product");
  const marketingSpecialists = data.filter((item: any) => item.category === "marketing_specialists");

  // const filteredData =
  //   currentTab === "all"
  //     ? data
  //     : currentTab === "AI/ml_engineers"
  //     ? aiMlEngineers
  //     : currentTab === "Engineers"
  //     ? engineers
  //     : currentTab === "product"
  //     ? product
  //     : currentTab === "marketing_specialists"
  //     ? marketingSpecialists
  //     : [];
useEffect(()=>{
  const filteredData =
    currentTab === "all"
      ? data
      : currentTab === "AI/ml_engineers"
      ? aiMlEngineers
      : currentTab === "Engineers"
      ? engineers
      : currentTab === "product"
      ? product
      : currentTab === "marketing_specialists"
      ? marketingSpecialists
      : [];
      setFilteredData(filteredData)
},[currentTab])
  return (
    <section className="flex flex-col gap-[4.5rem]">
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
   
      <TeamGrid filteredData={filteredData}/>

    </section>
  );
};

export default TeamSectionTabs;

