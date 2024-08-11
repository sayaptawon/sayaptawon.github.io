import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyANl8iBz7vGR3sDJMawtKHNfYiq4cNISuM',
  authDomain: 'sayaptawon-5d681.firebaseapp.com',
  databaseURL: 'https://sayaptawon-5d681-default-rtdb.firebaseio.com',
  projectId: 'sayaptawon-5d681',
  storageBucket: 'sayaptawon-5d681.appspot.com',
  messagingSenderId: '1015086538206',
  appId: '1:1015086538206:web:2fd93cc96beaff47b6114f',
  measurementId: 'G-5SFGGCZ55R',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
