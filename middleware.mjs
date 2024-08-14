import { NextResponse } from 'next/server';

export function middleware (request) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();

  const permissionsPolicy = process.env.PERMISSIONS_POLICY || 'geolocation=(), microphone=()';
  response.headers.set('Permissions-Policy', permissionsPolicy);

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self';");

  if (url.pathname !== '/' && !url.pathname.startsWith('/api') && !url.pathname.startsWith('/_next/static') && !url.pathname.startsWith('/_next/image') && !url.pathname.startsWith('/favicon.ico')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
