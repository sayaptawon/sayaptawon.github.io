import React from 'react';

const GlobalLoading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-base-200'>
      <span className='loading loading-infinity loading-lg bg-gradient-to-r from-blue-400 via-teal-500 to-green-500'></span>
    </div>
  );
};

export default GlobalLoading;
