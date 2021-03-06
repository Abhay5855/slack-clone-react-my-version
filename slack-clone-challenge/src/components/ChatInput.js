
import React from 'react'
import styled from 'styled-components'

function ChatInput() {
    return (
        <Container>
            <InputContainer>

            <form>
                <input type="text" placeholder="Type Your Message Here.." />

                
            </form>



            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
background:#89A1AB;`;


const InputContainer = styled.div``;