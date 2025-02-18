
// import { cookies } from 'next/headers';


// export const verifyOTP = (otp: string): boolean => {
//   const cookieStore = cookies();
//   const storedOtp = cookieStore.get('otp')?.value;
//   console.log("STORED", storedOtp);
//   return storedOtp === otp;
// };

// export const storeOTP = (otp: string): void => {
//   const cookieStore = cookies();
//   cookieStore.set('otp', otp, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 10 * 60, // 10 minutes
//     sameSite: 'strict'
//   });
// };



import { randomInt } from "crypto";
import NodeCache from "node-cache";

// OTP cache with a 10-minute expiration time
const otpCache = new NodeCache({ stdTTL: 600 });

export const generateOTP = (): string => {
  return randomInt(100000, 999999).toString();
};



export const storeOTP = (email: string, otp: string): void => {
  console.log("Storing OTP for email:", email, "OTP:", otp);
  const success = otpCache.set(email, otp);
  if (success) {
  } else {
  }
};

export const verifyOTP = (email: string, otp: string): boolean => {
  const storedOtp = otpCache.get(email);  
  if (storedOtp === undefined) {
    console.log("OTP not found in cache or expired.");
  }

  return storedOtp === otp;
};
