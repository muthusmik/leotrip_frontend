import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig  = {
  apiKey: "AIzaSyBv8ldc7cYZHRUJO4W2sJmZ5gaugufsHtY",
  authDomain: "hojoycomforts-5ad8e.firebaseapp.com",
  projectId: "hojoycomforts-5ad8e",
  storageBucket: "hojoycomforts-5ad8e.appspot.com",
  messagingSenderId: "660853625107",
  appId: "1:660853625107:web:991c7e7538bfdc9ba28ae6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

