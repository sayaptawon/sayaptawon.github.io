import React, { useState } from 'react';
import Head from 'next/head';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Notification from '@/components/Notification';
import BubbleMessage from '@/components/BubbleMessage';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import metadata from '@/config/metadata';

const Layout = ({ children, title = metadata.title, description = metadata.description }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Tambahkan sufiks ke title
  const fullTitle = `${title} - SAYAP TAWON`;

  return (
    <div data-theme='night' className='flex flex-col min-h-screen'>
      <Head>
        <title>{fullTitle}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={metadata.keywords} />
        <meta name='robots' content={metadata.robots} />
        <meta name='author' content={metadata.author} />
        <meta name='theme-color' content={metadata.themeColor} />

        {/* Open Graph Meta Tags */}
        <meta property='og:title' content={fullTitle} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={metadata.ogImage} />
        <meta property='og:url' content={metadata.canonicalUrl} />
        <meta property='og:type' content='website' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={fullTitle} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={metadata.ogImage} />

        {/* Charset and Viewport */}
        <meta charSet={metadata.charset} />
        <meta name='viewport' content={metadata.viewport} />

        {/* Favicon */}
        <link rel='icon' href={metadata.icon} type='image/x-icon' sizes='any' />
      </Head>

      {/* Navbar */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className='transition-all duration-500 ease-in-out'>{children}</main>

      {/* Notification */}
      <Notification />

      {/* BubbleMessage */}
      <BubbleMessage />

      {/* BackToTop */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
