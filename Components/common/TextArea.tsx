import classNames from "@/helpers/common";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (val:string) => void;
  value?: string;
  required?:boolean
  onBlur?: (fieldValue: string, error: any) => void;
  placeholder?:string
}
export const TextArea = ({
  className,
  label,
  disabled,
  onChange,
  placeholder,
  onBlur,
  required=false,
  value,
}: Props) => {

  const [fieldValue,setFieldValue]=useState<string>(value!);
  const [fieldError, setFieldError] = useState<string | boolean>("");

  useEffect(()=>{
    setFieldValue(value!)
  },[value])
  return (
    <div className="flex flex-col w-full">
      <label className="text-asm font-semibold text-gray-primary mb-1 ">
        {label}
      </label>
      <textarea
        onChange={(e)=>{
          setFieldError(false);

          onChange?.(e.target.value)
        }}
        onBlur={() => {
        
            onBlur?.(fieldValue, setFieldError);
          
          if (!fieldValue && required) {
            onBlur?.("", setFieldError);
            setFieldError(`${label} is required`);
          }
          
        }}
        // value={fieldValue!}
        // defaultValue={fieldValue!}
        placeholder={placeholder}
        className={classNames(
          " text-white   placeholder:text-white placeholder:pt-6   px-3 py-2  max-h-32 h-auto w-full  ",
          disabled ? "!bg-gray-100  opacity-50" : "",
          className
        )}
        disabled={disabled}
        value={value}
      >
        
      </textarea>
      {fieldError && (
          <p className="text-red-600 text-asm mt-1">{fieldError}</p>
        )}
    </div>
  );
};
