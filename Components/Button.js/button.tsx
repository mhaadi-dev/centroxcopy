import classNames from "@/helpers/common";
import Image from "next/image";

interface PropsI {
	Icon?: any;
	type?: "button" | "submit" | "reset";
	content?: string;
	content1?: string;
	onClick?: () => void;
	className?: string;
	customClassName?: string;
	iconClassName?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	defaultClass?: boolean;
	isLefticon?: boolean;
	id?: string;
}

export const Button = ({
	id = "btn",
	Icon,
	iconClassName,
	type = "button",
	content,
	onClick,
	className,
	customClassName,
	isDisabled = false,
	isLoading = false,
	defaultClass = true,
	isLefticon = true,
}: PropsI) => {
	return (
		<button
			id={id}
			type={type}
			onClick={onClick}
			className={classNames(
				defaultClass &&
					"flex items-center justify-center gap-3 rounded-lg  px-2 py-2 text-white hover:bg-blue-darkBtn lg:px-3 lg:py-3 bg-blue-azure",
				isDisabled ? "bg-gray-disabled" : "bg-blue-azure",
				className,
			)}
			disabled={isDisabled}
		>
			{Icon && isLefticon && (
				<Image src={Icon} className={classNames(iconClassName)} alt="" />
			)}
			<div className="flex flex-col items-center justify-center text-sm lg:text-base">
				{isLoading ? (
					<div className="b bg-blackorder-l-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
				) : (
					<div
						className={classNames(
							"flex items-center justify-center",
							customClassName,
						)}
					>
						{content}
					</div>
				)}
			</div>
			{Icon && !isLefticon && (
				<Image src={Icon} className={classNames(iconClassName)} alt="" />
			)}
		</button>
	);
};
