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

//import services
import { login } from "./../Services/userService";

class Login extends Component {
  state = {
    modal: false,
  };

  static contextType = Context;

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // validateForm = (errors) => {
  //   let valid = true;
  //   Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  //   return valid;
  // };

  // handleChangeLogin = (event) => {
  //   event.preventDefault();

  //   const { name, value } = event.target;
  //   let errors = this.state.errors;

  //   switch (name) {
  //     case "username":
  //       if (value.length < 6 && value.match(/[a-zA-Z0-9]+$/)) {
  //         errors.username = "Username must be 6 characters long!";
  //       } else if (value.match(/^[a-zA-Z0-9]+$/ && value.length > 6)) {
  //         errors.username = "";
  //       } else if (!value.match(/[a-zA-Z]+/) && value.length >= 6) {
  //         errors.username = "Username can not be only number";
  //       } else if (
  //         (!value.match(/^[a-zA-Z0-9]+$/) && 1 < value.length < 6) ||
  //         (!value.match(/^[a-zA-Z0-9]+$/) && value.length > 6)
  //       ) {
  //         errors.username = "please enter correct";
  //       } else {
  //         errors.username = "";
  //       }
  //       break;
  //     case "password":
  //       errors.password =
  //         value.length < 8
  //           ? "Password at least must be 8 characters long!"
  //           : "";
  //       break;
  //     default:
  //       return this.state;
  //   }

  //   this.setState({ errors, [name]: value });
  // };

  // handleSubmitLogin = (e) => {
  //   event.preventDefault();
  //   if (
  //     this.validateForm(this.state.errors) &&
  //     this.state.username &&
  //     this.state.password
  //   ) {
  //     console.info("Valid Form");
  //     this.goAccount();
  //   } else {
  //     console.error("Invalid Form");
  //   }
  // };

  // goAccount = async () => {
  //   this.setState({ loading: true });
  //   try {
  //     const { data, status } = await login(this.state);
  //     if (status === 200) {
  //       successMessage("You have logged in successfully");
  //     }

  //     localStorage.setItem("token", data);
  //     // this.props.dispatch({type:"LOGIN" , payload : data.Username})
  //     this.setState({ redirect: true });
  //     this.resetInputs();
  //     this.setState({ loading: false });

  //     // this.props.history.push({
  //     //     pathname: "/account",
  //     //     state: { username: this.state.username },
  //     // });

  //     // this.props.history.history.history.push({
  //     //     // pathname: "/account",
  //     //     state: { username: this.state.username },
  //     // });
  //   } catch (err) {
  //     if (err.response && err.response.status === 400) {
  //       this.setState({ loading: false });
  //       errorMessage("Username or Password is invalid");
  //     }
  //   }
  // };

  // resetInputs = () => {
  //   this.setState({
  //     username: "",
  //     password: "",
  //   });
  // };

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
    console.log("Login context", this.context);
    // console.log("Login : renderred");

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
                  variant="none"
                  id="submit"
                  value="Submit"
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
