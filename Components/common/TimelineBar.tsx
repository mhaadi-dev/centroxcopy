"use client"
import classNames from '@/helpers/common';
import React from 'react'

const TimelineBar = ({activeIndex,setActiveTimeLineData,timelineData}:any) => {
  return (
    <div className="flex  relative justify-between items-center ">
      <div
                className={classNames(
                  "h-[0.1rem] mt-[0.5rem]  w-full bg-blue-azure absolute -top-[0.13rem]",
                 
                )}
              >

              </div>
        {timelineData.map((item:any, index:number) => {
          return (
            <div key={index} className="flex w-full  z-[1] justify-between" onClick={()=>{
                setActiveTimeLineData(index)
            }}>
              <div className={classNames("flex w-full   flex-col cursor-pointer gap-y-2",index==0 ? "items-start":index == timelineData?.length -1 ? "items-end":"items-center")}>
                <div className={classNames("w-[35px]  lg:w-[60px] h-4  border border-blue-azure rounded-xl",activeIndex==index ? "bg-blue-azure":"bg-black")}></div>
                <p className="text-white">{item.year}</p>
              </div>

              
            </div>
          );
        })}
      </div>
  )
}

export default TimelineBar
