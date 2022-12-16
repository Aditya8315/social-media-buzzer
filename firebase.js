// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaykYQsmq7ALEsHDT2iBOCD1oyjh7izA",
  authDomain: "twitter-clone-22068.firebaseapp.com",
  projectId: "twitter-clone-22068",
  storageBucket: "twitter-clone-22068.appspot.com",
  messagingSenderId: "610356720394",
  appId: "1:610356720394:web:d99f613c241baec4db00f3",
  measurementId: "G-MG1R5F0R27"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };