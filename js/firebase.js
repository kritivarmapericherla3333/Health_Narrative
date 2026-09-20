// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRFfsMtyzwG0xbLI9k90perHJeSdJPAhU",
  authDomain: "healthnarrative-c4af3.firebaseapp.com",
  databaseURL: "https://healthnarrative-c4af3-default-rtdb.firebaseio.com",
  projectId: "healthnarrative-c4af3",
  storageBucket: "healthnarrative-c4af3.firebasestorage.app",
  messagingSenderId: "637852726804",
  appId: "1:637852726804:web:ea41a628ff1cef57341901",
  measurementId: "G-WJSTPR6L08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
