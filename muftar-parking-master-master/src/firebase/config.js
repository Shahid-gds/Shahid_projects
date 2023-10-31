import firebase  from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDXIbmpi7_ijY5bwfwZiWMeT0C_4FFoDyE",
    authDomain: "muftar-auth.firebaseapp.com",
    projectId: "muftar-auth",
    storageBucket: "muftar-auth.appspot.com",
    messagingSenderId: "848324322914",
    appId: "1:848324322914:web:8e857a736725f12108933b"
  }

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export const projectAuth = firebase.auth();
  export const db = firebase.firestore();
  export default firebase;
