'use client';

import React, { useState, useEffect } from 'react';
import data from '@/data/wbpData.json';

const StatisticsWBP = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section data-theme='corporate' className='p-6 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Information Boards</h2>
      <div className='card shadow bg-white'>
        <div className='overflow-x-auto'>
          {loading ? (
            <div className='p-4'>
              <div className='w-full h-12 skeleton mb-4'></div>
              <div className='w-full h-8 skeleton mb-2'></div>
              <div className='w-full h-8 skeleton mb-2'></div>
              <div className='w-full h-8 skeleton'></div>
              <div className='w-full h-12 skeleton mt-4'></div>
            </div>
          ) : (
            <table className='table w-full text-center'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='py-3 px-4 rounded-tl-lg'>Penghuni</th>
                  <th className='py-3 px-4'>Laki-Laki</th>
                  <th className='py-3 px-4'>Perempuan</th>
                  <th className='py-3 px-4 rounded-tr-lg'>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((item, index) => (
                  <tr key={index} className='transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-800'>
                    <td className='py-3 px-4'>{item.type}</td>
                    <td className='py-3 px-4'>{item.male}</td>
                    <td className='py-3 px-4'>{item.female}</td>
                    <td className='py-3 px-4 font-semibold'>{item.total}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className='bg-primary text-white'>
                <tr>
                  <td className='py-3 px-4 font-bold rounded-bl-lg'>Total</td>
                  <td colSpan='3' className='py-3 px-4 font-bold rounded-br-lg'>
                    {data.total} Orang
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default StatisticsWBP;
