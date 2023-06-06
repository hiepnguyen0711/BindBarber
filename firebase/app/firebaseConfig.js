

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR68LGZ2rQAV_UyLwjR-xZ8YbsBfDMJLs",
  authDomain: "bindbarber.firebaseapp.com",
  projectId: "bindbarber",
  storageBucket: "bindbarber.appspot.com",
  messagingSenderId: "20708911222",
  appId: "1:20708911222:web:441a2c20ecb5396910d757"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// export default app;