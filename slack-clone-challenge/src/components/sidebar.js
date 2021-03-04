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

const Container = styled.div``;

const Title = styled.div``;

const AddLogo = styled.div``;

const Main = styled.div`
display:flex;`;
