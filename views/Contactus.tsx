"use client";
import { AlertOverlay } from "@/Components/AlertOverlays/Alert";
import { Button } from "@/Components/Button.js/button";
import { PhoneNumber } from "@/Components/PhoneInput/PhoneInput";
import { Toast } from "@/Components/Toast/toast";
import { API_BASE } from "@/config/secret";
import classNames from "@/helpers/common";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { ChangeEvent, FocusEvent, useEffect, useState } from "react";

export const ContactUsSection = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disabled,setDisabled]  = useState(false)
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [apiResponseError,setApiError ] = useState<string>("")

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("form data value is", formData);
  return (
    <div className="relative isolate lg:h-screen bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-72">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-gray-800/20"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#056EE1] to-[#221c8f] opacity-20"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Centrox AI is at the core of smart machines, making advanced
              solutions for websites, AI, and phone apps. We're experts at
              creating clever web tools using AI to give users great
              experiences. Whether it's designing easy websites, using smart AI
              tricks, or making smooth mobile apps, Centrox AI is here to make
              cool tech that helps our clients. We love coming up with new ideas
              and doing our best to make super-smart tech solutions for
              everyone.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  116, 166 Geary St. 15th Floor, San Francisco, CA, San
                  Francisco, US, 94108
                  {/* <br />
									Gulberg, Islamabad Pakistan */}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:team@centrox.io">
                    hello@centrox.ai
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          onSubmit={() => {}}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-72"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <Input
                label="First name"
                name="firstName"
                id="first-name"
                type="text"
                autoComplete="given-name"
                onChange={handleInputChange}
                value={formData.firstName}
                errMsg={errorMessage}
              />
              <Input
                label="Last name"
                name="lastName"
                id="last-name"
                type="text"
                value={formData.lastName}
                autoComplete="family-name"
                onChange={handleInputChange}
                errMsg={errorMessage}
              />
              <div className="sm:col-span-2">
                <Input
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  errMsg={errorMessage}
                />
              </div>
              <div className="sm:col-span-2">
                <div className="flex flex-col gap-2">
                  <p className="block text-md font-semibold leading-6 tracking-widest text-white">
                    Phone Number (Optional)
                  </p>
                  <PhoneNumber
                    getValue={(val) =>
                      setFormData({ ...formData, phoneNumber: val })
                    }
                  />
                </div>
                {/* <Input
									label="Phone number"
									name="phoneNumber"
									id="phone-number"
									type="tel"
									autoComplete="tel"
									onChange={handleInputChange}
									value={formData.phoneNumber}
									errMsg={errorMessage}
								/> */}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-md font-semibold leading-6 tracking-widest text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className={`block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50 sm:text-sm sm:leading-6 ${
                      errorMessage && !formData.message
                        ? "border-2 border-red-500"
                        : "focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50"
                    }`}
                    onChange={handleInputChange}
                    value={formData.message}
                  />
                  {errorMessage && !formData.message && (
                    <p className="text-red-500 text-sm font-semibold font-mono mt-3">
                      {"Message is required"}
                    </p>
                  )}
                </div>
              </div>
            </div>
			{apiResponseError && <p className="text-red-500 text-sm font-semibold font-mono mt-3 ">{apiResponseError}</p>}
            <div className="mt-8 flex justify-end">

              <Button
                isLoading={isLoading}
			isDisabled={disabled}
                content="Send Message"
                className="font-bold bg-gray-charcoal border-2 border-white-offWhite opacity-70 border-opacity-70"
                onClick={async () => {
                  const numericRegex = /^[0-9]+$/;
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (
                    !formData?.firstName.trim() ||
                    !formData?.lastName.trim() ||
                    !formData?.email.trim() ||
                    !formData?.phoneNumber.trim() ||
                    !formData?.message.trim() ||
                    // !numericRegex.test(formData?.phoneNumber.trim()) ||
                    !emailRegex.test(formData?.email.trim())
                  ) {
                    setErrorMessage(true);
                    return;
                  } else {
                    setIsLoading(true);
                    setError("");
                    setMsg("");
                    try {
                      const response = await fetch(
                        `${API_BASE}/contact-us/create`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(formData),
                        }
                      );

                      if (!response.ok) {
					
                        throw new Error("Failed to submit form data");
                      }
					  setDisabled(true)
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: "",
                        message: "",
                      });
                      setIsLoading(false);
                      setMsg("Your request has been submitted successfuly");
                    } catch (error) {
						setApiError("There was a problem submitting the form")

                      console.error("Error submitting form data:", error);
                      setError("There is a problem submitting your request");
                      setIsLoading(false);
                    }
                  }
                }}
              />
            </div>
          </div>
        </form>
      </div>
      {showToast && <Toast showToast={showToast} setShowToast={setShowToast} />}
	  {apiResponseError && (
          <p className="text-red-500 text-sm font-semibold font-mono mt-1">
            {apiResponseError}
          </p>
        )}
      {msg && (
        <AlertOverlay
          heading={error || msg}
          setShow={() => {
            setMsg("");
            setError("");
            router.push(`/`);
          }}
          isError={!(msg?.length > 0)}
          show={!!(error?.length > 0 || msg?.length > 0)}
          headingCustomClass={classNames(
            error?.length > 0 ? "!text-red-400" : "!text-gray-500"
          )}
        />
      )}
    </div>
  );
};

interface InputProps {
  label?: string;
  name: string;
  id: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur?: (
    event: FocusEvent<HTMLInputElement>,
    setError: (error: string) => void
  ) => void;
  onFocus?: () => void;
  isOptional?: boolean;
  errMsg?: string | boolean;
  children?: React.ReactNode; // Corrected the type for children
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  id,
  type = "text",
  autoComplete,
  onChange,
  value,
  onBlur,
  onFocus,
  isOptional = false,
  errMsg,
  children,
  placeholder,
}) => {
  const [val, setVal] = useState<string>("");
  const [error, setError] = useState<string>("");
  useEffect(() => {
    setVal(value);
  }, [value]);
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (!val && isOptional) {
      setError(`${label || name} is required`);
    } else if (type === "tel" || type === "number") {
      const numericRegex = /^[0-9]+$/;
      if (!val) {
        setError("Phone is required");
        return;
      }
      if (!numericRegex.test(val)) {
        setError("Please enter numeric values only");
      } else {
        setError("");
      }
    } else if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) {
        setError("Email is required");
        return;
      }
      if (!emailRegex.test(val)) {
        setError("Please enter a valid email");
      } else {
        setError("");
      }
    } else {
      setError("");
    }
    onBlur?.(event, setError);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError("");
    if ((type === "tel" || type === "number") && event.target.value !== "") {
      const numericRegex = /^[0-9]*$/;

      if (!numericRegex.test(event.target.value)) {
        setError("Please enter numeric values only");
      } else {
        setError("");
      }
    }
    setVal(event.target.value);
    onChange(event);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-md font-semibold leading-6 tracking-widest text-white"
      >
        {label}
      </label>
      <div
        className={classNames(
          "mt-2.5",
          children &&
            "flex items-center w-full border border-gray-cool text-white shadow-sm rounded-md focus:outline-none sm:text-sm sm:leading-6 p-2 "
        )}
      >
        <input
          type={type}
          name={name}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={classNames(
            children &&
              "w-full h-10 border-0 bg-transparent focus:outline-none px-2 placeholder:text-gray-400",
            !children &&
              "block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 placeholder:text-gray-400 ring-inset ring-white/10 focus:outline-none sm:text-sm sm:leading-6",
            error
              ? "border-2 border-red-500"
              : !children &&
                  "focus:ring-2 focus:ring-white focus:ring-opacity-90 focus:shadow-md focus:shadow-yellow-50"
          )}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          value={val}
        />
        {children}
		
        {error && (
          <p className="text-red-500 text-sm font-semibold font-mono mt-1">
            {error}
          </p>
        )}



		
      </div>
    </div>
  );
};
