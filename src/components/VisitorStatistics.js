'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { ref, onValue, off, push, set } from 'firebase/database';
import { database } from '@/lib/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarAlt, faCalendarWeek, faUser } from '@fortawesome/free-solid-svg-icons';
import { format, subDays, startOfWeek, startOfMonth } from 'date-fns';

const VisitorStatistics = () => {
  const [visitorsToday, setVisitorsToday] = useState(0);
  const [visitorsYesterday, setVisitorsYesterday] = useState(0);
  const [visitorsThisWeek, setVisitorsThisWeek] = useState(0);
  const [visitorsThisMonth, setVisitorsThisMonth] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [loading, setLoading] = useState(true);

  const processVisitorData = useCallback((data) => {
    const today = format(new Date(), 'yyyy-MM-dd');
    const yesterday = format(subDays(new Date(), 1), 'yyyy-MM-dd');
    const startOfWeekDate = format(startOfWeek(new Date()), 'yyyy-MM-dd');
    const startOfMonthDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');

    let todayCount = 0;
    let yesterdayCount = 0;
    let weekCount = 0;
    let monthCount = 0;
    let totalCount = 0;

    for (let date in data) {
      if (data[date]) {
        const dailyVisitors = Object.keys(data[date]).length;

        if (date === today) todayCount = dailyVisitors;
        if (date === yesterday) yesterdayCount = dailyVisitors;
        if (date >= startOfWeekDate) weekCount += dailyVisitors;
        if (date >= startOfMonthDate) monthCount += dailyVisitors;
        totalCount += dailyVisitors;
      }
    }

    setVisitorsToday(todayCount);
    setVisitorsYesterday(yesterdayCount);
    setVisitorsThisWeek(weekCount);
    setVisitorsThisMonth(monthCount);
    setTotalVisitors(totalCount);
    setLoading(false);
  }, []);

  useEffect(() => {
    const visitorsRef = ref(database, 'visitors');

    const handleValueChange = (snapshot) => {
      const data = snapshot.val() || {};
      processVisitorData(data);
    };

    onValue(visitorsRef, handleValueChange);

    return () => {
      off(visitorsRef, 'value', handleValueChange);
    };
  }, [processVisitorData]);

  useEffect(() => {
    const isLocalhost = window.location.hostname === 'localhost';
    if (!isLocalhost) {
      const today = format(new Date(), 'yyyy-MM-dd');
      const visitorRef = ref(database, `visitors/${today}`);

      const newVisitorRef = push(visitorRef);
      set(newVisitorRef, { timestamp: Date.now() });
    }
  }, []);

  return (
    <section data-theme='corporate' className='p-4 border-b border-gray-200'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 text-center'>Visitors</h2>
      <div className='stats stats-vertical lg:stats-horizontal w-full border border-gray-300 rounded-md mb-4'>
        {/* Hari Ini */}
        <div className='stat place-items-center'>
          <div className='stat-figure'>{loading ? <span className='loading loading-spinner loading-lg text-primary'></span> : <FontAwesomeIcon icon={faCalendarDay} size='3x' className='text-primary' />}</div>
          <div className='stat-title font-semibold'>Hari Ini</div>
          <div className='stat-value'>{loading ? <span className='loading loading-spinner loading-lg'></span> : visitorsToday || 'N/A'}</div>
          <div className='stat-desc'>Pengunjung hari ini</div>
        </div>

        {/* Kemarin */}
        <div className='stat place-items-center'>
          <div className='stat-figure'>{loading ? <span className='loading loading-spinner loading-lg text-secondary'></span> : <FontAwesomeIcon icon={faCalendarAlt} size='3x' className='text-secondary' />}</div>
          <div className='stat-title font-semibold'>Kemarin</div>
          <div className='stat-value text-secondary'>{loading ? <span className='loading loading-spinner loading-lg'></span> : visitorsYesterday || 'N/A'}</div>
          <div className='stat-desc text-secondary'>Pengunjung kemarin</div>
        </div>

        {/* Minggu Ini */}
        <div className='stat place-items-center'>
          <div className='stat-figure'>{loading ? <span className='loading loading-spinner loading-lg text-accent'></span> : <FontAwesomeIcon icon={faCalendarWeek} size='3x' className='text-accent' />}</div>
          <div className='stat-title font-semibold'>Minggu Ini</div>
          <div className='stat-value'>{loading ? <span className='loading loading-spinner loading-lg'></span> : visitorsThisWeek || 'N/A'}</div>
          <div className='stat-desc'>Pengunjung minggu ini</div>
        </div>

        {/* Bulan Ini */}
        <div className='stat place-items-center'>
          <div className='stat-figure'>{loading ? <span className='loading loading-spinner loading-lg text-warning'></span> : <FontAwesomeIcon icon={faCalendarAlt} size='3x' className='text-warning' />}</div>
          <div className='stat-title font-semibold'>Bulan Ini</div>
          <div className='stat-value'>{loading ? <span className='loading loading-spinner loading-lg'></span> : visitorsThisMonth || 'N/A'}</div>
          <div className='stat-desc'>Pengunjung bulan ini</div>
        </div>

        {/* Total Visitors */}
        <div className='stat place-items-center'>
          <div className='stat-figure'>{loading ? <span className='loading loading-spinner loading-lg text-info'></span> : <FontAwesomeIcon icon={faUser} size='3x' className='text-info' />}</div>
          <div className='stat-title font-semibold'>Total Visitors</div>
          <div className='stat-value text-info'>{loading ? <span className='loading loading-spinner loading-lg'></span> : totalVisitors || 'N/A'}</div>
          <div className='stat-desc text-info'>Total pengunjung</div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStatistics;
