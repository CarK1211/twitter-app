export const environment = {
  production: true
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7l_fqGgNyVdAAdXc6Ad-AFeiVWGjZbp8",
  authDomain: "twitter-app-1f60b.firebaseapp.com",
  databaseURL: "https://twitter-app-1f60b-default-rtdb.firebaseio.com",
  projectId: "twitter-app-1f60b",
  storageBucket: "twitter-app-1f60b.appspot.com",
  messagingSenderId: "166199957559",
  appId: "1:166199957559:web:e9359a0039eb754303c7b2",
  measurementId: "G-2QTCFDXVKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);