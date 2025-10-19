import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBn61hnMVKORNnJwemwJnlJPNoxbqL6sQY",
    authDomain: "pitch-craft-6f1f3.firebaseapp.com",
    projectId: "pitch-craft-6f1f3",
    storageBucket: "pitch-craft-6f1f3.firebasestorage.app",
    messagingSenderId: "850548123209",
    appId: "1:850548123209:web:533ab7d094c5ce41cdc198"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };