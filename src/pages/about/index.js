import React from 'react';
import Layout from '@/pages/layout';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCheck, faUserFriends, faBox, faGavel, faLock, faHandHoldingHeart, faPeopleArrows, faHeartbeat, faSchool, faUserGraduate, faHandsHelping, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const services = [
    {
      title: 'Pelayanan pendaftaran tahanan',
      icon: faUserCheck,
      description: 'Pelayanan untuk proses pendaftaran tahanan baru yang masuk ke Rutan Wonosobo, termasuk pengumpulan data pribadi dan administrasi awal.',
    },
    {
      title: 'Pelayanan kunjungan tahanan',
      icon: faUserFriends,
      description: 'Pelayanan yang mengatur jadwal dan proses kunjungan bagi keluarga atau kerabat tahanan, termasuk pemesanan waktu kunjungan dan persyaratan yang diperlukan.',
    },
    {
      title: 'Pelayanan penitipan barang',
      icon: faBox,
      description: 'Pelayanan untuk menerima dan menyimpan barang-barang yang akan diserahkan kepada tahanan, dengan prosedur verifikasi dan pencatatan yang ketat.',
    },
    {
      title: 'Pelayanan pelimpahan perkara',
      icon: faGavel,
      description: 'Pelayanan yang menangani proses pelimpahan perkara dari pihak berwenang kepada pengadilan, termasuk dokumentasi dan koordinasi administratif.',
    },
    {
      title: 'Pelayanan pembebasan bersyarat',
      icon: faLock,
      description: 'Pelayanan untuk pengajuan dan proses administrasi terkait pembebasan bersyarat tahanan yang memenuhi syarat tertentu.',
    },
    {
      title: 'Pelayanan asimilasi',
      icon: faHandHoldingHeart,
      description: 'Pelayanan yang mendukung proses asimilasi tahanan ke masyarakat, termasuk pembinaan dan persiapan reintegrasi sosial.',
    },
    {
      title: 'Pelayanan integrasi',
      icon: faPeopleArrows,
      description: 'Pelayanan yang membantu integrasi tahanan dalam masyarakat setelah menjalani masa tahanan, termasuk program-program rehabilitasi dan reintegrasi.',
    },
    {
      title: 'Pelayanan kesehatan',
      icon: faHeartbeat,
      description: 'Pelayanan medis yang mencakup pemeriksaan kesehatan, perawatan medis, dan pengobatan untuk tahanan di Rutan Wonosobo.',
    },
    {
      title: 'Pelayanan pendidikan',
      icon: faSchool,
      description: 'Pelayanan yang menyediakan akses pendidikan bagi tahanan, termasuk program belajar dan pelatihan keterampilan untuk pengembangan diri.',
    },
    {
      title: 'Pelayanan pembinaan kepribadian',
      icon: faUserGraduate,
      description: 'Pelayanan yang fokus pada pembinaan kepribadian tahanan, termasuk konseling, pelatihan karakter, dan kegiatan rehabilitasi.',
    },
    {
      title: 'Pelayanan bantuan hukum',
      icon: faHandsHelping,
      description: 'Pelayanan yang memberikan bantuan hukum kepada tahanan, termasuk konsultasi hukum, pendampingan dalam proses hukum, dan akses ke penasihat hukum.',
    },
    {
      title: 'Pelayanan pengaduan',
      icon: faExclamationTriangle,
      description: 'Pelayanan untuk menerima, memproses, dan menindaklanjuti pengaduan dari tahanan atau masyarakat terkait layanan di Rutan Wonosobo.',
    },
  ];

  return (
    <Layout title='Tentang Kami' description='Temukan lebih lanjut tentang visi, misi, dan layanan yang kami tawarkan di Rutan Wonosobo.'>
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
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>About</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Tentang Kami</h1>
        </header>

        {/* Gambar */}
        <div className='mb-8'>
          <Image src='/thumbnail.png' alt='Thumbnail Sayap Tawon' width={1200} height={600} className='w-full h-auto rounded-lg shadow-lg' />
        </div>

        {/* Isi Halaman */}
        <p className='mb-4 text-base sm:text-lg lg:text-xl text-gray-700'>Sistem Layanan Terpadu Rutan Wonosobo adalah sebuah sistem yang mengintegrasikan berbagai layanan publik yang ada di Rutan Wonosobo dalam satu platform. Sistem ini bertujuan untuk memudahkan masyarakat dalam mengakses layanan publik di Rutan Wonosobo, meningkatkan kualitas pelayanan publik, dan mewujudkan transparansi dan akuntabilitas penyelenggaraan layanan publik di Rutan Wonosobo.</p>

        {/* Tabel Manfaat */}
        <div className='overflow-x-auto mb-6'>
          <table className='table w-full text-sm'>
            <thead>
              <tr className='bg-accent text-accent-content'>
                <th className='py-3 px-4 text-left'>Kategori</th>
                <th className='py-3 px-4 text-left'>Manfaat</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-accent-focus transition-colors duration-200'>
                <td className='py-2 px-4 font-semibold'>Bagi Masyarakat</td>
                <td className='py-2 px-4'>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>Mempermudah dan mempercepat akses layanan publik di Rutan Wonosobo</li>
                    <li>Meningkatkan kualitas pelayanan publik yang diterima</li>
                    <li>Mewujudkan transparansi dan akuntabilitas penyelenggaraan layanan publik di Rutan Wonosobo</li>
                  </ul>
                </td>
              </tr>
              <tr className='hover:bg-accent-focus transition-colors duration-200'>
                <td className='py-2 px-4 font-semibold'>Bagi Rutan Wonosobo</td>
                <td className='py-2 px-4'>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>Meningkatkan efisiensi dan efektivitas penyelenggaraan layanan publik</li>
                    <li>Meningkatkan kualitas data dan informasi layanan publik</li>
                    <li>Meningkatkan akuntabilitas dan transparansi penyelenggaraan layanan publik</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kartu Layanan */}
        <div className='mb-8'>
          <h2 className='text-3xl font-bold mb-6 text-gray-900 text-center'>Layanan Kami</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {services.map((service, index) => (
              <div key={index} className='bg-green-50 shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 duration-300 ease-in-out'>
                <div className='bg-white p-6 flex flex-col items-center text-center'>
                  <div className='bg-green-100 rounded-full p-6 mb-4'>
                    <FontAwesomeIcon icon={service.icon} className='text-primary text-4xl' />
                  </div>
                  <span className='text-gray-800 font-bold text-center text-lg'>{service.title.toUpperCase()}</span>
                </div>
                <div className='px-6 py-4'>
                  <p className='text-gray-600 text-justify'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabel Cara Mengakses */}
        <div className='overflow-x-auto mb-6'>
          <table className='table w-full text-sm'>
            <thead>
              <tr className='bg-accent text-accent-content'>
                <th className='py-3 px-4 text-left'>Cara Mengakses</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-accent-focus transition-colors duration-200'>
                <td className='py-2 px-4'>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>Pengguna dapat mengakses layanan kami melalui situs web ini dengan melakukan navigasi ke halaman layanan yang diinginkan.</li>
                    <li>Pengguna juga dapat menghubungi petugas kami melalui informasi kontak yang tersedia di situs web ini.</li>
                    <li>Untuk beberapa layanan tertentu, pengguna mungkin perlu mendaftar atau membuat janji temu terlebih dahulu.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabel Jam Layanan */}
        <div className='overflow-x-auto mb-6'>
          <table className='table w-full text-sm'>
            <thead>
              <tr className='bg-primary text-primary-content'>
                <th className='py-3 px-4'>Hari</th>
                <th className='py-3 px-4'>Jam Layanan</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-base-200'>
                <td className='py-2 px-4 whitespace-nowrap'>Senin - Kamis</td>
                <td className='py-2 px-4 overflow-hidden text-ellipsis'>08.00 - 11.00 WIB (PAGI), 13.00 - 14.00 WIB (SIANG)</td>
              </tr>
              <tr className='hover:bg-base-200'>
                <td className='py-2 px-4 whitespace-nowrap'>Jum'at - Sabtu</td>
                <td className='py-2 px-4 overflow-hidden text-ellipsis'>08.30 - 11.00 WIB</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabel Kontak */}
        <div className='overflow-x-auto mb-6'>
          <table className='table w-full text-sm'>
            <thead>
              <tr className='bg-primary text-primary-content'>
                <th className='py-3 px-4 text-left'>Keterangan</th>
                <th className='py-3 px-4 text-left'>Informasi</th>
              </tr>
            </thead>
            <tbody>
              <tr className='hover:bg-base-200'>
                <td className='py-2 px-4 whitespace-nowrap'>Website</td>
                <td className='py-2 px-4 overflow-hidden text-ellipsis'>
                  <a href='https://rutanwonosobo.kemenkumham.go.id/' className='text-blue-600 hover:underline'>
                    https://rutanwonosobo.kemenkumham.go.id/
                  </a>
                </td>
              </tr>
              <tr className='hover:bg-base-200'>
                <td className='py-2 px-4 whitespace-nowrap'>Telepon</td>
                <td className='py-2 px-4 overflow-hidden text-ellipsis'>(0286) 321030</td>
              </tr>
              <tr className='hover:bg-base-200'>
                <td className='py-2 px-4 whitespace-nowrap'>Faksimile</td>
                <td className='py-2 px-4 overflow-hidden text-ellipsis'>(0286) 321384</td>
              </tr>
              <tr className='hover:bg-base-200'>
                <td className='py-2 px-4 whitespace-nowrap'>Aduan & Informasi</td>
                <td className='py-2 px-4 overflow-hidden text-ellipsis'>(+62) 895-1072-5657 (WhatsApp)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default About;
