'use client';

import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import navbarData from '@/data/navbarData.json';

const Navbar = ({ isOpen, setIsOpen }) => {
  const [iconsLoaded, setIconsLoaded] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

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
    const handleLoad = () => setIconsLoaded(true);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const activeLink = (href) => (pathname === href ? 'bg-primary text-neutral' : '');

  return (
    <nav data-theme='night' className='shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <a href='/' className='text-xl font-bold btn btn-neutral'>
          {navbarData.brand}
        </a>
        {/* Mobile Navbar */}
        <div className='lg:hidden relative'>
          <button className='btn btn-square btn-neutral' onClick={() => setIsOpen(!isOpen)}>
            {!iconsLoaded ? <div className='loading loading-spinner'></div> : <FontAwesomeIcon icon={faBars} size='lg' />}
          </button>
          <div ref={menuRef} className={`fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
            <div className='flex justify-end p-4'>
              <button className='btn btn-circle btn-neutral' onClick={() => setIsOpen(false)}>
                {!iconsLoaded ? <div className='loading loading-spinner'></div> : <FontAwesomeIcon icon={faTimes} size='lg' />}
              </button>
            </div>
            <div className='flex flex-col items-center h-full'>
              <ul className='w-full text-center'>
                {navbarData.links.map((link, index) => (
                  <li key={index} className='w-full'>
                    <a
                      href={link.href}
                      className={`block text-xl py-2 transition-colors duration-300 hover:bg-primary hover:text-white ${activeLink(link.href)}`}
                      onClick={() => {
                        setIsOpen(false);
                        window.location.href = link.href;
                      }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Desktop Navbar */}
        <div className='hidden lg:flex lg:space-x-4'>
          {navbarData.links.map((link, index) => (
            <a key={index} href={link.href} className={`btn btn-neutral btn-sm rounded-full px-4 transition-all duration-300 hover:bg-secondary hover:text-white ${activeLink(link.href)}`}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
