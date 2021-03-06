import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
function chat() {
  return (
    <Container>
      <MessageContainer>
        <Header>
          <Title>
            #AbhayPatil
            <StarBorderIcon />
          </Title>

          <Details>
            Details
            <InfoIcon />
          </Details>
        </Header>

        <Profile>Full-stack developer & student at Sinhgad Institute.</Profile>
      </MessageContainer>
    </Container>
  );
}

export default chat;

const Container = styled.div`
font-size:15px;
font-family: "Baloo Bhai 2", cursive;`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:8px 20px 5px 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
padding-left:20px;


`;



const MessageContainer = styled.div`
border-bottom: 0.1px solid black;
`;