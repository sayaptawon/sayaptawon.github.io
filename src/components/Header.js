'use client';

import React from 'react';
import Image from 'next/image';
import headerData from '@/data/headerData.json';

const Header = () => {
  return (
    <header className='text-center p-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white'>
      <div className='relative w-[150px] h-[150px] mx-auto'>
        <Image src={headerData.image.src} alt={headerData.image.alt} fill style={{ objectFit: 'cover' }} className='bg-neutral mask mask-hexagon-2 shadow-lg pl-3' priority />
      </div>

      <div className='mt-4'>
        <h1 className='uppercase text-4xl md:text-5xl lg:text-6xl font-bold'>{headerData.title}</h1>
        <p className='text-lg md:text-xl mt-2'>{headerData.description}</p>
      </div>
    </header>
  );
};

export default Header;
