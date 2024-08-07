'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const contactData = [
  {
    icon: faPhoneAlt,
    title: 'Telepon',
    info: '(0286) 321030',
    color: 'bg-blue-100 text-blue-500',
  },
  {
    icon: faEnvelope,
    title: 'E-Mail',
    info: 'rutanwsb@gmail.com',
    color: 'bg-red-100 text-red-500',
  },
  {
    icon: faWhatsapp,
    title: 'WhatsApp',
    info: '(+62) 895-1072-5657',
    color: 'bg-teal-100 text-teal-500',
  },
];

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section data-theme='corporate' className='p-6 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {isLoaded
          ? contactData.map((section, index) => (
              <div key={index} className='card bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md transition-shadow duration-500 ease-in-out transform hover:shadow-xl hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500'>
                <div className='card-body flex flex-col items-center p-6'>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${section.color} mb-4 transition-transform duration-500 ease-in-out hover:scale-105`}>
                    <FontAwesomeIcon icon={section.icon} className='text-3xl transition-colors duration-300 ease-in-out hover:text-blue-500' />
                  </div>
                  <h3 className='text-lg font-semibold text-white mb-2 text-center'>{section.title}</h3>
                  <p className='text-white text-center'>{section.info}</p>
                </div>
              </div>
            ))
          : Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='card bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md transition-shadow duration-500 ease-in-out transform hover:scale-105 w-full h-full p-6 flex flex-col items-center rounded-lg'>
                <div className='w-20 h-20 bg-gray-200 rounded-full skeleton mb-4'></div>
                <div className='w-1/2 h-6 bg-gray-200 skeleton mb-4'></div>
                <div className='w-1/2 h-4 bg-gray-200 skeleton'></div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Contact;
