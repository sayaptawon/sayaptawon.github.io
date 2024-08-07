/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // Diaktifkan jika Anda memerlukan fitur eksperimen
    // misalnya, reactRoot atau serverComponents
  },
  reactStrictMode: true, // Aktifkan React Strict Mode untuk pengujian yang lebih ketat
};

export default nextConfig;
