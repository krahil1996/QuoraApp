// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
  appId: "1:959387479397:web:97da640fa8ecc502b2058c",
  measurementId: "G-RYDT7W3F9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithGoogle(auth, provider)
    .then((result) => {
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const profilePic = result.user.photoURL;
      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);
      // localStorage.setItem("profilePic", profilePic);
      console.log(result);

    })
    .catch((error) => {
      alert(error);
    });
};
