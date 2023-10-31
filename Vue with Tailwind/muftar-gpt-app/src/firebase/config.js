import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const db = getFirestore(app);

export { projectAuth, db };
export default app;