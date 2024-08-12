'use client';

import React from 'react';
import data from '@/data/wbpData.json';

const StatisticsWBP = () => {
  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Information Boards</h2>
      <div className='card shadow bg-white mb-4'>
        <div className='overflow-x-auto'>
          <table className='table w-full text-center border-separate border-spacing-0'>
            <thead className='bg-primary text-white'>
              <tr>
                <th className='py-3 px-4 border-b border-gray-300'>Penghuni</th>
                <th className='py-3 px-4 border-b border-gray-300'>Laki-Laki</th>
                <th className='py-3 px-4 border-b border-gray-300'>Perempuan</th>
                <th className='py-3 px-4 border-b border-gray-300'>Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((item, index) => (
                <tr key={index} className='transition-colors duration-300 ease-in-out hover:bg-gray-50'>
                  <td className='py-3 px-4 border-b border-gray-200'>{item.type}</td>
                  <td className='py-3 px-4 border-b border-gray-200'>{item.male}</td>
                  <td className='py-3 px-4 border-b border-gray-200'>{item.female}</td>
                  <td className='py-3 px-4 border-b border-gray-200 font-semibold'>{item.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className='bg-primary text-white'>
              <tr>
                <td className='py-3 px-4 border-t border-gray-300 font-bold'>Total</td>
                <td colSpan='3' className='py-3 px-4 border-t border-gray-300 font-bold'>
                  {data.total} Orang
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StatisticsWBP;
