"use client"
import classNames, { text_para_3 } from '@/helpers/common'
import React, { useState } from 'react'

const CommonTabs = () => {
    const [activeTab,setActiveTab]=useState(0)
    const tabs = [
        { title: "AI in Health Care", active: true },
        { title: "AI in Finance", active: false },
        { title: "AI in Ethical", active: false },
        { title: "AI in Cyber", active: false }
      ];
      

  return (
    <ul className=" grid grid-cols-2 lg:flex gap-3">
        {tabs.map((tab,index) => (
          <li
            key={index}
            className={classNames(
              text_para_3,
              "bg-gray-900/90  rounded-md text-[#E5E7EB] font-semibold px-3 py-2 hover:text-blue-azure transition-all cursor-pointer"
            ,index==activeTab? "text-blue-azure":"")}
          onClick={()=>{setActiveTab(index)}}
          >
            {tab.title}
          </li>
        ))}
      </ul>

  )
}

export default CommonTabs
