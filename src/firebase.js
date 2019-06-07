import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCI4ZR2VWUrgcEsOnv9oFVXTYYZWHu7XLo",
    authDomain: "messageboard-afd35.firebaseapp.com",
    databaseURL: "https://messageboard-afd35.firebaseio.com",
    projectId: "messageboard-afd35",
    storageBucket: "messageboard-afd35.appspot.com",
    messagingSenderId: "258929617170",
    appId: "1:258929617170:web:b7d1ca3e2249b952"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;