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
import LeaderBoards from "./Components/LeaderBoards";
import reducer from './Components/Reducers/reducer';
// import { createBrowserHistory } from 'history';


//import routes
import { Route, Switch, Redirect } from "react-router-dom";

//import packages
import { Provider } from 'react-redux';
import { createStore } from 'redux'

class App extends Component {

  state = {
    stateDisplay: true,
  };


  displayHandler = () => {
    this.setState(stateDisplay);
  };

  render() {
    return (
      <div>

        <Switch>

          <Route path="/" exact component={Slider} />

          <Route path="/signup" component={SignUp} />

          <Route
            path="/account"
            render={(props) => {
              if (props.history.state == "undefined")
                return <Redirect to="/" />
              return (
                <React.Fragment>
                  <UserHeader
                    show={this.displayHandler.bind(this)}
                    {...props.history.state}
                  />
                  <UserAccount />
                </React.Fragment>
              );
            }}
          />

          <Route path="/games">
            <UserHeader show={this.displayHandler.bind(this)} />
            <div style={{ display: "flex" }}>
              <Sidebar />
              <FinalResult />
            </div>
          </Route>

          <Route path="/Leader-boards">
            <UserHeader show={this.displayHandler.bind(this)} />
            <LeaderBoards />
          </Route>

          <Route path="/tourny">
            <UserHeader show={this.displayHandler.bind(this)} />
            <LeaderBoards />
          </Route>

          <Route path="/liga">
            <UserHeader show={this.displayHandler.bind(this)} />
            <LeaderBoards />
          </Route>

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />

        </Switch>

      </div>
    );
  }
}

export default App;
