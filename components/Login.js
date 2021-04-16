import Head from "next/head";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

export default function Login() {
  function signIn() {
    auth.signInWithPopup(provider).catch(alert);
  }
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src={img_url}></Logo>
        <Button onClick={signIn} variant="outlined">
          Sign In With Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;

  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
`;

const Logo = styled.img`
  height: 200px !important;
  width: 200px !important;
  margin-bottom: 50px;
  border-radius: 50%;
  margin-left: 10px;
`;

const img_url =
  "https://www.nicepng.com/png/detail/12-121689_phone-logo-phone-png.png";
