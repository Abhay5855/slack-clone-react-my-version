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
  background: #E60A00;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-family:'Roboto', sans-serif;
  position:relative;
 
  

 

`;

const Main = styled.div`

display:flex;
margin:0px 15px 0px 15px;



`;




const SearchContainer = styled.div`

min-width:400px;
margin-left:15px;
margin-right:15px;



`;


const Search = styled.div`
box-shadow: inset 0 0 0 1px rgb(104 74 104);
width:100%;
display:flex;
align-items:center;
border-radius:6px;


input {
    background-color:transparent;
    border:none;
    padding:4px 8px 4px 8px;
    color:white;
}

input:focus {
    outline:none;

}
`;



const UserContainer = styled.div`
display:flex;
align-items:center;
padding-right:15px;
position:absolute;
right:0;
`;


const UserImage = styled.div`
width:26px;
height:26px;
border-radius: 3px;
padding-bottom:4px;
   

img {
    width:100%;
}
`;


const Name = styled.div`
padding-right:15px`;
