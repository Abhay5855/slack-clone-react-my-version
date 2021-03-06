
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
background:#89A1AB;`;


const InputContainer = styled.div``;
const SendButton = styled.div``;