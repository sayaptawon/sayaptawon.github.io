'use client';

import React, { useEffect, useState } from 'react';
import { database, ref, onValue, update } from '../lib/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarAlt, faCalendarWeek, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons';

const VisitorStatistics = () => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const statsRef = ref(database, 'visitorCounts');

    const unsubscribe = onValue(statsRef, (snapshot) => {
      const data = snapshot.val();
      setStatistics(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLocalhost = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';

      if (!isLocalhost) {
        recordNewVisit();
      }
    }
  }, []);

  const recordNewVisit = async () => {
    const todayDate = getTodayDate();
    const weekStartDate = getWeekStartDate();
    const monthStartDate = getMonthStartDate();
    const visitorCountsRef = ref(database, 'visitorCounts');

    await update(visitorCountsRef, (currentData) => {
      if (currentData) {
        const lastVisit = currentData.lastVisit || todayDate;

        // Reset data harian jika tanggal berbeda
        if (lastVisit !== todayDate) {
          currentData.yesterday = currentData.today || 0;
          currentData.today = 0;
        }

        // Reset data mingguan jika awal minggu berbeda
        if (lastVisit < weekStartDate) {
          currentData.thisWeek = 0;
        }

        // Reset data bulanan jika awal bulan berbeda
        if (lastVisit < monthStartDate) {
          currentData.thisMonth = 0;
        }

        currentData.today += 1;
        currentData.thisWeek += 1;
        currentData.thisMonth += 1;
        currentData.total = (currentData.total || 0) + 1;
        currentData.lastVisit = todayDate;
      } else {
        currentData = {
          today: 1,
          yesterday: 0,
          thisWeek: 1,
          thisMonth: 1,
          total: 1,
          lastVisit: todayDate,
        };
      }
      return currentData;
    });
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getWeekStartDate = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startDate = new Date(today.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)));
    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getMonthStartDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}-01`;
  };

  if (loading) {
    return (
      <section data-theme='corporate' className='p-6 border-b border-gray-200'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Visitor Statistics</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div key={index} className='bg-white p-4 border border-gray-200 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-xl'>
                <div className='flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full skeleton flex items-center justify-center mr-4'>
                  <div className='w-6 h-6 bg-gray-400 rounded-full'></div>
                </div>
                <div className='flex-1'>
                  <div className='h-4 bg-gray-300 skeleton mb-2'></div>
                  <div className='h-6 bg-gray-300 skeleton'></div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }

  return (
    <section data-theme='corporate' className='p-6 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Visitor Statistics</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        <StatisticCard label='Hari Ini' value={statistics.today || 0} icon={faCalendarDay} />
        <StatisticCard label='Kemarin' value={statistics.yesterday || 0} icon={faCalendarAlt} />
        <StatisticCard label='Minggu Ini' value={statistics.thisWeek || 0} icon={faCalendarWeek} />
        <StatisticCard label='Bulan Ini' value={statistics.thisMonth || 0} icon={faCalendar} />
        <StatisticCard label='Total' value={statistics.total || 0} icon={faUsers} />
      </div>
    </section>
  );
};

const StatisticCard = ({ label, value, icon }) => (
  <div className='bg-white p-4 border border-gray-200 rounded-lg shadow-md flex items-center transition-transform transform hover:scale-105 hover:shadow-xl'>
    <div className='flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4'>
      <FontAwesomeIcon icon={icon} className='text-primary' />
    </div>
    <div>
      <div className='text-sm font-medium text-gray-500'>{label}</div>
      <div className='text-lg font-bold text-gray-900'>{value} Orang</div>
    </div>
  </div>
);

export default VisitorStatistics;
