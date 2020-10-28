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

  // logout = () => {
  //   LogoutUtil();
  // };

  render() {

    return (
      <React.Fragment>
        {/* {console.log(this.context.redirect)} */}
        {this.context.redirect = ""}
        {/* {console.log(this.context.redirect)} */}
        <Redirect to={{ pathname: "/" }} />;
        {LogoutUtil()}
        {/* {console.log(this.context)} */}
      </React.Fragment>
    );
  }
}

export default Logout;
