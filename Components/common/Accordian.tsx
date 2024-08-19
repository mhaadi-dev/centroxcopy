"use client";

import { useState, useEffect } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="relative">
      <div className="p-4 lg:p-12 w-[90%] lg:w-3/5 mx-auto border-2 border-gray-300 mt-4 rounded-xl"
      style={{
        borderRadius: "12px",
        // border: 1px solid var(--gray-200, #E5E7EB);
        background: "rgba(16, 16, 16, 0.10)",
        boxShadow: `${ accordionOpen ? "0px 0px 20px 0px rgba(255, 255, 255, 0.25), 0px 0px 33px 0px rgba(255, 255, 255, 0.20) inset" : ""}`
      }}
      >
        <h2>
          <button
            className="flex items-center justify-between w-full text-left font-semibold py-2"
            onClick={(e) => {
              e.preventDefault();
              setAccordionOpen(!accordionOpen);
            }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <span className="text-white text-xl font-extrabold">{title}</span>
            <svg
              className="fill-white shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-500 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-500 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-text-${id}`}
          role="region"
          aria-labelledby={`accordion-title-${id}`}
          className={`grid text-lg text-slate-600 mt-2 overflow-hidden transition-all duration-700 ease-in-out ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="pb-3 text-white">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
