import Image from "next/image"

interface Props{
    image?:any,
    title?:string,
    category?:string,
    date?:string
}
const CommonCard = ({image,title,category,date}:Props) => {
  return (
    <div
    className="max-w-[658px] h-[400px] justify-center items-center gap-[.5rem] hover:bg-[#079DFC1A] transition-colors ease-in px-[1.5rem] py-[1rem] rounded-2xl cursor-pointer"
   
  >
    {image && (
      <Image
        src={image}
        loading="lazy"
        className="w-full h-[60%]"
        width={0}
        height={0}
        alt="img-alt"
      />
    )}

    <h4 className="font-semibold my-4 text-[1rem] sm:text-[1.5rem] text-white">
      {"Meta ooand Centrox Partner to Da 3.1 405B Using Scale GenAI Platform" ||
        title}
    </h4>
    <div
      aria-label="blog-card-footer"
      className="w-full flex justify-between mt-2  h-[4rem]  "
    >
      <p className="text-blue-azure font-semibold text-start ">
        {category}
      </p>
      <p className="text-white ">{date}</p>
    </div>
  </div>
  )
}

export default CommonCard
