import textExtractionImg from "@/public/images/solvingdata/newtextExtaractionImg.webp";
import twodBoudingImg from "@/public/images/solvingdata/new2dBouncingBoxesimg.webp";
import ImageSegmentation from "@/public/images/solvingdata/newimagesegmentionimg.webp";
import RareEventImg from "@/public/images/solvingdata/newrareeventimg.webp";
import { Carousal } from "../SolvingData/SolvingDataCarousal";
const CarousalData = [
    {
      title: "Accurate Annotation",
      description:
        "Centrox’s attention to detail ensures precise object detection, segmentation, and landmark recognition making it ideal for applications like autonomous vehicles, medical imaging, and facial recognition.",
      img: textExtractionImg,
    },
    {
      title: "Efficient Annotation",
      description:
        "Centrox annotation processes allow large-scale data handling enhancing productivity in areas such as sports analytics, surveillance, and autonomous driving systems",
      img: twodBoudingImg,
    },
    {
      title: "Competitive Pricing",
      description:
        "Get high-quality annotations without bearing the hefty costs of in-house teams.",
      img: ImageSegmentation,
    },
    {
      title: "Comprehensive Solutions",
      description:
        "Receive customized categories, multiple attributes per instance matching your exact project requirements.",
      img: RareEventImg,
    },
    {
        title: "Domain-Specific Expertise",
        description:
          "Our deep understanding of NLPs would fit our workflow in assisting in your critical applications development.",
        img: twodBoudingImg,
      },
      {
        title: "Security and Compliance",
        description:
          "We safeguard sensitive information  of your data to industry standards, providing you with peace of mind..",
        img: ImageSegmentation,
      },
  ];
  export const DataOpsCarousal2  = ()=>{
    return (
      <Carousal data={CarousalData} autoplay colsClassName="!grid-cols-6" tabsClassName="!text-xs lg:!text-xs 2xl:!text-lg !whitespace-nowrap" widthClassName="!w-[95%]" />
    )
}