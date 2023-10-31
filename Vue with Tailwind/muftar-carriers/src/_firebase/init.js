import firebase from 'firebase/app';
require('firebase/auth')
import 'firebase/firestore';
import 'firebase/storage'
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyD9OeUj3WvrOrqjlIkPlpgU_Y0KWM0GULs",
  authDomain: "muftar-digital-trucking.firebaseapp.com",
  projectId: "muftar-digital-trucking",
  storageBucket: "muftar-digital-trucking.appspot.com",
  messagingSenderId: "324593092166",
  appId: "1:324593092166:web:73e89afe3f05ef114c2c47",
  measurementId: "G-HZBNB6EX3X"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const fs = firebase.firestore

export { fb, db, fs }
