import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import reportWebVitals from './reportWebVitals';

var firebaseConfig = {
  apiKey: "AIzaSyAchFtxkxZCYz_I21hL-WKj-YaJNrlvu-k",
  authDomain: "fir-practice-7247f.firebaseapp.com",
  projectId: "fir-practice-7247f",
  storageBucket: "fir-practice-7247f.appspot.com",
  messagingSenderId: "328641255783",
  appId: "1:328641255783:web:9963c333f4a2d31df2b7c2",
  measurementId: "G-GR20NQDB74"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
