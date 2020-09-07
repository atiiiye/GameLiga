import React, { Component } from "react";

//import css
import "./../css/Loader.css";

export class Loader extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="loader"></div>
      </React.Fragment>
    );
  }
}

export default Loader;
