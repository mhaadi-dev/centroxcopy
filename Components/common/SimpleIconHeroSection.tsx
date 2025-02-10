import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common';
import Image from 'next/image';
import React from 'react';
import dummyDisplay from "@/assets/dummyDisplay.webp";
import Icon1 from "@/assets/Icon-1.svg";
import serviceherobg from "@/assets/Servicebg.webp";
import checker from "@/assets/checker.webp";


interface Props {
    headingText?: string;
    paraText?: string;
    Icon?: any;
    image?: any;
    reverse?: boolean;
    bulletPoints?: boolean;
    bgImage1?: any;
    bgImage2?: any;
    bgClassName?: string;
    heroClassName?:string
    headerHeading?:string,
    headerDescription?:string
}

const SimpleIconHeroSection = ({ headingText, paraText, Icon, image, reverse, bulletPoints,bgImage1,bgImage2,bgClassName,heroClassName,headerHeading,headerDescription }: Props) => {
    return (
        <>  
        <section>
            {headerHeading && <h2 className={classNames(text_h2_class,"text-center")}>{headerHeading}</h2>}
            {headerDescription && <p className={classNames(text_para_2," w-[98%] sm:w-[67%]  mx-auto text-center")}>{headerDescription}</p>}
        </section>
        
        <section className={classNames('relative py-10 mt-8   lg:mt-12 2xl:mt-24 sm:pb-14 overflow-hidden',heroClassName)}>
              
            <div className={classNames(
                ' flex  inset-0   w-full  h-full',
                
                reverse ? "!justify-start object-contain ":"justify-end"
            )}>
                <Image 
                    src={bgImage1 || serviceherobg} 
                    alt='background' 
                    objectFit="cover" 
                    className={classNames("z-0 absolute w-full  bottom-0 object-contain lg:object-cover",bgClassName)}
                    quality={100}
                    priority

                />
            </div>

            <section className={classNames(
                section_wrapper_class,
                "relative z-10 flex flex-col lg:flex-row h-auto lg:min-h-[65vh] items-center gap-8 justify-between",
                reverse ? "lg:!flex-row-reverse" : "lg:flex-row"
            )}>
             
                <div className="w-full lg:w-1/2 z-10 flex flex-col h-full gap-y-3">
                   {Icon && <Image src={Icon1} alt="Icon" />}
                    {headingText && <h2 className={classNames(text_h2_class)}>{headingText}</h2>}
                    {paraText && <p className={classNames(text_para_2)}>{paraText}</p>}
                    {bulletPoints && (
                        <ul className='flex flex-col gap-y-4 mt-6'>
                            {[...Array(4)].map((_, index) => (
                                <li key={index} className='flex gap-x-4 items-start'>
                                    <Image src={checker} alt="checkicon" />
                                    <p className={classNames(text_para_2)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, incidunt.</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

          
                <div className={classNames(
                    "w-full lg:w-1/2 flex justify-center lg:justify-end",
                    reverse ? "lg:!justify-start" : ""
                )}>
                    <Image src={image}  width ={610} height={324} alt="hero image" />
                </div>
            </section>
        </section>
        </>
      
    );
};

export default SimpleIconHeroSection;
