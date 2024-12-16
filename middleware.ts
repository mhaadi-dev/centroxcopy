import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname === '/services') {
    // Redirect to "/services/custom-llm-dev"
    url.pathname = '/services/custom-llm-dev';
    return NextResponse.redirect(url);
  }
  // if (url.pathname === '/case-studies') {
  //   // Redirect to "/services/custom-llm-dev"
  //   url.pathname = '/case-studies/pocketmate';
  //   return NextResponse.redirect(url);
  // }
  // if (url.pathname === '/blogs' || url.pathname.startsWith("/blogs")) {
  //   // Redirect to "/services/custom-llm-dev"
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }
  // if (url.pathname === '/solutions') {
  //   // Redirect to "/services/custom-llm-dev"
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }
  // if (url.pathname === '/industries') {
  //   // Redirect to "/services/custom-llm-dev"
  //   url.pathname = '/';
  //   return NextResponse.redirect(url);
  // }


  // Continue to other routes if no match
  return NextResponse.next();
}

// Apply the middleware to only the "/services" route
export const config = {
  matcher: '/services',
};
