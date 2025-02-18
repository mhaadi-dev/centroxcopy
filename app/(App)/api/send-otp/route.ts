import { sendEmail } from '@/helpers/email';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { randomInt } from "crypto";
import { storeOTP } from '@/helpers/otp';
export async function POST(request: Request) {
  const { email } = await request.json();
  
  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      { status: 400 }
    );
  }

  const otp = randomInt(100000, 999999).toString();
  storeOTP(email, otp);
  await sendEmail(email, 'Your OTP Code', `Your OTP code is: ${otp}`); 
  
//   const cookieStore = cookies();
//   cookieStore.set('otp', otp, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     maxAge: 10 * 60, // 10 minutes
//     sameSite: 'strict'
//   });

  return NextResponse.json(
    { message: 'OTP sent successfully' }, 
    { status: 200 }
  );
}