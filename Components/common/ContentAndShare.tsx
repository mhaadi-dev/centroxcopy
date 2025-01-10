"use client";
import React, { useEffect, useState } from "react";
import TableOfContent from "./TableOfContent";
import SocialIconsContainer from "./SocialIconsContainer";
import useSize from "@/helpers/windowWidth";
import classNames, { text_para_3 } from "@/helpers/common";
import { slugify } from "@/sanity/lib/helpers";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton
} from "next-share";
import { usePathname } from "next/navigation";

enum tab {
  show_table = "table",
  show_share = "share"
}
const ContentAndShare = ({ headings }: any) => {
  const [showTab, setShowTab] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { width } = useSize();
  const [isFixedVisible, setIsFixedVisible] = useState(false);
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;

      if (target && target.tagName === "A" && target.hash) {
        e.preventDefault(); // Prevent default anchor link behavior
        const targetId = target.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
          let targetPosition = 0;
          if (width && width < 768) {
            targetPosition = targetElement.offsetTop + navbarHeight + 400;
          } else {
            targetPosition = targetElement.offsetTop + navbarHeight + 420;
          }

          // Scroll to the target element with smooth behavior and offset
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    const tocLinks = document.querySelectorAll('a[href^="#"]');
    tocLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick as EventListener);
    });

    return () => {
      tocLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  });
  const BASE_URL = "https://staging.centrox.ai";
  const pathname = usePathname();
  const currentUrl = BASE_URL + pathname;
  const handleEmailShare = () => {
    const subject = encodeURIComponent("Check this out!");
    const body = encodeURIComponent(`I found this interesting: ${currentUrl}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`,
      "_blank"
    );
  };
  useEffect(() => {
    const scrollHandler = () => {
      const triggerPosition = document.getElementById("blog-content")?.offsetTop || 200;
      setIsFixedVisible(window.scrollY > triggerPosition);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section className=" w-full sticky lg:hidden bottom-[0.2rem]">
      {isFixedVisible && showTab == tab.show_table && (
        <div className="flex flex-col gap-y-3 h-[30vh] mt-[-30vh]  !mx-0 overflow-y-auto bg-gray-900 rounded-t-lg px-3 py-2 ">
          <div className="flex justify-end">
            <button
              className="p-1 rounded-full bg-gray-300/30"
              onClick={() => {
                setShowTab(null);
              }}
            >
              <XMarkIcon className="text-white w-4" />
            </button>
          </div>

          <ol
            className={classNames(
              "text-[#E5E7EB] list- flex bg-gray-900   flex-col text-[0.9rem] 2xl:text-[1.05rem]",
              "list-inside"
            )}
          >
            {headings.map((heading: any, index: number) => {
              const anchorId = slugify(heading);
              return (
                <li
                  key={index}
                  className={classNames(
                    "w-full px-2 py-1 rounded-sm",
                    selectedIndex === index ? "bg-[#079DFC4D]" : ""
                  )}
                >
                  <a
                    href={`#${anchorId}`}
                    className={classNames(
                      selectedIndex == index
                        ? "text-[#E5E7EB] text-[0.75rem] lg:text-[0.75rem] 2xl:text-[1rem] hover:text-blue-azure"
                        : "text-gray-400 text-[0.75rem] lg:text-[0.75rem] 2xl:text-[1rem] hover:text-blue-azure"
                    )}
                    onClick={() => {
                      setSelectedIndex(index);
                      setShowTab(null);
                    }}
                  >
                    {heading}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      { isFixedVisible &&showTab == tab.show_share && (
        <div
          className={classNames(
            "flex flex-col gap-y-3 max-h-[8rem] -mt-[8rem]  transition-[max-height] duration-500 ease-in-out   !mx-0 overflow-y-auto bg-gray-900 rounded-t-lg px-3 py-2"
          )}
        >
          <div className="flex justify-end">
            <button
              className="p-1 rounded-full bg-gray-300/30"
              onClick={() => {
                setShowTab(null);
              }}
            >
              <XMarkIcon className="text-white w-4" />
            </button>
          </div>
          <div className="flex gap-x-3 justify-center items-center">
            <div className="w-full">
              <TwitterShareButton
                url={currentUrl}
                className="p-2 bg-gray-700/90 rounded-lg"
              >
                <TwitterIcon className="w-[80%]" round />
              </TwitterShareButton>
            </div>
            <div className="w-full">
              <LinkedinShareButton
                url={currentUrl}
                className="p-2 bg-gray-700/90 rounded-lg"
              >
                <LinkedinIcon className="w-[80%]" round />
              </LinkedinShareButton>
            </div>
            <div className="w-full">
              <FacebookShareButton
                url={currentUrl}
                className="p-2 bg-gray-700/90 rounded-lg "
              >
                <FacebookIcon className="w-[80%]" round />
              </FacebookShareButton>
            </div>
            <div className="w-full">
              <EmailShareButton
                url={currentUrl}
                className="p-2 bg-gray-700/90 rounded-lg "
                onClick={handleEmailShare}
              >
                <EmailIcon className="w-[80%]" round />
              </EmailShareButton>
            </div>
          </div>
        </div>
      )}
   {isFixedVisible &&   <div className="flex bg-gray-90    gap-x-3 items-center w-full">
        <div
          className="flex items-center w-full bg-gray-900 rounded-lg p-2 border-2 border-gray-100/60 justify-between gap-1"
          onClick={() => {
            setShowTab(tab.show_table);
          }}
        >
          <span className="text-[#E5E7EB] text-[0.75rem]">
            Table of Contents
          </span>
          <svg
            className="mt-[0.3px] text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
            />
          </svg>
        </div>

        <div
          onClick={() => {
            setShowTab(tab.show_share);
          }}
          className={classNames(
            "bg-gray-900 border-2 w-full justify-center  flex lg:hidden gap-x-4 px-2 py-1  items-center text-white border-gray-100/60 rounded-lg"
          )}
        >
          <p className={classNames(text_para_3, "text-center font-medium  ")}>
            Share
          </p>
        </div>
      </div>}
    </section>
  );
};

export default ContentAndShare;
