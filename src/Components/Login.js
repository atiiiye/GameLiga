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
    type: "password",
  };

  static contextType = Context;

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.context.resetInputs()
  };

  VisiblePassword = () => {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  };
  componentDidMount() {
        // if (this.context.redirect) {
        //   return <Redirect to={{ pathname: "/account" }} />;
        // }
  }

  render() {
    const { errors, redirect, loading } = this.context;

    if (redirect) {
      return (<Redirect to={{ pathname: "/account" }} />)
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
            <ModalHeader className="title-login text-center">
              {/* <h2 className="h2"> */}
                Welcome <span>back</span>
              {/* </h2> */}
              <p className="text-white">
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
                />
                {errors.username.length > 0 && (
                  <span className="form-validate">{errors.username}</span>
                )}
              </div>
              <div className="form-fields">
                <Form.Label>Password :</Form.Label>
                <div className="password-block">
                  <Form.Control
                    type={this.state.type}
                    className="mb-1 mt-1"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={this.context.password}
                    onChange={(e) => this.context.handleChangeLogin(e)}
                  />
                  <i
                    className="far fa-eye"
                    onClick={this.VisiblePassword.bind(this)}
                  />
                </div>
                {errors.password.length > 0 && (
                  <span className="form-validate">{errors.password}</span>
                )}
              </div>
              <NavLink className="forgot mb-4" to="/" alt="">
                Forget your password?
              </NavLink>

              <div className="mt-5 form-button w-75">
                <Button
                  className={`btn-block login ${!errors.username &&
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
