import { InlineWidget } from "react-calendly";
import dynamic from "next/dynamic";

const PopupButttonComp = dynamic(
	() => import("react-calendly").then((mod) => mod.PopupButton),
	{
		ssr: false,
	}
);
export const TalkAiExpert = () => {
	return (
		<div id="" className="h-screen">
			 <h1>Schedule a Meeting</h1>
      <iframe
        src="https://calendly.com/hamzahejaz88"
        style={{ width: '100%', height: '800px', border: 'none' }}
        scrolling="auto"
        title="Calendly Scheduling"
      ></iframe>
		</div>
	);
};
