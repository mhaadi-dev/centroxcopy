import { verifyOTP } from '@/helpers/otp';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { email, otp } = await request.json();
    // console.log("VERIFY",email,otp)

    if (!email || !otp) {
        return NextResponse.json(
            { error: 'Email and OTP are required' },
            { status: 400 }
        );
    }

    const isValid = verifyOTP(email,otp); 

    if (!isValid) {
        return NextResponse.json(
            { error: 'Invalid OTP' },
            { status: 400 }
        );
    }

    return NextResponse.json({ message: 'OTP verified successfully' }, { status: 200 });
}