import Image from 'next/image';
import heroBg from "@/assets/hero-bg.webp";
import { Button } from '@/Components/Button.js/button';
import Arrow from "@/assets/RightArrow.svg";
import { CalendlyWidget } from '@/Components/common/Calendly';


const LandingHeroSection = () => {
    return (
        <section className="relative w-full h-auto py-4 sm:h-[85vh] pt-32 sm:pt-32">
          <Image
            id="hero-bg"
            src={heroBg}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            alt="hero-bg"
            priority
          />
    
          <div className="relative z-10 flex flex-col gap-2 sm:gap-2 items-center text-center px-4 sm:px-0 w-full h-full justify-center">
            <div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold">
              Ship Production-Ready <br />
              <span className="bg-gradient-to-r from-text_gradient-primary to-text_gradient-faded bg-clip-text text-transparent">
                Gen AI
              </span>
              &nbsp; Faster
            </div>
    
            <div className="text-white text-lg sm:text-md lg:text-lg 2xl:text-xl font-normal max-w-lg sm:max-w-2xl p-4 rounded-lg">
              Focus on building your product, not your AI infrastructure. <br /> We handle
              the complexities of Gen AI development from data curation to
              deployment, so you can accelerate your time-to-market and gain a
              competitive edge.
            </div>
            <CalendlyWidget btnText='Meet Our AI Expert' btnClassName='!px-[0.5rem] !py-[0.3rem] 2xl:!px-[1.5rem] 2xl:!py-[0.8rem]'/>
          </div>
        </section>
      );
}

export default LandingHeroSection
