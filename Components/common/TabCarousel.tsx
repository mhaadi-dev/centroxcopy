"use client";
import BackgroundImage from "@/assets/ServicesLines.svg";
import DataCurationImage from "@/assets/DataCuration.webp";
import DataLabelingImage from "@/assets/DataLabelling.webp";
import CustomDataImage from "@/assets/CustomDataWorkflow.webp";
import BuildingAi from "@/assets/BuildingAI.webp";
import ArrowIcon from "@/assets/POCArrow.svg";
import ModDev2 from "@/assets/ModDev2.webp";
import AIDev3 from "@/assets/ModDev3.webp";
import AIDev2 from "@/assets/AI2.webp";
import ModDev3 from "@/assets/AI3.webp";
import DeployingAi from "@/assets/DeployingAI.webp";
import Arrow from "@/assets/RightArrow.svg";
import LabelIcon from "@/assets/labelIcon.webp";

import {
  ReactEventHandler,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button } from "@/Components/Button.js/button";
import classNames, { generateBlurDataURL } from "@/helpers/common";
import Image from "next/image";
import { Toast } from "@/Components/Toast/toast";
import { ServiceViewContext } from "@/store/ServiceViewProivder";
import useSize from "@/helpers/customHooks/useWidthHook";
import CommonCardwithIcon from "./CommonCardwithIcon";
interface GradientCardProps {
  title: string;
  description: string;
  showHoverState?: boolean;
  hoveredCard?: number;
  onMouseEnter?: ReactEventHandler;
  onMouseLeave?: ReactEventHandler;
  onClick?: () => void;
  hoverOnGradient?: boolean;
}

const mobileWidth = 800;

const GradientCard: React.FC<GradientCardProps> = ({
  title,
  description,
  onMouseEnter,
  onMouseLeave,
  onClick,
  showHoverState,
  hoveredCard,
  hoverOnGradient = false,
}) => (
  <section
    className={classNames(
      "rounded-xl flex flex-col gap-3 p-5 mt-10 cursor-pointer "
    )}
    style={{
      background:
        showHoverState && hoverOnGradient
          ? "radial-gradient(88.47% 182.54% at 0% 0%, rgba(6, 119, 230, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)"
          : "",
      //   boxShadow: showHoverState && !hoverOnGradient
      //     ? "0px 0px 15px 6px rgba(6, 119, 230, 0.4)"
      //     : "",
      border: "2px solid rgba(6, 119, 230, 0.2)",
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={() => onClick?.()}
  >
    <div className="flex justify-between items-center">
      <span className="text-xl md:text-3xl text-white font-bold">{title}</span>
    </div>
    <span className="text-md md:text-xl text-white-offWhite font-normal">
      {description}
    </span>
  </section>
);
const Tabs = ({ tabs, setTabs }: any) => {
  const selectedTab =
    tabs.find((tab: any) => tab.current)?.name || tabs[0].name;

  useEffect(() => {
    const interval = setInterval(() => {
      setTabs((prevTabs: any) => {
        const currentIndex = prevTabs.findIndex((tab: any) => tab.current);
        const nextIndex = (currentIndex + 1) % prevTabs.length;
        return prevTabs.map((tab: any, index: number) => ({
          ...tab,
          current: index === nextIndex,
        }));
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [setTabs]);

  return (
    <div className="w-full">
      <nav
        className="grid grid-cols-2 gap-2 w-full lg:hidden"
        aria-label="Tabs"
      >
        {tabs.map((tab: any) => (
          <a
            key={tab.name}
            className={classNames(
              tab.current
                ? "text-white bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black border-2 bg-[length:100%_160%] border-[#056EE199] rounded-xl"
                : "text-white hover:bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black bg-[length:100%_160%] hover:text-white hover:border-[#056EE199] border-2 border-gray-700 rounded-xl",
              "whitespace-nowrap py-2 px-6 text-base font-semibold cursor-pointer text-center transition-colors duration-100"
            )}
            aria-current={tab.current ? "page" : undefined}
            onClick={() =>
              setTabs((prevTabs: any) =>
                prevTabs.map((prevTab: any) => ({
                  ...prevTab,
                  current: prevTab.name === tab.name,
                }))
              )
            }
          >
            {tab.name}
          </a>
        ))}
      </nav>

      <nav
        className=" hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-2 items-center w-full"
        aria-label="Tabs"
      >
        {tabs.map((tab: any) => (
          <a
            key={tab.name}
            className={classNames(
              tab.current
                ? "text-white bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black border-2 bg-[length:100%_160%] border-[#056EE199] rounded-xl"
                : "text-white hover:bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black bg-[length:100%_160%] hover:text-white hover:border-[#056EE199] border-2 border-gray-700 rounded-xl",
              "whitespace-nowrap py-2 px-2 text-2xl font-semibold cursor-pointer text-center transition-colors duration-100 z-10 w-full"
            )}
            aria-current={tab.current ? "page" : undefined}
            onClick={() =>
              setTabs((prevTabs: any) =>
                prevTabs.map((prevTab: any) => ({
                  ...prevTab,
                  current: prevTab.name === tab.name,
                }))
              )
            }
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

interface TabCarouselProps {
  isCardLayout?: boolean;
  isGradientCardsLayoutwithImage?: boolean;
  cardsData?: any;
}
export const TabCarousel = ({
  isCardLayout = false,
  isGradientCardsLayoutwithImage = false,
  cardsData,
}: TabCarouselProps) => {
  const { view } = useContext(ServiceViewContext);
  const { width } = useSize();
  const [showToast, setShowToast] = useState(false);
  const industriesTabs=[ { name: "Healthcare", href: "#", current: true },
  { name: "Fashion/Retail", href: "#", current: false },
  { name: "Real Estate", href: "#", current: false },
  { name: "Fintech", href: "#", current: false },]
  const servicesTabs=[{ name: "Data Annotations", href: "#", current: true },
  { name: "LLM Development", href: "#", current: false },
  { name: "ML Ops", href: "#", current: false },]
  const [tabs, setTabs] = useState(isCardLayout ? servicesTabs  : industriesTabs);

  useEffect(() => {
    let newTabs = [...tabs];
    let updatedTabs = newTabs?.map((x) => {
      if (view === x.name) {
        x.current = true;
        return x;
      }
      return {
        ...x,
        current: false,
      };
    });
    console.log("new tabs is", updatedTabs, view);
    setTabs(updatedTabs);
  }, [view]);

  const [lastHoveredCard, setLastHoveredCard] = useState<number>(1);
  const [currentHoverCard, setCurrentHoverCard] = useState<number>(0);
  // const [blurDataURLs, setBlurDataURLs] = useState<Record<number, string>>({});

  const handleMouseEnter = useCallback((cardNumber: number) => {
    setLastHoveredCard(cardNumber);
    setCurrentHoverCard(cardNumber);
  }, []);

  const handleMouseLeave = useCallback((cardNumber: number) => {
    setLastHoveredCard(0);
    setCurrentHoverCard(0);
  }, []);

  // const handleImageLoad = async () => {
  //   if (!blurDataURLs[currentHoverCard]) {
  //     let imageUrl = "";
  //     switch (currentHoverCard) {
  //       case 3:
  //         imageUrl = CustomDataImage.src;
  //         break;
  //       case 3:
  //         imageUrl = DataLabelingImage.src;
  //         break;
  //       default:
  //         imageUrl = DataCurationImage.src;
  //         break;
  //     }
  //     const blurredBase64 = await generateBlurDataURL(imageUrl);
  //     setBlurDataURLs((prevBlurDataURLs) => ({
  //       ...prevBlurDataURLs,
  //       [currentHoverCard]: blurredBase64,
  //     }));
  //   }
  // };

  return (
    <>
      <section className="relative py-12 w-5/5 mx-auto overflow-hidden bg-black sm:py-16 lg:py-4 ">
        <div className="">
          <div className="container mx-auto">
            <div className="text-white md:p-16  sm:p-8 rounded-3xl flex flex-col gap-20 h-full xlc:w-full max-w-[100%]  border-opacity-40">
              <Tabs tabs={tabs} setTabs={setTabs} />
              <div className="">
                {tabs?.map(
                  (tab, index) =>
                    tab?.current && (
                      <div
                        key={index}
                        className="flex flex-col sm:gap-4  3xl:justify-around  "
                      >
                        {isCardLayout && (
                          <>
                            <h3 className="text-[2rem] text-white font-semibold">
                              Data Solutions: The Foundation of High-Performing
                              LLMs
                            </h3>
                            <p className="text-[1.3rem] text-gray-100">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magnam, sunt! Assumenda veritatis tempore
                              porro magnam neque labore, itaque magni eum.
                            </p>
                            <div
                              className={`grid grid-cols-1 sm:grid-cols-2   lg:${`grid-cols-${Math.min(cardsData.length, 3)}`} mt-4 2xl:grid-cols-auto gap-4`}
                            >
                              {cardsData?.map((card: any, index: any) => {
                                return (
                                  <CommonCardwithIcon
                                    key={index}
                                    Icon={LabelIcon}
                                    heading="Annotation & Labelling"
                                    description="We leverage cutting-edge AI-powered annotation tools to efficiently process and label your data. But we don’t stop there, Our team of annotators then meticulously cross-verifies and refines the AI-generated annotations, ensuring the highest level of accuracy, consistency, and alignment with your specific use case."
                                    linkText="Learn More"
                                    linkWithIcon={true}
                                  />
                                );
                              })}
                            </div>
                          </>
                        )}
                        <div
                          className={`grid  ${isGradientCardsLayoutwithImage && "grid-cols-1"}  ${isGradientCardsLayoutwithImage && "2xl:grid-cols-2"} gap-10`}
                        >
                          {isGradientCardsLayoutwithImage && (
                            <>
                              {" "}
                              <div className="w-full  flex flex-col gap-4">
                                <GradientCard
                                  title={
                                    index === 0
                                      ? "Medical Text Generation"
                                      : index === 1
                                        ? "Algorithm Design"
                                        : "Model Serving"
                                  }
                                  description={
                                    index === 0
                                      ? "Automate the creation of clinical notes, discharge summaries, and other medical documents, freeing up valuable time for healthcare professionals and improving documentation accuracy."
                                      : index === 1
                                        ? "Design state of the art algorithm or enhance your existing architecture."
                                        : "Name the technology and we will serve your model the right way."
                                  }
                                  showHoverState={lastHoveredCard === 1}
                                  hoveredCard={currentHoverCard}
                                  onMouseEnter={() => handleMouseEnter(1)}
                                  onMouseLeave={() => handleMouseLeave(1)}
                                  onClick={() => {
                                    setShowToast(!showToast);
                                  }}
                                  hoverOnGradient={true}
                                />
                                <GradientCard
                                  title={
                                    index === 0
                                      ? "Data Labeling"
                                      : index === 1
                                        ? "Model Development"
                                        : "Model Deployment"
                                  }
                                  description={
                                    index === 0
                                      ? "Our rich pool of experts will label your data with the best quality possible."
                                      : index === 1
                                        ? "Build your model in an accustomed AI Environment ready to improve."
                                        : "Deploy your model On-premise or want us to set up your ML-Cloud?"
                                  }
                                  showHoverState={lastHoveredCard === 2}
                                  hoveredCard={currentHoverCard}
                                  onMouseEnter={() => handleMouseEnter(2)}
                                  onMouseLeave={() => handleMouseLeave(2)}
                                  onClick={() => {
                                    setShowToast(!showToast);
                                  }}
                                  hoverOnGradient={true}
                                />
                                <GradientCard
                                  title={
                                    index === 0
                                      ? "Custom Data Workflow"
                                      : index === 1
                                        ? "Model Training"
                                        : "Model Training"
                                  }
                                  description={
                                    index === 0
                                      ? "Get served with a personalized workflow for your ongoing data needs."
                                      : index === 1
                                        ? "Train your model for experiments and analysis."
                                        : "We can help optimize your model to perform in less time with better results."
                                  }
                                  showHoverState={lastHoveredCard === 3}
                                  hoveredCard={currentHoverCard}
                                  onMouseEnter={() => handleMouseEnter(3)}
                                  onMouseLeave={() => handleMouseLeave(3)}
                                  onClick={() => {
                                    setShowToast(!showToast);
                                  }}
                                  hoverOnGradient={true}
                                />
                              </div>
                              <div className="flex w-full items-center justify-center 2xl:items-end">
                                <div className="flex items-end  h-full sm:mt-5  py-2">
                                  {tabs[0]?.current && (
                                    <Image
                                      className={classNames(
                                        "w-full h-full",
                                        "block"
                                      )}
                                      // loading="eager"
                                      src={DataCurationImage}
                                      alt=""
                                      loading={
                                        width && width <= mobileWidth
                                          ? "lazy"
                                          : "eager"
                                      }
                                      // placeholder="blur"
                                      // onLoad={handleImageLoad}
                                      // blurDataURL={blurDataURLs[currentHoverCard]}
                                    />
                                  )}

                                  {tabs[1]?.current && (
                                    <Image
                                      className={classNames(
                                        "w-full h-[100%] lg:pt-3",
                                        "block"
                                      )}
                                      src={BuildingAi}
                                      alt=""
                                      loading={
                                        width && width <= mobileWidth
                                          ? "lazy"
                                          : "eager"
                                      }

                                      // loading="eager"
                                      // placeholder="blur"
                                      // onLoad={handleImageLoad}
                                      // blurDataURL={blurDataURLs[currentHoverCard]}
                                    />
                                  )}

                                  {tabs[2]?.current && (
                                    <Image
                                      className={classNames(
                                        "w-full h-[100%] lg:pt-2",
                                        "block"
                                      )}
                                      src={DeployingAi}
                                      alt=""
                                      loading={
                                        width && width <= mobileWidth
                                          ? "lazy"
                                          : "eager"
                                      }
                                      // loading="eager"
                                      // placeholder="blur"
                                      // onLoad={handleImageLoad}
                                      // blurDataURL={blurDataURLs[currentHoverCard]}
                                    />
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {!isCardLayout && (
                          <Button
                            content="Try Our AI Chatbot"
                            className="!w-[auto] mx-auto my-4"
                            Icon={Arrow}
                            isLefticon={false}
                          />
                        )}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
