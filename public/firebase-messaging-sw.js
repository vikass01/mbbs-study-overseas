importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey:"AIzaSyDZpNP39PBOECaaUlQaHpq_ar9vdE2sWKs",
  authDomain:"mbbs-study-overseas.firebaseapp.com",
  projectId:"mbbs-study-overseas",
  storageBucket:"mbbs-study-overseas.appspot.com",
  messagingSenderId:"533857373470",
  appId:"1:533857373470:web:9160dfb9886d8726364d0f",
  measurementId:"G-26QFEK1P60"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});