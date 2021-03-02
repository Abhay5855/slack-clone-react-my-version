import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />

        <SearchContainer>
            <Search>
            <input type="text" placeholder="Search..." />
            </Search>
        </SearchContainer>

        

        <HelpOutlineIcon />
      </Main>

      <UserContainer>
      <Name>
         Abhay Patil
      </Name>
       
       <UserImage>
       <img
          src="https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png"
          alt="user"
        ></img>
       </UserImage>
       
      </UserContainer>
    </Container>
  );
}

export default header;

const Container = styled.div`
  background: #924444;
  display:flex;
 
  

 

`;

const Main = styled.div`
display:flex;

`;




const SearchContainer = styled.div``;


const Search = styled.div``;



const UserContainer = styled.div`
display:flex;
`;


const UserImage = styled.div`
`;


const Name = styled.div`
`;
