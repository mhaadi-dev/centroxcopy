import Image from "next/image";
import React from "react";
import dummyDisplay from "@/assets/dummyDisplay.webp";
import { Button } from "@/Components/Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid"; // Solid icons
import { CustomCarousalSection } from "@/sections/CustomCarousalSection";
import { ProductsCarousalSection } from "@/sections/ProducstsCarousal";
import { ProductsCarousal } from "@/Components/common/ProductsCarousal"
import SectionTag from "@/Components/common/SectionTag";
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common";
// import Cards from "./Cards";



// const Cards = () => {
//   return (
//     <div className="container mx-auto w-[90%]">
//       <ul id="cards" className="list-none p-0 grid grid-cols-1 grid-rows-[repeat(4,87vh)] gap-[4vw] pb-[calc(4*1.5em)] mb-[4vw]">
//         <li className="card sticky top-0 pt-[calc(1*1.5em)]">
//           <div className="card-body bg-[#52B2CF] box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[87vh] flex justify-center items-center transition-all duration-500">
//             <h2 className="text-4xl">Card 1</h2>
//           </div>
//         </li>
//         <li className="card sticky top-0 pt-[calc(2*1.5em)]">
//           <div className="card-body bg-[#E5A36F] box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[87vh] flex justify-center items-center transition-all duration-500">
//             <h2 className="text-4xl">Card 2</h2>
//           </div>
//         </li>
//         <li className="card sticky top-0 pt-[calc(3*1.5em)]">
//           <div className="card-body bg-[#9CADCE] box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[87vh] flex justify-center items-center transition-all duration-500">
//             <h2 className="text-4xl">Card 3</h2>
//           </div>
//         </li>
//         <li className="card sticky top-0 pt-[calc(4*1.5em)]">
//           <div className="card-body bg-[#D4AFB9] box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[87vh] flex justify-center items-center transition-all duration-500">
//             <h2 className="text-4xl">Card 4</h2>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// };



const LandingBlogSection = () => (
  <>
  
    <section className={classNames(section_wrapper_class)}>
        
       <section aria-label="Centrox Blog" className="flex flex-col gap-y-4" > 
       <SectionTag text="Blogs"/>
       <h2 className={classNames(text_h2_class,"text-center")}>Centrox Blog Stay Ahead of the Curve</h2>
       <p className={classNames(text_para_2,"text-center w-full sm:w-[60%] mx-auto")}> Our AI engineers are active contributors in the community and regularly share their insights and expertise on our blog. Explore their latest articles on Generative AI and LLM.</p>
       </section> 
       
       {/* <section aria-label='Blogs' className=' w-[1681px] grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 sm:-mr-[15rem]'>
         <div className='flex flex-col justify-center items-center gap-[.5rem] hover:bg-[#079DFC1A] transition-colors ease-in px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer'>
            <Image src={dummyDisplay} alt="blog-pic"/>
            <p aria-label='blog-title' className='font-semibold text-[1rem] sm:text-[1.5rem] text-white'>Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform</p>
            <div aria-label='blog-card-footer ' className='w-full flex justify-between mt-2'>
                <p className='text-blue-azure font-semibold text-start'>Product</p>
                <p className='text-white'>July 17, 2024</p>
            </div>
         </div>
         <div className='flex flex-col justify-center items-center gap-[.5rem] hover:bg-[#079DFC1A] transition-colors ease-in px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer'>
            <Image src={dummyDisplay} alt="blog-pic"/>
            <p aria-label='blog-title' className='font-semibold text-[1rem] sm:text-[1.5rem] text-white'>Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform</p>
            <div aria-label='blog-card-footer ' className='w-full flex justify-between mt-2'>
                <p className='text-blue-azure font-semibold text-start'>Product</p>
                <p className='text-white'>July 17, 2024</p>
            </div>
         </div>

         <div className='flex flex-col justify-center items-center gap-[.5rem] hover:bg-[#079DFC1A] transition-colors ease-in px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer'>
            <Image src={dummyDisplay} alt="blog-pic"/>
            <p aria-label='blog-title' className='font-semibold text-[1rem] sm:text-[1.5rem] text-white'>Meta and Centrox Partner to Drive Enterprise Adoption of Llama 3.1 405B Using Scale GenAI Platform</p>
            <div aria-label='blog-card-footer ' className='w-full flex justify-between mt-2'>
                <p className='text-blue-azure font-semibold text-start'>Product</p>
                <p className='text-white'>July 17, 2024</p>
            </div>
         </div>     
       </section> */}
        <ProductsCarousal data={data}/>
        {/* <Cards/> */}
      
      
       {/* <div>
    
        <div className='flex gap-x-[2rem]'>
        <button className="bg-[#3C3C3C] p-2 rounded-full text-2xl">
        <ArrowLeftIcon className="h-10 w-10 text-white font-semibold" /> 
      </button>
      <button className="bg-[#3C3C3C] p-2 rounded-full text-2xl">
        <ArrowRightIcon className="h-10 w-10 text-white font-semibold" />
      </button>
        </div>
       </div> */}
    </section>
  </>
);

export default LandingBlogSection;
  {/* <ProductsCarousalSection data={data} heading="BLogs section" /> */}
  const data = [
  {
    img: dummyDisplay,
    title:
      "Meta4 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    category: "Product",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    title:
      "Meta2 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    category: "Product",
    date: "July 17, 2024",
  },
  {
    img: dummyDisplay,
    title:
      "Meta3 and centrox partner to drive enterprise adoption of llama 3.1 405b using scale genai platform",
    category: "Product",
    date: "July 17, 2024",
  },
];