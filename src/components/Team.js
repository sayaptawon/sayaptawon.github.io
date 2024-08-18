import React from 'react';
import Image from 'next/image';
import teamData from '@/data/teamData.json';

const Team = () => {
  return (
    <section
      data-theme='corporate'
      className='p-4 border-b border-gray-200 mb-4'
    >
      <div className='text-center mb-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4'>
          Our Team
        </h2>
        <p className='text-lg text-base-content'>
          Ketahui lebih lanjut tentang orang-orang di balik proyek ini
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {teamData.map((member, index) => (
          <div
            key={index}
            className='card bg-gradient-to-r from-blue-500 to-teal-500 text-base-content shadow-md transition-shadow duration-300 hover:shadow-lg'
          >
            <figure className='relative w-full h-40 flex items-center justify-center'>
              <div className='mask mask-circle w-24 h-24 flex items-start justify-center'>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  style={{
                    width: '96px',
                    height: '96px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='https://fastly.picsum.photos/id/278/20/20.jpg?blur=10&hmac=mIMB2jGMPxpBwZbfY64XdKqrhu9AL0cSmKMFci1Rl9w'
                />
              </div>
            </figure>
            <div className='card-body bg-base-200 text-center p-4'>
              <h3 className='text-xl font-semibold mb-2'>{member.name}</h3>
              <div className='badge badge-primary text-white rounded-full mb-2 mx-auto'>
                {member.role}
              </div>
              <p className='text-base'>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
