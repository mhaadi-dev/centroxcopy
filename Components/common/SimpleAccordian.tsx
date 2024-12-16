"use client";
import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
}

 export interface SimpleAccordionProps {
  items: AccordionItem[];
}

export const SimpleAccordion = ({ items }: SimpleAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion-color" className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-700 bg-gray-800">
          <h2 id={`accordion-color-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-300 border-b border-gray-700 focus:outline-none hover:bg-gray-700"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-color-body-${index}`}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-color-body-${index}`}
            className={`${activeIndex === index ? '' : 'hidden'}`}
            // aria-labelledby={`accordion-color-heading-${index}`}
          >
            <div className="p-5 border-t border-gray-700 text-gray-300">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
