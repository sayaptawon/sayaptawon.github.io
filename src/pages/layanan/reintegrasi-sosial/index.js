import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCheckCircle,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const ReintegrasiSosial = () => {
  const points = [
    'Memulihkan fungsi sosial individu dalam masyarakat',
    'Membangun kembali hubungan yang harmonis dalam masyarakat',
    'Mempersiapkan orang untuk kembali ke masyarakat setelah dibebaskan',
    'Mencegah residivisme',
    'Memberikan norma baru',
    'Memperbaiki penyebab utama konflik dalam masyarakat',
  ];

  return (
    <Layout
      title='Reintegrasi Sosial'
      description='Informasi mengenai Program Reintegrasi Sosial oleh Rutan Wonosobo.'
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
                    Reintegrasi Sosial
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Reintegrasi Sosial
          </h1>
        </header>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>
            Program Reintegrasi Sosial adalah upaya untuk mengembalikan individu
            yang menyimpang ke dalam kehidupan sosial yang terarah dan
            produktif, sesuai dengan nilai dan norma yang berlaku. Program ini
            dapat dilakukan oleh Lembaga Pemasyarakatan (LAPAS) atau Rumah
            Tahanan Negara (RUTAN) untuk narapidana, atau oleh kelompok-kelompok
            yang mengalami konflik.
          </p>
          <p>
            <strong>Tujuan Utama Reintegrasi Sosial adalah:</strong>
          </p>
          <ul className='list-none pl-0 space-y-2'>
            {points.map((text, index) => (
              <li key={index} className='flex items-center'>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className='text-green-500 mr-2'
                />
                {text}
              </li>
            ))}
          </ul>
          <p>
            <strong>
              Program Reintegrasi Sosial dapat mencakup kegiatan-kegiatan
              seperti:
            </strong>{' '}
            Pembebasan Bersyarat (PB), Cuti Menjelang Bebas (CMB), Cuti
            Bersyarat (CB), Asimilasi, dan Pembimbingan oleh Balai
            Pemasyarakatan (BAPAS).
          </p>
          <p>
            Dalam Program Reintegrasi Sosial untuk narapidana, istilah
            narapidana akan berubah menjadi klien pemasyarakatan. Pembimbingan
            klien pemasyarakatan akan dibagi menjadi dua kategori yaitu klien
            pemasyarakatan dewasa dan klien pemasyarakatan anak.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ReintegrasiSosial;
