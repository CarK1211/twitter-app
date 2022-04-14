// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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

