import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Xicon from "@/assets/Xicon.svg";
import classNames from "@/helpers/common";
import Image from "next/image";

interface AlertOverlayProps {
	show: boolean;
	heading?: string;
	subHeading?: string;
	headingCustomClass?: string;
	subheadingClass?: string;
	isError?: boolean;
	setShow: () => void;
}
export const AlertOverlay: React.FC<AlertOverlayProps> = ({
	show,
	heading,
	setShow,
	subHeading,
	isError = false,
	headingCustomClass,
	subheadingClass,
}) => {
	useEffect(() => {
		const alertTimer = setTimeout(() => {
			if (heading) {
				setShow?.();
			}
		}, 3000);

		return () => {
			clearTimeout(alertTimer);
		};
	}, [heading]);

	return (
		<>
			<div
				aria-live="assertive"
				className="pointer-events-none fixed inset-0 z-40 flex items-end px-4 py-6 sm:items-start sm:p-6 mt-20"
			>
				<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
					<Transition
						show={show}
						as={Fragment}
						enter="transform ease-out duration-300 transition"
						enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
						enterTo="translate-y-0 opacity-100 sm:translate-x-0"
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div
							className={classNames(
								"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg !bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-14 border-2",
								isError ? "border-red-300" : "border-gray-200",
							)}
						>
							<div className="flex items-center p-2 h-full">
								<div className="ml-2 w-0 flex-1">
									<p
										className={classNames(
											"text-md font-semibold font-mono text-gray-charcoal",
											headingCustomClass,
										)}
									>
										{heading}
									</p>
									<p
										className={classNames(
											"mt-1 text-sm text-gray-500",
											subheadingClass,
										)}
									>
										{subHeading}
									</p>
								</div>
								<div className="flex flex-shrink-0 pr-2">
									<Image src={Xicon} alt="sorry"
										className={classNames(
											"h-4 w-4 -mt-5 cursor-pointer",
											isError ? "text-red-400" : "text-gray-400",
										)}
										aria-hidden="true"
										onClick={() => setShow?.()}
									/>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	);
};
