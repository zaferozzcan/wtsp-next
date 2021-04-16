import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "wtsp-next.firebaseapp.com",
  projectId: "wtsp-next",
  storageBucket: "wtsp-next.appspot.com",
  messagingSenderId: "45505978999",
  appId: "1:45505978999:web:a8f083ae25cce6f8d09c72",
  measurementId: "G-4DH7HXJXCQ",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
