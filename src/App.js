import React from "react";
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
// import MainCard from "./Components/MainCard";
import UserAccount from "./Components/UserAccount";


//import routes
import { Route, BrowserRouter, Switch } from "react-router-dom";


// import Canvas from './Components/Canvas';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Header></Header>
            <Slider></Slider>
          </Route>

          <Route path="/signup">
            <UserHeader />
            <SignUp />
          </Route>

          <Route path="/account">
            <UserHeader />
            <div style={{ display: 'flex' }}>
              <Sidebar></Sidebar>
              <UserAccount />
            </div>
          </Route>

          <Route path="/404" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
