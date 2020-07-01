import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Slider from './Components/Slider.jsx';
import Header2 from './Components/Header2';

// import Canvas from './Components/Canvas';




function App() {
  return (
    <div>
      {/* <Header></Header> */}
      <Header2></Header2>
      <Slider>
        {/* <Canvas /> */}
      </Slider>

    </div>
  );
}

export default App;
