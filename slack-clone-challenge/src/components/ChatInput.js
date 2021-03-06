import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import AttachmentIcon from "@material-ui/icons/Attachment";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Type Your Message Here.." />

          <SendButton>
            <SendIcon />
          </SendButton>
        </form>

        <MessageFunctions>

        <LeftSideIcons>

        <FlashOnIcon />
        <FormatBoldIcon />
          <FormatItalicIcon />
          <AttachmentIcon />
          <FormatListBulletedIcon />
          <FormatListNumberedIcon />
          <StrikethroughSIcon />

        </LeftSideIcons>
         
          
         <RightSideIcons>
         <FormatSizeIcon />
         <AlternateEmailIcon />
         <InsertEmoticonIcon />

         </RightSideIcons>

          

          

         

          
        </MessageFunctions>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding: 0px 18px 22px 18px;
`;

// const InputContainer = styled.div`
//   border: 1px solid black;
//   border-radius: 4px;

//   form {
//     display: flex;
//     height: 44px;
//     align-items: center;
//     padding-left: 18px;

//     input {
//       flex: 1;
//       border: none;
//       font-size: 15px;
//     }

//     input:focus {
//       outline: none;
//     }
//   }
// `;

// const SendButton = styled.div`
//   background: #007a5a;
//   border-radius: 2px;
//   width: 32px;
//   height: 32px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 5px;
//   cursor: pointer;

//   .MuiSvgIcon-root {
//     width: 20px;
//     color: white;
//   }
// `;

// const MessageFunctions = styled.div`
// `;

const InputContainer = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  form {
    display: flex;
    height: 44px;
    align-items: center;
    padding-left: 15px;
    border-bottom: 0.5px solid black;

    input {
      border: none;
      flex: 1;
      font-size: 15px;
    }

    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.div`

 background: #007a5a;
 border-radius:2px;
 display:flex;
 width:33px;
 height:33px;
 justify-content:center;
 align-items:center;
 margin-right:5px;

.MuiSvgIcon-root {
    width:20px;
    color:white;
}


`;
const MessageFunctions = styled.div`
`;



const RightSideIcons = styled.div``;


const LeftSideIcons = styled.div``;