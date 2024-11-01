import classNames, { text_para_3 } from "@/helpers/common"
import Image from "next/image"
import Link from "next/link"

interface Props{
    image?:any,
    title?:string,
    category?:string,
    date?:string,
    subdescription?:string,
    tags?:boolean,
    linkText?:string,
    linkWithIcon?:boolean,
    link?:string
}
const CommonCard = ({image,title,category,date,subdescription="",tags=false,linkWithIcon,linkText,link}:Props) => {
  return (
    <div
    className="max-w-[658px]  mx-auto  flex flex-col   justify-center   hover:bg-[#079DFC1A] transition-colors ease-in px-[.5rem]  lg:px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer"
   
  >
    {image && (
      <Image
        src={image}
        loading="lazy"
        className="w-full my-4 h-[60%]"
        width={0}
        height={0}
        alt="img-alt"
      />
    )}

    <h4 className="font-semibold my-2 lg:my-4 text-[1rem] sm:text-[1.5rem] text-white">
      {title||"Meta ooand Centrox Partner to Da 3.1 405B Using Scale GenAI Platform" 
        }
    </h4>
    {subdescription && <p className={classNames(text_para_3,"my-2")}>{subdescription}</p>}
    {tags && <section aria-label="centrox case studies tags" className=" w-full flex-wrap flex justify items-center gap-4 mt-2 lg:mt-4">
            
                <div className="leading-[12px] md:leading-[0.5rem]  py-[0.2rem] md:py-[0.5rem] text-white  text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> AI</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> ML Ops</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> AWS</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> GANs</div>
                <div className="leading-[12px] md:leading-[0.5rem] py-[0.2rem] md:py-[0.5rem] text-white text-[10px] md:text-base px-[0.5rem] md:px-[1rem] rounded-[4px] border-2 border-[#6B7280] "> CVS</div>
           
          </section>}
    <div
      aria-label="blog-card-footer"
      className="w-full flex justify-between mt-auto  h-[4rem]  "
    >
      <p className="text-blue-azure font-semibold text-start ">
        {category}
      </p>
      <p className="text-white ">{date}</p>
    </div>
    {linkText && (
          <Link
            href={link || ""}
            className="flex gap-x-2 text-gray-light hover:text-blue-azure mt-auto mb-2"
          >
            {linkText}{" "}
            {linkWithIcon && (
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width={24}
                height={24}
              >
                <path
                  fill="currentColor"
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            )}
          </Link>
        )}
  </div>
  )
}

export default CommonCard
