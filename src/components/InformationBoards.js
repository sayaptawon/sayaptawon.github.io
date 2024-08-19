import React from 'react';
import data from '@/data/informationBoardsData.json';

const InformationBoards = () => {
  return (
    <section data-theme='corporate' className='p-6 border-b border-gray-200'>
      <div className='grid gap-2 md:grid-cols-2'>
        {/* Tabel Jam Layanan */}
        <div className='bg-white shadow-lg rounded-lg'>
          <h3 className='text-lg md:text-xl font-semibold text-primary mb-4 text-center'>
            {data.informationBoards[0].title}
          </h3>
          <div className='overflow-x-auto'>
            <table className='table w-full table-auto'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='py-3 px-4 text-left'>Hari</th>
                  <th className='py-3 px-4 text-left'>Jam</th>
                </tr>
              </thead>
              <tbody>
                {data.informationBoards[0].data.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='py-3 px-4 font-medium text-gray-700'>
                      {item.day}
                    </td>
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
        </div>
        {/* Tabel Hari Kunjungan */}
        <div className='bg-white shadow-lg rounded-lg'>
          <h3 className='text-lg md:text-xl font-semibold text-primary mb-4 text-center'>
            {data.informationBoards[1].title}
          </h3>
          <div className='overflow-x-auto'>
            <table className='table w-full table-auto'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='py-3 px-4 text-left'>Hari</th>
                  <th className='py-3 px-4 text-left'>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {data.informationBoards[1].data.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='py-3 px-4 font-medium text-gray-700'>
                      {item.day}
                    </td>
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
        </div>
      </div>
    </section>
  );
};

export default InformationBoards;
