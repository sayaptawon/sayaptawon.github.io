import { NextResponse } from 'next/server';

// Middleware function to handle responses
export function middleware(request) {
  // Create a new response with default settings
  const response = NextResponse.next();

  // Retrieve the Permissions-Policy header from environment variables or set default values
  const permissionsPolicy = process.env.PERMISSIONS_POLICY || 'geolocation=(), microphone=()';
  response.headers.set('Permissions-Policy', permissionsPolicy);

  // Set security-related HTTP headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');

  // Add additional headers for security, if needed
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self';");

  return response;
}

// Define middleware configuration
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
