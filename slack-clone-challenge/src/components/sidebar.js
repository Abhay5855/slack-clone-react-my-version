import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { SidebarItems } from "../data/Sidebardata";
import AddIcon from '@material-ui/icons/Add';
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



          <ChannelContainer>

              {
                  SidebarItems.map(item => (
                      
                      <ChannelContainerItem>
                          {item.icon}
                          {item.text}
                      </ChannelContainerItem>

                  ) )
              }
          </ChannelContainer>


          <MainChannels>


          <ChannelHeader>

          Channels

          </ChannelHeader>

          <ChannelIcon>


            < AddIcon />


          </ChannelIcon>

          </MainChannels>

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







const ChannelContainer = styled.div`
Padding-top:20px;`;


const ChannelContainerItem  = styled.div`

display:grid;
grid-template-columns: 15% auto;
height:30px;
cursor:pointer;
align-items:center;
padding-left:10px;

:hover {

    background:#E60A00;

}

`;


const MainChannels = styled.div``;
const ChannelHeader = styled.div``;
const ChannelIcon = styled.div``;