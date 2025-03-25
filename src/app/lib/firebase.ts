import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: 'AIzaSyA2F7WEGf9w-hsXA62L2jq0JB7ScBcHZ38',
  authDomain: 'todolist-37f8e.firebaseapp.com',
  projectId: 'todolist-37f8e',
  storageBucket: 'todolist-37f8e.firebasestorage.app',
  messagingSenderId: '453182681415',
  appId: '1:453182681415:web:23eb60de7aa3bfff741c62',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
