"use client";
import Image from "next/image";
import AppLogo from "../../public/images/updatedCentroxLogo.svg";
import TwitterIcon from "@/assets/twitter.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navigation = {
  services: [
    { name: "Custom LLM Development", href: "/services/custom-llm-dev" },
    { name: "Data Annotation and Labelling", href: "/services/data-annotations-and-labelling" },
    { name: "Fine Tuning and Optimization", href: "/services/ai-finetuning" },
    { name: "Evaluation", href: "/services/evaluation" },
  ],

  products: [
    { name: "Full Body Measurement", href: "/solutions/snap-and-measure" },
    { name: "Real-estate Chatbot", href: "/solutions/real-estate-chatbot" },
    { name: "Labeling Dresses with AI", href: "/solutions/labelling-dresses-with-ai" },
    { name: "LLM Based Health Chatbot", href: "/solutions/mental-health-chatbot" },
    //   { name: 'Partners', href: '#' },
  ],
  company: [
    { name: "About Us ", href: "/about-us" },
    { name: "Team ", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  
    ,

   
    
 
  ],
};

export default function WebsiteFooter() {
  const router = useRouter();

 
  return (
    <footer
      // aria-labelledby="footer-heading"
      className="my-12 max-w-[2500px] "
    >
     
      <div className="mx-auto  border-blue-200   pb-8 pt-16 sm:pt-24 lg:pt-32 w-4/5  ">
        <div className="flex flex-col lg:flex-row justify-between  gap-12">
          <figure className="space-y-8 w-4/5 flex justify-center lg:items-start lg:justify-start mx-auto  lg:w-2/5 ">
            <Image
              alt="Company name"
              src={AppLogo}
              className="w-[10rem] sm:w-80 cursor-pointer  "
              onClick={() => {
                router.push("/");
              }}
              loading="lazy"
            />
          </figure>

          <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row justify-between  gap-8 xl:col-span-2 xl:mt-0 w-full lg:w-3/5">
            <div className=" w-full  flex justify-start  lg:justify-center">
              <div>
                <h3 className="text-xs lg:text-xl  font-bold leading-6  text-gray-gray2 ">
                  Services
                </h3>
                <ul
                  role="list"
                  className="mt-2 lg:mt-6 space-y-2   lg:space-y-4"
                >
                  {navigation.services.map((item) => (
                    <li
                      key={item.name}
                    >
                      <Link
                        href={item.href}
                      
                        className="text-xs lg:text-md  leading-6 text-white  sm:text-lg hover:text-blue-azure"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full   flex justify-start  lg:justify-center md:gap-8  ">
              <div>
                <h3 className="text-xs lg:text-xl  font-bold leading-6  text-gray-gray2 ">
                  Products
                </h3>
                <ul
                  role="list"
                  className="mt-2 lg:mt-6 space-y-2   lg:space-y-4"
                >
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                      
                        className="text-xs lg:text-md  leading-6 text-white  sm:text-lg hover:text-blue-azure"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" w-full   flex justify-start  lg:justify-center  md:gap-8">
              <div>
                <h3 className="text-xs lg:text-xl   font-bold leading-6  text-gray-gray2 ">
                  Company
                </h3>
                <ul
                  role="list"
                  className="mt-2 lg:mt-6 space-y-2   lg:space-y-4"
                >
                  {navigation.company.map((item:any) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        // href=""
                        className="text-xs lg:text-md  leading-6 text-white  sm:text-lg hover:text-blue-azure"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm sm:text-md font-bold lg:text-xl leading-6 text-white sm:text-lg mt-4">
            Follow Us At
          </p>
          <div className=" flex space-x-4 lg:space-x-12 mt-4">
            <Link
              href="https://www.linkedin.com/company/centroxai"
              target="_blank"
            >
              <Image
                src={LinkedinIcon}
                alt="Logo"
                className="w-4 sm:w-8 cursor-pointer"
                loading="lazy"
              />
            </Link>
            <Link href="https://twitter.com/CentroxAI" target="_blank">
              <Image
                src={TwitterIcon}
                alt="Logo"
                className="w-4 sm:w-8 cursor-pointer"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-4">
          <p className="text-sm leading-5 text-white text-center">
            &copy; {new Date().getFullYear()} Centrox Technologies, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
  );
}
