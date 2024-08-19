'use client';

import React, { useState, memo, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faDownload } from '@fortawesome/free-solid-svg-icons';
import imageData from '@/data/standarPelayananData.json';
import Image from 'next/image';

const ImageComponent = memo(({ src, alt, width, height }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className='w-full h-auto object-cover rounded-lg mb-4 transition-transform duration-500 ease-in-out'
  />
));

const AlurPengurusan = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleDownload = (src, title) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
      <div className='space-y-4'>
        {imageData.map((section, index) => (
          <div key={index} className='border rounded-lg'>
            <button
              onClick={() => toggleSection(index)}
              className='w-full px-4 py-2 text-left bg-gray-100 border-b rounded-t-lg flex items-center justify-between focus:outline-none transition-all duration-300 ease-in-out'
            >
              <span className='text-lg font-semibold'>{section.title}</span>
              <FontAwesomeIcon
                icon={openSection === index ? faMinus : faPlus}
                className={`ml-2 transform ${
                  openSection === index ? 'rotate-45' : 'rotate-0'
                } transition-transform duration-300 ease-in-out`}
              />
            </button>
            {openSection === index && (
              <div className='px-4 py-2 transition-all duration-300 ease-in-out'>
                <Suspense fallback={<div>Loading...</div>}>
                  <ImageComponent
                    src={section.image}
                    alt={section.title}
                    width={800}
                    height={600}
                    className='w-full h-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl'
                  />
                </Suspense>
                <p>{section.content}</p>
                <div className='flex justify-center mt-4'>
                  <button
                    onClick={() => handleDownload(section.image, section.title)}
                    className='px-8 py-2 bg-blue-600 text-white shadow rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl'
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlurPengurusan;
