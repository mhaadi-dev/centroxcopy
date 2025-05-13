import { HeroSection } from "@/sections/HeroSection";
import imageBG from "@/assets/ImageBG.webp";
import servicebg from "@/assets/Servicebg.webp";
import IndustryBanner from "@/Components/common/IndustryBanner";
import LandingContactSection from "@/views/LandingPageViews/LandingContactSection";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import { client } from "@/sanity/lib/client";
import classNames from "@/helpers/common";
import GridCaseStudiesWithPagination from "@/Components/common/GridCaseStudiesWithPagination";



export const revalidate = 0;
export const metadata = {
  title: "Case Studies - Real-World Gen AI Solutions | Centrox AI",
  description:
    "Explore Centrox AI case studies showcasing successful partnerships and enterprise adoption of Generative AI, including Llama deployments and AI driven innovations.",
  alternates: {
    canonical: "https://centrox.ai/case-studies",
  },
};

const Page = async () => {
  // Hardcoded case studies
  const caseStudy1 = {
    title: "Pocketmate.AI your reliable mental health support.",
    slug: { current: "pocketmate" },
    sections: {
      heading: "Pocketmate.AI your reliable mental health support.",
      para1Text:
        "Pocketmate.AI offers support to individuals seeking mental-health assistance. It enables users to book sessions with professional therapists, ensuring timely and effective support.",
      image: {
        asset: {
          url: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/casestudies/pocketmate_research.webp",
        },
        alt: "Pocketmate AI",
      },
    },
  };

  const caseStudy2 = {
    title: "Optimizing dumpster placement using image recognition.",
    slug: { current: "rentuhbin" },
    sections: {
      heading: "Optimizing dumpster placement using image recognition.",
      para1Text:
        "Our solution ensures convenient, efficient, and eco-friendly waste disposal while prioritizing user satisfaction and reliability. Some of the major benefits this tool delivers are explained below.",
      image: {
        asset: {
          url: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/casestudies/rentuhbin_research.webp",
        },
        alt: "Rentuhbin",
      },
    },
  };

  // Use hardcoded case studies for HeroSection
  const heroCaseStudies = [caseStudy1, caseStudy2].filter(
    (study) => study.slug?.current
  );

  // Fetch total count of Sanity case studies for grid
  const totalCaseStudiesCount = await client.fetch(
    `count(*[_type == "caseStudy" && defined(slug)])`
  );

  // Fetch initial 6 Sanity case studies for grid
  const initialGridCaseStudies = totalCaseStudiesCount > 0
    ? await client.fetch(
        `*[_type == "caseStudy" && defined(slug)] | order(_createdAt desc) [0...6] {
          _id,
          title,
          slug,
          meta_title,
          meta_description,
          sections[_type == "caseStudyBanner" && showSection][0] {
            heading,
            para1Text,
            image { asset-> { url }, alt }
          }
        }`
      )
    : [];

  // Debug logs
  // console.log("totalCaseStudiesCount:", totalCaseStudiesCount);
  // console.log("initialGridCaseStudies:", initialGridCaseStudies.map((study: any) => ({ title: study.title, slug: study.slug?.current })));

  // Prepare gridData for CommonDisplayCardsGrid
  const gridData = [
    {
      headerData: {
        tagText: "",
        headingText: "More Case Studies",
        para1Text: "Company Updates and Technology Updates",
        heading2Text: "",
        para2Text: "",
      },
      data: initialGridCaseStudies
        .filter((study: any) => study.slug?.current)
        .map((study: any) => ({
          image: study.sections?.image?.asset?.url || "",
          title: study.title || "",
          subdescription: study.sections?.para1Text || "",
          tags: true,
          link: `/case-studies/${study.slug.current}`,
          linkText: "Learn More",
          linkWithIcon: true,
          label: "Case Study",
          duration: "10min read",
        })),
      caption: "",
      btnText: "",
    },
  ];

  // Existing benefitsData
  const benefitsData = [
    {
      headerData: {
        tagText: "",
        headingText: "More Case Studies",
        para1Text: "Company Updates and Technology Updates",
        heading2Text: "",
        para2Text: "",
      },
      data: [
        {
          icon: "",
          heading: "Deep Understanding",
          description:
            "By training on your specific data, our chatbots comprehend your industry-specific terminology, product offerings, and customer pain points. This enables them to provide accurate, relevant, and contextually appropriate responses.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: "",
          heading: "Personalized Engagement",
          description:
            "We go beyond generic responses. Our chatbots leverage user data and past interactions to tailor conversations, offering personalized recommendations, proactive support, and solutions that meet individual needs.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: "",
          heading: "Seamless Integration",
          description:
            "Our chatbots seamlessly integrate with your existing systems and workflows, such as CRM, knowledge bases, and ticketing systems. This ensures a smooth and efficient customer experience across all touchpoints.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: "",
          heading: "Scalability & Availability",
          description:
            "Handle high volumes of inquiries 24/7, 365 days a year. Your customers will always receive timely and helpful support, even during peak periods, without the need for additional staffing.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: "",
          heading: "Data-Driven Insights",
          description:
            "Every conversation is an opportunity to learn. Our chatbots collect valuable customer data and feedback, providing actionable insights to inform your business strategies, product development, and marketing efforts.",
          linkText: "",
          linkWithIcon: true,
        },
        {
          icon: "",
          heading: "Brand Consistency",
          description:
            "We ensure your chatbot reflects your brand's unique voice and values, building trust and fostering stronger customer relationships.",
          linkText: "",
          linkWithIcon: true,
        },
      ],
      caption: "",
      btnText: "",
    },
  ];

  return (
    <>
      {/* <SubnavBar imageLink='/case-studies' title='Case Studies' navItems={navItems}/> */}
      <section className="">
        {heroCaseStudies.slice(0, 2).map((study: any, index: number) => (
          <HeroSection
            key={study.slug?.current || study.title}
            isCasestudy
            link={study.slug?.current ? `/case-studies/${study.slug.current}` : "#"}
            heroClassName="h-auto lg:min-h-[90vh] !pt-4"
            bgimage1={index % 2 === 0 ? servicebg : undefined}
            bgimage2={index % 2 === 1 ? imageBG : undefined}
            bgClassName={classNames(
              "w-[90%] !object-contain lg:!w-2/5 opacity-70",
              index % 2 === 0 && "!object-cover"
            )}
            tags={true}
            divider={true}
            reverse={index % 2 === 1}
            btnText="Read Case Study"
            img={study.sections?.image?.asset?.url || ""}
            isGradientText={false}
            heading={study.sections?.heading || study.title || ""}
            description={study.sections?.para1Text || ""}
            moveToSection={
              index === 1 && study.slug?.current
                ? `/case-studies/${study.slug.current}`
                : undefined
            }
          />
        ))}
      </section>
      {totalCaseStudiesCount > 0 && (
        <GridCaseStudiesWithPagination
          initialGridData={gridData}
          totalCaseStudiesCount={totalCaseStudiesCount}
          cardsPerPage={6}
          heroStudyIds={[]}
        />
      )}
      {/* <CommonDisplayCardsGrid
        gridCols={3}
        tags={true}
        caseStudyCards={true}
        data={benefitsData}
      /> */}
      <IndustryBanner
        heading="Your AI Dream, Our Mission"
        description="Partner with Us to Bridge the Gap Between Innovation and Reality."
        isBooking
        btnText="Talk to Our AI Expert"
      />
      <LandingContactSection />
    </>
  );
};

export default Page;