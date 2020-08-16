import React, { useState, Component } from "react";
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
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login";

class App extends Component {
  // const [stateDisplay, setDisplayState] = useState(true)

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
          <Route path="/" exact component={Slider}
          // render={(props) => {
          //   <React.Fragment>
          //     <Header {...props} />
          //     <Slider />
          //   </React.Fragment>
          // }}
          />

          <Route path="/signup" component={SignUp} />

          <Route
            path="/account"
            render={(props) => {
              if (props.location.state == "undefined")
                return <Redirect to="/" />;
              return (
                <React.Fragment>
                  <UserHeader
                    show={this.displayHandler.bind(this)}
                    {...props.location.state}
                  />
                  <UserAccount />
                </React.Fragment>
              );
            }}
          />

          <Route path="/games">
            <UserHeader show={this.displayHandler.bind(this)} />
            <div style={{ display: "flex" }}>
              <Sidebar></Sidebar>
              <FinalResult />
            </div>
          </Route>

          <Route path="/Leader-boards">
            <UserHeader show={this.displayHandler.bind(this)} />
            <div style={{ display: "flex" }}>
              <Sidebar></Sidebar>
              <LeaderBoards />
            </div>
          </Route>

          <Route path="/tourny">
            <UserHeader show={this.displayHandler.bind(this)} />
            <div style={{ display: "flex" }}>
              <Sidebar></Sidebar>
              <LeaderBoards />
            </div>
          </Route>

          <Route path="/liga">
            <UserHeader show={this.displayHandler.bind(this)} />
            <div style={{ display: "flex" }}>
              <Sidebar></Sidebar>
              <LeaderBoards />
            </div>
          </Route>

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />

          {/* <Route path="/account/:id">
            <UserHeader show={this.displayHandler.bind(this)} username={this.state.username} />
            <div style={{ display: 'flex' }}>
              <Sidebar></Sidebar>
              <UserAccount />
            </div>
          </Route> */}
        </Switch>
      </div>
    );
  }
}

export default App;
