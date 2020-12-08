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
// import { createBrowserHistory } from "history";

//import contexts
import { Context } from "../Contexts";

//import utils
import { LoginUtil } from "../utils";
import { errorMessage, successMessage } from "../utils/messages";

//import services
import { login } from "../Services/userService";

class Login extends Component {
  state = {
    modal: false,
    type: "password",
    errors: {
      username: "",
      password: "",
    },
    username: "",
    password: "",
    redirect: false,
    loading: false,
  };

  static contextType = Context;

  toggle = () => {
    this.setState({ modal: !this.state.modal });
    this.resetInputs();
  };

  VisiblePassword = () => {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  };

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  handleChangeLogin = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length < 6 && value.match(/[a-zA-Z0-9]+$/)
            ? "Username must be 6 characters long!"
            : value.match(/^[a-zA-Z0-9]+$/ && value.length > 6)
              ? ""
              : !value.match(/[a-zA-Z]+/) && value.length >= 6
                ? "Username can not be only number"
                : (!value.match(/^[a-zA-Z0-9]+$/) && 1 < value.length < 6) ||
                  (!value.match(/^[a-zA-Z0-9]+$/) && value.length > 6)
                  ? "please enter correct"
                  : "";

        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password at least must be 8 characters long!"
            : "";
        break;
      default:
        return this.state;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmitLogin = (event) => {
    event.preventDefault();
    if (
      this.validateForm(this.state.errors) &&
      this.state.username &&
      this.state.password
    ) {
      console.info("Valid Form");
      this.goAccount();
      this.blurModal(this.state.loading)
    } else {
      console.error("Invalid Form");
      this.blurModal(this.state.loading)

    }
  };

  resetInputs = () => {
    this.setState({
      username: "",
      password: "",
      loading: false,
      errors: {
        username: "",
        password: "",
      },
    });
  };

  blurModal = (loading) => {
    let modalBody = document.querySelector('.form-login')
    let inputElem = document.querySelectorAll('.form-control')
    let button = document.querySelector('.login')

    if (loading) {
      modalBody.style.filter = 'blur(2px)'
      inputElem.forEach((item) => item.setAttribute('disabled', true))
      button.setAttribute('disabled', true)
    } else if (!loading) {
      modalBody.style.filter = 'blur(0px)'
      inputElem.forEach((item) => item.removeAttribute('disabled', true))
      button.removeAttribute('disabled', true)
    }
    // this.setState({ loading: true });
  }

  goAccount = async () => {
    this.setState({ loading: true });
    try {
      const { data, status } = await login(this.state);
      if (status === 200) {
        successMessage("You have logged in successfully");
        LoginUtil(data);
        this.setState({ loading: false });
        this.setState({ redirect: true });
      }
      // this.props.dispatch({type:"LOGIN" , payload : data})
    } catch (err) {
      if (err.response && err.response.status === 400) {
        errorMessage("Username or Password is invalid");
        
      }
      
      this.setState({ loading: false });
      this.blurModal(this.state.loading)
      this.resetInputs();
    }
  };


  render() {
    const { errors, redirect, loading } = this.state;

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
            <ModalHeader className="title-login text-center">
              {/* <h2 className="h2"> */}
              Welcome <span>back</span>
              {/* </h2> */}
              <p className="text-white">
                Do not have account ? <NavLink className="back-to-signup" to="/signup">Sign up</NavLink>
              </p>
            </ModalHeader>

            {loading && <Loader />}

            <Form
              className="form-login py-4"
              onSubmit={(e) => this.handleSubmitLogin(e)}
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
                  value={this.state.username}
                  onChange={(e) => this.handleChangeLogin(e)}
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
                    value={this.state.password}
                    onChange={(e) => this.handleChangeLogin(e)}
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
                    this.state.username &&
                    this.state.password
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
