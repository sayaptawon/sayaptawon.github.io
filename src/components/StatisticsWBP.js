'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

const StatisticsWBP = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');

  const processData = useCallback((querySnapshot) => {
    let totalJumlah = 0;
    const dataArray = [];
    let latestUpdate = '';

    querySnapshot.forEach((doc) => {
      const item = doc.data();
      dataArray.push(item);

      totalJumlah +=
        (item.tahananLakiLaki || 0) +
        (item.tahananPerempuan || 0) +
        (item.narapidanaLakiLaki || 0) +
        (item.narapidanaPerempuan || 0);

      // Pastikan 'lastUpdated' ada di data dokumen
      if (item.lastUpdated) {
        latestUpdate = new Date(
          item.lastUpdated.seconds * 1000,
        ).toLocaleString();
      }
    });

    setData(dataArray);
    setTotal(totalJumlah);
    setLastUpdated(latestUpdate || 'Tidak Tersedia');
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'wbpData'),
      (querySnapshot) => processData(querySnapshot),
      (error) => {
        console.error('Error fetching data: ', error);
      },
    );

    return () => unsubscribe();
  }, [processData]);

  return (
    <section data-theme='corporate' className='p-6 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-6 text-center'>
        Data Warga Binaan Pemasyarakatan
      </h2>
      <div className='bg-transparent'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          {/* Tabel Tahanan */}
          <div className='bg-white shadow-md rounded-lg'>
            <h3 className='text-lg font-semibold text-primary text-center p-4 border-b'>
              Tahanan
            </h3>
            <div className='overflow-x-auto'>
              <table className='table w-full text-center'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th className='py-3 px-4'>Kategori</th>
                    <th className='py-3 px-4'>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ tahananLakiLaki, tahananPerempuan }, index) => (
                    <React.Fragment key={index}>
                      <tr className='hover:bg-gray-100'>
                        <td className='py-3 px-4'>Tahanan Laki-Laki</td>
                        <td className='py-3 px-4'>{tahananLakiLaki}</td>
                      </tr>
                      <tr className='hover:bg-gray-100'>
                        <td className='py-3 px-4'>Tahanan Perempuan</td>
                        <td className='py-3 px-4'>{tahananPerempuan}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Tabel Narapidana */}
          <div className='bg-white shadow-md rounded-lg'>
            <h3 className='text-lg font-semibold text-primary text-center p-4 border-b'>
              Narapidana
            </h3>
            <div className='overflow-x-auto'>
              <table className='table w-full text-center'>
                <thead className='bg-primary text-white'>
                  <tr>
                    <th className='py-3 px-4'>Kategori</th>
                    <th className='py-3 px-4'>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    ({ narapidanaLakiLaki, narapidanaPerempuan }, index) => (
                      <React.Fragment key={index}>
                        <tr className='hover:bg-gray-100'>
                          <td className='py-3 px-4'>Narapidana Laki-Laki</td>
                          <td className='py-3 px-4'>{narapidanaLakiLaki}</td>
                        </tr>
                        <tr className='hover:bg-gray-100'>
                          <td className='py-3 px-4'>Narapidana Perempuan</td>
                          <td className='py-3 px-4'>{narapidanaPerempuan}</td>
                        </tr>
                      </React.Fragment>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <table className='table w-full text-center'>
            <tfoot className='bg-primary text-white'>
              <tr>
                <td className='py-3 px-4 font-bold'>Total</td>
                <td className='py-3 px-4 font-bold'>{total} Orang</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='mt-4 text-center'>
          <p className='text-gray-600 small'>
            Data terakhir diperbarui pada: {lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatisticsWBP;
