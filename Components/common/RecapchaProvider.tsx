"use client"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import React, { PropsWithChildren } from "react";

interface RecapchaProviderProps extends PropsWithChildren {
  siteKey: string; 
}

const RecapchaProvider: React.FC<RecapchaProviderProps> = ({ siteKey, children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecapchaProvider;