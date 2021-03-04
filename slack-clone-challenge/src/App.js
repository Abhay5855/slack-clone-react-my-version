import "./App.css";
import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat";
import Login from "./components/login";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"

function App() {


   const [theme , SetTheme]  = useState('light');

   const themeToggler = () => {

    theme === 'light' ? SetTheme('dark') : SetTheme('light')
   }










  return (
    <div className="App">
      <Router>
        <Container>
          <Header />

          <Main>
            <Sidebar />
            <Switch>
              <Route path="/room">
                <Chat />
              </Route>

              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`

width:100%;
height:100vh;
display:grid;
grid-template-rows:40px auto;`;

const Main = styled.div`

display:grid;
grid-template-columns:260px auto;

`;
