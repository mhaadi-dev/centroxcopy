import mhbImg from "@/assets/mhbnimg.png";
import harrisImg from "@/assets/harrisimg.png";
import zainRazaImg from "@/assets/zainrazaupdatedImage.svg";
import Image from "next/image";
import HeroImage from "@/public/images/updatedAboutUs.webp";
import sectionImg from "@/assets/aboutusbackground.webp";

import wasayImg from "@/assets/wasayimg.svg";
import nidaImg from "@/assets/nidaImg.svg";
import alishbaImg from "@/assets/AlishbaImg.svg";
import asadKhanIMg from "@/assets/asadkhanImg.svg";
import moqImg from "@/assets/moq.webp";
import aliZainIMg from "@/assets/alizainimg.svg";
import ahmadImg from "@/assets/muhammadahman.jpg";

import SaadAliImg from "@/assets/saadali.jpeg";
import HamzaShahbazImg from "@/assets/hamzashahbazImg.jpg";
import AhmedImranImg from "@/assets/AhmedimranImg.jpg";
import baddarImg from "@/assets/baddarImg.png";
import hassamImg from "@/assets/hassamImg.png";
import aftabImg from "@/assets/aftabimg.jpg";

import LinkedIn from "@/assets/linkedin.svg";
import abdImg from "@/assets/abdimg.png";
import hamzaEjImg from "@/assets/hamzahEjaz.png";
import hibbaImg from "@/assets/hibbaimg.png";
import khalidImg from "@/assets/khalidimg.png";
import adeelImg from "@/assets/adeelImg.png";
import quratulainImg from "@/assets/quratulainImg.png";
import faseehImg from "@/assets/faseehImg.png";
import wahabImg from "@/assets/wahabImg.png";
import asadImg from "@/assets/asadImg.png";
import saadImg from "@/assets/saadImg.png";
import hadiImg from "@/assets/mhadiimg.jpeg";

import { Toast } from "../Toast/toast";
import { sectionDiscriptions, sectionHeadings } from "@/helpers/common";
const owners = [
  {
    name: "Muhammad Harris Bin Naeem",
    designation: "Co-Founder & CEO",
    link: "https://www.linkedin.com/in/mhbn",
    img: mhbImg,
  },

  {
    name: "Muhammad Harris",
    designation: "Co-Founder & CTO",
    link: "https://www.linkedin.com/in/harris-perceptron",
    img: harrisImg,
  },
  {
    name: "Syed Zain Raza",
    designation: "Co-Founder & Director Growth",
    link: "https://www.linkedin.com/in/syed-zain-raza-ba96899b",
    img: zainRazaImg,
  },
];

const team = [
  {
    name: "Abdullah Qureshi",
    designation: "Mobile Engineer",
    link: "https://www.linkedin.com/in/abdullah-qureshi5",
    img: abdImg,
  },

  {
    name: "Hamzah Ejaz",
    designation: "Sr. Web Engineer",
    link: "https://www.linkedin.com/in/hamzah-ejaz",
    img: hamzaEjImg,
  },
  {
    name: "Muhammad Omer Qasim Khan",
    designation: "Backend Developer",
    link: "https://www.linkedin.com/in/muhammad-omer-qasim-03a218242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img: moqImg,
  },
  {
    name: "Hibba Saleem",
    designation: "Project Manager",
    link: "https://www.linkedin.com/in/hibba-saleem-a38433130",
    img: hibbaImg,
  },

  {
    name: "Khalid Khushal",
    designation: "Backend Engineer",
    link: "https://www.linkedin.com/in/khalid-khushal",
    img: khalidImg,
  },
  {
    name: " Adeel Irshad",
    designation: "Backend Engineer",
    link: "https://www.linkedin.com/in/adeelirshad808",
    img: adeelImg,
  },
  {
    name: "Qurat Ul Ain",
    designation: "QA Executive",
    link: "https://pk.linkedin.com/company/centroxai", //change
    img: quratulainImg,
  },

  {
    name: "Faseeh Abbas",
    designation: "Sr. Mobile Engineer",
    link: "https://www.linkedin.com/in/faseeh-abbas-khan-196544202",
    img: faseehImg,
  },

  {
    name: "Abdul Wahab",
    designation: "Web Engineer",
    link: "https://www.linkedin.com/in/abdul-wahab-1a9494198/", //change
    img: wahabImg,
  },
  // {
  //   name: "Hamza Imran",
  //   designation: "Mobile Engineer",
  //   link: "https://www.linkedin.com/in/hamza-imran-536392223",
  //   img: hamzaImranImg,
  // },
  {
    name: "Asad Mehmood",
    designation: "Data Ops Manager",
    link: "https://www.linkedin.com/in/asad-mehmood-54364b175",
    img: asadImg,
  },
  {
    name: "Saad Javed",
    designation: "Solution Architect",
    link: "https://www.linkedin.com/in/saadjaved120",
    img: saadImg,
  },
  {
    name: "Nida Abid",
    designation: "Growth Engineer",
    link: "http://www.linkedin.com/in/nida-abid-100",
    img: nidaImg,
  },
  {
    name: "Asad Khan",
    designation: "Mobile App Engineer",
    link: "https://www.linkedin.com/in/asad-khan-a63480198/",
    img: asadKhanIMg,
  },
  {
    name: "Alishba Naveed",
    designation: "Mobile Engineer",
    link: "https://www.linkedin.com/in/alishbah-naveed/",
    img: alishbaImg,
  },
  {
    name: "Syed Wasi Ur Rehman",
    designation: "UI/UX Designer",
    link: "https://www.linkedin.com/in/syedwasi73/",
    img: wasayImg,
  },
  {
    name: "Ali Zain",
    designation: "QA Engineer",
    link: "https://www.linkedin.com/in/ali-zain-455740198/",
    img: aliZainIMg,
  },
  {
    name: "Muhammad Hassam",
    designation: "ML/AI Engineer",
    link: "https://www.linkedin.com/in/hassam-nazir-kh/",
    img: hassamImg,
  },
  {
    name: "Hamza Shahbaz",
    designation: "Lead Generation Executive",
    link: "http://www.linkedin.com/in/muhammad-hamza-shahbaz-a37a861a5",
    img: HamzaShahbazImg,
  },
  {
    name: "Saad Ali",
    designation: "Digital Marketing Lead",
    link: "https://www.linkedin.com/in/saad-ali-7203b7218/",
    img: SaadAliImg,
  },
  {
    name: "Badar Jaffer",
    designation: "Digital Marketer",
    link: "https://www.linkedin.com/in/badarjaffer",
    img: baddarImg,
  },
  {
    name: "Ahmed Imran Minhas",
    designation: "Backend Engineer",
    link: "https://www.linkedin.com/in/ahmed-imran-5236bb160/",
    img: AhmedImranImg,
  },
  {
    name: "Muhammad Hadi ",
    designation: "Web Developer",
    link: "https://www.linkedin.com/in/muhammad-hadi-09a7a2251/",
    img: hadiImg,
  },

  {
    name: "Muhammad Ahmad ",
    designation: "Digital Marketing Executive",
    link: "https://www.linkedin.com/in/muhammad-ahmad-52ba4a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img: ahmadImg,
  },
  {
    name: "Muhammad Aftab",
    designation: "Operations Manager",
    link: "http://www.linkedin.com/in/muhammad-aftab-a4b132169",
    img: aftabImg,
  },
];
export const MainAboutUs = () => {
  return (
    <>
      <main className="flex flex-col gap-24 lg:gap-40">
        <div className="">
          <Image
            src={HeroImage}
            alt="sorry"
            // loading="eager"
            // placeholder="blur"
            // onLoad={() => singleImageLoad(HeroImage.src)}
            // blurDataURL={blurDataURL}
            className="opacity-50 h-screen lg:h-full"
          />
          <div className="flex flex-col gap-10 absolute -mt-[100%]  mx-5 sm:mx-0 lg:-mt-[30%] sm:ml-[25%] items-center w-[90%] sm:w-[50%] rounded-2xl p-2 sm:p-10  text-center">
            <div className="text-white text-xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-normal">
              Our Team
            </div>
            <div className="text-white text-md sm:text-xl lg:text-2xl 2xl:text-3xl font-semibold w-[75%] tracking-wide">
              We aim to speed up AI application development and our exceptional
              team is here playing a crucial role in achieving this goal with
              great confidence
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-extrabold sm:text-2xl lg:text-6xl  text-center text-white">
          Leaders of Centrox
        </h1>
        <div className="flex justify-between w-4/5 mx-auto flex-wrap text-white">
          {owners.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-4 rounded-xl"
                style={{
                  border: "1px solid rgba(3, 34, 182, 0.20)",

                  background:
                    "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
                  boxShadow:
                    "0px 0px 16px 0px rgba(255,  255, 255, 0.10) inset",
                  backdropFilter: "blur(18px)",
                }}
              >
                <Image
                  src={el.img}
                  alt="image-data"
                  //   placeholder="blur"
                  // blurDataURL={blurDataURLs[index]}
                  // onLoad={() => handleImageLoad(index, el.img.src)}
                  className="rounded-2xl md:w-32 md:h-32  lg:w-52 lg:h-52 2xl:w-80 2xl:h-80 object-cover "
                />
                <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
                  {el.name}
                </p>
                <div className="flex justify-between items-left w-full mt-1">
                  <p className=" font-medium text-xs md:text-sm  text-blue-secondary">
                    {el.designation}
                  </p>
                  <a href={el.link} target="_blank" rel="noreferrer">
                    <Image src={LinkedIn} className="w-5" alt="" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3rd section */}

        <section className="w-4/5 flex flex-col mx-auto items-center lg:flex-row gap-12">
          <div className="flex flex-col gap-8 w-full">
            <h1 className={sectionHeadings}>
              We work together, as a seemless remote team
            </h1>
            <p className={sectionDiscriptions}>
              Our team thrives on collaboration and innovation, no matter where
              we are. By leveraging cutting-edge tools and a unified vision, we
              deliver outstanding results from across the globe.
            </p>
            {/* <p className={sectionDiscriptions}>
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p> */}
          </div>

          <div className="w-full flex justify-center lg:justify-end items-center">
            <Image src={sectionImg} alt="section img" className="w-4/5" />
          </div>
        </section>

        <div className="text-xl lg:text-4xl text-white font-bold flex justify-center ">
          Meet Our Team
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 3xl:gap-20 w-4/5 mx-auto text-white pb-60 ">
          {team.map((el, index) => {
            return (
              <figure
                key={index}
                className="flex flex-col justify-center items-center p-4 rounded-xl"
                style={{
                  border: "1px solid rgba(3, 34, 182, 0.20)",

                  background:
                    "radial-gradient(51.03% 100.46% at 101.38% 100%, rgba(3, 34, 182, 0.22) 0%, rgba(6, 119, 230, 0.00) 100%), rgba(0, 0, 0, 0.20)",
                  boxShadow: "0px 0px 16px 0px rgba(255, 255, 255, 0.10) inset",
                  backdropFilter: "blur(18px)",
                }}
              >
                <Image
                  src={el.img}
                  alt="image-data"
                  // placeholder="blur"
                  // blurDataURL={teamblurDataURLs[index]}
                  // onLoad={() => handleTeamImageLoad(index, el.img.src)}
                  className="rounded-xl md:w-32 md:h-32  lg:w-52 lg:h-52 2xl:w-80 2xl:h-80 object-cover grayscale-100 contrast-100 brightness-100 mix-blend-multiply"
                />
                <p className="text-sm md:text-lg font-semibold mt-4 text-left tracking-wider w-full">
                  {el.name}
                </p>
                <div className="flex justify-between items-left w-full mt-1">
                  <p className=" font-medium text-xs md:text-sm  text-blue-secondary">
                    {el.designation}
                  </p>
                  <a href={el.link} target="_blank" rel="noreferrer">
                    <Image src={LinkedIn} className="w-5" alt="" />
                  </a>
                </div>
              </figure>
            );
          })}
        </div>

        {/* {showToast && <Toast showToast={showToast} setShowToast={setShowToast} />} */}
      </main>
    </>
  );
};
