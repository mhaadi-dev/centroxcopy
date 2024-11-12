import React from 'react'
import LandingLayout from './(App)/layout'
import Image from 'next/image'
import img_404 from "@/assets/404.webp"
import classNames, { text_h2_class, text_para_2 } from '@/helpers/common'
import { Button } from '@/Components/Button.js/button'
import Link from 'next/link'
import bggridlines from "@/assets/bggridlines.webp"
export default function NotFound () {
  return (
    <LandingLayout>
    <div className='flex relative flex-col gap-y-6 px-6'>
        <div className='absolute inset-0 opacity-40'><Image className='object-cover w-full h-full' src={bggridlines} alt='bg'></Image></div>
      <p className={classNames('mt-32 text-center z-[1]',text_h2_class)}>Oops! Page Not Found!</p>
      <div className='flex flex-col gap-y-6 items-center z-[1]'>
        <Image className='lg:w-[30%] z-[1]' src={img_404} alt='404'></Image>
        <Link href={"/"}>
          <Button content='Go to Home Page'/>
       
        </Link>
        
      </div>
      
    </div>
     </LandingLayout>
    
  )
}


