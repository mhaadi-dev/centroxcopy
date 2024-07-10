import classNames from "@/helpers/common";
import { useState } from "react";
import Lines from "@/assets/Lines.svg";
import Image from "next/image";
import { Input } from "./Contactus";
import { Button } from "@/Components/Button.js/button";
import XIcon from "@/assets/Xicon.svg";
import { CHATBOT_API_BASE } from "@/config/secret";
import { AlertOverlay } from "@/Components/AlertOverlays/Alert";
import CentroxWhiteLogo from "@/assets/centroxLogo.svg";
import MsgSend from "@/assets/msgSendGray.svg";
import MsgSendActivate from "@/assets/msgSendWhite.svg";
import UploadDark from "@/assets/UplaodGrey.svg";
import UploadWhite from "@/assets/UplaodWhite.svg";
import DownloadIcon from "@/assets/Download.svg";
import { Card } from "./HealthChatbot";
export const RealEstateChatbot = () => {
  return (
    <div className="bg-black">
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(88.47% 182.54% at 0% 0%, rgba(7, 157, 252, 0.2) 0%, rgba(7, 157, 252, 0) 100%), rgba(6, 6, 6, 1)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={Lines} alt="sorry" className="h-screen w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center">
            Smart Chat bot Agent
          </div>
          <div className="text-white text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center w-[85%] lg:w-[55%] 3xl:w-[40%] mt-8">
            Our AI-powered chat-bot helps you get swift and prompt responses to
            make informed decisions. Try our demo now!
          </div>
          <div className="mt-8 px-5 lg:px-0 pb-10">
            <StepperCom />
          </div>
        </div>
      </div>
    </div>
  );
};

function StepperCom() {
  const [name, setName] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileSuccess, setFileSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [userChat, setUserChat] = useState<any[]>([]);
  const [isFileDownloading, setFileDownloading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setPdfFile(selectedFile);
    } else {
      setError("Please select a PDF file.");
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };
  const uploadFile = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);

      if (pdfFile !== null) {
        formData.append("files", pdfFile);
      } else {
        throw new Error("PDF file is missing.");
      }

      const response = await fetch(`${CHATBOT_API_BASE}/chatdoc/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }
      setIsLoading(false);
      setFileSuccess(true);
      handleNext();
      // setMsg("Your request has been submitted successfully");
      console.log("Response is", response);
    } catch (error) {
      console.error("Error submitting form data:", error);
      setError("There is a problem submitting your request");
      setIsLoading(false);
      setFileSuccess(false);
    }
  };
  const chatBotPrompts = async (chatmsg = "") => {
    setIsLoading(true);
    try {
      const urlEncodedData = new URLSearchParams();
      urlEncodedData.append("name", name);
      if (message !== null || chatmsg !== null) {
        urlEncodedData.append("prompt", message || chatmsg);
      } else {
        throw new Error("Message is missing.");
      }

      const response = await fetch(`${CHATBOT_API_BASE}/chatdoc/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit prompt");
      }
      const responseData = await response.json();
      setIsLoading(false);
      console.log("Response of prompt is", responseData);
      setUserChat([
        ...userChat,
        { name: "user", message: message || chatmsg },
        { name: "chatbot", message: responseData.Response },
      ]);
      setMessage("");
    } catch (error) {
      console.error("Error submitting form data:", error);
      setError("There is a problem submitting your request");
      setIsLoading(false);
    }
  };

  const downloadAndUploadPDF = (pdfUrl: string, fileName: string) => {
    setPdfFile(null);
    setFileSuccess(false);
    setFileDownloading(true);
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName; // Use download attribute to force download
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "application/pdf";
        fileInput.style.display = "none";
        fileInput.addEventListener("change", (event) => {
          const inputElement = event.target as HTMLInputElement;
          if (inputElement.files && inputElement.files.length > 0) {
            const uploadedFile = inputElement.files[0];
            console.log("Uploaded file is in:", uploadedFile);
            setPdfFile(uploadedFile);
          }
        });
        document.body.appendChild(fileInput);
        setFileDownloading(false);
        fileInput.click();
      })
      .catch((error) => {
        console.error("Error downloading PDF file:", error);
        setFileDownloading(false);
      });
  };

  return (
    <div
      className="py-10 gap-10 flex flex-col items-center h-full sm:w-[35rem] lg:w-[50rem]"
      style={{
        borderRadius: "48px",
        background: "rgba(6, 6, 6, 0.10)",
        boxShadow: "0px 0px 17px 0px rgba(7, 157, 252, 0.40)",
        backdropFilter: "blur(6px)",
      }}
    >
      {userChat?.length <= 0 && (
        <div className="w-[80%]  px-2 lg:px-12">
          <div className="w-full px-8">
            <div className="relative flex items-center justify-between w-full">
              <div className="absolute left-0 -mt-2 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
              <div
                className="absolute left-0 top-2/4 -mt-2 h-1 sm:h-2 w-full -translate-y-2/4 bg-blue-azure transition-all duration-500 rounded-md"
                style={{ width: `${(activeStep + 1) * 33.33}%` }}
              ></div>
              <div className="flex flex-col justify-center items-start">
                <div
                  className={`relative cursor-pointer z-10 grid w-10 h-10 lg:w-20 lg:h-20 font-bold -ml-1 j text-white transition-all duration-300 ${
                    activeStep >= 0 ? "bg-blue-azure" : "bg-gray-900"
                  } rounded-full place-items-center step`}
                  onClick={() => {
                    if (name) {
                      setActiveStep(0);
                    }
                  }}
                >
                  1
                </div>
                <div className="text-xs text-white mt-2 -ml-6 lg:-ml-3">
                  Enter Your Name
                </div>{" "}
              </div>
              <div className="flex flex-col justify-center items-start">
                <div
                  className={`relative cursor-pointer z-10 grid ml-8 lg:ml-0 w-10 h-10 lg:w-20 lg:h-20 font-bold text-white transition-all duration-300 ${
                    activeStep >= 1 ? "bg-blue-azure" : "bg-gray-900"
                  } rounded-full place-items-center step`}
                  onClick={() => {
                    if (pdfFile !== null) {
                      setActiveStep(1);
                    }
                  }}
                >
                  2
                </div>
                <div className="text-xs text-white mt-2  lg:-ml-3">
                  Upload your Files
                </div>{" "}
              </div>
              <div className="flex flex-col justify-center items-end">
                <div
                  className={`relative cursor-pointer z-10 grid w-10 h-10 lg:w-20 lg:h-20 -mr-1 font-bold text-white transition-all duration-300 ${
                    activeStep === 2 ? "bg-blue-azure" : "bg-gray-900"
                  } rounded-full place-items-center step`}
                >
                  3
                </div>
                <div className="text-xs text-white mt-2 -mr-6 lg:-mr-0">
                  Input your Inquiry
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
      {userChat?.length <= 0 && (
        <div className="px-8 lg:px-0">
          <div
            className="flex flex-col gap-4 justify-center items-center py-5 w-full text-white"
            style={{
              borderRadius: "24px",
              background:
                "radial-gradient(63.05% 132.04% at 50.07% -40.41%, rgba(7, 157, 252, 0.20) 0%, rgba(7, 157, 252, 0.00) 100%), rgba(0, 0, 0, 0.10)",
              boxShadow: "0px 0px 5px 10px rgba(7, 157, 252, 0.10)",
            }}
          >
            <Image src={CentroxWhiteLogo} alt="" className="w-12" />
            <div className="flex flex-col gap-1 items-center justify-center text-center">
              <div className="text-lg sm:text-xl lg:text-2xl px-4 lg:px-0">
                Welcome! How can I assist you today?
              </div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-md px-[10%] text-center">
                If you have questions, need help, or just want to chat, I'm here
                to help. Feel free to ask me anything!
              </div>
            </div>
          </div>
        </div>
      )}
      {activeStep === 0 && userChat?.length <= 0 && (
        <div className="text-white flex flex-col justify-center h-full gap-10 px-5 lg:px-14 w-full lg:w-[47rem]">
          <Input
            placeholder="Enter your name here"
            name="firstName"
            id="first-name"
            type="text"
            onChange={({ target }) => setName(target.value)}
            value={name}
          >
            <Button
              Icon={!name ? MsgSend : MsgSendActivate}
              onClick={handleNext}
              isDisabled={!name}
              iconClassName="ml-4"
              className="flex items-center justify-center !px-1 !py-1"
            />
          </Input>
        </div>
      )}
      {activeStep === 1 && userChat?.length <= 0 && (
        <div className="text-white flex flex-col justify-center h-full gap-10 px-14">
          <label
            htmlFor="file-uploader1"
            className="cursor-pointer font-semibold text-lg -mb-7 lg:px-10"
          >
            Download one of these files to upload
          </label>
          <div className="flex flex-wrap lg:flex-nowrap gap-y-4 gap-x-2 justify-between lg:px-10 w-full lg:w-[47rem]">
            <div
              className={classNames(
                "p-2 rounded-xl border-2 font-semibold w-full cursor-pointer hover:bg-gray-800",
                pdfFile?.name === "Warren_Buffett.pdf"
                  ? "border-blue-azure border-opacity-80"
                  : "border-white-offWhite",
                isFileDownloading && "cursor-wait"
              )}
              onClick={() =>
                downloadAndUploadPDF(
                  "https://dreamlamp-files.fra1.digitaloceanspaces.com/images/Pdf1.pdf",
                  "Warren_Buffett.pdf"
                )
              }
            >
              <div className="flex justify-between items-center">
                Warren_Buffett.pdf{" "}
                <div className="p-2 bg-gray-downloadDark rounded-md">
                  <Image src={DownloadIcon} alt="" />
                </div>
              </div>
            </div>
            <div
              className={classNames(
                "p-2 rounded-xl border-2 font-semibold w-full cursor-pointer hover:bg-gray-800",
                pdfFile?.name === "Jamie Dimon.pdf"
                  ? "border-blue-azure border-opacity-80"
                  : "border-white-offWhite",
                isFileDownloading && "cursor-wait"
              )}
              onClick={() =>
                downloadAndUploadPDF(
                  "https://dreamlamp-files.fra1.digitaloceanspaces.com/images/Pdf2.pdf",
                  "Jamie Dimon.pdf"
                )
              }
            >
              <div className="flex justify-between items-center">
                Jamie Dimon.pdf{" "}
                <div className="p-2 bg-gray-downloadDark rounded-md">
                  <Image src={DownloadIcon} alt="" />
                </div>
              </div>
            </div>
            <div
              className={classNames(
                "p-2 rounded-xl border-2 font-semibold w-full cursor-pointer hover:bg-gray-800",
                pdfFile?.name === "Real Estate.pdf"
                  ? "border-blue-azure border-opacity-80"
                  : "border-white-offWhite",
                isFileDownloading && "cursor-wait"
              )}
              onClick={() =>
                downloadAndUploadPDF(
                  "https://dreamlamp-files.fra1.digitaloceanspaces.com/images/Pdf3.pdf",
                  "Real Estate.pdf"
                )
              }
            >
              <div className="flex justify-between items-center">
                Real Estate.pdf{" "}
                <div className="p-2 bg-gray-downloadDark rounded-md">
                  <Image src={DownloadIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-10 w-full lg:w-[47rem]">
            {!pdfFile && (
              <label
                htmlFor="file-uploader"
                className="cursor-pointer font-semibold text-lg"
              >
                Choose and Upload file (.PDF Format, Max File Size 20MB )
              </label>
            )}
            <div
              className={classNames(
                "mt-2.5",
                "flex items-center justify-between w-full  text-white shadow-sm rounded-md focus:outline-none sm:text-sm sm:leading-6 p-2 ",
                error ? "border border-red-500" : "border border-gray-cool"
              )}
            >
              {!pdfFile && (
                <label htmlFor="formId9" className="cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    id="formId9"
                    hidden
                  />
                  <div className="rounded-full py-1.5 px-4 border-2 border-gray-cool">
                    Choose your file
                  </div>
                </label>
              )}
              {pdfFile && (
                <div className="flex items-center border border-gray-cool rounded-full justify-between py-2 px-4 bg-gray-800">
                  <p className="text-lg font-semibold mr-2">
                    Selected PDF: {pdfFile.name}
                  </p>

                  <Image
                    src={XIcon}
                    alt="sorry"
                    className="h-3 w-3 text-red-500 cursor-pointer"
                    onClick={() => {
                      setFileSuccess(false);
                      setPdfFile(null);
                    }}
                  />
                </div>
              )}
              <Button
                Icon={
                  !isLoading && !pdfFile
                    ? UploadDark
                    : !isLoading && UploadWhite
                }
                onClick={() => {
                  if (fileSuccess && pdfFile) {
                    setActiveStep(activeStep + 1);
                  } else uploadFile();
                }}
                isLoading={isLoading}
                isDisabled={!pdfFile}
                iconClassName="ml-4"
                className={classNames(
                  "flex items-center justify-center",
                  isLoading ? "!px-2 !py-2" : "!px-1 !py-1"
                )}
              />
            </div>
          </div>
        </div>
      )}
      {activeStep === 2 && userChat?.length <= 0 && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full px-12">
          <Card
            title="Hire a Construction firm"
            description="How to build projects professionally"
            selected={selectedCard === 1}
            onCardClick={() => {
              setSelectedCard(1);
              chatBotPrompts(
                "I am looking for key factors to consider when purchasing a home"
              );
            }}
          />
          <Card
            title="Furnish Your Living"
            description="How to enhance your living space "
            selected={selectedCard === 2}
            onCardClick={() => {
              setSelectedCard(2);
              chatBotPrompts(
                "I am looking for a twin bed apartment for rent in Rawalpindi/Islamabad."
              );
            }}
          />
          <Card
            title="Real Estate"
            description="Buy/Sell property, land, and buildings collectively"
            selected={selectedCard === 3}
            onCardClick={() => {
              setSelectedCard(3);
              chatBotPrompts(
                "How much is the rent for a portion (ground floor) for 15*20?"
              );
            }}
          />
          <Card
            title="Aesthetically Design Buildings"
            description="for pleasing architectural structures"
            selected={selectedCard === 4}
            onCardClick={() => {
              setSelectedCard(4);
              chatBotPrompts(
                "What are some negotiation strategies to use when buying or selling a property?"
              );
            }}
          />
        </div>
      )}
      {activeStep === 2 && fileSuccess && userChat?.length <= 0 && (
        <div className="text-white flex flex-col justify-center h-full gap-10 px-5 lg:px-14 w-full lg:w-[51rem]">
          <Input
            name="message"
            id="message"
            placeholder="Type your message here"
            type="text"
            autoComplete="given-name"
            onChange={({ target }) => setMessage(target.value)}
            value={message}
          >
            <Button
              Icon={
                !isLoading && !message ? MsgSend : !isLoading && MsgSendActivate
              }
              onClick={chatBotPrompts}
              isLoading={isLoading}
              isDisabled={!message}
              iconClassName="ml-4"
              className={classNames(
                "flex items-center justify-center",
                isLoading ? "!px-2 !py-2" : "!px-1 !py-1"
              )}
            />
          </Input>
        </div>
      )}

      {userChat?.length > 0 && (
        <div className="relative w-full h-96">
          <div className="absolute inset-0 overflow-auto pb-16 w-full h-full px-4">
            {userChat?.map((chat, index) => (
              <div
                className={classNames(
                  "flex flex-col",
                  chat?.name === "user" ? "items-end" : "items-start"
                )}
              >
                <span
                  className={classNames(
                    "text-lg font-semibold mr-2 text-white flex",
                    chat?.name === "user" ? "justify-end mt-2" : "mt-2"
                  )}
                >
                  {chat.name === "user" ? (
                    <div className="flex gap-1 rounded-full bg-[#079DFC33] bg-opacity-20 px-4 py-1">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </div>
                  ) : (
                    <div className="flex gap-1 rounded-full bg-[#72EFDD] bg-opacity-20 px-4 py-1">
                      <Image
                        src={CentroxWhiteLogo}
                        alt="sorry"
                        className="w-3"
                      />
                      Bot
                    </div>
                  )}
                </span>{" "}
                <div
                  key={index}
                  className={classNames(
                    "flex items-center min-w-44 max-w-fit p-4 text-white justify-start rounded-2xl mt-1.5 mr-2",
                    chat?.name === "user"
                      ? "bg-[#079DFC33] bg-opacity-20 rounded-tr-none"
                      : "bg-[#72EFDD] bg-opacity-20 rounded-tl-none"
                  )}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {userChat?.length > 0 && (
        <div className=" w-full px-4 lg:[45rem]">
          <Input
            name="message"
            id="message-2"
            placeholder="Type your message here"
            type="text"
            autoComplete="given-name"
            onChange={({ target }) => setMessage(target.value)}
            value={message}
          >
            <Button
              Icon={
                !isLoading && !message ? MsgSend : !isLoading && MsgSendActivate
              }
              onClick={chatBotPrompts}
              isDisabled={!message}
              isLoading={isLoading}
              iconClassName="ml-4"
              className={classNames(
                "flex items-center justify-center",
                isLoading ? "!px-2 !py-2" : "!px-1 !py-1"
              )}
            />
          </Input>
        </div>
      )}

      <AlertOverlay
        heading={error || msg}
        setShow={() => {
          setMsg("");
          setError("");
        }}
        isError={!(msg?.length > 0)}
        show={!!(error?.length > 0 || msg?.length > 0)}
        headingCustomClass={classNames(
          error?.length > 0 ? "!text-red-400" : "!text-gray-500"
        )}
      />
    </div>
  );
}
