import { useEffect } from "react";
import "../styles/globals.css";
import Login from "../components/Login";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        // photoUrl: user.photoUrl,
      });
    }
  }, [user]);
  if (loading) return <Loading />;
  if (!user) return <Login />;

  console.log(loading);
  return <Component {...pageProps} />;
}

export default MyApp;
