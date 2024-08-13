import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Disclaimer = () => {
  return (
    <Layout title='Disclaimer' description='Informasi penting mengenai penggunaan situs web ini dan batasan tanggung jawab kami.'>
      <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
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
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Disclaimer</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Disclaimer</h1>
        </header>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>Selamat datang di SAYAP TAWON, layanan terbaru yang disediakan oleh Rutan Wonosobo. Website ini bertujuan untuk memudahkan akses informasi bagi para pengguna kami.</p>
          <p>Kami berusaha memberikan informasi yang akurat dan berkualitas, namun tidak menjamin keakuratan atau kelengkapan dari informasi yang disajikan. Informasi yang diberikan di website ini bersifat umum dan tidak dapat dijadikan sebagai saran hukum atau profesional.</p>
          <p>Rutan Wonosobo tidak bertanggung jawab atas kerugian atau kerusakan yang timbul akibat penggunaan informasi di website ini. Selain itu, kami tidak dapat menjamin bahwa layanan ini akan selalu tersedia tanpa gangguan atau bebas dari virus atau komponen berbahaya lainnya.</p>
          <p>Tautan ke website pihak ketiga yang terdapat di situs ini bukan merupakan bentuk dukungan atau rekomendasi. Kami tidak bertanggung jawab atas isi atau kebijakan privasi dari website tersebut.</p>
          <p>Kami berhak mengubah isi dari website ini tanpa pemberitahuan sebelumnya. Kami menyarankan pengguna untuk memeriksa halaman Disclaimer ini secara berkala untuk memahami kebijakan dan pernyataan yang terbaru.</p>
          <p>Dengan mengakses atau menggunakan situs ini, Anda dianggap telah menyetujui semua ketentuan dan syarat yang tercantum dalam Disclaimer ini.</p>
          <p className='text-center font-semibold'>Terima kasih atas kunjungan Anda. Kami berharap dapat terus memberikan layanan terbaik untuk Anda.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
