import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Team from '@/components/Team';

const AboutApplication = () => {
  return (
    <Layout
      title='Tentang Aplikasi'
      description='Informasi mendetail tentang Sistem Layanan Terpadu Rutan Wonosobo, teknologi yang digunakan, dan tim pengembang.'
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
                  <span className='px-2 py-1 text-gray-900'>
                    Tentang Aplikasi
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Tentang Aplikasi
          </h1>
        </header>

        {/* Konten */}
        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>
            Sistem Layanan Terpadu Rutan Wonosobo adalah platform revolusioner
            yang dirancang untuk mengintegrasikan berbagai layanan publik di
            Rutan Wonosobo dalam satu sistem terpadu. Platform ini bertujuan
            untuk mempermudah akses masyarakat terhadap berbagai layanan publik,
            dengan fokus pada peningkatan kualitas pelayanan, transparansi, dan
            akuntabilitas. Sistem ini merupakan upaya untuk memberikan kemudahan
            dan efisiensi bagi masyarakat dalam berinteraksi dengan layanan
            publik.
          </p>
          <p>
            Aplikasi ini dibangun menggunakan <strong>Next.js</strong>,
            framework React yang mendukung pengembangan aplikasi web dengan
            performa tinggi dan kemampuan server-side rendering serta static
            site generation. Ini memastikan aplikasi tidak hanya cepat diakses
            tetapi juga SEO-friendly. Teknologi modern yang digunakan mencakup{' '}
            <strong>Tailwind CSS</strong> dan <strong>DaisyUI</strong> untuk
            desain responsif yang elegan, serta <strong>Firebase</strong> untuk
            manajemen data real-time yang efisien.
          </p>
          <p>
            Dalam proses pengembangan, kami memanfaatkan berbagai alat dan
            pustaka untuk memastikan kualitas dan fungsionalitas aplikasi,
            termasuk:
          </p>
          <ul className='list-disc list-inside pl-5'>
            <li>
              <strong>Next.js</strong>: Framework untuk pengembangan aplikasi
              React dengan fitur unggulan seperti server-side rendering dan
              static site generation.
            </li>
            <li>
              <strong>Tailwind CSS</strong> dan <strong>DaisyUI</strong>: Alat
              untuk styling aplikasi dengan desain responsif dan modern, serta
              kemudahan dalam penyesuaian desain.
            </li>
            <li>
              <strong>Firebase</strong>: Platform untuk integrasi dan
              penyimpanan data real-time, serta otentikasi pengguna yang aman.
            </li>
            <li>
              <strong>Font Awesome</strong>: Menyediakan ikon dan elemen grafis
              yang kaya dan bervariasi untuk meningkatkan tampilan antarmuka
              pengguna.
            </li>
            <li>
              <strong>GitHub</strong>: Platform untuk version control dan
              hosting kode sumber, memfasilitasi kolaborasi dan pembaruan proyek
              secara berkala.
            </li>
          </ul>
          <Team />
          <p>
            Anda dapat mengakses kode sumber dan melihat perkembangan terbaru
            dari aplikasi ini di{' '}
            <a
              href='https://github.com/sayaptawon'
              className='text-primary hover:underline'
            >
              GitHub
            </a>
            . Kami berkomitmen untuk terus memperbarui dan meningkatkan aplikasi
            ini, dengan tujuan untuk memberikan solusi terbaik dalam akses
            layanan publik di Rutan Wonosobo.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutApplication;
