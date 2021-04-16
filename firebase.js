import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVel8xNJIjJyFYQHvLg0i8G7-CoOIf-14",
  authDomain: "wtsp-next-676be.firebaseapp.com",
  projectId: "wtsp-next-676be",
  storageBucket: "wtsp-next-676be.appspot.com",
  messagingSenderId: "358517979139",
  appId: "1:358517979139:web:f034af48da528d9b593636",
  measurementId: "G-GJ8EWM7STV",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
