"use client";
import React, {
	useState,
	useEffect,
	ChangeEvent,
	FocusEvent,
	useRef,
} from "react";
import Exclamination from "@/assets/Exclamination.svg";
import InputFieldProps from "./interface";
import classNames from "@/helpers/common";

export const InputField: React.FC<InputFieldProps> = ({
	id,
	name,
	value,
	type = "text",
	icon,
	label,
	labelPosition = "col",
	placeHolder = "",
	className,
	errMsg,
	isOptional = false,
	disabled,
	children,
	onChange,
	onBlur,
	onFocus,
	suppressError,
	showErrorIcon = true,
	isDisabled = false,
	onKeyDown,
	inputFieldHeight = "h-10",
	childrenPosition = "left",
	limitCharacters = false,
	customClass = "",
	labelclass = "",
	...props
}) => {
	const [val, setVal] = useState<string | number>("");
	const [error, setError] = useState<string>("");
	const ref = useRef<HTMLInputElement>(null); // Ref for input element

	useEffect(() => {
		if (value !== null && value !== undefined) {
			setVal(value);
		}
	}, [value]);

	useEffect(() => {
		if (errMsg && !value) {
			setError(errMsg);
		}
	}, [errMsg, value]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (limitCharacters) {
			setError("");
			onChange?.(event, setError);
		} else {
			setError("");
			setVal(event.target.value);
			onChange?.(event, setError);
		}
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		if (!val && isOptional) {
			setError(`${name || label} is required`);
		} else {
			setError("");
		}
		onBlur?.(event, setError);
	};
	return (
		<div ref={ref} key={`inputBasic-${id}`} className={classNames(className)}>
			<div
				className={classNames(
					"flex gap-2",
					labelPosition === "col" ? "flex-col items-start" : "items-center",
				)}
			>
				{label && (
					<label
						className={classNames(
							!labelclass ? "text-md font-semibold " : labelclass,
							isDisabled ? "text-gray-400" : "text-gray-700",
						)}
					>
						{label}
					</label>
				)}
				<div
					className={classNames(
						"flex items-center border shadow-sm rounded-md px-2 w-full",
						error ? "border-red-700" : "border-gray-300",
						isDisabled ? "bg-gray-100 text-gray-500 font-medium" : "bg-white",
					)}
				>
					{children && childrenPosition === "left" && (
						<span className={classNames("w-7", error && "text-red-700")}>
							{children}
						</span>
					)}
					<input
						id={id}
						type={type}
						value={val}
						name={name}
						placeholder={placeHolder}
						className={classNames(
							"placeholder:text-gray ",
							children && "pl-2",
							inputFieldHeight,
							customClass ? customClass : "w-full",
							isDisabled ? "bg-gray-100 cursor-not-allowed" : "bg-white",
						)}
						disabled={isDisabled}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={onFocus}
						onKeyDown={onKeyDown}
						{...props}
					/>
					{children && childrenPosition === "right" && (
						<span
							className={classNames("w-7", error && !val && "text-red-700")}
						>
							{children}
						</span>
					)}
				</div>
			</div>

			{error && !suppressError && (
				<div
					className={classNames(
						"flex gap-2 items-center mt-1",
						labelPosition === "col" ? "justify-start" : "justify-center",
					)}
				>
					{showErrorIcon && (
						<Exclamination
							className="text-red-700 w-5"
							alt=""
							aria-hidden="true"
						/>
					)}
					{<span className="text-red-700">{error}</span>}
				</div>
			)}
		</div>
	);
};
