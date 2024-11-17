"use client";
import AppLogo from "@/assets/LogoWhite.png";
import { Button } from "../Button.js/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SHOW_SERVICES, SHOW_SOLUTIONS } from "@/helpers/enums";
import Arrow from "@/assets/RightArrow.svg";
import { NavLink } from "./NavLink";
import ShootingStar from "@/assets/shootingstar.webp";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useSize from "@/helpers/windowWidth";
import navSolutionBG1 from "@/assets/navSolutionBG1.webp";
import navSolutionBG2 from "@/assets/navSolutionBG2.webp";
import navSolutionBG3 from "@/assets/navSolutionBG3.webp";
import navSolutionBG4 from "@/assets/navSolutionBG4.webp";
import Linkedin from "@/assets/LinkedIn.webp";
import X from "@/assets/X.webp";
import Mail from "@/assets/mail.webp";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useSize();
  const [isClient,setIsClient]=useState(false)
  useEffect(() => {
    if (width != null && width > 1024 && showMenu == true) {
      setShowMenu(false);
    }
  }, [width]);
  useEffect(()=>{
   setIsClient(true)
  },[])
  const scrollToSection = (id) => {
    const checkAndScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        clearInterval(interval);
      }
    };
  
  
    const interval = setInterval(checkAndScroll, 100);
  
    
    setTimeout(() => {
      clearInterval(interval);
    }, 5000); 
  };
  
  const data = [
    {
      navItemText: "Services",
      onClick: () => {
        if (pathname === "/") {
          scrollToSection("services");
        } else {
          localStorage.setItem("services", JSON.stringify(true));
          router.push(`/`);
          setTimeout(() => {
            scrollToSection("services");
          }, 500);
        }
      },
      columnData: [
        [
          {
            heading: "Generate AI",
            description: "Description here",
            image: ShootingStar,
          },
          {
            heading: "Custom LLM Development",
            description: "Description here",
            image: "",
          },
          {
            heading: "Custom Chatbot Development",
            description: "Description here",
            image: "",
          },
          {
            heading: "AI Agent",
            description: "Description here",
            image: "",
          },
        ],
        [
          {
            heading: "Data Annotation",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Data Annotation & Labeling",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Data Validation",
            description: "Description here,,,",
            image: "",
          },
        ],
        [
          {
            heading: "Model Development",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Specialized Model Dev",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "AI Fine Tuning",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "AI Algorithm Design",
            description: "Description here,,,",
            image: "",
          },
        ],
        [
          {
            heading: "ML Ops",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "AI Model Deployment",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Model Optimization",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "ML Ops Consultation",
            description: "Description here,,,",
            image: "",
          },
        ],
      ],
    },
    {
      navItemText: "Solutions",
      onClick: () => {
        if (pathname === "/") {
          scrollToSection("solutions");
        } else {
          localStorage.setItem("solutions", JSON.stringify(true));
          router.push(`/`);
          setTimeout(() => {
            scrollToSection("solutions");
          }, 500);
        }
      },
      columnData: [
        [
          {
            heading: "Snap & Measure",
            description: "Body of the card...",
            bg_img: navSolutionBG1,
            isCardNavItem: true,
          },
        ],
        [
          {
            heading: "Real-estate Chatbot",
            description: "Description here,,,",
            bg_img: navSolutionBG2,
            isCardNavItem: true,
          },
        ],
        [
          {
            heading: "Mental Health Chatbot",
            description: "Description here,,,",
            bg_img: navSolutionBG3,
            isCardNavItem: true,
          },
        ],
        [
          {
            heading: "Labeling Dresses with AI",
            description: "Description here,,,",
            bg_img: navSolutionBG4,
            isCardNavItem: true,
          },
        ],
      ],
    },
    {
      navItemText: "Industries",
      onClick: () => {
        if (pathname === "/") {
          scrollToSection("industries");
        } else {
          localStorage.setItem("industries", JSON.stringify(true));
          router.push(`/`);
          setTimeout(() => {
            scrollToSection("industries");
          }, 500);
        }
      },
      columnData: [
        [
          {
            heading: "Health",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Fintech",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Retail",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Real-estate",
            description: "Description here,,,",
            image: "",
          },
        ],
      ],
    },
    {
      navItemText: "About us",
      onClick: () => {
        router.push("/about-us");
      },
      columnData: [
        [
          {
            heading: "Health",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Fintech",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Retail",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Real-estate",
            description: "Description here,,,",
            image: "",
          },
        ],
      ],
    },
    {
      navItemText: "Team",
      onClick: () => {
        router.push("/team");
      },
      columnData: [
        [
          {
            heading: "Health",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Fintech",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Retail",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Real-estate",
            description: "Description here,,,",
            image: "",
          },
        ],
      ],
    },
  ];
  
  return (
    <nav className="flex  justify-center fixed z-40 top-0 left-0 py-4 sm:h-24 items-center w-full  backdrop-filter backdrop-blur-xl ">
      <div className="flex items-center justify-between w-[90%] mx-[1.5rem] 2xl:mx-[15rem] max-w-[2500px]  relative  ">
        <Image
          src={AppLogo}
          alt="Logo"
          priority={true}
          loading="eager"
          className="w-[6rem] sm:w-[15%] lg:w-[9%] 2xl:w-[10%]  cursor-pointer"
          onClick={() => router.push(`/`)}
        />

        <div className="hidden xl:flex gap-x-[5%]  xl:gap-x-[4rem] justify-between w-full sm:px-10 lg:px-0 md:w-[auto]">
          {data.map((navItem,index) => {
            return (
              <NavLink
                text={navItem.navItemText}
                onClick={navItem.onClick}
                columnData={navItem?.columnData}
                isMobileView={showMenu}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex  items-center  gap-x-1 sm:gap-x-6">
          {isClient && !showMenu && (
            <Button
              content="Contact Us"
              onClick={() => router.push(`/contact`)}
              Icon={width!=null && width>650 && Arrow}
              isLefticon={false}
              iconClassName="-mt-1"
              className="z-[1] !px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.6rem] transition-opacity duration-500 opacity-100"
            />
          )}
           {pathname=="/case-studies" && !showMenu &&   <button
            onClick={() => {router.push("/case-studies/search")}}
            className="lg:hidden text-white p-1 ml-2 rounded-full bg-gray-700/80 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 30 30"
            >
              <path
                fill="white"
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
              ></path>
            </svg>
          </button>}
          <div
            className="xl:hidden text-white p-3 hover:rounded-full hover:bg-gray-600 hover:bg-opacity-6 flex flex-col gap-y-1 hover"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
           
            {showMenu && <XMarkIcon className="text-white w-6" />}
            {!showMenu && (
              <>
                <span className="w-4 h-[2px] bg-white rounded-[3px]"></span>
                <span className="w-4 h-[2px] bg-white rounded-[3px]"></span>
                <span className="w-4 h-[2px] bg-white rounded-[3px]"></span>
              </>
            )}
          </div>
        </div>




          {/* IN MOBILE VIEW */}
          <nav
  className={`bg-black px-3 z-[1] py-4 overflow-y-auto w-[19rem] absolute -left-[6%] top-[3.5rem] transform transition-transform duration-700 ease-in-out opacity-100 ${
    showMenu ? "translate-y-0 opacity-100" : "-translate-y-[10000px] opacity-0"
  }`}
  style={{ height: "calc(100vh - 85px)" }}
>
  {data?.map((navItem, index) => (
    <div key={index} className="text-gray-100">
      <p className="font-semibold mt-4 uppercase hover:text-blue-azure" onClick={()=>{navItem?.onClick();  setShowMenu((prev) => !prev);}}>{navItem.navItemText}</p>
      {/* {index === 0
        ? navItem?.columnData?.map((subItems, index) => {
            return subItems.map((item, index) => (
              <div className="my-[0.3rem]" key={index}>
                <h3 className="w-full flex gap-x-2">
                  <span
                    className={`${
                      index === 0 || navItem?.columnData?.length === 1
                        ? "font-semibold"
                        : "font-normal"
                    } text-sm`}
                  >
                    {item.heading}
                  </span>
                </h3>
              </div>
            ));
          })
        : navItem?.columnData?.map((subItems, index) => {
            return subItems.map((item, index) => (
              <div key={index}>
                <h3 className="w-full flex gap-x-2">
                  <span className="font-semibold text-base">
                    {item.heading}
                  </span>
                </h3>
              </div>
            ));
          })} */}
    </div>
  ))}
</nav>

      </div>
    </nav>
  );
};
