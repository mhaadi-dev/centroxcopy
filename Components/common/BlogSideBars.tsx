import classNames, { text_h2_class, text_h3_class } from '@/helpers/common'
import React from 'react'
import { Button } from '../Button.js/button'
import { CalendlyWidget } from './Calendly'

const BlogSideBars = () => {
  return (
    <div className='hidden lg:flex flex-col gap-y-6   sticky right-0 left-0 top-[6.5rem] w-[20%] h-full'>
      <div className={classNames(' flex flex-col items-center gap-y-3 text-[0.55rem] lg:text-[1rem] 2xl:text-[1.25rem] font-heading font-semibold leading-[1.6rem] 2xl:leading-[2rem] bg-gradient-to-b from-[#079DFC] to-[#72EFDD] rounded-xl p-6 text-black ')}>
      <p>Do you have an AI idea? Let's Discover the Possibilities Together!
      From Idea to Innovation; Bring Your AI solution to Life with Us!</p> 
      <CalendlyWidget btnText='Book a Call' btnClassName='!mt-10'></CalendlyWidget>
      </div>
   
    </div>
  )
}

export default BlogSideBars
