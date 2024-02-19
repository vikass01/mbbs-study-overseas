
// import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getMessaging,getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,
measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;


// export const generateToken = async()=>{
//     const permission = await Notification.requestPermission()
//     console.log("permission",permission);
//     if (permission === "granted"){
//         const token = await getToken(messaging, {vapidKey: "BPt3jM_tdom6Eqa1D51PzJVYMWeQxMdn0kD8vp1aatXFPhcphTs5joQDinnGUWgQ9r5pQXKMiu49QhyBq7coX-w"});
//         console.log("token",token)
//     }else if (permission === "denied"){
//         console.log("permission Denied");
//     }
    
// }