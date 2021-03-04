import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
function chat() {
  return (
    <Container>
      <ChatHeader>
        <Title>
          AbhayPatil
          <StarBorderIcon />
        </Title>
      </ChatHeader>

      <DetailsHeader>
        <Details>
          Details
          <InfoIcon />
        </Details>
      </DetailsHeader>
    </Container>
  );
}

export default chat;

const Container = styled.div`
display:flex;`;
const ChatHeader = styled.div`
`;
const Title = styled.div``;
const DetailsHeader = styled.div``;
const Details = styled.div``;
