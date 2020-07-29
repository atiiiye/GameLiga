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
import { Route, BrowserRouter, Switch } from "react-router-dom";
 

class App extends Component {
  // const [stateDisplay, setDisplayState] = useState(true)

  state ={
    stateDisplay:true
  }

  displayHandler = () => {this.setState(stateDisplay)}
  
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
  
            <Route path="/" exact>
              <Header></Header>
              <Slider></Slider>
            </Route>
  
            <Route path="/signup">
              <UserHeader show={!this.displayHandler.bind(this)} />
              <SignUp />
            </Route>
  
            <Route path="/account">
              <UserHeader show={this.displayHandler.bind(this)} />
              <div style={{ display: 'flex' }}>
                <Sidebar></Sidebar>
                <UserAccount />
              </div>
            </Route>
  
            <Route path="/games">
              <UserHeader show={this.displayHandler.bind(this)} />
              <div style={{ display: 'flex' }}>
                <Sidebar></Sidebar>
                <FinalResult />
              </div>
            </Route>
  
            
            <Route path="/Leader-boards">
              <UserHeader show={this.displayHandler.bind(this)} />
              <div style={{ display: 'flex' }}>
                <Sidebar></Sidebar>
                <LeaderBoards />
              </div>
            </Route>
  
  
            <Route path="/tourny">
              <UserHeader show={this.displayHandler.bind(this)} />
              <div style={{ display: 'flex' }}>
                <Sidebar></Sidebar>
                <LeaderBoards />
              </div>
            </Route>
  
            <Route path="/liga">
              <UserHeader show={this.displayHandler.bind(this)} />
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
  
}

export default App;
