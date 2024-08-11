'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Team = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Define the image style
  const imageStyle = {
    width: '96px',
    height: '96px',
    objectFit: 'cover',
    objectPosition: 'top', // Ensure image is positioned from the top
  };

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200 mb-4'>
      <div className='text-center mb-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Our Team</h2>
        <p className='text-lg text-base-content'>{loading ? <span className='skeleton h-6 w-1/2 mx-auto block'></span> : 'Ketahui lebih lanjut tentang orang-orang di balik proyek ini'}</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {loading ? (
          [1, 2, 3, 4].map((_, index) => (
            <div key={index} className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'>
              <figure className='relative w-full h-40 flex items-center justify-center'>
                <div className='w-24 h-24 skeleton'></div>
              </figure>
              <div className='card-body bg-base-200 justify-center items-center text-center p-4'>
                <div className='h-6 skeleton mb-2'></div>
                <div className='h-4 skeleton mb-2'></div>
                <div className='h-4 skeleton'></div>
              </div>
            </div>
          ))
        ) : (
          <>
            {/* Kartu 1 */}
            <div className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'>
              <figure className='relative w-full h-40 flex items-center justify-center'>
                <div className='mask mask-circle w-24 h-24 flex items-start justify-center'>
                  <Image src='/narya.webp' alt='Narya' width={96} height={96} style={imageStyle} />
                </div>
              </figure>
              <div className='card-body bg-base-200 justify-center items-center text-center p-4'>
                <h3 className='text-xl font-semibold mb-2'>Narya</h3>
                <div className='badge badge-primary text-white rounded-full mb-2'>Direktur Kreatif</div>
                <p className='text-base'>Narya adalah visioner kreatif di balik konsep awal dan arahan strategis aplikasi ini.</p>
              </div>
            </div>

            {/* Kartu 2 */}
            <div className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'>
              <figure className='relative w-full h-40 flex items-center justify-center'>
                <div className='mask mask-circle w-24 h-24 flex items-start justify-center'>
                  <Image src='/eliyantosarage.webp' alt='Eliyanto Sarage' width={96} height={96} style={imageStyle} />
                </div>
              </figure>
              <div className='card-body bg-base-200 justify-center items-center text-center p-4'>
                <h3 className='text-xl font-semibold mb-2'>Eliyanto Sarage</h3>
                <div className='badge badge-primary text-white rounded-full mb-2'>Pengembang Utama</div>
                <p className='text-base'>Eliyanto Sarage mengembangkan aplikasi dari awal hingga selesai, menerjemahkan visi kreatif menjadi produk yang sepenuhnya fungsional.</p>
              </div>
            </div>

            {/* Kartu 3 */}
            <div className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'>
              <figure className='relative w-full h-40 flex items-center justify-center'>
                <div className='mask mask-circle w-24 h-24 flex items-start justify-center'>
                  <Image src='/woman.png' alt='Fatikha Hayuningtyas' width={96} height={96} style={imageStyle} />
                </div>
              </figure>
              <div className='card-body bg-base-200 justify-center items-center text-center p-4'>
                <h3 className='text-xl font-semibold mb-2'>Fatikha Hayuningtyas</h3>
                <div className='badge badge-primary text-white rounded-full mb-2'>Desainer UI/UX</div>
                <p className='text-base'>Fatikha Hayuningtyas bertanggung jawab untuk merancang antarmuka pengguna dan pengalaman pengguna, memastikan desain yang mulus dan intuitif.</p>
              </div>
            </div>

            {/* Kartu 4 */}
            <div className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'>
              <figure className='relative w-full h-40 flex items-center justify-center'>
                <div className='mask mask-circle w-24 h-24 flex items-start justify-center'>
                  <Image src='/man.png' alt='Setyarifqi' width={96} height={96} style={imageStyle} />
                </div>
              </figure>
              <div className='card-body bg-base-200 justify-center items-center text-center p-4'>
                <h3 className='text-xl font-semibold mb-2'>Setyarifqi</h3>
                <div className='badge badge-primary text-white rounded-full mb-2'>Pengembang Backend</div>
                <p className='text-base'>Setyarifqi fokus pada pengembangan backend, mengelola logika sisi server dan integrasi database untuk aplikasi ini.</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Team;
