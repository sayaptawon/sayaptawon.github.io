'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { firestore } from '@/lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'testimonials'),
      (snapshot) => {
        const testimonialsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestimonials(testimonialsData);
      },
      (error) => {
        console.error('Error fetching testimonials:', error);
      },
    );

    return () => unsubscribe();
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  }, [testimonials.length]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(handleNext, 5000);
  }, [handleNext]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  const {
    name = '',
    photo = '',
    testimonial = '',
    rating = 0,
  } = testimonials[currentIndex] || {};

  if (!testimonials.length) return null;

  return (
    <section
      data-theme='corporate'
      className='relative p-4 border-b border-gray-200 w-full'
    >
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>
        Testimonial Pengguna
      </h2>
      <div className='relative w-full mb-4'>
        <div className='flex items-center justify-center w-full'>
          <button
            onClick={() => {
              handlePrev();
              resetInterval();
            }}
            className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors'
            aria-label='Previous testimonial'
          >
            <FontAwesomeIcon icon={faChevronLeft} className='text-xl' />
          </button>
          <div className='testimonial-card flex flex-col justify-center items-center w-full mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden p-6'>
            <div className='flex flex-col items-center p-4'>
              <div className='mask mask-circle mb-4'>
                {photo ? (
                  <img
                    src={photo}
                    alt={`Photo of ${name}`}
                    className='w-36 h-36 mask mask-circle object-cover'
                  />
                ) : (
                  <div className='w-36 h-36 mask mask-circle bg-gray-200'></div>
                )}
              </div>
              <div className='text-lg font-semibold text-gray-900 mb-2'>
                {name}
              </div>
              <div className='flex mb-4'>
                {[...Array(rating)].map((_, index) => (
                  <span key={index} className='text-yellow-500 text-xl'>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                ))}
              </div>
              <p className='text-gray-700 text-center break-words'>
                {testimonial}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              handleNext();
              resetInterval();
            }}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-300 transition-colors'
            aria-label='Next testimonial'
          >
            <FontAwesomeIcon icon={faChevronRight} className='text-xl' />
          </button>
        </div>
        <div className='flex justify-center mt-6'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-10 h-1 mx-2 rounded-lg transition-transform duration-300 ${
                currentIndex === index
                  ? 'bg-primary transform scale-125'
                  : 'bg-gray-400'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                resetInterval();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
