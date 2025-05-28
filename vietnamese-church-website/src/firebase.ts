import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBmWEBinOtiNTM-bfhebWGEFQKv3l3U4x0",
  authDomain: "vietnamese-church.firebaseapp.com",
  projectId: "vietnamese-church",
  storageBucket: "vietnamese-church.appspot.com", // fix typo here too (should be `.appspot.com`)
  messagingSenderId: "446007633675",
  appId: "1:446007633675:web:a8eb6b29400f1bcd3a640e",
  measurementId: "G-F7JGSMGL8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ create auth instance

export { auth }; // ✅ export auth instance
