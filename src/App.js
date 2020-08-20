import React, { Component } from "react";
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
import Games from "./Components/Games";
import Tourny from "./Components/Tourny";
import Liga from "./Components/Liga";
import LeaderBoards from "./Components/LeaderBoards";
import PrivateRoute from './Components/PrivateRoute ';
import PublicRoute from './Components/PublicRoute';

//import routes
import { Route, Switch, Redirect } from "react-router-dom";

//import packages

class App extends Component {

  state = {
    stateDisplay: true,
  };


  displayHandler = () => {
    this.setState({ stateDisplay: true });
  };




  render() {
    return (
      <div>

        <Switch>
          <PublicRoute restricted={false} path="/" exact component={Slider} />

          <PublicRoute restricted={true} path="/signup" exact component={SignUp} />

          <PrivateRoute exact
            path="/account"
            render={(props) => {
              // if (props.history.state == "undefined")
              //   return <Redirect to="/" />
              return (
                <React.Fragment>
                  <UserHeader
                    show={this.displayHandler.bind(this)}
                    {...props}
                  />
                  <UserAccount />
                </React.Fragment>
              );
            }}
          />

          <PrivateRoute exact path="/tvlive" component={FinalResult} />

          <PrivateRoute exact path="/games" component={Games} />

          <PrivateRoute exact path="/tourny" component={Tourny} />

          <PrivateRoute exact path="/Leader-boards" component={LeaderBoards} />

          <PrivateRoute exact path="/liga" component={Liga} />

          <Route path="/404" component={NotFound} />

          <Route component={NotFound} />

        </Switch>

      </div>
    );
  }
}

export default App;
