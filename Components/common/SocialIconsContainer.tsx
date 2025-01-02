"use client";
import Image from 'next/image';
import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterIcon, LinkedinIcon,EmailIcon, TwitterShareButton, EmailShareButton, LinkedinShareButton } from 'next-share';
import X from "@/assets/X.webp";
import linkedin from "@/assets/linkedin.svg";
import facebook from "@/assets/Facebook-Logo.svg";
import classNames, { text_para_2, text_para_3 } from '@/helpers/common';

interface SocialIconsContainerProps {
  className?: string;
}

const SocialIconsContainer: React.FC<SocialIconsContainerProps> = ({ className }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''; // Get the current blog URL

  const handleEmailShare = () => {
    const subject = encodeURIComponent('Check this out!');
    const body = encodeURIComponent(`I found this interesting: ${currentUrl}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className={classNames('bg-gray-800/80 border-2 flex gap-x-4 px-5 py-3 2xl:p-5 items-center text-white border-gray-100/60 rounded-xl', className)}>
      <p className={classNames( text_para_2,"font-medium")}>Share</p>
      <div className="flex gap-x-3 justify-center items-center">
         <div className='w-full'>
          <TwitterShareButton url={currentUrl} className="p-2 bg-gray-700/90 rounded-lg">
          <TwitterIcon className='w-full'  round />
        </TwitterShareButton>
        </div>
    <div className='w-full'>
       <LinkedinShareButton url={currentUrl} className="p-2 bg-gray-700/90 rounded-lg">
          <LinkedinIcon className='w-full'   round />
        </LinkedinShareButton>
    </div>
       <div className='w-full'>
         <FacebookShareButton url={currentUrl} className="p-2 bg-gray-700/90 rounded-lg ">
          <FacebookIcon className='w-full'   round />
        </FacebookShareButton>
       </div>
       <div className='w-full'>
        <EmailShareButton url={currentUrl} className="p-2 bg-gray-700/90 rounded-lg " onClick={handleEmailShare}>
        <EmailIcon className='w-full'   round />
       </EmailShareButton>
       </div>
 
     
      </div>
    </div>
  );
};

export default SocialIconsContainer;
