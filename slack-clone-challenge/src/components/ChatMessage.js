import React from "react";
import styled from "styled-components";
function ChatMessage() {
  return (
    <Container>
      <UserImage>
        <img
          src="https://randomuser.me/api/portraits/women/29.jpg"
          alt="lady"
        />
      </UserImage>

      <MessageDetails>
        <Name>
          Alice Hao
          <span>06/03/2021 12:35:56 AM</span>
        </Name>

        <Text>Hi! Your sketches are just awesome.</Text>
      </MessageDetails>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div``;
const UserImage = styled.div``;
const MessageDetails = styled.div``;
const Name = styled.div``;
const Text = styled.div``;
