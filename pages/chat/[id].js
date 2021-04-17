import styled from "styled-components";
import Head from "next/head";
import ChatScreen from "../../components/ChatScreen";

export default function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);

  //   messages on the server
  const messagesRes = await ref
    .collection("messages")
    .order("timestamp", "asc")
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({ id: doc.id, ...doc.data }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::webkit-scrolbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
