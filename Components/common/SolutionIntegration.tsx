"use client"
import { useState, useEffect } from "react"
import ContactInput from "@/Components/common/ContactInput"
import SectionTag from "@/Components/common/SectionTag"
import classNames, { section_wrapper_class, text_h2_class, text_para_2 } from "@/helpers/common"
import { Solutions } from "@/helpers/enums"
import { Button } from "../Button.js/button"

const SolutionIntegration = () => {
    const [showDemo, setShowDemo] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [showOtpInput, setShowOtpInput] = useState(false)
    const [demoToken, setDemoToken] = useState<string | null>(null)

    // Reset demo if token expires
    useEffect(() => {
        if (showDemo && !demoToken) {
            setShowDemo(false)
            setError("Demo session expired. Please submit the form again.")
        }
    }, [showDemo, demoToken])

    // Check token validity periodically
    useEffect(() => {
        if (demoToken) {
            const checkToken = async () => {
                try {
                    const response = await fetch(`/api/demo-url?token=${demoToken}`)
                    if (!response.ok) {
                        setDemoToken(null)
                    }
                } catch (error) {
                    setDemoToken(null)
                }
            }

            // Check every 5 minutes
            const interval = setInterval(checkToken, 5 * 60 * 1000)
            return () => clearInterval(interval)
        }
    }, [demoToken])

    const sendOtp = async () => {
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address")
            return
        }

        if (!name.trim()) {
            setError("Please enter your name")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const payload={
                email:email
            }
            const response = await fetch('/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to send OTP");
            }

            setShowOtpInput(true); // Show OTP input after OTP is sent
        } catch (error: any) {
            setError(error.message || "An error occurred. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    const verifyOtpAndSubmit = async () => {
      
        if (!otp) {
            setError("Please enter the OTP")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const verifyResponse = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp })
            });

            if (!verifyResponse.ok) {
                const data = await verifyResponse.json();
                throw new Error(data.error || "Failed to verify OTP");
            }

            // If OTP is verified, submit the form to HubSpot
            const formResponse = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: [
                        {
                            name: "Full Name",
                            value: name
                        },
                        {
                            name: "Subject",
                            value: "Accessing Demo of Snap & Measure Solution"
                        },
                        {
                            name: "Email",
                            value: email
                        },
                    ]
                })
            });

            if (!formResponse.ok) {
                const data = await formResponse.json();
                throw new Error(data.error || "Failed to submit form");
            }

            // Get the demo access token
            const tokenResponse = await fetch('/api/demo-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const tokenData = await tokenResponse.json();
            
            if (!tokenResponse.ok) {
                throw new Error(tokenData.error || "Failed to get demo access");
            }
            setDemoToken(tokenData.token);
            setShowSuccess(true);
            
            setTimeout(() => {
                setShowSuccess(false);
                setShowDemo(true);
            }, 3000);

        } catch (error: any) {
            setError(error.message || "An error occurred. Please try again later.")
        } finally {
            setLoading(false)
        }
    }

    const handleRetry = () => {
        setShowDemo(false)
        setDemoToken(null)
        setError(null)
    }

    if (showDemo && demoToken) {
        return (
            <section className={classNames(section_wrapper_class)}>
                <div className="relative w-full">
                    <iframe 
                        src={`/api/demo-url?token=${demoToken}&solution=${Solutions.Snap}`}
                        className="w-full h-screen border-0 rounded-lg"
                        title="Solution Demo"
                    />
                    {error && (
                        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-4 text-center">
                            {error}
                            <button 
                                onClick={handleRetry}
                                className="ml-4 underline hover:no-underline"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            </section>
        )
    }

    if (showSuccess) {
        return (
            <section className={classNames(section_wrapper_class, "flex items-center justify-center")}>
                <div className="text-center">
                    <div className="text-green-500 text-4xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
                    <p className="text-gray-300">Redirecting to demo...</p>
                </div>
            </section>
        )
    }

    return (
        <section className={classNames(section_wrapper_class)}>
            <header aria-label="Centrox Contact" className="flex flex-col gap-y-4">
                <SectionTag text="Solution Demo"/>
                <h2 className={classNames(text_h2_class,"text-center")}>
                    Try Our Solution Now
                </h2>
                <p className={classNames(text_para_2,"text-center capitalize w-full sm:w-[60%] mx-auto")}>
                    Please provide your full name & email below before accessing the demo.
                </p>
                {error && (
                    <p className="text-red-500 text-center">{error}</p>
                )}
            </header>
            {!showOtpInput && <div className="flex flex-col gap-y-0 lg:gap-y-0 lg:flex-row gap-x-5">
             <input 
                type="text" 
                name="name" 
                className="block rounded-full text-xl text-white mx-auto w-full mt-6 bg-transparent border border-gray-400 sm:w-[70%] xl:w-[50%] py-4 px-5 lg:px-8 lg:py-[1.45rem]" 
                placeholder="Your Full Name" 
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input 
                type="email" 
                name="email" 
                className="block rounded-full text-xl text-white mx-auto w-full mt-6 bg-transparent border border-gray-400 sm:w-[70%] xl:w-[50%] py-4 px-5 lg:px-8 lg:py-[1.45rem]" 
                placeholder="Your Email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>}
           
            {showOtpInput && (
                <input 
                    type="text" 
                    name="otp" 
                    className="block rounded-full text-xl text-white mx-auto w-full mt-6 bg-transparent border border-gray-400 sm:w-[70%] xl:w-[50%] py-4 px-5 lg:px-8 lg:py-[1.95rem]" 
                    placeholder="Enter 6 digits OTP sent to your email" 
                    onChange={(e) => setOtp(e.target.value)}
                    value={otp}
                />
            )}
            {!showOtpInput ? (
               


            <Button
                onClick={sendOtp}
                content= {loading ? 'Sending OTP...' : 'Send OTP'}
                Icon={''}
                iconClassName="!-mt-1"
                isLefticon={false}
                isDisabled={loading}
                className={classNames("w-full sm:w-[70%] xl:w-[50%] my-8 mx-auto  sm:!px-[1.4rem] 2xl:!px-[2rem] sm:!py-[1rem] 2xl:!py-[1.15rem]")}
              />

                 

                
            ) : (
                <button 
                    onClick={verifyOtpAndSubmit} 
                    disabled={loading}
                    className="block rounded-full text-xl text-white mx-auto w-full mt-6 bg-green-600 sm:w-[70%] xl:w-[50%] py-4 px-5 lg:px-8 lg:py-[1.95rem] hover:bg-green-600"
                >
                    {loading ? 'Verifying OTP...' : 'Verify OTP'}
                </button>
            )}
       
        </section>
    )
}

export default SolutionIntegration