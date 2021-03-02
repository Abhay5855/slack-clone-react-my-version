import React from "react";
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
function header() {
  return (
    <Container>

         <Main>

           < AccessTimeIcon />

           <input type="text" placeholder="Search..." />


         </Main>

         {/* <UserContainer>

         </UserContainer> */}
    </Container>
  )
  
}

export default header;



const Container = styled.div`

background:#924444;


`;


const Main = styled.div``;
