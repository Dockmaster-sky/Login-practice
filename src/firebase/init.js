import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG32De_RyaeFILlBTgKNMBmmlpNWpMOwg",
  authDomain: "fir-project-c0dd2.firebaseapp.com",
  projectId: "fir-project-c0dd2",
  storageBucket: "fir-project-c0dd2.firebasestorage.app",
  messagingSenderId: "802721545372",
  appId: "1:802721545372:web:a5a546dff01c5ce56b0159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();






// here are the old codes used when it worked in practice:

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBG32De_RyaeFILlBTgKNMBmmlpNWpMOwg",
//   authDomain: "fir-project-c0dd2.firebaseapp.com",
//   projectId: "fir-project-c0dd2",
//   storageBucket: "fir-project-c0dd2.firebasestorage.app",
//   messagingSenderId: "802721545372",
//   appId: "1:802721545372:web:a5a546dff01c5ce56b0159"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();