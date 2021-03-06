
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
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



            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
padding: 0px 18px 22px 18px;

`;


const InputContainer = styled.div`
border: 1px solid black;
border-radius:4px;

form {
    display:flex;
    height:44px;
    align-items:center;
    padding-left:18px;

    input {
        flex:1;
        border:none;
        font-size:15px;
    }

    input:focus {
        outline:none;
    }

}
`;





const SendButton = styled.div`

background:#007a5a;
border-radius:2px;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
margin-right:5px;
cursor:pointer;







`;