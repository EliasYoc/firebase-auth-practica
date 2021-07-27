import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyD5ZDoSVhr-YNuZ4xmxrFdka_ExKNXpwr0",
  authDomain: "practica-yoc.firebaseapp.com",
  projectId: "practica-yoc",
  storageBucket: "practica-yoc.appspot.com",
  messagingSenderId: "754027213638",
  appId: "1:754027213638:web:f68ba2755a37e372e56b47",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
export { firebase, db, storage };
