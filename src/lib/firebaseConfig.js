// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyANl8iBz7vGR3sDJMawtKHNfYiq4cNISuM',
  authDomain: 'sayaptawon-5d681.firebaseapp.com',
  databaseURL: 'https://sayaptawon-5d681-default-rtdb.firebaseio.com',
  projectId: 'sayaptawon-5d681',
  storageBucket: 'sayaptawon-5d681.appspot.com',
  messagingSenderId: '1015086538206',
  appId: '1:1015086538206:web:859768cad5e15e99b6114f',
  measurementId: 'G-EKL02XW5HK',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, update };
