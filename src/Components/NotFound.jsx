import React, { Component } from "react";

//import css
import "./../css/NotFound.css";
import "./../css/mediaNotFound.css";

//import components
import UserHeaderLeft from "./UserHeaderLeft";

//import bootstrap
import { Button } from "react-bootstrap";

//import routes
import { NavLink } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container not-found">
          <span className="oops h1">404</span>
          <h1 className="h1">Oops!</h1>
          <h1 className="h1">Page Not Found</h1>
          <Button variant="none">
            <NavLink className="nav-link" to="/">
              Back to Home Page
            </NavLink>
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
