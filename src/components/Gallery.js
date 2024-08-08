'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import galleryData from '@/data/galleryData.json';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setImages(galleryData);
    setLoading(false);
  }, []);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section data-theme='corporate' className='gallery-container p-4 mx-auto border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Gallery</h2>
      {loading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4'>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300'>
              <div className='w-full h-64 bg-gray-200 rounded-lg skeleton'></div>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <div className='loading loading-ring loading-md'></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4'>
          {images.map((image, index) => (
            <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer' onClick={() => openImage(index)}>
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-64 object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-70'
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)} // Ensure loading is false on error
              />
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <p className='text-white text-center text-lg font-semibold px-4 py-2'>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedIndex !== null && (
        <div className='modal modal-open fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-hidden' onClick={closeImage}>
          <div
            className='relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mx-4 my-6 sm:mx-8 sm:my-12'
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <button className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition z-10' onClick={closeImage}>
              <FontAwesomeIcon icon={faTimes} className='text-lg' />
            </button>
            <div className='relative flex items-center justify-center'>
              <button className='absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition z-10' onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
              </button>
              <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} className='w-full h-auto max-h-96 object-cover' />
              <button className='absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition z-10' onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
              </button>
            </div>
            <div className='p-4 text-center text-lg font-semibold text-gray-800'>{images[selectedIndex].caption}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
