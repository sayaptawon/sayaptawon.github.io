import React, { useEffect, useState } from 'react';

const Instagram = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Instagram Feeds</h2>
      {isLoading ? (
        <div className='flex justify-center items-center h-80'>
          <div className='loading loading-ring loading-lg'></div>
        </div>
      ) : (
        <div className='overflow-hidden rounded-lg'>
          <rssapp-wall id='Hqi5QMYTYnjdiFQj' loading='lazy'></rssapp-wall>
        </div>
      )}
    </section>
  );
};

export default Instagram;
