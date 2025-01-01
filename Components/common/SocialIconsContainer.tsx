"use client";
import Image from 'next/image';
import React from 'react';
import X from "@/assets/X.webp";
import linkedin from "@/assets/linkedin.svg"
import facebook from "@/assets/Facebook-Logo.svg"
import classNames, { text_para_2 } from '@/helpers/common';

interface SocialIconsContainerProps {
  className?: string;
}

const SocialIconsContainer: React.FC<SocialIconsContainerProps> = ({ className }) => {
  const handleShare = (platform: "twitter" | "linkedin" | "email" | "facebook") => {
    const currentUrl = window.location.href; // Get the current blog URL
    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(currentUrl)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=Check this out!&body=${encodeURIComponent(currentUrl)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank"); // Open the share URL in a new tab
  };

  return (
    <div className={classNames('bg-gray-800/80 border-2 flex gap-x-4 p-5 items-center text-white border-gray-100/60 rounded-xl', className)}>
      <p className={classNames(text_para_2, "font-medium")}>Share</p>
      <div className="flex gap-x-3 items-center">
        <button
          className="p-2 bg-gray-700/90 rounded-lg"
          onClick={() => handleShare("twitter")}
        >
          <Image src={X} alt="Twitter" />
        </button>
        <button
          className="p-2 bg-gray-700/90 rounded-lg"
          onClick={() => handleShare("linkedin")}
        >
          <Image src={linkedin} alt="LinkedIn" />
        </button>
        {/* <button
          className="p-2 bg-gray-700/90 rounded-lg"
          onClick={() => handleShare("email")}
        >
          <Image src={X} alt="Email" />
        </button> */}
        <button
          className="p-0 bg-gray-700/90 rounded-lg w-[70px] "
          onClick={() => handleShare("facebook")}
        >
          <Image src={facebook} alt="Facebook" />
        </button>
      </div>
    </div>
  );
};

export default SocialIconsContainer;
