import React, { useEffect, useState } from 'react';

const Instagram = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tambahkan script RSS saat komponen dimuat
    const script = document.createElement('script');
    script.src = 'https://widget.rss.app/v1/wall.js';
    script.async = true;
    script.type = 'text/javascript';
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section data-theme='corporate' className='mt-4 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Instagram Feeds</h2>
      {isLoading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-4 gap-4'>
          {/* Skeleton Loader untuk Card */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className='w-full h-80 bg-base-300 skeleton rounded-lg' style={{ margin: '0 auto' }}></div>
          ))}
        </div>
      ) : (
        <div className='overflow-hidden rounded-lg'>
          <rssapp-wall id='Hqi5QMYTYnjdiFQj'></rssapp-wall>
        </div>
      )}
    </section>
  );
};

export default Instagram;
