// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzZcEht6nSbBHZq2Vy-bOEtY37p_Lj5ng",
  authDomain: "evanahouse-940da.firebaseapp.com",
  projectId: "evanahouse-940da",
  storageBucket: "evanahouse-940da.appspot.com",
  messagingSenderId: "1017984348532",
  appId: "1:1017984348532:web:100ce32397b7a009e9fc21",
  measurementId: "G-C1SJN6F8SV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
