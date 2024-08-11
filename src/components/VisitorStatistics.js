import React, { useEffect, useState, useCallback } from 'react';
import { ref, onValue, off, push, set } from 'firebase/database';
import { database } from '@/lib/firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarAlt, faCalendarWeek, faUser } from '@fortawesome/free-solid-svg-icons';
import { format, subDays, startOfWeek, startOfMonth } from 'date-fns';

const VisitorStatistics = () => {
  const [visitorsToday, setVisitorsToday] = useState(0);
  const [visitorsYesterday, setVisitorsYesterday] = useState(0);
  const [visitorsThisWeek, setVisitorsThisWeek] = useState(0);
  const [visitorsThisMonth, setVisitorsThisMonth] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
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
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 text-center'>Visitors</h2>
      <div className='stats stats-vertical lg:stats-horizontal w-full border border-gray-300 rounded-md mb-4'>
        <div className='stat place-items-center'>
          {isLoading ? (
            <div className='stat-figure skeleton bg-gray-200 rounded-full w-16 h-16'></div>
          ) : (
            <div className='stat-figure'>
              <FontAwesomeIcon icon={faCalendarDay} size='3x' className='text-primary' />
            </div>
          )}
          <div className='stat-title font-semibold'>Hari Ini</div>
          {isLoading ? <div className='stat-value skeleton bg-gray-200 rounded-md w-24 h-6'></div> : <div className='stat-value'>{visitorsToday}</div>}
          <div className='stat-desc'>Pengunjung hari ini</div>
        </div>

        <div className='stat place-items-center'>
          {isLoading ? (
            <div className='stat-figure skeleton bg-gray-200 rounded-full w-16 h-16'></div>
          ) : (
            <div className='stat-figure'>
              <FontAwesomeIcon icon={faCalendarAlt} size='3x' className='text-secondary' />
            </div>
          )}
          <div className='stat-title font-semibold'>Kemarin</div>
          {isLoading ? <div className='stat-value skeleton bg-gray-200 rounded-md w-24 h-6'></div> : <div className='stat-value text-secondary'>{visitorsYesterday}</div>}
          <div className='stat-desc text-secondary'>Pengunjung kemarin</div>
        </div>

        <div className='stat place-items-center'>
          {isLoading ? (
            <div className='stat-figure skeleton bg-gray-200 rounded-full w-16 h-16'></div>
          ) : (
            <div className='stat-figure'>
              <FontAwesomeIcon icon={faCalendarWeek} size='3x' className='text-accent' />
            </div>
          )}
          <div className='stat-title font-semibold'>Minggu Ini</div>
          {isLoading ? <div className='stat-value skeleton bg-gray-200 rounded-md w-24 h-6'></div> : <div className='stat-value'>{visitorsThisWeek}</div>}
          <div className='stat-desc'>Pengunjung minggu ini</div>
        </div>

        <div className='stat place-items-center'>
          {isLoading ? (
            <div className='stat-figure skeleton bg-gray-200 rounded-full w-16 h-16'></div>
          ) : (
            <div className='stat-figure'>
              <FontAwesomeIcon icon={faCalendarAlt} size='3x' className='text-warning' />
            </div>
          )}
          <div className='stat-title font-semibold'>Bulan Ini</div>
          {isLoading ? <div className='stat-value skeleton bg-gray-200 rounded-md w-24 h-6'></div> : <div className='stat-value'>{visitorsThisMonth}</div>}
          <div className='stat-desc'>Pengunjung bulan ini</div>
        </div>

        <div className='stat place-items-center'>
          {isLoading ? (
            <div className='stat-figure skeleton bg-gray-200 rounded-full w-16 h-16'></div>
          ) : (
            <div className='stat-figure'>
              <FontAwesomeIcon icon={faUser} size='3x' className='text-info' />
            </div>
          )}
          <div className='stat-title font-semibold'>Total Visitors</div>
          {isLoading ? <div className='stat-value skeleton bg-gray-200 rounded-md w-24 h-6'></div> : <div className='stat-value text-info'>{totalVisitors}</div>}
          <div className='stat-desc text-info'>Total pengunjung</div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStatistics;
