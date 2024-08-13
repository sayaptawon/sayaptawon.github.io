import React from 'react';
import Link from 'next/link';
import footerLinks from '@/data/footerLinks.json';
import socialMediaData from '@/data/socialMediaData.json';
import contactData from '@/data/contactData.json';
import servicesData from '@/data/servicesData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const socialIcons = {
  Facebook: faFacebook,
  Twitter: faXTwitter,
  Instagram: faInstagram,
  GitHub: faGithub,
  YouTube: faYoutube,
};

const socialMediaStyles = {
  Facebook: { backgroundColor: '#3b5998' },
  Twitter: { backgroundColor: '#000000' },
  Instagram: { backgroundColor: '#e4405f' },
  GitHub: { backgroundColor: '#333' },
  YouTube: { backgroundColor: '#ff0000' },
};

export default function Footer () {
  return (
    <>
      {/* Atas Footer */}
      <div className='bg-gray-800 text-gray-300 py-10'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Tentang Kami */}
            <div className='flex flex-col'>
              <h4 className='text-lg font-semibold mb-4 text-white border-b-2 border-gray-600 pb-2 text-center sm:text-left'>Tentang Kami</h4>
              <p className='text-gray-400'>Sistem Layanan Terpadu Rutan Wonosobo adalah sebuah sistem yang mengintegrasikan berbagai layanan publik yang ada di Rutan Wonosobo dalam satu platform.</p>
            </div>

            {/* Kontak Kami */}
            <div className='flex flex-col'>
              <h4 className='text-lg font-semibold mb-4 text-white border-b-2 border-gray-600 pb-2 text-center sm:text-left'>Kontak Kami</h4>
              <div className='space-y-2'>
                <p className='text-gray-400'>
                  <span className='font-bold'>Alamat : </span> {contactData.address}
                </p>
                <p className='text-gray-400'>
                  <span className='font-bold'>Telepon : </span> {contactData.phone}
                </p>
                <p className='text-gray-400'>
                  <span className='font-bold'>WhatsApp : </span> {contactData.whatsapp}
                </p>
                <p className='text-gray-400'>
                  <span className='font-bold'>Email : </span>
                  <Link href={`mailto:${contactData.email}`} className='text-gray-300 hover:text-white transition-colors duration-300'>
                    {contactData.email}
                  </Link>
                </p>
              </div>
            </div>

            {/* Halaman */}
            <div className='flex flex-col'>
              <h4 className='text-lg font-semibold mb-4 text-white border-b-2 border-gray-600 pb-2 text-center sm:text-left'>Halaman</h4>
              <ul className='list-disc list-inside space-y-2 pl-4'>
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className='text-gray-400 hover:text-white transition-colors duration-300'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daftar Layanan */}
            <div className='flex flex-col'>
              <h4 className='text-lg font-semibold mb-4 text-white border-b-2 border-gray-600 pb-2 text-center sm:text-left'>Layanan</h4>
              <ul className='list-disc list-inside space-y-2 pl-4'>
                {servicesData.map((service) => (
                  <li key={service.link}>
                    <Link href={service.link} className='text-gray-400 hover:text-white transition-colors duration-300'>
                      {service.title}
                    </Link>
                    <p className='text-gray-500 text-sm pl-6'>{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sosial Media */}
      <div className='bg-gray-900 text-gray-300 py-6'>
        <div className='container mx-auto px-4 text-center'>
          <div className='flex justify-center space-x-4'>
            {socialMediaData.map((social) => (
              <a key={social.url} href={social.url} target='_blank' rel='noopener noreferrer' className='w-12 h-12 flex items-center justify-center rounded-full transition-transform transform hover:scale-110 border-2 border-gray-600 shadow-md' style={socialMediaStyles[social.name]} aria-label={social.name} role='button'>
                <FontAwesomeIcon icon={socialIcons[social.name]} size='lg' className='text-white' />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <footer className='bg-gray-900 text-gray-400 border-t border-gray-600 border-opacity-50 py-4'>
        <div className='container mx-auto px-4 text-center'>
          <div className='text-sm'>
            <p className='mb-2'>
              Copyright &copy; 2024 <span className='text-white font-semibold'>Humas Rutan Wonosobo</span>
            </p>
            <p>
              Template by{' '}
              <a href='https://instagram.com/eliyantosarage_' className='text-white hover:text-blue-400 transition-colors duration-300 font-medium' target='_blank' rel='noopener noreferrer'>
                Eliyanto Sarage
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
