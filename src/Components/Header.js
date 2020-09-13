import React, { Component } from "react";

//import css
import "./../css/Header.css";
import "./../css/mediaHeader.css";
import "./../css/formlogin.css";
import "./../css/mediaFormlogin.css";

//import image
import logo5 from "./../images/logo5.png";

//import boostrap
import { Navbar } from "react-bootstrap";

//import routes
import { NavLink } from "react-router-dom";

//import components
import Login from "./Login";
import { login } from "../Services/userService";

//import packages

export default class Header extends Component {
  render() {
    // console.log(this.props.history)
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Navbar className="" collapseOnSelect expand="md" bg="none">
            <div className="hamburger-menu px-0" data-target="#coll-navbar">
              <Navbar.Toggle aria-controls="collapse" className="px-0">
                <span className="menu navbar-toggler-icon">
                  <div className="menu-line menu-line-1"></div>
                  <div className="menu-line menu-line-2"></div>
                  <div className="menu-line menu-line-3"></div>
                </span>
              </Navbar.Toggle>
            </div>
            <div className="nav-right">
              <ul className="navbar-nav">
                <div className="buttons">
                  <Login/>
                  <li className="nav-item">
                    <NavLink className="nav-link" id="signup" to="/signup">
                      SIGN UP
                    </NavLink>
                  </li>
                </div>
                {/* {this.props.username && (
                  <React.Fragment>
                    <div className="buttons">
                      <li className="nav-item">
                        <NavLink
                          className="nav-link"
                          id="login"
                          to="/"
                          exact
                          onClick={() => {
                            this.setState({ show: true });
                            // this.addingRefButton.bind(this)
                          }}
                        >
                          LOG OUT
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" id="signup" to="/signup">
                          SIGN UP
                        </NavLink>
                      </li>
                    </div>
                  </React.Fragment>
                )} */}
                <Navbar.Collapse className="" id="coll-navbar">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/more">
                      More
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/news">
                      News
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/studi">
                      Studi
                    </NavLink>
                  </li>
                </Navbar.Collapse>
              </ul>
            </div>
            <div className="nav-left">
              <div className="empty-content"></div>
              <h4 className="UFOGame">
                UFO<span>Game</span>
              </h4>
              <img className="logo" src={logo5} alt="" />
            </div>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
