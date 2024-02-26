"use client";
import { useState } from "react";

export const TalkAiExpert = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openCalendlyPopup = () => {
		setIsOpen(true);
	};

	const closeCalendlyPopup = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<button onClick={openCalendlyPopup}>Open Calendly</button>
			{isOpen && (
				<div
					className="calendly-popup"
					style={{
						backgroundColor: "#121212",
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						zIndex: 9999,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						className="calendly-popup-content"
						style={{
							width: "100%",
							maxWidth: "800px",
							height: "800px",
							border: "none",
							overflow: "hidden",
						}}
					>
						<span
							className="calendly-popup-close"
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								cursor: "pointer",
								color: "#ffffff",
							}}
							onClick={closeCalendlyPopup}
						>
							&times;
						</span>
						<iframe
							src="https://calendly.com/hamzahejaz88"
							style={{ width: "100%", height: "100%", border: "none" }}
							scrolling="auto"
							title="Calendly Scheduling"
						></iframe>
					</div>
				</div>
			)}
		</div>
	);
};
