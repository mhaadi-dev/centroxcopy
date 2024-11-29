
import { ContactForm } from "@/Components/common/ContactForm";
import CommonDisplayCardsGrid from "@/Components/common/CommonDisplayCardsGrid";
import classNames, { section_wrapper_class, text_h2_class } from "@/helpers/common";
import SimpleVerticalTimeLine from "@/Components/common/SimpleVerticalTimeLine";

const  ContactUs=()=> {
	const data = [
		{
	
		  data: [
			{
			  Icon: null,
			  heading: "25+",
			  symbol: "",
			  description: "Solutions Provided",
			  className: "h-full !rounded-3xl w-full",
			  linkText: "",
			},
			{
			  Icon: null,
			  heading: "50",
			  symbol: "+",
			  description: "Experts",
			  className: "h-full !rounded-3xl w-full",
			  linkText: "",
			},
			{
			  Icon: null,
			  heading: "100,000",
			  symbol: "",
			  description: "People Benefitted",
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
	<section className={classNames("")}>
	{/* <ContactUsSection /> */}
	<div className={classNames(section_wrapper_class,"flex flex-col lg:flex-row  gap-x-[2.5rem] pt-16 lg:pt-32 items-start")}>

	<ContactForm heading="Contact Us" description="" disclaimer="Please be informed that when you click the Send button Centrox will process your personal data in accordance with our Privacy Policy for the purpose of providing you with appropriate information." />
	<SimpleVerticalTimeLine className="!py-12" heading="What happens next?" timelineData={timelineData}/>
	</div>

	<CommonDisplayCardsGrid
        data={data}

        gridCols={3}
        headingClassName={text_h2_class}
        gradientBg
      />
	</section>
			
		
	);
}

export default ContactUs