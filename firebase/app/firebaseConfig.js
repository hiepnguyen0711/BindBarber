import { getApps, getApp, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8NqJwFSO-ce2kvKYhO_Wo3b7MZVGcFn4",
  authDomain: "bindbarber-a98b3.firebaseapp.com",
  projectId: "bindbarber-a98b3",
  storageBucket: "bindbarber-a98b3.appspot.com",
  messagingSenderId: "1063557911615",
  appId: "1:1063557911615:web:1e45568c87eec5c001d48a"

};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

const FIRESTORE_DB = getFirestore(app);
const FIREBASE_AUTH = getAuth(app);

export { app, storage, FIRESTORE_DB, FIREBASE_AUTH }