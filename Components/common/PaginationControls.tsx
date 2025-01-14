"use client";

import { FC, useEffect, useState } from 'react';
import classNames, { section_wrapper_class } from '@/helpers/common';
import useSize from '@/helpers/windowWidth';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
  onPageChange: (page: number) => void;
  loading?: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
  onPageChange,
  loading = false,
}) => {
  const { width } = useSize();
  const [isClient, setIsClient] = useState(false);
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const [pageRange, setPageRange] = useState({ start: 1, end: 5 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const updateVisiblePages = () => {
      if (!isClient) return;

      const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

      if (width && width <= 768) {
        const start = pageRange.start;
        const end = Math.min(pageRange.end, totalPages);
        setVisiblePages(pageNumbers.slice(start - 1, end));
      } else {
        const start = pageRange.start;
        const end = Math.min(pageRange.end, totalPages);
        setVisiblePages(pageNumbers.slice(start - 1, end));
      }
    };

    updateVisiblePages();
  }, [isClient, width, pageRange, totalPages]);

  useEffect(() => {
    if (width && width <= 768) {
      if (currentPage > pageRange.end && pageRange.end < totalPages) {
        setPageRange({
          start: pageRange.end + 1,
          end: Math.min(pageRange.end + 5, totalPages),
        });
      } else if (currentPage < pageRange.start && pageRange.start > 1) {
        setPageRange({
          start: Math.max(pageRange.start - 5, 1),
          end: pageRange.start - 1,
        });
      }
    } else {
      if (currentPage > pageRange.end && pageRange.end < totalPages) {
        setPageRange({
          start: pageRange.end + 1,
          end: Math.min(pageRange.end + 5, totalPages),
        });
      } else if (currentPage < pageRange.start && pageRange.start > 1) {
        setPageRange({
          start: Math.max(pageRange.start - 5, 1),
          end: pageRange.start - 1,
        });
      }
    }
  }, [currentPage, pageRange, totalPages, width]);

  return (
    <section className={classNames(section_wrapper_class)}>
      <div
        className={classNames(
          'flex items-center justify-center gap-3 lg:gap-10',
          loading ? 'pointer-events-none' : ''
        )}
      >
        {/* Previous Button */}
        <button
          className={classNames(
            'bg-gray-900/80 text-white rounded-full p-2 lg:p-3',
            currentPage !== 1
              ? 'bg-gradient-to-b from-[#079DFC66] to-[#045D9666] border-2 border-blue-azure text-white'
              : ''
          )}
          onClick={handlePrevious}
          disabled={currentPage === 1}
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

        {/* Page Buttons */}
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
            {pageRange?.end< totalPages?  <button
               
                className={`py-1 px-2 lg:p-3 text-sm lg:text-xl lg:px-5 font-semibold rounded-lg ${
                 true
                    ? ' pointer-events-none border-gray-800 border-[1px] text-gray-400'
                    : 'bg-gray-900/80 border-2 border-transparent text-white'
                }`}
               
              >
                ...
              </button> : ""}
          </div>
        )}

        {/* Next Button */}
        <button
          className={classNames(
            'bg-gray-900/80 text-white rounded-full p-2 lg:p-3',
            currentPage !== totalPages
              ? 'bg-gradient-to-b from-[#079DFC66] to-[#045D9666] border-2 border-blue-azure text-white'
              : ''
          )}
          onClick={handleNext}
          disabled={currentPage === totalPages}
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

export default PaginationControls