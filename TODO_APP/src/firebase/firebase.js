// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWp1X7vcBo7us16aipEpwrO2vffzRlbbg",
  authDomain: "todo-app-e1948.firebaseapp.com",
  projectId: "todo-app-e1948",
  storageBucket: "todo-app-e1948.appspot.com",
  messagingSenderId: "658977298850",
  appId: "1:658977298850:web:6bfa19068242e4e7fd3afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};