import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyA3NoaSipVWcMZl9EELOZWLUg1ZiELtDjc',
  authDomain: 'tikt--jornada.firebaseapp.com',
  projectId: 'tikt--jornada',
  storageBucket: 'tikt--jornada.appspot.com',
  messagingSenderId: '505517392996',
  appId: '1:505517392996:web:e5f26cb9bd01abbd2ccb71',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
