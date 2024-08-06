// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stay-hub.firebaseapp.com",
  projectId: "stay-hub",
  storageBucket: "stay-hub.appspot.com",
  messagingSenderId: "9655792548",
  appId: "1:9655792548:web:7f9c541664e33c3e934731"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);