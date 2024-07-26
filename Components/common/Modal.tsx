import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import classNames from "@/helpers/common";
interface Props {
  onClick: () => void;
  children: JSX.Element | string;
  className?: string;
}
export default function Modal({ onClick, children, className }: Props) {
  const [open, setOpen] = useState(true);
  return (
    <Transition.Root show={open} as={Fragment}
    >
      <Dialog as="div" className="relative z-[1000]" onClose={onClick}
    
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
         
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto "
          
        >
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 "
          
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  "relative transform overflow-hidden rounded-lg px-4 pt-5  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 py-8 max-h-[45rem]  overflow-y-auto side_bar bg-black ",
                  className
                )}
                // style={{
                //     background:"radial-gradient(64.26% 107.81% at 50% -34.18%, rgba(7, 157, 252, 0.40) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(1, 184, 252, 0.06)"
                // }}
              >
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block "
                
                >
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none "
                    onClick={onClick}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6 bg-black" aria-hidden="true" />
                  </button>
                </div>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
  