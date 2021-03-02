import React from "react";
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
function header() {
  return (
    <Container>

         <Main>

           < AccessTimeIcon />


         </Main>

         {/* <UserContainer>

         </UserContainer> */}
    </Container>
  )
  
}

export default header;



const Container = styled.div`



`;


const Main = styled.div``;
