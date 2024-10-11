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
  useEffect(() => {
    if (width != null && width > 1024 && showMenu == true) {
      setShowMenu(false);
    }
  }, [width]);
  const data = [
    {
      navItemText: "Services",
      onClick: () => {
        if (pathname === "/") {
          const solutionsComponent = document.getElementById("services");
          if (solutionsComponent) {
            solutionsComponent.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(true));
          router.push(`/`);
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
            heading: "Custome LLM Development",
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
            heading: "Data Annotation & labeling",
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
          const solutionsComponent = document.getElementById("solutions");
          if (solutionsComponent) {
            solutionsComponent.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(true));
          router.push(`/`);
        }
      },
      columnData: [
        [
          {
            heading: "Snap & Measure",
            description: "Body of the card...",
            bg_img: navSolutionBG1,
            isCardNavItem: true,
            // image: ShootingStar,
          },
        ],
        [
          {
            heading: "Real-estate Chatbot",
            description: "Description here,,,",
            bg_img: navSolutionBG2,
            isCardNavItem: true,
            // image: ShootingStar,
          },
        ],
        [
          {
            heading: "Mental Health Chatbot",
            description: "Description here,,,",
            bg_img: navSolutionBG3,
            isCardNavItem: true,
            // image: ShootingStar,
          },
        ],
        [
          {
            heading: "Labeling Dresses with AI",
            description: "Description here,,,",
            bg_img: navSolutionBG4,
            isCardNavItem: true,
            // image: ShootingStar,
          },
        ],
      ],
    },
    {
      navItemText: "Industries",
      onClick: () => {
        if (pathname === "/") {
          const solutionsComponent = document.getElementById("industries");
          if (solutionsComponent) {
            solutionsComponent.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(true));
          router.push(`/`);
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
      navItemText: "Resources",
      onClick: () => {
        if (pathname === "/") {
          const solutionsComponent = document.getElementById("");
          if (solutionsComponent) {
            solutionsComponent.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(true));
          router.push(`/`);
        }
      },
      columnData: [
        [
          {
            heading: "Blogs",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Case Studies",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Guides",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "White Papers",
            description: "Description here,,,",
            image: "",
          },
        ],
      ],
    },
    {
      navItemText: "Company",
      onClick: () => {
        if (pathname === "/") {
          const solutionsComponent = document.getElementById("");
          if (solutionsComponent) {
            solutionsComponent.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          localStorage.setItem(SHOW_SOLUTIONS, JSON.stringify(true));
          router.push(`/`);
        }
      },
      columnData: [
        [
          {
            heading: "About Us",
            description: "Description here,,,",
            image: ShootingStar,
          },
          {
            heading: "Team",
            description: "Description here,,,",
            image: "",
          },
          {
            heading: "Careers",
            description: "Description here,,,",
            image: "",
          },
        ],
      ],
    },
  ];
  return (
    <nav className="flex justify-center fixed z-40 top-0 left-0 py-4 sm:h-24 items-center w-full  backdrop-filter backdrop-blur-xl ">
      <div className="flex items-center justify-between w-[90%] mx-auto  relative  ">
        <Image
          src={AppLogo}
          alt="Logo"
          priority={true}
          loading="eager"
          className="w-[7rem] sm:w-[20%] lg:w-[15%] 2xl:w-[12%]  cursor-pointer"
          onClick={() => router.push(`/`)}
        />

        <div className="hidden xl:flex gap-x-[5%]  xl:gap-x-[4rem] justify-between w-full sm:px-10 lg:px-0 md:w-[auto]">
          {data.map((navItem) => {
            return (
              <NavLink
                text={navItem.navItemText}
                onClick={navItem.onClick}
                columnData={navItem?.columnData}
                isMobileView={showMenu}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-6">
          {!showMenu && (
            <Button
              content="Contact Us"
              onClick={() => router.push(`/contact`)}
              Icon={Arrow}
              isLefticon={false}
              iconClassName="-mt-1"
              className="z-[1] !py-1 transition-opacity duration-500 opacity-100"
            />
          )}
          <div
            className="xl:hidden text-white p-3 hover:rounded-full hover:bg-gray-600 hover:bg-opacity-6 flex flex-col gap-y-1 hover"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            {showMenu && <XMarkIcon className="text-white w-6" />}
            {!showMenu && (
              <>
                <span className="w-5 h-1 bg-white"></span>
                <span className="w-5 h-1 bg-white"></span>
                <span className="w-5 h-1 bg-white"></span>
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
      <p className="font-semibold my-2 uppercase">{navItem.navItemText}</p>
      {index === 0
        ? navItem?.columnData?.map((subItems, index) => {
            return subItems.map((item, index) => (
              <div className="my-2" key={index}>
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
          })}
    </div>
  ))}
</nav>

      </div>
    </nav>
  );
};
