import { NextResponse } from 'next/server';
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { token } = body;
        const secret = process.env.RECAPTCHA_SECRET_KEY;

        if (!token || !secret) {
            return NextResponse.json({ success: false, error: 'Missing token or secret' }, { status: 400 });
        }

        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`;
        const response = await fetch(verifyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: "no-store"
        });

        const result = await response.json();

        if (result.success !== undefined && result.success) {
            return NextResponse.json({ success: true, message: 'reCAPTCHA verified successfully.' }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, error: 'reCAPTCHA verification failed.' }, { status: 400 });
        }
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return NextResponse.json({ success: false, error: 'Error during reCAPTCHA verification.' }, { status: 500 });
    }
}