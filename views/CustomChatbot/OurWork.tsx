import { Button } from "@/Components/Button.js/button";
import { sectionDiscriptions, sectionheadings, sectionHeadings, sectionsubheadings } from "@/helpers/common";
import img from "@/public/images/solvingdata/solvingdataheroSectionImg.webp";
import Image from "next/image";
import Link from "next/link";
import chatbotImg from "@/public/images/customchatbot/newSmartChatbot.webp"
import leftMockupImg from "@/public/images/customchatbot/newleftphone.webp";
import rightMockupImg from "@/public/images/customchatbot/newrightphone.webp"

export const OurWorkCustomChatbot = () => {
  return (
    <section className="w-3/4 mx-auto flex flex-col items-center gap-8 mt-20 lg:mt-40 2xl:mt-44">
      <h2 className={sectionheadings}>
        Our Work
      </h2>
      <div className="flex flex-col gap-2">
      <h3 className={sectionsubheadings}>
        GPTs are really good at answering almost anything you throw at them but
        then it comes down to answering your business specific queries, they
        flounder
      </h3>
      <h3 className={sectionsubheadings}>
        But does not mean that GPTs are not for you. It’s just that GPTs need to
        be trained on who you are, what your business does and who you intend on
        serving. We have build such custom chatbots for a number of our clients 
      </h3>
      </div>
      <Link href={"/aiExpert"}>
      <Button content="Book Your 1:1 Call"  className="!rounded-full"/>
      </Link>
        <div className="w-[90%] lg:w-[85%] flex justify-between  bg-white relative rounded-xl  ">
           
            <figure className="w-full rounded-2xl  border-2">
                <Image src={chatbotImg} alt="chatbot-img " className="w-full shadow-lg  "/>
            </figure>
            <div className="absolute top-0 -right-[10%] h-full">
            <Image src={rightMockupImg} alt="img-her" className="h-[100%] w-full   "/>

            </div>
            <div className="absolute top-[6%] -left-[10%] h-full">
            <Image src={leftMockupImg} alt="img-her" className="h-[100%] w-full   "/>

            </div>
          
        </div>

    </section>
  );
};
