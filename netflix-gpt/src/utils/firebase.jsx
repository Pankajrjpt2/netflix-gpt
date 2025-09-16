// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2-IOLUVMsRjMXYAUueC3cHaFI3_SVoPM",
  authDomain: "netflixgpt-2b4d2.firebaseapp.com",
  projectId: "netflixgpt-2b4d2",
  storageBucket: "netflixgpt-2b4d2.firebasestorage.app",
  messagingSenderId: "431889991517",
  appId: "1:431889991517:web:03ab17b00e08ba83a68ab4",
  measurementId: "G-ZS3TR7FJ27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
