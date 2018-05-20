import firebase from 'firebase/app';
import React from 'react';
import ReactDom from 'react-dom';
import ENV from '../env.json';
import App from './components/App';

// firebase設定
const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

require('firebase/storage');
require('firebase/firestore');

ReactDom.render(
  <App />,
  document.getElementById('root'),
);
