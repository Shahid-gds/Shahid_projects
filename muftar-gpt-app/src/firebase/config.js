import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBop6jutPjxN8g51BFlsohViX1YrX5ZSX0",
  authDomain: "muftar-gpt.firebaseapp.com",
  projectId: "muftar-gpt",
  storageBucket: "muftar-gpt.appspot.com",
  messagingSenderId: "643593770557",
  appId: "1:643593770557:web:9ebc7ed6cea138895ffc54"
};

const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const db = getFirestore(app);

export { projectAuth, db };
export default app;