'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faYoutube,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import navbarData from '@/data/navbarData.json';
import contactData from '@/data/contactData.json';
import socialMediaData from '@/data/socialMediaData.json';

const socialIcons = {
  Facebook: faFacebook,
  Twitter: faTwitter,
  Instagram: faInstagram,
  GitHub: faGithub,
  YouTube: faYoutube,
};

const Navbar = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const [iconsLoaded, setIconsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop, setIsOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen, pathname]);

  useEffect(() => {
    setIconsLoaded(true);
  }, []);

  const activeLink = (href) =>
    pathname === href ? 'bg-primary text-neutral' : '';

  return (
    <nav
      data-theme='night'
      className='shadow-sm md:shadow-md lg:shadow-lg sticky top-0 z-50'
    >
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>
        <Link href='/'>
          <div className='flex items-center text-xl font-bold btn btn-neutral'>
            {iconsLoaded && (
              <FontAwesomeIcon
                icon={faReact}
                size='lg'
                className='text-primary'
              />
            )}
            <span className='hidden md:inline lg:inline'>
              {navbarData.brand}
            </span>
          </div>
        </Link>
        {/* Mobile Navbar */}
        <div className='lg:hidden relative'>
          {iconsLoaded && (
            <button
              className='btn btn-square btn-neutral'
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} size='lg' />
            </button>
          )}
          <div
            ref={menuRef}
            className={`fixed top-0 left-0 w-full h-screen bg-base-300 bg-opacity-100 transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
          >
            <div className='bg-base-100 p-4'>
              <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold text-white'>Menu</h2>
                {iconsLoaded && (
                  <button
                    className='btn btn-circle btn-neutral'
                    onClick={() => setIsOpen(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} size='lg' />
                  </button>
                )}
              </div>
            </div>
            <div className='flex flex-col items-center pt-6'>
              <ul className='space-y-4 w-full px-4'>
                {navbarData.links.map((link, index) => (
                  <li key={index} className='w-full'>
                    <Link href={link.href}>
                      <div
                        className={`block w-full font-bold py-3 rounded-lg text-center transition-colors duration-300 bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-neutral hover:text-white ${activeLink(
                          link.href,
                        )}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className='mt-6 w-full text-center space-y-4'>
                <p className='text-white mb-4'>
                  <strong>Alamat</strong>
                  <br />
                  {contactData.address}
                </p>
                <p className='text-white mb-4'>
                  <strong>Telepon</strong>
                  <br />
                  {contactData.phone}
                </p>
                <p className='text-white mb-4'>
                  <strong>WhatsApp</strong>
                  <br />
                  {contactData.whatsapp}
                </p>
                <p className='text-white mb-4'>
                  <strong>Email</strong>
                  <br />
                  <a
                    href={`mailto:${contactData.email}`}
                    className='text-blue-400 hover:underline'
                  >
                    {contactData.email}
                  </a>
                </p>
                <div className='flex justify-center space-x-4 mb-6'>
                  {socialMediaData.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-circle btn-neutral text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary'
                      aria-label={social.name}
                    >
                      <FontAwesomeIcon
                        icon={socialIcons[social.name]}
                        size='lg'
                      />
                    </a>
                  ))}
                </div>
              </div>
              <footer className='w-full mt-6 border-t border-gray-600 border-opacity-50 py-4 text-center text-gray-400'>
                Copyright © 2024 Humas Rutan Wonosobo
              </footer>
            </div>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className='hidden lg:flex lg:space-x-4'>
          {navbarData.links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div
                className={`btn btn-neutral btn-sm rounded-full px-4 transition-all duration-300 hover:bg-secondary hover:text-white ${activeLink(
                  link.href,
                )}`}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
