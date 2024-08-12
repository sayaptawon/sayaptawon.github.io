'use client';

import React, { useState, useEffect } from 'react';
import data from '@/data/informationBoardsData.json';

const InformationBoards = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <div className='grid gap-6 md:grid-cols-2 mb-4'>
        {/* Tabel Jam Layanan */}
        <div className='card bg-white shadow-md rounded-lg p-4'>
          {loading ? (
            <div className='p-4'>
              <div className='w-full h-8 skeleton mb-4'></div>
              <div className='overflow-x-auto'>
                <div className='w-full'>
                  <div className='h-10 skeleton mb-2'></div>
                  <div className='h-40 skeleton'></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h3 className='text-lg md:text-xl font-semibold text-primary mb-4 text-center'>{data.informationBoards[0].title}</h3>
              <div className='overflow-x-auto'>
                <table className='table w-full table-fixed'>
                  <thead className='bg-primary text-white'>
                    <tr>
                      <th className='py-3 px-4'>Hari</th>
                      <th className='py-3 px-4'>Jam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.informationBoards[0].data.map((item, index) => (
                      <tr key={index} className='hover:bg-gray-100'>
                        <td className='py-3 px-4 font-medium text-gray-700'>{item.day}</td>
                        <td className='py-3 px-4 text-gray-600'>
                          <ul className='list-disc ml-4'>
                            {item.hours.map((hour, idx) => (
                              <li key={idx}>{hour}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
        {/* Tabel Hari Kunjungan */}
        <div className='card bg-white shadow-md rounded-lg p-4'>
          {loading ? (
            <div className='p-4'>
              <div className='w-full h-8 skeleton mb-4'></div>
              <div className='overflow-x-auto'>
                <div className='w-full'>
                  <div className='h-10 skeleton mb-2'></div>
                  <div className='h-40 skeleton'></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h3 className='text-lg md:text-xl font-semibold text-primary mb-4 text-center'>{data.informationBoards[1].title}</h3>
              <div className='overflow-x-auto'>
                <table className='table w-full table-fixed'>
                  <thead className='bg-primary text-white'>
                    <tr>
                      <th className='py-3 px-4'>Hari</th>
                      <th className='py-3 px-4'>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.informationBoards[1].data.map((item, index) => (
                      <tr key={index} className='hover:bg-gray-100'>
                        <td className='py-3 px-4 font-medium text-gray-700'>{item.day}</td>
                        <td className='py-3 px-4 text-gray-600'>
                          <ul className='list-disc ml-4'>
                            {item.description.map((desc, idx) => (
                              <li key={idx}>{desc}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default InformationBoards;
