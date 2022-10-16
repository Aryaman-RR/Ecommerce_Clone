// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCkRS-alSRvFf4a-2Wcanis8uceIQAPYY",
    authDomain: "clone-10473.firebaseapp.com",
    projectId: "clone-10473",
    storageBucket: "clone-10473.appspot.com",
    messagingSenderId: "248034035861",
    appId: "1:248034035861:web:ceea3b9006c27385c2739c",
    measurementId: "G-5MSPLJ78X7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
