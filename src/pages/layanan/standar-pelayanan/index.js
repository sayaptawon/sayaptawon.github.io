import React, { useState } from 'react';
import Layout from '@/pages/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import imageData from '@/data/standarPelayananData.json';
import Image from 'next/image';

const Disclaimer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <Layout
      title='Standar Pelayanan'
      description='Informasi penting mengenai standar pelayanan situs web ini.'
    >
      <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
        <div className='w-full mb-6'>
          <nav className='w-full'>
            <div className='mx-auto bg-base-100 p-4 rounded shadow border border-gray-200'>
              <ul className='flex flex-wrap items-center text-sm text-gray-700 font-bold font-sans justify-start sm:justify-center'>
                <li>
                  <Link
                    href='/'
                    className='flex items-center px-2 py-1 text-gray-600 hover:text-blue-900 transition-colors duration-200'
                  >
                    <FontAwesomeIcon icon={faHome} className='mr-2' />
                    Beranda
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='mx-2 text-gray-500'
                  />
                </li>
                <li>
                  <span className='px-2 py-1 text-gray-900'>Standar Pelayanan</span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-extrabold mb-4 text-center text-primary'>
            Standar Pelayanan
          </h1>
        </header>

        <div className='space-y-4'>
          {imageData.map((section, index) => (
            <div key={index} className='border rounded-lg'>
              <button
                onClick={() => toggleSection(index)}
                className='w-full px-4 py-2 text-left bg-gray-100 border-b rounded-t-lg flex items-center justify-between focus:outline-none'
              >
                <span className='text-lg font-semibold'>{section.title}</span>
                <FontAwesomeIcon
                  icon={openSection === index ? faMinus : faPlus}
                  className='ml-2'
                />
              </button>
              {openSection === index && (
                <div className='px-4 py-2'>
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={600}
                    height={400}
                    className='w-full h-auto object-cover rounded-lg mb-4'
                  />
                  <p>{section.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
