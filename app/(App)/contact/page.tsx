import { ContactUsSection } from "@/views/Contactus";
import LandingLayout from "../layout";
import { ContactForm } from "@/Components/common/ContactForm";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import { text_h2_class } from "@/helpers/common";
import SimpleVerticalTimeLine from "@/Components/common/SimpleVerticalTimeLine";

function ContactUs() {
	const data = [
		{
	
		  data: [
			{
			  Icon: null,
			  heading: "56",
			  symbol: "%",
			  description: "This is something about metrics",
			  className: "h-full !rounded-3xl w-full",
			  linkText: "",
			},
			{
			  Icon: null,
			  heading: "96",
			  symbol: "%",
			  description: "This is something about metrics",
			  className: "h-full !rounded-3xl w-full",
			  linkText: "",
			},
			{
			  Icon: null,
			  heading: "200",
			  symbol: "+",
			  description: "This is something about metrics",
			  className: "h-full !rounded-3xl w-full",
			  linkText: "",
			},
			{
			  Icon: null,
			  heading: "100",
			  symbol: "%",
			  description: "This is something about metrics",
			  className: "h-full !rounded-3xl w-full",
			  linkText: "",
			},
		  ],
		},
	  ];
	  const timelineData=[
		"Once we get your request, we’ll reach out soon to understand your project better and secure everything with an NDA.",
		"Our team digs into your needs and whips up a project plan, including timelines, team size, and budget.",
		"We hop on a call to go over the plan and make sure we’re all on the same page.",
		"With the contract signed, we jump right into making your project happen."
	  ]
	return (
	<>
	<ContactUsSection />
	{/* <SimpleVerticalTimeLine heading="What happens next?" timelineData={timelineData}/>
	<ContactForm heading="Contact Us" description="dehhhhhhhhhhhhhhhhhhh jsdksjdk kadkadk" disclaimer="Please be informed that when you click the Send button Centrox will process your personal data in accordance with our Privacy Policy for the purpose of providing you with appropriate information." />
	<CommonDisplayCardsGrid
        data={data}
        gridCols={4}
        headingClassName={text_h2_class}
        gradientBg
      /> */}
	</>
			
		
	);
}
export default ContactUs;
