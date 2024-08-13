'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHandshake, faStethoscope, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import servicesData from '@/data/servicesData.json';

const icons = {
  'Kunjungan dan Penitipan Barang': faBoxOpen,
  'Reintegrasi Sosial': faHandshake,
  Kesehatan: faStethoscope,
  'Bantuan Hukum': faBalanceScale,
};

const services = servicesData.map((service) => ({
  ...service,
  icon: icons[service.title],
  color: {
    'Kunjungan dan Penitipan Barang': 'bg-blue-100 text-blue-500',
    'Reintegrasi Sosial': 'bg-green-100 text-green-500',
    Kesehatan: 'bg-red-100 text-red-500',
    'Bantuan Hukum': 'bg-yellow-100 text-yellow-500',
  }[service.title],
}));

const ListService = () => {
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

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>List of Services</h2>
      <div data-theme='light' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4'>
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <div className='group card bg-base-100 shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-75 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white p-6 rounded-lg h-full flex flex-col'>
              <div className='card-body flex flex-col items-center flex-grow'>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.color} mb-4 transition-transform duration-300 ease-in-out group-hover:bg-opacity-75`}>{!isPageLoaded ? <div className='loading loading-spinner loading-lg bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400'></div> : <FontAwesomeIcon icon={service.icon} className='text-2xl' />}</div>
                <div className='text-center flex-grow'>
                  <div className='mb-2'>
                    <h3 className='text-lg font-semibold'>{service.title}</h3>
                  </div>
                  <div>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ListService;
