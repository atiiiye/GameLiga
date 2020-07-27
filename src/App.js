import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//import components
import Slider from "./Components/Slider";
import UserHeader from "./Components/UserHeader";
import SignUp from "./Components/SignUp";
import Sidebar from "./Components/Sidebar";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header.js";
import UserAccount from "./Components/UserAccount";
import FinalResult from "./Components/FinalResult";
import LeaderBoards from "./Components/LeaderBoards";


//import routes
import { Route, BrowserRouter, Switch } from "react-router-dom";



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)
// import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
// import './../node_modules/font-awesome/css/font-awesome.min.css'; 



function App() {
  const [stateDisplay, setDisplayState] = useState(true)

  let displayHandler = () => {setDisplayState(stateDisplay)}
  
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Header></Header>
            <Slider></Slider>
          </Route>

          <Route path="/signup">
            <UserHeader show={!displayHandler} />
            <SignUp />
          </Route>

          <Route path="/account">
            <UserHeader show={displayHandler} />
            <div style={{ display: 'flex' }}>
              <Sidebar></Sidebar>
              <UserAccount />
            </div>
          </Route>

          <Route path="/games">
            <UserHeader show={displayHandler} />
            <div style={{ display: 'flex' }}>
              <Sidebar></Sidebar>
              <FinalResult />
            </div>
          </Route>

          
          <Route path="/Leader-boards">
            <UserHeader show={displayHandler} />
            <div style={{ display: 'flex' }}>
              <Sidebar></Sidebar>
              <LeaderBoards />
            </div>
          </Route>

          <Route path="/404" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
