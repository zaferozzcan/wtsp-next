import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { auth } from "../firebase";
import { MoreVertIcon } from "@material-ui/icons/MoreVert";
import { AttachFileIcon } from "@material-ui/icons/AttachFile";
import { useAuthState } from "react-firebase-hooks/auth";
export default function ChatScreen() {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last Seen</p>
        </HeaderInformation>
        <HeaderIcons>
          <MoreVertIcon />
          <AttachFileIcon />
        </HeaderIcons>
      </Header>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.div``;

const HeaderInformation = styled.div``;

const HeaderIcons = styled.div``;
