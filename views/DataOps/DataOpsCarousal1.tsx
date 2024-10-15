import textExtractionImg from "@/public/images/solvingdata/newtextExtaractionImg.webp";
import twodBoudingImg from "@/public/images/solvingdata/new2dBouncingBoxesimg.webp";
import ImageSegmentation from "@/public/images/solvingdata/newimagesegmentionimg.webp";
import RareEventImg from "@/public/images/solvingdata/newrareeventimg.webp";
import { Carousal } from "../SolvingData/SolvingDataCarousal";
const CarousalData = [
    {
      title: "Image Annotations",
      description:
      "Centrox provides detailed object detection, segmentation, and landmark recognition services, ensuring precise identification and labelling within images.",
      img: textExtractionImg,
    },
    {
      title: "Video Annotations",
      description:
        "Centrox specializes in movement prediction by analyzing and tracking objects within videos, offering valuable insights for sports analytics, surveillance, and autonomous driving systems.",
      img: twodBoudingImg,
    },
    {
      title: "Audio Annotations",
      description:
        "Improve model understanding by accurate speech recognition. Quality audio annotation services are essential for virtual assistants, call center analytics, podcast transcription, and multilingual speech applications.",
      img: ImageSegmentation,
    },
    {
      title: "Text Annotations",
      description:
        " Enhance your textual datasets with multiple languages and scripts. We offer text classification, key phrase extraction, intent classification, question answering and text summarization.",
      img: RareEventImg,
    },

]

export const DataOpsCarousal1 = ()=>{
    return (
        <section>
            <Carousal data={CarousalData}  />
        </section>
    )
}