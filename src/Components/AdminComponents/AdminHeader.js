import React, { Component } from "react";

//import css
import "./../../css/AdminHeader.css";
import "./../../css/mediaAdminHeader.css";
import "./../../css/AdminSidebar.css";

//import images
import Logo from "./../../images/logo5.png";

//import boostrap
import { Navbar, UncontrolledCollapse, Button, Collapse } from "reactstrap";

//import routes
import { NavLink } from "react-router-dom";

//import icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";

//import components
import SearchBox from "../SearchBox";

//import context
import { Context } from "./../Contexts";

class AdminHeader extends Component {
  static contextType = Context;

  render() {
    return (
      <React.Fragment>
        {/* <div className="container-fluid page-body-wrapper"> */}
          <Navbar className="main-nav">
            <div className="navbar-menu-wrapper">
              <div className="navbar-menu-wrapper-right">
                <i className="image-icon fas fa-user-circle" id="user" />
                <p className="text-center">Admin User</p>
              </div>
              <div className="navbar-menu-wrapper-left">
                <Button className="navbar-toggler" type="button">
                  <MenuIcon
                    className="hamburger-menu"
                    id="sidebar"
                    onClick={() => this.context.toggle()}
                  />
                </Button>
                <SearchBox />
              </div>
            </div>
          </Navbar>
      </React.Fragment>
    );
  }
}

export default AdminHeader;
