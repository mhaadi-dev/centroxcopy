'use client';

import { FC, useEffect, useState } from 'react';
import classNames, { section_wrapper_class } from '@/helpers/common';
import useSize from '@/helpers/windowWidth';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  handleNext:()=>void;
  handlePrevious:()=>void;
  onPageChange: (page: number) => void;
  loading?:boolean
}

const PaginationControls: FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
  onPageChange,
  loading=false
}) => {
  const { width } = useSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = isClient && width && width <= 768 ? pageNumbers.slice(0, 5) : pageNumbers;

  return (
    <section className={classNames(section_wrapper_class)}>
      <div className={classNames("flex items-center justify-center gap-3 lg:gap-10",loading?"pointer-events-none":"")}>
        <button
          className={classNames("bg-gray-900/80 text-white rounded-full p-3",currentPage!==1 ? 'bg-gradient-to-b from-[#079DFC66] to-[#045D9666] border-2 border-blue-azure text-white':"")}
          onClick={handlePrevious}
          disabled={currentPage==1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            className="w-[18px] lg:w-[30px]"
            viewBox="0 0 24 24"
          >
            <path
              d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
              fill="white"
            />
          </svg>
        </button>

        {isClient && (
          <div className="flex gap-x-4">
            {visiblePages.map((page) => (
              <button
                key={page}
                className={`py-1 px-2 lg:p-3 text-sm lg:text-xl lg:px-5 font-semibold rounded-lg ${
                  page === currentPage
                    ? 'bg-gradient-to-b from-[#079DFC66] to-[#045D9666] border-2 border-blue-azure text-white'
                    : 'bg-gray-900/80 border-2 border-transparent text-white'
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        <button
          className={classNames("bg-gray-900/80 text-white rounded-full p-3",currentPage!==totalPages ? 'bg-gradient-to-b from-[#079DFC66] to-[#045D9666] border-2 border-blue-azure text-white':"")}
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            className="w-[18px] lg:w-[30px]"
            viewBox="0 0 24 24"
          >
            <path
              d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PaginationControls;
