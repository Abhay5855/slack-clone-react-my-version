import React from 'react'
import styled from "styled-components"
import {auth, provider} from "../firebase"
function login(props) {



    const signIn = () => {

        auth.signInWithPopup(provider)
        .then((result) => {

            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }

            localStorage.setItem('user',JSON.stringify(newUser));
           
            props.setUser(newUser);
        })

        

        .catch((error) => {
            alert(error.message)
        })



    }
    return (



        
        <Container>

        <Contents>

        <SlackImage src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"/>

          <h1>Sign in Slack</h1>


           <SigninButton onClick = {() => signIn()}>

          Sign In With Google

           </SigninButton>



        </Contents>

        
            
        </Container>
    )
}

export default login


const Container = styled.div`
background:#E5E7EB;
width:100%;
height:100vh;
display:flex;
align-items:center;
justify-content:center;`;


const Contents = styled.div`
background:white;
padding:100px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius:5px;
box-shadow:0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb(0 0 0 / 24%);




`;


const SlackImage = styled.img`
height:100px;`;


const SigninButton = styled.button`

margin-top:50px;
background:#059669;
border:none;
cursor:pointer;
border-radius:2px;
color:white;
height:40px;
font-size:15px;


:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

`;


