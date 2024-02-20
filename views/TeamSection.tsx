"use client";

import { Toast } from "@/Components/Toast/toast";
import { useState } from "react";

export const TeamUsSection = () => {
	const [showToast, setShowToast] = useState(false);

	return (
		<div className="bg-gray-500 lg:h-screen">
			{showToast && <Toast showToast={showToast} setShowToast={setShowToast} />}
		</div>
	);
};
