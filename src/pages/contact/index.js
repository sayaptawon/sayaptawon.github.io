import React, { useState } from 'react';
import Layout from '@/pages/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const formattedMessage = `Halo, saya *${name}* (${email}).%0A%0ASaya ingin mengirim pesan berikut:%0A%0A"${message}"%0A%0ASemoga dapat ditindaklanjuti. Terima kasih!`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6289510725657&text=${formattedMessage}`;

    window.open(whatsappUrl, '_blank');

    setSubmitted(true);

    e.target.reset();
  };

  return (
    <Layout title='Hubungi Kami' description='Hubungi kami untuk pertanyaan, masukan, atau informasi lebih lanjut melalui berbagai saluran komunikasi yang tersedia.'>
      <section data-theme='corporate' className='w-full p-4 sm:p-6 lg:p-8'>
        {/* Breadcrumb */}
        <nav className='mb-6'>
          <ul className='flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 text-sm breadcrumbs'>
            <li>
              <Link href='/' className='btn btn-circle inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-neutral shadow'>
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li>
              <span className='text-gray-500'>/</span>
            </li>
            <li>
              <span className='inline-flex items-center px-4 py-2 bg-base-200 rounded-full text-base-content font-semibold shadow'>Contact</span>
            </li>
          </ul>
          <div className='mt-4 border-t border-gray-300'></div>
        </nav>

        {/* Judul Halaman */}
        <header className='mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center'>Hubungi Kami</h1>
        </header>

        <p className='text-lg mb-8 text-center text-gray-600'>Kami senang mendengar dari Anda. Silakan isi formulir di bawah ini atau hubungi kami melalui WhatsApp.</p>

        <div data-theme='corporate' className='flex flex-col md:flex-row md:space-x-8'>
          {/* Contact Form */}
          <div className='md:w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 p-6 rounded-lg shadow-lg'>
            <h2 className='text-center text-3xl font-semibold mb-5 text-white'>Formulir Kontak</h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='form-control'>
                <label htmlFor='name' className='label'>
                  <span className='label-text text-white'>Nama:</span>
                </label>
                <input type='text' id='name' name='name' className='input input-bordered w-full' required />
              </div>

              <div className='form-control'>
                <label htmlFor='email' className='label'>
                  <span className='label-text text-white'>Email:</span>
                </label>
                <input type='email' id='email' name='email' className='input input-bordered w-full' required />
              </div>

              <div className='form-control'>
                <label htmlFor='message' className='label'>
                  <span className='label-text text-white'>Pesan:</span>
                </label>
                <textarea id='message' name='message' rows='4' className='textarea textarea-bordered w-full' required />
              </div>

              <button type='submit' className='btn btn-primary w-full'>
                Kirim Pesan
              </button>
            </form>
            {submitted && <p className='mt-4 text-center text-success'>Pesan Anda telah berhasil dikirim. Terima kasih!</p>}
          </div>

          {/* Contact Info */}
          <div className='md:w-1/2 mt-8 md:mt-0 bg-gradient-to-r from-indigo-400 to-purple-600 p-6 rounded-lg shadow-xl'>
            <h2 className='text-center text-3xl font-semibold mb-5 text-white'>Informasi Kontak</h2>
            <p className='text-center text-lg mb-5 text-white'>Anda dapat menghubungi kami melalui:</p>
            <ul className='space-y-5'>
              <li className='flex items-center bg-white p-4 rounded-lg shadow-md'>
                <div className='w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full mr-4'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className='text-primary' />
                </div>
                <div className='flex-1'>
                  <span className='block text-lg font-medium text-primary'>Alamat:</span>
                  <span className='text-gray-600'>Jl. Pramuka No.1, Sumberan Barat, Wonosobo Bar., Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah 56311</span>
                </div>
              </li>
              <li className='flex items-center bg-white p-4 rounded-lg shadow-md'>
                <div className='w-12 h-12 flex items-center justify-center bg-accent/20 rounded-full mr-4'>
                  <FontAwesomeIcon icon={faPhoneAlt} className='text-accent' />
                </div>
                <div className='flex-1'>
                  <span className='block text-lg font-medium text-accent'>Telepon:</span>
                  <span className='text-gray-600'>(0286) 321030</span>
                </div>
              </li>
              <li className='flex items-center bg-white p-4 rounded-lg shadow-md'>
                <div className='w-12 h-12 flex items-center justify-center bg-secondary/20 rounded-full mr-4'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-secondary' />
                </div>
                <div className='flex-1'>
                  <span className='block text-lg font-medium text-secondary'>Email:</span>
                  <span className='text-gray-600'>rutanwsb@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
