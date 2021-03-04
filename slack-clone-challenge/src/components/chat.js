import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
function chat() {
  return (
    <Container>
           

           <Header>

              <Title>
                   #AbhayPatil

                   <StarBorderIcon />
              </Title>

              <Details>
                  
                      Details
                      <InfoIcon />
                  
              </Details>

           </Header>


           <Profile>

           </Profile>



          
        
      
        
         

    </Container>
  );
}

export default chat;

const Container = styled.div`
`;

const Header = styled.div`
display:flex;
align-items:center;
justify-content:space-between;`;

const  Title = styled.div`
display:flex;
align-items:center;`;

const Details = styled.div`
display:flex;
align-items:center;


`;

const Profile = styled.div``;



