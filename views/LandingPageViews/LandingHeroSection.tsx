import Image from 'next/image';
import { CalendlyWidget } from '@/Components/common/Calendly';
import classNames, { text_para_main } from '@/helpers/common'
import smallhero from "@/assets/smallhero.svg"

const LandingHeroSection = () => {
    return (
      <>
      <section className="relative w-full h-auto py-6 sm:h-[87vh] pt-32 sm:pt-32">
        {/* hero image */}
          <Image
            id="hero-bg"
            src={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/home/hero-bg.webp"}
            className=" hidden lg:block absolute inset-0  lg:w-full lg:h-full h-full    w-full object-cover  opacity-100"
            alt="hero-bg"
            width={1920}
            height={895}
            priority={true}
          />
            <Image
            id="hero-bg"
            src={"https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/home/smallhero.svg"}
            className="lg:hidden absolute inset-0  lg:w-full lg:h-full h-full    w-full object-cover  opacity-40"
            alt="hero-bg"
            width={522}
            height={322}
            priority={true}
          />

          
         
    
          <div className="relative z-10 flex flex-col gap-3 sm:gap-[1.5rem] items-center text-center px-4 sm:px-0 w-full h-full justify-center">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-heading font-bold">
              Ship Production-Ready <br />
              <span className="bg-gradient-to-r from-text_gradient-primary to-text_gradient-faded bg-clip-text text-transparent">
                Gen AI
              </span>
              &nbsp; Faster
            </h1>
    
            <p className={classNames(text_para_main)}>
              Focus on building your product, not your AI infrastructure. We handle
              the complexities of Gen AI development from data curation to
              deployment, so you can accelerate your time-to-market and gain a
              competitive edge.
            </p>
            <CalendlyWidget btnText='Meet Our AI Expert' btnClassName='!px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem]' isArrow={true}/>
          </div>
        </section>
      </>
        
      );
}

export default LandingHeroSection
