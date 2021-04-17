import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useRouter } from "next/router";

export default function Chat({ id, user }) {
  const router = useRouter();

  function enterChat() {
    router.push(`/chat/${id}`);
  }
  return (
    <div>
      <Container onClick={enterChat}>
        <UserAvatar />
        <p>{user}</p>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
