// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9gARPta_qqUZYDZaWqWpafLffeDZ8Uoo",
  authDomain: "ema-zon-firebase-auth.firebaseapp.com",
  projectId: "ema-zon-firebase-auth",
  storageBucket: "ema-zon-firebase-auth.appspot.com",
  messagingSenderId: "287506108667",
  appId: "1:287506108667:web:cc6040bc2f884bae4de05e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
