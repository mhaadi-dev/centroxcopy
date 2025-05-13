"use client";

import CommonDisplayCardsGrid from "./CommonDisplayCardsGrid";

export const ClientOnlyGrid = ({ data, className }: { data: any; className?: string }) => {
  // console.log("ClientOnlyGrid data:", data);

  return (
    <CommonDisplayCardsGrid
      gridCols={3}
      tags={true}
      caseStudyCards={true}
      data={data}
      className={className}
    />
  );
};