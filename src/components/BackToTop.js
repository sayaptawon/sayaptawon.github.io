'use client';

import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop () {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowButton(window.scrollY > 300);
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section data-theme='light'>
      <button onClick={handleClick} className={`fixed bottom-4 right-2 p-3 btn btn-circle border-none bg-primary text-white shadow-lg transition-transform duration-300 ease-in-out hover:bg-blue-700 hover:shadow-xl z-40 ${showButton ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-12'}`} aria-label='Back to top' role='button'>
        <FontAwesomeIcon icon={faArrowUp} size='lg' />
      </button>
    </section>
  );
}
