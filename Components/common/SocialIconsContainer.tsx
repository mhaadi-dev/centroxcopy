import Image from 'next/image'
import React from 'react'
import X from "@/assets/X.webp"
import classNames, { text_para_2, text_para_3 } from '@/helpers/common'
const SocialIconsContainer = ({className}:any) => {
  return (
    <div className={classNames('bg-gray-800/80 border-2 flex gap-x-4 p-5  items-center text-white border-gray-100/60 rounded-xl',className)}>
      <p className={classNames(text_para_2,"font-medium")}>Share</p>
      <div className='flex gap-x-3 items-center'>
        <div className='p-2 bg-gray-700/90 rounded-lg'>
             <Image  src={X} alt='x'></Image>
        </div>
        <div className='p-2 bg-gray-700/90 rounded-lg'>
             <Image  src={X} alt='x'></Image>
        </div>
        <div className='p-2 bg-gray-700/90 rounded-lg'>
             <Image  src={X} alt='x'></Image>
        </div>
        <div className='p-2 bg-gray-700/90 rounded-lg'>
             <Image  src={X} alt='x'></Image>
        </div>
       
     
      </div>
    </div>
  )
}

export default SocialIconsContainer
