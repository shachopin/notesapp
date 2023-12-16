import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: "AIzaSyCcx4eS9nU-xJDZqc1olRX4d282O2GsMuw",
  authDomain: "evernotes-clone.firebaseapp.com",
  projectId: "evernotes-clone",
  storageBucket: "evernotes-clone.appspot.com",
  messagingSenderId: "1086148079672",
  appId: "1:1086148079672:web:50292b7ad169d2baabb6cd"
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
