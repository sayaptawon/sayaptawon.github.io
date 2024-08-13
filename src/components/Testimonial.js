'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import testimonialsData from '@/data/testimonialsData.json';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const testimonials = testimonialsData;

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 500);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 500);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    const onLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  const { name, photo, testimonial, rating } = testimonials[currentIndex] || {};

  return (
    <section data-theme='corporate' className='relative p-4 border-b border-gray-200 w-full'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Testimonials</h2>
      <div className='relative w-full mb-4'>
        <div className='flex items-center justify-center w-full'>
          <button onClick={handlePrev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors' aria-label='Previous testimonial' disabled={!isLoaded}>
            {isLoaded ? <FontAwesomeIcon icon={faChevronLeft} className='text-xl' /> : <div className='w-6 h-6 border-t-2 border-transparent border-t-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin'></div>}
          </button>
          <div className='w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden p-6'>
            <div className={`flex flex-col items-center p-4 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              <div className='mask mask-hexagon mb-4'>{isLoaded ? <img src={photo} alt={`Photo of ${name}`} className='w-36 h-36 mask mask-hexagon object-cover' /> : <div className='w-24 h-24 border-t-4 border-transparent border-t-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin'></div>}</div>
              <div className='text-lg font-semibold text-gray-900 mb-2'>{name}</div>
              <div className='flex mb-4'>
                {[...Array(rating)].map((_, index) => (
                  <span key={index} className='text-yellow-500 text-xl'>
                    {isLoaded ? <FontAwesomeIcon icon={faStar} /> : <div className='w-6 h-6 border-t-2 border-transparent border-t-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin'></div>}
                  </span>
                ))}
              </div>
              <p className='text-gray-700 text-center'>{testimonial}</p>
            </div>
          </div>
          <button onClick={handleNext} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors' aria-label='Next testimonial' disabled={!isLoaded}>
            {isLoaded ? <FontAwesomeIcon icon={faChevronRight} className='text-xl' /> : <div className='w-6 h-6 border-t-2 border-transparent border-t-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin'></div>}
          </button>
        </div>
        {isLoaded && (
          <div className='flex justify-center mt-6'>
            {testimonials.map((_, index) => (
              <button key={index} className={`w-10 h-1 mx-2 rounded-lg transition-transform duration-300 ${currentIndex === index ? 'bg-primary transform scale-125' : 'bg-gray-400'}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
