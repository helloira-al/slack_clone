import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUaVJf5TLDT14WX8P2h1T55XzrHuZiMVc",
    authDomain: "slack-clone-challenge-bfd97.firebaseapp.com",
    projectId: "slack-clone-challenge-bfd97",
    storageBucket: "slack-clone-challenge-bfd97.appspot.com",
    messagingSenderId: "360906198778",
    appId: "1:360906198778:web:7cd0c20419ae9904c48343"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;