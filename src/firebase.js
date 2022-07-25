import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7rHeEdFtR5wN-Fu-RbLTp1anyZSZfu3Q",
    authDomain: "my-shop-27e53.firebaseapp.com",
    projectId: "my-shop-27e53",
    storageBucket: "my-shop-27e53.appspot.com",
    messagingSenderId: "728270742275",
    appId: "1:728270742275:web:fc64da8a49b09f45aa7f36",
    measurementId: "G-LL2X5G9B47"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };