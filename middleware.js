import { NextResponse } from 'next/server';

export function middleware (request) {
  const response = NextResponse.next();

  const permissionsPolicy = process.env.PERMISSIONS_POLICY || 'geolocation=(), microphone=()';
  response.headers.set('Permissions-Policy', permissionsPolicy);

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
