// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMiNFFderFLmAw3xQH6IaJrITKqy0Ybb4",
  authDomain: "quoraclone-4fe62.firebaseapp.com",
  databaseURL: "https://quoraclone-4fe62-default-rtdb.firebaseio.com",
  projectId: "quoraclone-4fe62",
  storageBucket: "quoraclone-4fe62.appspot.com",
  messagingSenderId: "959387479397",
  appId: "1:959387479397:web:39b26028bad1425fb2058c",
  measurementId: "G-W7XY1D91GN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
