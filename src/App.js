import React from "react";
// import logo from './logo.svg';
// import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//import components
import Header from "./Components/Header";
import Slider from "./Components/Slider.jsx";
import Header2 from "./Components/Header2";
import SignUp from "./Components/SignUp";

//import routes
import { Route, BrowserRouter } from "react-router-dom";

// import Canvas from './Components/Canvas';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <Header></Header>
          <Slider></Slider>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
