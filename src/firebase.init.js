// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb-yi3nQBy2RdnQ5bK16SZ2AKbTR_7dvs",
  authDomain: "elegent-car.firebaseapp.com",
  projectId: "elegent-car",
  storageBucket: "elegent-car.appspot.com",
  messagingSenderId: "989363806481",
  appId: "1:989363806481:web:dc4c447f64463b5ca16cb0",
  measurementId: "G-2FE6XPPNBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;