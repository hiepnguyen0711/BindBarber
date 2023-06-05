

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR68LGZ2rQAV_UyLwjR-xZ8YbsBfDMJLs",
  authDomain: "bindbarber.firebaseapp.com",
  projectId: "bindbarber",
  storageBucket: "bindbarber.appspot.com",
  messagingSenderId: "20708911222",
  appId: "1:20708911222:web:441a2c20ecb5396910d757"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// firebase.initializeApp(config);

// // Setup Firestore
// const analytics = firebase.analytics();
// export const database = firebase.firestore();
// const storage = firebase.storage();

// // Setup push messaging
// let messaging = null;
// if (firebase.messaging.isSupported()) {
//   messaging = firebase.messaging();
//   messaging.usePublicVapidKey(MESSAGING_VAPID_KEY);
// }

// // export {
// //   firebase, storage, messaging, analytics, config, database as default,
// // };
// firebase.initializeApp(FIREBASE_CONFIG);
// export const storage = firebase.storage();
// export default firebase;