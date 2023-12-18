// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9yxEpoYGU7c955ALiT64NBcYwzLXMik4",
  authDomain: "shopes-24e50.firebaseapp.com",
  projectId: "shopes-24e50",
  storageBucket: "shopes-24e50.appspot.com",
  messagingSenderId: "954358570428",
  appId: "1:954358570428:web:c1c6591a5634200f181fb9",
  measurementId: "G-FYN92WQ282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 