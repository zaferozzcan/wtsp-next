import styled from "styled-components";
import { Avatar, IconButton, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";

export default function Sidebar() {
  function createChat(e) {
    e.preventDefault();
    const input = prompt("Please Enter an e-mail");
    if (!input) return null;
    if (EmailValidator.validate(input)) {
      // add chats to the collection here
    }
  }
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SideBarButton onClick={createChat}>Start New Chat</SideBarButton>
      {/* user comps */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  borderradius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SideBarButton = styled(Button)`
  &&& {
    width: 100% !important;
    border-top: 1px solid whitesmoke !important;
    border-bottom: 1px solid whitesmoke !important;
  }
`;
