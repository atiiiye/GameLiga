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
        {/* <Header> */}
          {/* <Route path="/" exact component={Slider} /> */}
          <Route path="/signup" exact component={SignUp} />
        {/* </Header> */}
        {/* <Header2></Header2> */}
        <SignUp></SignUp>
        {/* <Slider></Slider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
