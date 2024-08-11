'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import headerData from '@/data/headerData.json';

const Header = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className='text-center p-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white'>
      <div className='flex justify-center'>{loading ? <div className='w-36 h-36 skeleton mask mask-hexagon-2 shadow-lg'></div> : <Image src={headerData.image.src} alt={headerData.image.alt} width={headerData.image.width} height={headerData.image.height} className='bg-neutral mask mask-hexagon-2 shadow-lg pl-3' priority/>}</div>

      <div className='mt-4'>
        {loading ? <div className='w-3/4 h-10 skeleton mx-auto rounded'></div> : <h1 className='uppercase text-4xl md:text-5xl lg:text-6xl font-bold mt-4'>{headerData.title}</h1>}
        {loading ? <div className='w-1/2 h-8 skeleton mx-auto rounded mt-2'></div> : <p className='text-lg md:text-xl mt-2'>{headerData.description}</p>}
      </div>
    </header>
  );
};

export default Header;
