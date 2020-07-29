import React, { Component } from "react";

//import css
import "./../css/reset.css";
import "./../css/Header.css";
import "./../css/mediaHeader.css";
import "./../css/formlogin.css";
import "./../css/mediaFormlogin.css";


//import image
import logo5 from "./../images/logo5.png";

//import boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Navbar, Modal } from "react-bootstrap";

//import routes
import { NavLink } from "react-router-dom";

//import components

export default class Header extends Component {
  state = {
    show: false,
    userName: "",
    password: "",
    userNameError: "",
    passwordError: "",
    formValid: false,
  };
  constructor(props) {
    super(props);
    this.refrence = React.createRef();
  }
  //   addingRefButton() {
  //     this.refrence.current.focus();
  //   }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let isValid = this.validate();

    if (isValid) {
      this.setState({ formValid: true });
    }
    // console.log(this.state);
  };
  validate = () => {
    let userNameError = "";
    let passwordError = "";

    if (!this.state.userName) {
      userNameError = "user name can not empty";
    }

    if (this.state.userName) {
      if (!this.state.userName.match(/^[a-zA-Z]+$/)) {
        userNameError = "please enter only letters";
      }
    }

    if (!this.state.password) {
      passwordError = "password can not empty";
    }

    if (userNameError || passwordError) {
      this.setState({ userNameError, passwordError });
      return false;
    }

    if (!userNameError || !passwordError) {
      this.setState({ userNameError :"", passwordError:""});
    }

    return true;
  };

  render() {
    return (
      <>
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
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      id="login"
                      to="/"
                      exact
                      onClick={() => {
                        this.setState({ show: true })
                        // this.addingRefButton.bind(this)
                      }}
                    >
                      LOG IN
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" id="signup" to="/signup">
                      SIGN UP
                    </NavLink>
                  </li>
                </div>
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

          <Modal
            className="login-modal"
            show={this.state.show}
            ref={this.refrence}
            onHide={() => this.setState({ show: false })}
          >
            <Modal.Body>
              <Modal.Title className="title-login text-center mx-2">
                <h2>
                  Welcome <span>back</span>
                </h2>
                <p className="text-white px-2">
                  Do not have account ?{" "}
                  <NavLink
                    to="/signup"
                    onClick={() => this.setState({ show: false })}
                  >
                    Sign up
                  </NavLink>
                </p>
              </Modal.Title>
              <Form
                action="#"
                className="form-login py-4"
                onSubmit={this.handleSubmit.bind(this)}
              >
                <div className="form-fields mb-4">
                  <Form.Label>User name :</Form.Label>
                  <Form.Control
                    // required
                    type="text"
                    className="mb-2 mt-1"
                    id="username"
                    name="userName"
                    placeholder="User"
                    value={this.state.userName}
                    onChange={this.handleChange.bind(this)}
                  ></Form.Control>
                  <div className="form-validate">
                    {this.state.userNameError}
                  </div>
                </div>
                <div className="form-fields">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control
                    // required
                    type="password"
                    className="mb-2 mt-1"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange.bind(this)}
                  ></Form.Control>
                  <div className="form-validate">
                    {this.state.passwordError}
                  </div>
                </div>
                <NavLink className="forgot mb-4" to="/" alt="">
                  Forget your password?
                </NavLink>

                <div className="mt-5 form-group w-75">
                  <Button
                    className="btn-block login"
                    variant="none"
                    id="submit"
                    value="Submit"
                    onClick={
                      this.state.formValid
                        ? () => this.setState({ show: false })
                        : () => this.setState({ show: true })
                    }
                    type="submit"
                  >
                    LOG IN
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
