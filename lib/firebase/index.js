// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6cNAcEl__5N-eVzZJVj9phh6lEtPqS8w",
  authDomain: "finance-tracker-c2f37.firebaseapp.com",
  projectId: "finance-tracker-c2f37",
  storageBucket: "finance-tracker-c2f37.appspot.com",
  messagingSenderId: "682345471894",
  appId: "1:682345471894:web:69e14ed81a0671eb0e07b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth};
