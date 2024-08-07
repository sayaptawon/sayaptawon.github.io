import React from 'react';
import Layout from '@/pages/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Kesehatan = () => {
  return (
    <Layout title='KESEHATAN' description='Informasi penting mengenai layanan kesehatan yang disediakan oleh Rutan Wonosobo.'>
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
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Kesehatan</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Isi Halaman */}
        <div className='mb-6'>
          <Image src='/medical-center.webp' alt='Medical Center' width={1200} height={600} className='w-full rounded-lg shadow' />
        </div>

        <div className='text-base sm:text-lg leading-relaxed space-y-6 text-justify'>
          <p>Rutan Wonosobo menyediakan berbagai layanan kesehatan yang terintegrasi untuk memastikan kesejahteraan dan kesehatan para warga binaan pemasyarakatan.</p>

          <h2 className='text-xl font-semibold'>Skrining Kesehatan</h2>
          <p>Setiap tahanan yang baru tiba di Rutan Wonosobo menjalani skrining kesehatan menyeluruh. Prosedur ini mencakup pemeriksaan fisik, pemeriksaan laboratorium, dan evaluasi kesehatan mental untuk mendeteksi kondisi kesehatan mereka.</p>

          <h2 className='text-xl font-semibold'>Skrining Kesehatan Gigi dan Mulut</h2>
          <p>Pemeriksaan kesehatan gigi dan mulut rutin dilakukan pada tahanan yang baru tiba di Rutan Wonosobo. Hal ini bertujuan untuk mencegah dan mengidentifikasi masalah gigi dan mulut yang mungkin mereka alami serta memberikan perawatan yang diperlukan.</p>

          <h2 className='text-xl font-semibold'>Skrining Riwayat Penyakit Menular</h2>
          <p>Skrining riwayat penyakit menular dilakukan untuk mengidentifikasi tahanan yang memiliki riwayat penyakit menular seperti HIV/AIDS, hepatitis, atau penyakit menular lainnya. Langkah ini penting untuk mencegah penyebaran penyakit di dalam fasilitas pemasyarakatan.</p>

          <h2 className='text-xl font-semibold'>Mobile VCT</h2>
          <p>Program Mobile VCT diselenggarakan secara berkala setiap 6 bulan untuk memberikan layanan tes HIV/AIDS secara sukarela kepada seluruh warga binaan pemasyarakatan. Tujuan program ini adalah untuk mendeteksi dini dan memberikan pengobatan kepada mereka yang terinfeksi serta memberikan edukasi tentang pencegahan penyakit.</p>

          <h2 className='text-xl font-semibold'>Skrining TBC Massal</h2>
          <p>Skrining TBC massal dilakukan secara berkala untuk mendeteksi kasus Tuberkulosis (TBC) di antara warga binaan pemasyarakatan. Langkah ini membantu mengidentifikasi kasus TBC secara dini dan memberikan pengobatan yang tepat serta mengurangi risiko penularan di dalam fasilitas.</p>

          <h2 className='text-xl font-semibold'>Pelayanan Pengobatan</h2>
          <p>Tim medis Rutan Wonosobo memberikan pelayanan pengobatan sederhana untuk menangani masalah kesehatan ringan seperti demam, flu, atau sakit kepala kepada warga binaan pemasyarakatan. Pelayanan ini bertujuan untuk memastikan bahwa mereka mendapatkan perawatan yang diperlukan dengan cepat.</p>

          <h2 className='text-xl font-semibold'>Pelayanan Laboratorium</h2>
          <p>Layanan laboratorium sederhana disediakan di Rutan Wonosobo untuk mendukung diagnosa dan pengobatan masalah kesehatan pada warga binaan pemasyarakatan. Tes darah, urine, dan tes penyakit menular lainnya dilakukan secara berkala untuk memantau kondisi kesehatan mereka.</p>

          <h2 className='text-xl font-semibold'>Kegiatan Promotif dan Preventif</h2>
          <p>Tim kesehatan Rutan Wonosobo melaksanakan berbagai kegiatan promotif dan preventif untuk meningkatkan kesadaran tentang pentingnya menjaga kesehatan dan mencegah penyakit di antara warga binaan pemasyarakatan. Ini termasuk penyuluhan kesehatan, kampanye perilaku hidup sehat, dan program vaksinasi.</p>

          <h2 className='text-xl font-semibold'>Perawatan Luka Ringan</h2>
          <p>Tim medis Rutan Wonosobo memberikan perawatan luka ringan kepada warga binaan pemasyarakatan. Tindakan ini meliputi membersihkan luka, memberikan obat-obatan, dan memastikan perawatan yang tepat untuk mempercepat proses penyembuhan dan mencegah infeksi.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Kesehatan;
