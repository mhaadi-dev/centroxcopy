import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, generateToken } from '@/helpers/jwt'
import { Solutions } from '@/helpers/enums'


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')
    const solution = searchParams.get('solution')

    if (!token) {
        return NextResponse.json(
            { error: 'No token provided' }, 
            { status: 401 }
        )
    }

    // Verify token
    const payload = verifyToken(token)

    if (!payload) {
        return NextResponse.json(
            { error: 'Invalid or expired token. Please refresh the page and try again.' },
            { status: 403 }
        )
    }

    if (solution === Solutions.Snap) {
        return NextResponse.redirect("https://bm.demo.centrox.ai:9443/")
    } else if (solution === Solutions.labelling) {
        return NextResponse.redirect("")
    }
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { email } = body

    if (!email) {
        return NextResponse.json(
            { error: 'Email is required' },
            { status: 400 }
        )
    }

    // Generate JWT token
    const token = generateToken(email)
    return NextResponse.json({ token }, { status: 200 })
}