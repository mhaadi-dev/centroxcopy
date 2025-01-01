import classNames from "@/helpers/common"
interface Props{
  className?:string
}
export const Loader = ({className}:Props) => {
  return (
    <div className={classNames("flex justify-center mt-[25%]",className)}>
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-dashed border-gray-600" />
  </div>
  )
}
