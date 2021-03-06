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

const Container = styled.div`

padding:15px 2px 8px 15px;
display:flex;
align-items:center;`;



const UserImage = styled.div`
width:40px;
height:40px;
border-radius: 2px;
overflow:hidden;
margin-right:8px;
img {
    width:100%;
}`;






const MessageDetails = styled.div`
padding-left:5px;
display:flex;
flex-direction:column;

`;



const Name = styled.span`
font-weight:900;
font-size:20px;
line-height:1.3;

span {
    font-size:16px;
    margin-left:8px;
    font-weight:400px;
    color:rgb(97,96,97);
}`;




const Text = styled.div``;
