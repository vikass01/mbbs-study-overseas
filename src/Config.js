// import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZpNP39PBOECaaUlQaHpq_ar9vdE2sWKs",
  authDomain: "mbbs-study-overseas.firebaseapp.com",
  projectId: "mbbs-study-overseas",
  storageBucket: "mbbs-study-overseas.appspot.com",
  messagingSenderId: "533857373470",
  appId: "1:533857373470:web:9160dfb9886d8726364d0f",
  measurementId: "G-26QFEK1P60"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;


