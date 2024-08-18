import React from 'react';
import Layout from '@/pages/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Kesehatan = () => {
  return (
    <Layout
      title='Kesehatan'
      description='Informasi penting mengenai layanan kesehatan yang disediakan oleh Rutan Wonosobo.'
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
                  <span className='px-2 py-1 text-gray-900'>Kesehatan</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Kesehatan
          </h1>
        </header>

        {/* Isi Halaman */}
        <div className='mb-6'>
          <Image
            src='/assets/images/medical-center.webp'
            alt='Medical Center'
            width={1200}
            height={600}
            className='w-full rounded-lg shadow'
            priority
          />
        </div>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>
            Rutan Wonosobo menyediakan berbagai layanan kesehatan yang
            terintegrasi untuk memastikan kesejahteraan dan kesehatan para warga
            binaan pemasyarakatan.
          </p>

          <h2 className='text-xl font-semibold'>Skrining Kesehatan</h2>
          <p>
            Setiap tahanan yang baru tiba di Rutan Wonosobo menjalani skrining
            kesehatan menyeluruh. Prosedur ini mencakup pemeriksaan fisik,
            pemeriksaan laboratorium, dan evaluasi kesehatan mental untuk
            mendeteksi kondisi kesehatan mereka.
          </p>

          <h2 className='text-xl font-semibold'>
            Skrining Kesehatan Gigi dan Mulut
          </h2>
          <p>
            Pemeriksaan kesehatan gigi dan mulut rutin dilakukan pada tahanan
            yang baru tiba di Rutan Wonosobo. Hal ini bertujuan untuk mencegah
            dan mengidentifikasi masalah gigi dan mulut yang mungkin mereka
            alami serta memberikan perawatan yang diperlukan.
          </p>

          <h2 className='text-xl font-semibold'>
            Skrining Riwayat Penyakit Menular
          </h2>
          <p>
            Skrining riwayat penyakit menular dilakukan untuk mengidentifikasi
            tahanan yang memiliki riwayat penyakit menular seperti HIV/AIDS,
            hepatitis, atau penyakit menular lainnya. Langkah ini penting untuk
            mencegah penyebaran penyakit di dalam fasilitas pemasyarakatan.
          </p>

          <h2 className='text-xl font-semibold'>Mobile VCT</h2>
          <p>
            Program Mobile VCT diselenggarakan secara berkala setiap 6 bulan
            untuk memberikan layanan tes HIV/AIDS secara sukarela kepada seluruh
            warga binaan pemasyarakatan. Tujuan program ini adalah untuk
            mendeteksi dini dan memberikan pengobatan kepada mereka yang
            terinfeksi serta memberikan edukasi tentang pencegahan penyakit.
          </p>

          <h2 className='text-xl font-semibold'>Skrining TBC Massal</h2>
          <p>
            Skrining TBC massal dilakukan secara berkala untuk mendeteksi kasus
            Tuberkulosis (TBC) di antara warga binaan pemasyarakatan. Langkah
            ini membantu mengidentifikasi kasus TBC secara dini dan memberikan
            pengobatan yang tepat serta mengurangi risiko penularan di dalam
            fasilitas.
          </p>

          <h2 className='text-xl font-semibold'>Pelayanan Pengobatan</h2>
          <p>
            Tim medis Rutan Wonosobo memberikan pelayanan pengobatan sederhana
            untuk menangani masalah kesehatan ringan seperti demam, flu, atau
            sakit kepala kepada warga binaan pemasyarakatan. Pelayanan ini
            bertujuan untuk memastikan bahwa mereka mendapatkan perawatan yang
            diperlukan dengan cepat.
          </p>

          <h2 className='text-xl font-semibold'>Pelayanan Laboratorium</h2>
          <p>
            Layanan laboratorium sederhana disediakan di Rutan Wonosobo untuk
            mendukung diagnosa dan pengobatan masalah kesehatan pada warga
            binaan pemasyarakatan. Tes darah, urine, dan tes penyakit menular
            lainnya dilakukan secara berkala untuk memantau kondisi kesehatan
            mereka.
          </p>

          <h2 className='text-xl font-semibold'>
            Kegiatan Promotif dan Preventif
          </h2>
          <p>
            Tim kesehatan Rutan Wonosobo melaksanakan berbagai kegiatan promotif
            dan preventif untuk meningkatkan kesadaran tentang pentingnya
            menjaga kesehatan dan mencegah penyakit di antara warga binaan
            pemasyarakatan. Ini termasuk penyuluhan kesehatan, kampanye perilaku
            hidup sehat, dan program vaksinasi.
          </p>

          <h2 className='text-xl font-semibold'>Perawatan Luka Ringan</h2>
          <p>
            Tim medis Rutan Wonosobo memberikan perawatan luka ringan kepada
            warga binaan pemasyarakatan. Tindakan ini meliputi membersihkan
            luka, memberikan obat-obatan, dan memastikan perawatan yang tepat
            untuk mempercepat proses penyembuhan dan mencegah infeksi.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Kesehatan;
