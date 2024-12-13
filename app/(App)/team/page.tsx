import { TeamUsSection } from "@/views/TeamSection";
import LandingLayout from "../layout";
import { sanityFetch } from "@/sanity/lib/client";
import { TEAM_SECTION_QUERY } from "@/sanity/query";
import mhbnImg from "@/assets/mhbnimg.webp"
import harrisimg from "@/assets/harrisimg.webp"
import zainRazaImg from "@/assets/zainRaza.webp"
import servicebg from "@/assets/Servicebg.webp"
import hadi from "@/assets/teampics/hadi.webp"
import wahab from "@/assets/teampics/wahab.webp"
import ahmad from "@/assets/teampics/ahmad.webp"
import ahmadimran from "@/assets/teampics/ahmadimran.webp"
import abdullah from "@/assets/teampics/abdullah.webp"
import alishba from "@/assets/teampics/alishba.webp"
import adeel from "@/assets/teampics/adeel.webp"
import hibba from "@/assets/teampics/hibba.webp"
import zain from "@/assets/teampics/zain.webp"
import faseeh from "@/assets/teampics/faseeh.webp"
import haider from "@/assets/teampics/haiderzaidi.webp"
import omer from "@/assets/teampics/omer.webp"
import nidaabid from "@/assets/teampics/nidaabid.webp"
import niddaasim from "@/assets/teampics/nidaasim.webp"
import saad from "@/assets/teampics/saadali.webp"
import khalid from "@/assets/teampics/khalid.webp"
import hamza from "@/assets/teampics/hamza.webp"
import ans from "@/assets/teampics/ans.webp"
import hassam from "@/assets/teampics/hassam.webp"
import javeriasyed from "@/assets/teampics/javeriasyed.webp"
import moazzam from "@/assets/teampics/moazam.webp"
import haiderali from "@/assets/teampics/haider.webp"
import javaryakamran from "@/assets/teampics/javeriakamran.webp"
import aftab from "@/assets/teampics/aftab.webp"
export const metadata={
  title:"Meet the Team | Centrox AI ",
  description:"Meet the expert team behind Centrox AI. Our team of AI Specialist, Co-founder, engineers, managers and marketers driving innovative AI-powered solutions"
}
async function TeamPage() {
  const teamData = await sanityFetch({
    query: TEAM_SECTION_QUERY,
  });

  // console.log("team data is", teamData);
  const teamsData = [
    {
      LeadersImgs: [
        {
          designation: "Co-Founder & CEO",
          img: mhbnImg,
          linkedINUrl: "https://www.linkedin.com/in/mhbn",
          name: "Muhammad Haris Bin Naeem",
          alt:"Muhammad Haris Bin Naeem Centrox Co-founder and CEO"
        },
        {
          designation: "Co-Founder & CTO",
          img: harrisimg,
          linkedINUrl: "https://www.linkedin.com/in/harris-perceptron",
          name: "Muhammad Harris​​​​‌‌",
          alt:"Muhammad Harris Co-Founder & CTO"
        },
        {
          designation: "Co-Founder & Growth Director",
          img: zainRazaImg,
          linkedINUrl: "https://www.linkedin.com/in/syed-zain-raza-ba96899b",
          name: "Syed Zain Raza",
          alt:"Syed Zain Raza Co-Founder & Growth Director"
        },
      ],
      bgImage: servicebg,
	  description:"Our team holds immense expertise in delivering you the best AI powered solution which can transform the shape of innovation in technology, as we hold a group of driven engineers who have joined hands to contribute to the AI revolution.",
      mainSectionheading: "Meet Our Expert Team of AI, Backend and Frontend Engineers Solving Real Word Problems.",
      secondSectionHeading: "Leaders of Centrox​​​​‌‌‍​",
      seconSectionDescription:"Our leaders believe in extending their expertise for AI innovation, they envision to uplift the current standards by providing automated solutions for the problems given by the customers, through continuous learning and knowing where to apply it.",
      teamSectionHeading: "Meet Our Team",
      teamSectionDescription:"We have found some extremely talented and passionate AI, Backend, Frontend, and Marketing Experts; driven to empower the AI revolution. Our team works proactively to architect and deliver the tailored solution for your needs.",
      teamSectionImgs: [
        {
          designation: "AI Engineer",
          img: haider,
          linkedINUrl: "https://www.linkedin.com/in/haiderr-zaidi",
          name: "Zulfiqar Haider Zaidi",
          category: "AI/ml_engineers",
          alt: "Zulfiqar Haider Zaidi, AI Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "AI Engineer",
          img: hassam,
          linkedINUrl: "https://www.linkedin.com/in/hassam-nazir-kh/",
          name: "Hassam Nazir",
          category: "AI/ml_engineers",
          alt: "Hassam Nazir, AI Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "AI Engineer",
          img: ans,
          linkedINUrl: "https://www.linkedin.com/in/ans-hussain/",
          name: "Ans Hussain",
          category: "AI/ml_engineers",
          alt: "Ans Hussain, AI Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Product Manager",
          img: abdullah,
          linkedINUrl: "https://www.linkedin.com/in/abdullah-qureshi5/",
          name: "Abdullah Qureshi",
          category: "product",
          alt: "Abdullah Qureshi, Product Manager, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Product Manager",
          img: hibba,
          linkedINUrl: "https://www.linkedin.com/in/hibba-saleem-a38433130",
          name: "Hibba Saleem",
          category: "product",
          alt: "Hibba Saleem, Product Manager, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Frontend Engineer",
          img: wahab,
          linkedINUrl: "https://www.linkedin.com/in/abdul-wahab-1a9494198/",
          name: "Abdul Wahab",
          category: "developers",
          alt: "Abdul Wahab, Frontend Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Frontend Engineer",
          img: hadi,
          linkedINUrl: "https://www.linkedin.com/in/muhammad-hadi-09a7a2251/",
          name: "Muhammad Hadi",
          category: "developers",
          alt: "Muhammad Hadi, Frontend Engineer, posing for head shot sitting in front of Centrox logo"
        },
   
        {
          designation: "Full Stack Developer",
          img: moazzam,
          linkedINUrl: "https://www.linkedin.com/in/syed-moazzam/",
          name: "Syed Moazzam Ahmed",
          category: "developers",
          alt: "Syed Moazzam Ahmed, Full Stack Developer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Full Stack Developer",
          img: haiderali,
          linkedINUrl: "https://www.linkedin.com/in/haiderali-tech/",
          name: "Haider Ali",
          category: "developers",
          alt: "Haider Ali, Full Stack Developer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Backend Engineer",
          img: ahmadimran,
          linkedINUrl: "https://www.linkedin.com/in/ahmed-imran-5236bb160/",
          name: "Ahmad Imran",
          category: "developers",
          alt: "Ahmad Imran, Backend Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Backend Engineer",
          img: omer,
          linkedINUrl: "https://www.linkedin.com/in/muhammad-omer-qasim-03a218242/",
          name: "Muhammad Omer",
          category: "developers",
          alt: "Muhammad Omer, Backend Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Backend Engineer",
          img: adeel,
          linkedINUrl: "https://www.linkedin.com/in/adeelirshad808/",
          name: "Adeel Irshad",
          category: "developers",
          alt: "Adeel Irshad, Backend Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "DevOps Engineer",
          img: khalid,
          linkedINUrl: "https://www.linkedin.com/in/khalid-khushal",
          name: "Khalid Kushal",
          category: "developers",
          alt: "Khalid Kushal, DevOps Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "UI/UX Designer",
          img: javeriasyed,
          linkedINUrl: "https://www.linkedin.com/in/javeria-syed-492702210/",
          name: "Javeria Syed",
          category: "developers",
          alt: "Javeria Syed, UI/UX Designer, posing for head shot sitting in front of Centrox logo"
        },
      
        {
          designation: "App Developer",
          img: faseeh,
          linkedINUrl: "https://www.linkedin.com/in/faseeh-abbas-khan/",
          name: "Faseeh Abbas",
          category: "developers",
          alt: "Faseeh Abbas, App Developer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "App Developer",
          img: alishba,
          linkedINUrl: "https://www.linkedin.com/in/alishbah-naveed/",
          name: "Alishbah Naveed",
          category: "developers",
          alt: "Alishbah Naveed, App Developer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "QA Engineer",
          img: zain,
          linkedINUrl: "https://www.linkedin.com/in/ali-zain-455740198/",
          name: "Ali Zain",
          category: "",
          alt: "Ali Zain, QA Engineer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "SEO Specialist",
          img: ahmad,
          linkedINUrl: "https://www.linkedin.com/in/muhammad-ahmad-52ba4a235",
          name: "Muhammad Ahmad",
          category: "marketing_specialists",
          alt: "Muhammad Ahmad, SEO Specialist, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Marketing Executive",
          img: nidaabid,
          linkedINUrl: "http://www.linkedin.com/in/nida-abid-100",
          name: "Nida Abid",
          category: "marketing_specialists",
          alt: "Nida Abid, Marketing Executive, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Digital Marketer",
          img: niddaasim,
          linkedINUrl: "https://www.linkedin.com/in/nida-asim-90807a1a7/",
          name: "Nida Asim",
          category: "marketing_specialists",
          alt: "Nida Asim, Digital Marketer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Digital Marketing Lead",
          img: saad,
          linkedINUrl: "https://www.linkedin.com/in/saad-ali-7203b7218/",
          name: "Saad Ali",
          category: "marketing_specialists",
          alt: "Saad Ali, Digital Marketing Lead, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Lead Generation Executive",
          img: hamza,
          linkedINUrl: "http://www.linkedin.com/in/muhammad-hamza-shahbaz-a37a861a5",
          name: "Hamza Shahbaz",
          category: "marketing_specialists",
          alt: "Hamza Shahbaz, Lead Generation Executive, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Copy Writer",
          img: javaryakamran,
          linkedINUrl: "https://www.linkedin.com/in/javarya-kamran-b41a3a222/",
          name: "Javarya Kamran",
          category: "marketing_specialists",
          alt: "Javarya Kamran, Copy Writer, posing for head shot sitting in front of Centrox logo"
        },
        {
          designation: "Operations Manager",
          img: aftab,
          linkedINUrl: "http://www.linkedin.com/in/muhammad-aftab-a4b132169",
          name: "Muhammad Aftab",
          category: "",
          alt: "Muhammad Aftab, Operations Manager, posing for head shot sitting in front of Centrox logo"
        }
      ],
      
	thirdSectionDescription:"",
	thirdSectionheading:"",
	thirdSectoinImg:""
    },
  ];
  return <TeamUsSection props={teamsData} />;
}
export default TeamPage;