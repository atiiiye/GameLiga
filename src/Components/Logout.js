import React, { Component } from "react";

//import utils
import { LogoutUtil } from "../utils";

//import routes
import { Redirect } from "react-router-dom";

//import contexts
import { Context } from "./Contexts/index";

export class Logout extends Component {
  state = {
    redirect: false,
  };

  static contextType = Context;

  render() {

    return (
      <React.Fragment>
        {this.state.redirect = ""}
        <Redirect to={{ pathname: "/" }} />;
        {LogoutUtil()}
      </React.Fragment>
    );
  }
}

export default Logout;
