//@ts-nocheck
import classNames, { h3ClassName, h4ClassName, p4ClassName } from "@/helpers/common";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import {PortableComponent} from "@/Components/common/PortableText"



export const Stepper = ({ data }: any) => {
  // console.log("stepper data",data)
 
// console.log(data,"stepper")

  return (
    <ol className="relative text-gray-500 border-s border-gray-200   w-full lg:w-3/4">
      {data?.map((x:any, index:number) => {
        return (
          <div className={classNames("pl-12 -ml-14 lg:-ml-8  ",x.status == true ? " lg:py-1 border-2  activeStepper" : "" )}
            key={index}
          >
            <li className="mb-10 lg:mb-12 mt-6 ms-6 px-3  ">
              <div className={classNames(
                  "absolute flex items-center justify-center w-8 h-8  rounded-full transition-all duration-300 -start-4 bg-blue-bright text-white border-none ",
                  x.status ? "bg-blue-bright ml-14 lg:ml-8" : "bg-gray-800"
                )}
              >
                {x.status ? (
                  <span> {index + 1} </span>
                ) : (
                  <span> {index + 1} </span>
                )}
              </div>
              {/* <div className="w-4 h-4 bg-red-200 rounded-full">123</div> */}
              <h3 className={classNames(h4ClassName,"!text-left")}>
                {x.title}
              </h3>
              {(x.content && x.status) ? <PortableText value={x.content} components={PortableComponent} /> : null}
              {/* {x.} */}
              {/* <p
                className={classNames(p4ClassName)}
                dangerouslySetInnerHTML={{ __html: x.status ?  x.description  : ""}}
              >
              </p> */}
            </li>
          </div>
        );
      })}

    </ol>
  );
};
