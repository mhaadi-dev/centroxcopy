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
import Linkedin from "@/assets/linkedin.svg";
import X from "@/assets/twitter.svg";
import health from "@/assets/industries/health.svg"
import retail from "@/assets/industries/retail.svg"
import realestate from "@/assets/industries/real-estate.svg"
import fintech from "@/assets/industries/fintech.svg"
import Mail from "@/assets/mail.webp";
import annotation_and_labelling from "@/assets/servicesnav/Database.svg"
import stack from "@/assets/servicesnav/Stack.svg"
import Link from "next/link";
import smiley from "@/assets/companynav/Smiley.svg"
import team from "@/assets/companynav/UsersThree.svg"
import phonecall from "@/assets/companynav/PhoneCall.svg"

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
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
  
  
    const interval = setInterval(checkAndScroll, 300);
  
    
    setTimeout(() => {
      clearInterval(interval);
    }, 5000); 
  };
  
  const data = [
    {
      navItemText: "Services",
      onClick: () => {
        // if (pathname === "/") {
        //   scrollToSection("services");
        // } else {
        //   localStorage.setItem("services", JSON.stringify(true));
        //   router.push(`/`);
        //   setTimeout(() => {
        //     scrollToSection("services");
        //   }, 500);
        // }
        // if(showBackdrop){
        //   setShowBackdrop(true)
        // }else{
        //   setShowBackdrop(!showBackdrop);
        // }
      },
      columnData: [
        [
          {
            heading: "Custom LLM Development",
            description: "Bringing your vision to reality by tailoring LLM development as per your needs.",
            image: ShootingStar,
            link:"/services/custom-llm-dev"
          },
          {
            heading: "Custom Chatbot Development",
            description: "Get a reliable AI chatbot assistant providing focused responses; reducing your burden.",
            image: "",
            link:"/services/custom-chatbot-dev"
          },
          {
            heading: "Fine-Tuning & Optimization",
            description: "Fine tune and optimize your model to receive your desired outcomes.",
            image: "",
            link:"/services/ai-finetuning"
          },
          {
            heading: "Agentic AI",
            description: "Experience powerful performance with Intelligent AI Agents.",
            image: "",
            link:"/services/ai-agents"
          },
         
        ],
        [
          {
            heading: "Annotation & Labeling",
            description: "Enrich your models performance; through quality data processing.",
            image: annotation_and_labelling,
            link:"/services/data-annotations-and-labelling "
          },
          {
            heading: "Data Validation & Quality Assurance",
            description: "Experience finest AI performance with the accurate and validated data.",
            image: "",
            link:"/services/data-validation"
          },
        ],
        [
          {
            heading: "Deployment & Scaling",
            description: "Experience smooth and scalable ML Ops integration contributing quality performance.",
            image: stack,
            link:"/services/custom-llm-dev"
          },
          {
            heading: "Optimization",
            description: "Optimize your model and receive precise and accurate results.",
            image: "",
            link:"/services/model-optimization"
          },
          {
            heading: "Evaluation",
            description: "Analyze your model performance to build a more efficient solution for the market.",
            image: "",
            link:"/services/evaluation"
          },
         
        ],
       
      ],
    },
    {
      navItemText: "Solutions",
      onClick: () => {
        // if (pathname === "/") {
        //   scrollToSection("solutions");
        // } else {
        //   localStorage.setItem("solutions", JSON.stringify(true));
        //   router.push(`/`);
        //   setTimeout(() => {
        //     scrollToSection("solutions");
        //   }, 500);
        // }
        // if(showBackdrop){
        //   setShowBackdrop(true)
        // }else{
        //   setShowBackdrop(!showBackdrop);
        // }
      },
      columnData: [
        [
          {
            heading: "Snap & Measure",
            description: "Making measurements convenient for apparel businesses specially.",
            bg_img: navSolutionBG1,
            isCardNavItem: true,
            link:"/solutions/snap-and-measure"
          },
        ],
        [
          {
            heading: "Real-estate Chatbot",
            description: "Get your complex analysis done within a few seconds through this efficient AI assistant.",
            bg_img: navSolutionBG2,
            isCardNavItem: true,
            link:"/solutions/real-estate-chatbot"
          },
        ],
        [
          {
            heading: "Mental Health Chatbot",
            description: "Find your 24/7 reliable emotional support and experience an uplifted mental health.",
            bg_img: navSolutionBG3,
            isCardNavItem: true,
            link:"/solutions/mental-health-chatbot"
          },
        ],
        [
          {
            heading: "Labeling Dresses with AI",
            description: "Automate your fashion e-commerce business with an AI solution that ensures accurate tagging.",
            bg_img: navSolutionBG4,
            isCardNavItem: true,
            link:"/solutions/labelling-dresses-with-ai"
          },
        ],
      ],
    },
    {
      navItemText: "Industries",
      onClick: () => {
        // if (pathname === "/") {
        //   scrollToSection("industries");
        // } else {
        //   localStorage.setItem("industries", JSON.stringify(true));
        //   router.push(`/`);
        //   setTimeout(() => {
        //     scrollToSection("industries");
        //   }, 500);
        // }
       
          // setShowBackdrop(!showBackdrop);
        
        
      },
      columnData: [
        [
          {
            heading: "Health",
            description: "Ensure rapid and efficient healthcare through our intelligent GenAI solutions.",
            image: health,
            link:"/industries/health"
          },
          {
            heading: "Fintech",
            description: "Let Gen AI powered solutions handle the complex computation for your financial affairs.",
            image: fintech,
            link:"/industries/fintech"
          },
          {
            heading: "Retail",
            description: "Empower your retail business with GenAI to experience significant growth.",
            image: retail,
            link:"/industries/retail"
          },
          {
            heading: "Real-estate",
            description: "Experience excellence by automating your real estate sector through GenAI based solutions.",
            image: realestate,
            link:"/industries/real-estate"
          },
        ],
      ],
    },
    
    {
      navItemText: "Company",
      onClick: () => {
        // router.push("/about-us"); 
          // setShowBackdrop(!showBackdrop);  
      },
      columnData: [
        [
          {
            heading: "About us",
            description: "Learn more about our journey,values, vision and mission for the AI revolution.",
            image: smiley,
            link:"/about-us"
          },
          {
            heading: "Team",
            description: "Find the team of passionate AI experts, driven to bring your vision to reality.",
            image: team,
            link:"/team"
          },
          {
            heading: "Contact us",
            description: "Feel free to reach out to us for a consultancy session with our AI experts.",
            image: phonecall,
            link:"/contact"
          },
          
        ],
      ],
      socialIcons:[
        {
          icon:Linkedin,
          link:"https://www.linkedin.com/company/centroxai"
        },
        {
          icon:X,
          link:"https://twitter.com/CentroxAI"
        }
      ]
    },

  ];
  
  return (
    <>
    {showBackdrop&&<section className="h-screen w-full absolute bg-black/80 z-30 "></section>}
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
                socialIcons={navItem?.socialIcons}
                setShowBackdrop={setShowBackdrop}
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
          {pathname=="/blogs" && !showMenu &&   <button
            onClick={() => {router.push("/blogs/search")}}
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
  className={`bg-black px-3 z-[1] py-4   overflow-y-auto w-[19rem] absolute -left-[6%] top-[3.5rem] transform transition-transform duration-700 ease-in-out opacity-100 ${
    showMenu ? "translate-y-0 opacity-100" : "-translate-y-[10000px] opacity-0"
  }`}
  style={{ height: "calc(100vh - 85px)" }}
>
  {data?.map((navItem, index) => (
    <div key={index} className="text-gray-100 ">
      <p className="font-semibold mt-4 uppercase hover:text-blue-azure" onClick={()=>{navItem?.onClick();  setShowMenu((prev) => !prev);}}>{navItem.navItemText}</p>
      {index === 0
        ? navItem?.columnData?.map((subItems, index) => {
            return subItems.map((item, index) => (
              <div className="my-[0.3rem] " key={index}>
                <h3 className="w-full flex gap-x-2 ">
                  <Link
                    href={item.link}
                    className={`${
                      index === 0 || navItem?.columnData?.length === 1
                        ? "font-semibold mt-1"
                        : "font-normal"
                    } text-sm`}
                    onClick={()=>{setShowMenu((prev) => !prev)}}
                  >
                    {item.heading+ ""}
                  </Link>
                </h3>
              </div>
            ));
          })
        : navItem?.columnData?.map((subItems, index) => {
            return <>
          {  subItems.map((item, index) => (
              <div key={index}>
                <h3 className="w-full flex gap-x-2">
                  <Link href={item.link} className="font-semibold text-base" onClick={()=>{setShowMenu((prev) => !prev)}} >
                    {item.heading + ""}
                  </Link>
                </h3>
              </div>
            ))}
            {navItem?.socialIcons &&  <div className="flex gap-6 my-3">
           {navItem?.socialIcons?.length && navItem?.socialIcons?.map((icon,index)=>{
          return <Link href={icon?.link} key={index}>
            <Image src={icon?.icon} alt="social icon"></Image>
          </Link>
        })}
        </div>}
            </>
          })}
    </div>
  ))}
</nav>

      </div>
    </nav> 
    </>
    
    
    
  );
};
