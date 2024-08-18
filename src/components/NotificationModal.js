import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NotificationModal = ({ isModalOpen, closeModal, notifications }) => {
  const sortedNotifications = notifications.sort((a, b) => {
    if (a.type === 'image') return -1;
    if (b.type === 'image') return 1;
    if (a.type === 'text') return -1;
    if (b.type === 'text') return 1;
    return 0;
  });

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
    >
      <div className='bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md relative transition-transform duration-300 ease-in-out transform scale-100 modal-fade-in'>
        <button
          className='absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400 transition-colors duration-300'
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faTimes} className='text-xl' />
        </button>
        <h2 className='text-2xl font-semibold mb-4 text-center text-gray-800'>
          Notifikasi
        </h2>
        <hr className='my-4 border-gray-300' />
        {sortedNotifications.length > 0 ? (
          sortedNotifications.map((notification, index) => {
            switch (notification.type) {
              case 'image':
                return (
                  <div key={index} className='mb-4'>
                    <img
                      src={notification.content}
                      alt='Notification'
                      className='w-full'
                    />
                  </div>
                );
              case 'text':
                return (
                  <div key={index} className='mb-4'>
                    <p>{notification.content}</p>
                  </div>
                );
              case 'html':
                return (
                  <div
                    key={index}
                    className='mb-4'
                    dangerouslySetInnerHTML={{ __html: notification.content }}
                  />
                );
              default:
                return null;
            }
          })
        ) : (
          <p className='text-center text-gray-600'>Tidak ada pengumuman.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationModal;
