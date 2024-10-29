//@ts-nocheck
import classNames, { h3ClassName, h4ClassName, p4ClassName } from "@/helpers/common";
import { CheckIcon } from "@heroicons/react/24/outline";
import { PortableText } from "@portabletext/react";
import {PortableComponent} from "@/Components/common/PortableText"



export const Stepper = ({ data }: any) => {
  // console.log("stepper data",data)
 


  return (
    <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400  w-full lg:w-3/4">
      {data?.map((x:any, index:number) => {
        return (
          <div
            className={classNames(
              "pl-12 -ml-14 lg:-ml-8  ",
              x.status == true ? " lg:py-1 border-2 activeStepper" : ""
            )}
            key={index}
          >
            <li className="mb-10 lg:mb-12 mt-6 ms-6 px-3  ">
              <div
                className={classNames(
                  "absolute flex items-center justify-center w-8 h-8  rounded-full -start-4  dark:ring-gray-900 dark:bg-blue-bright text-white border-none ",
                  x.status ? "bg-blue-bright ml-14 lg:ml-8" : "bg-gray-800"
                )}
              >
                {x.status ? (
                  <CheckIcon className="text-white p-1" />
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
      {/* <div className="p-12 -ml-12 ">
        <li className="mb-10 ms-6   ">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900  ">
            <svg
              className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <h3 className="font-medium leading-tight">Personal Info</h3>
          <p className="text-sm">Step details here</p>
        </li>
      </div>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
          </svg>
        </span>
        <h3 className="font-medium leading-tight">Account Info</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>
        </span>
        <h3 className="font-medium leading-tight">Review</h3>
        <p className="text-sm">Step details here</p>
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <svg
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
          </svg>
        </span>
        <h3 className="font-medium leading-tight">Confirmation</h3>
        <p className="text-sm">Step details here</p>
      </li> */}
    </ol>
  );
};
