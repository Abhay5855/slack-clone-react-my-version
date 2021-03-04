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
padding-left:15px;
font-size:20px;
padding-top:8px;

`;

const AddLogo = styled.div`
padding-right:15px;
padding-top:8px;

`;

const Main = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:0.1px solid rgba(255, 255, 255, .5);
`;
