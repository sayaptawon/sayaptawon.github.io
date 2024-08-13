import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = () => {
  return (
    <Layout title='Kebijakan Privasi' description='Kebijakan Privasi kami yang menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.'>
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
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Privacy Policy</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Kebijakan Privasi</h1>
        </header>

        {/* Isi Halaman */}
        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p className='mb-4'>SAYAP TAWON adalah sebuah website resmi yang dimiliki oleh Rutan Wonosobo. Kebijakan privasi ini bertujuan untuk menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda mengunjungi website kami.</p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>Data yang Kami Kumpulkan</h2>
          <p className='mb-4'>Kami dapat mengumpulkan informasi pribadi Anda seperti nama, alamat email, dan nomor telepon ketika Anda mengunjungi website kami. Informasi ini dapat kami gunakan untuk menghubungi Anda, mengirim informasi terbaru tentang Rutan Wonosobo, atau memproses permintaan Anda.</p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>Penggunaan Data</h2>
          <p className='mb-4'>Kami menggunakan informasi pribadi Anda untuk memperbaiki layanan kami dan menyediakan informasi yang lebih relevan dengan kebutuhan Anda. Kami juga dapat menggunakan informasi ini untuk keperluan pemasaran dan promosi Rutan Wonosobo.</p>
          <p className='mb-4'>Kami tidak akan membagikan informasi pribadi Anda kepada pihak lain tanpa persetujuan Anda, kecuali jika diperlukan oleh hukum.</p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>Pengamanan Data</h2>
          <p className='mb-4'>Kami bertanggung jawab untuk menjaga keamanan informasi pribadi Anda. Kami telah mengambil langkah-langkah yang diperlukan untuk mencegah akses yang tidak sah dan melindungi informasi pribadi Anda dari kebocoran.</p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>Akses dan Perubahan Data</h2>
          <p className='mb-4'>
            Kami akan menghormati keinginan Anda untuk mengakses, mengubah, atau menghapus informasi pribadi Anda yang tersimpan di dalam sistem kami. Untuk melakukannya, Anda dapat menghubungi kami melalui alamat email{' '}
            <a href='mailto:rutanwsb@gmail.com' className='text-blue-600 hover:underline'>
              rutanwsb@gmail.com
            </a>
            .
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>Perubahan Kebijakan Privasi</h2>
          <p className='mb-4'>Kami dapat mengubah kebijakan privasi ini dari waktu ke waktu sesuai dengan kebutuhan. Perubahan ini akan diumumkan di website kami, oleh karena itu, silakan mengunjungi halaman ini secara berkala untuk memperbaharui informasi terbaru tentang kebijakan privasi kami.</p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>Kontak</h2>
          <p className='mb-4'>
            Jika Anda memiliki pertanyaan atau komentar tentang kebijakan privasi kami, Anda dapat menghubungi kami melalui email{' '}
            <a href='mailto:rutanwsb@gmail.com' className='text-blue-600 hover:underline'>
              rutanwsb@gmail.com
            </a>
            .
          </p>

          <p>Terima kasih atas kunjungan Anda ke website SAYAP TAWON. Kami akan terus berusaha untuk memberikan layanan yang terbaik dan melindungi informasi pribadi Anda dengan sebaik-baiknya.</p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
