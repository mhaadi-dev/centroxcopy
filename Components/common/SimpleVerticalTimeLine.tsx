import classNames, { text_h3_class } from '@/helpers/common'
import React from 'react'

const SimpleVerticalTimeLine = ({ heading = "", timelineData,className="" }: any) => {
  return (
    <section className={classNames(className)}>
    <div className="border-2  inline-block border-r-0 border-b-0 rounded-2xl rounded-bl-none rounded-tr-none border-white">\
    {heading && <h3 className={classNames(text_h3_class,"px-6")}>{heading}</h3> }
      <div className="max-w-xl mx-auto lg:-mr-8 lg:-mb-8  p-8 border-spacing-10 border-2 border-t-0 border-l-0 border-blue-azure rounded-2xl">
        <div className="flow-root">
          <ul className="-mb-8">
            {timelineData?.map((data: any, index: number) => {
              const isLastItem = index === timelineData.length - 1;
              return (
                <li key={index}>
                  <div className="relative pb-8">
                    {!isLastItem && (
                      <span
                        className="absolute top-5 left-5 ml-px h-full w-0.5 bg-white"
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex items-start space-x-3">
                      <div>
                        <div className="relative flex flex-col px-1">
                          <div className="h-10 w-10 bg-gray-900 rounded-full ring-8 text-white border-2 border-white flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      {data && (
                        <div className="mt-2 text-white">
                          <p>{data}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default SimpleVerticalTimeLine;
