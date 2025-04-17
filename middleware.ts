import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Ensure this is set in .env if dataset is private
})

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  let { pathname } = url

  // Normalize pathname: remove trailing slash and convert to lowercase
  pathname = pathname.toLowerCase().replace(/\/$/, '')
  // console.log('Middleware running for pathname at', new Date().toISOString(), ':', pathname)
  // console.log('Sanity Client Config:', {
  //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // })

  if (pathname === '/services') {
    url.pathname = '/services/custom-llm-dev'
    const response = NextResponse.redirect(url)
    return response
  }

  let sanityRedirects = []
  try {
    // console.log('Fetching Sanity redirects at', new Date().toISOString())
    sanityRedirects = await client.fetch(
      `*[_type == "redirect" && !(_id in path("drafts.**"))]{
        "source": source.current,
        "destination": destination.current,
        permanent
      }`,
      { cacheBuster: Date.now() }, // Cache-busting parameter
      { cache: 'no-store' }
    )
  } catch (error) {
    console.error('Error fetching Sanity redirects in middleware:', error)
  }

  if (sanityRedirects?.length > 0) {
    // console.log('Sanity Redirects at', new Date().toISOString(), ':', sanityRedirects)
    const redirect = sanityRedirects.find((r: any) => {
      const normalizedSource = r.source.toLowerCase().replace(/\/$/, '')
      return normalizedSource === pathname
    })
    // console.log('Redirect Match:zzzzzzzzzzz', redirect)
    if (redirect) {
      url.pathname = redirect.destination
      const response = NextResponse.redirect(url, {
        status: redirect.permanent ? 301 : 307,
      })
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      return response
    }
  } else {
    // console.log('No Sanity Redirects Found (empty array)')
  }

  const response = NextResponse.next()
  // response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  return response
}

export const config = {
  matcher: ['/services', '/blogs/:path*'],
  runtime: 'experimental-edge', 
}