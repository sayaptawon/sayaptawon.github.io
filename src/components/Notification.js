'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import notificationData from '@/data/notificationData.json';

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNoNotificationModal, setShowNoNotificationModal] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const loadNotifications = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setNotifications(notificationData);
    };

    loadNotifications();
  }, []);

  useEffect(() => {
    const startShaking = () => {
      setTimeout(() => {
        const shakeInterval = setInterval(() => {
          setIsShaking(true);
          setTimeout(() => setIsShaking(false), 1000); // Duration of shake animation
        }, 5000); // Delay between shakes

        return () => clearInterval(shakeInterval);
      }, 5000); // Initial delay of 5 seconds
    };

    if (!isModalOpen) {
      startShaking();
    }
  }, [isModalOpen]);

  const handleNotificationClick = () => {
    setIsShaking(false);
    if (notifications.length === 0 || notifications.every((notification) => !notification.content)) {
      setShowNoNotificationModal(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowNoNotificationModal(false);
    setIsShaking(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen || showNoNotificationModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, showNoNotificationModal]);

  const shouldShowBadge = notifications.some((notification) => notification.content);

  return (
    <section data-theme='light'>
      {/* Notification Button */}
      {notifications.length > 0 && (
        <div className='fixed bottom-20 left-4 z-40'>
          <button className='btn btn-circle btn-primary relative shadow-lg transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-primary-focus' onClick={handleNotificationClick}>
            <FontAwesomeIcon icon={faBell} className={`text-xl text-white ${isShaking && shouldShowBadge ? 'animate-bell-shake' : ''}`} />
            {shouldShowBadge && (
              <span className='absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-5 h-5 bg-white text-red-500 text-xs font-bold rounded-full flex items-center justify-center shadow-md'>
                <FontAwesomeIcon icon={faExclamationCircle} className='text-sm' />
              </span>
            )}
          </button>
        </div>
      )}

      {/* Modal for Notifications */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
          <div ref={modalRef} className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative transition-transform duration-300 ease-in-out transform scale-100 modal-fade-in'>
            <button className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400 transition-colors duration-300' onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className='text-xl' />
            </button>
            <h2 className='text-2xl font-semibold mb-4 text-center text-gray-800'>Informasi</h2>
            <hr className='my-4 border-gray-300' />
            <div>
              {notifications.length === 0 || notifications.every((notification) => !notification.content) ? (
                <p className='text-center text-gray-600'>Tidak ada pengumuman.</p>
              ) : (
                notifications.map((notification, index) => (
                  <div key={index} className='mb-4'>
                    {notification.type === 'text' && <p className='text-gray-800'>{notification.content}</p>}
                    {notification.type === 'image' && <img src={notification.content} alt='Notification' className='w-full mb-2 rounded-lg shadow-md' />}
                    {notification.type === 'html' && <div dangerouslySetInnerHTML={{ __html: notification.content }} />}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal for No Notifications */}
      {showNoNotificationModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
          <div ref={modalRef} className='bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md relative transition-transform duration-300 ease-in-out transform scale-100 modal-fade-in'>
            <button className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400 transition-colors duration-300' onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} className='text-xl' />
            </button>
            <h2 className='text-2xl font-semibold mb-4 text-center text-gray-800'>Informasi</h2>
            <hr className='my-4 border-gray-300' />
            <p className='text-center text-gray-600'>Tidak ada pengumuman.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Notification;
