"use client";

import { RealEstateChatbot } from "@/views/RealEstateChatbot";
import { Navbar } from "@/Components/Navbar/navbar";

function ReaslEstateChat() {
	return (
		<div
        className=""
			style={{
				background:
					"radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%, rgba(7, 157, 252, 0) 100%), rgba(6, 6, 6, 1)",
			}}
		>
			<Navbar />
			<RealEstateChatbot />;
		</div>
	);
}

export default ReaslEstateChat;
