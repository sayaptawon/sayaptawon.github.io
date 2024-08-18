'use client';

import React, { useState, useCallback } from 'react';

const Locations = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);

  const toggleMapVisibility = useCallback(() => {
    setIsMapVisible((prev) => !prev);
  }, []);

  return (
    <section
      data-theme='corporate'
      className='relative p-4 border-b border-gray-200'
    >
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>
        Location
      </h2>
      <div className='w-full max-w-full mx-auto mb-4'>
        <button
          onClick={toggleMapVisibility}
          className='bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300 w-full text-center'
        >
          {isMapVisible ? 'Tutup Peta' : 'Lihat Peta'}
        </button>

        {/* Peta Embed */}
        {isMapVisible && (
          <div className='relative pb-[56.25%] mt-4'>
            {/* Lazy Loading */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9426023177657!2d109.90178739999999!3d-7.360331200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa056029da10b%3A0x1ae278eb49746082!2sRutan%20Klas%20IIB%20Wonosobo!5e0!3m2!1sid!2sid!4v1722634772451!5m2!1sid!2sid'
              className='absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-lg transition-opacity duration-300'
              allowFullScreen
              aria-hidden='false'
              tabIndex='0'
              title='Rutan Wonosobo'
              loading='lazy'
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Locations;
