import { TeamUsSection } from "@/views/TeamSection";

import servicebg from "@/assets/Servicebg.webp";
import {team} from "@/store/imageStore"
export const metadata = {
  title: "Meet the Team | Centrox AI ",
  description:
    "Meet the expert team behind Centrox AI. Our team of AI Specialist, Co-founder, engineers, managers and marketers driving innovative AI-powered solutions",
  alternates: {
    canonical: "https://centrox.ai/team"
  }
};
async function TeamPage(props:any) {
  const teamsData = [
    {
      LeadersImgs: [
        {
          designation: "Co-Founder & CEO",
          img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/team/mhbnimg.webp",
          linkedINUrl: "https://www.linkedin.com/in/mhbn",
          name: "Muhammad Haris Bin Naeem",
          alt: "Muhammad Haris Bin Naeem Centrox Co-founder and CEO"
        },
        {
          designation: "Co-Founder & CTO",
          img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/team/harrisimg2.webp",
          linkedINUrl: "https://www.linkedin.com/in/harris-perceptron",
          name: "Muhammad Harris​​​​‌‌",
          alt: "Muhammad Harris Co-Founder & CTO"
        },
        {
          designation: "Co-Founder & Growth Director",
          img: "https://centrox-landing-bucket.s3.eu-north-1.amazonaws.com/team/zainRaza.webp",
          linkedINUrl: "https://www.linkedin.com/in/syed-zain-raza-ba96899b",
          name: "Syed Zain Raza",
          alt: "Syed Zain Raza Co-Founder & Growth Director"
        }
      ],
      bgImage: servicebg,
      description:
        "Our AI, Backend, and Frontend Engineers team holds immense expertise in delivering you the best AI powered solution which can transform the shape of innovation in technology, as we hold a group of driven engineers who have joined hands to contribute to the AI revolution.",
      mainSectionheading:
        "Meet Our Expert Team of AI Engineers Solving Real Word Problems.",
      secondSectionHeading: "Leaders of Centrox​​​​‌‌‍​",
      seconSectionDescription:
        "Our leaders believe in extending their expertise for AI innovation, they envision to uplift the current standards by providing automated solutions for the problems given by the customers, through continuous learning and knowing where to apply it.",
      teamSectionHeading: "Meet Our Team",
      teamSectionDescription:
        "We have found some extremely talented and passionate AI, Backend, Frontend, and Marketing Experts; driven to empower the AI revolution. Our team works proactively to architect and deliver the tailored solution for your needs.",
        teamSectionImgs: [
          {
            designation: "AI Engineer",
            img: team.haider,
            linkedINUrl: "https://www.linkedin.com/in/haiderr-zaidi",
            name: "Zulfiqar Haider Zaidi", 
            category: "AI/ml_engineers",
            alt: "Zulfiqar Haider Zaidi, AI Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "AI Engineer",
            img: team.hassam,
            linkedINUrl: "https://www.linkedin.com/in/hassam-nazir-kh/",
            name: "Hassam Nazir",
            category: "AI/ml_engineers", 
            alt: "Hassam Nazir, AI Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "AI Engineer",
            img: team.ans,
            linkedINUrl: "https://www.linkedin.com/in/ans-hussain/",
            name: "Ans Hussain",
            category: "AI/ml_engineers",
            alt: "Ans Hussain, AI Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Product Manager",
            img: team.abdullah,
            linkedINUrl: "https://www.linkedin.com/in/abdullah-qureshi5/",
            name: "Abdullah Qureshi",
            category: "product",
            alt: "Abdullah Qureshi, Product Manager, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Product Manager",
            img: team.hibba,
            linkedINUrl: "https://www.linkedin.com/in/hibba-saleem-a38433130",
            name: "Hibba Saleem",
            category: "product",
            alt: "Hibba Saleem, Product Manager, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Frontend Engineer",
            img: team.wahab,
            linkedINUrl: "https://www.linkedin.com/in/abdul-wahab-1a9494198/",
            name: "Abdul Wahab",
            category: "Engineers",
            alt: "Abdul Wahab, Frontend Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Frontend Engineer",
            img: team.hadi,
            linkedINUrl: "https://www.linkedin.com/in/muhammad-hadi-09a7a2251/",
            name: "Muhammad Hadi",
            category: "Engineers",
            alt: "Muhammad Hadi, Frontend Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Full Stack Developer",
            img: team.moazzam,
            linkedINUrl: "https://www.linkedin.com/in/syed-moazzam/",
            name: "Syed Moazzam Ahmed",
            category: "Engineers",
            alt: "Syed Moazzam Ahmed, Full Stack Developer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Full Stack Developer",
            img: team.haiderali,
            linkedINUrl: "https://www.linkedin.com/in/haiderali-tech/",
            name: "Haider Ali",
            category: "Engineers",
            alt: "Haider Ali, Full Stack Developer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Backend Engineer",
            img: team.ahmadimran,
            linkedINUrl: "https://www.linkedin.com/in/ahmed-imran-5236bb160/",
            name: "Ahmad Imran",
            category: "Engineers",
            alt: "Ahmad Imran, Backend Engineer, posing for head shot sitting in front of Centrox logo"
          },

          {
            designation: "Senior Backend Engineer",
            img: team.adeel,
            linkedINUrl: "https://www.linkedin.com/in/adeelirshad808/",
            name: "Adeel Irshad",
            category: "Engineers",
            alt: "Adeel Irshad, Backend Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Senior DevOps Engineer",
            img: team.khalid,
            linkedINUrl: "https://www.linkedin.com/in/khalid-khushal",
            name: "Khalid Kushal",
            category: "Engineers",
            alt: "Khalid Kushal, DevOps Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "UI/UX Designer",
            img: team.javeriasyed,
            linkedINUrl: "https://www.linkedin.com/in/javeria-syed-492702210/",
            name: "Javeria Syed",
            category: "Engineers",
            alt: "Javeria Syed, UI/UX Designer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Senior Mobile Engineer",
            img: team.faseeh,
            linkedINUrl: "https://www.linkedin.com/in/faseeh-abbas-khan/",
            name: "Faseeh Abbas",
            category: "Engineers",
            alt: "Faseeh Abbas, App Developer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Mobile Engineer",
            img: team.alishba,
            linkedINUrl: "https://www.linkedin.com/in/alishbah-naveed/",
            name: "Alishbah Naveed",
            category: "Engineers",
            alt: "Alishbah Naveed, App Developer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "QA Engineer",
            img: team.zain,
            linkedINUrl: "https://www.linkedin.com/in/ali-zain-455740198/",
            name: "Ali Zain",
            category: "",
            alt: "Ali Zain, QA Engineer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "SEO Specialist",
            img: team.ahmad,
            linkedINUrl: "https://www.linkedin.com/in/muhammad-ahmad-52ba4a235",
            name: "Muhammad Ahmad",
            category: "marketing_specialists",
            alt: "Muhammad Ahmad, SEO Specialist, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Marketing Executive",
            img: team.nidaabid,
            linkedINUrl: "http://www.linkedin.com/in/nida-abid-100",
            name: "Nida Abid",
            category: "marketing_specialists",
            alt: "Nida Abid, Marketing Executive, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Digital Marketer",
            img: team.niddaasim,
            linkedINUrl: "https://www.linkedin.com/in/nida-asim-90807a1a7/",
            name: "Nida Asim",
            category: "marketing_specialists",
            alt: "Nida Asim, Digital Marketer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Digital Marketing Lead",
            img: team.saad,
            linkedINUrl: "https://www.linkedin.com/in/saad-ali-7203b7218/",
            name: "Saad Ali",
            category: "marketing_specialists",
            alt: "Saad Ali, Digital Marketing Lead, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Lead Generation Executive",
            img: team.hamza,
            linkedINUrl: "http://www.linkedin.com/in/muhammad-hamza-shahbaz-a37a861a5",
            name: "Hamza Shahbaz",
            category: "marketing_specialists",
            alt: "Hamza Shahbaz, Lead Generation Executive, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Copy Writer",
            img: team.javaryakamran,
            linkedINUrl: "https://www.linkedin.com/in/javarya-kamran-b41a3a222/",
            name: "Javarya Kamran",
            category: "marketing_specialists",
            alt: "Javarya Kamran, Copy Writer, posing for head shot sitting in front of Centrox logo"
          },
          {
            designation: "Operations Manager",
            img: team.aftab,
            linkedINUrl: "http://www.linkedin.com/in/muhammad-aftab-a4b132169",
            name: "Muhammad Aftab",
            category: "",
            alt: "Muhammad Aftab, Operations Manager, posing for head shot sitting in front of Centrox logo"
          }
        ],

      thirdSectionDescription: "",
      thirdSectionheading: "",
      thirdSectoinImg: ""
    }
  ];
  return <TeamUsSection props={teamsData} />;
}
export default TeamPage;


