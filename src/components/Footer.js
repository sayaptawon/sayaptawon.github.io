'use client';

import Link from 'next/link';
import footerLinks from '@/data/footerLinks.json';

export default function Footer () {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      {/* Bagian Menu */}
      <nav className='mb-4'>
        <ul className='flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4'>
          {footerLinks.map((link, index) => (
            <li key={index} className='mb-2 md:mb-0'>
              <Link href={link.href}>
                <button className='btn glass btn-xs sm:btn-xs md:btn-sm lg:btn-sm text-white transition-transform transform hover:scale-105'>
                  <span className='px-4'>{link.label}</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Garis pemisah */}
      <hr className='border-t border-gray-600 mb-4 mx-auto w-11/12 lg:w-10/12' />

      {/* Bagian Copyright */}
      <div className='text-center text-xs md:text-sm lg:text-sm'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center'>
          <p className='mb-1 sm:mb-0'>&copy; 2024 Humas Rutan Wonosobo</p>
          <span className='hidden sm:inline-block sm:mx-2'>-</span>
          <p className='mb-1 sm:mb-0'>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
