'use client';

import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

const StatisticsWBP = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'wbpData'),
      (querySnapshot) => {
        let totalJumlah = 0;
        const dataArray = [];

        querySnapshot.forEach((doc) => {
          const item = doc.data();
          dataArray.push(item);

          totalJumlah += (item.tahananLakiLaki || 0) + (item.tahananPerempuan || 0) + (item.narapidanaLakiLaki || 0) + (item.narapidanaPerempuan || 0);
        });

        setData(dataArray);
        setTotal(totalJumlah);
      },
      (error) => {
        console.error('Error fetching data: ', error);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Information Boards</h2>
      <div className='card shadow-lg bg-white mb-4'>
        <div className='overflow-x-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <table className='table w-full text-center'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th className='py-3 px-4'>Tahanan</th>
                    <th className='py-3 px-4'>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className='hover:bg-gray-100'>
                        <td className='py-3 px-4'>Tahanan Laki-Laki</td>
                        <td className='py-3 px-4'>{item.tahananLakiLaki}</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                        <td className='py-3 px-4'>Tahanan Perempuan</td>
                        <td className='py-3 px-4'>{item.tahananPerempuan}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <table className='table w-full text-center'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th className='py-3 px-4'>Narapidana</th>
                    <th className='py-3 px-4'>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className='hover:bg-gray-100'>
                        <td className='py-3 px-4'>Narapidana Laki-Laki</td>
                        <td className='py-3 px-4'>{item.narapidanaLakiLaki}</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                        <td className='py-3 px-4'>Narapidana Perempuan</td>
                        <td className='py-3 px-4'>{item.narapidanaPerempuan}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='mt-4'>
            <table className='table w-full text-center'>
              <tfoot className='bg-primary text-white'>
                <tr>
                  <td className='py-3 px-4 font-bold'>Total</td>
                  <td className='py-3 px-4 font-bold'>{total} Orang</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsWBP;
