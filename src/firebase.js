import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC-vUzPTXO2wYrHBWFseFnW2_QvKzdPOOw",
    authDomain: "disable-app-35755.firebaseapp.com",
    projectId: "disable-app-35755",
    storageBucket: "disable-app-35755.appspot.com",
    messagingSenderId: "449073384156",
    appId: "1:449073384156:web:3212bf1e1d49d2e17e0219"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};