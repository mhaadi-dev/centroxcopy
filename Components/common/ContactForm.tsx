//@ts-nocheck
"use client";

import classNames, {
  h2ClassName,
  p2ClassName,
  p4ClassName,
  sectionHeadings,
  sectionsubheadings,
  text_h2_class,
  text_para_2,
  text_para_3,
} from "@/helpers/common";
import { CommonInput } from "./CommonInput";
import { PhoneNumber } from "../PhoneInput/PhoneInput";
import { TextArea } from "./TextArea";
import { FileUpload } from "./FileUpload";
import { Button } from "../Button.js/button";
import Arrow from "@/assets/RightArrow.svg";
import { useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DropDown } from "./DropDown";
import { FormSubmissionModal } from "./FormSubmissionModal";

import { PortableText } from "@portabletext/react";
import { PortableComponent } from "@/Components/common/PortableText";
import Image from "next/image";
import { CalendlyWidget } from "./Calendly";
import { text } from "stream/consumers";

export const ContactForm = ({ heading, description, disclaimer, img }: any) => {
  const [formModal, setFormModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    country: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
    file: "",
  });

  const [err, setError] = useState("");
  const calendlywidgetref = useRef(null);

  const validateEmail = (val: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(val);
  };

  const validatePrice = (val: string) => {
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    return priceRegex.test(val);
  };

  const submitBtnHandler = async () => {
    let missingData = [];

    // Validate the form data
    for (let key in formData) {
      // @ts-ignore
      if (key !== "file" && formData[key] === "") {
        missingData.push(key);
      }
    }

    // If there are missing fields, set the error message
    if (missingData.length > 0) {
      let newData = missingData.filter((x) => x !== "file");
      setIsLoading(false);
      setError(
        `Fields are required (${newData.map((x) => `${x.toUpperCase()}`)})`
      );
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email");

      return;
    }
    if (formData.phone.length <= 6) {
      setError("Phone number you enter is not valid");

      return;
    } else {
      setIsLoading(true);

      const fields = [
        { name: "firstname", value: formData.name },
        {
          name: "company",
          value: formData.company,
        },
        { name: "country", value: formData.country },
        { name: "subject", value: formData.subject },
        { name: "budget", value: formData.budget },
        { name: "document", value: formData.file },

        { name: "phone", value: formData.phone },
        { name: "email", value: formData.email },
        { name: "message", value: formData.message },
      ];
      const data = {
        fields: fields,
        context: {
          pageUri: window.location.href,
          pageName: "page",
        },
      };
      try {
        const response = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/46946787/14afa6bc-ac3b-4980-9de2-a7874fa6b1f5`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (response.status == 200) {
          setIsLoading(false);
          setFormData({
            name: "",
            company: "",
            phone: "",
            country: "",
            email: "",
            subject: "",
            budget: "",
            message: "",
            file: "",
          });
          setFormModal(true);
        }
      } catch (err: any) {
        setIsLoading(false);
        setError(err);
      }

      // All fields are filled, proceed with API call
      // Replace this with your actual API call logic
      // exampleApiCall(formData);
    }
  };

  return (
    <>
      {formModal && (
        <FormSubmissionModal
          onClose={() => {
            setFormModal(false);
          }}
        />
      )}
      <section className="flex lg:w-2/3   flex-col gap-12 mx-auto ">
        <div className="w-full flex-6 p-2  flex flex-col gap-2 lg:gap-4">
          <h2 className={classNames(text_h2_class, "lg:!w-full !text-left")}>
            {heading}
          </h2>
          {/* {description ? <PortableText value={description} components={PortableComponent} /> : null}
           */}
          {description ? (
            <p className={classNames(text_para_2,)}>
            <button className="">
               <CalendlyWidget btnText="Book a Call" customClassName="text-[#E5E7EB] font-paragraph text-[1rem] lg:text-[1.2rem] 2xl:text-[1.5rem] leading-[1.6rem] 2xl:leading-[2.25rem] text-blue-azure !-ml-2 lg:m-0 font-medium !p-0 !m-0"  btnClassName="!inline-block !text-2xl underline !text-blue-azure  !font-normal !font-paragraph hover:bg-white/0 !p-0  !border-none !bg-none"/>
            </button>
           
             <span> or
              fill out the form below and we’ll get back to you once we’ve
              processed your request.</span> 
            </p>
          ) : null}

          {/* <p className={classNames(p2ClassName,"lg:!w-full lg:!text-left")}>Book a call or fill out the form below and we’ll get back to you once we’ve processed your request. </p> */}
          <form className="grid  w-full lg:grid-cols-2 gap-12 ">
            <div className="col-span-2 w-full lg:col-span-1">
              <CommonInput
                type="text"
                value={formData.name}
                onBlur={(val, err) => {
                  if (val == "") {
                    err("Name can not be empty");
                  } else {
                    err("");
                  }
                }}
                onChange={(val) => {
                  setFormData({ ...formData, name: val });
                }}
                className="border-b !border-white !bg-gray-graydark w-full !text-white"
                placeholder="Name*"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <CommonInput
                value={formData.company}
                type="text"
                onBlur={(val, err) => {
                  if (val == "") {
                    err("Company can not be empty");
                  } else {
                    err("");
                  }
                }}
                onChange={(val) => {
                  setFormData({ ...formData, company: val });
                }}
                className="border-b !border-white !bg-gray-graydark w-full !text-white"
                placeholder="Company*"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <CommonInput
                value={formData.country}
                type="text"
                className="border-b !border-white !bg-gray-graydark w-full !text-white"
                placeholder="Country*"
                onChange={(val) => {
                  setFormData({ ...formData, country: val });
                }}
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <PhoneNumber
                phoneValue={formData.phone}
                getValue={(val) => setFormData({ ...formData, phone: val })}
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <CommonInput
                type="text"
                onBlur={(val, err) => {
                  if (!validateEmail(val)) {
                    err("Please enter a valid email address");
                  } else {
                    err("");
                  }
                }}
                value={formData.email}
                onChange={(val) => {
                  setFormData({ ...formData, email: val });
                }}
                className="border-b !border-white !bg-gray-graydark w-full !text-white"
                placeholder="Corporate Email*"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <DropDown
                selectedValue={formData.subject}
                defaultOption="Subject*"
                className="bg-gray-gray4"
                onChange={(val) => {
                  setFormData({ ...formData, subject: val });
                }}
                values={["gray", "red", "blue"]}
              />
            </div>
            <div className="col-span-2 ">
              <TextArea
                className=" bg-gray-graydark !border-white border-b"
                placeholder="Message*"
                value={formData.message}
                onChange={(val) => {
                  setFormData({ ...formData, message: val });
                }}
              />
            </div>
            <div className="col-span-2 ">
              <CommonInput
                type="number"
                value={formData.budget}
                onBlur={(val, err) => {
                  if (!validatePrice(val)) {
                    err("Please enter a valid price");
                  } else {
                    err("");
                  }
                }}
                onChange={(val) => {
                  setFormData({ ...formData, budget: val });
                }}
                className="border-b !border-white !bg-gray-graydark w-full !text-white col-span-2"
                placeholder="Project Budget($)*"
              />
            </div>
            <div className="col-span-2">
              <TextArea
                className="border-b !border-white !bg-gray-graydark w-full !text-white col-span-2"
                placeholder="Describe your needs in detail"
              />
              <p className={classNames(text_para_3)}>
                Please include project details, duration, tech stack, IT
                professionals needed, and other relevant info.
              </p>
            </div>

            <div className="col-span-2">
              {!formData.file && (
                <FileUpload
                  onChange={(val) => {
                    console.log("value is", val);
                    setFormData({ ...formData, file: val });
                  }}
                />
              )}
              {formData.file && (
                <div className="flex gap-2 bg-gray-gray4 p-2 items-center rounded-lg  text-white">
                  <p>{formData.file}</p>
                  <XMarkIcon
                    className="w-6 cursor-pointer"
                    onClick={() => {
                      setFormData({ ...formData, file: "" });
                    }}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-between gap-12 items-center col-span-2">
              {/* <p className={classNames(p4ClassName,"flex-1")}>
              Please be informed that when you click the Send button Centrox will process your personal data in accordance with our Privacy Policy for the purpose of providing you with appropriate information.
              </p> */}
              {/* {disclaimer ? <PortableText value={disclaimer} components={PortableComponent} /> : null} */}
              {disclaimer ? (
                <p className={classNames(text_para_3)}>{disclaimer}</p>
              ) : (
                ""
              )}
              <Button
                isLoading={isLoading}
                onClick={submitBtnHandler}
                content="Send"
                // Icon={Arrow}
                // iconClassName="-mt-1"
                // isLefticon={false}
                className="!rounded-full"
              />
            </div>
            {err && (
              <div className="col-span-2 flex justify-between items-center p-2 rounded-lg border-2 border-red-600 ">
                <p className="text-red-600">{err}</p>
                <XMarkIcon
                  className="w-6 text-white  cursor-pointer"
                  onClick={() => {
                    setError("");
                  }}
                />
              </div>
            )}
          </form>
        </div>
        {/* <figure className="w-full lg:w-1/2 relative pt-[100%] lg:pt-[50%] z-10 ">
            {img && (
              <Image
                src={img}
                alt="form-img "
                loading="lazy"
                className="object-fill w-full h-full"
               
                fill
              />
            )}
        </figure> */}
      </section>
    </>
  );
};
