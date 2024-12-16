"use client";
import classNames, { section_wrapper_class } from "@/helpers/common";
import React, { useState } from "react";
import CommonCard from "./CommonCard";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import PaginationControls from "./PaginationControls";

interface Props {
  headingText?: string;
  cardData?: any;
  cardsPerPage?: number;
}

const GridBlogCardsWithPagination = ({
  headingText,
  cardData,
  cardsPerPage = 5,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentData = cardData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section className={classNames(section_wrapper_class, "flex flex-col gap-4")}>
      <div
        className={classNames(
          "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        )}
      >
        {currentData.slice(0, 2).map((card: any, index: number) => (
          <CommonCard
            key={index}
            colSpan={index < 2 ? 2 : 1}
            name={card.name}
            date={card.date}
            label={card.label}
            duration={card.duration}
            image={dummyDisplay}
            subdescription={card.subdescription}
            title={card.title}
          />
        ))}
      </div>
      <div
        className={classNames(
          "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {currentData.slice(2).map((card: any, index: number) => (
          <CommonCard
            key={index}
            name={card.name}
            date={card.date}
            label={card.label}
            duration={card.duration}
            image={dummyDisplay}
            subdescription={card.subdescription}
            title={card.title}
          />
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default GridBlogCardsWithPagination;
