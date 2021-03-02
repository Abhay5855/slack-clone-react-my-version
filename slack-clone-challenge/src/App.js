import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat";
import Login from "./components/login";
import styled from 'styled-components';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Router>
        <container>
        <Header />

        <Main>
        <Switch>
            <Route path="/room">
           
              <Chat />
             
            </Route>

            <Route path="/">
              <Login />
            </Route>
          </Switch>

        </Main>
          
        </container>
      </Router>
    </div>
  );
}

export default App;


const container = styled.div`
`;


const Main = styled.div``;