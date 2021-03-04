import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function sidebar() {
  return (
    <Container>
      <Main>
        <Title>

        AbhayPatil

        </Title>

          <AddLogo>
            
            <AddCircleOutlineIcon />

          </AddLogo>
        
          </Main>

     </Container>
  );
}

export default sidebar;

const Container = styled.div`
background:#323232;
color:white;
font-family: 'Baloo Bhai 2', cursive;
`;

const Title = styled.div`

font-size:20px;


`;

const AddLogo = styled.div`
display:flex;
width:36px;
height:36px;
background:white;
border-radius:50%;
color:#323232;
fill:#323232;
align-items:center;
justify-content:center;

`;

const Main = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:0.1px solid rgba(255, 255, 255, .5);
padding: 10px 15px 8px 15px;
`;



const InfoContainer = styled.div`
display:grid;
grid-column:1 auto;`;


const Contents = styled.div`
display:flex;
`;



const ChannelContainer = styled.div``;


const Name  = styled.div``;