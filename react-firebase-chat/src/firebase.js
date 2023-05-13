// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auto";
import "firebase/database";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApQslvWoYkEpE8PyifNlgRxLalJ_P1X8c",
  authDomain: "world-cloud-c055c.firebaseapp.com",
  databaseURL:
    "https://world-cloud-c055c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "world-cloud-c055c",
  storageBucket: "world-cloud-c055c.appspot.com",
  messagingSenderId: "1048265261752",
  appId: "1:1048265261752:web:e991b2a1e3af898ef52a4d",
  measurementId: "G-WLKSN8SETV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
