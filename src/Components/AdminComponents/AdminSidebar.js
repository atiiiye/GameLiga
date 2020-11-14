import React, { Component } from "react";

//import images
import Logo from "./../../images/logo5.png";

//import css
import "./../../css/AdminSidebar.css";

//import routes
import { NavLink } from "react-router-dom";

//import boostrap
import { Navbar, UncontrolledCollapse, Button, Collapse } from "reactstrap";

//import icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//import context
import { Context } from "./../Contexts";

export class AdminSidebar extends Component {
  state = {
    isOpen: true,
    status: "Closed",
  };

  static contextType = Context;

  render() {
    // console.log(this.context);
    return (
      <React.Fragment>
        <Collapse
          toggler="#sidebar"
          className="sidebar navbar sidebar-offcanvas p-0"
          expand="lg"
          isOpen={this.context.isOpen}
          onEntering={() => this.context.onEntering()}
          onEntered={() => this.context.onEntered()}
          onExiting={() => this.context.onExiting()}
          onExited={() => this.context.onExited()}
          // id="sidebar"
        >
          <div className="sidebar-brand-wrapper">
            <NavLink className="logo-link" to="/admin">
              <img className="logo" src={Logo} alt="" />
            </NavLink>
            <NavLink className="title-link" to="/admin">
              <h4 className="UFOGame">
                UFO<span>Game</span>
              </h4>
              {/* <div className="empty-content"></div> */}
            </NavLink>
          </div>
          <ul className="nav">
            <li className="nav-item nav-category">
              <span className="nav-link">Admin Panel</span>
            </li>
            <li className="nav-item menu-items" id="toggler1">
              <div className="nav-link" to="/admin">
                <span className="menu-icon">
                  <i className="fas fa-users-cog"></i>
                </span>
                <span className="menu-title">Users</span>
                <ExpandMoreIcon />
              </div>
            </li>
            <UncontrolledCollapse toggler="#toggler1" className="sub-collapse">
              <ul className="nav sub-menu">
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">List Users</li>
                </NavLink>
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">Add User</li>
                </NavLink>
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">Delete User</li>
                </NavLink>
              </ul>
            </UncontrolledCollapse>
            <li className="nav-item menu-items" id="toggler2">
              <div className="nav-link">
                <span className="menu-icon">
                  <i className="far fa-newspaper"></i>
                </span>
                <span className="menu-title">News</span>
                <ExpandMoreIcon />
              </div>
            </li>
            <UncontrolledCollapse
              toggler="#toggler2"
              className="sub-collapse"
              in={false}
            >
              <ul className="nav sub-menu">
                <NavLink className="nav-link" to="/all-news">
                  <li className="nav-item">All News</li>
                </NavLink>
                <NavLink className="nav-link" to="/add-news">
                  <li className="nav-item">Add News</li>
                </NavLink>
                <NavLink className="nav-link" to="/edit=news">
                  <li className="nav-item">Edit News</li>
                </NavLink>
                <NavLink className="nav-link" to="/delete-news">
                  <li className="nav-item">Delete News</li>
                </NavLink>
              </ul>
            </UncontrolledCollapse>
            <li className="nav-item menu-items" id="toggler3">
              <div className="nav-link">
                <span className="menu-icon">
                  <i className="fas fa-edit"></i>
                </span>
                <span className="menu-title">Rules and Conditon</span>
                <ExpandMoreIcon />
              </div>
            </li>
            <UncontrolledCollapse toggler="#toggler3" className="sub-collapse">
              <ul className="nav sub-menu">
                <NavLink className="nav-link" to="/rules">
                  <li className="nav-item">Rules</li>
                </NavLink>
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">Edit Rules</li>
                </NavLink>
              </ul>
            </UncontrolledCollapse>
            <li className="nav-item menu-items" id="toggler4">
              <div className="nav-link">
                <span className="menu-icon">
                  <i className="fas fa-gamepad"></i>
                </span>
                <span className="menu-title">Games</span>
                <ExpandMoreIcon />
              </div>
            </li>
            <UncontrolledCollapse toggler="#toggler4" className="sub-collapse">
              <ul className="nav sub-menu">
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">List Games</li>
                </NavLink>
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">Add Games</li>
                </NavLink>
                <NavLink className="nav-link" to="/admin">
                  <li className="nav-item">Delete Games</li>
                </NavLink>
              </ul>
            </UncontrolledCollapse>
            <li className="nav-item menu-items" id="toggler5">
              <div className="nav-link">
                <span className="menu-icon">
                  <i className="material-icons">&#xe8b8;</i>
                </span>
                <span className="menu-title">Setting</span>
                <ExpandMoreIcon />
              </div>
            </li>
            <UncontrolledCollapse toggler="#toggler5" className="sub-collapse">
              <ul className="nav sub-menu">
                <NavLink className="nav-link" to="">
                  <li className="nav-item">Edie profile</li>
                </NavLink>
              </ul>
            </UncontrolledCollapse>
          </ul>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default AdminSidebar;
