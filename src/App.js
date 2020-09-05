import React, { Component } from "react";

//import components
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import NotFound from "./Components/NotFound";
import Account from "./Components/Account";
import FinalResult from "./Components/FinalResult";
import Games from "./Components/Games";
import Tourny from "./Components/Tourny";
import Liga from "./Components/Liga";
import Console from "./Components/Console";
import LeaderBoards from "./Components/LeaderBoards";
import Chat from "./Components/Chat";
import Tutorial from "./Components/Tutorial";
import Shop from "./Components/Shop";

//import Routes
import PrivateRoute from "./Components/Routes/PrivateRoute ";
import PublicRoute from "./Components/Routes/PublicRoute";
import { Route, Switch } from "react-router-dom";

// import packages
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  state = {};

  componentDidMount() {
    document.title="Game Liga"
  }

  render() {
    return (
      <div>
        <Switch>
          <PublicRoute exact restricted={false} path="/" component={Home} />

          <PublicRoute exact restricted={false} path="/signup" component={SignUp}
          />

          <PrivateRoute exact path="/account" component={Account} />

          <PrivateRoute exact path="/tvlive" component={FinalResult} />

          <PrivateRoute exact path="/games" component={Games} />

          <PrivateRoute exact path="/tourny" component={Tourny} />

          <PrivateRoute exact path="/tutorial" component={Tutorial} />

          <PrivateRoute exact path="/leader-boards" component={LeaderBoards} />

          <PrivateRoute exact path="/console" component={Console} />

          <PrivateRoute exact path="/liga" component={Liga} />

          <PrivateRoute exact path="/chat" component={Chat} />

          <PrivateRoute exact path="/shop" component={Shop} />

          <PrivateRoute exact path="/404" component={NotFound} />

          <PrivateRoute exact path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
