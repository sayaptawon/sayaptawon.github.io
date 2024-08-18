'use client';

import React, { Suspense } from 'react';
import Header from '@/components/Header';

const StatisticsWBP = React.lazy(() => import('@/components/StatisticsWBP'));
const InformationBoards = React.lazy(() =>
  import('@/components/InformationBoards'),
);
const ListService = React.lazy(() => import('@/components/ListService'));
const Gallery = React.lazy(() => import('@/components/Gallery'));
const Locations = React.lazy(() => import('@/components/Locations'));
const VisitorStatistics = React.lazy(() =>
  import('@/components/VisitorStatistics'),
);
const Testimonial = React.lazy(() => import('@/components/Testimonial'));
const CallToAction = React.lazy(() => import('@/components/CallToAction'));
const Team = React.lazy(() => import('@/components/Team'));
const Notification = React.lazy(() => import('@/components/Notification'));
const BubbleMessage = React.lazy(() => import('@/components/BubbleMessage'));
const BackToTop = React.lazy(() => import('@/components/BackToTop'));

const LoadingSpinner = () => (
  <div className='flex justify-center items-center min-h-screen'>
    <span className='loading loading-spinner loading-lg text-primary'></span>
  </div>
);

const Home = () => {
  return (
    <div data-theme='night' className='container-fluid mx-auto min-h-screen'>
      <div className='bg-white text-primary-content overflow-hidden'>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <StatisticsWBP />
          <InformationBoards />
          <ListService />
          <Gallery />
          <Locations />
          <VisitorStatistics />
          <Testimonial />
          <CallToAction />
          <Team />
          <Notification />
          <BubbleMessage />
          <BackToTop />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
