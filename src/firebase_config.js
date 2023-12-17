import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcx4eS9nU-xJDZqc1olRX4d282O2GsMuw",
  authDomain: "evernotes-clone.firebaseapp.com",
  projectId: "evernotes-clone",
  storageBucket: "evernotes-clone.appspot.com",
  messagingSenderId: "1086148079672",
  appId: "1:1086148079672:web:50292b7ad169d2baabb6cd"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };