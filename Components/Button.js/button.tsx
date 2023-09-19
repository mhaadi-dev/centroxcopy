import classNames from "@/helpers/common"
interface ButtonProps {
  btntext?: string;
  customClass?: string;
  isLoading?: boolean;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  btntext = "",
  customClass = "",
  onClick,
  isLoading = false,
}) => {
  return (
    <button
      className={classNames(
        "font-medium bg-blue-base shadow-sm text-csm rounded-3xl h-8 w-20 lg:h-[3rem] lg:w-[12.5rem] text-white",
        customClass,
      )}
      onClick={() => onClick?.()}
    >
      <span className={isLoading ? "invisible" : "visible"}>{btntext}</span>
      {isLoading && (
        <div className="flex justify-center -mt-5">
          <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"/>
        </div>
       
      )}
    </button>
  );
};
