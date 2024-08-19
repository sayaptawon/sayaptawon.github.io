'use client';

import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  faBoxOpen,
  faHandshake,
  faStethoscope,
  faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';
import servicesData from '@/data/servicesData.json';

const iconMap = {
  'Kunjungan dan Penitipan Barang': faBoxOpen,
  'Reintegrasi Sosial': faHandshake,
  'Kesehatan': faStethoscope,
  'Bantuan Hukum': faBalanceScale,
};

const Layanan = () => {
  return (
    <Layout
      title='Layanan'
      description='Layanan yang disediakan oleh Rutan Wonosobo untuk masyarakat umum.'
    >
      <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
        {/* Breadcrumb */}
        <div className='w-full mb-6'>
          <nav className='w-full'>
            <div className='mx-auto bg-base-100 p-4 rounded shadow border border-gray-200'>
              <ul className='flex flex-wrap items-center text-sm text-gray-700 font-bold font-sans justify-start sm:justify-center'>
                <li>
                  <Link
                    href='/'
                    className='flex items-center px-2 py-1 text-gray-600 hover:text-blue-900 transition-colors duration-200'
                  >
                    <FontAwesomeIcon icon={faHome} className='mr-2' />
                    Beranda
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='mx-2 text-gray-500'
                  />
                </li>
                <li>
                  <span className='px-2 py-1 text-gray-900'>Layanan</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Layanan Kami
          </h1>
        </header>

        {/* Daftar Layanan */}
        <div
          data-theme='light'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4'
        >
          {servicesData.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className='group card bg-base-100 shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-75 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white p-6 rounded-lg h-full flex flex-col'
            >
              <div className='card-body flex flex-col items-center flex-grow'>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center bg-base-300 mb-4 transition-transform duration-300 ease-in-out group-hover:bg-opacity-75`}
                >
                  <FontAwesomeIcon
                    icon={iconMap[service.title] || faBoxOpen}
                    className='text-2xl'
                  />
                </div>
                <div className='text-center flex-grow'>
                  <h3 className='text-lg font-semibold mb-2'>
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Layanan;
