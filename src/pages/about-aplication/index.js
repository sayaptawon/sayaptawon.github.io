import React from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Team from '@/components/Team';

const AboutApplication = () => {
  return (
    <Layout title='About Application' description='Informasi mendetail tentang Sistem Layanan Terpadu Rutan Wonosobo, teknologi yang digunakan, dan tim pengembang.'>
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
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>About Application</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6 text-center'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4'>About Application</h1>
        </header>

        {/* Konten */}
        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>Sistem Layanan Terpadu Rutan Wonosobo adalah platform revolusioner yang dirancang untuk mengintegrasikan berbagai layanan publik di Rutan Wonosobo dalam satu sistem terpadu. Platform ini bertujuan untuk mempermudah akses masyarakat terhadap berbagai layanan publik, dengan fokus pada peningkatan kualitas pelayanan, transparansi, dan akuntabilitas. Sistem ini merupakan upaya untuk memberikan kemudahan dan efisiensi bagi masyarakat dalam berinteraksi dengan layanan publik.</p>
          <p>
            Aplikasi ini dibangun menggunakan <strong>Next.js</strong>, framework React yang mendukung pengembangan aplikasi web dengan performa tinggi dan kemampuan server-side rendering serta static site generation. Ini memastikan aplikasi tidak hanya cepat diakses tetapi juga SEO-friendly. Teknologi modern yang digunakan mencakup <strong>Tailwind CSS</strong> dan <strong>DaisyUI</strong> untuk desain responsif yang elegan, serta <strong>Firebase</strong> untuk manajemen data real-time yang efisien.
          </p>
          <p>Dalam proses pengembangan, kami memanfaatkan berbagai alat dan pustaka untuk memastikan kualitas dan fungsionalitas aplikasi, termasuk:</p>
          <ul className='list-disc list-inside pl-5'>
            <li>
              <strong>Next.js</strong>: Framework untuk pengembangan aplikasi React dengan fitur unggulan seperti server-side rendering dan static site generation.
            </li>
            <li>
              <strong>Tailwind CSS</strong> dan <strong>DaisyUI</strong>: Alat untuk styling aplikasi dengan desain responsif dan modern, serta kemudahan dalam penyesuaian desain.
            </li>
            <li>
              <strong>Firebase</strong>: Platform untuk integrasi dan penyimpanan data real-time, serta otentikasi pengguna yang aman.
            </li>
            <li>
              <strong>Font Awesome</strong>: Menyediakan ikon dan elemen grafis yang kaya dan bervariasi untuk meningkatkan tampilan antarmuka pengguna.
            </li>
            <li>
              <strong>GitHub</strong>: Platform untuk version control dan hosting kode sumber, memfasilitasi kolaborasi dan pembaruan proyek secara berkala.
            </li>
          </ul>
          <Team />
          <p>
            Anda dapat mengakses kode sumber dan melihat perkembangan terbaru dari aplikasi ini di{' '}
            <a href='https://github.com/sayaptawon' className='text-primary hover:underline'>
              GitHub
            </a>
            . Kami berkomitmen untuk terus memperbarui dan meningkatkan aplikasi ini, dengan tujuan untuk memberikan solusi terbaik dalam akses layanan publik di Rutan Wonosobo.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutApplication;
