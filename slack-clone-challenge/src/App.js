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
          <Switch>
            <Route path="/room">
            <Header />
              <Chat />
             
            </Route>

            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </container>
      </Router>
    </div>
  );
}

export default App;


const container = styled.div`
`;

