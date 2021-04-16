import "../styles/globals.css";
import Login from "../components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}

export default MyApp;
