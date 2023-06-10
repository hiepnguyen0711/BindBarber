

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8NqJwFSO-ce2kvKYhO_Wo3b7MZVGcFn4",
  authDomain: "bindbarber-a98b3.firebaseapp.com",
  projectId: "bindbarber-a98b3",
  storageBucket: "bindbarber-a98b3.appspot.com",
  messagingSenderId: "1063557911615",
  appId: "1:1063557911615:web:1e45568c87eec5c001d48a"

};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// export default app;