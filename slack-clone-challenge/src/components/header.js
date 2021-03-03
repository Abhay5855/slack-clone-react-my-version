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
  justify-content:space-between;
  align-items:center;
  color:white;
  font-family:'Roboto', sans-serif;
 
  

 

`;

const Main = styled.div`

display:flex;



`;




const SearchContainer = styled.div`

min-width:400px;
margin-left:15px;
margin-right:15px;



`;


const Search = styled.div`

width:100%;
display:flex;
align-items:center;
border-radius:6px;

input {
    background-color:transparent;
    border:none;
}


`;



const UserContainer = styled.div`
display:flex;
align-items:center;
`;


const UserImage = styled.div`


img {
    height:32px;
    border:1px solid white;
}
`;


const Name = styled.div`
`;
