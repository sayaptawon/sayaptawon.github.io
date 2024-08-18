import React, { useState } from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import imageData from '@/data/sliderData.json';

const KunjunganPenitipanBarang = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageData.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <Layout
      title='Kunjungan dan Penitipan Barang'
      description='Syarat dan Ketentuan Kunjungan dan Penitipan Barang di Rutan Wonosobo.'
    >
      <section
        data-theme='light'
        className='flex flex-col min-h-screen p-4 sm:p-6 lg:p-8'
      >
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
                  <Link
                    href='/layanan'
                    className='px-2 py-1 text-gray-600 hover:text-blue-900 transition-colors duration-200'
                  >
                    Layanan
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='mx-2 text-gray-500'
                  />
                </li>
                <li>
                  <span className='px-2 py-1 text-gray-900'>
                    Kunjungan dan Penitipan Barang
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Kunjungan dan Penitipan Barang
          </h1>
        </header>

        <div className='flex-grow flex flex-col items-center text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p className='text-center'>
            Berikut adalah informasi terkait syarat dan ketentuan kunjungan
            serta penitipan barang di Rutan Wonosobo.
          </p>

          {/* Carousel */}
          <div className='relative w-full max-w-lg mx-auto'>
            {/* Carousel Image */}
            <div className='relative'>
              <Image
                src={imageData[currentIndex].src}
                alt={imageData[currentIndex].alt}
                width={800}
                height={600}
                className='w-full h-auto object-cover rounded-lg shadow-lg'
                unoptimized
              />
              {/* Badge */}
              <div className='absolute top-2 right-2 px-2 py-1 badge-primary text-primary-content rounded-badge text-sm font-bold'>
                {imageData[currentIndex].badge}
              </div>
            </div>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 btn-circle rounded-full shadow-lg hover:bg-gray-200 transition'
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 btn-circle rounded-full shadow-lg hover:bg-gray-200 transition'
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KunjunganPenitipanBarang;
