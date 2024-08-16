import { NextResponse } from 'next/server';

// Daftar asal yang diizinkan
const allowedOrigins = ['https://sayaptawon.github.io', 'https://sayaptawon.vercel.app'];

// Opsi CORS
const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Allow-Credentials': 'true', // Mengizinkan pengiriman kredensial
};

export function middleware(request) {
  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);
  const isPreflight = request.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

// Konfigurasi matcher untuk menentukan rute mana yang menggunakan middleware ini
export const config = {
  matcher: [
    '/api/:path*', // Menetapkan middleware untuk rute API
    '/((?!api|_next/static|_next/image|favicon.ico).*)', // Menetapkan middleware untuk semua rute kecuali rute API, rute statis, dan favicon.ico
  ],
};
