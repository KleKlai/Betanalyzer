import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCjNa6exyKIzPOA-ElQVwcAesFgDg_npWU",
    authDomain: "clashodds.firebaseapp.com",
    projectId: "clashodds",
    storageBucket: "clashodds.appspot.com",
    messagingSenderId: "327242423297",
    appId: "1:327242423297:web:89ce171fe2f6e407cff400",
    measurementId: "G-TFDVYD5464"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);