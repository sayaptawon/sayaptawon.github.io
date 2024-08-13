import React, { useState, useEffect } from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function BantuanHukum () {
  const [activeTab, setActiveTab] = useState('mekanisme');
  const [iconsLoaded, setIconsLoaded] = useState(false);

  useEffect(() => {
    setIconsLoaded(true);
  }, []);

  return (
    <Layout title='Bantuan Hukum' description='Pemberian Bantuan Hukum kepada warga negara sebagai wujud implementasi negara hukum.'>
      <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
        {/* Breadcrumb */}
        <nav className='mb-6'>
          <ul className='flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 text-sm breadcrumbs'>
            <li>
              <Link href='/' className='btn btn-circle inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-neutral shadow'>
                {iconsLoaded && <FontAwesomeIcon icon={faHome} />}
              </Link>
            </li>
            <li>
              <span className='text-gray-500'>/</span>
            </li>
            <li>
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Bantuan Hukum</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Bantuan Hukum</h1>
        </header>

        {/* Konten Utama */}
        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify mb-6'>
          <Image src='/legal-aid.webp' alt='Bantuan Hukum' width={1200} height={600} className='w-full rounded-lg shadow' />
          <p>Kemenkumham melalui BPHN memberikan layanan bantuan hukum. Pemberian Bantuan Hukum kepada warga negara merupakan wujud nyata dari implementasi negara kita sebagai negara hukum. Negara yang mengakui dan melindungi serta menjamin hak asasi warga negara akan kebutuhan akses seluas-luasnya terhadap keadilan, dan kesamaan di hadapan hukum.</p>
        </div>

        {/* Modern Icon Box Tabs */}
        <div className='flex justify-center mb-6'>
          <div className='flex gap-4'>
            <div className={`flex flex-col items-center p-4 rounded-lg border ${activeTab === 'mekanisme' ? 'bg-primary text-white border-primary' : 'bg-neutral text-gray-700 border-gray-300'} transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white`} onClick={() => setActiveTab('mekanisme')}>
              <div className='w-16 h-16 flex items-center justify-center bg-white text-primary rounded-full shadow-md mb-2'>{iconsLoaded && <FontAwesomeIcon icon={faCog} className='text-2xl' />}</div>
              <span className='text-sm font-semibold'>Mekanisme</span>
              <div className={`w-full h-1 mt-2 transition-all duration-300 ${activeTab === 'mekanisme' ? 'bg-primary' : 'bg-transparent'}`}></div>
            </div>
            <div className={`flex flex-col items-center p-4 rounded-lg border ${activeTab === 'syarat' ? 'bg-primary text-white border-primary' : 'bg-neutral text-gray-700 border-gray-300'} transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white`} onClick={() => setActiveTab('syarat')}>
              <div className='w-16 h-16 flex items-center justify-center bg-white text-primary rounded-full shadow-md mb-2'>{iconsLoaded && <FontAwesomeIcon icon={faFileAlt} className='text-2xl' />}</div>
              <span className='text-sm font-semibold'>Syarat</span>
              <div className={`w-full h-1 mt-2 transition-all duration-300 ${activeTab === 'syarat' ? 'bg-primary' : 'bg-transparent'}`}></div>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className='card card-bordered p-4 bg-base-100 shadow-md'>
          {activeTab === 'mekanisme' && (
            <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
              <h2 className='text-center text-xl font-semibold mb-2'>Mekanisme Pemberian Bantuan Hukum</h2>
              <p>
                Pemberian Bantuan Hukum dilakukan dengan bekerja sama dengan Organisasi Bantuan Hukum yang telah terakreditasi. Anda dapat melihat OBH terdekat dari wilayah anda{' '}
                <a href='https://bphn.go.id/layanan/bantuan-hukum/obh' target='_blank' className='text-blue-500 underline'>
                  disini
                </a>
                .
              </p>
            </div>
          )}
          {activeTab === 'syarat' && (
            <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
              <h2 className='text-center text-xl font-semibold mb-2'>Syarat</h2>
              <ul className='list-disc list-inside'>
                <li>Mengajukan permohonan secara lisan atau tertulis yang berisi sekurang-kurangnya identitas pemohon dan uraian singkat mengenai pokok persoalan yang dimohonkan bantuan hukum;</li>
                <li>Menyerahkan dokumen yang berkenaan dengan perkara;</li>
                <li>Melampirkan surat keterangan miskin dari lurah, kepala desa, atau pejabat yang setingkat di tempat tinggal pemohon Bantuan Hukum.</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default BantuanHukum;
