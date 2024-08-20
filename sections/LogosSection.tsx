import classNames, {
    sectionheadings,
  sectionHeadings,
  sectionsSectionHeadings,
  sectionsubheadings,
} from "@/helpers/common";

import pytorchIcon from "@/public/images/genAi/pytorchIcon.svg";
import tensorflow from "@/public/images/genAi/tensorflow.svg";
import hugginfaceIcon from "@/public/images/genAi/huggingfaceicon.svg";
import kerasIcon from "@/public/images/genAi/kerasIcon.svg";

import openCvIcon from "@/public/images/genAi/opencvicon.svg";

import awsIcon from "@/public/images/genAi/awsicon.svg";

import azureIcon from "@/public/images/genAi/azureIcon.svg";
import googleCLoudIcon from "@/public/images/genAi/googlecloudicon.svg";
import kubernetisIcon from "@/public/images/genAi/kubernetisIcon.svg";
import dockerIcon from "@/public/images/genAi/dockericon.svg";
import mlFlowICon from "@/public/images/genAi/mlFlowIcon.svg";
import weightIcon from "@/public/images/genAi/weightIcons.svg";
import Image from "next/image";

interface DataI {
  title: string;
  icons: {
    icon: any;
    title: string;
  }[];
}
interface PropsI {
  data: DataI[];
}
const data: DataI[] = [
  {
    title: "Deep Learning Frameworks",
    icons: [
      {
        icon: pytorchIcon,
        title: "PyTorch",
      },
      {
        icon: tensorflow,
        title: "TensorFlow",
      },
    ],
  },
  {
    title: "Libraries",
    icons: [
      {
        icon: hugginfaceIcon,
        title: "Hugging Face Transformers",
      },
      {
        icon: kerasIcon,
        title: "Keras",
      },
      {
        icon: hugginfaceIcon,
        title: "Hugging Face Diffusers",
      },
      { icon: openCvIcon, title: "OpenCv" },
    ],
  },
  {
    title: "Cloud Platform",
    icons: [
      {
        icon: awsIcon,
        title: "AWS",
      },
      {
        icon: azureIcon,
        title: "Azure",
      },
      {
        icon: googleCLoudIcon,
        title: "Google Cloud",
      },
    ],
  },
  {
    title: "Infrastructure & Orchestration",
    icons: [
      {
        icon: kubernetisIcon,
        title: "Kubernetes",
      },
      {
        icon: dockerIcon,
        title: "Docker",
      },
    ],
  },
  {
    title: "Monitoring & Experiment Tracking",
    icons: [
      {
        icon: mlFlowICon,
        title: "MLflow",
      },
      {
        icon: weightIcon,
        title: "Weight & Biases",
      },
      {
        icon: tensorflow,
        title: "Tensor Board",
      },
    ],
  },
];
export const LogosSection = () => {
  return (
    <section className="w-4/5 mx-auto  mt-24 lg:mt-40 flex flex-col gap-12">
      <h2 className={sectionheadings}>Tech Stack We Use</h2>
      <p className={sectionsubheadings}>
        We utilize a comprehensive and adaptable tech stack to build and deploy
        your Generative AI solutions.
      </p>
      <div className="grid grid-cols-2 gap-8">
        {data.map((x, index) => {
          return (
            <div
              style={{
                border: "3px solid rgba(1, 184, 252, 0.20)",
                background: "rgba(1, 184, 252, 0.10)",
                boxShadow: "0px 0px 13px 0px rgba(1, 184, 252, 0.40) inset",
              }}
              key={index}
              className={classNames(
                " p-6  rounded-xl w-full flex flex-col gap-6",
                index === data.length - 1 ? "" : ""
              )}
            >
              <div className="flex justify-center  items-center">
                {x.icons.map((el, idx) => {
                  return (
                    <div
                      className={classNames(
                        "flex w-full   flex-col gap-2 items-center"
                      )}
                    >
                      <div
                        className={classNames(
                          "flex w-full flex-col gap-2 items-center justify-center  py-4",
                          idx !== x.icons.length - 1 ? "border-r-2 " : ""
                        )}
                      >
                        <Image
                          src={el.icon}
                          className={classNames("h-12")}
                          alt="icon"
                        />
                        <h5 className="text-white font-semibold text-xs text-center">
                          {el.title}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 className={classNames(sectionsubheadings, "!font-semibold")}>
                {x.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};
