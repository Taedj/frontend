
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqW_c9YRyxM8GnICR9kSRvs1T-GhseZzY",
  authDomain: "dentaltid.firebaseapp.com",
  projectId: "dentaltid",
  storageBucket: "dentaltid.firebasestorage.app",
  messagingSenderId: "698475695605",
  appId: "1:698475695605:web:1e576e008f891e543964bc"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
