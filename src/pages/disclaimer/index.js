import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Disclaimer = () => {
  return (
    <Layout
      title='Disclaimer'
      description='Informasi penting mengenai penggunaan situs web ini dan batasan tanggung jawab kami.'
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
                  <span className='px-2 py-1 text-gray-900'>Disclaimer</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Disclaimer
          </h1>
        </header>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>
            Selamat datang di SAYAP TAWON, layanan terbaru yang disediakan oleh
            Rutan Wonosobo. Website ini bertujuan untuk memudahkan akses
            informasi bagi para pengguna kami.
          </p>
          <p>
            Kami berusaha memberikan informasi yang akurat dan berkualitas,
            namun tidak menjamin keakuratan atau kelengkapan dari informasi yang
            disajikan. Informasi yang diberikan di website ini bersifat umum dan
            tidak dapat dijadikan sebagai saran hukum atau profesional.
          </p>
          <p>
            Rutan Wonosobo tidak bertanggung jawab atas kerugian atau kerusakan
            yang timbul akibat penggunaan informasi di website ini. Selain itu,
            kami tidak dapat menjamin bahwa layanan ini akan selalu tersedia
            tanpa gangguan atau bebas dari virus atau komponen berbahaya
            lainnya.
          </p>
          <p>
            Tautan ke website pihak ketiga yang terdapat di situs ini bukan
            merupakan bentuk dukungan atau rekomendasi. Kami tidak bertanggung
            jawab atas isi atau kebijakan privasi dari website tersebut.
          </p>
          <p>
            Kami berhak mengubah isi dari website ini tanpa pemberitahuan
            sebelumnya. Kami menyarankan pengguna untuk memeriksa halaman
            Disclaimer ini secara berkala untuk memahami kebijakan dan
            pernyataan yang terbaru.
          </p>
          <p>
            Dengan mengakses atau menggunakan situs ini, Anda dianggap telah
            menyetujui semua ketentuan dan syarat yang tercantum dalam
            Disclaimer ini.
          </p>
          <p className='text-center font-semibold'>
            Terima kasih atas kunjungan Anda. Kami berharap dapat terus
            memberikan layanan terbaik untuk Anda.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
