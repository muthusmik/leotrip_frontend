// firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // New import
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyBvmwVjFYrkxqMk2TlsH5DZnKIk4tTB2KM",
//     authDomain: "leotrip-d930f.firebaseapp.com",
//     projectId: "leotrip-d930f",
//     storageBucket: "leotrip-d930f.appspot.com",
//     messagingSenderId: "937584577432",
//     appId: "1:937584577432:web:431bffb747ad1e354279ed",
//     measurementId: "G-FE3LLZJGS5"
// };
const firebaseConfig = {
    apiKey: "AIzaSyB-238rlV8310wrRqP4lTgBFu6WmZjQvaw",
    authDomain: "leotrip-3dde3.firebaseapp.com",
    projectId: "leotrip-3dde3",
    storageBucket: "leotrip-3dde3.appspot.com",
    messagingSenderId: "451829345544",
    appId: "1:451829345544:web:4e4e09637242e495d5d0bd",
    measurementId: "G-WJS3FFJ7HY"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);


