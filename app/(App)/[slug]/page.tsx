import { sanityFetch } from "@/sanity/lib/client";
import { SERVICES_PAGE_QUERY } from "@/sanity/query";
import { HeroSection } from "@/sections/HeroSection";
import { LogosCarousel } from "@/views/LogosCarousel";
import { CustomCarousalSection } from "@/sections/CustomCarousalSection";
import { BenefitsSection } from "@/sections/BenefitsSection";
import { OppositeCarousal } from "@/sections/OppositeCarousal";
import { StepperSection } from "@/sections/StepperSection";
import { PointsandImagesSection } from "@/views/ComputerVisionDevelopment/Section6";
import { CustomerTestimonials } from "@/sections/CustomersTestimonial";
import { ProductsCarousalSection } from "@/sections/ProducstsCarousal";
import { CaseStudiesCarousalSection } from "@/sections/CaseStudiesCarousalSection";
import { FaqsSection } from "@/sections/FaqsSection";
import { ContactForm } from "@/Components/common/ContactForm";
import { BannerSection } from "@/sections/TestimonialSection";
import { HoveredTextSection } from "@/sections/HoveredTextSection";
import bgImage from "@/public/images/customchatbot/customchatbotbg.webp"

// import { LANDING_PAGE_QUERY } from '@/sanity/query';
import LandingLayout from "../layoutPage";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log("slug is", slug);
  const landingPageData: any = await sanityFetch({
    query: SERVICES_PAGE_QUERY,
    params: { slug },
  });
  console.log("landing page data in dummyu page sd is", landingPageData);
  return (
    <div className="h-20 bg-white">
      <LandingLayout>
        <main className="max-w-[2500px] mx-auto bg-[#060606] ">
          {landingPageData?.[0]?.heroSection?.includeSection && (
            <HeroSection
            heading={landingPageData?.[0]?.heroSection?.heading}

            includeDots={landingPageData?.[0]?.heroSection?.includeDots}
              description={landingPageData?.[0]?.heroSection?.description}
              btnText={landingPageData?.[0]?.heroSection?.btnText}
              reverse={landingPageData?.[0]?.heroSection?.reverse}
              img={landingPageData?.[0]?.heroSection?.img}
            />
          )}
          {landingPageData?.[0]?.logoCarousal?.includeSection && (
            <LogosCarousel data={landingPageData?.[0]?.logoCarousal?.logos} />
          )}
          {landingPageData?.[0]?.customCarousal?.includeSection && (
            <CustomCarousalSection
              data={landingPageData?.[0]?.customCarousal?.data}
              heading={landingPageData?.[0]?.customCarousal?.heading}
            />
          )}
          {/* <HorizentalBar data={HorizentalBarData} /> */}
          {landingPageData?.[0]?.benefitsSection?.includeSection && (
            <BenefitsSection
              mainDescription={
                landingPageData?.[0]?.benefitsSection?.description
              }
              mainHeading={landingPageData?.[0]?.benefitsSection?.heading}
              data={landingPageData?.[0]?.benefitsSection?.data}
            />
          )}
          {landingPageData?.[0]?.whyUsSection?.includeSection && (
            <PointsandImagesSection data={landingPageData?.[0]?.whyUsSection} />
          )}
          {landingPageData?.[0]?.verticalCarouselSection?.includeSection && (
            <OppositeCarousal
              data={landingPageData?.[0]?.verticalCarouselSection}
            />
          )}
          {landingPageData?.[0]?.hoverAnimationSection?.includeSection && (
            <HoveredTextSection
              heading={landingPageData?.[0]?.hoverAnimationSection?.heading}
              data={landingPageData?.[0]?.hoverAnimationSection?.data}
            />
          )}
          {landingPageData?.[0]?.stepperSection?.includeSection && (
            <StepperSection
              heading={landingPageData?.[0]?.stepperSection?.heading}
              reverse={landingPageData?.[0]?.stepperSection?.isReverse}

              description={landingPageData?.[0]?.stepperSection?.description}
              data={landingPageData?.[0]?.stepperSection?.data}
              img={landingPageData?.[0]?.stepperSection?.image}
              button={landingPageData?.[0]?.stepperSection?.btnText}
            />
          )}
          {/* <ServiceCarousalSection / > */}
          {landingPageData?.[0]?.caseStudiesSection?.includeSection && (
            <div className="w-full overflow-hidden">
              <CaseStudiesCarousalSection
                heading={landingPageData?.[0]?.caseStudiesSection?.heading}
                description={
                  landingPageData?.[0]?.caseStudiesSection?.description
                }
                data={landingPageData?.[0]?.caseStudiesSection?.data}
              />
            </div>
          )}

          {landingPageData?.[0]?.customerTestimonialSection?.includeSection && (
            <CustomerTestimonials
              data={
                landingPageData?.[0]?.customerTestimonialSection?.testimonials
              }
            />
          )}
          {landingPageData?.[0]?.productsSection?.includeSection && (
            <ProductsCarousalSection
              heading={landingPageData?.[0]?.productsSection.heading}
              data={landingPageData?.[0]?.productsSection.products}
            />
          )}
          {/* )}ProductsCarousalSection */}
          {landingPageData?.[0]?.faqsSection?.includeSection && (
            <FaqsSection
              heading={landingPageData?.[0]?.faqsSection?.heading}
              data={landingPageData?.[0]?.faqsSection?.data}
            />
          )}
          {landingPageData?.[0]?.contactUsSection?.includeSection && (
            <ContactForm
              heading={landingPageData?.[0]?.contactUsSection?.heading}
              description={landingPageData?.[0]?.contactUsSection?.description}
              disclaimer={landingPageData?.[0]?.contactUsSection?.disclaimer}
              img={landingPageData?.[0]?.contactUsSection?.img}
            />
          )}
          {landingPageData?.[0]?.bannerSection?.includeSection && (
            <BannerSection
              heading={landingPageData?.[0]?.bannerSection?.heading}
              btnText={landingPageData?.[0]?.bannerSection?.btnText}
              bgImage={landingPageData?.[0]?.bannerSection?.bgImage}
            />
          )}
        </main>
      </LandingLayout>
      {/* {landingPageData?.[0]?.slug?.current} */}
    </div>
  );
}
