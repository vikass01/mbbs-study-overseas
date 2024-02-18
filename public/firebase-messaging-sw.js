mportScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,
measurementId: process.env.REACT_APP_measurementId
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});