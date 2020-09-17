import React, { Component } from "react";

//import css
import "./../css/Login.css";
import "./../css/mediaLogin.css";
import "./../css/toastify.css";

//import boostrap
import { Form } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

//import components
import Loader from "./Loader";

//import routes
import { NavLink, Redirect } from "react-router-dom";

//import packages
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";


//import contexts
import { Context } from "./Contexts";


class Login extends Component {
  state = {
    modal: false,
  };

  static contextType = Context;

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("Login : getDerivedStateFromProps");
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Login : shouldComponentUpdate");
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("Login : getSnapshotBeforeUpdate");
  //   return null;
  // }

  // componentDidUpdate() {
  //   console.log("Login : componentDidUpdate");
  // }

  render() {
    const { errors, redirect, loading } = this.context;
    // console.log("Login context", this.context);

    if (redirect) {
      return <Redirect to={{ pathname: "/account" }} />;
    }
    return (
      <React.Fragment>
        <ToastContainer limit={1} />
        <li className="nav-item">
          <NavLink
            className="nav-link"
            id="login"
            to="/"
            exact
            onClick={this.toggle.bind(this)}
          >
            LOG IN
          </NavLink>
        </li>
        <Modal
          className="login-modal"
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
        >
          <ModalBody>
            <ModalHeader className="title-login text-center mx-2">
              <h2>
                Welcome <span>back</span>
              </h2>
              <p className="text-white px-2">
                Do not have account ? <NavLink to="/signup">Sign up</NavLink>
              </p>
            </ModalHeader>

            {loading && <Loader />}

            <Form
              className="form-login py-4"
              onSubmit={(e) => this.context.handleSubmitLogin(e)}
            >
              <div className="form-fields mb-4">
                <Form.Label>Username :</Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                  className="mb-1 mt-1"
                  id="username"
                  name="username"
                  placeholder="User name"
                  value={this.context.username}
                  onChange={(e) => this.context.handleChangeLogin(e)}
                ></Form.Control>
                {errors.username.length > 0 && (
                  <span className="form-validate">{errors.username}</span>
                )}
              </div>
              <div className="form-fields">
                <Form.Label>Password :</Form.Label>
                <Form.Control
                  type="text"
                  className="mb-1 mt-1"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={this.context.password}
                  onChange={(e) => this.context.handleChangeLogin(e)}
                ></Form.Control>
                {errors.password.length > 0 && (
                  <span className="form-validate">{errors.password}</span>
                )}
              </div>
              <NavLink className="forgot mb-4" to="/" alt="">
                Forget your password?
              </NavLink>

              <div className="mt-5 form-button w-75">
                <Button
                  className={`btn-block login ${
                    !errors.username &&
                    !errors.password &&
                    this.context.username &&
                    this.context.password
                      ? ""
                      : "disabled"
                  }`}
                  id="submit"
                  variant="none"
                  type="submit"
                >
                  LOG IN
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//       username: state.username,
//     };
// }

export default Login;
