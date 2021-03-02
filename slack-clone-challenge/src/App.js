import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat";
import Login from "./components/login";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
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
background: orange;
width:100%;
height:100vh;`;

const Main = styled.div``;
