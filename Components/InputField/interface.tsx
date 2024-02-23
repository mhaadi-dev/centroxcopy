import React, { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
export default interface InputFieldProps {
  id?: string;
  name?: string;
  value?: string | number| null|undefined;
  type?: string;
  icon?: React.ReactNode;
  label?: string;
  labelPosition?: string;
  placeHolder?: string;
  className?: string;
  errMsg?: string;
  isOptional?: boolean;
  disabled?: boolean;
  childrenPosition?: "left" | "right";
  children?: React.ReactNode;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
  onBlur?: (
    event: FocusEvent<HTMLInputElement>,
    setError: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  suppressError?: boolean;
  showErrorIcon?: boolean;
  isDisabled?: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputFieldHeight?: string;
  limitCharacters?: boolean;
  customClass?: string;
  labelclass?: string
  err?:string,
}
