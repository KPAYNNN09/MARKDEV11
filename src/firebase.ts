// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLdG_4k9lJDyr_AfkhIHP-jaHDxIyLYXY",
  authDomain: "markdev11.firebaseapp.com",
  projectId: "markdev11",
  storageBucket: "markdev11.firebasestorage.app",
  messagingSenderId: "946786971354",
  appId: "1:946786971354:web:d44f95f921873cc1dfffe3",
  measurementId: "G-68DRXZEJDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
