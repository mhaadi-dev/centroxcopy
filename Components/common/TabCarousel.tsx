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
import classNames, { generateBlurDataURL, text_h3_class, text_h4_class, text_para_3 } from "@/helpers/common";
import Image from "next/image";
import { Toast } from "@/Components/Toast/toast";
import { ServiceViewContext } from "@/store/ServiceViewProivder";
import useSize from "@/helpers/customHooks/useWidthHook";
import CommonCardwithIcon from "./CommonCardwithIcon";
interface GradientCardProps {
  title: string;
  description: string;
  showHoverState?: boolean;
  hoveredCard?: number |null;
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
      "rounded-3xl flex flex-col gap-3 p-5 mt-10 cursor-pointer "
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
    <div className={classNames(text_h4_class)}>
      <span className="">{title}</span>
    </div>
    <span className={classNames(text_para_3)}>
      {description}
    </span>
  </section>
);
const Tabs = ({ tabs, setTabs, isGradientCardLayout = false }: any) => {
  const [intervalDuration, setIntervalDuration] = useState(15000); 
  const [resetTimeout, setResetTimeout] = useState<NodeJS.Timeout | null>(null); 
  
  useEffect(() => {
    // Set the first tab as current if no tab is currently selected
    if (!tabs.some((tab: any) => tab.current)) {
      setTabs((prevTabs: any) =>
        prevTabs.map((tab: any, index: number) => ({
          ...tab,
          current: index === 0,
        }))
      );
    }
  }, [setTabs, tabs]);

  const selectedTab =
    tabs.find((tab: any) => tab.current)?.name || tabs[0].name;

  useEffect(() => {
    const switchTab = () => {
      setTabs((prevTabs: any) => {
        const currentIndex = prevTabs.findIndex((tab: any) => tab.current);
        const nextIndex = (currentIndex + 1) % prevTabs.length;
        return prevTabs.map((tab: any, index: number) => ({
          ...tab,
          current: index === nextIndex,
        }));
      });
    };


    const interval = setInterval(() => {
      switchTab();
    }, intervalDuration);

    return () => clearInterval(interval); 
  }, [setTabs, intervalDuration]);

  const handleTabClick = (tabName: string) => {
  
    setTabs((prevTabs: any) =>
      prevTabs.map((prevTab: any) => ({
        ...prevTab,
        current: prevTab.name === tabName,
      }))
    );

    setIntervalDuration(20000);
    if (resetTimeout) clearTimeout(resetTimeout);

    const timeout = setTimeout(() => {
      setIntervalDuration(15000); 
    }, 20000);

    setResetTimeout(timeout); 
  };

  return (
    <div className="w-full">
      {/* Mobile Tabs */}
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
              "whitespace-nowrap py-2 text-[0.8rem] cursor-pointer text-center transition-colors duration-100"
            )}
            aria-current={tab.current ? "page" : undefined}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </a>
        ))}
      </nav>

      {/* Desktop Tabs */}
      <nav
        className={classNames(
          isGradientCardLayout && "px-[3rem]",
          "hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-2 items-center w-full"
        )}
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
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  );
};



export default Tabs;
interface TabCarouselProps {
  isCardLayout?: boolean;
  isGradientCardsLayoutwithImage?: boolean;
  cardsData?: any;
  gradientCardData?: any;
  headerTabs?:any
}
export const TabCarousel = ({
  isCardLayout = false,
  isGradientCardsLayoutwithImage = false,
  cardsData=[],
  gradientCardData=[],
  headerTabs=[]
}: TabCarouselProps) => {
  const { view } = useContext(ServiceViewContext);
  const { width } = useSize();
  const [showToast, setShowToast] = useState(false);
  // const industriesTabs = [
  //   { name: "Healthcare", href: "#", current: true },
  //   { name: "Fashion Retail", href: "#", current: false },
  //   { name: "Real Estate", href: "#", current: false },
  //   { name: "Fintech", href: "#", current: false },
  // ];
  // const servicesTabs = [
  //   { name: "Data Annotations", href: "#", current: true },
  //   { name: "LLM Development", href: "#", current: false },
  //   { name: "ML Ops", href: "#", current: false },
  // ];
  const [tabs, setTabs] = useState(
    headerTabs
  );

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

  const [lastHoveredCard, setLastHoveredCard] = useState<number | null>(null);
  const [currentHoverCard, setCurrentHoverCard] = useState<number | null>(0);
  // const [blurDataURLs, setBlurDataURLs] = useState<Record<number, string>>({});

  const handleMouseEnter = useCallback((cardNumber: number) => {
    setLastHoveredCard(cardNumber);
    setCurrentHoverCard(cardNumber);
  }, []);

  const handleMouseLeave = useCallback((cardNumber: number) => {
    setLastHoveredCard(null);
    setCurrentHoverCard(null);
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
      <section className="relative py-12  w-full md:w-5/5 mx-auto 2xl:w-full  overflow-hidden bg-black sm:py-16 lg:py-4 ">
        <div className=" p-2">
          <div className="container  ">
            <div className="text-white   rounded-3xl flex flex-col gap-10 h-full xlc:w-full max-w-[100%]  border-opacity-40">
              <Tabs tabs={tabs} setTabs={setTabs} isGradientCardLayout={isGradientCardsLayoutwithImage} />
              <div className="">
                {tabs?.map(
                  (tab:any, index:number) =>
                    tab?.current && (
                      <div
                        key={index}
                        className="flex flex-col sm:gap-4  3xl:justify-around  "
                      >
                        {isCardLayout && (
                          <>
                          <div className="flex flex-col gap-y-2">
                            <h3 className={classNames(text_h3_class)}>
                              {cardsData[index]?.subInfo?.heading}
                            </h3>
                            <p className={classNames(text_para_3)}>
                              Read in detail about our services.
                            </p>
                          </div>
                            
                            <div
                              // className={`grid grid-cols-1 sm:grid-cols-2   lg:${`grid-cols-${Math.min(cardsData.length, 3)}`} mt-4 2xl:grid-cols-auto gap-4`}
                              // className={`flex flex-wrap  gap-4`}
                            >
                              <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto "
                                style={{
                                  gridTemplateColumns: width!=null && width > 650 ? 
                                    "repeat(auto-fit, minmax(350px, 1fr))":"repeat(auto-fit, minmax(300px, 1fr))",
                                }}
                              >
                                {cardsData?.[index]?.data.map(
                                  (card: any, index: any) => {
                                    return (
                                      <CommonCardwithIcon
                                        key={index}
                                        Icon={card?.icon}
                                        heading={card.heading}
                                        description={card.description}
                                        linkText="Learn More"
                                        linkWithIcon={true}
                                      />
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </>
                        )}
                        <div
                          className="flex flex-col gap-4 xl:flex-row gap-x-[0rem] lg:gap-x-16 2xl:gap-x-24"
                        >
                          {isGradientCardsLayoutwithImage && (
                            <>
                              
                              <div className=" w-full xl:w-1/2 flex flex-col gap-y-0">
                                {gradientCardData?.length > 0 && headerTabs?.length>0 ? gradientCardData[index]?.data?.map((card:any,i:number)=>{
                                  return  <GradientCard
                                  title={
                                    card?.heading
                                  }
                                  description={
                                   card?.description
                                  }
                                  showHoverState={lastHoveredCard === i}
                                  hoveredCard={currentHoverCard}
                                  onMouseEnter={() => handleMouseEnter(i)}
                                  onMouseLeave={() => handleMouseLeave(i)}
                                  onClick={() => {
                                    setShowToast(!showToast);
                                  }}
                                  hoverOnGradient={true}
                                />
                                }):""}
                                {/* <GradientCard
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
                                /> */}
                              </div>
                              <div className="w-full flex xl:w-1/2 mt-10  items-center justify-center">
                                <div className="w-full" >
                                  <Image
                                    className={classNames(
                                      "w-full h-full",
                                      "block"
                                    )}
                                    // loading="eager"
                                    src={tabs[index]?.current && gradientCardData[index]?.image}
                                    alt="image"
                                    loading={
                                      width && width <= mobileWidth
                                        ? "lazy"
                                        : "eager"
                                    }
                                 
                                  />
                                 
                                  {/* {tabs[0]?.current && (
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
                                  )} */}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {/* {!isCardLayout && (
                          <Button
                            content={tab.current?  tab?.cta : "Get Started"}
                            className="!w-[auto] mx-auto my-4 !py-[0.5rem] !px-[1rem] 2xl:!py-[1rem] 2xl:!px-[2rem]"
                            Icon={Arrow}
                            isLefticon={false}
                          />
                        )} */}
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
