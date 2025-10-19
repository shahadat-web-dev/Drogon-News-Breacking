// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ9kF_LYhOIwqz_niUHA9t7B6wAPRDPe4",
  authDomain: "drogon-news-breaking.firebaseapp.com",
  projectId: "drogon-news-breaking",
  storageBucket: "drogon-news-breaking.firebasestorage.app",
  messagingSenderId: "879467241275",
  appId: "1:879467241275:web:2abbaa53dbd5e45f31211e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;