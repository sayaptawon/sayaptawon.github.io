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
  reactStrictMode: true,
  output: 'standalone',
  productionBrowserSourceMaps: false,
};

export default nextConfig;
