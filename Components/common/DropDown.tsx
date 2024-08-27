import classNames from "@/helpers/common";
import { useEffect, useState } from "react";

interface PropsI {
  id?: any;
  values?: string[];
  selectedValue: string;
  label?: string;
  defaultOption?: string;
  onChange?: (val: string,setErr:any) => void;
  onBlur?:(val:string,setErr:any)=>void,
  className?: string;
  isDisabled?:boolean
}
export const DropDown = ({
  id,
  values,
  selectedValue,
  defaultOption = "Choose an option",
  onChange,
  label,
  isDisabled,
  className,
  onBlur
}: PropsI) => {
  const [value, setValue] = useState<string>(selectedValue.toString());
  const [err,setErr]=useState<string|null>(""); 
  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);
  console.log("selected vlaue in drop down si",value)
  console.log("dropdown values are ===>", value);
  return (
    <>
      <div className={classNames("flex flex-col w-full  ", className)}>
        {/* <label
          htmlFor="countries"
          className="text-asm font-semibold text-gray-primary "
        >
          {label}
        </label> */}
        <select
          id={id}
          value={value}
          className={classNames("bg-gray-gray4 border-b text-white border-gray-200 text-md  w-full block h-10  cursor-pointer",isDisabled ? "opacity-50 !bg-gray-100 pointer-events-none text-white placeholder:text-white" :"")}
          onChange={(e) => {
            onChange?.(e.target.value,setErr);
            setValue(e.target.value);

          }}
          disabled={isDisabled}
          
        >
          {selectedValue === "" && (
            <option key="placeholder" className="!text-white"   value="" disabled hidden >
              {defaultOption}
            </option>
          )}
          {values?.map((val, index) => (
            <option key={val} className="text-white">{val}</option>
          ))}
        </select>
        {err && <p className="text-red-800">{err}</p>}

      </div>
    </>
  );
};
