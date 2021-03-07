import "./App.css";
import { useEffect , useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat";
import Login from "./components/login";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import db from "./firebase";

function App() {



  const [rooms, setRooms] = useState([]);


  const [user, setUser] = useState();





  //  Databse

  const getChannels = () => {
    db.collection ('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
             
        return{id: doc.id, name: doc.data().name}

      }));
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className="App">
      <Router>


      {
        !user ?

        <Login />
        :
      
        <Container>
          <Header />

          <Main>
            <Sidebar rooms={rooms} />
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
      }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
