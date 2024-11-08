"use client"
import classNames from '@/helpers/common';
import React from 'react'

const TimelineBar = ({activeIndex,setActiveTimeLineData,timelineData}:any) => {
  return (
    <div className="flex  justify-between items-center ">
        {timelineData.map((item:any, index:number) => {
          return (
            <div key={index} className="flex w-full   items-start" onClick={()=>{
                setActiveTimeLineData(index)
            }}>
              <div className="flex  flex-col cursor-pointer items-center gap-y-2">
                <div className={classNames("w-[40px] lg:w-[60px] h-4  border border-blue-azure rounded-xl",activeIndex==index ? "bg-blue-azure":"bg-blue-azure/20")}></div>
                <p className="text-white">{item.year}</p>
              </div>

              <div
                className={classNames(
                  "h-[0.1rem] mt-[0.5rem] w-full bg-blue-azure",
                  timelineData.length - 1 == index ? "hidden" : "w-full"
                )}
              >

              </div>
            </div>
          );
        })}
      </div>
  )
}

export default TimelineBar
