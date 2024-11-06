import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from '@/helpers/common';
import Image from 'next/image';
import React from 'react';
import dummyDisplay from "@/assets/dummyDisplay.webp";
import Icon1 from "@/assets/Icon-1.webp";
import serviceherobg from "@/assets/Servicebg.webp";
import checker from "@/assets/checker.webp";

interface Props {
    headingText?: string;
    paraText?: string;
    Icon?: any;
    image?: any;
    reverse?: boolean;
    bulletPoints?: boolean;
}

const SimpleIconHeroSection = ({ headingText, paraText, Icon, image, reverse, bulletPoints }: Props) => {
    return (
        <section className='relative py-10 mt-8 lg:mt-12 2xl:mt-24 sm:pb-14 overflow-hidden'>
            <div className={classNames(
                'absolute inset-0 w-full h-full',
                'object-cover object-center',
                reverse ? "sm:object-left" : "sm:object-right"
            )}>
                <Image 
                    src={serviceherobg} 
                    alt='background' 
                    layout="fill" 
                    objectFit="cover" 
                    className="z-0"
                    quality={100}
                    priority
                />
            </div>

            <section className={classNames(
                section_wrapper_class,
                "relative z-10 flex flex-col lg:flex-row h-auto lg:min-h-screen items-center gap-8 justify-between",
                reverse ? "lg:!flex-row-reverse" : "lg:flex-row"
            )}>
             
                <div className="w-full lg:w-1/2 z-10 flex flex-col h-full gap-y-3">
                    <Image src={Icon1} alt="Icon" />
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
                    <Image src={dummyDisplay} alt="image" />
                </div>
            </section>
        </section>
    );
};

export default SimpleIconHeroSection;
