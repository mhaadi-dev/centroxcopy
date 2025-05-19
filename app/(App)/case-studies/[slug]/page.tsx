import { notFound } from "next/navigation";

import CaseStudyBanner from "@/Components/common/CaseStudyBanner";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import { text_h2_class } from "@/helpers/common";
import WhatOurClientSay from "@/Components/common/WhatOurClientSay";
import SimpleIconHeroSection from "@/Components/common/SimpleIconHeroSection";
import { StepperSection } from "@/sections/StepperSection";
import { LogosSection } from "@/sections/LogosSection";
import rightsidebg from "@/assets/rightsidebg.svg";
import { client } from "@/sanity/lib/client";
import { GET_CASE_STUDY_BY_SLUG } from "@/sanity/query";
import { cleanMetaString } from "@/sanity/lib/helpers";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = await client.fetch(GET_CASE_STUDY_BY_SLUG, { slug: params.slug });

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "The case study you are looking for does not exist.",
    };
  }

  return {
    title: cleanMetaString(caseStudy.meta_title),
    description:cleanMetaString(caseStudy.meta_description),
    alternates: {
      canonical: `https://centrox.ai/case-studies/${caseStudy.slug.current}`,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await client.fetch(GET_CASE_STUDY_BY_SLUG, { slug: params.slug });

  if (!caseStudy) {
    notFound();
  }

  // Filter sections by showSection and sort by order
  const sections = caseStudy.sections
    .filter((section: any) => section.showSection)
    .sort((a: any, b: any) => a.order - b.order);

  // Transform data to match component expectations
  const transformGridData:any = (section: any) => {
    const cards = [
      ...(section.cards || []),
      ...(section.extraCards || []),
    ].map((card: any) => ({
      icon: card.icon?.asset?.url ? { src: card.icon.asset.url, alt: card.alt } : null,
      heading: card.heading,
      caption: card.caption || card.heading, // Use caption if available, fallback to heading
      symbol: card.symbol,
      description: card.description,
      linkText: card.linkText,
      colSpan: card.colSpan,
      bentoImage: card.bentoImage?.asset?.url
        ? { src: card.bentoImage.asset.url, alt: card.bentoImage.alt }
        : undefined,
      alt: card.alt || card.bentoImage?.alt || card.heading,
    }));

    return [
      {
        headerData: section.headerData,
        data: cards,
        btnText: section.btnText, // Pass btnText from schema
        ...(section.extraSection ? { extraSection: transformGridData(section.extraSection) } : {}),
      },
    ];
  };

  const renderSection = (section: any, index: number) => {
    switch (section._type) {
      case "caseStudyBanner":
        return (
          <CaseStudyBanner
            key={index}
            heading={section.heading}
            para1Text={section.para1Text}
            image={section.image.asset.url}
          />
        );
      case "resultsGrid":
        return (
          <CommonDisplayCardsGrid
            key={index}
            data={transformGridData(section)}
            gridCols={4}
            headingClassName={text_h2_class}
            gradientBg
            resizeableCardsLayout={section.resizeableCardsLayout}
            
          />
        );
      case "whatOurClientSay":
        return (
          <WhatOurClientSay
            key={index}
            headingText={section.headingText}
            review={section.review}
            name={section.name}
            position={section.position}
            revenue={section.revenue}
          />
        );
      case "problemHero":
        return (
          <SimpleIconHeroSection
            key={index}
            image={section.image.asset.url}
            bulletPoints={false}
            reverse={false}
            headingText={section.headingText}
            paraText={section.paraText}
          />
        );
      case "requirementsGrid":
        return (
          <CommonDisplayCardsGrid
            key={index}
            data={transformGridData(section)}
            resizeableCardsLayout={section.resizeableCardsLayout}
            
          />
        );
      case "researchHero":
        return (
          <SimpleIconHeroSection
            key={index}
            image={section.image.asset.url}
            heroClassName=""
            bgClassName="z-0 absolute pr-4 lg:pr-0 lg:w-1/3 object-contain lg:object-cover"
            bgImage1={section.bgImage?.asset?.url || rightsidebg}
            bulletPoints={false}
            reverse={true}
            headingText={section.headingText}
            paraText={section.paraText}
          />
        );
      case "benefitsGrid":
        return (
          <CommonDisplayCardsGrid
            key={index}
            data={transformGridData(section)}
            resizeableCardsLayout={section.resizeableCardsLayout}
            gridCols={3}
            
          />
        );
      case "challengesGrid":
        return (
          <CommonDisplayCardsGrid
            key={index}
            data={transformGridData(section)}
            resizeableCardsLayout={section.resizeableCardsLayout}
            
          />
        );
      case "stepperSection":
        return (
          <StepperSection
            key={index}
            data={{
              heading: section.heading,
              description: section.description,
              data: section.steps,
              btnText: section.btnText,
            }}
          />
        );
      case "techStackSection":
        return (
          <LogosSection
            key={index}
            data={section.categories.map((category: any) => ({
              title: category.title,
              content: category.content.map((item: any) => ({
                alt: item.img.alt,
                caption: item.caption,
                img: item.img.asset.url,
              })),
            }))}
          />
        );
      case "keyFeaturesGrid":
        return (
          <CommonDisplayCardsGrid
            key={index}
            data={transformGridData(section)}
            resizeableCardsLayout={section.resizeableCardsLayout}
          />
        );
      case "applicationsGrid":
        return (
          <CommonDisplayCardsGrid
            key={index}
            data={transformGridData(section)}
            resizeableCardsLayout={section.resizeableCardsLayout}
            gridCols={3}
            
          />
        );
      default:
        return null;
    }
  };

  return <>{sections.map((section: any, index: number) => renderSection(section, index))}</>;
}