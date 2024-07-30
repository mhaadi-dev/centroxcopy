    import { Button } from "@/Components/Button.js/button"
import { sectionHeadings, sectionSectionDescription, sectionsSectionHeadings } from "@/helpers/common"
import Image from "next/image"
import img from "@/public/images/customchatbot/newgenericChatbot.webp"
import bgImg from "@/public/images/customchatbot/customchatbotbg.webp"
import Link from "next/link"

export const GenericChatbotCustomChatbox = ()=>{
    return <section className="flex flex-col lg:flex-row gap-12  w-4/5 mx-auto mt-24  lg:mt-40 2xl:mt-60 lg:items-center relative   ">
        <Image src={bgImg} alt="bg-img" className="absolute left-[2%] top-[10%] h-full "/>
            <div className="flex flex-col gap-6 w-full lg:w-1/2">
                <h2 className={sectionsSectionHeadings}>Are generic chatbots failing to meet your customer service needs?</h2>
                <div className="flex flex-col gap-2">
                <p className={sectionSectionDescription}>
                High support costs, limited availability, inconsistent responses and missed opportunities for engagement are among the main reasons why many businesses fail to connect with customers and have a high churn rate.
                </p>
                <p className={sectionSectionDescription}>
                We can help you overcome that by building a GPT/chatbot that will be available 24/7 365 to communicate with your customers as if you’re directly communicating with them.
                </p>
                </div>
              <Link href="/aiExpert" className="z-10">
              <Button content="Explore Custom Solutions" className="w-4/5 lg:w-1/2 mx-auto lg:mx-0 !rounded-full z-10 mt-4 "    />
              </Link>

            </div>

            <figure className="w-full flex flex-col gap-6  justify-center rounded-xl  items-center relative lg:w-1/2 "
            // style={{
            //    background: "rgba(7, 157, 252, 0.40)",
            //     filter: "blur(70px)"
            // }}
            >
                <div className="absolute top-1/5  left-1/5 h-4/5 w-4/5 mx-auto "
                style={{
               background: "rgba(7, 157, 252, 0.40)",
                filter: "blur(70px)"
            }}
                />
                <Image src={img} alt="chatbot-img" className="w-full z-10   "/>
            </figure>

    </section>
}