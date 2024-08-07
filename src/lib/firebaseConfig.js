// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQqCb4obTgFMozVOg3JqJJ-ZCmdPhITLs',
  authDomain: 'rutan-wonosobo-0.firebaseapp.com',
  databaseURL: 'https://rutan-wonosobo-0-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'rutan-wonosobo-0',
  storageBucket: 'rutan-wonosobo-0.appspot.com',
  messagingSenderId: '587999781707',
  appId: '1:587999781707:web:7fb68389a77364bb9a7ece',
  measurementId: 'G-2ZW152V3VP',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue, update };
