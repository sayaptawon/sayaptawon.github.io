'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
  lazy,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faExclamationCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { collection, onSnapshot } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

const NotificationModal = lazy(() => import('@/components/NotificationModal'));

const Notification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNoNotificationModal, setShowNoNotificationModal] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const modalRef = useRef(null);
  const shakeIntervalRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'notifications'),
      (snapshot) => {
        const notificationsList = snapshot.docs.map((doc) => doc.data());
        setNotifications(notificationsList);
      },
      (error) => {
        console.error('Error fetching notifications: ', error);
      },
    );

    return () => unsubscribe();
  }, []);

  const startShaking = useCallback(() => {
    shakeIntervalRef.current = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 1000);
    }, 5000);
  }, []);

  const stopShaking = useCallback(() => {
    clearInterval(shakeIntervalRef.current);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      startShaking();
    } else {
      stopShaking();
    }
    return () => stopShaking();
  }, [isModalOpen, startShaking, stopShaking]);

  const handleNotificationClick = useCallback(() => {
    stopShaking();
    if (
      notifications.length === 0 ||
      notifications.every((notification) => !notification.content)
    ) {
      setShowNoNotificationModal(true);
    } else {
      setIsModalOpen(true);
    }
  }, [notifications, stopShaking]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setShowNoNotificationModal(false);
    startShaking();
  }, [startShaking]);

  const handleClickOutside = useCallback(
    (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    if (isModalOpen || showNoNotificationModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen, showNoNotificationModal, handleClickOutside]);

  const shouldShowBadge = notifications.some(
    (notification) => notification.content,
  );

  return (
    <section data-theme='light'>
      {notifications.length > 0 && (
        <div className='fixed bottom-20 left-2 z-40'>
          <button
            className='btn btn-circle btn-primary relative shadow-lg transition-transform duration-300 ease-in-out hover:shadow-2xl hover:bg-primary-focus'
            onClick={handleNotificationClick}
          >
            <FontAwesomeIcon
              icon={faBell}
              className={`text-xl text-white ${
                isShaking && shouldShowBadge ? 'animate-bell-shake' : ''
              }`}
            />
            {shouldShowBadge && (
              <span className='absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-5 h-5 bg-white text-red-500 text-xs font-bold rounded-full flex items-center justify-center shadow-md'>
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className='text-sm'
                />
              </span>
            )}
          </button>
        </div>
      )}
      {isModalOpen && (
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationModal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            notifications={notifications}
          />
        </Suspense>
      )}
      {showNoNotificationModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50'>
          <div
            ref={modalRef}
            className='bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md relative transition-transform duration-300 ease-in-out transform scale-100 modal-fade-in'
          >
            <button
              className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400 transition-colors duration-300'
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faTimes} className='text-xl' />
            </button>
            <h2 className='text-2xl font-semibold mb-4 text-center text-gray-800'>
              Informasi
            </h2>
            <hr className='my-4 border-gray-300' />
            <p className='text-center text-gray-600'>Tidak ada pengumuman.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Notification;
