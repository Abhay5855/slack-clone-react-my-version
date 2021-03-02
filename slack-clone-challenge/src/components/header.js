import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
function header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />

        <input type="text" placeholder="Search..." />

        <HelpOutlineIcon />
      </Main>

      <UserContainer>
          Abhay Patil

          

      </UserContainer>
    </Container>
  );
}

export default header;

const Container = styled.div`
  background: #924444;
`;

const Main = styled.div``;

const UserContainer = styled.div``;
