import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzmNu7FapruzT7wsKMwSe6VkNEQ9j9aqg",
    authDomain: "muftar-digital-trucking.firebaseapp.com",
    databaseURL: "https://muftar-digital-trucking-default-rtdb.firebaseio.com",
    projectId: "muftar-digital-trucking",
    storageBucket: "muftar-digital-trucking.appspot.com",
    messagingSenderId: "324593092166",
    appId: "1:324593092166:web:4cd32c2e3093845a4c2c47",
    measurementId: "G-B2V4VEQFM5"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebase, storage };