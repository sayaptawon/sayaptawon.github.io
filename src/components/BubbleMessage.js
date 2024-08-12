'use client';

import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function BubbleMessage () {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { name, email, message } = formData;
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') return;

      const phoneNumber = '6289510725657';
      const formattedMessage = `Halo, saya adalah ${name} (${email}), mengirim pesan: "${message}".`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });

      window.open(url, '_blank');
    },
    [formData],
  );

  const handleToggleForm = useCallback(() => {
    setIsFormVisible((prev) => !prev);
    if (isSent) {
      setIsSent(false);
    }
  }, [isSent]);

  if (!isPageLoaded) return null;

  return (
    <section data-theme='light'>
      <button onClick={handleToggleForm} className={`fixed bottom-4 left-2 btn btn-circle bg-teal-600 hover:bg-teal-700 border-none z-40 ${isFormVisible ? 'btn-error' : 'btn-primary'} shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform ${isFormVisible ? 'rotate-90' : ''}`} aria-label={isFormVisible ? 'Tutup form pesan' : 'Chat dengan kami di WhatsApp'}>
        <FontAwesomeIcon icon={isFormVisible ? faTimes : faWhatsapp} size='xl' className='text-white' />
      </button>

      <div className={`fixed bottom-20 left-2 p-6 bg-white shadow-2xl rounded-lg border border-gray-300 w-80 z-50 transition-all duration-300 ease-in-out transform ${isFormVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'} ${isFormVisible ? '' : 'pointer-events-none'}`} aria-hidden={!isFormVisible} aria-labelledby='form-title'>
        <h3 id='form-title' className='text-lg font-semibold mb-4 text-gray-800 text-center'>
          Kirim Pesan kepada Kami
        </h3>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 text-center'>
          <input type='text' name='name' value={formData.name} onChange={handleChange} className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition duration-300 ease-in-out' placeholder='Nama' autoComplete='off' required aria-label='Nama' />
          <input type='email' name='email' value={formData.email} onChange={handleChange} className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition duration-300 ease-in-out' placeholder='Email' autoComplete='off' required aria-label='Email' />
          <textarea name='message' value={formData.message} onChange={handleChange} rows='4' className='p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-900 placeholder-gray-500 transition duration-300 ease-in-out' placeholder='Pesan' autoComplete='off' required aria-label='Pesan' />
          <button type='submit' className='flex items-center justify-center w-full py-3 px-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 hover:shadow-xl transition duration-300 ease-in-out'>
            <FontAwesomeIcon icon={faPaperPlane} className='mr-2' />
            Kirim Pesan
          </button>
          {isSent && <p className='text-teal-500 mt-2 text-center'>Pesan terkirim! Kami akan segera menghubungi Anda.</p>}
        </form>
      </div>
    </section>
  );
}
