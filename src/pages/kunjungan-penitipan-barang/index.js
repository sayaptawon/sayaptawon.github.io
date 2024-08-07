import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const KunjunganPenitipanBarang = () => {
  return (
    <Layout title='KUNJUNGAN DAN PENITIPAN BARANG' description='Syarat dan Ketentuan Kunjungan dan Penitipan Barang di Rutan Wonosobo.'>
      <section data-theme='light' className='flex flex-col min-h-screen p-4 sm:p-6 lg:p-8'>
        {/* Breadcrumb */}
        <nav className='mb-6'>
          <ul className='flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 text-sm breadcrumbs'>
            <li>
              <Link href='/' className='btn btn-circle inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-neutral shadow'>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li>
              <span className='text-gray-500'>/</span>
            </li>
            <li>
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Kunjungan dan Penitipan Barang</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Kunjungan dan Penitipan Barang</h1>
        </header>

        <div className='flex-grow flex flex-col items-center text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p className='text-center'>Berikut adalah informasi terkait syarat dan ketentuan kunjungan serta penitipan barang di Rutan Wonosobo.</p>

          {/* Menyematkan postingan Instagram dengan iframe */}
          <div className='relative w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl'>
            <div className='relative w-full pb-[125%]'>
              <iframe src='https://www.instagram.com/p/CvWl3USrWpk/embed' frameBorder='0' scrolling='no' allow='encrypted-media' title='Instagram Post' className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KunjunganPenitipanBarang;
