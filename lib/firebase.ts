
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTDVxSWbXPIksveaaX4QydrXQHrpmBMns",
  authDomain: "tidjani-zitouni.firebaseapp.com",
  projectId: "tidjani-zitouni",
  storageBucket: "tidjani-zitouni.firebasestorage.app",
  messagingSenderId: "600530250891",
  appId: "1:600530250891:web:7f6038d83c012f0ffd788e",
  measurementId: "G-X1RJVJHQGZ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
