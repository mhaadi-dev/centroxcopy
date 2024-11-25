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
import classNames, { generateBlurDataURL, text_h3_class, text_h4_class, text_para_2, text_para_3 } from "@/helpers/common";
import Image from "next/image";
import { Toast } from "@/Components/Toast/toast";
import { ServiceViewContext } from "@/store/ServiceViewProivder";
import useSize from "@/helpers/customHooks/useWidthHook";
import CommonCardwithIcon from "./CommonCardwithIcon";
import { CalendlyWidget } from "./Calendly";
import Link from "next/link";
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

  // const selectedTab =
  //   tabs.find((tab: any) => tab.current)?.name || tabs?.[0]?.name;

  // useEffect(() => {
  //   const switchTab = () => {
  //     setTabs((prevTabs: any) => {
  //       const currentIndex = prevTabs.findIndex((tab: any) => tab.current);
  //       const nextIndex = (currentIndex + 1) % prevTabs.length;
  //       return prevTabs.map((tab: any, index: number) => ({
  //         ...tab,
  //         current: index === nextIndex,
  //       }));
  //     });
  //   };


  //   const interval = setInterval(() => {
  //     switchTab();
  //   }, intervalDuration);

  //   return () => clearInterval(interval); 
  // }, [setTabs, intervalDuration]);

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
  className={classNames(
    "grid gap-2 w-full lg:hidden",
    tabs.length % 2 === 0 ? "grid-cols-2" : "grid-cols-2" // Always maintain 2 columns
  )}
  aria-label="Tabs"
>
  {tabs.map((tab: any, index: number) => (
    <a
      key={tab.name}
      className={classNames(
        tab.current
          ? "text-white bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black border-2 bg-[length:100%_160%] border-[#056EE199] rounded-xl"
          : "text-white hover:bg-gradient-to-t from-[#056fe1ac] via-[#056fe19c] to-black bg-[length:100%_160%] hover:text-white hover:border-[#056EE199] border-2 border-gray-700 rounded-xl",
        "whitespace-nowrap py-2 text-[0.8rem] cursor-pointer text-center transition-colors duration-100",
        tabs.length % 2 !== 0 && index === tabs.length - 1 ? "col-span-2" : "" // Last tab spans full width if odd number of tabs
      )}
      style={{
        wordWrap: "break-word", // Ensures text wraps inside the tab
      }}
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
    "hidden lg:grid gap-x-4 gap-y-2 items-center  w-full",
    tabs.length === 2
      ? "lg:grid-cols-2"
      : tabs.length === 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-4" 
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
  caption?:string
  isBookingButton?:boolean
}
export const TabCarousel = ({
  isCardLayout = false,
  isBookingButton=false,
  isGradientCardsLayoutwithImage = false,
  cardsData=[],
  gradientCardData=[],
  headerTabs=[],
  caption=""
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
    // console.log("new tabs is", updatedTabs, view);
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
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto auto-rows-fr "
                                style={{
                                  gridTemplateColumns: width!=null && width > 650 ? 
                                    "repeat(auto-fit, minmax(300px, 1fr))":"repeat(auto-fit, minmax(300px, 1fr))",
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
                                        link={card?.link}
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
                                  key={i}
                                />
                                }):""}
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
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {caption && <p className={classNames(text_para_2,"text-center my-4 w-full mx-auto lg:w-[60%]")}>{caption}</p>}
                       
                        {!isCardLayout && !isBookingButton && (
                          <Link href={tab?.current ? tab?.href:""}><Button
                            content={tab.current?  tab?.cta : "Get Started"}
                            className="!w-[auto] mx-auto my-4 !py-[0.5rem] !px-[1rem] 2xl:!py-[1rem] 2xl:!px-[2rem]"
                            Icon={Arrow}
                            isLefticon={false}
                          /></Link>
                          
                        )} {!isCardLayout && isBookingButton && (
                          <CalendlyWidget
                            btnText="Try For Free"
                            isArrow
                            btnClassName="mx-auto my-4"
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
