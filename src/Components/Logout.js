import React, { Component } from "react";

//import utils
import {} from "../utils";

//import routes
import { Redirect } from "react-router-dom";
import { Home } from "@material-ui/icons";

export class Logout extends Component {
  state = {
    redirect: false,
  };

  logout = () => {
    console.log("Hi");
    this.setState({ redirect: true });
    console.log(this.state.redirect);
    if (this.state.redirect) {
      LogoutUtil();
        // return
        <Redirect to={{ pathname: "/" }} />;
    }

    this.setState({ redirect: false });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Home /> */}
        {console.log("LOGOUT")}
        {/* {this.logout.bind(this)} */}
        <Redirect to={{ pathname: "/" }} />;
      </React.Fragment>
    );
  }
}

export default Logout;
