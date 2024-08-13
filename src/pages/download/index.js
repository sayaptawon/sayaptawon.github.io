import Layout from '@/pages/layout';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faInfoCircle, faStar, faVirus } from '@fortawesome/free-solid-svg-icons';

const DownloadPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadCountdown, setDownloadCountdown] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [checkCountdown, setCheckCountdown] = useState(0);
  const [icons, setIcons] = useState(null);

  const fileUrl = 'https://github.com/rutanwonosobo/rutanwonosobo.github.io/releases/download/v1.0.0/sayaptawon.apk';
  const virusTotalSearchUrl = 'https://www.virustotal.com/gui/url/a8847ae702cb7d8ac9b7c53e3cff5edf8725023c75b227d4909c2fbda072a7c3?nocache=1';

  useEffect(() => {
    setIcons({
      faDownload,
      faInfoCircle,
      faStar,
      faVirus,
    });
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    let timeLeft = 5;
    setDownloadCountdown(timeLeft);

    const interval = setInterval(() => {
      timeLeft -= 1;
      setDownloadCountdown(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(interval);
        window.open(fileUrl, '_blank');
        setIsDownloading(false);
      }
    }, 1000);
  };

  const handleCheckVirus = () => {
    setIsChecking(true);
    let timeLeft = 5;
    setCheckCountdown(timeLeft);

    const interval = setInterval(() => {
      timeLeft -= 1;
      setCheckCountdown(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(interval);
        setIsChecking(false);
        window.open(virusTotalSearchUrl, '_blank');
      }
    }, 1000);
  };

  return (
    <Layout title='Download Aplikasi' description='Download the Sayap Tawon app. Sistem Layanan Terpadu Rutan Wonosobo'>
      <div data-theme='light' className='min-h-screen flex items-center justify-center p-4 bg-base-200'>
        <div className='w-full max-w-screen-lg lg:max-w-screen-xl shadow-xl rounded-lg overflow-hidden flex flex-col lg:flex-row bg-base-100'>
          <div className='flex-shrink-0 flex items-center justify-center p-6 bg-neutral'>
            <div className='relative w-full max-w-xs'>
              <div className='mask mask-hexagon bg-primary shadow-lg p-3 flex items-center justify-center overflow-hidden'>
                <img src='/logo.webp' alt='Logo Sayap Tawon' className='w-full h-auto object-cover filter brightness-0 invert' />
              </div>
            </div>
          </div>
          <div className='flex-grow p-6 lg:pl-12 flex flex-col items-center'>
            <h1 className='text-3xl font-extrabold text-primary mb-4 text-center uppercase'>Sayap Tawon</h1>
            <p className='text-xl font-semibold text-secondary mb-2 text-center'>Sistem Layanan Terpadu Rutan Wonosobo</p>
            <p className='text-gray-600 mb-4 text-center'>APK (Android Package Kit)</p>
            <div className='flex items-center justify-center mb-4'>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={icons?.faStar} className={`mr-1 ${index < 5 ? 'text-warning' : 'text-gray-400'}`} />
              ))}
              <span className='ml-2 text-gray-600'>(5)</span>
            </div>
            <p className='text-gray-700 mb-2 text-center'>
              <FontAwesomeIcon icon={icons?.faInfoCircle} className='inline mr-2 text-info' />
              Versi: 1.0.0
            </p>
            <p className='text-gray-700 mb-2 text-center'>Ukuran: 15 MB</p>
            <p className='text-gray-700 mb-4 text-center'>Pembaruan Terakhir: Agustus 2024</p>

            <button onClick={handleDownload} className={`w-full py-3 px-4 bg-primary text-white font-bold rounded-lg shadow-md transition-opacity ${isDownloading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-focus'}`} disabled={isDownloading}>
              {isDownloading ? `Mengunduh dalam ${downloadCountdown} detik...` : 'Unduh Sekarang'}
              <FontAwesomeIcon icon={icons?.faDownload} className='inline ml-2' />
            </button>

            <button onClick={handleCheckVirus} className={`mt-4 w-full py-3 px-4 bg-secondary text-white font-bold rounded-lg shadow-md transition-opacity ${isChecking ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-focus'}`} disabled={isChecking}>
              {isChecking ? `Memeriksa dalam ${checkCountdown} detik...` : 'Periksa dengan VirusTotal'}
              <FontAwesomeIcon icon={icons?.faVirus} className='inline ml-2' />
            </button>

            <div className='mt-4 text-center text-gray-600'>
              <a href={fileUrl} target='_blank' rel='noopener noreferrer' className='underline'>
                Atau unduh dari sini
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;
