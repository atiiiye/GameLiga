import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//import components
import Slider from "./Components/Slider";
import UserHeader from "./Components/UserHeader";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header.js";
import UserAccount from "./Components/UserAccount";
import FinalResult from "./Components/FinalResult";
import Games from "./Components/Games";
import Tourny from "./Components/Tourny";
import Liga from "./Components/Liga";
import Console from "./Components/Console";
import LeaderBoards from "./Components/LeaderBoards";
import Chat from "./Components/Chat";


//import Routes
import PrivateRoute from './Components/Routes/PrivateRoute ';
import PublicRoute from './Components/Routes/PublicRoute';
import { Route, Switch, Redirect } from "react-router-dom";

//import contexts
import { usernameContext } from './Components/Contexts';

class App extends Component {

  state = {};

  render() {
    return (
      <div>

        <Switch>

          {/* <usernameContext.Provider value={this.state.username}> */}

          <PublicRoute exact restricted={false} path="/" component={Slider} />

          <PublicRoute exact restricted={false} path="/signup" component={SignUp} />

          <PrivateRoute exact path="/account" component={UserAccount} />

          <PrivateRoute exact path="/tvlive" component={FinalResult} />

          <PrivateRoute exact path="/games" component={Games} />

          <PrivateRoute exact path="/tourny" component={Tourny} />

          <PrivateRoute exact path="/leader-boards" component={LeaderBoards} />

          <PrivateRoute exact path="/console" component={Console} />

          <PrivateRoute exact path="/liga" component={Liga} />

          <PrivateRoute exact path="/chat" component={Chat} />


          {/* </usernameContext.Provider> */}

          <Route path="/404" component={NotFound} />

          <Route path="" component={NotFound} />


        </Switch>

      </div>
    );
  }
}

export default App;
