// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCPyex3iZY7h7kZqaSOUqpUoR5hgg_1x0s",
  authDomain: "plataforma-ensino-258.firebaseapp.com",
  projectId: "plataforma-ensino-258",
  storageBucket: "plataforma-ensino-258.appspot.com",
  messagingSenderId: "513255190029",
  appId: "1:513255190029:web:9ea5bb9ebb768f51782f44",
  measurementId: "G-RHKZZL60ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);