// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDxWOogsCom0548pTmUWD_Vc1iAZvVnDE",
  authDomain: "just-watch-56d9a.firebaseapp.com",
  projectId: "just-watch-56d9a",
  storageBucket: "just-watch-56d9a.appspot.com",
  messagingSenderId: "117098453468",
  appId: "1:117098453468:web:d2b501fdc0548187161719",
  measurementId: "G-YJFE9WZWW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);