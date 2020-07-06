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


//import routes
import { Route, BrowserRouter, Switch } from "react-router-dom";

// import Canvas from './Components/Canvas';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Switch> */}
          <Route path="/" exact>
            <Header></Header>
            <Slider></Slider>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/menu">
            <UserHeader></UserHeader>
            <Sidebar></Sidebar>
          </Route>
          <Route path="/404" component={NotFound} />
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
