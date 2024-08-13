'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import teamData from '@/data/teamData.json';

const Team = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      if (document.readyState === 'complete') {
        setIsPageLoaded(true);
      }
    };

    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  const imageStyle = {
    width: '96px',
    height: '96px',
    objectFit: 'cover',
    objectPosition: 'top',
  };

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200 mb-4'>
      <div className='text-center mb-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Our Team</h2>
        <p className='text-lg text-base-content'>Ketahui lebih lanjut tentang orang-orang di balik proyek ini</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {teamData.map((member, index) => (
          <div key={index} className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'>
            <figure className='relative w-full h-40 flex items-center justify-center'>
              {!isPageLoaded && <div className='loading loading-spinner loading-lg bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400'></div>}
              {isPageLoaded && (
                <div className='mask mask-circle w-24 h-24 flex items-start justify-center'>
                  <Image src={member.photo} alt={member.name} width={96} height={96} style={imageStyle} loading='lazy' />
                </div>
              )}
            </figure>
            <div className='card-body bg-base-200 justify-center items-center text-center p-4'>
              <h3 className='text-xl font-semibold mb-2'>{member.name}</h3>
              <div className='badge badge-primary text-white rounded-full mb-2'>{member.role}</div>
              <p className='text-base'>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
