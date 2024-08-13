'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import galleryData from '@/data/galleryData.json';

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const initialImages = galleryData.slice(0, 4);
    setVisibleImages(initialImages);
  }, []);

  const openImage = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const prevImage = useCallback(
    (e) => {
      e.stopPropagation();
      setSelectedIndex((prevIndex) => (prevIndex === 0 ? visibleImages.length - 1 : prevIndex - 1));
    },
    [visibleImages],
  );

  const nextImage = useCallback(
    (e) => {
      e.stopPropagation();
      setSelectedIndex((prevIndex) => (prevIndex === visibleImages.length - 1 ? 0 : prevIndex + 1));
    },
    [visibleImages],
  );

  const loadMoreImages = () => {
    const nextIndex = visibleImages.length;
    const newImages = galleryData.slice(nextIndex, nextIndex + 4);
    setVisibleImages((prevImages) => [...prevImages, ...newImages]);
  };

  const ImageModal = ({ images, selectedIndex, onClose, onPrev, onNext }) => (
    <div className='modal modal-open fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-hidden' onClick={onClose}>
      <div className='relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden mx-4 my-6 sm:mx-8 sm:my-12' onClick={(e) => e.stopPropagation()}>
        <button aria-label='Close' className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors duration-300 z-10' onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className='text-lg' />
        </button>
        <div className='relative flex items-center justify-center'>
          <button aria-label='Previous image' className='absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors duration-300 z-10' onClick={onPrev}>
            <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
          </button>
          <div className='w-full max-w-4xl aspect-[2/1] bg-gray-100 flex items-center justify-center relative'>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} className='w-full h-full object-cover transition-opacity duration-300' />
          </div>
          <button aria-label='Next image' className='absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors duration-300 z-10' onClick={onNext}>
            <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
          </button>
        </div>
        <div className='p-4 text-center text-lg font-semibold text-gray-800'>{images[selectedIndex].caption}</div>
      </div>
    </div>
  );

  return (
    <section data-theme='corporate' className='gallery-container p-4 mx-auto border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Gallery</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4'>
        {visibleImages.map((image, index) => (
          <div key={index} className='relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 cursor-pointer' onClick={() => openImage(index)}>
            <div className='w-full h-64 relative'>
              <img loading='lazy' src={image.src} alt={image.alt} className='w-full h-64 object-cover rounded-lg transition-opacity duration-300' />
            </div>
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80'>
              <div className='absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0'>
                <p className='text-white text-center text-lg font-semibold'>{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleImages.length < galleryData.length && (
        <div className='flex justify-center my-4'>
          <button onClick={loadMoreImages} className='btn btn-wide bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700'>
            Load More
          </button>
        </div>
      )}

      {selectedIndex !== null && <ImageModal images={visibleImages} selectedIndex={selectedIndex} onClose={closeImage} onPrev={prevImage} onNext={nextImage} />}
    </section>
  );
};

export default Gallery;
