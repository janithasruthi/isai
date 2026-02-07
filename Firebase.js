// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdazxe5BnpILgEBHZxN54w5acYHO-Yhcc",
  authDomain: "isai-d28cd.firebaseapp.com",
  projectId: "isai-d28cd",
  storageBucket: "isai-d28cd.firebasestorage.app",
  messagingSenderId: "721064855986",
  appId: "1:721064855986:web:12fcf68906dd88ddecfcab",
  measurementId: "G-792T3B3RZY"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export let __AUTH=getAuth(firebaseapp);
export let __DB=getFirestore(firebaseapp);
export default firebaseapp;
