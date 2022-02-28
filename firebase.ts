// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrXRzKMFhK2NnTc7sV5f2-fH9gMqjHUmI",
    authDomain: "twitterclone-d1cc0.firebaseapp.com",
    projectId: "twitterclone-d1cc0",
    storageBucket: "twitterclone-d1cc0.appspot.com",
    messagingSenderId: "528883667363",
    appId: "1:528883667363:web:23114adb9598cd25e54a16"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };