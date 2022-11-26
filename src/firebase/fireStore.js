import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage'

const firebaseAuth = firebase.initializeApp({
  apiKey: "AIzaSyAILIQTLuHfpOuXZSGd4UitD3-v5CB5PSM",
  authDomain: "shopify-75dc8.firebaseapp.com",
  projectId: "shopify-75dc8",
  storageBucket: "shopify-75dc8.appspot.com",
  messagingSenderId: "960430458807",
  appId: "1:960430458807:web:6ba3ce20ee698b4cd3ca32"
});

export const auth = firebaseAuth.auth();
export const db = firebaseAuth.firestore();
export const storge = firebaseAuth.storage()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebaseAuth;