import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TermsAndConditions = () => {
  return (
    <Layout
      title='Syarat dan Ketentuan'
      description='Syarat dan Ketentuan penggunaan situs web kami yang harus dipatuhi oleh semua pengguna.'
    >
      <section data-theme='light' className='w-full p-4 sm:p-6 lg:p-8'>
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
                  <span className='px-2 py-1 text-gray-900'>
                    Syarat dan Ketentuan
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Syarat dan Ketentuan
          </h1>
        </header>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p className='mb-4'>
            Selamat datang di website resmi Sistem Layanan Terpadu Rutan
            Wonosobo dengan alamat{' '}
            <a
              href='https://rutanwonosobo.vercel.app/'
              className='text-blue-600 hover:underline'
            >
              https://rutanwonosobo.vercel.app/
            </a>
            . Dengan mengakses dan menggunakan layanan yang kami sediakan, Anda
            dianggap telah membaca, memahami, dan menyetujui semua syarat dan
            ketentuan yang berlaku. Jika Anda tidak menyetujui syarat dan
            ketentuan ini, Anda tidak diperbolehkan untuk menggunakan layanan
            kami.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Penggunaan Layanan
          </h2>
          <p className='mb-4'>
            Dalam menggunakan layanan kami, Anda diharapkan untuk tidak
            melakukan tindakan yang dapat merugikan pihak lain, melanggar hukum,
            atau mengganggu operasional sistem. Anda juga diharapkan untuk tidak
            memanipulasi atau mencoba mengakses data yang tidak sah.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Akun Pengguna
          </h2>
          <p className='mb-4'>
            Untuk menggunakan layanan kami, Anda diharuskan membuat akun
            pengguna. Anda bertanggung jawab penuh terhadap semua aktivitas di
            akun Anda, termasuk penggunaan yang tidak sah. Kami tidak
            bertanggung jawab atas kehilangan atau penyalahgunaan akun Anda.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Informasi Pengguna
          </h2>
          <p className='mb-4'>
            Anda diwajibkan untuk memberikan informasi yang akurat, lengkap, dan
            terbaru tentang diri Anda. Anda juga setuju untuk tidak mengunggah
            atau membagikan konten yang melanggar hukum atau hak cipta pihak
            lain.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Kebijakan Privasi
          </h2>
          <p className='mb-4'>
            Kami menghargai privasi Anda dan menjaga informasi pribadi Anda
            sesuai dengan kebijakan privasi yang berlaku. Dengan menggunakan
            layanan kami, Anda setuju untuk dihubungi melalui alamat email yang
            Anda berikan.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Perubahan Syarat dan Ketentuan
          </h2>
          <p className='mb-4'>
            Kami berhak untuk memperbarui dan mengubah syarat dan ketentuan ini
            tanpa pemberitahuan terlebih dahulu. Anda diharapkan untuk secara
            berkala memeriksa halaman ini untuk mengetahui perubahan terbaru.
            Penggunaan layanan setelah perubahan dianggap sebagai persetujuan
            Anda terhadap perubahan tersebut.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Konten Pihak Ketiga
          </h2>
          <p className='mb-4'>
            Kami dapat menyediakan tautan ke situs pihak ketiga yang tidak kami
            kendalikan atau miliki. Kami tidak bertanggung jawab atas konten
            atau praktik privasi situs-situs tersebut. Penggunaan tautan ke
            situs pihak ketiga tersebut sepenuhnya adalah risiko Anda sendiri.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Penolakan Jaminan
          </h2>
          <p className='mb-4'>
            Layanan yang kami sediakan diberikan "sebagaimana adanya" dan
            "sebagaimana tersedia". Kami tidak memberikan jaminan bahwa layanan
            akan berjalan tanpa kesalahan atau tidak terganggu, atau bahwa
            layanan tersebut akan memenuhi kebutuhan atau harapan Anda.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Tanggung Jawab
          </h2>
          <p className='mb-4'>
            Kami tidak bertanggung jawab atas kerugian atau kerusakan yang
            diakibatkan oleh penggunaan layanan kami. Anda menggunakan layanan
            kami dengan risiko Anda sendiri.
          </p>

          <h2 className='text-xl sm:text-2xl font-semibold text-gray-800'>
            Hukum yang Berlaku
          </h2>
          <p className='mb-4'>
            Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
            hukum yang berlaku di Indonesia. Setiap perselisihan yang timbul
            dari syarat dan ketentuan ini akan diselesaikan oleh pengadilan yang
            berwenang di Indonesia.
          </p>

          <p>
            Dengan menggunakan layanan kami, Anda menyetujui semua syarat dan
            ketentuan yang tercantum di atas. Jika Anda tidak menyetujui syarat
            dan ketentuan ini, Anda tidak diperbolehkan untuk menggunakan
            layanan kami.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
