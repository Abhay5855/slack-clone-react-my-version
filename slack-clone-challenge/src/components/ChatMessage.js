import React from "react";
import styled from "styled-components";
function ChatMessage({ text, name, image, timestamp}) {
  return (
    <Container>
      <UserImage>
        <img
          src={image}
          alt="lady"
        />
      </UserImage>

      <MessageDetails>
        <Name>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>

        <Text>{text}</Text>
      </MessageDetails>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 15px 2px 8px 15px;
  display: flex;
  align-items: center;
`;

const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;
  img {
    width: 100%;
  }
`;

const MessageDetails = styled.div`
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 20px;
  line-height: 1.3;

  span {
    font-size: 13px;
    margin-left: 8px;
    font-weight: 400px;
    color: rgb(97, 96, 97);
  }
`;

const Text = styled.div`
padding-left:5px;
`;
