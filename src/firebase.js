// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAslphz9Lo4sgqSbA7iqIsQJ-JpqYc_34E",
  authDomain: "web-portal-save.firebaseapp.com",
  projectId: "web-portal-save",
  storageBucket: "web-portal-save.appspot.com",
  messagingSenderId: "376066617016",
  appId: "1:376066617016:web:8a69f54a667c1724cd4e4d",
  measurementId: "G-GNJD7RYVKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
