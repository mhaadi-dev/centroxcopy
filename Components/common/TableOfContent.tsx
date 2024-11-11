import classNames, { text_para_2 } from '@/helpers/common'
import React from 'react'

const TableOfContent = () => {
  return (
    <div className='bg-gray-800/80 border-2 w-full flex flex-col gap-y-4 py-10 px-5  text-white border-gray-100/60 rounded-xl h-full'>
      <p className={classNames(text_para_2,"font-semibold")}>Table of Contents</p>
      <ol className={classNames("text-[#E5E7EB] px-6  list-decimal flex flex-col justify-center text-[0.9rem] 2xl:text-[1.2rem]")}>
        <li className=' w-full'>Introduction</li>
        <li>Problem</li>
        <li>Centrox GenAI Platform</li>
        <li>Evaluating Datasets</li>
        <li>Performance</li>
        <li>The results</li>
        <li>Detailed Evaluation Results</li>
        <li>Conclusion</li>
        
      </ol>
    </div>
  )
}

export default TableOfContent
