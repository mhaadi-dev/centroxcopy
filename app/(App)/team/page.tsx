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

async function TeamPage() {
  const teamData = await sanityFetch({
    query: TEAM_SECTION_QUERY,
  });
  console.log("team data is", teamData);
  const teamsData = [
    {
      LeadersImgs: [
        {
          designation: "Co-Founder & CEO",
          img: mhbnImg,
          linkedINUrl: "https://www.linkedin.com/in/mhbn",
          name: "Muhammad Haris Bin Naeem",
        },
        {
          designation: "Co-Founder & CTO",
          img: harrisimg,
          linkedINUrl: "https://www.linkedin.com/in/harris-perceptron",
          name: "Muhammad Harris​​​​‌‌",
        },
        {
          designation: "Co-Founder & Growth Director",
          img: zainRazaImg,
          linkedINUrl: "https://www.linkedin.com/in/syed-zain-raza-ba96899b",
          name: "Syed Zain Raza",
        },
      ],
      bgImage: servicebg,
	  description:"Driven by innovation, united by expertise—our team crafts AI-powered solutions that shape the future of technology.",
      mainSectionheading: "Meet our team of Creators, Designers & World Class Problem Solvers.",
      secondSectionHeading: "Leaders of Centrox​​​​‌‌‍​",
      teamSectionHeading: "Meet Our Team",
      teamSectionImgs:[ 
		{
        designation: "Product Manager",
        img: abdullah,
        linkedINUrl: "https://www.linkedin.com/in/abdullah-qureshi5/",
        name: "Abdullah Qureshi",
      },
	  {
        designation: "Product Manager",
        img: hibba,
        linkedINUrl: "https://www.linkedin.com/in/hibba-saleem-a38433130?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        name: "Hibba Saleem",
      },
	  {
        designation: "Backend Engineer",
        img: ahmadimran,
        linkedINUrl: "https://www.linkedin.com/in/ahmed-imran-5236bb160/",
        name: "Ahmad Imran",
      },
	  {
        designation: "Backend Engineer",
        img: omer,
        linkedINUrl: "",
        name: "Muhammad Omer",
      },
	  {
        designation: "Backend Engineer",
        img: adeel,
        linkedINUrl: "",
        name: "Adeel Irshad",
      },
	  {
        designation: "DevOps Engineer",
        img: khalid,
        linkedINUrl: "https://www.linkedin.com/in/khalid-khushal",
        name: "Khalid Kushal",
      },
	  {
        designation: "Frontend Engineer",
        img: hadi,
        linkedINUrl: "https://www.linkedin.com/in/muhammad-hadi-09a7a2251/",
        name: "Muhammad Hadi",
      },
	  {
        designation: "Frontend Engineer",
        img: wahab,
        linkedINUrl: "",
        name: "Abdul Wahab",
      },
	  {
        designation: "App Developer",
        img: faseeh,
        linkedINUrl: "",
        name: "Faseeh Abbas",
      }, 
	  {
        designation: "App Developer",
        img: alishba,
        linkedINUrl: "https://www.linkedin.com/in/alishbah-naveed/",
        name: "Alishba Naveed",
      },
	  {
        designation: "QA Engineer",
        img: zain,
        linkedINUrl: "",
        name: "Ali Zain",
      },
	  {
        designation: "SEO Specialist",
        img: ahmad,
        linkedINUrl: "https://www.linkedin.com/in/muhammad-ahmad-52ba4a235",
        name: "Muhammad Ahmad",
      },
	  {
        designation: "Marketing Executive",
        img: nidaabid,
        linkedINUrl: "",
        name: "Nida Abid",
      },
	  {
        designation: "Digital Marketer",
        img: niddaasim,
        linkedINUrl: "https://www.linkedin.com/in/nida-asim-90807a1a7/",
        name: "Nida Asim",
      },
	  {
        designation: "Digital Marketing Lead",
        img: saad,
        linkedINUrl: "",
        name: "Saad Ali",
      }, 
	  {
        designation: "Lead Generation Executive",
        img: hamza,
        linkedINUrl: "http://www.linkedin.com/in/muhammad-hamza-shahbaz-a37a861a5",
        name: "Hamza Shahbaz",
      },
	  {
        designation: "AI Engineer",
        img: haider,
        linkedINUrl: "http://www.linkedin.com/in/muhammad-hamza-shahbaz-a37a861a5",
        name: "Zulfiqar Haider Zaidi",
      },
	  
	],
	thirdSectionDescription:"",
	thirdSectionheading:"",
	thirdSectoinImg:""
    },
  ];
  return <TeamUsSection props={teamsData} />;
}
export default TeamPage;