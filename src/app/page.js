'use client';

import React from 'react';
import Header from '@/components/Header';
import StatisticsWBP from '@/components/StatisticsWBP';
import InformationBoards from '@/components/InformationBoards';
import InstagramFeed from '@/components/Instagram';
import ListService from '@/components/ListService';
import Gallery from '@/components/Gallery';
import Locations from '@/components/Locations';
import VisitorStatistics from '@/components/VisitorStatistics';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Notification from '@/components/Notification';
import BubbleMessage from '@/components/BubbleMessage';
import BackToTop from '@/components/BackToTop';

const Home = () => {
  return (
    <div data-theme='night' className='container-fluid mx-auto p-4 sm:p-6 lg:p-8'>
      <div className='bg-white text-primary-content shadow-lg rounded-lg overflow-hidden'>
        <Header />
        <StatisticsWBP />
        <InformationBoards />
        <InstagramFeed />
        <ListService />
        <Gallery />
        <Locations />
        <VisitorStatistics />
        <Testimonial />
        <Contact />
        <Notification />
        <BubbleMessage />
        <BackToTop />
      </div>
    </div>
  );
};

export default Home;
