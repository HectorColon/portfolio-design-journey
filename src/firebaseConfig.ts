// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBG4lXweySY4El4RzwzrHR6TsQBk4dXzJY",
    authDomain: "hcmorales-portfolio.firebaseapp.com",
    projectId: "hcmorales-portfolio",
    storageBucket: "hcmorales-portfolio.firebasestorage.app",
    messagingSenderId: "787843707864",
    appId: "1:787843707864:web:0b17c53973f825443af8ad",
    measurementId: "G-X1DQ7LJZBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
