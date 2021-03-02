import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <container>
          <Switch>
            <Route path="/room">
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
