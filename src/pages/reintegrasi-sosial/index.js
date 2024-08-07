import React, { useState, useEffect } from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ReintegrasiSosial = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);

      const timeoutId = setTimeout(() => {
        setShowIcon(true);
      }, 1000);

      return () => clearTimeout(timeoutId);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Layout title='REINTEGRASI SOSIAL' description='Informasi mengenai Program Reintegrasi Sosial oleh Rutan Wonosobo.'>
      <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
        {/* Breadcrumb */}
        <nav className='mb-6'>
          <ul className='flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 text-sm breadcrumbs'>
            <li>
              <Link href='/' className='btn btn-circle inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-neutral shadow'>
                {isLoaded ? showIcon ? <FontAwesomeIcon icon={faHome} /> : <div className='loading w-5 h-5 border-4 border-gray-200 border-t-transparent rounded-full'></div> : <div className='loading w-5 h-5 border-4 border-gray-200 border-t-transparent rounded-full'></div>}
              </Link>
            </li>
            <li>
              <span className='text-gray-500'>/</span>
            </li>
            <li>
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Reintegrasi Sosial</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Program Reintegrasi Sosial</h1>
        </header>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>Program Reintegrasi Sosial adalah upaya untuk mengembalikan individu yang menyimpang ke dalam kehidupan sosial yang terarah dan produktif, sesuai dengan nilai dan norma yang berlaku. Program ini dapat dilakukan oleh Lembaga Pemasyarakatan (LAPAS) atau Rumah Tahanan Negara (RUTAN) untuk narapidana, atau oleh kelompok-kelompok yang mengalami konflik.</p>
          <p>
            <strong>Tujuan Utama Reintegrasi Sosial adalah:</strong>
          </p>
          <ul className='list-none pl-0 space-y-2'>
            {['Memulihkan fungsi sosial individu dalam masyarakat', 'Membangun kembali hubungan yang harmonis dalam masyarakat', 'Mempersiapkan orang untuk kembali ke masyarakat setelah dibebaskan', 'Mencegah residivisme', 'Memberikan norma baru', 'Memperbaiki penyebab utama konflik dalam masyarakat'].map((text, index) => (
              <li key={index} className='flex items-center'>
                {isLoaded ? showIcon ? <FontAwesomeIcon icon={faCheckCircle} className='text-green-500 mr-2' /> : <div className='loading w-5 h-5 border-4 border-green-300 border-t-transparent rounded-full mr-2'></div> : <div className='loading w-5 h-5 border-4 border-green-300 border-t-transparent rounded-full mr-2'></div>}
                {text}
              </li>
            ))}
          </ul>
          <p>
            <strong>Program Reintegrasi Sosial dapat mencakup kegiatan-kegiatan seperti:</strong> Pembebasan Bersyarat (PB), Cuti Menjelang Bebas (CMB), Cuti Bersyarat (CB), Asimilasi, dan Pembimbingan oleh Balai Pemasyarakatan (BAPAS).
          </p>
          <p>Dalam Program Reintegrasi Sosial untuk narapidana, istilah narapidana akan berubah menjadi klien pemasyarakatan. Pembimbingan klien pemasyarakatan akan dibagi menjadi dua kategori yaitu klien pemasyarakatan dewasa dan klien pemasyarakatan anak.</p>
        </div>
      </section>
    </Layout>
  );
};

export default ReintegrasiSosial;
