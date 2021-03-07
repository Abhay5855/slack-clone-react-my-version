import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";


import db from "../firebase";
import { useParams } from "react-router-dom";

function Chat() {
  let { channelId } = useParams();

  const [channel, setChannel] = useState();

  const [messages, setMessages] = useState();

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());

        setMessages(messages);
      });
  };

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
      });
  };

  useEffect(() => {
    getChannel();

    getMessages();
  }, [channelId]);  //eslint-disable-line

  return (
    <Container>
      <MessageContainer>
        <Header>
          <ChannelName># {channel && channel.name}</ChannelName>

          <Details>
            Details
            <InfoIcon />
          </Details>
        </Header>

        <Profile>Full-stack developer & student at Sinhgad Institute.</Profile>
      </MessageContainer>

      <ChatContainer>
            {
              messages && 
              messages.map((data, index)=> (

                <ChatMessage 

                  text = {data.text}
                  name = {data.name}
                  image = {data.userImage}
                  timestamp = {data.timestamp}
                />

              ))
            }
          
      </ChatContainer>

      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  font-family: "Baloo Bhai 2", cursive;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 5px 20px;
  font-weight: 400px;
`;

const ChannelName = styled.div`
  display: flex;
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  padding-left: 20px;
`;

const MessageContainer = styled.div`
  border-bottom: 0.1px solid black;
`;

const ChatContainer = styled.div``;
