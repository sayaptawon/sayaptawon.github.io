import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CallToAction = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <div className='p-6 sm:p-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg rounded-lg'>
        {isLoading ? (
          <div className='flex flex-col justify-center items-center space-y-4 sm:space-y-6'>
            <div className='skeleton w-full max-w-xs h-8 bg-gray-300 rounded'></div>
            <div className='skeleton w-full max-w-sm h-6 bg-gray-300 rounded'></div>
            <div className='skeleton w-full h-10 bg-gray-300 rounded'></div>
          </div>
        ) : (
          <>
            <h2 className='text-2xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-center text-white'>Solusi Layanan Terpadu untuk Anda</h2>
            <p className='text-base sm:text-lg mb-6 sm:mb-8 text-center text-gray-200'>Jangan lewatkan kesempatan untuk menikmati kemudahan akses layanan di Rutan Wonosobo dengan aplikasi "Sayap Tawon". Solusi modern yang efisien, tepat di genggaman Anda. Unduh sekarang dan rasakan perbedaannya!</p>
            <div className='flex justify-center w-full'>
              <Link href='/download' className='btn btn-primary glass w-full sm:w-auto text-white rounded-full sm:text-lg border-0 flex items-center justify-center gap-2 hover:text-white hover:shadow-lg transition-colors duration-300 ease-in-out'>
                <span className='mr-2'>
                  <FontAwesomeIcon icon={faDownload} size='lg' />
                </span>
                <span>Unduh SayapTawon.apk</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CallToAction;