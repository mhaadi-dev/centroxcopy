// import { NextRequest, NextResponse } from 'next/server'
// import { verifyToken, generateToken } from '@/helpers/jwt'
// import { Solutions } from '@/helpers/enums'


// export async function GET(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams
//     const token = searchParams.get('token')
//     const solution = searchParams.get('solution')

//     if (!token) {
//         return NextResponse.json(
//             { error: 'No token provided' }, 
//             { status: 401 }
//         )
//     }

//     // Verify token
//     const payload = verifyToken(token)

//     if (!payload) {
//         return NextResponse.json(
//             { error: 'Invalid or expired token. Please refresh the page and try again.' },
//             { status: 403 }
//         )
//     }

//     if (solution === Solutions.Snap) {
//         return NextResponse.redirect("https://bm.demo.centrox.ai:9443/")
//     } else if (solution === Solutions.labelling) {
//         return NextResponse.redirect("")
//     }
// }


import { generateToken, verifyToken } from '@/helpers/jwt'
import { NextRequest, NextResponse } from 'next/server'

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
            { error: 'Invalid or expired token' },
            { status: 403 }
        )
    }

    let targetUrl = ""
    if (solution === "snap and measure") {
        targetUrl = "https://bmf.demo.centrox.ai:9443/"
    } else if (solution === "labelling") {
        targetUrl = "https://labelling.demo.centrox.ai/"
    } else {
        return NextResponse.json(
            { error: 'Invalid solution' },
            { status: 400 }
        )
    }

    // Proxy the request to the actual solution
    const response = await fetch(targetUrl, {
        method: "GET", // Change to POST if GET is not allowed
        headers: {
            "Content-Type": "application/json"  // If needed
        },
    });
     
    const body = await response.text();
    return new Response(body, {
        status: response.status,
        headers: response.headers
    });
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


