import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHSDr8YN_avIYLlGIsOQeuM-6R-wCCbs4",
  authDomain: "fb-crud-react-77bb9.firebaseapp.com",
  projectId: "fb-crud-react-77bb9",
  storageBucket: "fb-crud-react-77bb9.appspot.com",
  messagingSenderId: "976006673133",
  appId: "1:976006673133:web:f6025c1e379289c61e92e4",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
