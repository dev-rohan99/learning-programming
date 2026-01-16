// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBabu7WCUOb8--PSA2hdv5DSrybQ4Z9sOc",
  authDomain: "test-eec5d.firebaseapp.com",
  projectId: "test-eec5d",
  storageBucket: "test-eec5d.appspot.com",
  messagingSenderId: "402196632404",
  appId: "1:402196632404:web:cba5e1707ab202f9b1aec1",
  measurementId: "G-7W4X7BETQ3"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);


