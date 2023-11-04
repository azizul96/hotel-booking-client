// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-J-jgGN0K_jQGXFY_RDZkwfT9DrfAarg",
  authDomain: "hotel-booking-3b71d.firebaseapp.com",
  projectId: "hotel-booking-3b71d",
  storageBucket: "hotel-booking-3b71d.appspot.com",
  messagingSenderId: "960885047190",
  appId: "1:960885047190:web:acf1d5abc07b543bbee7b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
