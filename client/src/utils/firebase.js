
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-prep-54822.firebaseapp.com",
  projectId: "ai-prep-54822",
  storageBucket: "ai-prep-54822.firebasestorage.app",
  messagingSenderId: "917532919323",
  appId: "1:917532919323:web:315d102a48beead31d5abe",
  measurementId: "G-X7XMC2M788"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}