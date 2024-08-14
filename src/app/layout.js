'use client';

import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import metadata from '@/config/metadata';
import { useState } from 'react';

export default function RootLayout ({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang={metadata.lang}>
      <head>
        <title>{metadata.title}</title>
        <meta charSet={metadata.charset} />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='robots' content={metadata.robots} />
        <meta name='author' content={metadata.author} />
        <meta name='theme-color' content={metadata.themeColor} />
        <meta name='viewport' content={metadata.viewport} />
        <link rel='icon' href={metadata.icon} type='image/x-icon' sizes='any' />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:image' content={metadata.ogImage.url} />
        <meta property='og:image:width' content={metadata.ogImage.width} />
        <meta property='og:image:height' content={metadata.ogImage.height} />
        <meta property='og:url' content={metadata.canonicalUrl} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='SAYAP TAWON' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='twitter:image' content={metadata.twitterImage.url} />
        <meta name='twitter:image:width' content={metadata.twitterImage.width} />
        <meta name='twitter:image:height' content={metadata.twitterImage.height} />

        {/* Canonical URL */}
        <link rel='canonical' href={metadata.canonicalUrl} />

        {/* Structured Data (JSON-LD) */}
        <script type='application/ld+json'>
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${metadata.title}",
            "description": "${metadata.description}",
            "url": "${metadata.canonicalUrl}"
          }
          `}
        </script>

        {/* Permissions-Policy Meta Tag */}
        <meta httpEquiv='Permissions-Policy' content='interest-cohort=()' />
      </head>
      <body>
        {/* SpeedInsights */}
        <SpeedInsights />
        {/* Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* Main Content */}
        <main className='transition-all duration-500 ease-in-out'>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
