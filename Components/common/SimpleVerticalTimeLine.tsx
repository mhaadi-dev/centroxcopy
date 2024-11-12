import classNames from '@/helpers/common'
import React from 'react'

const SimpleVerticalTimeLine = ({heading="",timelineData}:any) => {
  return (
    <>
    
  
<div className="bg-white">
  <div className="max-w-xl mx-auto p-8">
    <div className="flow-root">
      <ul className="-mb-8">
        {timelineData?.map((data:any,index:number)=>{
            return <li>
          <div className="relative pb-8">
            <span className={classNames("absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200",index + 1 == data.length  ? "!hidden":"")} aria-hidden="true" />
            <div className="relative flex items-start space-x-3">
              <div>
                <div className="relative px-1">
                  <div className="h-10 w-10 bg-gray-900/80 rounded-full ring-8 text-white border-2 border-white flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
              </div>
            
                
               {data && <div className="mt-2 text-gray-700">
                  <p>
                    {data}
                  </p>
                </div>}
              
            </div>
          </div>
        </li>
        })}
        
      
      </ul>
    </div>
  </div>
</div>

    
    </>
  )
}

export default SimpleVerticalTimeLine
