
interface Props{
    text:string
    className?:string
}
const SectionTag = ({text,className}:Props) => {
  return (
    <div className={`flex justify-center w-full  lg:my-2 ${className}`}>
    <div className={`bg-[#079DFC1A] inline-block  rounded-[0.3rem] px-4 lg:px-6 py-1`}>
        <div className='text-blue-azure text-[0.75rem] tracking-[3px] uppercase '>
            {text || ""}
        </div>
    </div>
</div>  )
}

export default SectionTag
