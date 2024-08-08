'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faHandshake, faStethoscope, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const services = [
  {
    icon: faBoxOpen,
    title: 'Kunjungan dan Penitipan Barang',
    description: 'Pelayanan kunjungan dan penitipan barang untuk warga binaan.',
    color: 'bg-blue-100 text-blue-500',
    link: '/kunjungan-penitipan-barang',
  },
  {
    icon: faHandshake,
    title: 'Reintegrasi Sosial',
    description: 'Program reintegrasi sosial untuk membantu warga binaan kembali ke masyarakat.',
    color: 'bg-green-100 text-green-500',
    link: '/reintegrasi-sosial',
  },
  {
    icon: faStethoscope,
    title: 'Kesehatan',
    description: 'Layanan kesehatan untuk menjaga kesehatan warga binaan.',
    color: 'bg-red-100 text-red-500',
    link: '/kesehatan',
  },
  {
    icon: faBalanceScale,
    title: 'Bantuan Hukum',
    description: 'Bantuan hukum bagi warga binaan yang memerlukan pendampingan hukum.',
    color: 'bg-yellow-100 text-yellow-500',
    link: '/bantuan-hukum',
  },
];

const ListService = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>List of Services</h2>
      <div data-theme='light' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4'>
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <div className='group card bg-base-100 shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-75 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white p-6 rounded-lg h-full flex flex-col'>
              <div className='card-body flex flex-col items-center flex-grow'>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.color} mb-4 transition-transform duration-300 ease-in-out group-hover:bg-opacity-75`}>
                  {loading ? <div className='w-16 h-16 rounded-full skeleton'></div> : <FontAwesomeIcon icon={service.icon} className='text-2xl' />}
                </div>
                <div className='text-center flex-grow'>
                  <div className='mb-2'>
                    {loading ? <div className='w-24 h-4 skeleton rounded'></div> : <h3 className='text-lg font-semibold'>{service.title}</h3>}
                  </div>
                  <div>
                    {loading ? <div className='w-48 h-4 skeleton rounded'></div> : <p>{service.description}</p>}
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
