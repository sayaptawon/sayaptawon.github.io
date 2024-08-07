'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import testimonialsData from '@/data/testimonialsData.json';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('opacity-100');
  const [loading, setLoading] = useState(true);
  const testimonials = testimonialsData;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    const interval = setInterval(() => {
      if (!loading) {
        setTransition('opacity-0');
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
          setTransition('opacity-100');
        }, 500);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [loading]);

  const handleNext = () => {
    setTransition('opacity-0');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTransition('opacity-100');
    }, 500);
  };

  const handlePrev = () => {
    setTransition('opacity-0');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTransition('opacity-100');
    }, 500);
  };

  const { name, photo, testimonial, rating } = testimonials[currentIndex] || {};

  return (
    <section data-theme='corporate' className='relative p-6 border-b border-gray-200 bg-gray-50'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Testimonials</h2>
      <div className='relative'>
        <div className='flex items-center justify-center'>
          <button onClick={handlePrev} className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors' aria-label='Previous testimonial'>
            {loading ? <div className='w-6 h-6 bg-gray-300 rounded-full skeleton'></div> : <FontAwesomeIcon icon={faChevronLeft} className='text-xl' />}
          </button>
          <div className='w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden'>
            {loading ? (
              <div className='flex flex-col items-center p-6'>
                <div className='w-28 h-28 bg-gray-300 rounded-full skeleton mb-4'></div>
                <div className='w-36 h-4 bg-gray-300 skeleton mb-2'></div>
                <div className='flex mb-4'>
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className='w-4 h-4 bg-gray-300 rounded-full skeleton mx-1'></div>
                  ))}
                </div>
                <div className='w-full h-6 bg-gray-300 skeleton'></div>
              </div>
            ) : (
              <div className={`flex flex-col items-center p-6 transition-opacity duration-500 ease-in-out ${transition}`}>
                <img src={photo} alt={`Photo of ${name}`} className='w-28 h-28 rounded-full object-cover mb-4 shadow-lg' />
                <div className='text-lg font-semibold text-gray-900 mb-2'>{name}</div>
                <div className='flex mb-4'>
                  {[...Array(rating)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className='text-yellow-500 text-xl' />
                  ))}
                </div>
                <p className='text-gray-700 text-center'>{testimonial}</p>
              </div>
            )}
          </div>
          <button onClick={handleNext} className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors' aria-label='Next testimonial'>
            {loading ? <div className='w-6 h-6 bg-gray-300 rounded-full skeleton'></div> : <FontAwesomeIcon icon={faChevronRight} className='text-xl' />}
          </button>
        </div>
        <div className='flex justify-center mt-4'>
          {testimonials.map((_, index) => (
            <button key={index} className={`w-10 h-1 mx-2 rounded-lg transition-transform duration-300 ${currentIndex === index ? 'bg-primary transform scale-125' : 'bg-gray-400'}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
