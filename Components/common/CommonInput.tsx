import classNames from "@/helpers/common";
import { useEffect, useState } from "react";
interface Input {
  required?: boolean;
  className?: string;
  label?: string;
  labelClassName?: string;
  id?: string;
  type: string;
  placeholder?: string;
  maxLength?: string;
  onBlur?: (fieldValue: any, error: any) => void;
  isDisabled?: boolean;
  value?: string|null;
  name?: string;
  onChange?: (fieldValue: string) => void | (()=>void);
  onKeyDown?: (e:any) => void;
  icon?: SVGElement;
  onKeyUp?: (
    e: React.KeyboardEvent<HTMLInputElement>,
    fieldValue: string
  ) => void;
  pattern?:string
  disabled?:(val:boolean)=>void,
}

export const CommonInput: React.FC<Input> = ({
  required = false,
  label,
  labelClassName,
  id,
  className,
  name,
  type,
  placeholder,
  maxLength,
  onBlur,
  isDisabled,
  value,
  onChange,
  onKeyDown,
  onKeyUp,
  pattern,
  disabled
}) => {
  const [fieldValue, setFieldValue] = useState(value);
  const [fieldError, setFieldError] = useState<string | boolean>("");

  useEffect(()=>{
    setFieldValue(value)
  },[value])
  return (
    <div className="flex flex-col items-start w-full ">
      {label && (
        <label
          className={classNames(
            "text-asm font-semibold text-gray-primary mb-1",
            labelClassName
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="w-full">
        <input
          className={classNames(
            "   px-2 py-2  placeholder:text-white",
            isDisabled ? "pointer-events-none  opacity-50 !bg-gray-100" : "",
            fieldError ? "border !border-red-300" : "",
            className
          )}
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
          defaultValue={fieldValue!}
          value={fieldValue!}
          pattern={pattern}
          required={required}
          onChange={({ target }) => {
            setFieldError(false);
            setFieldValue(target.value);
            onChange?.(target.value);
          }}
          onBlur={() => {
           
              onBlur?.(fieldValue, setFieldError);
            
            if (!fieldValue && required) {
              onBlur?.("", setFieldError);
              setFieldError(`${label} is required`);
            }
            
          }}
          onKeyUp={(e) => {
            onKeyUp?.(e, fieldValue!);
            if (fieldValue && pattern){
              if (!fieldValue.match(/^[0-9]*$/)){
                setFieldError("Only digits are allowed")
                disabled?.(true)
              }
              else{
                disabled?.(false)
              }
            }
          }}
          onKeyDown={(e)=>{
            onKeyDown?.(e)
          }}
        ></input>
        {fieldError && (
          <p className="text-red-600  text-asm mt-1">{fieldError}</p>
        )}
      </div>
    </div>
  );
};
