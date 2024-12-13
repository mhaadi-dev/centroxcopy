import React from 'react'
import LandingLayout from './(App)/layout'
import Image from 'next/image'
import img_404 from "@/assets/404.svg"
import bg404 from "@/assets/404bg.svg"
import classNames, { text_h2_class, text_para_2 } from '@/helpers/common'
import { Button } from '@/Components/Button.js/button'
import Link from 'next/link'
import bggridlines from "@/assets/bggridlines.webp"
export default function NotFound () {
  return (
    <LandingLayout>
    <div className='flex relative flex-col  h-auto lg:h-screen gap-y-6 px-6'>
        <div className='absolute inset-0 opacity-40'><Image className='object-contain w-full h-full' src={bg404} alt='bg'></Image></div>
    
      <div className='flex flex-col gap-y-6 items-center z-[1]'>
        
        <Image className='lg:w-[30%] z-[1] mt-24 ml-0 lg:-ml-6' src={img_404} alt='404'></Image>
        <div className='flex flex-col gap-y-8 lg:gap-y-14 items-center'>
          <p className={classNames('text-center z-[1] ',text_h2_class)}>Oops! Page Not Found!</p>
        <Link href={"/"}>
          <Button content='Go to Home Page'/>
       
        </Link>
        </div>
        
        
      </div>
      
    </div>
     </LandingLayout>
    
  )
}


